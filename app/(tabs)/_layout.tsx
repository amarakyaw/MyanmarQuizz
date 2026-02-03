import { useFonts } from 'expo-font';
import { Tabs } from "expo-router";

export default function RootLayout() {
  const [fontsloaded] = useFonts({
      Myanmar: require("../assets/fonts/NotoSansMyanmar.ttf")
    });
  
    if (!fontsloaded) return null;
  return (
    <Tabs />
  );
}
