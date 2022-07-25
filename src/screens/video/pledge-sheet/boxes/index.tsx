import React, { useRef } from 'react';

import { Spacer, VStack } from '$components';
import { FlatList, Keyboard } from 'react-native';
import Box from './box';
import CustomBox from './customBox';

interface IPledge {
  setPozPledge: (value: number) => void;
  pozPledge: number;
}

const PledgeBoxes = ({ setPozPledge, pozPledge }: IPledge) => {
  const defaultPledge = [0.1, 0.25, 0.5, 0];

  return (
    <VStack>
      <FlatList
        numColumns={2}
        scrollEnabled={false}
        data={defaultPledge}
        ItemSeparatorComponent={() => <Spacer height={10} />}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => {
          if (item === 0)
            return <CustomBox pozPledge={pozPledge} updatePoz={setPozPledge} />;

          return (
            <Box
              pozPledge={pozPledge}
              onPress={() => {
                Keyboard.dismiss();
                setPozPledge(item);
              }}
              item={item}
            />
          );
        }}
      />
    </VStack>
  );
};

export default PledgeBoxes;
