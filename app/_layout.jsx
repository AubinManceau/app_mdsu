import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./index";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 flex justify-center items-center bg-primary-beige">
      <HomeScreen />
    </SafeAreaView>
  );
}
