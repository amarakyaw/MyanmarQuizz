import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Category = () => {
  const categoryRouter =(category:string)=>{
    router.push(`/number?category=${category}`)
  }
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.btn}>
    
         <Button title='စကားထာ' color='#b58bf9' onPress={()=>categoryRouter('စကားထာ')}/>
     </View>
     <View style={styles.btn}>
        <Button title='စကားပုံ' color='#b58bf9' onPress={()=>categoryRouter('စကားပုံ')}/>
     </View>
     <View style={styles.btn}>
        <Button title='စကားလိမ်' color='#b58bf9' onPress={()=>router.push('/sakalainCategory')}/>
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
         backgroundColor:'#D6B9FF',
         justifyContent:'center',
         alignItems:'center',
         
    }
    
})