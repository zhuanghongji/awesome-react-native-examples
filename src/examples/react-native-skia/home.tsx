import React from 'react'
import { FlatList, StatusBar, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ReactNativeSkiaStackParamList } from '../../common'
import { Button } from '../../components/Button'
import { Divider } from '../../components/Divider'

type RouteName = keyof ReactNativeSkiaStackParamList

type ScreenProps = NativeStackScreenProps<
  ReactNativeSkiaStackParamList,
  'react-native-skia'
>

const NAMES: RouteName[] = ['HelloWorld', 'HelloWorldImperativeAPI']

export const ReactNativeSkiaHomeScreen = ({
  navigation,
  route,
}: ScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={NAMES}
        ListHeaderComponent={<Divider />}
        ListFooterComponent={<Divider />}
        keyExtractor={(item, index) => `${index}_${item}`}
        renderItem={({ item }) => {
          return <Button text={item} onPress={() => navigation.push(item)} />
        }}
        ItemSeparatorComponent={() => <Divider />}
      />
    </SafeAreaView>
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
