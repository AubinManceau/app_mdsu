import "../assets/styles/global.css";
import { Text, View } from 'react-native';
import { useAppFonts } from '../scripts/importFonts';

export default function App() {
  useAppFonts();

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="font-kindHeart text-xl text-primary-red">
        Hello KindHeart
      </Text>
      <Text className="font-poppinsBold italic text-primary-blue">
        Hello Poppins Thin
      </Text>
    </View>
  );
}
