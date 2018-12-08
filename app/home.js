import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View
} from 'react-native';



export default class Home extends Component {

    static navigationOptions = {
        header: null
      };

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>
                    Welcome!
                </Text>
                
                <TouchableOpacity style={styles.button2} onPress={()=> {this.props.navigation.navigate('Registration')}}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
    },
   
    button: {
        height: 50,
        backgroundColor: '#155115',
        margin: 10,
        justifyContent: 'center',
        borderRadius: 10,
        width: 250,
        borderColor: 'white',
        borderWidth: 2,
    },
    buttonText: {
        fontSize: 22,
        color: 'white',
        alignSelf: 'center',
    },
    buttonText2: {
        fontSize: 22,
        color: '#2C3D53',
        alignSelf: 'center',
        fontWeight: "bold"

    },
    heading: {
        fontSize: 40,
        color: '#155115',
        
    },
    button2: {
        height: 50,
        backgroundColor: '#155115',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'white',
        borderWidth: 2,
        width: 250,
        margin: 10,
        marginTop: 80
    }
});
