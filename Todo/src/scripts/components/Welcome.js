import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import image from '../../../images/visitor.jpg'

export default function Welcome() {
  const onBtnClick = () => {
    Actions.Home();
  };

  return (
    <ImageBackground source={image} style={styles.img}>
    <View style={styles.WelcomeContainer}>
      <Text style={styles.headerText}>Welcome Visitor's!</Text>
      <TouchableOpacity onPress={onBtnClick} style={styles.btn}>
        <Text style={styles.btnText}>View Visit's</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  WelcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 10,
    fontWeight:'bold',
    color:'#000080'
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 45,
    borderColor: 'blue',
    backgroundColor: '#000080',
    alignItems: 'center',
    padding: 13,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
  },
  img:{
    flex:1,
    height:null,
    width:null
  }
});