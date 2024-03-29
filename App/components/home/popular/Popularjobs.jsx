import React from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import styles from './popularjobs.style'
import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../Hook/useFetch'

const Popularjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: '1'
  })
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ?
          <ActivityIndicator size="large" color={COLORS.primary} />
          : error ?
            <Text>Something Went Wrong</Text>
            : (<FlatList data={[1, 2, 3, 4]} renderItem={({ item }) => <PopularJobCard item={item} />} keyExtractor={item => item?.job_id} contentContainerStyle={{ columnGap: SIZES.medium }} horizontal />)}
      </View>
    </View>
  )
}

export default Popularjobs