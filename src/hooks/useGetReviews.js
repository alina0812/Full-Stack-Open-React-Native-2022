import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useGetReviews = () => {

    const { data, error, loading } = useQuery(GET_ME, {fetchPolicy: 'cache-and-network', variables: {"includeReviews": true}}); 

  return { user: data && data.me, error, loading };
};

export default useGetReviews;