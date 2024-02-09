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
          <Text className="text-slate-100 font-subtitle text-base flex-1">
            {data.title}
          </Text>
          <Text className="text-slate-400 text-xs leading-5 mt-0.5">
            {data.description}
          </Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
}
