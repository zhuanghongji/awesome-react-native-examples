import React from 'react'
import { StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native'

export const TemplateComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TemplateComponent</Text>
    </View>
  )
}

type Styles = {
  container: ViewStyle
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#333333',
  },
})
