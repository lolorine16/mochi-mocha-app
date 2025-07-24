

import { Pressable, Text, View } from 'react-native';
import AuthButton from '../../components/AuthButton';
import InputField from '../../components/InputField';

import { useNavigateTo } from '../../hooks/useNavigateTo';

export default function SignUp() {
   const { goTo } = useNavigateTo();
   


  return (
    <View className="flex-1 justify-center px-7 bg-primary">

      {/* entête du logo */}
      <View className="items-center mb-4 mt-0">
        <Text className="text-logo text-4xl font-jua">Mochi-Mocha</Text>
        <Text className="text-grass font-jua">Budget app</Text>
      </View>

      {/* ligne de séparation */}
      <View className="border-t border-logo my-4" />

      {/* Titre inscription */}
      <View className="items-center mb-10 mt-7">
        <Text className="text-outer font-gaeguBold text-3xl">Sign Up</Text>
        <Text className="text-grass text-3xl font-gaegu">Create an account !</Text>
      </View>

      {/* Formulaire */}
      <View className="mt-4 mb-1">
        <InputField label="Username" placeholder="Enter your name" />
        <InputField label="e-mail" placeholder="Enter your e-mail" keyboardType="email-address" />
        <InputField label="Password" placeholder="Enter password" secureTextEntry />
      </View>

      {/* lien */}
      <View className="mt-6 flex-row justify-between items-center">
        
        {/* Lien vers Sign In */}
 
        <Pressable onPress={() => goTo('/SignIn')}>
          <Text className="text-outer text-2xl font-gaeguBold underline">
            Sign In
          </Text>
        </Pressable>


        {/*inscription */}
        <AuthButton title="sign up" onPress={() => goTo('/(tabs)/home')}/>
      </View>

    </View>
  );
}
