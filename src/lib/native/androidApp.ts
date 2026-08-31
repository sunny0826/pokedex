import { Capacitor } from '@capacitor/core';
import { App as CapacitorApp } from '@capacitor/app';
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Share } from '@capacitor/share';
import { StatusBar, Style } from '@capacitor/status-bar';

export const isNativeAndroid = () => Capacitor.getPlatform() === 'android';

export const configureAndroidShell = async () => {
  if (!isNativeAndroid()) return;

  try {
    await StatusBar.setBackgroundColor({ color: '#d61f1f' });
    await StatusBar.setStyle({ style: Style.Light });
  } catch (error) {
    console.warn('Failed to configure Android status bar', error);
  }
};

export const exitAndroidApp = async () => {
  if (!isNativeAndroid()) return;
  await CapacitorApp.exitApp();
};

export const impactAndroid = async (style: ImpactStyle = ImpactStyle.Light) => {
  if (!isNativeAndroid()) return;

  try {
    await Haptics.impact({ style });
  } catch {
    // Haptics are best-effort and not available on every Android device.
  }
};

export const notifyAndroid = async (type: NotificationType = NotificationType.Success) => {
  if (!isNativeAndroid()) return;

  try {
    await Haptics.notification({ type });
  } catch {
    // Haptics are best-effort and not available on every Android device.
  }
};

export const shareAndroidJsonFile = async (fileName: string, json: string, title: string) => {
  if (!isNativeAndroid()) return false;

  const path = `exports/${fileName}`;

  await Filesystem.writeFile({
    path,
    data: json,
    directory: Directory.Cache,
    encoding: Encoding.UTF8,
    recursive: true,
  });

  const { uri } = await Filesystem.getUri({
    path,
    directory: Directory.Cache,
  });

  await Share.share({
    title,
    dialogTitle: title,
    files: [uri],
  });

  return true;
};

const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      if (typeof reader.result !== 'string') {
        reject(new Error('Unable to read shared file data'));
        return;
      }

      resolve(reader.result.split(',')[1] ?? reader.result);
    };
    reader.onerror = () => reject(reader.error ?? new Error('Unable to read shared file data'));
    reader.readAsDataURL(blob);
  });
};

export const shareAndroidBlobFile = async (fileName: string, blob: Blob, title: string) => {
  if (!isNativeAndroid()) return false;

  const path = `exports/${fileName}`;
  const data = await blobToBase64(blob);

  await Filesystem.writeFile({
    path,
    data,
    directory: Directory.Cache,
    recursive: true,
  });

  const { uri } = await Filesystem.getUri({
    path,
    directory: Directory.Cache,
  });

  await Share.share({
    title,
    dialogTitle: title,
    files: [uri],
  });

  return true;
};

export { ImpactStyle, NotificationType };
export { CapacitorApp };
