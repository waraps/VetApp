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

const ItemListMed: ListRenderItem<Medicine> = ({ item, addMedicine }) => {
  const [updateSelection, setUpdateSelection] = useState(false);

  const isSelected = (medicine: Medicine) => {
    // eslint-disable-next-line no-param-reassign
    medicine.isSelected = !medicine.isSelected;
    setUpdateSelection(!updateSelection);
    addMedicine(medicine);
  };

  useEffect(() => {}, [updateSelection]);

  return (
    <TouchableOpacity
      style={item.isSelected ? styles.itemSelected : styles.item}
      onPress={() => isSelected(item)}>
      <View style={styles.itemCard}>
        <Text style={styles.itemCardChild}>{item.name.charAt(0)}</Text>
      </View>
      <View style={styles.itemBody}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <View style={styles.itemBodyDescription}>
          {item.concentration.mg && (
            <View style={styles.itemTag}>
              <Text style={styles.itemTitleDescription}>Solucion: </Text>
              <Text>{item.concentration.mg}</Text>
              <Text> mg</Text>
            </View>
          )}
          {item.concentration.ml && (
            <View style={styles.itemTag}>
              <Text>{item.concentration.ml}</Text>
              <Text> ml</Text>
            </View>
          )}
        </View>
        {item.concentration.oral && (
          <View style={styles.itemTag}>
            <Text style={styles.itemTitleDescription}>Oral: </Text>
            <Text>{item.concentration.oral}</Text>
            <Text> ml</Text>
          </View>
        )}
      </View>
      {item.isSelected && <Icon name="checkcircleo" style={styles.iconStyle} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.lighter,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  itemSelected: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.primaryTranslucent,
    paddingHorizontal: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  itemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: Colors.primaryLight,
    borderRadius: 30,
    marginTop: -15,
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
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
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
  },
});

export default ItemListMed;
