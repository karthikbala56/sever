import axios from 'axios';
import React, {useState} from 'react';
import image from '../../../images/visitor.jpg'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
export default function Add(props) {
  const [visitorname, setVisitorname] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [wing, setWing] = useState('');
  const [flat, setFlat] = useState('');
  const [flatowner, setFlatowner] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [visitoraddress, setVisitoraddress] = useState('');
  const [purpose, setPurpose] = useState('');


  const onUpload = () => {
    const data = {
      visitorname,
      gender,
      mobile,
      wing,
      flat,
      flatowner,
      date,
      time,
      visitoraddress,
      purpose
    };

    axios
      .post(`http://192.168.1.19:1234/add`, data)
      .then((res) => {
        if (res.data) {
          Actions.Home();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ImageBackground source={image} style={styles.img}>
    <ScrollView style={styles.container}>
        <TextInput
        value={visitorname}
          style={styles.input}
          placeholder='Visitor Name'
          autoCapitalize="none"
          placeholderTextColor='yellow'
          onChangeText={(text) => setVisitorname(text)}
        />
        <TextInput
        value={gender}
          style={styles.input}
          placeholder='Gender'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setGender(text)}
        />
        <TextInput
        value={mobile}
          style={styles.input}
          placeholder='Mobile Number'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='yellow'
          onChangeText={(text) => setMobile(text)}
        />
        
        <TextInput
        value={wing}
          style={styles.input}
          placeholder='Wing'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setWing(text)}
        />
        
        <TextInput
        Value={flat}
          style={styles.input}
          placeholder='Flat Number'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setFlat(text)}
        />
        
        <TextInput
        value={flatowner}
          style={styles.input}
          placeholder='Flat OwnerName'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setFlatowner(text)}
        />
        
        <TextInput
        value={date}
          style={styles.input}
          placeholder='Date eg:DD/MM/YY'
          secureTextEntry={false}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setDate(text)}
        />
        

        <TextInput
        value={time}
          style={styles.input}
          placeholder='Time eg:02:30 am'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setTime(text)}
        />
        <TextInput
        value={visitoraddress}
          style={styles.input}
          placeholder='Visitor Address'
          autoCapitalize="none"
          placeholderTextColor='white'
          multiline={true}
          onChangeText={(text) => setVisitoraddress(text)}
        />
                <TextInput
         value={purpose}       
          style={styles.input}
          placeholder='purpose'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={(text) => setPurpose(text)}
        />
        <Button
          title='Enter Data'
  
          onPress={onUpload}
          
        />
      </ScrollView>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 350,
    height: 70,
    backgroundColor: '#141414',
    margin: 10,
    padding: 10,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500'

  },
  img:{
    flex:1,
    height:null,
    width:null
  }
});