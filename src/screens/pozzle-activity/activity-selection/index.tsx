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

import React, { useState, useRef } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';
import ActivityVerb from '../activity-verb';
import { useEffect } from 'react';

type ActivityVerbSelectionType = {
  show: boolean;
  onClose: () => void;
};

const ActivitySelection = ({ show, onClose }: ActivityVerbSelectionType) => {
  const verbsItems = [
    'Changing',
    'Cooking',
    'Discovering',
    'Helping',
    'Joining',
    'Learning',
    'Making',
    'Pledging',
    'Recommending',
    'Replacing',
    'Reusing',
    'Saving',
    'Shopping',
    'Showing',
    'Swapping',
    'Upcycling',
    'Using',
  ];

  const activitiesList = [
    {
      key: 1,
      title: 'Saving Water With Music',
      numPozzles: 42,
      location: 'Planet #3049',
    },
    {
      key: 2,
      title: 'Saving Water With Recycling',
      numPozzles: 23,
      location: 'Planet #3050',
    },
    {
      key: 3,
      title: 'Saving Water With Music',
      numPozzles: 54,
      location: 'Melbourne, Australia',
    },
    {
      key: 4,
      title: 'Saving Water With Music',
      numPozzles: 12,
      location: 'New York, USA',
    },
    {
      key: 5,
      title: 'Saving Water With Plants',
      numPozzles: 8,
      location: 'London, England',
    },
  ];

  const inputRef = useRef<any | undefined>(undefined);
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activityTitle, setActivityTitle] = useState<string | null>(null);
  const [activityVerb, setActivityVerb] = useState(verbsItems[0]);
  const { t } = useTranslation();
  const closeIconColor = Colors.WHITE;

  const renderListHeader = ({}) => {
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

  const renderListItem = (item: any) => {
    console.log('renderListItem Activity Selection', item);
    const newItem = item.item;
    return (
      <View style={styles.activitiesListItem}>
        <Text style={styles.itemTitle} children={newItem.title}></Text>
        <HStack style={{ flexDirection: 'row' }}>
          <Text
            style={styles.itemPozzles}
            children={newItem.numPozzles + ' Pozzles Added'}></Text>
          <LocationPinIcon
            height={28}
            width={12}
            style={styles.itemPin}
            color={Colors.TWENTYPERCENTWHITE}
            size={'medium'}></LocationPinIcon>
          <Text style={styles.itemLocation} children={newItem.location}></Text>
        </HStack>
      </View>
    );
  };

  const renderList = () => {
    console.log('renderList  Activity Selection');
    return (
      <View style={styles.activitiesListView}>
        <FlatList
          data={activitiesList}
          ListHeaderComponent={renderListHeader}
          renderItem={renderListItem}
        />
      </View>
    );
  };

  const renderVerbContainer = () => {
    console.log('renderVerbContainer  Activity Selection');
    return (
      <HStack>
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
              ref={inputRef}
              style={styles.activityInput}
              onChangeText={text => setActivityTitle(text)}
            />
            <Button size={'small'} disabled={!activityTitle}>
              <Text style={styles.activityBtn}>Create</Text>
            </Button>
          </HStack>
        )}
      </HStack>
    );
  };
  useEffect(() => {
    console.log('useEffect focus', isVerbsSelectionVisible);
    if (inputRef && inputRef.current && show) {
      console.log('useEffect focus show');

      setTimeout(() => {
        inputRef?.current?.focus();
      }, 150);
    }
  }, [inputRef, show]);

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide"
      visible={show}>
      <View style={styles.modalContainer}>
        <Spacer height={20}></Spacer>
        {isVerbsSelectionVisible ? <></> : renderList()}
        <Spacer height={20}></Spacer>
        {renderVerbContainer()}
      </View>
    </Modal>
  );
};

ActivitySelection.defaultProps = {
  onClose: () => {},
  show: false,
};

ActivitySelection.propTypes = {
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
