import React from 'react'
import { FlatList, StatusBar, StyleSheet, ViewStyle } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { ReactNativeApisStackParamList } from '../../common'
import { Button } from '../../components/Button'
import { Divider } from '../../components/Divider'

export type RouteName = keyof ReactNativeApisStackParamList

type ScreenProps = NativeStackScreenProps<
  ReactNativeApisStackParamList,
  'React Native Apis'
>

const NAMES: RouteName[] = ['AccessibilityInfo']

export const HomeScreen = ({ navigation, route }: ScreenProps) => {
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
