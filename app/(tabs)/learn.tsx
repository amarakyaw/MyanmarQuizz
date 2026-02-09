import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Learn = () => {
  
  
  return (
    <SafeAreaView style={styles.container}>
        
     <View style={styles.btn}>
    <TouchableOpacity style={{alignItems:'flex-start'}} onPress={()=>router.navigate('/tb1')} >
        <Text style={styles.text}>စကားထာ📖</Text>
    </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'flex-start'}} onPress={()=>router.navigate('/tb2')} >
        <Text style={styles.text}>စကားပုံ📖</Text>
    </TouchableOpacity>
         <TouchableOpacity style={{alignItems:'flex-start'}}    onPress={()=>router.navigate('/tb3')} >
        <Text style={styles.text}>စကားလိမ်📖</Text>
    </TouchableOpacity>
     </View>
     
    </SafeAreaView>
  )
}


export default Learn

const styles = StyleSheet.create({
    btn:{
        width:'30%',
        marginTop:'10%'
    
    },
    container:{
        flex:1,
         backgroundColor:'#F3E8FF',
         justifyContent:'center',
         alignItems:'center',
         
         
    },
    text:{
        textDecorationLine: 'underline',
        fontSize:20,
        marginBottom:'50%',
        color:'#b58bf9',
        fontWeight:'bold',
        letterSpacing:1,
        marginTop:40
        
       

    }
    
})