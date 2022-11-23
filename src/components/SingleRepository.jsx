import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useParams } from 'react-router-native';

import Repository from './Repository';
import ReviewItem from './ReviewItem';
import useRepository from '../hooks/useRepository';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepository = () => {
    let { repositoryId } = useParams();
    const { repository } = useRepository(repositoryId);

    const reviews = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];
  
    return (
        <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={() => <Repository repository={repository} />}
        ItemSeparatorComponent={ItemSeparator}
      />
    );
  };
  
  export default SingleRepository;