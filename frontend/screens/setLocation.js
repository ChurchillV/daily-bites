import React, { useState } from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

const SetLocation = () => {
  const [state, setState] = useState({
    stateInput: '',
    cityInput: '',
  });

  // handle input changes for State 
  const handleStateInputChange = (text) => {
    setState({
      ...state,
      stateInput: text,
    });
  };
  
  // handle input changes for City 
  const handleCityInputChange = (text) => {
    setState({
      ...state,
      cityInput: text,
    });
  };

  // handle the press of the 'Set Location' button
  const handleSetLocationPress = () => {
    if (state.stateInput.trim() === '' || state.cityInput.trim() === '') {
      alert('Please fill all the inputs.');
    } else {
      alert('Location set successfully');
      // Add navigation logic to go to the home screen
    }
  };

  // handle the press of the 'Select on map button'
  const handleSelectOnMapPress = () => {
    alert('Proceed to select location on map')
    // navigation logic to go to map screen
  }

  return(
    <View style={styles.container}>
      <View style={styles.centeredContent}>
      <Text style={styles.pageHeading}>What is you current location?</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={styles.input} 
            placeholder={'State'}
            placeholderTextColor="gray"
            value={state.stateInput}
            onChangeText={handleStateInputChange}
           />
          <TextInput 
            style={styles.input} 
            placeholder={'City'} 
            placeholderTextColor="gray"
            value={state.cityInput}
            onChangeText={handleCityInputChange}
          />        
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={handleSetLocationPress}
          >
            <Text style={styles.buttonText}>  Set Location  </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.buttonContainer} 
            onPress={handleSelectOnMapPress}
            >
            <Text style={styles.buttonText}>Select on map</Text>
          </TouchableOpacity>
        </View>
      </View>
        <TouchableOpacity style={styles.skipContainer}>
          <Text style={styles.skipText}>Skip &gt;&gt;&gt;</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SetLocation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    padding: 20
  },
  centeredContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageHeading: {
    fontSize: 21,
    marginBottom: -10
  },
  inputContainer: {
    margin: 20
  },
  input: {
    width: 317,
    height: 54,
    borderWidth: 2,
    borderColor: '#49BBBD',
    borderRadius: 50,
    marginTop: 40,
    paddingLeft: 25,
    fontSize: 15,
  },
  buttonsContainer: {
    marginTop: 25
  },
  buttonContainer:{
    borderRadius: 50, 
    alignSelf: 'center',
    marginBottom: 30,
    backgroundColor: '#49BBBD'
  },
  buttonText: {
    fontSize: 16,
    padding: 17,
    color: '#ffffff',
    paddingHorizontal: 80
  },
  skipContainer: {
    alignItems: 'right'
  },
  skipText: {
    fontSize: 21,
    color: '#000000',
    left: 120,
    bottom: 120
  },
})