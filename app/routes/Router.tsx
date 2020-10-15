import React from 'react';
import { Easing } from 'react-native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/props/MainStackNavigatorTypes';

// Screens
import Home from '../screens/Home';
import MedicationList from '../screens/MedicationList';

// Utils
import Colors from '../utils/Colors';

const RootStack = createStackNavigator<RootStackParamList>();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 400,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configClose = {
  animation: 'timing',
  config: {
    duration: 400,
    easing: Easing.linear,
  },
};

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          transitionSpec: {
            open: config,
            close: configClose,
          },
        }}
        animation="fade">
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Bienvenido',
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: Colors.lighter,
            headerStatusBarHeight: 10,
            headerTitleAlign: 'center',
          }}
        />
        <RootStack.Screen
          name="MedicationList"
          component={MedicationList}
          options={{
            title: 'Farmacos',
            headerStyle: { backgroundColor: Colors.primary },
            headerTintColor: Colors.lighter,
            animationEnabled: true,
            headerStatusBarHeight: 10,
            headerTitleAlign: 'center',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
