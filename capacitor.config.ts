import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pocket.moneytracker',
  appName: 'Pocket',
  webDir: 'www',
  android: {
    allowMixedContent: false
  }
};

export default config;
