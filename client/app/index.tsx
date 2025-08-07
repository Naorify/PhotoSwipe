
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate a delay for the splash screen
    setTimeout(() => {
      router.replace('/(tabs)');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PS</Text>
      <Text style={styles.title}>PhotoSwipe</Text>
      <ActivityIndicator size="large" color="#ffffff" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A0040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  title: {
    fontSize: 40,
    color: '#ffffff',
    marginTop: 20,
  },
  spinner: {
    marginTop: 50,
  },
});

export default SplashScreen;
