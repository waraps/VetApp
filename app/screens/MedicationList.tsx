import React, { useEffect } from 'react';
import { ListRenderItem, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MedicationListScreenProps } from '../types/props/MedicationListScreemPropsTypes';
import { Medicine } from '../types/medicine/MedicineType';
import Colors from '../utils/Colors';

const MedicationList: React.FC<MedicationListScreenProps> = ({
  route,
  navigation,
}) => {
  const medicationList = route.params.medicineList;

  useEffect(() => {
    navigation.setOptions({ title: route.params.screenName });
  }, [navigation, route.params.screenName]);

  const renderItem: ListRenderItem<Medicine> = ({ item }) => (
    <View style={styles.item}>
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: Colors.lighter,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  itemCard: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    shadowColor: Colors.dark,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  itemCardChild: {
    textTransform: 'uppercase',
    fontSize: 30,
    color: Colors.light,
  },
  itemBody: {
    paddingHorizontal: 10,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemBodyDescription: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemTag: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    fontSize: 20,
    fontWeight: '700',
  },
  itemTitle: {
    fontSize: 15,
    fontWeight: '700',
    textTransform: 'capitalize',
    width: '50%',
  },
});
