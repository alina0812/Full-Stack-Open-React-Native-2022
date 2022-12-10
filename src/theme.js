import { Platform  } from 'react-native';

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      primary: '#0366d6',
      mainBackground: '#e1e4e8',
      white: '#fff',
      appBar: '#24292e',
      errorText: '#d73a4a',
      input: "#b1b1b1",
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      header2: 18,
      header: 20,
    },
    fonts: {
      main: Platform.select({
        android: 'Roboto',
        ios: 'Arial',
        default: 'System',
      }),
    },
    fontWeights: {
      normal: '400',
      semibold: '600',
      bold: '700',
    },
  };
  
  export default theme;