import React from 'react'
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from './../../constants/Colors' 

export default function TabLayout() {
  return (
      <Tabs name="(tabs)" screenOptions={{headerShown: false}}>
        <Tabs.Screen name='home' 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,
            tabBarActiveTintColor: Colors.primary
          }} 
        />
        <Tabs.Screen name='patients'
          options={{
            tabBarLabel: 'Pacientes',
            tabBarIcon: ({color}) => <FontAwesome6 name="people-roof" size={24} color={color} />,
            tabBarActiveTintColor: Colors.primary
          }} 
        />
        <Tabs.Screen name='profile'
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({color}) => <FontAwesome6 name="person" size={24} color={color} />,
            tabBarActiveTintColor: Colors.primary
          }} 
        />
    </Tabs>
  )
}