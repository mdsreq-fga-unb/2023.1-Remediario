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
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dropdown: {
    marginTop: 10,
  },
  usedBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#006B65',
    height: 60,
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
    gap: 4,
  },
  notUsedBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#003936',
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
    gap: 4,
  },
  dateHour: {
    color: 'white',
    marginRight: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateDay: {
    color: 'white',
    fontSize: 12,
  },
  optionIcon: {
    fontSize: 20,
    color: 'white',
  },
  dateContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  }
});

export { styles };
