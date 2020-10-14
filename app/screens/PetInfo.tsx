import React from 'react';
import { Text, View } from 'react-native';
import { PetInfoScreenProps } from '../types/props/PetInfoScreenPropsTypes';

const PetInfo: React.FC<PetInfoScreenProps> = (props) => {
  return (
    <View>
      <Text>Pet</Text>
    </View>
  );
};

export default PetInfo;
