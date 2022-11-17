import { View } from 'react-native';
import { Formik} from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .required('Username is required'),
  Password: yup
    .string()
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <View>
      <Formik
        initialValues={{Username: '', Password: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;