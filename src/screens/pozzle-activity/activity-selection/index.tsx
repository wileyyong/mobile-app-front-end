import {
  CloseIcon,
  HStack,
  Button,
  VStack,
  Spacer,
  Text,
  LocationPinIcon,
} from '$components';
import { Colors, Scaling } from '$theme';

import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';
import ActivityVerb from '../activity-verb';
import { verbsItems } from './utils';
import { Activities } from '$api';
import { activityModel } from 'src/shared/api/activities/models';
import { translateGPStoLocation } from '../utils';
import { useSelector } from 'react-redux';

type ActivityVerbSelectionType = {
  show: boolean;
  selectedActivity: any;
  onSelect: (item?: string) => void;
  onClose: () => void;
  setLocationName: (locationName: string) => void;
};

const ActivitySelection = ({
  show,
  selectedActivity,
  onSelect,
  onClose,
  setLocationName,
}: ActivityVerbSelectionType) => {
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const inputRef = useRef(TextInput);
  const [page, setPage] = useState(1);
  const [hasData, setHasData] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activitiesList, setActivitiesList] = useState<activityModel[]>([]);
  const [activityTitle, setActivityTitle] = useState<string | null>();
  const [activityVerb, setActivityVerb] = useState(verbsItems[0]);
  const [hasSelectedVerb, setHasSelectedVerb] = useState(
    selectedActivity?.title ? true : false,
  );
  const { t } = useTranslation();
  const closeIconColor = Colors.WHITE;

  const translateLocation = async (location: any) => {
    const result = await translateGPStoLocation(location);
    return result;
  };

  const getActivities = async () => {
    if (noMoreData) return;
    if (isLoading) return;
    setIsLoading(true);
    /*  To Do: Imeplement user GPS locations */
    await Activities.get({
      title: activityTitle ? activityTitle : '',
      page: page,
    }).then(
      async (_activities: { data: activityModel[] }) => {
        if (_activities.data.length <= 0) setNoMoreData(true);
        setActivitiesList([...activitiesList, ..._activities.data]);
        setHasData(true);
        setPage(page + 1);
        setIsLoading(false);
      },
      () => {
        setHasData(false);
      },
    );
  };

  const preSelectVerb = () => {
    const verb = selectedActivity.title.split(' ')[0];
    setActivityVerb(verb);
    const title = selectedActivity.title.replace(verb, '');
    setActivityTitle(title);
  };

  const capitalizeTitle = (title: string) => {
    return title.replace(/\b(\w)/g, s => s.toUpperCase());
  };

  const selectItem = async (item: any) => {
    if (item._id) {
      item.newActivity = false;
      setLocationName(item.location.locationName);
      setActivityTitle(item.title);
    } else {
      item.title = activityVerb + ' ' + capitalizeTitle(item.title.trim());
      item.newActivity = true;
      // To Do: User GPS coordinates
      const locationName = await translateLocation({
        coordinates: ['-0.118092', '51.509865'],
      });
      item.location.locationName = locationName;
      setLocationName(locationName);
      setActivityTitle(item.title);
    }
    onSelect(item);
    setPage(1);
    setActivityTitle(null);
    setHasData(false);
    setNoMoreData(false);
    setActivitiesList([]);
    onClose();
  };

  const renderListHeader = () => {
    return (
      <View>
        <Text
          style={styles.listHeader}
          children={t('pozzleActivityScreen.joinSuggestActivities')}></Text>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <CloseIcon color={closeIconColor} size="medium" />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <>
        {noMoreData ? (
          <Text color={Colors.WHITE} style={styles.loading}>
            {t('pozzleActivityScreen.noMoreActivities')}
          </Text>
        ) : (
          <Text color={Colors.WHITE} style={styles.loading}>
            {t('pozzleActivityScreen.loadingActivities')}
          </Text>
        )}
      </>
    );
  };

  const renderListItem = (item: { item: activityModel }) => {
    const newItem = item.item;
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          selectItem(newItem);
        }}>
        <View style={styles.activitiesListItem}>
          <Text style={styles.itemTitle} children={newItem.title}></Text>
          <HStack style={{ flexDirection: 'row' }}>
            <Text
              style={styles.itemPozzles}
              children={
                newItem.pozzleCount.toString() +
                ' ' +
                t('pozzleActivityScreen.pozzlesAdded')
              }></Text>
            <LocationPinIcon
              height={28}
              width={12}
              style={styles.itemPin}
              color={Colors.FIFTYPERCENTWHITE}
              size={'medium'}></LocationPinIcon>
            <Text
              style={styles.itemLocation}
              children={newItem.location?.locationName}></Text>
          </HStack>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderList = () => {
    return (
      <View style={styles.activitiesListView}>
        {renderListHeader()}
        {!hasData ? (
          <Text color={Colors.WHITE} style={styles.loading}>
            {t('pozzleActivityScreen.loadingActivities')}
          </Text>
        ) : (
          <FlatList
            extraData={activitiesList}
            onEndReached={() => {
              getActivities();
            }}
            data={activitiesList}
            renderItem={renderListItem}
            ListFooterComponent={renderFooter}
            keyExtractor={(item: activityModel, index) => index.toString()}
          />
        )}
      </View>
    );
  };

  const renderVerbContainer = () => {
    return (
      <HStack
        style={{
          marginBottom: Scaling.scale(15),
        }}
        align="flex-start"
        justify="space-between">
        <ActivityVerb
          color={Colors.THIRTYPERCENTBLACK}
          label={activityVerb}
          onSelect={selectedVerb => {
            setHasSelectedVerb(true);
            setActivityVerb(selectedVerb);
          }}
          onShow={() => {
            if (isVerbsSelectionVisible === false) setVerbsSelection(true);
          }}
          onDismiss={() => {
            setVerbsSelection(false);
          }}
          data={verbsItems}></ActivityVerb>
        {isVerbsSelectionVisible ? (
          <></>
        ) : (
          <HStack style={styles.modalActivityInputs}>
            <TextInput
              defaultValue={activityTitle ? activityTitle : ''}
              ref={inputRef}
              style={styles.activityInput}
              onChange={({ nativeEvent: { eventCount, target, text } }) => {
                setActivityTitle(text);
                if (text.length >= 2) {
                  setActivitiesList([]);
                }
                if (text.length === 0 || text.length >= 2) {
                  setPage(1);
                  setHasData(false);
                  setNoMoreData(false);
                  getActivities();
                }
              }}
            />
            {redux.hasActivity && activityTitle?.length > 0 ? (
              <TouchableOpacity
                style={styles.clearInputIcon}
                onPress={() => {
                  setActivityTitle(null);
                  onSelect();
                }}>
                <CloseIcon color={closeIconColor} size="small" />
              </TouchableOpacity>
            ) : (
              <></>
            )}

            <HStack
              style={{
                minWidth: Scaling.scale(100),
              }}
              align="flex-end">
              <Button
                style={{ marginBottom: Scaling.scale(15) }}
                size={'small'}
                disabled={!activityTitle || !hasSelectedVerb}
                onPress={() => {
                  // To Do: User GPS coordinates
                  selectItem({
                    title: activityTitle,
                    location: {
                      coordinates: ['-0.118092', '51.509865'],
                    },
                  });
                }}>
                <Text style={styles.activityBtn}>
                  {t('pozzleActivityScreen.create')}
                </Text>
              </Button>
            </HStack>
          </HStack>
        )}
      </HStack>
    );
  };

  useEffect(() => {
    if (inputRef && inputRef.current && show) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 150);
    }
    if (!hasData && show) {
      getActivities();
    }
  }, [inputRef, show, hasData]);

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide"
      visible={show}
      onShow={() => {
        if (selectedActivity?.title) preSelectVerb();
      }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}>
        <VStack
          align="flex-end"
          justify="space-between"
          style={styles.modalContainer}>
          {isVerbsSelectionVisible ? <></> : renderList()}
          <Spacer height={20}></Spacer>
          {renderVerbContainer()}
        </VStack>
      </KeyboardAvoidingView>
    </Modal>
  );
};

ActivitySelection.defaultProps = {
  selectedActivity: null,
  onSelect: () => {},
  onClose: () => {},
  setLocationName: () => {},
  show: false,
};

ActivitySelection.propTypes = {
  selectedActivity: PropTypes.object,
  onSelect: PropTypes.func,
  setLocationName: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default ActivitySelection;
