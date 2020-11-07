import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { MedicationListScreenProps } from '../types/props/MedicationListScreemPropsTypes';
import { Medicine } from '../types/medicine/MedicineType';
import ItemListMed from '../components/ItemListMed';
import Colors from '../utils/Colors';

export interface IMedicineSelected {
  medicines: Array<Medicine>;
}

const MedicationList: React.FC<MedicationListScreenProps> = ({
  route,
  navigation,
}) => {
  const medicationList = route.params.medicineList;
  const [medicinesSelected, setMedicinesSelected] = useState<
    IMedicineSelected | []
  >([]);

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenName });
  }, [navigation, route.params.screenName]);

  const addMedicine = (newMedicine: Medicine): void => {
    let list: IMedicineSelected = medicinesSelected;
    const index = list.indexOf(newMedicine);
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(newMedicine);
    }
    setMedicinesSelected(list);
  };

  const navigateTo = (): void => {
    if (medicinesSelected.length > 0) {
      navigation.push('Results', {
        medicineList: medicinesSelected,
      });
    } else {
      alert('Debe seleccionar por lo menos un farmaco');
    }
  };

  const keyExtractor = (item: Medicine, index: number) => index.toString();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.hintSection}>
        <Text style={styles.hintText}>
          Seleccione los farmacos de su preferencia y luege presione sobre el
          boton Siguiente para continuar
        </Text>
      </View>
      <FlatList
        nestedScrollEnabled
        data={medicationList}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <ItemListMed item={item} addMedicine={addMedicine} />
        )}
      />
      <View style={styles.buttonSection}>
        <TouchableOpacity style={styles.button} onPress={navigateTo}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  hintSection: {
    padding: 5,
    backgroundColor: Colors.primaryTranslucent,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.gray,
    marginBottom: 10,
  },
  hintText: {
    color: Colors.primary,
    textAlign: 'justify',
    paddingHorizontal: 10,
  },
  buttonSection: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1.2,
    borderColor: Colors.primary,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonText: {
    textAlign: 'center',
    color: Colors.primaryLight,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MedicationList;
