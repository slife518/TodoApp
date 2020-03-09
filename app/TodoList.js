import React from 'react';
import {View} from 'react-native';
import Todo from './Todo';

const TodoList = ({todos}) => {
  todos = todos.map((todo, i) => {
    console.log('i 는 ', todo.title);
    return <Todo key={todo.todoIndex} todo={todo} />;
  });

  return <View>{todos}</View>;
};

export default TodoList;
