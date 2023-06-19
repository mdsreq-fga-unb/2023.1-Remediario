import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161B1B',
        alignItems: 'center',
        justifyContent: "center",
    },
    buttons:{
        flex: 7,
        flexDirection: 'column',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',

    }

});