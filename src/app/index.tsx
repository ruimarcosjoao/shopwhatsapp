import { View, Text, FlatList, SectionList } from "react-native";
import React, { useRef, useState } from "react";
import Header from "@/components/header";
import CategoryButton from "@/components/category-button";
import { CATEGORIES, MENU } from "@/utils/data/products";
import Product from "@/components/Product";
export default function Index() {
  const [isSelected, setIsSelected] = useState(CATEGORIES[0]);
  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(selectCategory: string) {
    setIsSelected(selectCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectCategory
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      });
    }
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

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Product data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
