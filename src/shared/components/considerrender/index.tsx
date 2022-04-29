import React,{ useState} from "react"

import { FlatList,Text } from "react-native"; 
import {Section, PozzlersSection} from "$components"
import styles from "./styles"
 
const considerRender = (
  filtered: any[],
  query: string,
  tab: string,
  pozfilter: any[],
) => {
  let data = tab === 'activities' ? filtered : pozfilter;

  if (filtered.length > 0) {
    return (
      <FlatList
        style={styles.scroll}
        data={data}
        renderItem={({ item }) =>
          tab == 'activities' ? (
            <Section item={item} query={query.length > 0 ? true : false} />
          ) : (
            <PozzlersSection item={item} />
          )
        }
        keyExtractor={id => id.id}
      />
    );
  } else {
    return (
      <Text style={styles.text}>
        {tab === 'activities'
          ? 'No Matching Activity'
          : 'No Pozzlers for the Search query'}
      </Text>
    );
  }
};

export default considerRender