import React, { useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TodoContext } from "../context/todoContext";

export default TaskComponent = (props) => {
  const {changeState, removeTask} = useContext(TodoContext);

  const handleDone = () => {
    return props.task.done
      ? { backgroundColor: "#297373" }
      : { backgroundColor: "#ff8558" };
  };

  return (
    <View>
      <TouchableOpacity onLongPress={() => props.navigation.push('edit')}>
        <View style={[styles.taskContainer, handleDone()]}>
          <TouchableOpacity style={{paddingRight:10}}>
            <MaterialIcons
              name={props.task.done ? "done-all" : "remove-done"}
              size={20}
              color="#fff"
              onPress={() => changeState(props.task.id)}
            />
          </TouchableOpacity>
          <Text style={styles.task}>{props.task.obj}</Text>
          <TouchableOpacity onPress={() => removeTask(props.task.id)}>
            <MaterialIcons name="delete" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    minHeight: 50,
    marginHorizontal: 10,
  },
  task: {
    color: "#e6e6e6",
    width: "90%",
    fontSize: 16,
  },
});
