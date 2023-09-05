import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


function Signup(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.appName}>DailyBite</Text>

            {/* Switch between Login and Register */}
            <View style={styles.switchBar}>
                <Text style={styles.switchBarItem}>Login</Text>
                <Text 
                    style={[styles.switchBarItem, styles.activeSwitch]} 
                    /*code to navigate to register page*/>
                    Register
                </Text>
            </View>

            {/* User Name and Password Fields */}
            <Text style={styles.inputHeader}>Username</Text>
            <TextInput style={styles.input} placeholder="Enter your User Name" />
            <Text style={styles.inputHeader}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter your Password" secureTextEntry={true} />

            {/*Remeber me and forgot password */}
            <View style={styles.rememberForgot}>
                {/*Remember Me Checkbox*/}
                <Text style={styles.forgotPassword}>Remember me</Text>
                <Text style={styles.forgotPassword}>Forgot Password</Text>
            </View>

            {/* Log In Button */}      
            <Button 
                style={styles.buttonStyle}
                onPress={() => {/* Handle Login */}}
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
                    {/* <Image
                    source={myImage}
                    style={styles.buttonImage}
                    /> */}
                </View>
            </Button>

            {/* Meta */}
            <Button 
                style={styles.switchBar}
                onPress={() => {/* Handle Login */}}
            >
                <View>
                    <Text style={styles.buttonText}>Join With Meta</Text>
                    {/* <Image
                    source={myImage}
                    style={styles.buttonImage}
                    /> */}
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