import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};
export default function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image className="h-6 w-32" source={require("@/assets/logo.png")} />
        <Text className="text-white text-xl font-heading">{title}</Text>
      </View>
      {cartQuantityItems > 0 && (
        <TouchableOpacity activeOpacity={0.7} className="relative">
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-0 -right-3.5">
            <Text className="text-slate-900 font-body text-xs">
              {cartQuantityItems}
            </Text>
          </View>
          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
