import { useApolloClient, useQuery } from '@apollo/client';

import useAuthStorage from '../hooks/useAuthStorage';
import { GET_ME } from '../graphql/queries';

const useSignOut = () => {
    const authStorage = useAuthStorage();
    const apolloClient = useApolloClient();
    const { data, error, loading } = useQuery(GET_ME, {fetchPolicy: 'cache-and-network'});   
  
    const signOut = async () => {
        await authStorage.removeAccessToken();
        apolloClient.resetStore();
    };

    return { user: data && data.me, signOut};
  };

  export default useSignOut;