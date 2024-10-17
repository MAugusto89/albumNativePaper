import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Switch, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import AlbumScreen from './components/AlbumScreen';
import FavoritesScreen from './components/FavoritesScreen';
import LibraryScreen from './components/LibraryScreen';
import SettingsScreen from './components/SettingsScreen';

// Tela de detalhes de uma imagem
function ImageDetailsScreen({ route }) {
  const { imageUri, description } = route.params;

  const onShare = async () => {
    try {
      await Share.share({
        message: `Veja esta imagem: ${description}`,
        url: imageUri,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.detailsContainer}>
      <Image source={{ uri: imageUri }} style={styles.detailsImage} />
      <Text style={styles.detailsDescription}>{description}</Text>
      <Ionicons name="share-social" size={30} color="green" onPress={onShare} />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Album') {
            iconName = focused ? 'image' : 'image-outline';
          } else if (route.name === 'Library') {
            iconName = focused ? 'library' : 'library-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: [
          { display: 'flex' },
          null,
        ],
      })}
    >
      <Tab.Screen name="Album" component={AlbumScreen} />
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="ImageDetails" component={ImageDetailsScreen} options={{ title: 'Detalhes da Imagem' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  bookContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  bookImage: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  bookTitle: {
    fontSize: 18,
  },
});
