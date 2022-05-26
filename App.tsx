/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.coin}>
          <Text style={styles.coinLabel}>H</Text>
        </View>
        <Pressable style={styles.button}>
          <Text style={styles.buttonLabel}>hello</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coin: {
    borderRadius: 9999,
    backgroundColor: 'gold',
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 36,
  },
  button: {
    borderRadius: 8,
    height: 32,
    width: 120,
    backgroundColor: '#584DFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 64,
  },
  buttonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default App;
