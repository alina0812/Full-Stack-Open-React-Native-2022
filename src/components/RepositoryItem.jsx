import { Image, StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 15,
      },
      ImageAndName: {
          display: 'flex',
          flexDirection: 'row',
      },
      NameAndDescription: {
          display: 'flex',
          flexDirection: 'column',
      },
      image: {
          width: 50,
          height: 50,
          borderRadius: 5,
          marginHorizontal: 10,
        },
      name: {
          color: theme.colors.textPrimary,
          fontSize: 20,
          marginVertical: 3,
      },
      description: {
          color: theme.colors.textSecondary,
          marginVertical: 3,
      },
      language: {
          backgroundColor: theme.colors.primary,
          color: '#fff',
          borderRadius: 5,
          width: 80,
          textAlign: 'center',
          paddingVertical: 3,
          marginVertical: 3,
      },
      Properties: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          flexWrap: 'nowrap',
          marginTop: 5,
      },
      item: {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          textAlign: 'center',
      },
      number: {
          textAlign: 'center',
          fontWeight: theme.fontWeights.bold,
          color: theme.colors.textPrimary,
          marginVertical: 2,
      },
      text: {
          textAlign: 'center',
          fontWeight: theme.fontWeights.normal,
          color: theme.colors.textSecondary,
          marginTop: 2,
      }
  });

const RepositoryItem = ({item}) => {
    let forks = item.forksCount;
    if (forks > 1000){
        forks = Math.round((forks/1000)*10)/10 + 'k';
    }
    let stars = item.stargazersCount;
    if (stars > 1000){
        stars = Math.round((stars/1000)*10)/10 + 'k';
    }
    let reviews = item.reviewCount;
    if (reviews > 1000){
        reviews = Math.round((reviews/1000)*10)/10 + 'k';
    }
    return (
    <View style={styles.container}>
        <View style={styles.ImageAndName}>
            <Image source={{ uri: `${item.ownerAvatarUrl}` }}  style={styles.image}/>
            <View style={styles.NameAndDescription}>
                <Text style={styles.name} >{item.fullName}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.language}>{item.language}</Text>
            </View>
        </View>

        <View style={styles.Properties}>
            <View style={styles.item}>
                <Text style={styles.number}>{stars} </Text>
                <Text style={styles.text}>Stars</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.number}>{forks}</Text>
                <Text style={styles.text}>Forks</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.number}>{reviews}</Text>
                <Text style={styles.text}>Reviews</Text>
            </View>
            <View style={styles.item}>
                <Text style={styles.number}>{item.ratingAverage}</Text>
                <Text style={styles.text}>Rating</Text>
            </View>
        </View>
    </View>
)};

export default RepositoryItem;