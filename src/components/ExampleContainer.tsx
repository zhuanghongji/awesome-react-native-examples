import React, { PropsWithChildren } from 'react'
import { StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ExampleContainerProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

export const ExampleContainer = (props: ExampleContainerProps) => {
  const { style, children } = props
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  )
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
})
