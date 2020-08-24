/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
// https://reactnative.dev/docs/flexbox

export default class AlignItemsBasics extends Component {
  render() {
    return (
      // 親View
      // 子View
      // Text有無
      <View style={styles.container}>
        <View style={styles.view1}>
          <View style={styles.view5}>
            <Text style={styles.text}>View1</Text>
            <View style={styles.view4} />
          </View>
        </View>
        {/* <View style={styles.view2} />
        <View style={styles.view3} />
        <View style={styles.view2} />
        <View style={styles.view1} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column', // 縦
    // // flexDirection: 'column-reverse', // 縦 リバース
    flexDirection: 'row', // 横
    // flexDirection: 'row-reverse', // 横 リバース
    // justifyContent: 'center',
    // justifyContent: 'flex-end',
    // justifyContent: 'flex-start',
    // justifyContent: 'space-around', // スペースがつく 右左の余白もつく
    // justifyContent: 'space-between', // スペースがつく　余白はつかない
    justifyContent: 'space-evenly', // スペースがつく aroundよりちょっと狭い 左右の余白が広い
    alignItems: 'center',
    alignContent: 'stretch',
  },
  view1: {
    width: 400,
    height: 500,
    backgroundColor: 'powderblue',
  },
  view2: {
    width: 50,
    height: 50,
    backgroundColor: 'skyblue',
  },
  view3: {
    width: 50,
    height: 50,
    backgroundColor: 'steelblue',
  },
  view4: {
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    marginLeft: 200,
    marginTop: 100,
  },
  view5: {
    flex: 1,
    backgroundColor: 'pink',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 10,
    // marginLeft: 10,
    // marginBottom: 10,
    // marginRight: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: 'row',
  },
  text: {
    // height: 20,
    // width: 100,
    backgroundColor: 'red',
  },
});

// BaseViewがあってその中で　viewやTextなどを出いく　Viewの階層をいろいろみてやっていくと良さそう
// BaseのViewのレイアウトの影響を、子Viewはうける　ここもよく勉強が必要

/// 書き方の違い
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.view1}></View>
//       <View style={styles.view2}></View>
//       <Text style={styles.text}>Hello</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 2,
//     justifyContent: 'center', // 垂直
//     alignItems: 'center', // 水平
//     backgroundColor: 'gray',
//     flexDirection: 'row', //　ホリゾンタル
//     // position: 'absolute', // Viewの子Viewとして扱われる
//   },
//   view1: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'green',
//     marginRight: 10,
//   },
//   view2: {
//     height: 100,
//     width: 100,
//     backgroundColor: 'blue',
//     marginRight: 10,
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginRight: 10,
//   },
// });
