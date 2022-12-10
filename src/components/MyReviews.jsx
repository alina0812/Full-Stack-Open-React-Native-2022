import { Pressable, View } from 'react-native';
import { Alert, FlatList, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import ReviewItem from './ReviewItem';
import useGetReviews from '../hooks/useGetReviews';
import useDeleteReview from '../hooks/useDeleteReview';
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    container: {
        backgroundColor: theme.colors.white,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
      },
      pressable1: {
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 4,
        height: 45,
        borderRadius: 4,
        flexBasis: '45%',
      },
      pressable2: {
        backgroundColor: theme.colors.errorText,
        alignItems: "center",
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 4,
        height: 45,
        borderRadius: 4,
        flexBasis: '45%',
      },
      text: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.semibold,
        color: theme.colors.white,
        marginVertical: 2,
        },
  });

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {

  const { user, refetch } = useGetReviews();
  const [deleteReview] = useDeleteReview();
  let navigate = useNavigate();

  const reviews = user
    ? user.reviews.edges.map(edge => edge.node)
    : [];

  return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => 
                <View>
                    <ReviewItem review={item} />
                    <View style={styles.container}>
                        <Pressable style={styles.pressable1} onPress={() => { navigate(`/repositories/${item.repository.id}`, { replace: true });}}>
                            <Text style={styles.text}>View repository</Text>
                        </Pressable>
                        <Pressable style={styles.pressable2} onPress={async () => { 
                                        try {
                                          Alert.alert(
                                            "Delete review",
                                            "Are you sure you want to delete this review?",
                                            [
                                              {
                                                text: "CANCEL",
                                              },
                                              { text: "DELETE", onPress: () => {deleteReview(item.id);
                                                refetch();} }
                                            ]
                                          );
                                        } catch (e) {
                                            console.log(e);
                                        }}}>
                            <Text style={styles.text}>Delete review</Text>
                        </Pressable>
                    </View>
                </View>}
            keyExtractor={({ id }) => id}
            ItemSeparatorComponent={ItemSeparator}
        />
  );
};

export default MyReviews;