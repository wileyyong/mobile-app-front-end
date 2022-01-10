import React, { useEffect, useMemo, useRef, useCallback } from 'react';
import { StyleSheet, Pressable } from 'react-native';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';

import VStack from '../../shared/components/stacks/VStack';
import Text from '../../shared/components/text/Text';
import Button from '../../shared/components/button/Button';
import { colors } from '../../shared/theme/colors';

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
        <Button style={styles.button} backgroundColor={colors.pink} onPress={() => {}}>
          <Text color={colors.white}>Use Generalised Location</Text>
        </Button>
      </VStack>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  icon: {
    padding: 10,
  },
  title: {
    padding: 10,
  },
  li: {
    padding: 5,
  },
  x: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  explainer: {
    backgroundColor: colors.gray6,
    borderRadius: 15,
    padding: 15,
    margin: 10,
    width: '100%',
  },
  button: {
    marginVertical: 20,
  },
});

LocationSheet.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
};

export default LocationSheet;
