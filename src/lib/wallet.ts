export function setExternalProviderSafe(provider: any): boolean {
  try {
    if (typeof window === 'undefined') return false;
    const win = window as any;
    if (win.ethereum && typeof win.ethereum.setExternalProvider === 'function') {
      win.ethereum.setExternalProvider(provider);
      return true;
    }
    return false;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('setExternalProviderSafe failed:', err);
    return false;
  }
}

export default setExternalProviderSafe;
