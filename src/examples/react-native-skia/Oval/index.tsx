import React from 'react'
import { Canvas, Oval } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const OvalScreen = () => {
  const r = 128
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Oval x={64} y={0} width={128} height={256} color="lightblue" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
