import React from 'react'
import { Dimensions, StyleSheet, View, ViewStyle } from 'react-native'
import {
  BlendMode,
  Skia,
  SkiaView,
  useDrawCallback,
} from '@shopify/react-native-skia'

const { width: sw } = Dimensions.get('screen')

const paint = Skia.Paint()
paint.setAntiAlias(true)
paint.setBlendMode(BlendMode.Multiply)

export const HelloWorldImperativeAPIScreen = () => {
  const width = sw
  const height = sw
  const r = sw * 0.32

  const onDraw = useDrawCallback(canvas => {
    // Cyan Circle
    const cyan = paint.copy()
    cyan.setColor(Skia.Color('cyan'))
    canvas.drawCircle(r, r, r, cyan)
    // Magenta Circle
    const magenta = paint.copy()
    magenta.setColor(Skia.Color('magenta'))
    canvas.drawCircle(width - r, r, r, magenta)
    // Yellow Circle
    const yellow = paint.copy()
    yellow.setColor(Skia.Color('yellow'))
    canvas.drawCircle(width / 2, height - r, r, yellow)
  }, [])

  return (
    <View style={styles.container}>
      <View style={{ width: sw, height: sw, backgroundColor: 'white' }}>
        <SkiaView style={{ flex: 1 }} onDraw={onDraw} />
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
