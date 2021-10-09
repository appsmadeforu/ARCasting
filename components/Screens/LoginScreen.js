import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../../firebase";
import CustomButton from "../Reusable/CustomButton";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
      })
      .catch((error) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with - ", user.email);
      })
      .catch((error) => alert(error.message));
  };
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(pass) => setPassword(pass)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <CustomButton onPress={handleLogin} title="Login" />
      <Text>Haven't Registered yet?</Text>
      <Text> Click on the button below to register</Text>
      <CustomButton onPress={handleRegister} title="Register" />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 1,
    width: 250,
    borderRadius: 5,
    height: 45,
    marginTop: 20,
  },
  buttonContainer: { width: "60%", justifyContent: "center" },
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
