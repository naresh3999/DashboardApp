import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Nareshhh HomeScreen</Text>
      <Button
        title="NextScreen"
        onPress={() => {
          navigation.navigate('Splash');
        }}
      />
    </View>
  );
}
