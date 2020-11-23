/* eslint-disable global-require */
import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import Colors from '../utils/Colors';
import ButtonOption from '../components/ButtonOption';
import Footer from '../components/Footer';
import { HomeScreenProps } from '../types/props/HomeScreenPropsTypes';
import { Medicine } from '../types/medicine/MedicineType';

const MedicineCardList = [
  {
    imagePath: require('../assets/img/dog.png'),
    title: 'Analsegicos',
    medicineType: 'analgesics',
    descriptios:
      'Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla',
  },
  {
    imagePath: require('../assets/img/dog.png'),
    title: 'Anestesicos',
    medicineType: 'anesthetics',
    descriptios:
      'Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla',
  },
  {
    imagePath: require('../assets/img/dog.png'),
    title: 'Sedantes',
    medicineType: 'sedatives',
    descriptios:
      'Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla',
  },
  {
    imagePath: require('../assets/img/dog.png'),
    title: 'Antagonistas',
    medicineType: 'antagonists',
    descriptios:
      'Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla',
  },
  // {
  //   imagePath: require('../assets/img/dog.png'),
  //   title: 'Protocolos',
  //   medicineType: 'protocols',
  //   descriptios:
  //     'Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla',
  // },
];

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateTo = (
    medicationList: Array<Medicine>,
    screenTitle: string,
  ): void => {
    navigation.push('MedicationList', {
      medicineList: medicationList,
      screenName: screenTitle,
    });
  };

  const MedicineCards: React.FC = () => {
    return (
      <>
        {MedicineCardList.map((med, index) => {
          return (
            <ButtonOption
              key={index.toString()}
              imagePath={med.imagePath}
              title={med.title}
              medicineType={med.medicineType}
              description={med.descriptios}
              onPress={navigateTo}
            />
          );
        })}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <MedicineCards />
          </View>
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
  scrollView: {
    backgroundColor: Colors.light,
  },
  body: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.light,
  },
});

export default Home;
