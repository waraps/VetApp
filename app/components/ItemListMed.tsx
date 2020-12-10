import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Medicine } from '../types/medicine/MedicineType';
import Colors from '../utils/Colors';

import ModalMedicine from './ModalMedicine';

const ItemListMed: ListRenderItem<Medicine> = ({ item, addMedicine }) => {
  const [itemMedicine, setItemMedicine] = useState(item);
  const [updateSelection, setUpdateSelection] = useState(false);
  const [visibleOralSolution, setVisibleOralSolution] = useState(false);
  const [visibleOral, setVisibleOral] = useState(false);
  const [opcionMedicine, setOptionMedicine] = useState(0);

  const isSelected = (medicine: Medicine) => {
    // eslint-disable-next-line no-param-reassign
    medicine.isSelected = !medicine.isSelected;
    setItemMedicine(medicine);

    if (itemMedicine.concentration.oral && itemMedicine.concentration.ml) {
      if (itemMedicine.isSelected) {
        setOptionMedicine(1);
        setVisibleOralSolution(true);
      }
    }

    if (itemMedicine.concentration.oral && !itemMedicine.concentration.ml) {
      if (itemMedicine.isSelected) {
        setOptionMedicine(2);
        setVisibleOral(true);
      }
    }

    setUpdateSelection(!updateSelection);
    addMedicine(medicine);
  };

  useEffect(() => {}, [updateSelection]);

  return (
    <>
      <TouchableOpacity
        style={itemMedicine.isSelected ? styles.itemSelected : styles.item}
        onPress={() => isSelected(itemMedicine)}>
        <View style={styles.itemCard}>
          <Text style={styles.itemCardChild}>
            {itemMedicine.name.charAt(0)}
          </Text>
        </View>
        <View style={styles.itemBody}>
          <Text style={styles.itemTitle}>{itemMedicine.name}</Text>
          <View style={styles.itemBodyDescription}>
            {itemMedicine.concentration.mg && (
              <View style={styles.itemTag}>
                <Text style={styles.itemTitleDescription}>Solucion: </Text>
                <Text>{itemMedicine.concentration.mg}</Text>
                <Text> mg</Text>
              </View>
            )}
            {itemMedicine.concentration.ml && (
              <View style={styles.itemTag}>
                <Text>{itemMedicine.concentration.ml}</Text>
                <Text> ml</Text>
              </View>
            )}
          </View>
          {itemMedicine.concentration.oral && (
            <View style={styles.itemTag}>
              <Text style={styles.itemTitleDescription}>Oral: </Text>
              <Text>{itemMedicine.concentration.oral}</Text>
              <Text> ml</Text>
            </View>
          )}
        </View>
        {itemMedicine.isSelected && (
          <Icon name="checkcircleo" style={styles.iconStyle} />
        )}
        {(visibleOralSolution || visibleOral) && (
          <ModalMedicine
            visibleOral={visibleOral}
            visibleOralSolution={visibleOralSolution}
            hideOral={setVisibleOral}
            hideOralSolution={setVisibleOralSolution}
            opc={opcionMedicine}
            medicine={itemMedicine}
            setMedicine={setItemMedicine}
          />
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
    paddingHorizontal: 8,
    alignItems: 'center',
    minHeight: 70,
  },
  itemSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.primaryTranslucent,
    paddingHorizontal: 8,
    alignItems: 'center',
    minHeight: 70,
  },
  itemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: Colors.primaryLight,
    borderRadius: 30,
  },
  itemCardChild: {
    textTransform: 'uppercase',
    fontSize: 25,
    color: Colors.lighter,
    fontWeight: 'bold',
  },
  itemBody: {
    paddingHorizontal: 10,
    flexGrow: 1,
  },
  itemBodyDescription: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  itemTag: {
    paddingHorizontal: 5,
    // paddingBottom: 12,
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '700',
  },
  itemTitle: {
    paddingHorizontal: 5,
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    width: '80%',
    color: Colors.dark,
  },
  itemTitleDescription: {
    fontWeight: '700',
    textTransform: 'capitalize',
    color: Colors.dark,
  },
  iconStyle: {
    color: Colors.primary,
    fontSize: 20,
    position: 'absolute',
    right: 7,
  },
});

export default ItemListMed;
