import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Number = () => {
    const handlePress =(value:string)=>{
        if(value==='10')
        {
            router.navigate('/tenQuestions')
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.innerbox}>
        <Text style={styles.text}>မေးခွန်း အရေအတွက်</Text>
        <View style={styles.btn}>
            <Button title='၁၀' color='#35a45a' onPress={()=> handlePress('10')}/>
        </View>
        <View style={styles.btn}>
            <Button title='၂၀' color='#35a45a' onPress={()=>handlePress('20')}/>
        </View>
        <View style={styles.btn}>
            <Button title='၃၀' color='#35a45a' onPress={()=>handlePress('30')} />
        </View>
      </View>
    </View>
  )
}

export default Number

const styles = StyleSheet.create({
    text:{
        fontSize:20,
        color:'#35a45a',
        fontWeight:'bold'
        
    },
    container:{
        flex:1,
        backgroundColor:'#D8B89A',
        // justifyContent:'center',
        alignItems:'center'
    },
    innerbox:{
        marginTop:'60%'
    },
    btn:{
        opacity:0.6,
        marginTop:40
    }
})