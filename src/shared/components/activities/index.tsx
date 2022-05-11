import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Activities } from '$api';
import { filterActivities } from './utils';
import styles from './styles';
import { Loader } from '$components';
import { Section } from '$components';

interface Props {
  search: string;
}
const index = ({ search }: Props) => {
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  const [fetching, setFetching] = useState(true);

  const getActivities = async () => {
    try {
      let response = await Activities.get({ page: 1 });
      console.log(response.data);
      setData(response.data);

      setFiltered(response.data);

      setFetching(false);
      console.log(response.data);
    } catch (error) {
      console.log(error, 'call unsuccessful');
      setFetching(false);
      setError("Couldn't fetch Activities");
    }
  };

  useEffect(() => {
    getActivities();
  }, []);

  useEffect(() => {

    setFiltered(filterActivities(data, search));

  }, [search]);
  useEffect(() => {}, []);

  return (
    <View style={styles.activity}>
      {fetching ? <Loader tab="Activities" /> : error ? <Loader error={error} /> : null}
      {filtered != undefined && filtered.length > 0 ? (
        <FlatList
          style={styles.scroll}
          data={filtered}
          renderItem={({ item }) => (
            <Section item={item} query={search.length > 0 ? true : false} />
          )}
          keyExtractor={id => id.id}
        />
      ) : (
        <Text style={styles.text}>
          {!fetching && !error ? 'No search results' : ''}
        </Text>
      )}
    </View>
  );
};

export default index;
