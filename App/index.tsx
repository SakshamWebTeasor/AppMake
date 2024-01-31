import React, { useState } from 'react'
import { Text, View, ScrollView, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './Pages/HomeScreen';
import { COLORS, icons, images, SIZES } from './constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from './components'

const Stack = createNativeStackNavigator();

function index() {
    return (
        <NavigationContainer style={{ flex: 1, backgroundColor: COLORS.lightWhite, }}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerLeft: ()=> (<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />),
                    headerRight: ()=> (<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />),
                    headerTitle: ""
                }} />
            </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //     <Text>Home</Text>
        // </View>
    )
}

export default index