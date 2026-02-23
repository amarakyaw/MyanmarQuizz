import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {
  onHeaderPress: () => void;
};

const Header = ({ onHeaderPress }: HeaderProps) => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <TouchableOpacity
        onPress={onHeaderPress}
        activeOpacity={0.4}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={20} color="#4C1D95" />
        <Text style={styles.backText}>ရှေ့သို့</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },

  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#b58bf9",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 24,
  },

  backText: {
    fontSize: 15,
    color: "#4C1D95",
    marginLeft: 6,
    fontWeight: "600",
  },
});
