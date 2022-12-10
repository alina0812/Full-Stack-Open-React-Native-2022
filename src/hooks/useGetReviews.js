import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useGetReviews = () => {

    const { data, error, loading, refetch } = useQuery(GET_ME, {fetchPolicy: 'cache-and-network', variables: {"includeReviews": true}}); 

  return { user: data && data.me, error, loading, refetch };
};

export default useGetReviews;