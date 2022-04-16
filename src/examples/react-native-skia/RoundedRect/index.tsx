import React from 'react'
import { Canvas, RoundedRect } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const RoundedRectScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <RoundedRect
            x={0}
            y={0}
            width={256}
            height={256}
            r={25}
            color="lightblue"
          />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
