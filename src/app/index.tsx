import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "@/components/header";
import CategoryButton from "@/components/category-button";
import { CATEGORIES } from "@/utils/data/products";
export default function Index() {
  const [isSelected, setIsSelected] = useState(CATEGORIES[0]);

  function handleCategorySelect(selectCategory: string) {
    setIsSelected(selectCategory);
  }

  return (
    <View className="pt-8 flex-1">
      <Header title="Faça o seu pedido" cartQuantityItems={5} />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            onPress={() => handleCategorySelect(item)}
            title={item}
            isSelected={isSelected === item}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
