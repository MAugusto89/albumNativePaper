import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AlbumScreen({ navigation }) {
    const images = [
      { id: '1', uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Lamborghini_Si%C3%A1n_IAA_2019_JM_1094.jpg', description: 'Imagem 1' },
      { id: '2', uri: '../assets/aventor.jpg', description: 'Imagem 2' },
      { id: '3', uri: 'https://via.placeholder.com/600x400', description: 'Imagem 3' },
      { id: '4', uri: 'https://via.placeholder.com/600x400', description: 'Imagem 4' },
    ];
  
    return (
      <View style={styles.containerHome}>
        <FlatList
          data={images}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ImageDetails', { imageUri: item.uri, description: item.description })}
            >
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.uri }} style={styles.image} />
                <Text>{item.description}</Text>
              </View>
            </TouchableOpacity>
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
  