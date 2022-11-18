import { useMutation } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/mutations';

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTHENTICATE);
  
    const signIn = async (values) => {
        const username = values.Username;
        const password = values.Password;
        const result = await mutate({ variables: { credentials: { username, password }}});
      return result;
    };
  
    return [signIn, result];
  };

  export default useSignIn;