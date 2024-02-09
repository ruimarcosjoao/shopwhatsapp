import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Button } from "@/components/Button";
import { Feather } from "@expo/vector-icons";
import ButtonLink from "@/components/Button-link";

export default function ProductScreen() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.filter((item) => item.id === id)[0];

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 p-5">
        <View className="flex-row justify-between items-center mb-6">
        <Text className="text-slate-400 text-2xl font-heading my-2">
          {formatCurrency(product.title)}
        </Text>
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        </View>
        <Text className="text-slate-400 font-body text-base leading-6 mb-6">
          {product.description}
        </Text>
        {product.ingredients.map((ingredients) => (
          <Text
            key={ingredients}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {ingredients}
          </Text>
        ))}
      </ScrollView>
      <View className="p-5 pb-8 gap-5">
        <Button>
          <Button.Icon>
            <Feather name="plus" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar pedido</Button.Text>
        </Button>
        <ButtonLink title="Voltar ao Cardápio" href="/"/>
      </View>
    </View>
  );
}
