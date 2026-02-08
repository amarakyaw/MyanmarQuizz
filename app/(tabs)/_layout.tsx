import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tb1"
        options={{
          
          title: "စကားထာ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb2"
        options={{
          
          title: "စကားပုံ",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tb3"
        options={{
          
          title: "စကားလိမ်",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
