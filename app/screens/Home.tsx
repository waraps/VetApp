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
    imagePath: require('../assets/img/analgesics.png'),
    title: 'Analsegicos',
    medicineType: 'analgesics',
    descriptios:
      'Son fármacos usados para lograr la analgesia, el alivio y reducción del dolor, ya sea de cabeza, muscular o en general.​​​',
  },
  {
    imagePath: require('../assets/img/anesthetics.png'),
    title: 'Anestesicos',
    medicineType: 'anesthetics',
    descriptios:
      'Son fármacos usados para bloquear la sensibilidad táctil y dolorosa, sea en todo o parte de su cuerpo y sea con o sin compromiso de conciencia.',
  },
  {
    imagePath: require('../assets/img/sedatives.png'),
    title: 'Sedantes',
    medicineType: 'sedatives',
    descriptios:
      'Son fármacos usados para la reducción de la irritabilidad o agitación del paciente.',
  },
  {
    imagePath: require('../assets/img/antagonists.png'),
    title: 'Antagonistas',
    medicineType: 'antagonists',
    descriptios:
      'Son fármacos usados para frenar la acción o el efecto de otro fármaco.',
  },
  // {
  //   imagePath: require('../assets/img/protocols.png'),
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
