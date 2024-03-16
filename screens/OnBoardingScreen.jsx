import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { om } from '../assets';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to HomeScreen after 8 seconds
    const timeout = setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 800);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#272d3e', '#432a4d']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Image source={om} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnBoardingScreen;
