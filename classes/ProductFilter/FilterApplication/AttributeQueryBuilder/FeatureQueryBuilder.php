<?php
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License version 3.0
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License version 3.0
 */

namespace PrestaShop\Module\PsxMarketingWithGoogle\ProductFilter\FilterApplication\AttributeQueryBuilder;

use Context;
use DbQuery;
use PrestaShop\Module\PsxMarketingWithGoogle\ProductFilter\Condition;
use PrestaShop\Module\PsxMarketingWithGoogle\Repository\LanguageRepository;

class FeatureQueryBuilder implements QueryBuilderInterface
{
    /**
     * @var Context
     */
    protected $context;

    /**
     * @var LanguageRepository
     */
    protected $languageRepository;

    /**
     * @var string
     */
    protected $currentLanguageIsoCode;

    public function __construct(
        Context $context,
        LanguageRepository $languageRepository
    ) {
        $this->context = $context;
        $this->languageRepository = $languageRepository;
        $this->currentLanguageIsoCode = $this->languageRepository->getIsoById(
            (int) $this->context->language->id
        );
    }

    public function addWhereFromFilter(DbQuery $query, $filter): DbQuery
    {
        /*
        Example of payload:

        {
            "attribute": "feature",
            "condition": "in",
            "values": [
                {
                    "id": "6",
                    "key": "Brasserie",
                    "value": "BRASSERIE DES LEGENDES",
                    "language": "fr"
                },
                {
                    "id": "6",
                    "key": "Brasserie",
                    "value": "BRASSERY DES LEGENDES",
                    "language": "gb"
                }
            ]
        }
        */

        switch ($filter['condition']) {
            case Condition::IS:
                // TODO
                return $query;
            case Condition::IS_NOT:
                // TODO
                return $query;
        }

        return $query;
    }

    public function addRelations(DbQuery $query): DbQuery
    {
        return $query
            ->leftJoin('feature_product', 'fp', 'fp.id_product = p.id_product')
            ->innerJoin('feature', 'f', 'fp.id_feature = f.id_feature')
            ->innerJoin('feature_shop', 'fs', 'fs.id_feature = f.id_feature')
            ->innerJoin('feature_lang', 'fl', 'fl.id_feature = f.id_feature')
            ->innerJoin('feature_value', 'fv', 'fv.id_feature = fp.id_feature')
            ->innerJoin('feature_value_lang', 'fvl', 'fvl.id_feature_value = fv.id_feature_value')
            ->where('fs.id_shop = ' . (int) $this->context->shop->id)
            ->where('fl.id_lang = ' . (int) $this->context->language->id);
    }
}