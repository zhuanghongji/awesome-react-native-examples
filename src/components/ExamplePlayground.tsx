import React, { PropsWithChildren } from 'react'
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

const { width: sw } = Dimensions.get('screen')

type ExamplePlaygroundProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

/**
 * Provider a white-board view for playing example code
 */
export const ExamplePlayground = (props: ExamplePlaygroundProps) => {
  const { style, children } = props
  return <View style={[styles.container, style]}>{children}</View>
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    width: sw,
    height: sw,
    backgroundColor: 'white',
  },
})
