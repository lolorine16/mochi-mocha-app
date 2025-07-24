import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import Dashboard from './Dashboard';

const expenses = [
  { id: 1, category: 'Food', description: 'Akoumeh zozo', amount: -2000, icon: require('../../assets/icons/pizza.png') },
  { id: 2, category: 'Clothes', description: 'Sous-vetement', amount: -8000, icon: require('../../assets/icons/shirt.png') },
  { id: 3, category: 'Food', description: 'Khom', amount: -500, icon: require('../../assets/icons/pizza.png') },
  { id: 4, category: 'Food', description: 'Attieke', amount: -1000, icon: require('../../assets/icons/pizza.png') },
  { id: 5, category: 'Food', description: 'Attieke', amount: -1000, icon: require('../../assets/icons/pizza.png') },
];

const incomes = [
  { id: 1, category: 'Salaire', description: 'Salaire mensuel', amount: 20000, icon: require('../../assets/icons/cash.png') },
  { id: 2, category: 'Cadeau', description: 'Anniversaire', amount: 5000, icon: require('../../assets/icons/coins.png') },
  { id: 3, category: 'Vente', description: 'Vente de vêtements', amount: 3000, icon: require('../../assets/icons/cash.png') },
  { id: 4, category: 'Autre', description: 'Remboursement', amount: 1500, icon: require('../../assets/icons/coins.png') },
  { id: 5, category: 'Autre', description: 'Remboursement', amount: 1500, icon: require('../../assets/icons/coins.png') },
];

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'home' | 'new' | 'dashboard'>('home');
  const [showIncome, setShowIncome] = useState(false);
  const data = showIncome ? incomes : expenses;
  const total = data.reduce((acc, curr) => acc + curr.amount, 0);

  let mainContent = null;
  if (currentPage === 'home') {
    mainContent = (
      <>
        {/* Balance */}
        <View className="items-center my-9">
          <Text className="text-5xl text-grass font-gaeguBold mb-1">Account</Text>
          <Text className="text-7xl text-outer font-jua">7000</Text>
          <Text className="text-outer font-gaeguBold text-xl">FCFA</Text>
        </View>
        {/* Expenses/Income Section */}
        <View className="bg-blossom-55 p-4 rounded-3xl overflow-hidden">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-parag text-2xl font-gaeguBold">
              {showIncome ? 'Income' : 'Expenses'}
            </Text>
            <Pressable onPress={() => setShowIncome((prev) => !prev)} hitSlop={10}>
              <AntDesign name="right" size={18} color="#6c584c" />
            </Pressable>
          </View>
          {data.length > 4 ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ maxHeight: 4 * 64 }}
            >
              {data.map((item) => (
                <View key={item.id} className="flex-row items-center space-x-4 mb-4">
                  <Image source={item.icon} className="w-10 h-10 bg-grass rounded-full mx-2" />
                  <View className="flex-1">
                    <Text className="text-grass font-gaeguBold text-2xl">{item.category}</Text>
                    <Text className="text-parag font-gaeguBold text-xl">{item.description}</Text>
                  </View>
                  <Text className={showIncome ? "text-green-600 font-gaeguBold text-lg" : "text-red-600 font-gaeguBold text-lg"}>
                    {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            data.map((item) => (
              <View key={item.id} className="flex-row items-center space-x-4 mb-4">
                <Image source={item.icon} className="w-10 h-10 bg-grass rounded-full mx-2" />
                <View className="flex-1">
                  <Text className="text-grass font-gaeguBold text-2xl">{item.category}</Text>
                  <Text className="text-parag font-gaeguBold text-xl">{item.description}</Text>
                </View>
                <Text className={showIncome ? "text-green-600 font-gaeguBold text-lg" : "text-red-600 font-gaeguBold text-lg"}>
                  {item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                </Text>
              </View>
            ))
          )}
          {/* Footer total en dehors du ScrollView */}
          <View className="border-t border-logo pt-2 flex-row justify-between">
            <Text className="text-parag font-gaeguBold text-2xl">
              {showIncome ? 'This Week (Income)' : 'This Week (Expenses)'}
            </Text>
            <Text className={showIncome ? "text-green-600 font-gaeguBold text-2xl" : "text-red-600 font-gaeguBold text-2xl"}>
              {total.toLocaleString()}.00
            </Text>
          </View>
        </View>
      </>
    );
  } else if (currentPage === 'dashboard') {
    mainContent = <Dashboard />;
  } else if (currentPage === 'new') {
    mainContent = (
      <View className="flex-1 items-center justify-center">
        <Text className="text-3xl font-jua">Nouvelle opération</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary px-4 pt-4 relative">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-1">
        <AntDesign name="menu-fold" size={24} color="#E9958F" />
        <View className="items-center">
          <Text className="font-jua text-3xl text-logo">Mochi-Mocha</Text>
          <Text className="font-jua text-md text-grass">Budget app</Text>
        </View>
        <AntDesign name="user" size={24} color="#E9958F" />
      </View>
      {/* ligne de sseparation */}
      <View className="border-t border-logo my-4" />
      {mainContent}
      {/*navigation bar */}
      <View className="flex-row bg-blossom-55 rounded-full justify-between items-center absolute bottom-3 left-3 right-3">
        <Pressable className="w-16 h-16 rounded-full items-center justify-center" onPress={() => setCurrentPage('home')}>
          <AntDesign name="home" size={28} color="#F57B74" style={{ opacity: currentPage === 'home' ? 1 : 0.4 }} />
        </Pressable>
        <Pressable className="w-16 h-16 rounded-full items-center justify-center" onPress={() => setCurrentPage('new')}>
          <AntDesign name="plus" size={28} color="#F57B74" style={{ opacity: currentPage === 'new' ? 1 : 0.4 }} />
        </Pressable>
        <Pressable className="w-16 h-16 rounded-full items-center justify-center" onPress={() => setCurrentPage('dashboard')}>
          <AntDesign name="linechart" size={28} color="#F57B74" style={{ opacity: currentPage === 'dashboard' ? 1 : 0.4 }} />
        </Pressable>
      </View>
    </View>
  );
}
