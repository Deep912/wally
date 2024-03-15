import { View, Text ,Image , TextInput ,  StyleSheet , ScrollView, ActivityIndicator, TouchableOpacity} from 'react-native'
import React, { useState, useEffect } from 'react';
import { bg } from '../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import MasonryList from '@react-native-seoul/masonry-list';

const HomeScreen = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [defaultCategory, setDefaultCategory] = useState("woman"); // Default category

    useEffect(() => {
        // Perform filtering when default category changes
        filterData(defaultCategory);
    }, [defaultCategory]);

    const filterData = (category) => {
        const filteredData = data.filter(item => item.name === category);
        setCategories(filteredData);
    };
    useEffect(() => {
      // Set default category and filter data when component mounts
      setDefaultCategory("category");
      filterData("category");
  }, []);

    const [categories, setCategories] = useState(null);
    const data = [
      {id: 1, name: "category", imageURL: "https://cdn.pixabay.com/photo/2024/02/29/12/41/woman-8604350_1280.jpg"},
      {id: 2, name: "category", imageURL: "https://cdn.pixabay.com/photo/2024/01/15/04/30/woman-8509281_1280.jpg"},
      {id: 3, name: "category", imageURL: "https://cdn.pixabay.com/photo/2024/02/25/13/30/shoes-8595773_1280.jpg"},
      {id: 4, name: "category", imageURL: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"},
      {id: 5, name: "category", imageURL: "https://cdn.pixabay.com/photo/2023/09/21/06/27/turnip-8266093_960_720.jpg"},
      {id: 6, name: "latest", imageURL: "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_1280.jpg"},
      {id: 7, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2023/10/30/02/35/girl-8351533_1280.jpg"},
      {id: 8, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2024/01/10/16/11/solar-8499901_1280.jpg"},
      {id: 9, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2023/12/11/12/03/tawny-owl-8443456_960_720.jpg"},
      {id: 10, name: "latest", imageURL: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"},
      {id: 11, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2023/10/30/02/35/girl-8351533_1280.jpg"},
      {id: 12, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2023/09/21/06/27/turnip-8266093_960_720.jpg"},
      {id: 13, name: "latest", imageURL: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"},
      {id: 14, name: "trending", imageURL: "https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg"}
    ];

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
              We have the best collections of Hindu Wallpaper.
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
               className="flex-1"
               style={[styles.searchBar, searchTerm.length > 0 && { color: '#FFF' }]}
                placeholder="Ganesh, Shiv..."
                placeholderTextColor="#A4A4A4"
                value={searchTerm}
                onChangeText={setSearchTerm}
              />
            </LinearGradient>
            <Icon name="search" size={24} color="#F28242"  style={{ marginLeft: -40 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }} className="w-full">
            <TouchableOpacity 
            onPress={() => setDefaultCategory("category")}
            >
              <Text className="text-gray-50 text-2xl">Category</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setDefaultCategory("trending")}
            >
              <Text className="text-gray-50 text-2xl">Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => setDefaultCategory("latest")}
            >
              <Text className="text-gray-50 text-2xl">Latest</Text>
            </TouchableOpacity>
          </View>
          <ScrollView className="w-full h-full px-4">
            {categories ? (
              <MasonryList
                data={categories}
                keyExtractor={(item) => item.id}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CardItem data={item} />}
              />
            ) : (
              <ActivityIndicator color={'#F24C26'} size={'large'}/>
            )}
          </ScrollView>

        
        </SafeAreaView>
      </View>
    );
}

// displaying the mashnory list

const CardItem = ({data}) => {
  return(
    <TouchableOpacity style={{height: Math.round(Math.random() * 100 + 200)}} className = "m-1 rounded-md relative overflow-hidden ">
      <Image source={{uri: data.imageURL}} className="w-full h-full object-cover" />
    </TouchableOpacity>
  );
}





// css for searchBar
const styles = StyleSheet.create({
  searchBar: {
    margin: 1,
    flexBasis: '99.50%',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#272D3E',
    letterSpacing: 2
  }
});

export default HomeScreen;
