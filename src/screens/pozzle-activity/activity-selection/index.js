import { CloseIcon, Input, Dropdown, HStack, VStack, Spacer, Button, Text } from '$components';
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
  const [activityTitle, setActivityTitle] = useState('');
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
          <HStack style={styles.modalContent}>
            <ActivityVerb
              color={Colors.THIRTYPERCENTBLACK}
              label={activityVerb}
              onSelect={setActivityVerb}
              data={verbsItems}
            ></ActivityVerb>
            <HStack style={styles.modalActivityInputs}>
              <Input
                placeholder={`${t('activityScreen.activityTitle')}*`}
                size="medium"
                value={activityTitle}
                onChangeText={(text) => setActivityTitle(text)}
              />
              <Button size={'small'}>
                <Text>Done</Text>
              </Button>
            </HStack>
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
</KeyboardAvoidingView>*/
