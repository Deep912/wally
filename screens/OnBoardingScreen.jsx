import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { SplashScreen } from '../assets';
import { useNavigation } from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to HomeScreen after 3 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 800);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={SplashScreen}  />
    </View>
  );
};

export default OnBoardingScreen;
