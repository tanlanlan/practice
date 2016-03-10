import * as locales from '../locales';

export default function TranslateConfig($translateProvider, $translatePartialLoaderProvider, LocaleUtils) {
  'ngInject';

  // 配置读取 locale 文件
  $translatePartialLoaderProvider.addPart(LocaleUtils.getLocalePart(locales));
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.useLoader('$translatePartialLoader', {
    urlTemplate: 'locale/{part}/{lang}.json'
  });
  $translateProvider.preferredLanguage('zh_CN');
  $translateProvider.fallbackLanguage('zh_CN');

}
