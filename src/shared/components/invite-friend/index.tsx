import {
  Button,
  CustomBackdrop,
  InviteFriendIcon,
  Spacer,
  Text,
  VStack,
} from '$components';
import { Colors } from '$theme';
import BottomSheet from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style';

interface IProps {
  onCloseButtonPress: () => void;
}

function InviteFriend({ onCloseButtonPress }: IProps) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['40%', '40%'], []);

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const sendInvite = () => {};

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      handleComponent={() => null}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onCloseButtonPress}
      backdropComponent={CustomBackdrop}
      onChange={handleSheetChanges}>
      <View style={styles.content}>
        <VStack>
          <Spacer height={34} />

          <InviteFriendIcon color={Colors.DARK_PURPLE}/>

          <Spacer height={20} />
          <Text
            size="2md"
            style={{
              fontWeight: 'bold',
            }}
            translationKey={'InviteFriend.title'}
            color={Colors.DARK_PURPLE}
          />
          <Spacer height={20} />

          <Text
            style={styles.text}
            size="2xs"
            weight="semibold"
            translationKey="InviteFriend.description"
            color={Colors.SEVENTYPERCENTPURPLE}
          />

          <Spacer height={20} />

          <Button
            isLoading={false}
            onPress={sendInvite}
            backgroundColor={Colors.LIGHT_PURPLE}>
            <Text
              color={Colors.WHITE}
              weight="bold"
              translationKey="InviteFriend.sendInvite"
            />
          </Button>

          <Spacer height={20} />

          <TouchableOpacity activeOpacity={0.7} onPress={onCloseButtonPress}>
            <Text
              color={Colors.SEVENTYPERCENTPURPLE}
              weight="bold"
              translationKey="InviteFriend.close"
            />
          </TouchableOpacity>

          <Spacer height={20} />
        </VStack>
      </View>
    </BottomSheet>
  );
}
export default InviteFriend;
