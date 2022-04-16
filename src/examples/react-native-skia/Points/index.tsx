import React from 'react'
import { Canvas, Points, vec } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const PointsScreen = () => {
  const points = [
    vec(128, 0),
    vec(168, 80),
    vec(256, 93),
    vec(192, 155),
    vec(207, 244),
    vec(128, 202),
    vec(49, 244),
    vec(64, 155),
    vec(0, 93),
    vec(88, 80),
    vec(128, 0),
  ]
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Points
            points={points}
            mode="polygon"
            color="lightblue"
            style="stroke"
            strokeWidth={4}
          />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
