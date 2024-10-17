import React, { useState } from 'react';
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, Switch, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function SettingsScreen() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const toggleTheme = () => {
    setIsDarkTheme((previousState) => !previousState);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>Configurações</Text>
      
      {/* Alternar tema escuro */}
      <View style={styles.switchContainer}>
        <Text>Tema Escuro</Text>
        <Switch value={isDarkTheme} onValueChange={toggleTheme} />
      </View>

      {/* Exibir e adicionar foto de perfil */}
      <View style={styles.profileContainer}>
        <Text>Foto de Perfil</Text>
        {profileImage && <Image source={{ uri: profileImage }} style={styles.profileImage} />}
        <Button title="Adicionar Foto" onPress={pickImage} />
      </View>
    </View>
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
    }
  });
  