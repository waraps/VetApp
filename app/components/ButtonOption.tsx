import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

import Colors from '../utils/Colors';

const ButtonOption: React.FC<any> = ({
  imagePath,
  title,
  description,
  onpress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.description}>
        <Image source={imagePath} style={styles.logo} />
        <View style={styles.text}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
      <View style={styles.buttonsGroup}>
        <TouchableOpacity onPress={onpress} style={styles.buttonPetOutline}>
          <Text
            style={
              (styles.buttonText, { color: Colors.primary, fontWeight: 'bold' })
            }>
            Felino
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onpress} style={styles.buttonPet}>
          <Text style={styles.buttonText}>Canino</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ButtonOption;

const styles = StyleSheet.create({
  container: {
    maxWidth: 370,
    height: 220,
    padding: 10,
    margin: 10,
    backgroundColor: Colors.lighter,
    borderRadius: 8,
    elevation: 9,
    justifyContent: 'space-between',
  },
  description: {
    flexDirection: 'row',
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 4,
  },
  text: {
    padding: 10,
    width: '70%',
  },
  titleText: {
    fontWeight: 'bold',
    color: Colors.darkness,
    textTransform: 'uppercase',
    fontSize: 19,
  },
  descriptionText: {
    color: Colors.dark,
  },
  buttonsGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  buttonPet: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 3,
  },
  buttonPetOutline: {
    backgroundColor: Colors.lighter,
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.lighter,
    fontWeight: 'bold',
  },
});
