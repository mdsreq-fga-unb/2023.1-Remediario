import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nomeRemedio: {
    color: 'white',
  },
  arrow: {
    fontSize: 18,
    color: 'white',
  },
  dropdown: {
    marginTop: 10,
  },
  optionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#006B65',
    padding: 8,
    borderRadius: 999999999999,
    marginRight: 5,
  },
  optionText: {
    color: 'white',
    marginRight: 5,
    fontSize: 10,
  },
  optionIcon: {
    fontSize: 10,
    color: 'white',
  },
});

export { styles };
