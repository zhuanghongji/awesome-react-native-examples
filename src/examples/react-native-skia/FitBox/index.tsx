import React from 'react'
import { Canvas, Circle, FitBox, Path, rect } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'
import { PATH } from './path'

export const FitBoxScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ width: 256, height: 256 }}>
          <FitBox src={rect(0, 0, 664, 308)} dst={rect(0, 0, 256, 256)}>
            <Path path={PATH} />
          </FitBox>
          <Circle cx={256} cy={256} r={2} color="red" />
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
