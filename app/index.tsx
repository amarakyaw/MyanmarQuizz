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
        <Text style={styles.text}>မြန်မာ့ရိုးရာ စကားထာ ၊ စကားပုံ ၊ စကားလိမ် ကစားနည်း</Text>
        
          <View style={styles.buttonWrapper}>
            <View style={{marginBottom:10}}>
              
              <Button title='ဆော့ကြစို့' color='#b58bf9'   onPress={() => router.navigate('/category')}  />
            
            </View>
             <Button title='လေ့လာမယ်' color='#b58bf9' onPress={() => {router.navigate('/(tabs)/tb1')}} />
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
    backgroundColor:'#EEF3FB'
  },
  text: {
    fontFamily: 'Myanmar',
    color: '#b58bf9',
    
    fontSize:17
  },
  buttonWrapper: {
    
    width:'30%',
  
    opacity:0.8,
    marginTop:'30%'
  },
  
});
