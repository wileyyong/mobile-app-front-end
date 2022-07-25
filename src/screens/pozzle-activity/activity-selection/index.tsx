import {
  CloseIcon,
  HStack,
  Button,
  VStack,
  Spacer,
  Text,
  LocationPinIcon,
  IconButton,
  CheckMarkIcon,
  Input,
  PolygonIcon,
  CloseXIcon,
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
import { getLocationNameByGPS, getUserLocation, translateGPStoLocation } from '../utils';
import { useSelector } from 'react-redux'; 

type ActivityVerbSelectionType = {
  show: boolean;
  selectedActivity: any;
  onSelect: (item?: string) => void;
  onClose: (clearActivity: boolean) => void;
  setLocationName: (locationName: string) => void;
};

const ActivitySelection = ({
  show,
  selectedActivity,
  onSelect,
  onClose,
  setLocationName,
}: ActivityVerbSelectionType) => {
  const reduxUser = useSelector((state: any) => state.user);
  const redux = useSelector((state: any) => state.ProgressButtonRedux);
  const inputRef = useRef(TextInput);
  const [page, setPage] = useState(1);
  const [hasData, setHasData] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activitiesList, setActivitiesList] = useState<activityModel[]>([]);
  const [activityTitle, setActivityTitle] = useState<string | null>();
  const [activityVerb, setActivityVerb] = useState<string>();
  const [hasSelectedVerb, setHasSelectedVerb] = useState(
    selectedActivity?.title ? true : false,
  );
  const { t } = useTranslation();

  const translateLocation = async (location: any) => {
    const result = await translateGPStoLocation(location);
    return result;
  };

  const getActivities = async () => {
    if (noMoreData) return;
    if (isLoading) return;
    setIsLoading(true);
    /*  To Do: Implement user GPS locations to load default activities upon location */
    const searchQuery =
      (activityVerb && hasSelectedVerb ? activityVerb : '') +
      ' ' +
      (activityTitle ? activityTitle : '');

    await Activities.get({
      title: searchQuery,
      page: page,
    }).then(async (_activities: { data: activityModel[] }) => {
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
      const userLocation = reduxUser.user.location.coordinates;
      const locationName = await translateLocation({
        coordinates: [userLocation?.[0], userLocation?.[1]],
      });
      item.location.locationName = locationName;
      setLocationName(locationName);
      setActivityTitle(item.title);
    }
    setVerbsSelection(false);
    onSelect(item);
    setPage(1);
    setActivityTitle(null);
    setHasData(false);
    setNoMoreData(false);
    setActivitiesList([]);
    onClose(false);
  };

  const renderListHeader = () => {
    return isVerbsSelectionVisible ? (
      <View>
        <Text style={styles.listHeader}>
          {t('pozzleActivityScreen.chooseTitle')}
        </Text>
      </View>
    ) : (
      <View>
        <Text
          style={styles.listHeader}
          children={t('pozzleActivityScreen.joinSuggestActivities')}></Text>
        <TouchableOpacity
          style={styles.closeIcon}
          onPress={() => {
            setVerbsSelection(false);
            setPage(1);
            setActivityTitle(null);
            setHasData(false);
            setNoMoreData(false);
            setActivitiesList([]);
            setActivityVerb(undefined);
            onClose(true);
          }}>
          <CloseXIcon 
            width={15}
            height={15} 
            color={Colors.WHITE} 
            size="medium" />
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
            <PolygonIcon
              height={30}
              width={14}
              style={styles.pozzlesIcon}
              color={Colors.GRAY3}
              size={'medium'}></PolygonIcon>
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
              children={newItem.locationName}></Text>
          </HStack>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderList = () => {
    return isVerbsSelectionVisible ? (
      <View style={styles.activitiesListView}>{renderListHeader()}</View>
    ) : (
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
      <VStack
        align="flex-start"
        justify="space-around"
        style={{
          paddingHorizontal: Scaling.scale(12),
        }}>
        {!isVerbsSelectionVisible && (
          <Text style={styles.startNewActivity}>
            {t('pozzleActivityScreen.startNewActivity')}
          </Text>
        )}

        <HStack style={styles.hstackContainer}>
          <ActivityVerb
            color={Colors.THIRTYPERCENTBLACK}
            label={activityVerb || t('pozzleActivityScreen.prompt')}
            onSelect={selectedVerb => {
              setHasSelectedVerb(true);
              setActivityVerb(selectedVerb);
              setNoMoreData(false);
              setIsLoading(false);
              setHasData(false);
              setPage(1);
              setActivitiesList([]);
            }}
            onShow={() => {
              if (isVerbsSelectionVisible === false) setVerbsSelection(true);
            }}
            onDismiss={() => {
              setVerbsSelection(false);
            }}
            data={verbsItems}></ActivityVerb>
          {!isVerbsSelectionVisible && (
            <HStack style={styles.modalActivityInputs}>
              <Input
                styleContainer={[
                  activityTitle?.length > 0 && styles.activityInputWithData,
                ]}
                style={styles.activityInput}
                blurType={'light'}
                size={'full'}
                placeholder={t('pozzleActivityScreen.title')}
                value={activityTitle ? activityTitle : ''}
                reference={inputRef}
                onChangeText={text => {
                  setPage(1);
                  setActivityTitle(text);

                  if (text.length >= 2) {
                    setActivitiesList([]);
                  }
                  if (text.length === 0 || text.length >= 2) {
                    setHasData(false);
                    setNoMoreData(false);
                  }
                }}
              />
              {activityTitle?.length > 0 && (
                <TouchableOpacity
                  style={styles.clearInputIcon}
                  onPress={() => {
                    setActivityTitle(null);
                    onSelect();
                  }}>
                  <CloseIcon color={Colors.WHITE} />
                </TouchableOpacity>
              )}

              <HStack
                style={{
                  alignSelf: 'center',
                  paddingLeft: 10,
                }}>
                <TouchableOpacity
                  style={[
                    {
                      opacity: !activityTitle || !hasSelectedVerb ? 0.5 : 1,
                    },
                    styles.checkmarkButton,
                  ]}
                  disabled={!activityTitle || !hasSelectedVerb}
                  onPress={async () => { 
                    const userLocation = reduxUser.user.location.coordinates;
                    await getLocationNameByGPS(userLocation?.[0], userLocation?.[1]).then((locationName)=>{
                      setLocationName(locationName);
                      selectItem({
                        title: activityTitle,
                        location: {
                          coordinates: [userLocation?.[0], userLocation?.[1]],
                          locationName: locationName
                        },
                      });
                    })
                  
                  }}>
                  <CheckMarkIcon
                    size="medium"
                    color={Colors.WHITE}></CheckMarkIcon>
                </TouchableOpacity>
              </HStack>
            </HStack>
          )}
        </HStack>
      </VStack>
    );
  };

  useEffect(() => {
    if (inputRef && inputRef.current && show) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 150);
    }

    if (activityTitle || activityVerb) {
      getActivities();
    } else if (!hasData && show && !activityTitle && !activityVerb) {
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
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <VStack style={styles.modalContainer}>
          {renderList()}
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
