import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
    const { data, error, loading } = useQuery(GET_REPOSITORY, {fetchPolicy: 'cache-and-network', variables: {"id": id}});

  return { repository: data && data.repository, error, loading };
};

export default useRepository;