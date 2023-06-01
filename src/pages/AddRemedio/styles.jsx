import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center",
    },

    text: {
        color: '#000',
        fontSize: 30,
        fontWeight: 'bold',

    }
    
        container: {
          flex: 1,
          backgroundColor: '#1E1E1E',
          padding: 20,
        },
        label: {
          fontSize: 18,
          color: 'white',
          marginBottom: 5,
        },
        input: {
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 10,
          marginBottom: 20,
        },
        dosagemContainer: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        dropdown: {
          flex: 1,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 8,
          marginRight: 10,
        },
        dosagemText: {
          color: 'white',
          marginLeft: 10,
        },
      
});