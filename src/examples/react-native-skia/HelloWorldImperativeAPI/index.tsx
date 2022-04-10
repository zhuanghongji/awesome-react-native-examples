import React from 'react'
import { Dimensions } from 'react-native'
import {
  BlendMode,
  Skia,
  SkiaView,
  useDrawCallback,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

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
    <ExampleContainer>
      <ExamplePlayground>
        <SkiaView style={{ flex: 1 }} onDraw={onDraw} />
      </ExamplePlayground>
    </ExampleContainer>
  )
}
