import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { Activities } from '$api';
import { filterActivities } from './utils';
import styles from './styles';
import { Loader } from '$components';
import { Section } from '$components';
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

  const getActivities = async () => {
    setError(null);
    try {
      let response = await Activities.get({ page: 1 });
      setData(response.data);
      if(response.data.length<1){
        setError(t("No Activities "))
      }
      setFiltered(response.data);
      setFetching(false);
    } catch (error) {
      console.log(error)
      setFetching(false);
      setError(t("Couldn't get Activities"));
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
      {fetching ? (
        <Loader tab="Activities" />
      ) : error ? (
        <Loader refresh={getActivities} error={error} />
      ) : null}
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
          {!fetching && !error ? t('No search results') : ''}
        </Text>
      )}
    </View>
  );
};

export default index;
