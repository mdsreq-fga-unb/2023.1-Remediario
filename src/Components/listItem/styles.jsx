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
        alignContent: 'center',
        justifyContent: 'center',
    },
    container2: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        alignContent: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
        height: '100%',
    },
    botao: {
        height: 40,
    },
    icon: {
        fontSize: 24,
        height: 28,
        backgroundColor: '#003936',
        paddingVertical: 2,
        paddingHorizontal: 2,
        borderRadius: 4,
    },
    miniIcon: {
        fontSize: 20,
    },
    name: {
        alignItems: 'flex-start',
    },
    contentHours: {
        backgroundColor: '#006B65',
        flexDirection: 'row',
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        height: 28,
    },
    alignEnd: {
        flexDirection: 'row',
        gap: 8,
    },

    progressBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '70%',
        marginLeft: 'auto',
    },
    progressBar: {
        width: '100%',
        height: 8,
        borderRadius: 5,
        backgroundColor: '#003936',
    },
    progressBarText: {
        marginTop: 5,
        color: '#FFF',
        fontSize: 16,
        height: 20,
    },
}); 
