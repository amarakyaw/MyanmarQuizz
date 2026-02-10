import { Stack } from "expo-router";
import { QuizProvider } from "../context/quizContext";

export default function RootLayout() {
  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false ,}}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='tb1' options={{headerShown:true , title:'စကားထာ',headerTintColor:'#b58bf9',headerTitleAlign:'center'} } />
        <Stack.Screen name='tb2' options={{headerShown:true , title:'စကားပုံ',headerTintColor:'#b58bf9'}}/>
        <Stack.Screen name='tb3' options={{headerShown:true , title:'စကားလိမ်',headerTintColor:'#b58bf9'}}/>
      </Stack>
    </QuizProvider>
  );
}
