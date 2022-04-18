import React from 'react'
import { Canvas, Glyphs, useFont, vec } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const GlyphsScreen = () => {
  const font = useFont(require('../assets/SF-Pro-Display-Bold.otf'), 16)
  if (!font) {
    return null
  }
  const glyphs = font
    .getGlyphIDs('Hello World!')
    .map((id, i) => ({ id, pos: vec(0, i * 24) }))

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Glyphs x={16} y={24} font={font} glyphs={glyphs} />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
