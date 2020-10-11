import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Colors from '../utils/Colors';

const Footer: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Herramienta de uso veterianrio.</Text>
      <Text style={styles.text}>
        No nos hacemos responsables del mal uso de esta aplicacion.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {padding: 5},
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: Colors.lighter,
  },
});
