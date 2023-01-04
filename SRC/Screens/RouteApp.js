import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from '../Navigation/RouteNavigation';

export default function RouteApp() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </View>
  );
}
