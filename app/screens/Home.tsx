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

const Home: React.FC<HomeScreenProps> = ({ route, navigation }) => {
  const navigateTo = () => {
    navigation.push('MedicationList');
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <ButtonOption
              imagePath={require('../assets/img/dog.png')}
              title="Analsegicos"
              description="Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla"
              onpress={navigateTo}
            />
            <ButtonOption
              imagePath={require('../assets/img/dog.png')}
              title="Anestesicos"
              description="Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla"
              onpress={navigateTo}
            />
            <ButtonOption
              imagePath={require('../assets/img/dog.png')}
              title="Sedantes"
              description="Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla"
              onpress={navigateTo}
            />
            <ButtonOption
              imagePath={require('../assets/img/dog.png')}
              title="Antagonistas"
              description="Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla"
              onpress={navigateTo}
            />
            <ButtonOption
              imagePath={require('../assets/img/dog.png')}
              title="Protocolos"
              description="Esto solo es una super larga descripcion, para emular el diseño de la aplicacion. bla bla bla bla"
              onpress={navigateTo}
            />
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
