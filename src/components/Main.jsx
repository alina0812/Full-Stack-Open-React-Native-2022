import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import MyReviews from './MyReviews';
import theme from '../theme';
import SignIn from './SignIn';
import SignUp from './SignUp';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
  InnerContainer: {
    paddingVertical: 15,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
        <AppBar />
        <View style={styles.InnerContainer}>  
          <Routes>
            <Route path="/" element={<RepositoryList />} exact />
            <Route path="/repositories/:repositoryId" element={<SingleRepository />} exact />
            <Route path="/myReviews" element={<MyReviews/>} exact />
            <Route path="/createReview" element={<CreateReview/>} exact />
            <Route path="/signIn" element={<SignIn/>} exact />
            <Route path="/signUp" element={<SignUp/>} exact />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </View>
    </View>
  );
};

export default Main;