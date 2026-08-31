import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pokedexzh.app',
  appName: '宝可梦图鉴',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  android: {
    backgroundColor: '#d61f1f',
  },
  plugins: {
    StatusBar: {
      backgroundColor: '#d61f1f',
      style: 'LIGHT',
    },
    CapacitorSQLite: {
      androidIsEncryption: false,
    },
  },
};

export default config;
