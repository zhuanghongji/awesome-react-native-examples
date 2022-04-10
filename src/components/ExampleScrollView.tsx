import React, { PropsWithChildren } from 'react'
import { ScrollView, StyleProp, StyleSheet, ViewStyle } from 'react-native'
import { Divider } from './Divider'

type ExampleViewProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>
}>

export const ExampleScrollView = (props: ExampleViewProps) => {
  const { style, children } = props
  const count = React.Children.count(children)
  return (
    <ScrollView style={[styles.container, style]}>
      {React.Children.map(children, (child, index) => (
        <>
          <Divider />
          {child}
          {index === count - 1 && <Divider />}
        </>
      ))}
    </ScrollView>
  )
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
})
