import React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CustomButton from "../Reusable/CustomButton";
import { auth } from "../../firebase";

const HomeScreen = ({ navigation }) => {
    const handleSignOut = () =>{
        auth.signOut().then(()=>{
            navigation.replace("Login")
        }).catch(error=>alert(error.message))
    }
  return (
    <View style={styles.container}>
      <Text>Welcome User - {auth.currentUser?.email}</Text>
      <StatusBar style="auto" />
      <CustomButton title="Sign Out" onPress={handleSignOut}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
