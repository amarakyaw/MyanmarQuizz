import { router, Tabs } from "expo-router";
import { Image, Pressable, Text } from "react-native";

export default function RootLayout() {
  return (
    <Tabs>
      

      <Tabs.Screen name="byee" options={{
            headerShown: false,
            title: "ဗျည်း",
            tabBarLabelStyle:{
                color:'#459c62'
            },
            tabBarIcon: () => 
                (
               <Image
              source={require("../../assets/images/icon1.jpeg")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen name="taya" options={{ headerShown: false, title: "သရ" }} />
    </Tabs>
  );
}
