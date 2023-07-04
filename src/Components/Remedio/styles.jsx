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
    alignItems: 'center',
    backgroundColor: '#006B65',
    height: 60,
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
    gap: 4,
    width: 60,
  },

  notUsedBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003936',
    height: 60,
    padding: 8,
    borderRadius: 4,
    marginRight: 5,
    gap: 4,
    width: 60,
  },
  notUsedDateDay: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateHour: {
    color: 'white',
    marginRight: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateDay: {
    color: 'white',
    fontSize: 10,
  },
  optionIcon: {
    fontSize: 16,
    color: 'white',
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 4,
  }
});

export { styles };
