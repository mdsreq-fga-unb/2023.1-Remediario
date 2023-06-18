import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#656565',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: 315,
        height: 78,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8.5,
        paddingBottom: 8.5,
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#FF0000',

    },
    icon: {
        fontSize: 30,
    },
    miniIcon: {
        fontSize: 15,
    },
    name: {
        alignContent: 'flex-start',
        backgroundColor: '#454545',
        alignItems: 'flex-start',
        marginRight: 12,
    },
    contentHours: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#454545',
        marginRight: 12,
    },
});