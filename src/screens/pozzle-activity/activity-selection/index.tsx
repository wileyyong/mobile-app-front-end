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
} from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';
import ActivityVerb from '../activity-verb';
import { activitiesList, verbsItems } from './utils';

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
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activityTitle, setActivityTitle] = useState<string | null>(null);
  const [activityVerb, setActivityVerb] = useState(verbsItems[0]);
  const { t } = useTranslation();
  const closeIconColor = Colors.WHITE;

  const selectItem = (item: any) => {
    setActivityTitle(item);
    onSelect(item);
    onClose();
  };

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
                newItem.numPozzles.toString() + ' Pozzles Added'
              }></Text>
            <LocationPinIcon
              height={28}
              width={12}
              style={styles.itemPin}
              color={Colors.TWENTYPERCENTWHITE}
              size={'medium'}></LocationPinIcon>
            <Text
              style={styles.itemLocation}
              children={newItem.location}></Text>
          </HStack>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderList = () => {
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
              defaultValue={selectedActivity?.title || ''}
              ref={inputRef}
              style={styles.activityInput}
              onChangeText={text => setActivityTitle(text)}
            />
            <Button
              size={'small'}
              disabled={!activityTitle}
              onPress={() => {
                selectItem({
                  title: activityTitle,
                  location: 'London, England',
                  newActivity: true,
                });
              }}>
              <Text style={styles.activityBtn}>Create</Text>
            </Button>
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
