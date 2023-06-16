import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B2020',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
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
    borderRadius: 4,
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
