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


// May contain unused imports in some cases
// @ts-ignore
import { GetSignableOrderResponseFeeInfo } from './get-signable-order-response-fee-info';

/**
 * 
 * @export
 * @interface GetSignableOrderResponse
 */
export interface GetSignableOrderResponse {
    /**
     * Fee-exclusive amount to buy
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'amount_buy': string;
    /**
     * Amount to sell
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'amount_sell': string;
    /**
     * ID of the asset to buy
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'asset_id_buy': string;
    /**
     * ID of the asset to sell
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'asset_id_sell': string;
    /**
     * ExpirationTimestamp in Unix time in hours. Note: will be rounded down to the nearest hour
     * @type {number}
     * @memberof GetSignableOrderResponse
     */
    'expiration_timestamp': number;
    /**
     * 
     * @type {GetSignableOrderResponseFeeInfo}
     * @memberof GetSignableOrderResponse
     */
    'fee_info'?: GetSignableOrderResponseFeeInfo;
    /**
     * Nonce of the order
     * @type {number}
     * @memberof GetSignableOrderResponse
     */
    'nonce': number;
    /**
     * Hash of the payload to be signed for signable order
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'payload_hash': string;
    /**
     * EIP-712 encoding of the StarkEx order transaction to be displayed to the user
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'readable_transaction': string;
    /**
     * Message to sign with L1 wallet to confirm order request
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'signable_message': string;
    /**
     * Public stark key of the created user
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'stark_key': string;
    /**
     * ID of the vault into which the bought asset will be placed
     * @type {number}
     * @memberof GetSignableOrderResponse
     */
    'vault_id_buy': number;
    /**
     * ID of the vault to sell from
     * @type {number}
     * @memberof GetSignableOrderResponse
     */
    'vault_id_sell': number;
    /**
     * IMX signed readable_transaction and payload_hash
     * @type {string}
     * @memberof GetSignableOrderResponse
     */
    'verification_signature': string;
}

