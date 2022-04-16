import React from 'react'
import { Canvas, Rect } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const RectScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Rect x={0} y={0} width={256} height={256} color="lightblue" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
