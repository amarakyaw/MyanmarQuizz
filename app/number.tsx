import Header from "@/components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizNumber = () => {
  const { category } = useLocalSearchParams<{ category: string }>();

  const handlePress = (num: number, type: string) => {
    router.push(
      `/questions?numQuestions=${num}&category=${category}&type=${type}`,
    );
  };

  return (
    <View style={styles.container}>
      <Header onHeaderPress={() => router.navigate("/category")} />

      <View style={styles.innerText}>
        <Text style={styles.text}>မေးခွန်း အဆင့်</Text>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(5, "easy")}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>လွယ်ကူသော</Text>
              <View style={styles.starRow}>
                <FontAwesome name="star" size={18} color="#fff" />
                <FontAwesome name="star-o" size={18} color="#fff" />
                <FontAwesome name="star-o" size={18} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(10, "medium")}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>သာမန်</Text>
              <View style={styles.starRow}>
                <FontAwesome name="star" size={18} color="#fff" />
                <FontAwesome name="star" size={18} color="#fff" />
                <FontAwesome name="star-o" size={18} color="#fff" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={styles.customButton}
            onPress={() => handlePress(20, "hard")}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>ခက်ခဲသော</Text>
              <View style={styles.starRow}>
                <FontAwesome name="star" size={18} color="#fff" />
                <FontAwesome name="star" size={18} color="#fff" />
                <FontAwesome name="star" size={18} color="#fff" />
              </View>
            </View>
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
  innerText: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20%",
  },
  buttonWrapper: {
    width: "60%",
    marginTop: "20%",
  },
  customButton: {
    backgroundColor: "#b58bf9",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  starRow: {
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
