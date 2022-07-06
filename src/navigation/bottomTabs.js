import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';
import ProfileScreen from '../screens/profile';
import HomeScreen from '../screens/home';
import {PRIMARY_COLOR} from '../styles/color';
import FavouriteScreen from '../screens/favourite';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function BottomTabs({}) {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: PRIMARY_COLOR,
      }}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerStyle: {},
          tabBarIcon: ({color}) => {
            return <Icon name={'home'} color={color} size={24} />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,

          tabBarIcon: ({color}) => {
            return <Icon name={'heart'} color={color} size={24} />;
          },
        }}
        name="Favourite"
        component={FavouriteScreen}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => {
            return <Icon name={'user'} color={color} size={24} />;
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
