/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TokenDetails
 */
export interface TokenDetails {
    /**
     * Number of decimals for token
     * @type {string}
     * @memberof TokenDetails
     */
    'decimals': string;
    /**
     * Url for the icon of the token
     * @type {string}
     * @memberof TokenDetails
     */
    'image_url': string;
    /**
     * Full name of the token (e.g. Ether)
     * @type {string}
     * @memberof TokenDetails
     */
    'name': string;
    /**
     * Quantum for token
     * @type {string}
     * @memberof TokenDetails
     */
    'quantum': string;
    /**
     * Ticker symbol for token (e.g. ETH/USDC/IMX)
     * @type {string}
     * @memberof TokenDetails
     */
    'symbol': string;
    /**
     * Address of the ERC20 contract
     * @type {string}
     * @memberof TokenDetails
     */
    'token_address': string;
}

