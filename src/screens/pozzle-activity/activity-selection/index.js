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
    { label: 'One', value: '1' },
    { label: 'Two', value: '2' },
    { label: 'Three', value: '3' },
    { label: 'Four', value: '4' },
    { label: 'Five', value: '5' },
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
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContainer}>
            <VStack>
              <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                <CloseIcon color={closeIconColor} />
              </TouchableOpacity>
              <Spacer height={20}></Spacer>
              <HStack style={styles.modalContent}>
                <ActivityVerb
                  color={Colors.THIRTYPERCENTBLACK}
                  label={activityVerb.label}
                  onSelect={setActivityVerb}
                ></ActivityVerb>
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
            </VStack>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
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
