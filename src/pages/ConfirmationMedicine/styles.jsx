import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#006B65',
        alignItems: 'center',
    },

    header: {
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 50,
        marginTop: 40,
    },

    remedio: {
        color: '#FFF',
        fontSize: 24,
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
        gap: 40,
        justifyContent: 'center',
    },

    confirmButton:{
        width: 150,

        alignItems: 'center',
        justifyContent: "center",
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#FFF',

        backgroundColor: '#003936',
        borderRadius: 40,
    },

    delayButton:{
        width: 150,

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
        fontSize: 32,
    },

    medicineUseContainer:{
        width: 300,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    }
});