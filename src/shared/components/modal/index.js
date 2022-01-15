import { Text, VStack, HStack } from '$components';

import React, { useCallback, useEffect, useRef } from 'react';
import { Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';

import styles from './style';
import { getIcon } from './icons';

const Modal = ({ show, onClose, children, snapPoints, title, icon }) => {
  const bottomSheetRef = useRef(null);

  const customHandle = useCallback(
    () => (
      <HStack justify="flex-end">
        <Pressable style={styles.xButton} onPress={() => bottomSheetRef.current?.close()}>
          {getIcon('close')}
        </Pressable>
      </HStack>
    ),
    []
  );

  useEffect(() => {
    if (bottomSheetRef.current && show) {
      bottomSheetRef.current.snapToIndex(0);
    }
  }, [show, bottomSheetRef.current]);

  return (
    <BottomSheet
      backdropComponent={(props) => (
        <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
      )}
      backgroundStyle={styles.modal}
      enablePanDownToClose
      handleComponent={customHandle}
      index={-1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onClose={onClose}
    >
      <VStack style={styles.container}>
        {icon && <VStack style={styles.icon}>{getIcon(icon)}</VStack>}
        {title && (
          <Text style={styles.title} weight="bold">
            {title}
          </Text>
        )}
        {children}
      </VStack>
    </BottomSheet>
  );
};

Modal.defaultProps = {
  children: null,
  icon: null,
  show: false,
  snapPoints: ['60%'],
  title: null,
};

Modal.propTypes = {
  /* Modal content */
  children: PropTypes.node,
  /* Modal icon */
  icon: PropTypes.string,
  /* Action to perform onClose */
  onClose: PropTypes.func.isRequired,
  /* Modal show/hide trigger */
  show: PropTypes.bool,
  /* Modal snap points */
  snapPoints: PropTypes.arrayOf(PropTypes.string),
  /* Modal title */
  title: PropTypes.string,
};

export default Modal;
