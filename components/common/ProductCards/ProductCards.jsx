import { View, ScrollView, FlatList, Text } from 'react-native';
import ProductCard from '../../cards/ProductCard/ProductCard';
import styles from './ProductCards.style';

const ProductCards = ({catagoryName,catagoryProducts}) => {
    return (
        <View style={{flex:1}}>
            <FlatList 
                contentContainerStyle={styles.container}
                columnWrapperStyle={{alignItems: 'center',justifyContent: 'center'}}
                data={catagoryProducts}
                numColumns={3}
                ListHeaderComponent={<Text style={styles.headerText}>{catagoryName}</Text>}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => {
                    return(
                        <ProductCard 
                            product={item}
                            key={item._id}
                        />
                    )
                }}
            />
        </View>
    )
}

export default ProductCards;