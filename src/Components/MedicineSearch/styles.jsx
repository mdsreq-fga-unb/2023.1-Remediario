import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
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
  },
});