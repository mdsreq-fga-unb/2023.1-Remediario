import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
    marginTop: 10,
    marginLeft: 10,
    alignSelf: 'flex-start',
  },
  secondarylabel: {
    color: 'white',
    marginLeft: 5,
    marginRight: 5,
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
    marginLeft: 5,
    marginRight: 5,
  },
  dropdownPicker: {
    color: 'white',
  },
  optionIcon: {
    fontSize: 10,
    color: 'white',
  },
});
