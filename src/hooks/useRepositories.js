import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (item) => {
    console.log(item);
    let orderBy = null;
    let orderDirection = null;
    if(item == "Latest repositories") {
      console.log("1")
      orderBy = "CREATED_AT";
      orderDirection = "DESC";
    } else if (item == "Highest rated repositories") {
      console.log("2")
      orderBy = "RATING_AVERAGE";
      orderDirection = "DESC";
    } else if (item == "Lowest rated repositories") {
      console.log("3")
      orderBy = "RATING_AVERAGE";
      orderDirection = "ASC";
    }
    console.log(orderBy);
    console.log(orderDirection);
    const { data, error, loading } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', variables: {"orderBy": orderBy, "orderDirection": orderDirection}});

  return { repositories: data && data.repositories, error, loading };
};

export default useRepositories;