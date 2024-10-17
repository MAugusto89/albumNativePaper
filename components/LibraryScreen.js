import * as React from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';

export default function LibraryScreen() {
    const books = [
      { id: '1', title: 'Livro 1', imageUri: 'https://m.media-amazon.com/images/I/61wZaZdX1GL._SY425_.jpg' },
      { id: '2', title: 'Livro 2', imageUri: 'https://via.placeholder.com/150' },
      { id: '3', title: 'Livro 3', imageUri: 'https://via.placeholder.com/150' },
      { id: '4', title: 'Livro 4', imageUri: 'https://via.placeholder.com/150' },
    ];
  
    return (
      <View style={styles.container}>
        <FlatList
          data={books}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.bookContainer}>
              <Image source={{ uri: item.imageUri }} style={styles.bookImage} />
              <Text style={styles.bookTitle}>{item.title}</Text>
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
  