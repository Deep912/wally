import { View, Text ,Image , TextInput , searchTerm , setSearchTerm, Button , ScrollView} from 'react-native'
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
      <View className="w-full px-6 flex-row items-center justify-between">
      <Text className="text-3xl text-gray-50 font-bold">
    Explore {'\n'}
    Collections
    </Text>
      </View>
      <View className="w-full px-6 flex-row items-center justify-between">
        <Text className="text-gray-400">
        We have best collections of Hindu Wallpaper.
        </Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
      <TextInput
        style={{ flex: 1, borderWidth: 1, borderColor: 'linear-gradient(90deg, rgba(242,130,66,1) 0%, rgba(242,76,38,1) 33%, rgba(167,56,45,1) 66%, rgba(191,73,151,1) 100%)'
, borderRadius: 5, padding: 6 }}
        placeholder="Search..."
        value={searchTerm}
        onChangeText={setSearchTerm}
     / >
      <Icon name="search" size={24}  color="#F28242" onPress={handleSearch} />
    </View>
      </SafeAreaView>
    </View>
    
  )
}

export default HomeScreen