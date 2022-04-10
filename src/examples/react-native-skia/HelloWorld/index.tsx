import React from 'react'
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native'
import { Canvas, Circle, Group } from '@shopify/react-native-skia'

const { width: sw } = Dimensions.get('screen')

export const HelloWorldScreen = () => {
  const width = sw
  const height = sw
  const r = sw * 0.32
  return (
    <View style={styles.container}>
      <View style={{ width: sw, height: sw, backgroundColor: 'white' }}>
        <Canvas style={{ flex: 1 }}>
          <Group blendMode="multiply">
            <Circle cx={r} cy={r} r={r} color="cyan" />
            <Circle cx={width - r} cy={r} r={r} color="magenta" />
            <Circle cx={width / 2} cy={height - r} r={r} color="yellow" />
          </Group>
        </Canvas>
      </View>
    </View>
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
  },
})
