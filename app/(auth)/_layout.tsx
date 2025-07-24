// app/_layout.tsx
import { Stack } from 'expo-router';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import useFonts from '../../hooks/useFonts';
import './../globals.css';

export default function RootLayout() {
  const fontsLoaded = useFonts();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync('#F7E1D7'); //  nav bar 
  }, []);

  if (!fontsLoaded) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
        <Text>Chargement des polices...</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar backgroundColor="#F7E1D7" barStyle="dark-content" />
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}