import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import Colors from '../utils/Colors';
import Header from '../components/Header';
import ButtonOption from '../components/ButtonOption';
import Footer from '../components/Footer';
import { HomeScreenProps } from '../types/props/HomeScreenPropsTypes';

const Home: React.FC<HomeScreenProps> = ({ route, navigation }) => {
  const navigateTo = () => {
    navigation.push('PetInfo');
  };
  return (
    <>
      <StatusBar barStyle="default" />
      <Header title="Bienvenidos a VetApp" />
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.sectionContainerTitle}>
            <Text style={styles.title}>Que desea hacer?</Text>
          </View>
          <View style={styles.sectionContainer}>
            <ButtonOption title="Analgesicos" onpress={navigateTo} />
          </View>
          <View style={styles.sectionContainer}>
            <ButtonOption title="Anestesicos" onpress={navigateTo} />
          </View>
          <View style={styles.sectionContainer}>
            <ButtonOption title="Sedantes" onpress={navigateTo} />
          </View>
          <View style={styles.sectionContainer}>
            <ButtonOption title="Usar Protocolos" onpress={navigateTo} />
          </View>
          <View style={styles.sectionContainer}>
            <ButtonOption title="Antagonistas" onpress={navigateTo} />
          </View>
        </View>
        <Footer />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  body: {
    flex: 1,
  },
  sectionContainerTitle: {
    marginTop: 5,
    padding: 10,
  },
  title: {
    fontSize: 22,
    color: Colors.lighter,
    textAlign: 'center',
  },
  sectionContainer: {
    marginTop: 20,
  },
});

export default Home;
