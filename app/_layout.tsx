import { Stack } from "expo-router";
import { QuizProvider } from "../context/quizContext";

export default function RootLayout() {
  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </QuizProvider>
  );
}
