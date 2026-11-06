import { App } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';

// Use Android's physical/system back button to follow Pocket's navigation rule:
// any inner page -> Home; Home -> confirm exit; confirmed exit -> close app.
if (Capacitor.isNativePlatform()) {
  window.PocketNativeExit = () => App.exitApp();
  App.addListener('backButton', () => {
    if (typeof window.handleBack === 'function') window.handleBack();
  });
}
