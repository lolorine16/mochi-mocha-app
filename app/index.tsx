import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';

import AnimatedButton from '../components/AnimatedButton';
import { useNavigateTo } from '../hooks/useNavigateTo';



const AnimatedImage = Animated.createAnimatedComponent(Animated.Image);

export default function FloatingImage() {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const { goTo } = useNavigateTo();

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: -20,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [floatAnim]);

  return (
    <View className="flex-1 bg-primary justify-center items-center">
      <View className="relative w-full h-80 items-center justify-center">

        {/* la piece */}
        <AnimatedImage
          source={require('../assets/images/coins.png')}
          className="w-28 h-28 absolute -top-4 right-4"
          style={{ transform: [{ translateY: floatAnim }] }}
          resizeMode="contain"
        />

        {/* le billet */}
        <AnimatedImage
          source={require('../assets/images/cash.png')}
          className="w-28 h-28 absolute bottom-0 left-4"
          style={{ transform: [{ translateY: floatAnim }] }}
          resizeMode="contain"
        />

        {/* logo */}
        <View className="items-center space-y-2">
          <Text className="text-logo text-5xl font-jua text-center">Mochi-Mocha</Text>
          <Text className="text-grass text-xl font-jua text-center">Budget app</Text>
        </View>

      </View>

      <AnimatedButton title="Start" onPress={() => goTo('./(auth)/SignIn')} />



    </View>
  );
}
