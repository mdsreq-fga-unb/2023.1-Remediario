import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161B1B',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
    },
    text: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    reload : {
        backgroundColor: '#006B65',
        width: 40,
        height: 40,
        borderRadius: 200,
        top: 20,
        left: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    reload_Icon : {
        fontSize: 30,
    },
});