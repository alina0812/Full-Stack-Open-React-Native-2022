import { View, StyleSheet, Pressable } from 'react-native';
import * as Linking from 'expo-linking';

import RepositoryItem from './RepositoryItem';
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: 4,
    },
    pressable: {
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 8,
      height: 45,
      borderRadius: 4,
    },
    text: {
      fontSize: theme.fontSizes.subheading,
      fontWeight: theme.fontWeights.semibold,
      color: theme.colors.white,
      marginVertical: 2,
      },
  });


const Repository = ({repository}) => {
  return (
    <View style={styles.container}>
        {repository && <RepositoryItem item={repository}/>}
        {repository && 
            <Pressable style={styles.pressable} onPress={() => { Linking.openURL(repository.url)}}>
                <Text style={styles.text}>Open in GitHub</Text>
            </Pressable>}
    </View>

  );
};

export default Repository;