import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';

// Types
import { ButtonOptionProps } from '../types/props/ButtonOptionTypes';
// Data
import { analgesics, anesthetics, antagonists, sedatives } from '../data';
// Utils
import Colors from '../utils/Colors';
import mapMedicines from '../utils/helpers';

const ButtonOption: React.FC<ButtonOptionProps> = ({
  imagePath,
  title,
  description,
  medicineType,
  onPress,
}) => {
  const navigate = (pet: string) => {
    // eslint-disable-next-line default-case
    switch (medicineType) {
      case 'analgesics':
        onPress(mapMedicines(pet, analgesics));
        break;

      case 'anesthetics':
        onPress(mapMedicines(pet, anesthetics));
        break;

      case 'sedatives':
        onPress(mapMedicines(pet, sedatives));
        break;

      case 'antagonists':
        onPress(mapMedicines(pet, antagonists));
        break;

      case 'protocols':
        // onPress(mapMedicines(pet, prot));
        break;
    }
  };
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
        <TouchableOpacity
          onPress={() => navigate('felino')}
          style={styles.buttonPetOutline}>
          <Text
            style={
              (styles.buttonText, { color: Colors.primary, fontWeight: 'bold' })
            }>
            Felino
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate('canino')}
          style={styles.buttonPet}>
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
