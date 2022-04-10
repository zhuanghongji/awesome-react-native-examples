import React from 'react'
import { FlatList, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ReactNativeSkiaStackParamList } from '../../common'
import { Button } from '../../components/Button'
import { Divider } from '../../components/Divider'
import { ROUTE_NAMES } from './common'

type ScreenProps = NativeStackScreenProps<
  ReactNativeSkiaStackParamList,
  'react-native-skia'
>

export const HomeScreen = ({ navigation }: ScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <FlatList
        data={ROUTE_NAMES}
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
