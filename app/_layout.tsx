import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

export default function RootLayout() {
  const [fontsloaded] = useFonts({
      Myanmar: require("../assets/fonts/NotoSansMyanmar.ttf")
    });
  
    if (!fontsloaded) return null;
  return <Stack screenOptions={{headerShown:false}}/>;
}
