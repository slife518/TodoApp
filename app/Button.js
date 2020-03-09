import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

const Button = ({submitTodo, title, style}) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      style={[styles.button, style]}
      onPress={submitTodo}>
      <Text style={styles.submit}>{title}</Text>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'flex-end',
  },
  button: {
    height: 50,
    backgroundColor: '#ffffff',
    width: 200,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: '#666666',
    fontWeight: '600',
  },
});
export default Button;
