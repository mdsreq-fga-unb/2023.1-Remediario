import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1B2020',
        marginLeft: 12,
        marginRight: 12,
        width: 350,
        marginBottom: 12,
        padding: 10,
        borderRadius: 10,
    },
    container2: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 10,
    },
    botao: {
        borderRadius: 10,
        padding: 5,
    },
    icon: {
        fontSize: 28,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 3,
    },
    miniIcon: {
        fontSize: 25,
        alignContent: 'center',
        alignItems: 'center',
        paddingBottom: 2,
        paddingTop: 2,
        marginEnd: 3,

    },
    name: {
        alignItems: 'flex-start',
    },
    contentHours: {
        backgroundColor: '#006B65',
        flexDirection: 'row',
        padding: 3,
        borderRadius: 10,
        justifyContent: 'flex-end',
    },
    alignEnd: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '70%',
        marginLeft: 'auto',

    },

    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '70%',
        marginLeft: 'auto',
    },
    progressBar: {
        width: '80%',
        height: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    progressBarText: {
        width: '20%',
        marginTop: 5,
        color: '#FFF',
        fontSize: 16,
    },
}); 
