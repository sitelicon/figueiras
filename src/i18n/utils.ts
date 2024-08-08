import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/figueiras/');
  const langParts = lang?.split('/');
  const langCode = langParts?.[0] || defaultLang;
  if (langCode in ui) return langCode as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang
      ? `/figueiras/${path}`
      : `/figueiras/${l}/${path}`;
  };
}
