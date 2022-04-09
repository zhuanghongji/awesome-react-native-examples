/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native'

export const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'black' : 'white',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={isDarkMode ? 'black' : 'white'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Text>Awesome React Native Examples</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
