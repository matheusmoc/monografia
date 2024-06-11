import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaView, ActivityIndicator, View, StyleSheet } from 'react-native';
import SignOutButton from './../components/SignOutButton';
import Header from './../components/Home/Header';

import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify, I18n } from 'aws-amplify';
import awsExports from './../src/aws-exports';
import ptBR from './../src/translations/pt-BR';

Amplify.configure(awsExports);

I18n.putVocabularies({
  'pt-BR': ptBR,
});

I18n.setLanguage('pt-BR');

function RootLayout() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./../assets/fonts/Outfit-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header />
      </View>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
      <View style={styles.signOutContainer}>
        <Authenticator.Provider>
          <Authenticator>
            <SignOutButton />
          </Authenticator>
        </Authenticator.Provider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signOutContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default withAuthenticator(RootLayout);
