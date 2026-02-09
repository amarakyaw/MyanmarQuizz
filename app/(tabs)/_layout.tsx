import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function RootLayout() {
  return (
    <Tabs>

      <Tabs.Screen
        name="index"
        options={{
          title: "ပင်မစာမျက်နှာ",
          headerShown: false,
          tabBarIcon: ({  focused,size }) => (
            <Ionicons name= {focused ? "home" : "home-outline"} size={size} color='#B581FD' />
          ),
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "လေ့လာမယ်",
          headerShown: false,
          tabBarIcon: ({  focused,size}) => (
            <Ionicons name= {focused ? "book" : "book-outline"} size={size} color='#B581FD' />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "မှတ်စုများ",
          headerShown: false,
          tabBarIcon: ({  focused,size }) => (
            <Ionicons name= {focused ? "bookmark" : "bookmark-outline"} size={size} color='#B581FD' />
          ),
        }}/>


     
    </Tabs>
  );
}
