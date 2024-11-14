import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/header';
import CarsList from '@/components/car-list';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <CarsList />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
