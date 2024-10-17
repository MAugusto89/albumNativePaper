import * as React from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';

export default function FavoritesScreen() {
    const favorites = [
      { id: '1', name: 'Favorito 1' },
      { id: '2', name: 'Favorito 2' },
      { id: '3', name: 'Favorito 3' },
      { id: '4', name: 'Favorito 4' },
    ];
  
    return (
      <View style={styles.container}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      alignItems: 'center',
      flexDirection:"row",
      backgroundColor: '#fff',
    },
    containerHome: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'row',
      padding: 0,
      backgroundColor: '#fff',
    },
    imageContainer: {
      marginBottom: 10,
      alignItems: 'center',
    },
    image: {
      width: 150,
      height: 100,
    },
    itemContainer: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    detailsImage: {
      width: '100%',
      height: 300,
    },
    detailsDescription: {
      marginVertical: 20,
      fontSize: 18,
      textAlign: 'center',
    },
    bookContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: 20,
    },
    bookImage: {
      width: 150,
      height: 100,
    },
    bookTitle: {
      fontSize: 18,
    },
  });
  