import React, {
  Component,
  Fragment,
  PureComponent,
  ReactNode,
  useRef,
  useState,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import { Spacer } from '../../stacks';
import styles from './style';

const ActionSheetPZ = ({ options }) => {
  const actionSheetRef = useRef<ActionSheet>(null);
  const [actionSheetOptions, setActionSheetOptions] = useState<any>(options);

  const color = actionSheetOptions.defaultColor;
  const destructiveColor = actionSheetOptions.destructiveColor;
  const sameUser = actionSheetOptions.sameUser;

  const renderList = () => {
    return (
      <Fragment>
        <RenderListItem
          previouLast={false}
          lastItem={false}
          fn={actionSheetOptions.sharePozzle}
          option={actionSheetOptions.options[0]}
          icon={actionSheetOptions.icons[0]}
          color={color}
          key={actionSheetOptions.options[0]}></RenderListItem>
        <RenderListItem
          previouLast={sameUser ? false : true}
          lastItem={false}
          fn={actionSheetOptions.reportPozzle}
          option={actionSheetOptions.options[1]}
          icon={actionSheetOptions.icons[1]}
          color={color}
          key={actionSheetOptions.options[1]}></RenderListItem>
        {sameUser ? (
          <Fragment>
            <RenderListItem
              previouLast={true}
              lastItem={false}
              fn={actionSheetOptions.deletePozzle}
              option={actionSheetOptions.options[2]}
              icon={actionSheetOptions.icons[2]}
              color={destructiveColor}
              key={actionSheetOptions.options[2]}></RenderListItem>

            <Spacer height={10} />
            <RenderListItem
              previouLast={false}
              lastItem={true}
              fn={actionSheetOptions.closeSheet}
              option={actionSheetOptions.options[3]}
              icon={actionSheetOptions.icons[3]}
              color={color}
              key={actionSheetOptions.options[3]}></RenderListItem>
          </Fragment>
        ) : (
          <Fragment>
            <Spacer height={10} />
            <RenderListItem
              previouLast={false}
              lastItem={true}
              fn={actionSheetOptions.closeSheet}
              option={actionSheetOptions.options[2]}
              icon={actionSheetOptions.icons[2]}
              color={color}
              key={actionSheetOptions.options[2]}></RenderListItem>
          </Fragment>
        )}
      </Fragment>
    );
  };

  return (
    <SafeAreaView style={styles.safeareview}>
      <ActionSheet
        initialOffsetFromBottom={1}
        id={'options'}
        CustomHeaderComponent={<></>}
        ref={actionSheetRef}
        statusBarTranslucent
        bounceOnOpen={false}
        drawUnderStatusBar={true}
        bounciness={0}
        gestureEnabled={true}
        defaultOverlayOpacity={0.6}
        containerStyle={styles.optsContainer}>
        {actionSheetOptions && (
          <View style={[styles.container, { height: sameUser ? 205 : 150 }]}>
            {renderList()}
          </View>
        )}
      </ActionSheet>
    </SafeAreaView>
  );
};

export default ActionSheetPZ;

class RenderListItem extends PureComponent {
  render() {
    const { option, icon, color, fn, lastItem, previouLast } = this.props;
    return (
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor={'#B4B4B4'}
        style={[
          styles.button,
          previouLast && styles.previouLast,
          lastItem && styles.lastItem,
        ]}
        onPress={() => {
          fn();
        }}>
        <>
          {icon && <View style={styles.icon}>{icon}</View>}
          <Text style={[styles.text, { color }]}>{option}</Text>
        </>
      </TouchableHighlight>
    );
  }
}
