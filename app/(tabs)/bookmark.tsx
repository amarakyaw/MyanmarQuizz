import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
const bookmark = () => {
    type quiz = {
        id:number,
        question:string,
        correct_answer:string,

    }
    const [data,setData] = useState<quiz[]>([])
    const getAPIdata = async () => {
        const response = await fetch('https://raw.githubusercontent.com/amarakyaw/myanmar-api/main/db.json')
        const json = await response.json()
        setData(json.quiz)
    }
    useEffect(() => {
        getAPIdata() }, [])
        return (
            <View style={styles.container}>
                <Text>Bookmark</Text>
                <FlatList 
                data={data}
                keyExtractor={(item)=>item.id.toString()}
                renderItem={({item})=>(
                    <View style={{margin:10,padding:10,backgroundColor:'#fff',borderRadius:5}}>
                        <Text style={{fontSize:16,fontWeight:'bold'}}>{item.question}</Text>
                        <Text style={{color:'green'}}>Correct Answer: {item.correct_answer}</Text>
                    </View>
                )}
                />
            </View>
        )   
  
}


export default bookmark

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f3e8ff',
        justifyContent:'center',
        alignItems:'center'
    }
})