import React, { useState } from "react";
import { StyleSheet } from "react-native";

import Screen from "../components/Screen";
import {
  ErrorMessage,
  AppForm,
  AppFormField,
  SubmitButton,
} from "../components/forms";
import registerAPI from '../api/register';
import useAuth from "../auth/useAuth";
import authApi from '../api/auth'
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";


function RegisterScreen() {
  const registerApi = useApi(registerAPI.register);
  const loginApi = useApi(authApi.login);
  const { logIn } = useAuth();
  const [errorMsg, setErrorMsg] = React.useState('');

  const handleSubmit = async (user) => {
    const result = await registerApi.request(user.name, user.email, user.password);
    if (!result.ok){
      if(result.data) setErrorMsg(result.data.error);
      else{
        setErrorMsg('An unexpected error occurred.');
        console.log(result);
      }
      return; 
    } 
    setErrorMsg('');

    const resultLogin = await loginApi.request(user.email, user.password);
    logIn(resultLogin.data);
  }
  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <ErrorMessage error={errorMsg} visible={true} />
        <AppForm
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={handleSubmit}
        >
          <AppFormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Name"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
