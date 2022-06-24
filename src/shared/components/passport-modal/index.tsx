import { HStack, PassportData } from '$components';
import { showPassportModal } from 'src/redux/generic/actions';
import React, { useCallback, useEffect, useRef } from 'react';
import { Platform, Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetScrollView,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import styles from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IPassportView {
  userId: string;
}

const PassportView = ({ userId, ...props }: IPassportView) => {
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const customHandle = useCallback(() => <></>, []);

  return (
      <BottomSheet
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
        enablePanDownToClose
        keyboardBehavior="interactive"
        index={0}
        ref={bottomSheetRef}
        snapPoints={[Platform.OS === 'android' ? '80%' : '70%']}
        onClose={() => {
          dispatch(showPassportModal(false,undefined));
        }}
        android_keyboardInputMode="adjustResize"
        handleComponent={customHandle}>
        <BottomSheetScrollView>
          <PassportData userId={userId} otherUserPassport={true}></PassportData>
        </BottomSheetScrollView>
      </BottomSheet> 
  );
};

export default PassportView;
