import VStack from '$components/stacks/VStack';
import Text from '$components/text/Text';
import Button from '$components/button/Button';

import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';

import { colors } from '../../../shared/theme/colors';

import styles from './style';

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
      index={-1}
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      handleComponent={customHandle}
      backdropComponent={(props) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />}
    >
      <VStack style={styles.container}>
        <Text style={styles.icon}>icon</Text>
        <Text style={styles.title}>Why do we ask for Location?</Text>
        <VStack style={styles.explainer}>
          <Text style={styles.title} size="xs">
            Generalized Location means:
          </Text>
          <VStack align="flex-start">
            <Text weight="regular" style={styles.li} size="xs">
              ∙ your specific location never sent from your phone
            </Text>
            <Text weight="regular" style={styles.li} size="xs">
              ∙ your specific location is converted to a general location (e.g town or state) by your phone before being
              sent
            </Text>
            <Text weight="regular" style={styles.li} size="xs">
              ∙ other things
            </Text>
          </VStack>
        </VStack>
        <Button style={styles.button} backgroundColor={colors.PINK} onPress={() => {}}>
          <Text color={colors.WHITE}>Use Generalised Location</Text>
        </Button>
      </VStack>
    </BottomSheet>
  );
};

LocationSheet.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LocationSheet;
