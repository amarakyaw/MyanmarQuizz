import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QuizNumber = () => {
  const handlePress = (num: number) => {
    
    router.push(`/questions?numQuestions=${num}&category=${category}`);
    
  };
const{category} = useLocalSearchParams<{category: string}>();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.navigate('/category')}
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          alignSelf: "flex-start",
          marginTop:10
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#4C1D95" />
        <Text style={{ fontSize: 16, color: "#4C1D95", marginLeft: 6 }}>
          ရှေ့သို့
        </Text>
      </TouchableOpacity>
      
      <View style={styles.innerText}>
        <Text style={styles.text}>မေးခွန်း အဆင့်</Text>

      <View style={styles.buttonWrapper}>
        <Button title="လွယ်ကူသော" color="#b58bf9" onPress={() => handlePress(5)} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="သာမန်" color="#b58bf9" onPress={() => handlePress(10)} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="ခက်ခဲသော" color="#b58bf9" onPress={() => handlePress(20)} />
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
    marginTop: 20,
  },
  innerText:{
    justifyContent:'center',
         alignItems:'center',
         marginTop:'20%'

  }
});
