import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Results: React.FC<any> = ({ route }) => {
  const medicationList = route.params.medicineList;
  return (
    <View>
      {medicationList.map((medicine) => {
        return <Text style={styles.text}>{medicine.name}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    padding: 5,
    fontSize: 15,
  },
});

export default Results;
