import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: (activeCatagory) => {
        return {
            zIndex: 999,
            borderWidth: 4,
            borderColor: activeCatagory ? COLORS.primary : COLORS.lightWhite,
            width: 192,
            height: 112,
            borderRadius: SIZES.medium,
            shadowColor: COLORS.gray,
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 1,
            shadowRadius: 3,
            elevation: 3,
            backgroundColor: '#0000',
            marginRight: 4,
            overflow: 'hidden'
        }
    },
    image: {
        width: 184,
        height: 104,
        overflow: 'hidden'
    },
    textBox: {
        width: 184,
        height: 104,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 15
    },
    text: {
        fontSize: SIZES.large,
        color: COLORS.lightWhite,
        fontWeight: '600',
    }
})

export default styles;