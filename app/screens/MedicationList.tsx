import React from 'react';
import { ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MedicationListScreenProps } from '../types/props/MedicationListScreemPropsTypes';
import { Medicine } from '../types/medicine/MedicineType';

const MedicationList: React.FC<MedicationListScreenProps> = ({ route }) => {
  const medicationList = route.params;

  const renderItem: ListRenderItem<Medicine> = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
    </View>
  );

  const keyExtractor = (item: Medicine, index: number) => index.toString();

  return (
    <FlatList
      data={medicationList}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

export default MedicationList;

const styles = StyleSheet.create({
  item: {
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
});
