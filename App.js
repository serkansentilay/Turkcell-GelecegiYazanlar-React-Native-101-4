import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { CounterContextProvider } from './src/context/CounterContext';
import Counter from './src/components/Counter';
import CounterWithZustand from './src/components/CounterWithZustand';

export default function App() {
  return (
    // <CounterContextProvider>
    <View style={styles.container}>
      {/* <Counter /> */}
      <CounterWithZustand />
    </View>
    // </CounterContextProvider>
  );
}

//zustand kullandığımızda  provider ile sarmalayama gerek kalmadan direkt kullanabiliriz

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
