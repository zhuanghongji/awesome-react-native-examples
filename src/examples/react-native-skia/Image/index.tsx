import React from 'react'
import { Canvas, Fill, Image, useImage } from '@shopify/react-native-skia'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const ImageScreen = () => {
  // Alternatively, you can pass an image URL directly
  // for instance: const image = useImage("https://bit.ly/3fkulX5");
  const image = useImage(require('../assets/oslo.jpeg'))

  return (
    <ExampleContainer>
      <ExamplePlayground>
        <Canvas style={{ width: 256, height: 256 }}>
          <Fill color="#F5F5F5" />
          {image && (
            <Image
              image={image}
              fit="contain"
              x={0}
              y={0}
              width={256}
              height={256}
            />
          )}
        </Canvas>
      </ExamplePlayground>
    </ExampleContainer>
  )
}
