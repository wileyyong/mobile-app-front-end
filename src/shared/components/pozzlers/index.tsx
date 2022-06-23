import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Users } from '$api';
import { filterActivities, filterPozzlers } from './utils';
import styles from './styles';
import { Loader } from '$components';
import { PozzlersSection } from '$components';
import { useTranslation } from 'react-i18next';

interface Props {
  search: string;
}
const index = ({ search }: Props) => {
  let { t } = useTranslation();
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [fetching, setFetching] = useState(true);

  const getPozzlers = async () => {
    try {
      let response = await Users.get();

      setData(response.data);

      setFiltered(response.data);

      setFetching(false);
    } catch (error) {
      setFetching(false);
      setError(t('DiscoveryScreen.couldntpoz'));
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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={styles.scroll}
          data={filtered}
          renderItem={({ item }) => <PozzlersSection item={item} />}
          keyExtractor={id => id.id}
        />
      ) : (
        <Text style={styles.text}>
          {!fetching && !error ? t('DiscoveryScreen.noresults') : ''}
        </Text>
      )}
    </View>
  );
};

export default index;
