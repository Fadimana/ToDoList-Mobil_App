import React from 'react';
import {TextInput, View, Button} from 'react-native';
import styles from './todo.style';
const Todo = ({value, setValue, id}) => {
  return (
    <View style={styles.info_container}>
      <TextInput
        style={styles.input}
        placeholder="Yapılacaklar"
        onChangeText={item => {
          setValue({title: item, id: id, isDone: 0});
          //console.log(item);
        }}
        value={value.title}
      />
    </View>
  );
};

export default Todo;
