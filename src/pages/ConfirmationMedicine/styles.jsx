import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    outContainer: {
        flex: 1,
        backgroundColor: '#006B65',
        paddingVertical: 40,
    },
    inContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    header: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
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
        flex: 7,
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
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 8,
        paddingHorizontal: 20,
    }
});