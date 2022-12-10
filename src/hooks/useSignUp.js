import {  useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

const useSignUp = () => {
    const [mutate, result] = useMutation(CREATE_USER);
  
    const signUp = async (values) => {
        const username = values.Username;
        const password = values.Password;
        const result = await mutate({ variables: { user: { username, password }}});

      return result;
    };

    return [signUp, result];

};

export default useSignUp;