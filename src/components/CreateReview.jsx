import { View } from 'react-native';
import { Formik} from 'formik';
import * as yup from 'yup';
import useReview from '../hooks/useReview';
import CreateReviewForm from './CreateReviewForm';
import { useNavigate } from 'react-router-native';

const validationSchema = yup.object().shape({
  Owner: yup
    .string()
    .required('Repository owner name is required'),
  Repository: yup
    .string()
    .required('Repository name is required'),
  Rating: yup
    .number()
    .min(0, "Rating must be bigger than 0")
    .max(100, "Rating must be smaller than 100")
    .required('Rating is required'),
  Review: yup
    .string()
    .optional()
});

const CreateReview = () => {

  const [createReview] = useReview();
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
        const { data } = await createReview(values);
        navigate(`../repositories/${data.createReview.repositoryId}`, { replace: true });
      } catch (e) {
        console.log(e);
      }
  };

  return (
    <View>
        <Formik
        initialValues={{Owner: '', Repository: '', Rating: '', Review: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReview;