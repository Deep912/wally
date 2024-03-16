import { View, Text , TouchableOpacity , Image} from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';


const MasanoryLayout = ({data}) => {
  return (
    <MasonryList
    data={data}
    keyExtractor={(item) => item.id}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => <CardItem data={item} />}
  />
  )
}

const CardItem = ({data}) =>{

    const navigation = useNavigation()
    const handleClick = ()=>{
        navigation.navigate("Item", {param: data.id})
    }

    return (
      <TouchableOpacity className="m-1 rounded-md relative overflow-hidden" 
      style={{height: Math.round(Math.random() * 100 + 200   ) }}
      onPress={handleClick}
      >
        <Image source={{uri: data.imageURL}} className="w-full h-full object-cover" />

      </TouchableOpacity>
    );
  };

export default MasanoryLayout;