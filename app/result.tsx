import { router } from "expo-router";
import React, { useContext } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { QuizContext, toMyanmarNumber } from "../context/quizContext";

const { width } = Dimensions.get("window");

const Result = () => {
  const { score = 0, total = 0, setScore } = useContext(QuizContext);

  const isPassed = total > 0 ? score > total / 2 : false;

  const handleRestart = () => {
    setScore(0);
    router.replace("/category");
  };

  const progress = total > 0 ? score / total : 0;
  const progressPercent = Math.round(progress * 100);

  const ProgressBar = () => (
    <View style={styles.progressBar}>
      <View style={[styles.progressFill, { width: `${progressPercent}%` }]} />
    </View>
  );

  return (
    <View style={styles.container}>
      {!isPassed ? (
        <Image
          source={require("../assets/images/gameover.png")}
          style={styles.failImage}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={require("../assets/images/award.png")}
          style={styles.awardImage}
          resizeMode="contain"
        />
      )}

      <Text style={styles.title}>
        {!isPassed ? "သင်မအောင်မြင်ပါ" : "ဂုဏ်ယူပါတယ် \n သင်အောင်မြင်ပါပြီ။"}
      </Text>

      <Text style={styles.score}>
        သင်၏ ရမှတ် {toMyanmarNumber(score)} / {toMyanmarNumber(total)}
      </Text>

      <ProgressBar />

      <TouchableOpacity style={styles.button} onPress={handleRestart}>
        <Text style={styles.buttonText}>ထပ်မံကြိုးစားမည်</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: "#f3e8ff",
  },
  awardImage: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
    opacity: 0.8,
  },
  failImage: {
    width: width * 0.6,
    height: width * 0.6,
    marginBottom: 20,
    opacity: 0.3,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: "#b58bf9",
    marginBottom: 10,
  },
  score: {
    fontSize: 20,
    fontWeight: "600",
    color: "#b58bf9",
    marginBottom: 20,
  },
  progressBar: {
    width: "80%",
    height: 20,
    backgroundColor: "#e0d4f7",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 30,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#b58bf9",
    borderRadius: 12,
  },
  button: {
    backgroundColor: "#b58bf9",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },
});
