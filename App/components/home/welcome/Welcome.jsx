import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor", "Full-time1", "Part-time1", "Contractor1"]

const Welcome = (props) => {
  const [activeJobType, setActiveJobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Adrian</Text>
        <Text style={styles.userName}>Hello Your Perfect JOb</Text>

      </View>
      <View style={styles.container} >
        <View style={styles.searchWrapper} >
          <TextInput style={styles.searchInput} value="" onChange={() => { }} placeholder='What are you looking for?' />
          <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
            <Image source={icons.search} resizeMode='contain' style={styles.searchBtnImage} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                props.navigation.navigate("Full-time")
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome