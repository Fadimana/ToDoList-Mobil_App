import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './todo.style';
const SaveButton = ({value, setValue, list, setList, id, setId}) => {
  //  function onPressBtn(){
  //         setValue(value + 1);
  //       }

  const handleAddTaskPress = () => {
    setList([...list, value]);
    setValue({title: '', id: undefined, isDone: 0});
    setId(id + 1);
  };
  return (
    <View style={styles.btncontainer}>
      <TouchableOpacity
        style={styles.btn}
        onPress={
          value.title === ''
            ? () => alert('Boş Bırakılamaz.')
            : handleAddTaskPress
        }>
        <Text style={styles.btntext}>KAYDET</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SaveButton;
