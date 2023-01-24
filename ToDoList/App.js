import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Todo from './src/companent/todo';
import SaveButton from './src/companent/saveButton';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
function App() {
  const [text, setText] = useState({title: '', id: undefined, isDone: 0});
  const [list, setList] = useState([]);
  const [id, setId] = useState(0);
  console.log(list);
  const renderSeperator = () => <View style={styles.seperator}></View>;

  const handleDeleteTaskPress = index => {
    setList(list.filter(item => item.id !== index));
  };

  const handleCheckPress = index => {
    const a = list.map(item => {
      if (item.id === index) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    setList(a);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.flatcontainer}>
        <TouchableOpacity
          style={{flex: 11}}
          onPress={() => {
            handleCheckPress(item.id);
          }}>
          <View style={{flex: 11, flexDirection: 'row'}}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5
                style={{fontSize: 20}}
                name={'calendar-check'}
                solid
              />
            </View>
            <View style={{flex: 10}}>
              <Text style={item.isDone ? styles.doneTodoText : styles.flattext}>
                {item.title}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDeleteTaskPress(item.id)}
          activeOpacity={0.2}>
          <View style={styles.dlttext}>
            <FontAwesome5 style={{fontSize: 20}} name={'trash-alt'} solid />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.title}>To Do List :{list.length}</Text>

        <View>
          <Todo value={text} setValue={setText} id={id} />
        </View>
        <SaveButton
          value={text}
          setValue={setText}
          list={list}
          setList={setList}
          setId={setId}
          id={id}
        />
        <View>
          <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={renderSeperator}
          />
        </View>
      </View>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  flatcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingVertical: 12,

    // justifyContent: 'center',
  },
  flattext: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
    paddingBottom: 2,
  },
  doneTodoText: {
    fontSize: 20,
    flex: 1,
    marginLeft: 10,
    paddingBottom: 2,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  dlttext: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
