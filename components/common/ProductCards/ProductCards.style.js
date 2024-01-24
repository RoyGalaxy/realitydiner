import { StyleSheet } from "react-native";
import { SIZES } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '2%',
        width: '100%',
    },
    headerText: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: '#111',
        marginVertical: 30,
        width: '100%',
        textAlign: 'center'
    }
})

export default styles;