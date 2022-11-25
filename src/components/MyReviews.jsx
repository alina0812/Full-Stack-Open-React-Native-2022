import { View } from 'react-native';
import { FlatList, StyleSheet } from 'react-native';
import ReviewItem from './ReviewItem';
import useGetReviews from '../hooks/useGetReviews';

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const { user } = useGetReviews();

  const reviews = user
    ? user.reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewItem review={item} />}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
      />
  );
};

export default MyReviews;