/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */
import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  // someThing: () => _t(translations.someThing,'default value'),
  legalNotice: () =>
    _t(translations.SignInPage.Footer.legalNotice, 'Legal Notice'),
  disclaimer: () =>
    _t(
      translations.SignInPage.Footer.disclaimer,
      'Upon successful sign in to the Quessly Web Interface, your usage will be governed under End User License Agreement and Terms of Conditions, which are linked below. Quessly uses cookies to store information in your browser local, who are used for personalize your experience, and analyze our traffic. You consent to those cookies, if you continue to use this website.',
    ),
  copyright: () =>
    _t(
      translations.SignInPage.Footer.copyright,
      'Copyright © 2019, The Werkzeug Ltd., or its subsidiaries. All rights reserved.',
    ),
  privacyPolicy: () =>
    _t(translations.SignInPage.Footer.privacyPolicy, 'Privacy Policy'),
  termsOfConditions: () =>
    _t(translations.SignInPage.Footer.termsOfConditions, 'Terms of Conditions'),
  endUserLicenseAgreement: () =>
    _t(
      translations.SignInPage.Footer.endUserLicenseAgreement,
      'End User License Agreement',
    ),
};
