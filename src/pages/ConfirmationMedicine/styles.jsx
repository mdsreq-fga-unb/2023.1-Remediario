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
        flexDirection: 'column',
        gap: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    confirmButton:{
        height: 60,
        width: 220,
        
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#FFF',

        backgroundColor: '#003936',
        borderRadius: 40,
    },

    delayButton:{
        flexDirection: 'row',
        height: 60,
        width: 220,
        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#FFF',
        
        backgroundColor: '#003936',
        borderRadius: 40,
    },

    textDelayButton:{
        color: '#FFF',
        fontSize: 24,
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