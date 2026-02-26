import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Learn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ပဟေဠိအကြောင်းလေ့လာကြမယ်📚</Text>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => router.navigate("/AboutSakahtar")}
        >
          <Text style={styles.cardText}>📖 စကားထာ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.navigate("/AboutSakapone")}
        >
          <Text style={styles.cardText}>📖 စကားပုံ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => router.navigate("/aboutSakalain")}
        >
          <Text style={styles.cardText}>📖 စကားလိမ်</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Learn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
    paddingHorizontal: 20,
    justifyContent: "center",
    // marginTop: "25%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#7c3aed",
  },
  cardContainer: {
    width: "100%",
    gap: 20,
  },
  card: {
    backgroundColor: "#b58bf9",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 6,
  },
  cardText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
});
