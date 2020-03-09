/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from './Button';

const Todo = ({todo}) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}>{todo.title}</Text>
    <View style={styles.buttonContainer}>
      <Button
        submitTodo={todo.submitTodo}
        style={styles.todoButton}
        title="del"
      />
      <Button
        submitTodo={todo.submitTodo}
        style={styles.todoButton}
        title="done"
      />

    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#ededed',
    paddingLeft: 14,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    flex: 3,
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'flex-end', 
    flexDirection: 'row'
  },
  todoButton: {
    width: 40,
    margin: 5,
    marginBottom: 10,
    flexDirection: 'row',
    // alignSelf: 'flex-end',
  },
});
export default Todo;
