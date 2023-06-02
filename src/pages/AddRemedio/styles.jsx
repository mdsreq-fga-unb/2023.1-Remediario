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
  label: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  secondarylabel: {
    color: 'white',
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    backgroundColor: '#161B1B',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    width: width - 20,
    color: 'white',
  },
  ContainerDropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dropdown: {
    flex: 1,
    backgroundColor: '#161B1B',
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: 10,
    marginRight: 10,
  },
  dropdownPicker: {
    color: 'white',
    mode: 'dropdown',
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
