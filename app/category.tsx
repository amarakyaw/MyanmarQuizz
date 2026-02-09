import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Category = () => {
  const categoryRouter =(category:string)=>{
    router.push(`/number?category=${category}`)
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'#b58bf9'}}> မေးခွန်း အမျိုးအစား ရွေးချယ်ပါ</Text>
     <View style={styles.btn}>
    
         <Button title='စကားထာ' color='#b58bf9' onPress={()=>categoryRouter('စကားထာ')}/>
     </View>
     <View style={styles.btn}>
        <Button title='စကားပုံ' color='#b58bf9' onPress={()=>categoryRouter('စကားပုံ')}/>
     </View>
     <View style={styles.btn}>
        <Button title='စကားလိမ်' color='#b58bf9' onPress={()=>categoryRouter('စကားလိမ်')}/>
     </View>
     
    </SafeAreaView>
  )
}

export default Category

const styles = StyleSheet.create({
    btn:{
        width:'30%',
        marginTop:'10%'
    
    },
    container:{
        flex:1,
         backgroundColor:'#f3e8ff',
         justifyContent:'center',
         alignItems:'center',
         
    }
    
})