import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, onEndReach }) => {

    let navigate = useNavigate();

    const repositoryNodes = repositories
      ? repositories.edges.map((edge) => edge.node)
      : [];

    const renderItem = ({ item }) => (
        <Pressable onPress={() => { navigate(`/repositories/${item.id}`, { replace: true });}}>
          <RepositoryItem item={item} />
        </Pressable>
      );

    return (
        <FlatList
        data={repositoryNodes}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
        />
    );
  };