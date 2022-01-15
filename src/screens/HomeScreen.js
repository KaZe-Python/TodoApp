import React, { useContext, useState } from "react";
import { Text, StyleSheet, ScrollView, View, Keyboard } from "react-native";
import TaskComponent from "../components/TaskComponent";
import TaskInputComponent from "../components/TaskInputComponent";
import { TodoContext } from "../context/todoContext";

export default function HomeScreen({navigation}) {
  const {tasks, addTask} = useContext(TodoContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO App</Text>
      <ScrollView style={{ marginBottom: 70 }}>
        {tasks.map((v, i) => {
          return (
            <View key={i} style={styles.taskContainer}>
              <TaskComponent task={v} deleteTask={() => deleteTask(i)} navigation={navigation}/>
            </View>
          );
        })}
      </ScrollView>
      <TaskInputComponent addTask={addTask} />
    </View>
  );
}

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
