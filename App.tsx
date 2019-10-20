import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './components/Timer';
interface Props {
  isLoggedIn?: boolean;
}

interface State {
  isLoggedIn: boolean;
}
export default class App extends Component<Props,State> {
  constructor(props:any){
    super(props);
  }
  render(){
    return (
      <View style={styles.container}>
        <Text>Hello World!!! hey there0</Text>
        <Timer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
