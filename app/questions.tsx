import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";

import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import {
  Modal,
  Pressable,
  ScrollView,
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
  type: string;
  correct_answer: string;
};

type numberQuestions = {
  numQuestions: string;
  category: string;
  type: string;
};

const TenQuestions = () => {
  const { numQuestions, category, type } =
    useLocalSearchParams<numberQuestions>();
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [current, setCurrent] = useState(0);
  const { score, setScore, setTotal } = useContext(QuizContext);
  const [saved, setSaved] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getQuiz();
  }, []);

  const getQuiz = async () => {
    try {
      const url =
        "https://cdn.jsdelivr.net/gh/amarakyaw/myanmar-api@68e8a3e/db.json";
      const res = await fetch(url);
      const data = await res.json();

      const filtered = data.quiz.filter(
        (item: any) =>
          item.title === category.trim() && item.type == type.trim(),
      );

      const shuffled = filtered.sort(() => 0.5 - Math.random());
      const quizSubset = shuffled.slice(0, Number(numQuestions));

      setQuiz(quizSubset);
      setTotal(Number(numQuestions));
      setScore(0);

      if (quizSubset.length > 0) {
        checkIfBookmarked(quizSubset[0].id);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const checkIfBookmarked = async (id: string) => {
    try {
      const savedData = await AsyncStorage.getItem("bookmarks");
      const bookmarks: QuizItem[] = savedData ? JSON.parse(savedData) : [];
      const isBookmarked = bookmarks.some((q) => q.id === id);
      setSaved(isBookmarked);
    } catch (err) {
      console.error("Error checking bookmark", err);
    }
  };

  const previousQuestion = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const nextQuestion = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1);
      setSelectedOption(null);
    } else {
      router.push("/result");
    }
  };

  useEffect(() => {
    if (quiz.length > 0) {
      setSelectedOption(answers[current] ?? null);
      checkIfBookmarked(quiz[current].id);
    }
  }, [current, quiz]);

  const checkAnswer = (selected: string) => {
    const question = quiz[current];
    const prevAnswer = answers[current] ?? null;

    setAnswers((prev) => ({ ...prev, [current]: selected }));
    setSelectedOption(selected);

    if (
      prevAnswer !== question.correct_answer &&
      selected === question.correct_answer
    ) {
      setScore(score + 1);
    } else if (
      prevAnswer === question.correct_answer &&
      selected !== question.correct_answer
    ) {
      setScore(score - 1);
    }
  };

  const saveItem = async (id: string) => {
    try {
      const savedData = await AsyncStorage.getItem("bookmarks");
      let bookmarks: QuizItem[] = savedData ? JSON.parse(savedData) : [];
      const question = quiz.find((q) => q.id === id);
      if (!question) return;

      const isAlreadyBookmarked = bookmarks.some((q) => q.id === id);

      if (isAlreadyBookmarked) {
        bookmarks = bookmarks.filter((q) => q.id !== id);
        setSaved(false);
      } else {
        bookmarks.push(question);
        setSaved(true);
      }

      await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } catch (err) {
      console.error("Error saving bookmark", err);
    }
  };

  const closeModal = () => setVisible(false);
  const openModal = () => setVisible(true);

  const confirmBack = () => {
    router.navigate("/category");
    setVisible(false);
  };

  if (quiz.length === 0) {
    return <Text>Loading...</Text>;
  }

  const q = quiz[current];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View>
        <Header onHeaderPress={openModal} />

        <Modal transparent visible={visible} animationType="fade">
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>မေးခွန်းကို ဆက်မဖြေတော့ပါ ။</Text>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  onPress={confirmBack}
                  style={styles.modalButton}
                >
                  <Text style={styles.modalButtonText}>မဖြေတော့ပါ ။</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={closeModal}
                  style={[styles.modalButton, styles.confirmButton]}
                >
                  <Text style={[styles.modalButtonText, styles.confirmText]}>
                    ဖြေမည် ။
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.cardCategory}>{category}</Text>

        <View style={styles.quizCard}>
          <ScrollView
            style={{ maxHeight: 140 }}
            showsVerticalScrollIndicator={false}
          >
            <Text style={styles.cardQuestion}>
              မေးခွန်းနံပါတ် {toMyanmarNumber(current + 1)}
              {"\n\n"}
              {q.question}
            </Text>
          </ScrollView>

          <View style={styles.cardOptions}>
            {(["option1", "option2", "option3", "option4"] as const).map(
              (key, index) => {
                const isCorrect = key === q.correct_answer;
                const isSelected = selectedOption === key;

                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.cardOptionButton,
                      selectedOption &&
                        isCorrect && { backgroundColor: "#69cc00" },
                      selectedOption &&
                        isSelected &&
                        !isCorrect && { backgroundColor: "#ff4d52" },
                    ]}
                    onPress={() => checkAnswer(key)}
                    disabled={!!selectedOption}
                  >
                    <Text
                      style={[
                        styles.cardOptionText,
                        selectedOption &&
                          (isCorrect || (isSelected && !isCorrect)) && {
                            color: "#fff",
                          },
                      ]}
                    >
                      {q[key]}
                    </Text>
                  </TouchableOpacity>
                );
              },
            )}
          </View>

          <View style={styles.lengthRow}>
            <Text style={styles.lengthText}>
              မေးခွန်း {toMyanmarNumber(current + 1)} /{" "}
              {toMyanmarNumber(quiz.length)}
            </Text>

            <Pressable onPress={() => saveItem(q.id)}>
              <Ionicons
                name={saved ? "bookmark" : "bookmark-outline"}
                size={24}
                color="#B581FD"
              />
            </Pressable>
          </View>
        </View>

        <View style={styles.bottom}>
          <TouchableOpacity
            style={[styles.actionButton, current === 0 && { opacity: 0.5 }]}
            onPress={previousQuestion}
            disabled={current === 0}
          >
            <Text style={styles.actionText}>နောက်သို့</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton} onPress={nextQuestion}>
            <Text style={styles.actionText}>ရှေ့သို့</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default TenQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
  },

  innerContainer: {
    flex: 1,
    padding: 20,
  },

  cardCategory: {
    fontSize: 26,
    fontWeight: "800",
    color: "#b58bf9",
    marginBottom: 16,
    textAlign: "center",
  },

  quizCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    width: "100%",
    height: 500,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },

  cardQuestion: {
    fontSize: 16,
    fontWeight: "700",
    color: "#4C1D95",
    textAlign: "left",
    marginBottom: 20,
    lineHeight: 26,
  },

  cardOptions: {
    marginTop: 10,
  },

  cardOptionButton: {
    backgroundColor: "#F3E8FF",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    marginBottom: 12,
  },

  cardOptionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4C1D95",
    lineHeight: 22,
  },

  lengthRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 12,
  },

  lengthText: {
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 14,
    color: "#6B7280",
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },

  actionButton: {
    backgroundColor: "#b58bf9",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },

  actionText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#EEF3FB",
  },

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalContent: {
    backgroundColor: "#f3e8ff",
    padding: 22,
    borderRadius: 16,
    width: "82%",
    alignItems: "center",
  },

  modalText: {
    fontSize: 17,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "600",
  },

  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },

  modalButton: {
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },

  confirmButton: {
    backgroundColor: "#b58bf9",
  },

  modalButtonText: {
    fontSize: 15,
    fontWeight: "600",
  },

  confirmText: {
    color: "#fff",
  },
});
