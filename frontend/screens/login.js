import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Signup from './signup';
import axios from "axios";

const googleLogo = require('../assets/googleLogo.png')
const metaLogo = require('../assets/metaLogo.png')

function Login(){
    const navigation = useNavigation();

    const handleRegisterPress = () => {
        navigation.navigate('Signup');
    }    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSuccess = (msg) => 
        console.log(msg);
    
    const handleError = (err) => 
        console.log(err);
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:2999/login",
                {
                    username: username,
                    password: password,
                },
            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigation.navigate("Homepage") }, 1000);
            } else {
                handleError(message);
            }
        } catch(err) {
            console.log(err);
        }
    }

    const handleGuestLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:2999/guest");
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
            } else {
                handleError(message);
            }
        } catch(err) {
            console.log(err);
        }
    }
    return(
        <View style={styles.container}>
            <Text style={styles.appName}>DailyBite</Text>

            {/* Switch between Login and Register */}
            <View style={styles.switchBar}>
                <Text style={[styles.switchBarItem, styles.activeSwitch]}>Login</Text>
                <Text 
                    style={styles.switchBarItem} 
                    onPress={handleRegisterPress}
                >
                    Register
                </Text>
            </View>

            {/* User Name and Password Fields */}
            <Text style={styles.inputHeader}>Username</Text>
            <TextInput 
                onChange={ (e) => setUsername(e.target.value)}
                style={styles.input} 
                placeholder="Enter your User Name" 
                placeholderTextColor="gray"
            />
            <Text style={styles.inputHeader}>Password</Text>
            <TextInput 
                onChange={ (e) => setPassword(e.target.value)}
                style={styles.input} 
                placeholder="Enter your Password"
                placeholderTextColor="gray" 
                secureTextEntry={true} 
            />

            {/*Remeber me and forgot password */}
            <View style={styles.rememberForgot}>
                {/*Remember Me Checkbox*/}
                <Text style={styles.forgotPassword}>Remember me</Text>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>

            {/* Log In Button */}      
            <Button 
                style={styles.buttonStyle}
                onPress={handleLogin}
            >
                <Text style={styles.buttonText}>Login</Text>
            </Button>

            {/* External login */}
            <View style={styles.externalLoginContainer}>
                {/* Google */}
                <Button 
                    style={styles.switchBar}
                    onPress={() => {/* Handle Login */}}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Join With Google</Text>
                        <Image
                        source={googleLogo}
                        style={styles.buttonImage}
                        />
                    </View>
                </Button>

                {/* Meta */}
                <Button 
                    style={styles.switchBar}
                    onPress={() => {/* Handle Login */}}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Join With Meta</Text>
                        <Image
                        source={metaLogo}
                        style={styles.buttonImage}
                        />
                    </View>
                </Button>
                
                <Button 
                    style={styles.switchBar}
                    onPress={handleGuestLogin}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.buttonText}>Log in as a guest</Text>
                    </View>
                </Button>
            </View>
        </View>
    )
}

export default () => {
    return(
        <NativeBaseProvider>
            <Login />
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
    appName: {
        fontSize: 21,
        marginBottom: 20,
      },
    switchBar: {
        flexDirection: 'row',
        backgroundColor: '#92D6D7', 
        borderRadius: 50, 
        marginBottom: 20,
        padding: 10,
    },
    switchBarItem: {
        flex: 1,
        textAlign: 'center',
        paddingVertical: 10,
        color: 'white',
    },
    activeSwitch: {
        backgroundColor: '#49BBBD',
        borderRadius: 50
    },
    inputHeader: {
        fontSize: 16,
        textAlign: 'left',
        alignSelf: 'stretch',
        marginBottom: 15,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#49BBBD', 
        borderRadius: 50, 
        paddingHorizontal: 10,
        marginBottom: 10,
        padding: 10,
        fontSize: 14
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'left',
    },
    checkBoxContainer: {
        backgroundColor: 'transparent', // No background color for the checkbox container
        borderWidth: 0, // No border
        paddingHorizontal: 0, // No padding
    },
    checkBoxText: {
        fontWeight: 'light',
    },
    rememberForgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 20, 
    },
      rememberMe: {
        
    },
      forgotPassword: {
        marginVertical: 18,
        flexDirection: 'row',
    },
    buttonStyle: {
        fontSize: 20,
        width: '70%',
        padding: 10,
        backgroundColor: '#49BBBD',
        borderRadius: 100,
    },
    buttonText:{
        color: "#ffffff",
        paddingVertical: 5
    },
    externalLoginContainer: {
        marginTop: 40,
        width: '70%',
    },
    externalLogin: {
        flexDirection: 'row',
        backgroundColor: '#92D6D7', 
        borderRadius: 50, 
        marginBottom: 20,
        padding: 10
    },
    buttonContent: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    buttonImage: {
        width: 24, 
        height: 24, 
        marginLeft: 10, 
    },
})