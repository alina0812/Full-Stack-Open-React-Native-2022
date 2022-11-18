import { useApolloClient, useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHENTICATE);
  
    const signIn = async (values) => {
        const username = values.Username;
        const password = values.Password;
        const result = await mutate({ variables: { credentials: { username, password }}});
        await authStorage.setAccessToken(result.data.authenticate.accessToken);
        apolloClient.resetStore();

      return result;
    };


  
    return [signIn, result];
  };

  export default useSignIn;