import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, Welcome } from '../components'

function HomeScreen() {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </View>
    )
}

export default HomeScreen