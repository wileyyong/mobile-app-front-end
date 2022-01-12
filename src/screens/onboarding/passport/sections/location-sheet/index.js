import VStack from '$components/stacks/VStack';
import Text from '$components/text/Text';
import Button from '$components/button/Button';
import { Colors } from '$theme';

import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';

import styles from '../../style';

const LocationSheet = ({ show, onClose }) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['60%'], []);

  const customHandle = useCallback(
    () => (
      <Pressable style={styles.x} onPress={() => bottomSheetRef.current?.close()}>
        <Text
          style={{
            textAlign: 'right',
          }}
        >
          x
        </Text>
      </Pressable>
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
      backdropComponent={(props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />}
      enablePanDownToClose
      handleComponent={customHandle}
      index={-1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      onClose={onClose}
    >
      <VStack style={styles.container}>
        <Text style={styles.icon}>icon</Text>
        <Text style={styles.title}>Why do we ask for Location?</Text>
        <VStack style={styles.explainer}>
          <Text size="xs" style={styles.title}>
            Generalized Location means:
          </Text>
          <VStack align="flex-start">
            <Text size="xs" style={styles.li} weight="regular">
              ∙ your specific location never sent from your phone
            </Text>
            <Text size="xs" style={styles.li} weight="regular">
              ∙ your specific location is converted to a general location (e.g town or state) by your phone before being
              sent
            </Text>
            <Text size="xs" style={styles.li} weight="regular">
              ∙ other things
            </Text>
          </VStack>
        </VStack>
        <Button backgroundColor={Colors.PINK} style={styles.button} onPress={() => {}}>
          <Text color={Colors.WHITE}>Use Generalised Location</Text>
        </Button>
      </VStack>
    </BottomSheet>
  );
};

LocationSheet.defaultProps = {
  show: false,
};

LocationSheet.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

export default LocationSheet;
