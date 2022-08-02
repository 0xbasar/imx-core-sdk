/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreateTradeRequestV1 } from '../models';
// @ts-ignore
import { CreateTradeResponse } from '../models';
// @ts-ignore
import { GetSignableTradeRequest } from '../models';
// @ts-ignore
import { GetSignableTradeResponse } from '../models';
// @ts-ignore
import { ListTradesResponse } from '../models';
// @ts-ignore
import { Trade } from '../models';
/**
 * TradesApi - axios parameter creator
 * @export
 */
export const TradesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a Trade
         * @summary Create a Trade between two parties
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateTradeRequestV1} createTradeRequest create a trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTrade: async (xImxEthAddress: string, xImxEthSignature: string, createTradeRequest: CreateTradeRequestV1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xImxEthAddress' is not null or undefined
            assertParamExists('createTrade', 'xImxEthAddress', xImxEthAddress)
            // verify required parameter 'xImxEthSignature' is not null or undefined
            assertParamExists('createTrade', 'xImxEthSignature', xImxEthSignature)
            // verify required parameter 'createTradeRequest' is not null or undefined
            assertParamExists('createTrade', 'createTradeRequest', createTradeRequest)
            const localVarPath = `/v1/trades`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xImxEthAddress != null) {
                localVarHeaderParameter['x-imx-eth-address'] = String(xImxEthAddress);
            }

            if (xImxEthSignature != null) {
                localVarHeaderParameter['x-imx-eth-signature'] = String(xImxEthSignature);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createTradeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details a signable trade V3
         * @summary Get details a signable trade V3
         * @param {GetSignableTradeRequest} getSignableTradeRequest get a signable trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignableTrade: async (getSignableTradeRequest: GetSignableTradeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getSignableTradeRequest' is not null or undefined
            assertParamExists('getSignableTrade', 'getSignableTradeRequest', getSignableTradeRequest)
            const localVarPath = `/v3/signable-trade-details`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getSignableTradeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details of a trade with the given ID
         * @summary Get details of a trade with the given ID
         * @param {string} id Trade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrade: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getTrade', 'id', id)
            const localVarPath = `/v1/trades/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of trades
         * @summary Get a list of trades
         * @param {string} [partyAOrderId] Party A\&#39;s (buy order) order id
         * @param {string} [partyATokenType] Party A\&#39;s (buy order) token type of currency used to buy
         * @param {string} [partyATokenAddress] Party A\&#39;s (buy order) token address of currency used to buy
         * @param {string} [partyBOrderId] Party B\&#39;s (sell order) order id
         * @param {string} [partyBTokenType] Party B\&#39;s (sell order) token type of NFT sold - always ERC721
         * @param {string} [partyBTokenAddress] Party B\&#39;s (sell order) collection address of NFT sold
         * @param {string} [partyBTokenId] Party B\&#39;s (sell order) token id of NFT sold
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [minTimestamp] Minimum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTrades: async (partyAOrderId?: string, partyATokenType?: string, partyATokenAddress?: string, partyBOrderId?: string, partyBTokenType?: string, partyBTokenAddress?: string, partyBTokenId?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, minTimestamp?: string, maxTimestamp?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/trades`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (partyAOrderId !== undefined) {
                localVarQueryParameter['party_a_order_id'] = partyAOrderId;
            }

            if (partyATokenType !== undefined) {
                localVarQueryParameter['party_a_token_type'] = partyATokenType;
            }

            if (partyATokenAddress !== undefined) {
                localVarQueryParameter['party_a_token_address'] = partyATokenAddress;
            }

            if (partyBOrderId !== undefined) {
                localVarQueryParameter['party_b_order_id'] = partyBOrderId;
            }

            if (partyBTokenType !== undefined) {
                localVarQueryParameter['party_b_token_type'] = partyBTokenType;
            }

            if (partyBTokenAddress !== undefined) {
                localVarQueryParameter['party_b_token_address'] = partyBTokenAddress;
            }

            if (partyBTokenId !== undefined) {
                localVarQueryParameter['party_b_token_id'] = partyBTokenId;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (minTimestamp !== undefined) {
                localVarQueryParameter['min_timestamp'] = minTimestamp;
            }

            if (maxTimestamp !== undefined) {
                localVarQueryParameter['max_timestamp'] = maxTimestamp;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TradesApi - functional programming interface
 * @export
 */
export const TradesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TradesApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a Trade
         * @summary Create a Trade between two parties
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateTradeRequestV1} createTradeRequest create a trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createTrade(xImxEthAddress: string, xImxEthSignature: string, createTradeRequest: CreateTradeRequestV1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateTradeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createTrade(xImxEthAddress, xImxEthSignature, createTradeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get details a signable trade V3
         * @summary Get details a signable trade V3
         * @param {GetSignableTradeRequest} getSignableTradeRequest get a signable trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSignableTrade(getSignableTradeRequest: GetSignableTradeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSignableTradeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSignableTrade(getSignableTradeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get details of a trade with the given ID
         * @summary Get details of a trade with the given ID
         * @param {string} id Trade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getTrade(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Trade>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getTrade(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of trades
         * @summary Get a list of trades
         * @param {string} [partyAOrderId] Party A\&#39;s (buy order) order id
         * @param {string} [partyATokenType] Party A\&#39;s (buy order) token type of currency used to buy
         * @param {string} [partyATokenAddress] Party A\&#39;s (buy order) token address of currency used to buy
         * @param {string} [partyBOrderId] Party B\&#39;s (sell order) order id
         * @param {string} [partyBTokenType] Party B\&#39;s (sell order) token type of NFT sold - always ERC721
         * @param {string} [partyBTokenAddress] Party B\&#39;s (sell order) collection address of NFT sold
         * @param {string} [partyBTokenId] Party B\&#39;s (sell order) token id of NFT sold
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [minTimestamp] Minimum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTrades(partyAOrderId?: string, partyATokenType?: string, partyATokenAddress?: string, partyBOrderId?: string, partyBTokenType?: string, partyBTokenAddress?: string, partyBTokenId?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, minTimestamp?: string, maxTimestamp?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTradesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTrades(partyAOrderId, partyATokenType, partyATokenAddress, partyBOrderId, partyBTokenType, partyBTokenAddress, partyBTokenId, pageSize, cursor, orderBy, direction, minTimestamp, maxTimestamp, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TradesApi - factory interface
 * @export
 */
export const TradesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TradesApiFp(configuration)
    return {
        /**
         * Create a Trade
         * @summary Create a Trade between two parties
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateTradeRequestV1} createTradeRequest create a trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createTrade(xImxEthAddress: string, xImxEthSignature: string, createTradeRequest: CreateTradeRequestV1, options?: any): AxiosPromise<CreateTradeResponse> {
            return localVarFp.createTrade(xImxEthAddress, xImxEthSignature, createTradeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details a signable trade V3
         * @summary Get details a signable trade V3
         * @param {GetSignableTradeRequest} getSignableTradeRequest get a signable trade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignableTrade(getSignableTradeRequest: GetSignableTradeRequest, options?: any): AxiosPromise<GetSignableTradeResponse> {
            return localVarFp.getSignableTrade(getSignableTradeRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details of a trade with the given ID
         * @summary Get details of a trade with the given ID
         * @param {string} id Trade ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTrade(id: string, options?: any): AxiosPromise<Trade> {
            return localVarFp.getTrade(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of trades
         * @summary Get a list of trades
         * @param {string} [partyAOrderId] Party A\&#39;s (buy order) order id
         * @param {string} [partyATokenType] Party A\&#39;s (buy order) token type of currency used to buy
         * @param {string} [partyATokenAddress] Party A\&#39;s (buy order) token address of currency used to buy
         * @param {string} [partyBOrderId] Party B\&#39;s (sell order) order id
         * @param {string} [partyBTokenType] Party B\&#39;s (sell order) token type of NFT sold - always ERC721
         * @param {string} [partyBTokenAddress] Party B\&#39;s (sell order) collection address of NFT sold
         * @param {string} [partyBTokenId] Party B\&#39;s (sell order) token id of NFT sold
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [minTimestamp] Minimum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTrades(partyAOrderId?: string, partyATokenType?: string, partyATokenAddress?: string, partyBOrderId?: string, partyBTokenType?: string, partyBTokenAddress?: string, partyBTokenId?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, minTimestamp?: string, maxTimestamp?: string, options?: any): AxiosPromise<ListTradesResponse> {
            return localVarFp.listTrades(partyAOrderId, partyATokenType, partyATokenAddress, partyBOrderId, partyBTokenType, partyBTokenAddress, partyBTokenId, pageSize, cursor, orderBy, direction, minTimestamp, maxTimestamp, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createTrade operation in TradesApi.
 * @export
 * @interface TradesApiCreateTradeRequest
 */
export interface TradesApiCreateTradeRequest {
    /**
     * eth address
     * @type {string}
     * @memberof TradesApiCreateTrade
     */
    readonly xImxEthAddress: string

    /**
     * eth signature
     * @type {string}
     * @memberof TradesApiCreateTrade
     */
    readonly xImxEthSignature: string

    /**
     * create a trade
     * @type {CreateTradeRequestV1}
     * @memberof TradesApiCreateTrade
     */
    readonly createTradeRequest: CreateTradeRequestV1
}

/**
 * Request parameters for getSignableTrade operation in TradesApi.
 * @export
 * @interface TradesApiGetSignableTradeRequest
 */
export interface TradesApiGetSignableTradeRequest {
    /**
     * get a signable trade
     * @type {GetSignableTradeRequest}
     * @memberof TradesApiGetSignableTrade
     */
    readonly getSignableTradeRequest: GetSignableTradeRequest
}

/**
 * Request parameters for getTrade operation in TradesApi.
 * @export
 * @interface TradesApiGetTradeRequest
 */
export interface TradesApiGetTradeRequest {
    /**
     * Trade ID
     * @type {string}
     * @memberof TradesApiGetTrade
     */
    readonly id: string
}

/**
 * Request parameters for listTrades operation in TradesApi.
 * @export
 * @interface TradesApiListTradesRequest
 */
export interface TradesApiListTradesRequest {
    /**
     * Party A\&#39;s (buy order) order id
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyAOrderId?: string

    /**
     * Party A\&#39;s (buy order) token type of currency used to buy
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyATokenType?: string

    /**
     * Party A\&#39;s (buy order) token address of currency used to buy
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyATokenAddress?: string

    /**
     * Party B\&#39;s (sell order) order id
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyBOrderId?: string

    /**
     * Party B\&#39;s (sell order) token type of NFT sold - always ERC721
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyBTokenType?: string

    /**
     * Party B\&#39;s (sell order) collection address of NFT sold
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyBTokenAddress?: string

    /**
     * Party B\&#39;s (sell order) token id of NFT sold
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly partyBTokenId?: string

    /**
     * Page size of the result
     * @type {number}
     * @memberof TradesApiListTrades
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly orderBy?: string

    /**
     * Direction to sort (asc/desc)
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly direction?: string

    /**
     * Minimum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly minTimestamp?: string

    /**
     * Maximum timestamp for this trade, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @type {string}
     * @memberof TradesApiListTrades
     */
    readonly maxTimestamp?: string
}

/**
 * TradesApi - object-oriented interface
 * @export
 * @class TradesApi
 * @extends {BaseAPI}
 */
export class TradesApi extends BaseAPI {
    /**
     * Create a Trade
     * @summary Create a Trade between two parties
     * @param {TradesApiCreateTradeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradesApi
     */
    public createTrade(requestParameters: TradesApiCreateTradeRequest, options?: AxiosRequestConfig) {
        return TradesApiFp(this.configuration).createTrade(requestParameters.xImxEthAddress, requestParameters.xImxEthSignature, requestParameters.createTradeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details a signable trade V3
     * @summary Get details a signable trade V3
     * @param {TradesApiGetSignableTradeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradesApi
     */
    public getSignableTrade(requestParameters: TradesApiGetSignableTradeRequest, options?: AxiosRequestConfig) {
        return TradesApiFp(this.configuration).getSignableTrade(requestParameters.getSignableTradeRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details of a trade with the given ID
     * @summary Get details of a trade with the given ID
     * @param {TradesApiGetTradeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradesApi
     */
    public getTrade(requestParameters: TradesApiGetTradeRequest, options?: AxiosRequestConfig) {
        return TradesApiFp(this.configuration).getTrade(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of trades
     * @summary Get a list of trades
     * @param {TradesApiListTradesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TradesApi
     */
    public listTrades(requestParameters: TradesApiListTradesRequest = {}, options?: AxiosRequestConfig) {
        return TradesApiFp(this.configuration).listTrades(requestParameters.partyAOrderId, requestParameters.partyATokenType, requestParameters.partyATokenAddress, requestParameters.partyBOrderId, requestParameters.partyBTokenType, requestParameters.partyBTokenAddress, requestParameters.partyBTokenId, requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.minTimestamp, requestParameters.maxTimestamp, options).then((request) => request(this.axios, this.basePath));
    }
}
