import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: "flex-start",
        gap: 10,
        backgroundColor: '#161B1B',
    },
    remedioContainer: {
        alignItems: 'flex-start',
        justifyContent: "flex-start",
        gap: 10,
        backgroundColor: '#161B1B',
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#161B1B',
        justifyContent: "center",
    },
    titleLarge: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    downloadContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: "center",
        
        gap: 20,
    },
    medicineContainer: {
        gap: 8,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#006B65',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 200,
        width: 200,
        marginBottom: 10,
        marginTop: 10,
        gap: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        fontSize: 20,
    }
});