import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

export default EditScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Screen</Text>
      <Button onPress={() => navigation.pop()} title="Go Back" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#39393a",
  },
  heading: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#e6e6e6",
    marginTop: 30,
    marginLeft: 20,
  },
  taskContainer: {
    marginTop: 20,
  },
});
