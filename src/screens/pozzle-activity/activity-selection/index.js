import { CloseIcon, Input, Dropdown, HStack, Button, VStack, Spacer, Text } from '$components';
import { Colors } from '$theme';
import { getLocation } from '$utils';

import React, { useState } from 'react';
import {
  Modal,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import styles from './style';
import ActivityVerb from '../activity-verb';

const ActivitySelection = ({ show, onClose }) => {
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
  const [isVerbsSelectionVisible, setVerbsSelection] = useState(false);
  const [activityTitle, setActivityTitle] = useState(null);
  const [activityVerb, setActivityVerb] = useState(verbsItems[0]);
  const { t } = useTranslation();
  const closeIconColor = Colors.WHITE;

  return (
    <Modal
      presentationStyle={'overFullScreen'}
      transparent={true}
      animationType="slide"
      visible={show}
    >
      <View style={styles.modalContainer}>
        <VStack>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <CloseIcon color={closeIconColor} />
          </TouchableOpacity>
          <Spacer height={20}></Spacer>
          <HStack justify="space-between" style={styles.modalContent}>
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
              data={verbsItems}
            ></ActivityVerb>
            {isVerbsSelectionVisible ? (
              <></>
            ) : (
              <HStack justify="space-between" style={styles.modalActivityInputs}>
                <Input
                  // placeholder={`${t('activityScreen.activityTitle')}*`}
                  value={activityTitle}
                  inputContainerStyle={styles.activityInputContainer}
                  inputBoxStyle={styles.activityInput}
                  onChangeText={(text) => setActivityTitle(text)}
                />
                <Button size={'small-minus'} disabled={!activityTitle}>
                  <Text style={styles.activityBtn}>Create</Text>
                </Button>
              </HStack>
            )}
          </HStack>
        </VStack>
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
