import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleSwipe = () => {
    alert('Navigate to Login/Sign-up Page');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/dailyBite.png')}
        style={styles.appImage}
      />
      <TouchableOpacity onPress={handleSwipe}>
        <Text style={styles.swipeText}>Swipe &gt;&gt;&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between', 
    alignItems: 'flex-end', 
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 200,
    
  },

  appImage: {
    width: 330, 
    height: 300,
  },

  swipeText: {
    fontSize: 20,
    color: 'black', 
    paddingBottom: 10
  },
});

export default LandingPage;
