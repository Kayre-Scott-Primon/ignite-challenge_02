import theme from '@theme/index';
import Routes from '@routes/index';
import { ThemeProvider } from 'styled-components/native'
import { ActivityIndicator, StatusBar } from 'react-native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? 
        <>
          <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'transparent'}
            translucent/>
          <Routes/>
        </>
      : 
        <>
          <ActivityIndicator />
        </>
      }
    </ThemeProvider>
  );
}


