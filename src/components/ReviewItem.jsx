import { StyleSheet, Text, View } from 'react-native';
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
      },
      nameAndDescription: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
      },
      circle: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginHorizontal: 10,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center"
      },
      rating: {
        color: theme.colors.primary,
        fontWeight: theme.fontWeights.bold,
        },
      name: {
          color: theme.colors.textPrimary,
          fontWeight: theme.fontWeights.bold,
          marginTop: 3,
      },
      description: {
          color: theme.colors.textSecondary,
          marginVertical: 3,
      },
      text: {
          color: theme.colors.textPrimary,
          fontWeight: theme.fontWeights.normal,
          marginTop: 2,
          flex: 1,
      }
  });

const ReviewItem = ({ review }) => {
    const timestamp = new Date (review.createdAt);
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.rating}>{review.rating}</Text>
            </View>
            <View style={styles.nameAndDescription}>
                <Text style={styles.name}>{review.user.username}</Text>
                <Text style={styles.description}>{timestamp.getDate() + '.' + timestamp.getMonth() + '.' + timestamp.getFullYear()}</Text>
                <Text style={styles.text}>{review.text}</Text>
            </View> 
        </View>
    )
  };

  export default ReviewItem;