import { View } from 'react-native';
import { Formik} from 'formik';
import SignUpForm from './SignUpForm';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  Username: yup
    .string()
    .required('Username is required')
    .min(1, "Username too short")
    .max(30, "Username too long"),
  Password: yup
    .string()
    .required('Password is required')
    .min(5, "Password too short")
    .max(50, "Password too long"),
  PasswordConfirmation: yup
    .string()
    .required('Password confirmation is required')
    .oneOf([yup.ref('Password')], 'Entered passwords are different'),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
        const { data } = await signUp(values);
        await signIn(values);
        navigate("../", { replace: true });
      } catch (e) {
        console.log(e);
      }
  };

  return (
    <View>
        <Formik
        initialValues={{Username: '', Password: '', PasswordConfirmation: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignUp;