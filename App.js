import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';

import global, {getId} from './components/global';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {
      id: global.lib.getId(),
      text: 'iPhone 14 Pro',
    },
    {
      id: global.lib.getId(),
      text: 'MacBook Air M2',
    },
    {
      id: global.lib.getId(),
      text: 'AirPods',
    },
  ]);

  const deleteItem = id =>
    setItems(prevItems => prevItems.filter(item => item.id != id));

  const addItemHandler = text => {
    if (text) {
      setItems([...items, {id: global.lib.getId(), text}]);
    } else {
      Alert.alert('Error', "Enter the shopping item first");
    }
  }

  return (
    <View style={styles.container}>
      <Header text={'Shopping List'} />
      <AddItem addItemHandler={addItemHandler} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem deleteItem={deleteItem} item={item} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: global.styles.header.paddingTop,
  },
});

export default App;
