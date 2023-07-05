import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: '#006B65',
    },
    inContainer: {
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center',
        gap: 100,
        marginTop: 50,
    },

    header: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    remedio: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'regular',
    },

    horario:{
        color: '#FFF',
        fontSize: 64,
        fontWeight: 'bold',
    },

    buttons:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
    },

    confirmButton:{
        height: 60,
        width: 250,
        
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#FFF',

        backgroundColor: '#003936',
        borderRadius: 40,
    },

    delayButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 250,
    },

    delayButton:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        paddingHorizontal: 12,
        paddingVertical: 8,
        width: 150,
        backgroundColor: '#003936',
        borderRadius: 40,
    },

    textDelayButton:{
        color: '#FFF',
        fontSize: 16,
    },

    medicineUseContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        flexWrap: 'wrap',
        gap: 8,
        backgroundColor: '#003936',
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
});