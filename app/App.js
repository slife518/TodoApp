import React, {Component} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
let todoIndex = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };

    // 이거 왜 하는 지 이해 안감
    this.submitTodo = this.submitTodo.bind(this);
  }

  inputChange(inputValue) {
    console.log('Input value:', inputValue);
    this.setState({inputValue});
  }

  submitTodo() {
    if (this.state.inputValue.match(/^\s*$/)) {
      return;
    }
    console.log('Index : ', todoIndex);
    const todo = {
      title: this.state.inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;
    //기존 배열에 객체 추가
    const todos = [...this.state.todos, todo];

    this.setState({todos, inputValue: ''}, () => {
      console.log('State:', this.state);
    });
  }
  render() {
    let {inputValue, todos} = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            placeholder={'What needs to be done?'}
            inputValue={inputValue}
            inputChange={text => this.inputChange(text)}
          />
          <Button
            submitTodo={this.submitTodo}
            title="저장"
            style={{width: 200, marginRight: 20}}
          />
          <TodoList todos={todos} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});
export default App;
