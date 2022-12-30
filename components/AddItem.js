import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const AddItem = ({ addItemHandler }) => {
   const [input, setInput] = useState("");

   return(
      <View>
         <TextInput placeholder='Add Item...' placeholderTextColor="#000" style={styles.input} onChangeText={(value) => setInput(value)} />
         <TouchableOpacity style={styles.btn} onPress={() => addItemHandler(input)}>
            <Text style={styles.btnText}>Add Item</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   input: {
      height: 60,
      padding: 8,
      fontSize: 16,
   },

   btn: {
      backgroundColor: "#c2bad8",
      padding: 9,
      margin: 5
   },

   btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center'
   }
});

export default AddItem;