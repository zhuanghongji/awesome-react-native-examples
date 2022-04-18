import React from 'react'
import { Canvas, Skia, Text, useFont } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const typeface = Skia.FontMgr.RefDefault().matchFamilyStyle('helvetica')
if (!typeface) {
  throw new Error('Helvetica not found')
}
const font = Skia.Font(typeface, 30)

export const TextScreen = () => {
  const sfFont = useFont(require('../assets/SF-Mono-Semibold.otf'), 18)

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Text
            x={0}
            y={32}
            text="Hellow World"
            // System Fonts
            familyName="serif"
            size={32}
            color="black"
          />

          <Text
            x={0}
            y={72}
            text="Hello World"
            // System fonts can also be accessed as a font instance using the system font manager.
            font={font}
          />

          {sfFont ? (
            <Text
              x={0}
              y={120}
              // Custom Fonts
              font={sfFont}
              text="Hello World"
            />
          ) : null}
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
