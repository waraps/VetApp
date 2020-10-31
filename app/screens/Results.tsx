import React from 'react';
import { Text, View } from 'react-native';

const Results: React.FC<any> = ({ route }) => {
  const medicationList = route.params.medicineList;
  return (
    <View>
      <Text>{JSON.stringify(medicationList)}</Text>
    </View>
  );
};

export default Results;
