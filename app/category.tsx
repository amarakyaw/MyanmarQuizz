import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Category = () => {
  const categoryRouter = (category: string) => {
    router.push(`/number?category=${category}`);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.navigate("/")}
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          marginTop: "10%",
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#4C1D95" />
        <Text style={{ fontSize: 16, color: "#4C1D95", marginLeft: 6 }}>
          ရှေ့သို့
        </Text>
      </TouchableOpacity>
      <View style={styles.innerText}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#b58bf9" }}>
          {" "}
          မေးခွန်း အမျိုးအစား ရွေးချယ်ပါ။
        </Text>
        <View style={styles.btn}>
          <Button
            title="စကားထာ"
            color="#b58bf9"
            onPress={() => categoryRouter("စကားထာ")}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="စကားပုံ"
            color="#b58bf9"
            onPress={() => categoryRouter("စကားပုံ")}
          />
        </View>
        <View style={styles.btn}>
          <Button
            title="စကားလိမ်"
            color="#b58bf9"
            onPress={() => categoryRouter("စကားလိမ်")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  btn: {
    width: "30%",
    marginTop: "30%",
    borderRadius: 40,
  },
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
  },
  innerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
});
