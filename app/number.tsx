import Header from "@/components/Header";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizNumber = () => {
  const handlePress = (num: number, type: string) => {
    router.push(
      `/questions?numQuestions=${num}&category=${category}&type=${type}`,
    );
  };
  const { category } = useLocalSearchParams<{ category: string }>();
  return (
    <View style={styles.container}>
      <View>
        <Header onHeaderPress={() => router.navigate("/category")} />
      </View>
      <View style={styles.innerText}>
        <Text style={styles.text}>မေးခွန်း အဆင့်</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(5, "easy")}
          >
            <Text style={styles.buttonText}>လွယ်ကူသော</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(10, "medium")}
          >
            <Text style={styles.buttonText}>သာမန်</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(20, "hard")}
          >
            <Text style={styles.buttonText}>ခက်ခဲသော</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default QuizNumber;

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
