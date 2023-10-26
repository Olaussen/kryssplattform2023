import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../Styles/StyleGuide';
import Assets from '../../Assets';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <Assets.images.BackgroundApp style={styles.background} />
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandBackground,
  },
  background: {
    position: 'absolute',
    zIndex: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
  },
});

export default Favorites;
