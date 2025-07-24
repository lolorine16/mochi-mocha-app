// components/AnimatedButton.tsx
import React, { useRef } from 'react';
import { Animated, Pressable, PressableProps, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
} & PressableProps;

export default function AnimatedButton({
  title,
  onPress,
  className = 'bg-grass px-6 py-3 rounded-full',
  textClassName = 'text-white text-4xl font-dongleBold text-center',
  ...rest
}: Props) {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      {...rest}
    >
      <Animated.View style={{ transform: [{ scale }] }} className={className}>
        <Text className={textClassName}>{title}</Text>
      </Animated.View>
    </Pressable>
  );
}
