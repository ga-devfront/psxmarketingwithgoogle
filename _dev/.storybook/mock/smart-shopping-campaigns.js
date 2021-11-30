export const sscDefault = {
campaigns: [],
  tracking: null,
  tagAlreadyExists: false
};


export const sscTrackingIsTrue = {
  ...sscDefault,
  tracking: true,
};


export const sscTrackingIsFalse = {
  ...sscDefault,
  tracking: false,
};


export const sscTagAlreadyExists = {
  ...sscDefault,
  tracking: true,
  tagAlreadyExists: true,
};

export const availableFilters = {
  name: "smartShoppingCampaignCreation.allFilters",
  id: "allFilters",
  checked: false,
  indeterminate: false,
  children: [
    {
      name: "smartShoppingCampaignCreation.categories",
      id: "categories",
      checked: false,
      indeterminate: false,
      children: [
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~1",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "1",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Animaux et articles pour animaux de compagnie",
          name: "Animaux et articles pour animaux de compagnie",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~8",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "8",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Arts et loisirs",
          name: "Arts et loisirs",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~111",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "111",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Entreprise et industrie",
          name: "Entreprise et industrie",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~141",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "141",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Appareils photo, caméras et instruments d'optique",
          name: "Appareils photo, caméras et instruments d'optique",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~166",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "166",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Vêtements et accessoires",
          name: "Vêtements et accessoires",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~222",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "222",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Appareils électroniques",
          name: "Appareils électroniques",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~412",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "412",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Alimentation, boissons et tabac",
          name: "Alimentation, boissons et tabac",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~436",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "436",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Meubles",
          name: "Meubles",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~469",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "469",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Santé et beauté",
          name: "Santé et beauté",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~536",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "536",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Maison et jardin",
          name: "Maison et jardin",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~537",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "537",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Bébés et tout-petits",
          name: "Bébés et tout-petits",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~632",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "632",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Quincaillerie",
          name: "Quincaillerie",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~772",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "772",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Adulte",
          name: "Adulte",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~783",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "783",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Médias",
          name: "Médias",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~888",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "888",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Véhicules et accessoires",
          name: "Véhicules et accessoires",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~922",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "922",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Fournitures de bureau",
          name: "Fournitures de bureau",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~988",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "988",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Équipements sportifs",
          name: "Équipements sportifs",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~1239",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "1239",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Jeux et jouets",
          name: "Jeux et jouets",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~2092",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "2092",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Logiciels",
          name: "Logiciels",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~5181",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "5181",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Bagages et maroquinerie",
          name: "Bagages et maroquinerie",
          checked: false,
          indeterminate: false,
        },
        {
          resourceName: "productBiddingCategoryConstants/FR~LEVEL1~5605",
          level: "LEVEL1",
          status: "ACTIVE",
          id: "5605",
          countryCode: "FR",
          languageCode: "fr",
          localizedName: "Offices religieux et cérémonies",
          name: "Offices religieux et cérémonies",
          checked: false,
          indeterminate: false,
        },
      ],
    },
  ],
};

export default sscDefault;
