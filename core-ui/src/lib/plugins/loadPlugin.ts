/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/ban-ts-comment */
declare global {
  interface Window {
    __remotes__: Record<string, string>;
  }

  // eslint-disable-next-line
  const __webpack_init_sharing__: any;
  // eslint-disable-next-line
  const __webpack_share_scopes__: any;
}

async function loadComponent<T>(scope: string, module: string): Promise<T> {
  // Initializes the share scope. This fills it with known provided modules from this build and all remotes
  await __webpack_init_sharing__("default");
  // @ts-ignore
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  // @ts-ignore
  await container.init(__webpack_share_scopes__.default);
  // @ts-ignore
  const factory = await window[scope].get(module);
  const Module = factory();
  return Module;
}

const urlCache = new Map();
const loadDynamicScript = (url: string) => {
  if (urlCache.has(url)) {
    return urlCache.get(url);
  }

  const loadingPromise = new Promise<void>((resolve, reject) => {
    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      resolve();
    };

    element.onerror = () => {
      document.head.removeChild(element);
      urlCache.delete(url);
      reject(new Error(`error loading script ${url}`));
    };

    document.head.appendChild(element);
  });

  urlCache.set(url, loadingPromise);

  return loadingPromise;
};

const moduleCache = new Map();
export const loadDynamicModule = async <T>(
  remoteUrl: string,
  scope: string,
  moduleName: string
): Promise<T> => {
  const key = `${remoteUrl}-${scope}-${moduleName}`;

  if (moduleCache.has(key)) {
    return moduleCache.get(key) as T;
  }

  await loadDynamicScript(remoteUrl);

  const module = await loadComponent<T>(scope, moduleName);
  moduleCache.set(key, module);

  return module;
};
