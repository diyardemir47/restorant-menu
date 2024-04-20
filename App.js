// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from './screens/Menu';

const App = () => {
  const menuItems = [
    { id: 1, name: 'Köfte', price: '20 TL' },
    { id: 2, name: 'Pide', price: '15 TL' },
    { id: 3, name: 'Salata', price: '10 TL' },
    // Buraya menünüzdeki diğer öğeleri ekleyebilirsiniz
  ];

  return (
    <View style={styles.container}>
      <Menu menuItems={menuItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});

export default App;
