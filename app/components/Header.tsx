import React from 'react';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import Colors from '../utils/Colors';

const Header: React.FC<any> = ({ title }) => {
  return (
    <ImageBackground
      accessibilityRole="image"
      // eslint-disable-next-line global-require
      source={require('../assets/img/logo.png')}
      style={styles.background}
      imageStyle={styles.logo}>
      <Text style={styles.text}>{title}</Text>
    </ImageBackground>
  );
};

// styles
const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.green,
  },
});
export default Header;
