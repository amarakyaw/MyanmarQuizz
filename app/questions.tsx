import AsyncStorage from '@react-native-async-storage/async-storage';
import { router, useLocalSearchParams } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
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
  const [answers, setAnswers] = useState<Record<number, string>>({});

  useEffect(() => { getQuiz(); }, []);

  const getQuiz = async () => {
    try {
      const res = await fetch("https://cdn.jsdelivr.net/gh/amarakyaw/myanmar-api@main/db.json");
      const data = await res.json();
      const filtered = data.quiz.filter((item: any) => item.title === category.trim());
      const shuffled = filtered.sort(() => 0.5 - Math.random());
      setQuiz(shuffled.slice(0, Number(numQuestions)));
      setTotal(Number(numQuestions));
      setScore(0);
    } catch (error) { console.error(error); }
  };

  const previousQuestion = () => {
    if (current > 0) setCurrent(current - 1);
  }

  const checkAnswer = (selected: string) => {
    const question = quiz[current];
    const prev = answers[current];
    if (!prev) {
      if (selected === question.correct_answer) setScore(score + 1);
    } else if (prev !== question.correct_answer && selected === question.correct_answer) {
      setScore(score + 1);
    } else if (prev === question.correct_answer && selected !== question.correct_answer) {
      setScore(score - 1);
    }
    setAnswers(prevState => ({ ...prevState, [current]: selected }));
  };

  const saveItem = async (id: string) => {
    try {
      const savedData = await AsyncStorage.getItem("bookmarks");
      let bookmarks: QuizItem[] = savedData ? JSON.parse(savedData) : [];
      const question = quiz.find(q => q.id === id);
      if (!question) return;
      if (bookmarks.some(q => q.id === id)) {
        bookmarks = bookmarks.filter(q => q.id !== id);
        setSaved(false);
      } else {
        bookmarks.push(question);
        setSaved(true);
      }
      await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    } catch (err) { console.error(err); }
  };

  const nextQuestion = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1)
      setSaved(false)
    }
    else router.push("/result");
  };

  if (!quiz.length) return <Text>Loading...</Text>;

  const q = quiz[current];
  const currentAnswer = answers[current];

  return (
    <View style={styles.container}>
      <Text style={styles.cardCategory}>{category}</Text>
      <View style={styles.quizCard}>
        <Text style={styles.cardQuestion}>
          မေးခွန်းနံပါတ် {toMyanmarNumber(current + 1)} ။{'\n'} {q.question}
        </Text>

        <View style={styles.cardOptions}>
          {(["option1","option2","option3","option4"] as const).map((key, i) => {
            const isCorrect = key === q.correct_answer;
            const isSelected = currentAnswer === key;
            return (
              <TouchableOpacity
                key={i}
                style={[
                  styles.cardOptionButton,
                  isSelected && isCorrect ? { backgroundColor: "#69cc00" } : null,
                  isSelected && !isCorrect ? { backgroundColor: "#ff4d52" } : null,
                ]}
                onPress={() => checkAnswer(key)}
                disabled={!!currentAnswer}
              >
                <Text style={[
                  styles.cardOptionText,
                  isSelected ? { color: "white" } : null
                ]}>{q[key]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.lengthRow}>
          <Text style={styles.lengthText}>
            မေးခွန်း {toMyanmarNumber(current + 1)} / {toMyanmarNumber(quiz.length)}
          </Text>
          <Pressable onPress={() => saveItem(q.id)}>
            <Ionicons name={saved ? "bookmark" : "bookmark-outline"} size={24} color="#B581FD" />
          </Pressable>
        </View>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={[styles.actionButton, current === 0 ? { opacity: 0.5 } : null]}
          onPress={previousQuestion}
          disabled={current === 0}
        >
          <Text style={styles.actionText}>ရှေ့သို့</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={nextQuestion}>
          <Text style={styles.actionText}>နောက်သို့</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TenQuestions;

const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:"#f3e8ff", padding:20, justifyContent:"center", alignItems:"center" },
  bottom: { flexDirection:"row", justifyContent:"space-between", marginBottom:30, width:"100%", paddingHorizontal:10 },
  actionButton: { backgroundColor:"#b58bf9", paddingVertical:14, paddingHorizontal:30, borderRadius:12, marginTop:'10%' },
  actionText: { fontSize:18, fontWeight:"700", color:"#EEF3FB", marginTop:0 },
  quizCard: { backgroundColor:"#fff", borderRadius:22, padding:24, alignItems:"center", borderWidth:1, borderColor:"#E5E7EB", marginTop:'10%', width:'100%' },
  cardCategory: { fontSize:30, fontWeight:"700", color:"#b58bf9", marginBottom:12 },
  cardQuestion: { fontSize:20, fontWeight:"700", color:"#4C1D95", textAlign:"center", marginBottom:20, lineHeight:40 },
  cardOptions: { width:"100%" },
  cardOptionButton: { backgroundColor:"#F3E8FF", paddingVertical:14, paddingHorizontal:16, borderRadius:30, marginBottom:14 },
  cardOptionText: { fontSize:16, fontWeight:"600", textAlign:"center", color:'#4C1D95' },
  lengthRow: { flexDirection:"row", alignItems:"center", justifyContent:"flex-end", width:"100%", marginTop:10, position:"relative" },
  lengthText: { position:"absolute", left:0, right:0, textAlign:"center", fontSize:14, color:"#6B7280" },
});
