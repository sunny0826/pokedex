import { useEffect } from 'react';
import { CapacitorApp, configureAndroidShell, isNativeAndroid } from '@/lib/native/androidApp';

export const useAndroidShell = (onBackButton: () => boolean | void) => {
  useEffect(() => {
    void configureAndroidShell();
  }, []);

  useEffect(() => {
    if (!isNativeAndroid()) return;

    const removePromise = CapacitorApp.addListener('backButton', () => {
      const handled = onBackButton();
      if (!handled) {
        void CapacitorApp.exitApp();
      }
    });

    return () => {
      void removePromise.then((handle) => handle.remove());
    };
  }, [onBackButton]);
};
