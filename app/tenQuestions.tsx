import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const tenQuestions = () => {
    useEffect(()=>{
        getQuiz()
    },[])
    const getQuiz=async()=>{
        const url="https://raw.githubusercontent.com/amarakyaw/myanmar-api/main/db.json"
        const res=await fetch(url)
        const data = await res.json()
        console.log(data.quiz)
    }
   
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text>Q.</Text>
      </View>
      <View style={styles.options}>
        <TouchableOpacity style={styles.button}>
            <Text>Option1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Option2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Option3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text>Option4</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} >Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default tenQuestions

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D8B89A',
        flex:1
    },
    top:{
        marginVertical:'16%'
    },
    options:{
        marginVertical:'16%',
        flex:1
    },
    bottom:{
        marginBottom:'20%',
        justifyContent:'space-around',
        flexDirection:'row',
        
    },
    button:{
        
        backgroundColor:'#18ab49',
        padding:16,
        borderRadius:10,
        alignItems:'center',
        marginBottom:30,
        opacity:0.8

    },
    buttonText:{
        fontSize:24,
        fontWeight:'600',
        color:'#D8B89A'
    }
})