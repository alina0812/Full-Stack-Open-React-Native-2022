import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputInValid: {
    borderColor: theme.colors.errorText,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={[textInputStyle, error && styles.inputInValid]} {...props} />;
};

export default TextInput;