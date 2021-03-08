import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default function Header(props) {
  const onAddPress = () => {
    Actions.Add();
  };
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.HeaderText}>{props.visitorname}</Text>
      <Text style={styles.HeaderText}>{props.gender}</Text>
      <Text style={styles.HeaderText}>{props.mobile}</Text>
      <Text style={styles.HeaderText}>{props.wing}</Text>
      <Text style={styles.HeaderText}>{props.flat}</Text>
      <Text style={styles.HeaderText}>{props.flatowner}</Text>
      <Text style={styles.HeaderText}>{props.date}</Text>
      <Text style={styles.HeaderText}>{props.time}</Text>
      <Text style={styles.HeaderText}>{props.visitoraddress}</Text>
      <Text style={styles.HeaderText}>{props.purpose}</Text>
      <TouchableOpacity style={styles.btn} onPress={onAddPress}>
        <Text style={styles.HeaderText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: 400,
    height: 80,
    backgroundColor: 'blue',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection:'row'
  },
  HeaderText: {
    color: 'white',
    fontSize: 18,
  },
  btn:{
    marginRight:30
  }
});