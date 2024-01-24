import { Stack, useRouter, useGlobalSearchParams } from 'expo-router'
import { View, SafeAreaView, ScrollView, Text, Image } from 'react-native'

import { searchProduct } from '../../hooks/useData'
import styles from '../../styles/product'

const Product = () => {
    const params = useGlobalSearchParams()
    const router = useRouter();

    const product = searchProduct(params.id);

    return (
        <SafeAreaView>
            <Stack.Screen
                options={{
                    headerTitle: ''
                }}
            />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={{ uri: `http://127.0.0.1:3000${product.image}` }}
                        style={styles.image}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.nameText}>{product.name}</Text>
                    <Text style={styles.priceText}>AED {product.price}</Text>
                    <Text style={styles.descriptionText}>{product.description}</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Product;