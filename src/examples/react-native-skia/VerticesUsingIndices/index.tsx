import React from 'react'
import {
  Canvas,
  ImageShader,
  Vertices,
  useImage,
  vec,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const VerticesUsingIndicesScreen = () => {
  const image = useImage(require('../assets/squares.png'))
  const vertices = [vec(0, 0), vec(256, 0), vec(256, 256), vec(0, 256)]
  const colors = ['#61dafb', '#fb61da', '#dafb61', '#61fbcf']
  const triangle1 = [0, 1, 2]
  const triangle2 = [0, 2, 3]
  const indices = [...triangle1, ...triangle2]

  if (!image) {
    return null
  }
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          <Vertices vertices={vertices} colors={colors} indices={indices}>
            <ImageShader image={image} tx="repeat" ty="repeat" />
          </Vertices>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
