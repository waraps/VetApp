/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Types
import { PetInfoScreenProps } from '../types/props/PetInfoScreenPropsTypes';

// Components
import PetCard from '../components/PetCard';

const PetInfo: React.FC<PetInfoScreenProps> = ({ navigation }) => {
  const nextScreen = () => {
    navigation.push('MedicationList');
  };
  return (
    <View style={styles.container}>
      <PetCard
        title="Canino"
        navigateTo={nextScreen}
        imagePath={require('../assets/img/dog.png')}
      />
      <PetCard
        title="Felino"
        navigateTo={nextScreen}
        imagePath={require('../assets/img/cat.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default PetInfo;
