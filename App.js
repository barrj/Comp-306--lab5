import React, { useState, useEffect } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";

export default function Example() {
 const [count, setCount] = useState(0);

 const updateState = () =>{
    setCount(count + 1);
  }

 useEffect(() => {
  // Update the document title using the browser API
  console.log('You clicked count ' + count + ' times');
 }, [count]);


 return (
  <View style={styles.container}>
   <Text style={styles.countContainer}>You clicked count {count} times
		 {'\n\n\n'}</Text>
   <TouchableOpacity
     style={styles.button}
     onPress={updateState}
     >
     <Text> Update Count</Text>
  </TouchableOpacity>

  <Text>{'\n\n\n'}</Text>

  </View>
 ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: "center",
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius:10,
    borderWidth: 1,
    backgroundColor: "#009966",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#009966",
  },
});
