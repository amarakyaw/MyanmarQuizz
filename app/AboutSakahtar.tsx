import { sakahtar } from '@/data/sakahtar';
import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

const Tab1 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{sakahtar}</Text>
      {/* <Pressable onPress={() => router.navigate('../(tabs)/learn')}> 
        <Text style={styles.backButton}>နောက်သို့သွားမည်။</Text>
      </Pressable> */}
    </ScrollView>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3E8FF',
    
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    opacity:0.6
    
  },
  backButton: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
