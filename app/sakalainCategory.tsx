import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { QuizContext, toMyanmarNumber } from '@/context/quizContext';
import { router } from 'expo-router';

const Sakarlain = () => {
  type QuizItem = {
    id: string;
    question: string;
    correct_answer: string;
  };

  const [current, setCurrent] = useState(0);
  const [quiz, setQuiz] = useState<QuizItem[]>([]);
  const [answer, setAnswer] = useState(''); // user input
  const { score, setScore ,setTotal } = useContext(QuizContext);

  // Fetch quiz data
  const getQuiz = async () => {
    const url = "https://raw.githubusercontent.com/amarakyaw/myanmar-api/main/db.json";
    const res = await fetch(url);
    const data = await res.json();
    const filtered = data.quiz.filter((item: any) => item.title === 'စကားလိမ်');
    setQuiz(filtered);
    setTotal(Number(filtered.length));
  };

  useEffect(() => {
    getQuiz();
  }, []);

  // Check answer
  const checkAnswer = () => {
    if (quiz[current] && answer.trim() === quiz[current].correct_answer) {
      setScore(score + 1);
    }
    nextQuestion();
    setAnswer(''); // reset input
  };

  // Move to next question
  const nextQuestion = () => {
    if (current < quiz.length - 1) {
      setCurrent(current + 1);
    } else {
      router.push('/result');
    }
  };

  // If quiz not loaded yet
  if (quiz.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const q = quiz[current];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>စကားလိမ်</Text>
      
      <Text style={{ color: '#1E3A8A', marginBottom: 20 }}>{q.question}</Text>

      
        <TextInput
        placeholder='အဖြေကိုရေးပါ။'
        style={styles.input}
        value={answer}
        onChangeText={setAnswer}
      />
      <Text style={styles.lengthText}>
              မေးခွန်း {toMyanmarNumber(current + 1)} / {toMyanmarNumber(quiz.length)}
            </Text>

      <TouchableOpacity style={styles.button} onPress={checkAnswer}>
        <Text style={styles.buttonText}>အဖြေစစ်ရန်</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Sakarlain;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6B9FF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: '#1E3A8A',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E5E7EB',
    width:'auto',
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    opacity: 0.3,
    borderWidth:1,
    
  },
  button: {
    backgroundColor: '#B581FD',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  lengthText: {
  fontSize: 14,
  color: "#6B7280",
  
},

});
