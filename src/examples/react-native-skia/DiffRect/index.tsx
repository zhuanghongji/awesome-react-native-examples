import React from 'react'
import { Canvas, DiffRect, rect, rrect } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const DiffRectScreen = () => {
  const outer = rrect(rect(0, 0, 256, 256), 25, 25)
  const inner = rrect(rect(50, 50, 256 - 100, 256 - 100), 50, 50)

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <DiffRect inner={inner} outer={outer} color="lightblue" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
