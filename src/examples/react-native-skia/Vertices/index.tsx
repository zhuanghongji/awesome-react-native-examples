import React from 'react'
import {
  Canvas,
  Group,
  ImageShader,
  Vertices,
  useImage,
  vec,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const VerticesScreen = () => {
  const image = useImage(require('../assets/squares.png'))
  const vertices = [vec(64, 0), vec(128, 256), vec(0, 256)]
  const colors = ['#61dafb', '#fb61da', '#dafb61']
  const textures = [vec(0, 0), vec(0, 128), vec(64, 256)]

  if (!image) {
    return null
  }
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ flex: 1 }}>
          {/* This is our texture */}
          <Group>
            {/* Here we specified colors, the default blendMode is dstOver */}
            <ImageShader image={image} tx="repeat" ty="repeat" />
            <Vertices vertices={vertices} colors={colors} />
            <Group transform={[{ translateX: 128 }]}>
              {/* Here we didn't specify colors, the default blendMode is srcOver */}
              <Vertices vertices={vertices} textures={textures} />
            </Group>
          </Group>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
