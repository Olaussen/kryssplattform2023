import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../Styles/StyleGuide';

const Result: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Result</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Result;
