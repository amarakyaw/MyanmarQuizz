import { router } from 'expo-router'
import React from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Byee = () => {
  const data = [
    'က','ခ','ဂ','ဃ','င','စ','ဆ','ဇ','ဈ',
    'ည','ဋ','ဉ','ဍ','ဎ','ဏ', 'တ', 'ထ','ဒ','ဓ','န','ပ','ဖ','ဗ','ဘ',
    'မ','ယ','ရ','လ','ဝ','သ','ဟ','ဠ','အ'
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={()=>router.replace('/')}>
        <Text style={styles.text}>←ပင်မစာမျက်နာ</Text>
      </Pressable>

      <FlatList
        data={data}
        numColumns={5}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          
            <View style={styles.cell}>
            <Text style={styles.cellText}>{item}</Text>
          </View>
         
        )}
      />
    </SafeAreaView>
  )
}

export default Byee

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'#D8B89A'
  },
  text:{
    textDecorationLine:'underline',
    marginLeft:10,
    marginTop:10,
    color:'#459c62'
  },
  cell: {
    flex: 1,                    
    borderWidth: 1,
    borderColor: "#999",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 50,              
    margin: 2,
    marginBottom:30
  },
  cellText: {
    fontSize: 20,               
    fontWeight: "500",
    color:'#459c62'
  },
})
