import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

export const Divider = () => {
  return <View style={styles.container} />
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    height: 20,
  },
})
