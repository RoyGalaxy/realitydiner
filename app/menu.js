import { Stack, useRouter } from "expo-router"
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native'

import CatagoryCards from '../components/common/CatagoryCards/CatagoryCards';
import ProductCards from '../components/common/ProductCards/ProductCards';

import useFetch from "../hooks/useFetch";
import { useProcessedData, useDataState } from '../hooks/useData'

const PRODUCTS_API_ENDPOINT = 'http://127.0.0.1:3000/api/products';

const Menu = () => {
    const { isLoading, error } = useFetch(PRODUCTS_API_ENDPOINT);
    const { catagoryNames, catagorisedProducts } = useProcessedData({
        catagorisedProducts: true,
        catagoryNames: true
    })
    const [flatListRef, setFlatListRef] = useDataState(null);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Stack.Screen
                options={{
                    headerTitle: "",
                }}
            />
            {isLoading ? (
                <ActivityIndicator size="large" />
            ) : (error ? (
                <Text>Some Error Occured!</Text>
            ) : (
                <View style={{ flex: 1 }}>
                    <CatagoryCards
                        catagoryNames={catagoryNames}
                        catagorisedProducts={catagorisedProducts}
                        productListRef={flatListRef}
                    />
                    <FlatList
                        ref={(ref) => setFlatListRef(ref)}
                        showsVerticalScrollIndicator={false}
                        data={catagoryNames}
                        renderItem={({ item }) => {
                            return (
                                <ProductCards catagoryName={item} catagoryProducts={catagorisedProducts[item]} />
                            )
                        }}
                        keyExtractor={(item) => item}
                    />
                </View>
            ))}
        </SafeAreaView>
    );
}

export default Menu;