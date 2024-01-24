import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '32%',
        alignItems: 'center',
        margin: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 8,
        shadowColor: '#111',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 10
    },
    infoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16
    },
    image: {
        width: '100%',
        aspectRatio: 1/1,
        borderRadius: 8,
    },
    nameText:{
        fontSize: SIZES.large,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 16,
        marginBottom: 16,
        color: '#111'
    },
    priceText: {
        fontSize: SIZES.medium,
        fontWeight: '600',
        color: COLORS.primary
    }
})

export default styles;