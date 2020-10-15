import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/props/MainStackNavigatorTypes';
import Home from '../screens/Home';
import PetInfo from '../screens/PetInfo';
import MedicationList from '../screens/MedicationList';

const RootStack = createStackNavigator<RootStackParamList>();

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="PetInfo" component={PetInfo} />
        <RootStack.Screen name="MedicationList" component={MedicationList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
