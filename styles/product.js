import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const styles = StyleSheet.create({
    infoContainer: {
        flex: 1,
        width: '100%',
        height: 'auto',
        backgroundColor: COLORS.lightWhite,
        padding: 20,
    },
    image: {
        width: '100%',
        aspectRatio: 1/1,
        marginHorizontal: 'auto',
    },
    nameText: {
        fontSize: SIZES.xLarge,
        marginVertical: 32,
        fontWeight: "bold",
        letterSpacing: 1,
        textAlign: 'center',
    },
    priceText: {
        fontSize: SIZES.xLarge,
        fontWeight: "600",
        color: COLORS.primary,
        letterSpacing: 1,
        textAlign: 'center',
    },
    descriptionText: {
        paddingHorizontal: 24,
        marginVertical: 32,
        fontSize: SIZES.medium,
        
    }
})

export default styles;