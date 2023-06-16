import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollView: {
        backgrounColor: '#161B1B',
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: "center",
        gap: 8,
        backgrounColor: '#161B1B',
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
    }
});