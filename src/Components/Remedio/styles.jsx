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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006B65',
    height: 50,
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
    gap: 4,
  },
  dateHour: {
    color: 'white',
    marginRight: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateDay: {
    color: 'white',
    marginRight: 5,
    fontSize: 10,
  },
  optionIcon: {
    fontSize: 10,
    color: 'white',
  },
  dateContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 2,
  }
});

export { styles };
