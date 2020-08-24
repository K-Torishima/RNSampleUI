/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}></View>
      <View style={styles.view2}></View>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    flexDirection: 'row', //　ホリゾンタル
  },
  view1: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    marginRight: 10,
  },
  view2: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    marginRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
