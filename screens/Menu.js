// Menu.js

import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const Menu = ({ menuItems }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'left',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Menu;
