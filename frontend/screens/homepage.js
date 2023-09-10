import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';

// Import your custom image assets
const menuIcon = require('../assets/menuIcon.png');
const filterIcon = require('../assets/filterIcon.png');
const searchIcon = require('../assets/searchIcon.png');

const Homepage = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconButton}>
        <Image source={menuIcon} style={styles.iconImage} />
      </TouchableOpacity>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="What would you like to eat?"
            placeholderTextColor="gray"
          />
          <Image source={searchIcon} style={styles.searchIcon} />
        </View>
      </View>

      <TouchableOpacity style={styles.iconButton}>
        <Image source={filterIcon} style={styles.iconImage} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 10, 
    // marginHorizontal: 10,
    marginTop: 30,
  },
  iconButton: {
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'turquoise',
    padding: 7,
    marginHorizontal: 10
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    color: 'gray', // Placeholder text color
  },
};

export default Homepage;
