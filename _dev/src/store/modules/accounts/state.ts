/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

import {MerchantCenterAccount} from 'stories/onboarding-page.stories';

export interface PrestaShopAccountsContext {
  user: {
    email: string|null,
    emailIsValidated: boolean,
    isSuperAdmin: boolean,
  },
  currentShop: {
      id: string;
      name: string;
      domain: string;
      domainSsl: string;
      url: string;
  },
  isShopContext: boolean,
  shops: object[],
}

export interface GoogleAccountsContext {
  token: string,
  email: string,
  photo: string,
  authenticationUrl: string,
}

export interface MerchantCenterAccount {
  id: string|null,
  name?: string,
  websiteUrl?: string,
  adultContent?: string,
}

export type MerchantCenterAccountContext = MerchantCenterAccount & {
  // Allow the spinner to be displayed while claiming is done
  websiteVerificationProgressStatus: string|null,
  // Allow displaying the error message
  websiteVerificationStatus: string|null,
};

export interface State {
  contextPsAccounts: PrestaShopAccountsContext|any;
  googleAccount: GoogleAccountsContext;
  googleMerchantAccount: MerchantCenterAccountContext;
  psGoogleShoppingApiUrl: string;
  psGoogleShoppingShopUrl: string;
  psAccountShopId: string;
}

export const state: State = {
  contextPsAccounts: {},
  googleAccount: {
    token: '',
    email: '',
    photo: '',
    authenticationUrl: '',
  },
  googleMerchantAccount: {
    id: null,
    websiteVerificationProgressStatus: null,
    websiteVerificationStatus: null,
  },
  psGoogleShoppingApiUrl: '',
  psGoogleShoppingShopUrl: '',
  psAccountShopId: '',
};
