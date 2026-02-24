import Header from "@/components/Header";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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
          <Button
            title="လွယ်ကူသော"
            color="#b58bf9"
            onPress={() => handlePress(5, "easy")}
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button
            title="သာမန်"
            color="#b58bf9"
            onPress={() => handlePress(10, "medium")}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            title="ခက်ခဲသော"
            color="#b58bf9"
            onPress={() => handlePress(20, "hard")}
          />
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
});
