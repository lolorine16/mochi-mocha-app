import React from 'react';
import { Dimensions, Image, ScrollView, Text, View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const pieData = [
  { name: 'Food', amount: 5000, color: '#F57B74', legendFontColor: '#6c584c', legendFontSize: 14 },
  { name: 'Clothes', amount: 8000, color: '#84a59d', legendFontColor: '#6c584c', legendFontSize: 14 },
  { name: 'Transport', amount: 2000, color: '#EDAFB8', legendFontColor: '#6c584c', legendFontSize: 14 },
];

// Données d'exemple (à synchroniser avec home.tsx si besoin)
const lastTransactions = [
  { id: 1, type: 'expense', category: 'Food', description: 'Akoumeh zozo', amount: -2000, icon: require('../../assets/icons/pizza.png') },
  { id: 2, type: 'expense', category: 'Clothes', description: 'Sous-vetement', amount: -8000, icon: require('../../assets/icons/shirt.png') },
  { id: 3, type: 'income', category: 'Salaire', description: 'Salaire mensuel', amount: 20000, icon: require('../../assets/icons/cash.png') },
  { id: 4, type: 'income', category: 'Cadeau', description: 'Anniversaire', amount: 5000, icon: require('../../assets/icons/coins.png') },
 
];

export default function Dashboard() {
  return (
    <ScrollView className="flex-1" contentContainerStyle={{ paddingBottom: 32 }}>
      <Text className="font-jua text-3xl text-logo mb-4 mt-2 text-center">Dashboard</Text>
      <View className="bg-blossom-25 rounded-2xl p-4 mb-4">
        <Text className="text-parag font-gaeguBold text-2xl mb-2">Spending breakdown</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 32}
          height={180}
          chartConfig={{
            color: (opacity = 1) => `rgba(76, 86, 86, ${opacity})`,
            labelColor: () => '#6c584c',
          }}
          accessor="amount"
          backgroundColor="transparent"
          paddingLeft="0"
        />
      </View>
      {/* Dernières transactions */}
      <View className="bg-blossom-25 rounded-2xl p-4 mb-4">
        <Text className="text-parag font-gaeguBold text-2xl mb-2">Last transactions</Text>
        {lastTransactions.map((item) => (
          <View key={item.id} className="flex-row items-center space-x-4 mb-3">
            <Image source={item.icon} className="w-8 h-8 bg-grass rounded-full" />
            <View className="flex-1">
              <Text className="text-grass font-gaeguBold text-lg ml-2">{item.category}</Text>
              <Text className="text-parag font-gaeguBold text-md ml-2">{item.description}</Text>
            </View>
            <Text className={item.type === 'income' ? 'text-green-600 font-gaeguBold text-md' : 'text-red-600 font-gaeguBold text-md'}>
              {item.amount > 0 ? '+' : ''}{item.amount.toLocaleString()} FCFA
            </Text>
          </View>
        ))}
      </View>
      {/* Tu peux ajouter d'autres widgets ici */}
    </ScrollView>
  );
}
