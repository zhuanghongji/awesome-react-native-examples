import React from 'react'
import { Canvas, Line, vec } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const LineScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Line
            p1={vec(0, 0)}
            p2={vec(256, 256)}
            color="lightblue"
            style="stroke"
            strokeWidth={4}
          />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
