import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (item, searchQuery, first) => {
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
    const query = {"orderBy": orderBy, "orderDirection": orderDirection, "searchKeyword": searchQuery, "first": first};
    const { data, error, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {fetchPolicy: 'cache-and-network', variables: query});

    const handleFetchMore = () => {
      const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

      if (!canFetchMore) {
        return;
      }
      fetchMore({
        variables: {
          after: data.repositories.pageInfo.endCursor,
          orderBy: orderBy,
          orderDirection: orderDirection,
          searchKeyword: searchQuery,
          first: first,
        },
      });
    };

  return { repositories: data?.repositories, error, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepositories;