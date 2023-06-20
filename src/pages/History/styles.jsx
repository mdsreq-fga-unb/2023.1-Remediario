import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        height: 600,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: "flex-start",
        gap: 10,
        backgroundColor: '#161B1B',
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
    }
});