import { Stack } from "expo-router";
import { QuizProvider } from "../context/quizContext";

export default function RootLayout() {
  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false ,}}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='tb1' options={{headerShown:true , title:'စကားထာ',headerTintColor:'#B581FD'} }/>
        <Stack.Screen name='tb2' options={{headerShown:true , title:'စကားပုံ',headerTintColor:'#B581FD'}}/>
        <Stack.Screen name='tb3' options={{headerShown:true , title:'စကားလိမ်',headerTintColor:'#B581FD'}}/>
      </Stack>
    </QuizProvider>
  );
}
