import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

// Types
import { PetCardProps } from '../types/props/PetCardTypes';

// Utils
import Colors from '../utils/Colors';

const PetCard: React.FC<PetCardProps> = ({ title, navigateTo, imagePath }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={navigateTo}>
      <Image source={imagePath} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '70%',
    height: '40%',
    backgroundColor: Colors.primary,
    borderRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 230,
    borderRadius: 20,
  },
  title: {
    color: Colors.light,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default PetCard;
