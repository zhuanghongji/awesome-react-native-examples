import React from 'react'
import { StyleSheet, ViewStyle } from 'react-native'
import {
  Canvas,
  Circle,
  Defs,
  Group,
  Paint,
  usePaintRef,
} from '@shopify/react-native-skia'
import { ExampleScrollView, ExampleView } from '../../../components'

export const PaintScreen = () => {
  const paint = usePaintRef()

  const example1 = () => {
    const r = 64
    return (
      <Canvas style={{ flex: 1 }}>
        <Paint color="lightblue" />
        <Circle cx={r} cy={r} r={r} />
        {/* The paint is inherited by the following sibling and descendants */}
        <Group style="stroke" strokeWidth={10}>
          <Circle cx={r * 3} cy={r * 3} r={r} />
        </Group>
      </Canvas>
    )
  }

  const example2 = () => {
    const r = 64
    return (
      <Canvas style={{ flex: 1 }}>
        <Circle color="red" cx={r} cy={r} r={r} />
        {/* The color-setup above is independent of Circle and Group below and defalut color is black */}
        <Circle cx={r * 2} cy={r * 2} r={r} />
        <Group style="stroke" strokeWidth={10}>
          <Circle cx={r * 4} cy={r * 4} r={r} />
          <Circle cx={r * 4} cy={r * 4} r={r} />
        </Group>
      </Canvas>
    )
  }

  const example3 = () => {
    const strokeWidth = 20
    const r = 128
    return (
      <Canvas style={{ flex: 1 }}>
        <Circle cx={r} cy={r} r={r} color="red">
          {/* Use paint component as a child of Shape */}
          <Paint color="lightblue" />
          <Paint color="#adbce6" style="stroke" strokeWidth={strokeWidth} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={strokeWidth / 2} />
        </Circle>
      </Canvas>
    )
  }

  const example4 = () => {
    return (
      <Canvas style={{ flex: 1 }}>
        {/* The Defs component prevents the Paint from being used directly */}
        <Defs>
          <Paint ref={paint} color="lightblue" />
        </Defs>
        {/* We can assign the ref to any shape, this will be handy in advanced use-case */}
        <Circle paint={paint} cx={128} cy={128} r={128} />
      </Canvas>
    )
  }

  return (
    <ExampleScrollView>
      <ExampleView>{example1()}</ExampleView>
      <ExampleView>{example2()}</ExampleView>
      <ExampleView>{example3()}</ExampleView>
      <ExampleView>{example4()}</ExampleView>
    </ExampleScrollView>
  )
}

type Styles = {
  container: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
  },
})
