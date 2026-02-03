import { useRouter } from 'expo-router';
import { Button, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router =useRouter();
  

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('@/assets/images/background5.webp')}
        style={styles.background}
        resizeMode='contain'
      >
        <Text style={styles.text}>မြန်မာ့ရိုးရာ စကားထာ၊စကားလိမ် ကစားနည်း</Text>
        
          <View style={styles.buttonWrapper}>
            <View style={{marginBottom:10}}>
              <Button title='ဆော့ကြစို့' color='#2ac95f'  onPress={() => {router.navigate('/category1')}}  />
            </View>
             <Button title='လေ့လာမယ်' color='#2ac95f' onPress={() => {}} />
          </View>
        
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Myanmar',
    color: 'black',
    marginTop:'10%',
  },
  buttonWrapper: {
    
    width:'30%',
    opacity:0.8,
    marginTop:'20%'
  },
  
});
