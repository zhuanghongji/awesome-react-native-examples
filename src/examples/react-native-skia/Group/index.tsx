import React from 'react'
import {
  Canvas,
  Circle,
  Group,
  Image,
  RoundedRect,
  useImage,
  usePaintRef,
} from '@shopify/react-native-skia'
import { ExamplePlayground, ExampleScrollView } from '../../../components'

const oslo = require('./oslo.jpeg')

export const GroupScreen = () => {
  const image = useImage(oslo)
  const star =
    'M 128 0 L 168 80 L 256 93 L 192 155 L 207 244 L 128 202 L 49 244 L 64 155 L 0 93 L 88 80 L 128 0 Z'

  const paint = usePaintRef()

  const example1 = () => {
    const r = 128
    return (
      <Canvas style={{ flex: 1 }}>
        <Circle cx={r} cy={r} r={r} color="#51AFED" />
        {/* The paint is inherited by the following sibling and descendants */}
        <Group color="lightblue" style="stroke" strokeWidth={10}>
          <Circle cx={r} cy={r} r={r / 2} />
          <Circle cx={r} cy={r} r={r / 3} />
          <Circle cx={r} cy={r} r={r / 5} color="white" />
        </Group>
      </Canvas>
    )
  }

  const example2 = () => {
    return (
      <Canvas style={{ flex: 1 }}>
        {/* Without transform */}
        <Group color="lightblue">
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
        <Circle cx={64} cy={64} r={2} />
      </Canvas>
    )
  }

  const example3 = () => {
    return (
      <Canvas style={{ flex: 1 }}>
        {/* With transform, same as `origin={{ x: 0, y: 0 }}` */}
        <Group color="lightblue" transform={[{ skewX: Math.PI / 6 }]}>
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
        <Circle cx={64} cy={64} r={2} />
      </Canvas>
    )
  }

  const example4 = () => {
    return (
      <Canvas style={{ flex: 1 }}>
        {/* With transform and origin={{ x: 128, y: 128 }} */}
        <Group
          color="lightblue"
          origin={{ x: 128, y: 128 }}
          transform={[{ skewX: Math.PI / 6 }]}
        >
          <RoundedRect x={64} y={64} width={128} height={128} r={10} />
        </Group>
        <Circle cx={64} cy={64} r={2} />
        <Circle cx={128} cy={128} r={2} color="red" />
      </Canvas>
    )
  }

  const example5 = () => {
    if (!image) {
      return null
    }
    return (
      <Canvas style={{ flex: 1 }}>
        <Group clip={star}>
          <Image
            image={image}
            x={0}
            y={0}
            width={256}
            height={256}
            fit="cover"
          />
        </Group>
      </Canvas>
    )
  }

  return (
    <ExampleScrollView>
      <ExamplePlayground>{example1()}</ExamplePlayground>
      <ExamplePlayground>{example2()}</ExamplePlayground>
      <ExamplePlayground>{example3()}</ExamplePlayground>
      <ExamplePlayground>{example4()}</ExamplePlayground>
      <ExamplePlayground>{example5()}</ExamplePlayground>
    </ExampleScrollView>
  )
}
