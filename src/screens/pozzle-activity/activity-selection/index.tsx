import {
  CloseIcon,
  Input,
  Dropdown,
  HStack,
  Button,
  VStack,
  Spacer,
  Text,
  LocationIcon,
  LocationPinIcon,
  BlurView,
} from '$components';
import { Colors, Scaling, TextAlign } from '$theme';
import { getLocation } from '$utils';

import React, { useState, useRef, useEffect } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  FlatList,
  RefreshControl,
} from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';
import ActivityVerb from '../activity-verb';
import { verbsItems } from './utils';
import { Activities } from '$api';
import { activityModel } from 'src/shared/api/activities/models';
import { translateGPStoLocation } from '../utils';

type ActivityVerbSelectionType = {
  show: boolean;
  selectedActivity: any;
  onSelect: (item: string) => void;
  onClose: () => void;
};

const ActivitySelection = ({
  show,
  selectedActivity,
  onSelect,
  onClose,
}: ActivityVerbSelectionType) => {
  const inputRef = useRef<any | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [hasData, setHasData] = useState(false);
  const [noMoreData, setNoMoreData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activitiesList, setActivitiesList] = useState<activityModel[]>([]);
  const [activityTitle, setActivityTitle] = useState<string | null>(null);
  const [activityVerb, setActivityVerb] = useState(verbsItems[0]);
  const { t } = useTranslation();
  const closeIconColor = Colors.WHITE;

  const getActivities = async () => {
    console.log('getActivities ', noMoreData, ' ', isLoading);
    if (noMoreData) return;
    if (isLoading) return;
    setIsLoading(true);
    console.log('getActivities ', page);
    /*  lat: 38.7223,
      long: 9.1393,*/
    await Activities.get({
      title: activityTitle ? activityTitle : '',
      page: page,
    }).then(
      (_activities: { data: activityModel[] }) => {
        //console.log('_activities.data', _activities.data);

        if (_activities.data.length <= 0) setNoMoreData(true);
        setActivitiesList([..._activities.data, ...activitiesList]);
        setHasData(true);
        setPage(page + 1);
        setIsLoading(false);
      },
      err => {
        setHasData(false);
      },
    );
  };

  const selectItem = (item: any) => {
    if (item._id) {
      item.newActivity = false;
      setActivityTitle(item.title);
    } else {
      item.newActivity = true;
      setActivityTitle(item);
    }
    onSelect(item);
    onClose();
  };

  const renderListHeader = () => {
    return (
      <View>
        <Text
          style={styles.listHeader}
          children={'Join Suggested Activities'}></Text>
        <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
          <CloseIcon color={closeIconColor} />
        </TouchableOpacity>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <>
        {noMoreData ? (
          <Text color={Colors.WHITE} style={styles.loading}>
            No More Activities
          </Text>
        ) : (
          <Text color={Colors.WHITE} style={styles.loading}>
            Loading More Activities...
          </Text>
        )}
      </>
    );
  };

  const renderListItem = (item: any) => {
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
                newItem.pozzleCount.toString() + ' Pozzles Added'
              }></Text>
            <LocationPinIcon
              height={28}
              width={12}
              style={styles.itemPin}
              color={Colors.TWENTYPERCENTWHITE}
              size={'medium'}></LocationPinIcon>
            <Text
              style={styles.itemLocation}
              children={translateGPStoLocation(newItem)}></Text>
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
            Loading Activities...
          </Text>
        ) : (
          <FlatList
            onEndReached={() => {
              console.log('onEndReached');
              getActivities();
            }}
            data={activitiesList}
            renderItem={renderListItem}
            ListFooterComponent={renderFooter}
            keyExtractor={(item: any, index) => item._id}
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
          //  backgroundColor: 'black',
          width: '100%',
        }}
        align="flex-start"
        justify="space-between">
        <ActivityVerb
          color={Colors.THIRTYPERCENTBLACK}
          label={activityVerb}
          onSelect={setActivityVerb}
          onShow={() => {
            setVerbsSelection(true);
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
              defaultValue={selectedActivity?.title || ''}
              ref={inputRef}
              style={styles.activityInput}
              onChangeText={text => {
                setActivityTitle(text);
                if (text.length === 3) setActivitiesList([]);
                if (text.length >= 3) {
                  setPage(1);
                  setHasData(false);
                  setNoMoreData(false);
                  getActivities();
                }
              }}
            />
            <HStack
              style={{
                minWidth: Scaling.scale(100),
              }}
              align="flex-end">
              <Button
                style={{ marginBottom: Scaling.scale(15) }}
                size={'small'}
                disabled={!activityTitle}
                onPress={() => {
                  selectItem({
                    title: activityTitle,
                    location: { coordinates: ['London', 'England'] },
                  });
                }}>
                <Text style={styles.activityBtn}>Create</Text>
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
        //inputRef?.current?.focus();
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
      visible={show}>
      <VStack
        align="flex-end"
        justify="space-between"
        style={styles.modalContainer}>
        <Spacer height={20}></Spacer>
        {isVerbsSelectionVisible ? <></> : renderList()}
        <Spacer height={20}></Spacer>
        {renderVerbContainer()}
      </VStack>
    </Modal>
  );
};

ActivitySelection.defaultProps = {
  selectedActivity: null,
  onSelect: () => {},
  onClose: () => {},
  show: false,
};

ActivitySelection.propTypes = {
  selectedActivity: PropTypes.object,
  onSelect: PropTypes.func,
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

export default ActivitySelection;
/*
 inputContainerStyle={styles.activityInputContainer}
              inputBoxStyle={styles.activityInput}
 <Dropdown
                  size="small"
                  label={activityVerb.label}
                  data={verbsItems}
                  onSelect={setActivityVerb}
                  backgroundColor={Colors.TRANSPARENT}
                  color={Colors.EIGHTYPERCENTWHITE}
                ></Dropdown>

<KeyboardAvoidingView
behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
style={styles.container}
>
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
</TouchableWithoutFeedback>
</KeyboardAvoidingView>

 <Input
                  placeholder={`${t('activityScreen.activityTitle')}*`}
                  size="medium"
                  value={activityTitle}
                  style={styles.activityInput}
                  onChangeText={(text) => setActivityTitle(text)}
                />
                <Button size={'small'} disabled={!activityVerb && !activityTitle}>
                  <Text>Create</Text>
                </Button>


*/
