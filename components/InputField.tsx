import React from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  label: string;
}

export default function InputField({ label, ...props }: Props) {
  return (
    <View className="space-y-1">
      <Text className="text-parag font-gaeguBold text-xl">{label}</Text>
      <TextInput
        className="bg-blossom-55 rounded-full px-4 py-4 text-parag font-gaeguBold text-lg mb-5"
        placeholderTextColor="#6c584c"
        {...props}
      />
    </View>
  );
}
