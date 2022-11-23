import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const { repositories } = useRepositories();
  let navigate = useNavigate();

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
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
    />
  );
};

export default RepositoryList;