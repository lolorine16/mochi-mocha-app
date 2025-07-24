// components/CustomButton.tsx
import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type SimpleButtonProps = {
  title: string;
  onPress: () => void;
  className?: string;
  textClassName?: string;
} & TouchableOpacityProps;

export default function SimpleButton({
  title,
  onPress,
  className = 'bg-grass px-6 py-3 rounded-full',
  textClassName = 'text-white text-4xl font-dongleBold text-center',
  ...rest
}: SimpleButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} className={className} {...rest}>
      <Text className={textClassName}>{title}</Text>
    </TouchableOpacity>
  );
}
