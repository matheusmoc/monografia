import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useAuthenticator } from '@aws-amplify/ui-react-native';
import { Colors } from './../constants/Colors';

export default function SignOutButton() {
  const { signOut } = useAuthenticator();

  return (
    <TouchableOpacity style={styles.button} onPress={signOut}>
      <Text style={styles.buttonText}>Sair</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
