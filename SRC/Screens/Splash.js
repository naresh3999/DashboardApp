import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//import EStyleSheet from 'react-native-extended-stylesheet';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function Spalsh() {
  return (
    <View style={styles.Container}>
      <Text>Its Splash SCreen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    width: responsiveWidth(50),
    height: responsiveHeight(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
