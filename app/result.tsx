import { router } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { QuizContext, toMyanmarNumber } from "../context/quizContext";

const Result = () => {
  const { score, total, setScore } = useContext(QuizContext);
  const isPassed = score > total / 2;

  const handleRestart = () => {
    setScore(0); 
    router.push("/category");
  };

  const progress = score / total; 
  const progressPercent = Math.round(progress * 100);

 
  const ProgressBar = () => (
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
    </View>
  );

  if (isPassed) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>ဂုဏ်ယူပါတယ်။ </Text>
        <Text style={styles.title}>သင်အောင်မြင်ပါပြီ 🎉</Text>
        <Text style={styles.score}>
          သင်၏ ရမှတ် {toMyanmarNumber(score)} /{" "}
          {toMyanmarNumber(total)}
        </Text>

        
        <ProgressBar />

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}> ထပ်မံကြိုးစားမည်။</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>သင်မအောင်မြင်ပါ။ 😖</Text>
        <Text style={styles.score}>
          သင်၏ ရမှတ် {toMyanmarNumber(score)} / {toMyanmarNumber(total)}
        </Text>

       
        <ProgressBar />

        <TouchableOpacity style={styles.button} onPress={handleRestart}>
          <Text style={styles.buttonText}> ထပ်မံကြိုးစားမည်။</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f3e8ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#b58bf9",
    marginStart:'10%'
  },
  score: { fontSize: 22, fontWeight: "600", marginBottom: 20  , color: "#b58bf9" },
  progressBar: {
    width: "80%",
    height: 25,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 30,
    
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#b58bf9", 
    borderRadius: 12,
  },
  button: { backgroundColor: "#b58bf9", padding: 15, borderRadius: 12 },
  buttonText: { color: "white", fontSize: 18, fontWeight: "700" },
});
