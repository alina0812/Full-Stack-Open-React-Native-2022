import { View, StyleSheet, Pressable } from 'react-native';
import { useParams } from 'react-router-native';
import * as Linking from 'expo-linking';

import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: 4,
    },
    input: {
      borderColor: theme.colors.input,
      placeholderTextColor: theme.colors.input,
      color: theme.colors.textSecondary,
      fontSize: theme.fontSizes.header2,
      borderWidth: 2,
      borderRadius: 4,
      padding: 10,
      paddingLeft: 15,
      marginVertical: 10,
      marginHorizontal: 8,
      height: 45,
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


const Repository = () => {
    let { repositoryId } = useParams();
    const { repository } = useRepository(repositoryId);
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