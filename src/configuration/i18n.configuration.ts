import { EncryptStorage } from "encrypt-storage";
import { EnvironmentConfiguration } from "./environment.configuration";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { StorageConstants } from "../app/constants/storage.constants";
import English from "../resources/locales/en-US.locale";
import Portuguese from "../resources/locales/pt-BR.locale";

/**
 * Obtém a internacionalização via preferências
 * @returns {string}
 */
const getLocale = (): string => {
  const encryptStorage = new EncryptStorage(
    EnvironmentConfiguration.ENCRYPT_STORAGE_SECRET_KEY
  );
  const loadedLocale: string | undefined = encryptStorage.getItem(
    StorageConstants.LOCALE
  );

  if (loadedLocale) {
    return loadedLocale || EnvironmentConfiguration.APP_LOCALE;
  }

  return EnvironmentConfiguration.APP_LOCALE;
};

/**
 * @var initReactI18next
 */
i18n.use(initReactI18next).init({
  resources: {
    en: English,
    "en-US": English,
    pt: Portuguese,
    "pt-BR": Portuguese,
  },

  lng: getLocale(),
  fallbackLng: EnvironmentConfiguration.APP_FALLBACK_LOCALE,

  interpolation: {
    escapeValue: false,
  },
});

export const translate = (key: any) => i18n.t(key);
