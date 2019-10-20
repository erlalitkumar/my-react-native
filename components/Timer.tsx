import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
interface Props {}
interface States {
  time: string;
}
export default class Timer extends Component<Props, States> {
  intervalID: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  render() {
    return (
      <View>
        <Text>Time : {this.state.time}</Text>
      </View>
    );
  }
  tick() {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
}
