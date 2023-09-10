import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Login from './login'
import axios from "axios";
// import ToastManager, { Toast } from "toastify-react-native";

const googleLogo = require('../assets/googleLogo.png')
const metaLogo = require('../assets/metaLogo.png')

export default function Signup(){
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Login');
    }

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleError = (err) => 
        console.log(err);
    
    const handleSuccess = (msg) => 
        console.log(msg);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                "http://localhost:2999/signup",
                {
                    email: email,
                    username: username,
                    password: password,
                },

            );
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigation.navigate("/") }, 1000);
            } else {
                handleError(message);
            }
        } catch(err) {
            console.log(err);
        }
    };


    return(
        <NativeBaseProvider>
            <View style={styles.container}>
            <Text style={styles.appName}>DailyBite</Text>

            {/* Switch between Login and Register */}
            <View style={styles.switchBar}>
                <Text 
                 style={styles.switchBarItem}
                 onPress={handleLoginPress}
                >
                    Login</Text>
                <Text 
                    style={[styles.switchBarItem, styles.activeSwitch]} 
                    /*code to navigate to register page*/>
                    Register
                </Text>
            </View>

            {/* User Name and Password Fields */}
            <Text style={styles.inputHeader}>Email</Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChange={ (e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />

            <Text style={styles.inputHeader}>Username</Text>
            <TextInput 
                style={styles.input}
                value= {username}
                onChange={ (e) => setUsername(e.target.value)}
                placeholder="Enter your User Name" 
            />

            <Text style={styles.inputHeader}>Password</Text>
            <TextInput 
                style={styles.input}
                value={password}
                onChange={ (e) => setPassword(e.target.value)}
                placeholder="Enter your Password" 
                secureTextEntry={true} 
            />

            {/* Log In Button */}      
            <Button 
                style={styles.buttonStyle}
                onPress={handleSubmit}
            >
                <Text style={styles.buttonText}>Register</Text>
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
            </View>
        </View>
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
    buttonContent:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonStyle: {
        fontSize: 20,
        width: '70%',
        marginTop: 20,
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
        marginLeft: 20, 
    },
})