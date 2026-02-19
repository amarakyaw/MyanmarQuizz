import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type QuizItem = {
  id: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correct_answer: string;
  title: string;
};

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState<QuizItem[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<QuizItem | null>(null);

  useEffect(() => {
    const getBookmarks = async () => {
      const data = await AsyncStorage.getItem("bookmarks");
      if (data) {
        setBookmarks(JSON.parse(data));
      }
    };
    getBookmarks();
  }, []);

  const getCorrectAnswer = (item: QuizItem) => {
    switch (item.correct_answer) {
      case "option1":
        return item.option1;
      case "option2":
        return item.option2;
      case "option3":
        return item.option3;
      case "option4":
        return item.option4;
      default:
        return "";
    }
  };

  const deleteBookmark = async (id: string) => {
    const data = await AsyncStorage.getItem("bookmarks");
    if (!data) return;
    const updated = JSON.parse(data).filter((item: QuizItem) => item.id !== id);
    await AsyncStorage.setItem("bookmarks", JSON.stringify(updated));
    setBookmarks(updated);
  };

  const confirmDelete = () => {
    if (itemToDelete) {
      deleteBookmark(itemToDelete.id);
    }
    setModalVisible(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#4C1D95" />
        <Text style={{ fontSize: 16, color: "#4C1D95", marginLeft: 6 }}>
          နောက်သို့
        </Text>
      </TouchableOpacity>
      {bookmarks.length === 0 ? (
        <Text style={styles.emptyText}>မည်သည့်မေးခွန်းမှ မသိမ်းထားသေးပါ။</Text>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <View style={styles.card}>
              <Text>{item.title}</Text>
              <Text>မေးခွန်း: {item.question}</Text>
              <Text>အဖြေ: {getCorrectAnswer(item)}</Text>
              <TouchableOpacity
                onPress={() => {
                  setItemToDelete(item);
                  setModalVisible(true);
                }}
                style={{ position: "absolute", right: 10, top: "70%" }}
              >
                <Ionicons name="bookmark" size={24} color="#B581FD" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              ဤမေးခွန်းကို မှတ်စုစာရင်းထဲ ပယ်လိုပါသလား။
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={cancelDelete}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>မလုပ်တော့ပါ ။</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={confirmDelete}
                style={[styles.modalButton, styles.confirmButton]}
              >
                <Text style={[styles.modalButtonText, styles.confirmText]}>
                  လုပ်မည် ။
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f3e8ff",
  },
  card: {
    padding: 10,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: "#6B7280",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#f3e8ff",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#ffff",
    flex: 1,
    marginHorizontal: 5,
    alignItems: "center",
  },
  confirmButton: {
    backgroundColor: "#d92d26",
  },
  modalButtonText: {
    fontSize: 16,
  },
  confirmText: {
    color: "#fff",
  },
});
