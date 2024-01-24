import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from '../../../constants'

const styles = StyleSheet.create({
    container:{
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 30,
    },
    text: {
        fontSize: 22,
        fontWeight:  'bold',
        color: COLORS.lightWhite,
    }
})

export default styles;
