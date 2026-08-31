import { isNativeAndroid } from '@/lib/native/androidApp';

export { isNativeAndroid };

export const isWebRuntime = () => !isNativeAndroid();

export const shouldUseLocalPokedexDatabase = () => isNativeAndroid();
