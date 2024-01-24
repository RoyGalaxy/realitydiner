import { useRouter } from 'expo-router'
import { Text, View, Image,TouchableOpacity } from 'react-native';

import styles from './ProductCard.style';

const ProductCard = ({product}) => {
    const router = useRouter();

    return(
        <TouchableOpacity style={styles.container} onPress={() => {router.push(`/product/${product._id}`)}}>
            <Image 
                source={{uri: `http://127.0.0.1:3000${product.image}`}}
                resizeMode={'cover'}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text numberOfLines={1} style={styles.nameText}>{product.name}</Text>
                <Text numberOfLines={1} style={styles.priceText}>AED {product.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard;