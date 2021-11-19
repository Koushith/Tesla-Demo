import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer: {
    width: '100%',
    height: '100%',
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: 40,
  },
  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover', //bg property
    position: 'absolute',
  },
});

export default styles;
