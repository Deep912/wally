import { View, Text, ActivityIndicator , Image , TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';



const Item = ({route}) => {
  const [isLoading , setIsLoading] = useState(false);
    const id = route?.params?.param;
    const navigation = useNavigation();

  return (
    <View className="flex-1 relative bg-black ">
      {isLoading ? 
     ( <ActivityIndicator color="#ff0000" size={"large"}/>)
      : (<>
        <Image source={{uri : "https://cdn.pixabay.com/photo/2024/02/29/12/41/woman-8604350_1280.jpg",
        }}
        className="w-full h-full object-cover"
         />
         <SafeAreaView className="absolute z-10 inset-0 flex justify-start items-center">
            <TouchableOpacity
            onPress={() => navigation.navigate("HomeScreen")} 
            className="w-full flex px-7 py-5" >
            <Ionicons name="arrow-back" size={32} color="black" />
            </TouchableOpacity>
            <View className="w-full h-full relative bg-red-50 ">
            
            </View>
         </SafeAreaView>
      </>
        
      )}
    </View>
  )
}

export default Item