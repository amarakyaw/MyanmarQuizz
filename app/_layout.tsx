import { Stack } from "expo-router";
import { QuizProvider } from "../context/quizContext";

export default function RootLayout() {
  return (
    <QuizProvider>
      <Stack screenOptions={{ headerShown: false ,}}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name='AboutSakahtar' options={{headerShown:true , title:'စကားထာ',headerTintColor:'#4C1D95',headerTitleAlign:'center'} } />
        <Stack.Screen name='AboutSakapone' options={{headerShown:true , title:'စကားပုံ',headerTintColor:'#4C1D95',headerTitleAlign:'center'}}/>
        <Stack.Screen name='aboutSakalain' options={{headerShown:true , title:'စကားလိမ်',headerTintColor:'#4C1D95',headerTitleAlign:'center'}}/>
      </Stack>
    </QuizProvider>
  );
}
