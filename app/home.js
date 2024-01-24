import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, images, SIZES } from '../constants'

import MenuBtn from '../components/buttons/MenuBtn/MenuBtn';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerShown: false
        }}

      />
      <View style={{width: '100%',height: '100%',justifyContent:'space-between',alignItems: 'center',padding:25, backgroundColor:COLORS.lightWhite}}>
        <Text></Text>
        <MenuBtn />
        <Text>~Powered by RealityDiner</Text>
      </View>

      
    </SafeAreaView>
  )
}

export default Home;