import { Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import theme from '../theme';

import useSignOut from '../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: theme.colors.appBar,
  },
  text: {
    color: theme.colors.white,
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.header,
    paddingTop: 70,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const AppBar = () => {
  const { signOut, user } = useSignOut();

  return <SafeAreaView style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
        <Link to="/RepositoryList">
          <Text style = {styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      {user && (
          <Link to="/createReview">
              <Text style = {styles.text}>Create a review</Text>
          </Link>
        )}    
      {user ? (
          <Pressable onPress = {signOut}>
              <Text style = {styles.text}>Sign out</Text>
          </Pressable>
        ) : (
          <Pressable>
            <Link to="/signIn">
              <Text style = {styles.text}>Sign in</Text>
            </Link>
          </Pressable>
          )}    
      
    </ScrollView>
  </SafeAreaView>;
};

export default AppBar;