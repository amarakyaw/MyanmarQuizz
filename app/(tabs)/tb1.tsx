import { ScrollView, StyleSheet, Text } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { sakahtar } from '@/data/sakahtar'; 

const Tab1 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{sakahtar}</Text>

      <Link href="/">
        <Text style={styles.backButton}>နောက်သို့သွားမည်။</Text>
      </Link>
    </ScrollView>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    color: '#1E3A8A',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
