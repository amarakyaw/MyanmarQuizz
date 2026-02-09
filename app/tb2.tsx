import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text } from 'react-native';


import { sakapone } from '@/data/sakarpone';

const Tab2 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{sakapone}</Text>

      <Pressable onPress={() => router.navigate('../(tabs)/learn')}> 
              <Text style={styles.backButton}>နောက်သို့သွားမည်။</Text>
            </Pressable>
    </ScrollView>
  );
};

export default Tab2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
     backgroundColor: '#F3E8FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 30,
  },
  backButton: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
