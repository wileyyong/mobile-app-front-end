import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Pozzlers } from '$api';
import { filterActivities, filterPozzlers } from './utils';
import styles from './styles';
import { Loader } from '$components';
import { PozzlersSection } from '$components';
import{useTranslation} from "react-i18next"

interface Props {
  search: string;
}
const index = ({ search }: Props) => {

  let {t} = useTranslation()
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [fetching, setFetching] = useState(true);

  const getPozzlers = async () => {
    try {
      let response = await Pozzlers.get();
      console.log(response.data);
      setData(response.data);

      setFiltered(response.data);

      setFetching(false);
 
    } catch (error) {
  
      setFetching(false);
      setError(t("Couldn't fetch Pozzlers"))
    }
  };

  useEffect(() => {
    getPozzlers();
  }, []);

  useEffect(() => {
    setFiltered(filterPozzlers(data, search));
  }, [search]);

  return (
    <View style={styles.activity}>
      {fetching ? (
        <Loader tab="Pozzlers" />
      ) : error ? (
        <Loader refresh={getPozzlers} error={error} />
      ) : null}
      {filtered != undefined && filtered.length > 0 ? (
        <FlatList
          style={styles.scroll}
          data={filtered}
          renderItem={({ item }) => <PozzlersSection item={item} />}
          keyExtractor={id => id.id}
        />
      ) : (
        <Text style={styles.text}>
          {!fetching && !error ? t('No search results') : ''}
        </Text>
      )}
    </View>
  );
};

export default index;
