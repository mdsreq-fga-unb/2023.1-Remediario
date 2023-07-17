import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161B1B',
        alignItems: 'center',

    },
    destaque: {
        fontWeight: 'bold',
        color: 'red',
    },
    text1: {
        color: '#FFF',
        fontSize: 24,
        marginBottom: 12,
        marginLeft: 10,
        textAlign: 'center',
        marginTop: 80,
    },
    text2: {
        color: '#FFF',
        fontSize: 16,
        marginBottom: 12,
        marginTop: 24,
        marginLeft: 10,
        textAlign: 'center',
    },
    text3: {
        color: '#FFF',
        fontSize: 16,
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        margin: 12,
        padding: 12,
        fontSize: 16,
    },
    botao: {
        backgroundColor: '#006B65',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 200,
        width: width - 20,
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
}); 