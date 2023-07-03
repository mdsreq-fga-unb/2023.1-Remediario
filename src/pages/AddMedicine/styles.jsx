import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#161B1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer:{
    gap: 8,
    backgrounColor: '#161B1B',
  },
  container2:{
    backgroundColor: '#1B2020',
    borderRadius: 8,
    marginTop: 10,
    flexGrow: 1,
  },
  label: {
    fontSize: 20,
    color: 'white',
    marginBottom: 10,
    marginTop: 10,
    paddingLeft: 10,
    width: '100%',
    alignSelf: 'flex-start',
  },
  secondarylabel: {
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
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
  textInput2: {
    flex: 1,
    backgroundColor: '#1B2020',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 90,
    borderTopStartRadius: 8,
    borderTopEndRadius: 8,
  },
  ContainerDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: width -20,
  },
  dropdown: {
    flex: 1,
    backgroundColor: '#1B2020',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    maxWidth: 90,
  },
  dropdown2: {
    flex: 1,
    backgroundColor: '#1B2020',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    
  },
  dropdownPicker: {
    color: 'white',
    mode: 'dropdown',
    width: width * width,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
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
