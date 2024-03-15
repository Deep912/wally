import { View, Text ,Image , TextInput , searchTerm , setSearchTerm, Button , ScrollView , StyleSheet} from 'react-native'
import React, { useState } from 'react';
import { bg } from '../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = () => {
        onSearch(searchTerm);
      };
  return (
    <View className="flex-1 relative">
      <Image source={bg}/>
      <SafeAreaView className="absolute z-10 flex w-full h-full items-center justify-start gap-4 ">
      <View className="w-full px-6 flex-row items-center justify-between pt-4">
      <Text className="text-3xl text-gray-50 font-bold" style={{ letterSpacing: 4 }}>
    Explore {'\n'}
    Collections
    </Text>
      </View>
      <View className="w-full px-6 flex-row items-center justify-between">
        <Text className="text-gray-400">
        We have best collections of Hindu Wallpaper.
        </Text>
      </View>
      <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
            <LinearGradient
              colors={['rgba(242,130,66,1)', 'rgba(242,76,38,1)', 'rgba(167,56,45,1)', 'rgba(191,73,151,1)']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                flex: 1,
                borderRadius: 15,
                padding: 1,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              
              <TextInput
               style={[styles.searchBar, searchTerm.length > 0 && { color: '#FFF' }]}
                placeholder="Ganesh, Shiv..."
                placeholderTextColor="#A4A4A4"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </LinearGradient>
            <Icon name="search" size={24} color="#F28242" onPress={handleSearch} style={{ marginLeft: -40 }} />
          </View>
      </SafeAreaView>
    </View>





    
  )
}

const styles = StyleSheet.create({
  
  searchBar: {
    margin: 1,
    flexBasis: '99%',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272D3E',
    letterSpacing: 2
  }
})

export default HomeScreen	