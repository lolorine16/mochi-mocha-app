import { AntDesign } from '@expo/vector-icons';
import React, { useRef } from 'react';
import { Animated, Pressable, Text } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

export default function AuthButton({ title, onPress }: Props) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.75, 
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1, 
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className="bg-outer rounded-full px-6 py-3 flex-row items-center justify-center space-x-4"
      >
        <AntDesign name="arrowright" size={20} color="#F7E1D7" />
        <Text className="text-primary font-gaeguBold text-2xl">{title}</Text>
      </Pressable>
    </Animated.View>
  );
}
