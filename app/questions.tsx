import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";

import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { QuizContext, toMyanmarNumber } from "../context/quizContext";

type QuizItem = {
  id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_answer: string;
};
type numberQuestions = {
  numQuestions: string;
  category: string;
}

const TenQuestions = () => {
  const { numQuestions, category } = useLocalSearchParams<numberQuestions>();

  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [current, setCurrent] = useState(0);
  const { score, setScore, setTotal } = useContext(QuizContext);
  const [saved, setSaved] = useState(false);
  const [savedItems, setSavedItems] = useState<string[]>([]);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    try {

      const url =
        "https://raw.githubusercontent.com/amarakyaw/myanmar-api/main/db.json";
      const res = await fetch(url);
      const data = await res.json();

      await AsyncStorage.setItem("quizData", JSON.stringify(data.quiz));
      setSavedItems([data.quiz]);

      const filtered = data.quiz.filter((item: any) => item.title === category.trim());

      const shuffled = filtered.sort(() => 0.5 - Math.random());
      setQuiz(shuffled.slice(0, Number(numQuestions)));
      setTotal(Number(numQuestions));
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const handleRouter = () => {
    // router.replace("/category")
    // setScore(0);
    // router.back()
    previousQuestion()
  }
  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    } else {
      router.push("/category");
    }
  }
  
  const checkAnswer = (selected: string) => {
    if (selected === quiz[current].correct_answer) {


      setScore(score + 1);
    }

    nextQuestion();
  };
  const saveItem = (id: string) => {
    setSaved(true);


  };

  const nextQuestion = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1);
      setSaved(false);
    } else {
      router.push("/result");
    }
  };

  if (quiz.length === 0) {
    return (
      <Text>Loading...</Text>
    );
  }

  const q = quiz[current];

  return (
    <View style={styles.container}>


      <View style={styles.quizCard}>


        <Text style={styles.cardCategory}>{category}</Text>

        <Text style={styles.cardQuestion}>
          မေးခွန်းနံပါတ်  {toMyanmarNumber(current + 1)} {'\n'} {q.question}
        </Text>


        <View style={styles.cardOptions}>
          {(["option1", "option2", "option3", "option4"] as const).map(
            (key, index) => (
              <TouchableOpacity
                key={index}
                style={styles.cardOptionButton}
                onPress={() => checkAnswer(key)}
              >
                <Text style={styles.cardOptionText}>
                  {q[key]}
                </Text>
              </TouchableOpacity>
            )
          )}
        </View>


        <Text style={styles.lengthText}>
          မေးခွန်း {toMyanmarNumber(current + 1)} / {toMyanmarNumber(quiz.length)}
          <Pressable onPress={() => saveItem(q.id)}>
            <Text style={styles.bookmark}>{saved ? "❤️" : "🤍"}</Text>
          </Pressable>
        </Text>

      </View>

      <View style={styles.bottom}>

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleRouter()}
        >
          <Text style={styles.actionText}>နောက်သို့။</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={nextQuestion}>
          <Text style={styles.actionText}>ကျော်မည်။</Text>
        </TouchableOpacity>
      </View>

    </View>
  );

};

export default TenQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",

  },

  top: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },

  questionText: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1E3A8A",
    marginBottom: 10,
  },

  options: {
    flex: 1,
    justifyContent: "center",
  },

  optionButton: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 15,
  },

  optionText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1E3A8A",
    marginTop: 5,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
    paddingHorizontal: 10,
  },

  actionButton: {
    backgroundColor: "#b58bf9",

    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: '10%',

  },

  actionText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#EEF3FB",
  },
  quizCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 24,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginTop: '10%',
    width: '100%'

  },

  cardCategory: {
    fontSize: 18,
    fontWeight: "700",
    color: "#4C1D95",
    marginBottom: 12,


  },

  cardQuestion: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4C1D95",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 40,

  },

  cardOptions: {
    width: "100%",
  },

  cardOptionButton: {
    backgroundColor: "#F3E8FF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginBottom: 14,
  },

  cardOptionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4C1D95",
    textAlign: "center",
  },

  lengthText: {
    marginTop: 10,
    fontSize: 14,
    color: "#6B7280",
  },
  bookmark: {
    fontSize: 24,
  }

});
