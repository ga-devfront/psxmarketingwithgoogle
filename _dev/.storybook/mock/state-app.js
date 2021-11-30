export const initialStateApp = {
  psxMktgWithGoogleApiUrl: '',
  psxMktgWithGoogleShopUrl: 'https://my-shop.com',
  psxMktgWithGoogleAdminUrl: 'https://my-shop.com/admin-dev',
  psxMktgWithGoogleAdminAjaxUrl: '/',
  shopIdPsAccounts: '',
  tokenPsAccounts: '',
  psxMtgWithGoogleDefaultShopCountry: null,
  isCountryMemberOfEuropeanUnion: false,
  targetCountries: ['FR'],
  psxMktgWithGoogleShopCurrency: {
    isoCode: 'EUR',
  },
  psxMktgWithGoogleDocumentAndFaq: {
    faq: {},
    doc: '',
    contactUs: '',
  },
  psVersion: '',
  psxMktgWithGoogleModuleVersion: '',
  psxMktgWithGoogleMaintenanceSettingsUrl: '',
  psxMktgWithGoogleStoreSettingsUrl: '',
  shopIsOnMaintenanceMode: false,
  psxMktgWithGoogleProductDetailUrl: 'https://my-shop.com/admin-dev/index.php/sell/catalog/products/1?token=blabla',
  psxMktgWithGoogleCarriersUrl: '/',
  psxMktgWithGoogleAttributesUrl: '/',
};

export const stateWithMaintenanceModeOn = {
  ...initialStateApp,
  shopIsOnMaintenanceMode: true,
}

export const appMultiCountries = {
  ...initialStateApp,
  targetCountries: ['FR', 'IT'],
}

export default initialStateApp;
