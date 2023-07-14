import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161B1B',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
    },
    text: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    reload : {
        backgroundColor: '#006B65',
        width: 40,
        height: 40,
        borderRadius: 200,
        top: 20,
        left: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
    reload_Icon : {
        fontSize: 30,
    },
    inputContainer: {
        paddingBottom: 10,
        paddingLeft: 12,
      },
      textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 8, 
        paddingHorizontal: 10,
        width: width - 45,
      },
      textInput: {
        flex: 1,
        color: 'white',
      },
      searchIcon: {
        marginRight: 10,
      },
      resultContainer: {
        width: '100%',
      },
      errorMessage:{
        color: 'red',
        marginLeft: 15,
        marginBottom: 10,
      },
});
