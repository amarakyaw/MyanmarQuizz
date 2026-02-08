import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const QuizNumber = () => {
  const handlePress = (num: number) => {
    // Only pass numQuestions as query param
    router.push(`/questions?numQuestions=${num}&category=${category}`);
    
  };
const{category} = useLocalSearchParams<{category: string}>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>မေးခွန်း အရေအတွက်</Text>

      <View style={styles.buttonWrapper}>
        <Button title="၁၀" color="#b58bf9" onPress={() => handlePress(10)} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="၂၀" color="#b58bf9" onPress={() => handlePress(20)} />
      </View>
    </View>
  );
};

export default QuizNumber;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6B9FF",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 22,
    color: "#b58bf9",
    fontWeight: "bold",
    marginBottom: 30,
  },
  buttonWrapper: {
    width: "60%",
    marginTop: 20,
  },
});
