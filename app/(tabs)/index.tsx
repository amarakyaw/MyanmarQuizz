import { useRouter } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../../assets/images/rm_pyittaunghtaung.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.text}>
          မြန်မာ့ရိုးရာ စကားထာ ၊ စကားပုံ ၊ စကားလိမ် ကစားနည်း
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/category")}
        >
          <Text style={styles.buttonText}>ဆော့ကြစို့</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3e8ff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  card: {
    width: "100%",
    alignItems: "center",
  },

  image: {
    width: width * 0.3,
    height: width * 0.3,
    marginBottom: 30,
  },

  text: {
    color: "#7c3aed",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#b58bf9",
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 3,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
