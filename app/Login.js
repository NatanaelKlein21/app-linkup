import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/login.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Bem vindo!</Text>
        <TextInput
          placeholder="Email"
          placeholderTextColor= "#888"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor= "#888"
          style={styles.input}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.register}> Não é membro? Registre-se agora</Text>
        </TouchableOpacity>
        <Text style={styles.orContinue}>Ou continue com</Text>
        <View style={styles.socialButtons}>
          <SocialIcon type="google" />
          <SocialIcon type="facebook" />
          <SocialIcon type="twitter" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPassword: {
    color: '#006FFD',
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  loginButton: {
    backgroundColor: '#006FFD',
    width: '100%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  register: {
    color: '#888',
    marginBottom: 20,
  },
  orContinue: {
    color: '#888',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
});
