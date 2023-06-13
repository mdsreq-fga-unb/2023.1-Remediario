import { createURL, useURL } from 'expo-linking'
import { Text } from 'react-native';
import Routes from './src/routes';

export default function App() {
  const redirectURL = useURL();

  const url = createURL('confirmation', {});
  console.log(url);

  return (
    <>
      <Text>{redirectURL}</Text>
      <Routes />
    </>
  );
}