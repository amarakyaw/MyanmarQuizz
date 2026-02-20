import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f3e8ff",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Text style={styles.text}>
        မြန်မာ့ရိုးရာ စကားထာ ၊ စကားပုံ ၊ စကားလိမ် ကစားနည်း
      </Text>

      <View style={styles.buttonWrapper}>
        <View style={{ marginBottom: 10 }}>
          <Button
            title="ဆော့ကြစို့"
            color="#b58bf9"
            onPress={() => router.navigate("/category")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Myanmar",
    color: "#b58bf9",
    fontWeight: "bold",
    marginTop: "30%",
    fontSize: 17,
  },
  buttonWrapper: {
    width: "30%",
    marginTop: "20%",
  },
});
