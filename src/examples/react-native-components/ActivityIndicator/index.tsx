import React from 'react'
import { ActivityIndicator } from 'react-native'
import { ExampleContainer, ExamplePlayground } from '../../../components'

export const ActivityIndicatorScreen = () => {
  return (
    <ExampleContainer>
      <ExamplePlayground
        style={{ flexDirection: 'row', justifyContent: 'space-around' }}
      >
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </ExamplePlayground>
    </ExampleContainer>
  )
}
