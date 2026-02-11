import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import { sakaLain } from '@/data/sakarlain';

const Tab1 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{sakaLain}</Text>

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
    backgroundColor:'#F3E8FF'
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    opacity:0.6
 
  },
  backButton: {
    color: '#4C1D95',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});
