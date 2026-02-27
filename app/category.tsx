import Header from "@/components/Header";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Category = () => {
  const categoryRouter = (category: string) => {
    router.push(`/number?category=${category}`);
  };
  return (
    <View style={styles.container}>
      <View>
        <Header onHeaderPress={() => router.navigate("/")} />
      </View>
      <View style={styles.innerText}>
        <Text style={styles.text}>မေးခွန်း အမျိုးအစား ရွေးချယ်ပါ။</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => categoryRouter("စကားထာ")}
          >
            <Text style={styles.buttonText}>📚စကားထာ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => categoryRouter("စကားပုံ")}
          >
            <Text style={styles.buttonText}>📚စကားပုံ</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => categoryRouter("စကားလိမ်")}
          >
            <Text style={styles.buttonText}>📚စကားလိမ်</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
  },
  text: {
    fontSize: 22,
    color: "#b58bf9",
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonWrapper: {
    width: "60%",
    marginTop: "20%",
  },
  innerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  customButton: {
    backgroundColor: "#b58bf9",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
