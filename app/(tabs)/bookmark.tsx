import Header from "@/components/Header";
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
  const [showToast, setShowToast] = useState(false);

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

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showToast]);
  const confirmDelete = () => {
    if (itemToDelete) {
      deleteBookmark(itemToDelete.id);
      setShowToast(true);
    }
    setModalVisible(false);
    setItemToDelete(null);
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setItemToDelete(null);
  };

  return (
    <View style={styles.container}>
      <Header onHeaderPress={() => router.navigate("/")} />

      {bookmarks.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.emptyText}>
            မည်သည့်မေးခွန်းမှ မသိမ်းထားသေးပါ။
          </Text>
        </View>
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ padding: 20 }}
          style={{ flex: 1 }}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text>{item.title}</Text>
              <Text>မေးခွန်း: {item.question}</Text>
              <Text>အဖြေ: {getCorrectAnswer(item)}</Text>
              <TouchableOpacity
                onPress={() => {
                  setItemToDelete(item);
                  setModalVisible(true);
                }}
                style={{ position: "absolute", right: 10, bottom: 10 }}
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
      {showToast && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>
            မှတ်စုအား ဖျက်ပြီးပါပြီ <Text style={{ fontSize: 10 }}>✔️</Text>
          </Text>
        </View>
      )}
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 0,
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
  toast: {
    position: "absolute",
    bottom: 40,
    alignSelf: "center",
    backgroundColor: "#b58bf9",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  toastText: {
    color: "#ffff",
    fontSize: 14,
  },
});
