import React from 'react'
import { Canvas, ImageSVG, Skia } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const ImageSVGMakeFromStringScreen = () => {
  const svg = Skia.SVG.MakeFromString(
    `<svg viewBox='0 0 290 500' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='31' cy='325' r='120px' fill='#c02aaa'/>
    </svg>`
  )!

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <ImageSVG svg={svg} x={0} y={0} width={256} height={256} />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
