import { Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";
import theme from '../theme';

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
  },
});

const AppBar = () => {
  return <SafeAreaView style={styles.container}>
    <ScrollView horizontal>
      <Pressable>
        <Link to="/RepositoryList">
          <Text style = {styles.text}>Repositories</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link to="/SignIn">
          <Text style = {styles.text}>Sign in</Text>
        </Link>
      </Pressable>
    </ScrollView>
  </SafeAreaView>;
};

export default AppBar;