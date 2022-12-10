import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useReview = () => {
    const [mutate, result] = useMutation(CREATE_REVIEW);
  
    const createReview = async (values) => {
        const ownerName = values.Owner;
        const repositoryName = values.Repository;
        const rating = values.Rating;
        const text = values.Review;
        const result = await mutate({ variables: { review: { ownerName: ownerName, repositoryName: repositoryName, rating: Number(rating), text: text }}});
      return result;
    };
  
    return [createReview, result];
  };

  export default useReview;