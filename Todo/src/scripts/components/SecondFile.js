import React, {Component} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import Header from '../../reusable components/Header';
import {Actions} from 'react-native-router-flux';

export default class SecondFile extends Component {
  constructor(props) {
    super(props);

    this.visitorItem = [];

    this.state = {

      visitors: [],
      show: false,
      loader: false,
    };
  }

  onPressHandler = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    this.setState({
      loader: true,
    });
    axios
      .get('http://192.168.1.19:1234/')
      .then((response) => {
        this.setState({
          visitors: response.data,
          loader: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  onEdit = (id) => {
    Actions.Edit({id});
  };

  _renderItem = ({item}) => (
    <View style={styles.visitBox}>
      <Text style={styles.visitBoxText}>Visitor Name:{item.visitorname}</Text>
      <Text style={styles.visitBoxText}>Mobile:{item.mobile}</Text>
      <Text style={styles.visitBoxText}>Wing:{item.wing}</Text>
      <Text style={styles.visitBoxText}>Flat:{item.flat}</Text>
      <Text style={styles.visitBoxText}>Date:{item.date}</Text>
      <Text style={styles.visitBoxText}>Time:{item.time}</Text>
      <TouchableOpacity onPress={this.onEdit.bind(this, item.id)}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    const {visitors, loader} = this.state;
    console.log(visitors);
    return (
      <View style={styles.Container}>
        {visitors !== null ? (
          <>
            <Header title="Visitor's" />
            {loader ? (
              <View>
                <ActivityIndicator size="large" color="black" />
              </View>
            ) : (
              <FlatList data={visitors} renderItem={this._renderItem} />
            )}
          </>
        ) : (
          <Text>No Visitor's to show</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  visitBox: {
    width: 360,
    height: 200,
    borderWidth: 10,
    borderColor: 'blue',
    padding: 10,
    marginTop: 15,
    backgroundColor:'skyblue'
  },
  visitBoxText: {
    fontSize: 18,
    color:'blue',
    fontWeight:'bold'
  },
  
});