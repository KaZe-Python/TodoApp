import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

function createID(){ // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    async function getTasks() {
      const data = await AsyncStorage.getItem('@tasks');
      const jsTasks = data!=null ? JSON.parse(data) : null;
      setTasks(jsTasks)
    }
    getTasks()
  }, [])

  useEffect(() => {
    async function updateData() {
      const data = JSON.stringify(tasks);
      await AsyncStorage.setItem('@tasks', data);
    }
    updateData()
  }, [tasks])

  const addTask = text => {
    setTasks([...tasks, {id: createID(), obj: text, done: false}]);
  }

  const removeTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const changeState = id => {
    setTasks(tasks.map(task => {
      if(task.id === id){
        return {...task, done: !task.done};
      } 
      return task;
    }))
  }

  return (
    <TodoContext.Provider value={{tasks, addTask, removeTask, changeState}}>
        {props.children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider;