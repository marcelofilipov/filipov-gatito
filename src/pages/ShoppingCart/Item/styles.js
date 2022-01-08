import { StyleSheet } from 'react-native'
import { colors } from '../../../styles';

export default StyleSheet.create({
  information: {
    padding: 24
  },
  name: {
    color: colors.laranja,
    fontWeight: 'bold',
    fontSize: 16,
  },
  calculo: {
    color: colors.escuro,
    fontSize: 14,
    marginVertical: 8,
  },
  price: {
    color: colors.roxo,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  divider: {
    marginHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.cinza,
  },
  shoppingCart: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
  },
  description: {
    color: colors.escuro,
    fontSize: 16,
    marginRight: 8,
  },
  amount: {
    width: 42,
  }
});