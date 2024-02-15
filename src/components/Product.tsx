import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

type ProductDataProps = {
  id?: number;
  title: string;
  description: string;
  thumbnail: ImageProps;
  quantity?: number;
};

type ProductProps = TouchableOpacityProps & {
  data: ProductDataProps;
};

export default function Product({ data }: ProductProps) {
  return (
    <Link asChild href={`/product/${data.id}`}>
      <TouchableOpacity
        activeOpacity={0.8}
        className="w-full flex-row items-center pb-4"
      >
        <Image source={data.thumbnail} className="w-20 h-20 rounded-md" />
        <View className="flex-1 ml-3">
          <View className="flex flex-row justify-between items-center">
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>
          {data.quantity && (
            <Text className="text-sm text-neutral-100">
              quant:{" "}
              <Text className="text-sm text-lime-400 font-bold">
                {data.quantity}
              </Text>
            </Text>
          )}
          </View>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
