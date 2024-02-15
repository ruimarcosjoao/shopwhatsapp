import { View, Text, ScrollView } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "@/components/header";
import Product from "@/components/Product";

import { useCartStore } from "@/stores/card-store";
import { formatCurrency } from "@/utils/functions/format-currency";
import Input from "@/components/input";

export default function Cart() {
  const cartStore = useCartStore();
  const totalValue = cartStore.products.reduce(
    (acc, value) => acc + value.price * value.quantity,
    0
  );

  return (
    <View className="flex-1 pt-8">
      <Header title="Seu Carrinho" />
      <KeyboardAwareScrollView>
        <View className="p-5 flex-1">
          <ScrollView className="">
            {cartStore.products.length > 0 ? (
              <View className="flex-1 border-b border-slate-700 mb-2">
                {cartStore.products.map((product) => (
                  <Product key={product.id} data={product} />
                ))}
              </View>
            ) : (
              <Text className="font-body text-neutral-400 text-center my-8">
                Seu carrinho está vazio
              </Text>
            )}
            {cartStore.products.length > 0 && (
              <View>
                <View className="flex-row gap-2 items-center">
                  <Text className="text-white text-xl font-subtitle">
                    Total
                  </Text>
                  <Text className="text-lime-400 text-2xl font-heading">
                    {formatCurrency(totalValue)}
                  </Text>
                </View>
                <Input placeholder="Informe o seu endereço de entrega" />
              </View>
            )}
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
