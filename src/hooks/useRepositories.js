import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (item, searchQuery) => {
    let orderBy = null;
    let orderDirection = null;
    if(item == "Latest repositories") {
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
    } else if (item == "Highest rated repositories") {
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
    } else if (item == "Lowest rated repositories") {
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
    }
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', variables: {"orderBy": orderBy, "orderDirection": orderDirection, "searchKeyword": searchQuery}});

  return { repositories: data && data.repositories, error, loading };
};

export default useRepositories;