import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../utils/Colors';

const ButtonOption: React.FC<any> = ({title, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOption;

const styles = StyleSheet.create({
  container: {
    width: '50%',
    paddingVertical: 16,
    backgroundColor: Colors.lighter,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 40,
    elevation: 9,
  },
  text: {
    fontWeight: 'bold',
    marginStart: 10,
    color: Colors.green,
    textTransform: 'uppercase',
  },
});
