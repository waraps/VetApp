import React, { useState, useEffect } from 'react';
import {
  ListRenderItem,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Medicine } from '../types/medicine/MedicineType';
import Colors from '../utils/Colors';

const ItemListMed: ListRenderItem<Medicine> = ({ item }) => {
  const [updateSelection, setUpdateSelection] = useState(false);

  const isSelected = (medicine: Medicine) => {
    // eslint-disable-next-line no-param-reassign
    medicine.isSelected = !medicine.isSelected;
    setUpdateSelection(!updateSelection);
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
          <View style={styles.itemTag}>
            <Text>mg: </Text>
            <Text>{item.concentration.mg}</Text>
          </View>
          <View style={styles.itemTag}>
            <Text>ml: </Text>
            <Text>{item.concentration.ml}</Text>
          </View>
        </View>
      </View>
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
    paddingBottom: 12,
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '700',
  },
  itemTitle: {
    paddingHorizontal: 5,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'capitalize',
    width: '80%',
    color: Colors.dark,
  },
});

export default ItemListMed;
