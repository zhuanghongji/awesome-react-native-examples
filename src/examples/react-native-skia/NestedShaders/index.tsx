import React from 'react'
import {
  Canvas,
  Fill,
  ImageShader,
  Shader,
  Skia,
  useImage,
} from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

const source = Skia.RuntimeEffect.Make(`
uniform shader image;
 
half4 main(float2 xy) {   
  xy.x += sin(xy.y / 3) * 4;
  return image.eval(xy).rbga;
}`)!

export const NestedShadersScreen = () => {
  const image = useImage(require('../assets/oslo.jpeg'))
  if (!image) {
    return null
  }
  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ width: 256, height: 256 }}>
          <Fill>
            <Shader source={source}>
              <ImageShader
                image={image}
                fit="cover"
                rect={{ x: 0, y: 0, width: 256, height: 256 }}
              />
            </Shader>
          </Fill>
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
