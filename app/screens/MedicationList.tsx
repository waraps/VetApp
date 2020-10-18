import React from 'react';
import { Text, View } from 'react-native';
import { MedicationListScreenProps } from '../types/props/MedicationListPropsTypes';

const MedicationList: React.FunctionComponent<MedicationListScreenProps> = ({
  route,
}) => {
  const { medicationList } = route.params;
  return (
    <View>
      <Text>{JSON.stringify(medicationList)}</Text>
    </View>
  );
};

export default MedicationList;
