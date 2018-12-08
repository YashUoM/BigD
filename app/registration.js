import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class UserRegisteration extends Component {

  /*static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#3d5068',
    },
    headerTintColor: '#fff'
  };

  constructor(){
    super();
    
    this.state = {
      fname: "",
      lname: "",
      email: "",
      mobile: "",
      shline: "",
      uname: "",
      pword: "",
      repword: "",
      errors: [],
    }
  }

  async onButtonPressed(){
    try {
      let response = await fetch('http://kolomthota.initiyo.com/api/users/sa/register',{
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            first_name: this.state.fname,
            last_name: this.state.lname,
            email: this.state.email,
            mobile: this.state.mobile,
            shipping_line: this.state.shline,
            username: this.state.uname,
            password1: this.state.pword,
            password2: this.state.repword
          }
        })
      })
      let res = await response.text();
      console.log(res);
      if(response.status == 200){
        console.log("Successed");
        this.props.navigation.navigate('Registered');
      } else {
        let errors = res;
        throw errors;
      }
    } catch(errors) {
      console.log("cached errors: " + errors);
    }
  }
*/
  render() {
    return (
      <View style={styles.container}>
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({fname: val})}
          placeholder="     First Name"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
        />
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({lname: val})}
          placeholder="     Last Name"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
        />
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({email: val})}
          placeholder="     Email"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
        />
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({mobile: val})}
          placeholder="     Mobile Number"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
        />
       
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({uname: val})}
          placeholder="     Username"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
        />
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({pword: val})}
          placeholder="     Password"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
          secureTextEntry={true}
        />
        <TextInput style= {styles.input} 
          onChangeText = {(val) => this.setState({repword: val})}
          placeholder="     Re enter Password"
          placeholderTextColor="#155115"
          underlineColorAndroid="#155115"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} 
        //onPress={this.onButtonPressed.bind(this)}
        >
          <Text style={styles.buttonText}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding : 10,
    paddingTop: 10,
    marginTop:80
  },
  input: {
    height: 50,
    width: 350,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    borderRadius: 5,
    color: '#155115'
  },
  button:{
    height: 50,
    backgroundColor: '#155115',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#155115',
    borderWidth: 2,
    width: 250,
    margin: 10,
    marginTop: 20
  },
  buttonText:{
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
  },
  heading:{
    fontSize:30,
  },
  error:{
    color: 'red',
    paddingTop: 10
  },
  loader:{
    marginTop: 20
  }
});
