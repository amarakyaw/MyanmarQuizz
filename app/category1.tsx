import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Category1 = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.btn}>
         <Button title='စကားထာ' color='#2ac95f'/>
     </View>
     <View style={styles.btn}>
        <Button title='စကားလိမ်' color='#459c62'/>
     </View>
    </SafeAreaView>
  )
}

export default Category1

const styles = StyleSheet.create({
    btn:{
        width:'30%',
        marginTop:'10%'
    
    },
    container:{
        flex:1,
         backgroundColor:'#D8B89A',
         justifyContent:'center',
         alignItems:'center'
    }
    
})