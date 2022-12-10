import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from "./Text";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.white,
      padding: 4,
    },
    input: {
      borderColor: theme.colors.input,
      placeholderTextColor: theme.colors.input,
      color: theme.colors.textSecondary,
      fontSize: theme.fontSizes.header2,
      borderWidth: 2,
      borderRadius: 4,
      padding: 10,
      paddingLeft: 15,
      marginVertical: 10,
      marginHorizontal: 8,
      height: 45,
    },
    pressable: {
      backgroundColor: theme.colors.primary,
      alignItems: "center",
      padding: 10,
      marginVertical: 10,
      marginHorizontal: 8,
      height: 45,
      borderRadius: 4,
    },
    text: {
      fontSize: theme.fontSizes.header2,
      fontWeight: theme.fontWeights.bold,
      color: theme.colors.white,
      marginVertical: 2,
      },
  });

const SignUpForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="Username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="Password"
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />
      <FormikTextInput
        name="PasswordConfirmation"
        placeholder="Password confirmation"
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.pressable}>
        <Text style={styles.text}>Sign up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;