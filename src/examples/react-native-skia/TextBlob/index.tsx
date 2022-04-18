import React from 'react'
import { Canvas, Skia, TextBlob } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const circle = Skia.Path.Make()
circle.addCircle(128 + 30, 128 + 30, 128)

export const TextBlobScreen = () => {
  const typeface = Skia.FontMgr.RefDefault().matchFamilyStyle('helvetica')
  if (!typeface) {
    throw new Error('Helvetica not found')
  }
  const font = Skia.Font(typeface, 30)
  const blob = Skia.TextBlob.MakeFromText('Hello World!', font)
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <TextBlob x={30} y={30} blob={blob} color="blue" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
