import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StyleSheet } from 'react-native';
import { style } from 'styled-system';
import AppStack from './src/components/stacks/AppStack';

export default function App() {
  return (
    <NativeBaseProvider>
        <AppStack />
        <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}


