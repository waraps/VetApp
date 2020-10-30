import React, { useEffect } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { MedicationListScreenProps } from '../types/props/MedicationListScreemPropsTypes';
import { Medicine } from '../types/medicine/MedicineType';
import ItemListMed from '../components/ItemListMed';

const MedicationList: React.FC<MedicationListScreenProps> = ({
  route,
  navigation,
}) => {
  const medicationList = route.params.medicineList;

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenName });
  }, [navigation, route.params.screenName]);

  const keyExtractor = (item: Medicine, index: number) => index.toString();

  return (
    <FlatList
      data={medicationList}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <ItemListMed item={item} />}
    />
  );
};

export default MedicationList;
