import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={{
          width: 150,
          borderRadius: 10,
          marginVertical: 10,
          backgroundColor: "#003366",
          color: "white",
          height: 40,
          fontSize: 18,
          textAlignVertical: "center",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
