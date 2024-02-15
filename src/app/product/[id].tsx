import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { Redirect, useLocalSearchParams } from "expo-router";
import { Feather } from "@expo/vector-icons";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/Button";
import ButtonLink from "@/components/Button-link";

import { useCartStore } from "@/stores/card-store";

export default function ProductScreen() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams();

  const product = PRODUCTS.find((item) => item.id === id);

  const cartQuantityDisplay = cartStore.products.filter(
    (item) => item.id === product?.id
  )[0];

  function handleAddToCart() {
    cartStore.add(product!);
  }

  if (!product) {
    return <Redirect href={"/"} />;
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 p-5">
        <View className="flex-row flex-wrap justify-between items-center mb-6">
          <Text className="text-slate-400 text-2xl font-heading my-2">
            {product.title}
          </Text>
          <Text className="text-lime-400 text-xl font-heading my-2">
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
        {cartQuantityDisplay?.quantity > 0 &&
          cartQuantityDisplay.title === product.title && (
            <Text className="text-sm text-neutral-100">
              Quantidade:{" "}
              <Text className="text-sm text-lime-400 font-bold">
                {cartQuantityDisplay.quantity}
              </Text>
            </Text>
          )}
        <Button onPress={handleAddToCart}>
          <Button.Icon>
            <Feather name="plus" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar pedido</Button.Text>
        </Button>
        <ButtonLink title="Voltar ao Cardápio" href="/" />
      </View>
    </View>
  );
}
