import React from 'react'
import { Canvas, Circle } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const CircleScreen = () => {
  const r = 128
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Circle cx={r} cy={r} r={r} color="lightblue" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
