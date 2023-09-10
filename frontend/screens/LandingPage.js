import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const DailyBiteLogo = require('../assets/dailyBite.png')

const LandingPage = () => {
  const navigation = useNavigation();

  const handleSwipe = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
          source={DailyBiteLogo}
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
    backgroundColor: '#ffffff'
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
