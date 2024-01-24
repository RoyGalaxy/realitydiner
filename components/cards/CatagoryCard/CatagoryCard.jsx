import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './CatagoryCard.style'

const image = { uri: 'https://legacy.reactjs.org/logo-og.png' }

const CatagoryCard = ({ catagoryName, backgroundImage,activeCatagory, handlePress }) => {

    return (
        <TouchableOpacity 
            style={styles.container(activeCatagory === catagoryName)}
            onPress={() => handlePress(catagoryName)}
        >
            <ImageBackground
                source={backgroundImage}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.textBox}>
                    <Text style={styles.text}>{catagoryName}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default CatagoryCard;