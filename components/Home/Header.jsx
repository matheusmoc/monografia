import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

import { Amplify } from 'aws-amplify';
import config from './../../src/amplifyconfiguration.json';
import { TextInput } from 'react-native-gesture-handler';

Amplify.configure(config);

// retrieves only the current value of 'user' from 'useAuthenticator'
const userSelector = (context) => [context.user];

export default function Header() {
  const { user } = useAuthenticator(userSelector);
  const [backgroundColor, setBackgroundColor] = useState('');

  useEffect(() => {
    generateRandomColor();
  }, []);

  const generateRandomColor = () => {
    let r, g, b;
    do {
      r = Math.floor(Math.random() * 256);
      g = Math.floor(Math.random() * 256);
      b = Math.floor(Math.random() * 256);
    } while ((r === 255 && g === 255 && b === 255) || (r === g && g === b && r !== 255));
    
    const randomColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
    setBackgroundColor(randomColor);
  }

  return (
    <View style={{
      padding: 20,
      paddingTop: 10,
      backgroundColor: Colors.primary,
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20,

    }}>
      <View style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          backgroundColor: backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
      }}>
          <Text style={{ 
            fontSize: 20,
            fontFamily: 'outfit-medium',
            color: 'white'
           }}>
            {user.attributes.email.toUpperCase().charAt(0)}
          </Text>
      </View>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        marginTop: 15,
        borderRadius: 8
      }}>
        <AntDesign name="search1" size={24} color={Colors.primary} />
        <TextInput placeholder='Pesquisar...' style={{fontFamily: 'outfit', fontSize:16}}/>
      </View>
    </View>
  );
}
