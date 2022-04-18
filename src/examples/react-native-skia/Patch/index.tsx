import React from 'react'
import {
  Canvas,
  CubicBezierHandle,
  Group,
  Patch,
  vec,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const PatchScreen = () => {
  const colors = ['#61dafb', '#fb61da', '#61fbcf', '#dafb61']
  const C = 64
  const topLeft: CubicBezierHandle = {
    pos: vec(0, 0),
    c1: vec(C, 0),
    c2: vec(0, C),
  }
  const topRight: CubicBezierHandle = {
    pos: vec(256, 0),
    c1: vec(256 + C, 0),
    c2: vec(256, C),
  }
  const bottomRight: CubicBezierHandle = {
    pos: vec(256, 256),
    c1: vec(256 - 2 * C, 256),
    c2: vec(256, 256 - 2 * C),
  }
  const bottomLeft: CubicBezierHandle = {
    pos: vec(0, 256),
    c1: vec(-2 * C, 256),
    c2: vec(0, 256 - 2 * C),
  }

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Group transform={[{ translateX: 50 }]}>
            <Patch
              colors={colors}
              patch={[topLeft, topRight, bottomRight, bottomLeft]}
            />
          </Group>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
