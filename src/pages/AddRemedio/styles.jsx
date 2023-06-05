import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2:{
    backgroundColor: '#252525',
    borderRadius: 8,
    marginTop: 10,
    flexGrow: 1,
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  secondarylabel: {
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
  },
  input: {
    borderRadius: 0,
    borderTopWidth: 1.5, 
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: 'white',
    backgroundColor: 'transparent',
    width: width - 20,
    color: 'white',
  },
  textInput: {
    color: 'white'
  },
  ContainerDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: width -20,
  },
  dropdown: {
    flex: 1,
    backgroundColor: '#252525',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 90,
  },
  dropdown2: {
    flex: 1,
    backgroundColor: '#252525',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    
  },
  dropdownPicker: {
    color: 'white',
    mode: 'dropdown',
    width: width * width,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -8 }],
    fontSize: 20,
    color: 'white',
  },
});
