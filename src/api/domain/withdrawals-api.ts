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
import { CreateWithdrawalRequest } from '../models';
// @ts-ignore
import { CreateWithdrawalResponse } from '../models';
// @ts-ignore
import { GetSignableWithdrawalRequest } from '../models';
// @ts-ignore
import { GetSignableWithdrawalResponse } from '../models';
// @ts-ignore
import { ListWithdrawalsResponse } from '../models';
// @ts-ignore
import { Withdrawal } from '../models';
/**
 * WithdrawalsApi - axios parameter creator
 * @export
 */
export const WithdrawalsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a withdrawal
         * @summary Creates a withdrawal of a token
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateWithdrawalRequest} createWithdrawalRequest create a withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWithdrawal: async (xImxEthAddress: string, xImxEthSignature: string, createWithdrawalRequest: CreateWithdrawalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'xImxEthAddress' is not null or undefined
            assertParamExists('createWithdrawal', 'xImxEthAddress', xImxEthAddress)
            // verify required parameter 'xImxEthSignature' is not null or undefined
            assertParamExists('createWithdrawal', 'xImxEthSignature', xImxEthSignature)
            // verify required parameter 'createWithdrawalRequest' is not null or undefined
            assertParamExists('createWithdrawal', 'createWithdrawalRequest', createWithdrawalRequest)
            const localVarPath = `/v1/withdrawals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (xImxEthAddress !== undefined && xImxEthAddress !== null) {
                localVarHeaderParameter['x-imx-eth-address'] = String(xImxEthAddress);
            }

            if (xImxEthSignature !== undefined && xImxEthSignature !== null) {
                localVarHeaderParameter['x-imx-eth-signature'] = String(xImxEthSignature);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createWithdrawalRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets details of a signable withdrawal
         * @summary Gets details of a signable withdrawal
         * @param {GetSignableWithdrawalRequest} getSignableWithdrawalRequest get details of signable withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignableWithdrawal: async (getSignableWithdrawalRequest: GetSignableWithdrawalRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'getSignableWithdrawalRequest' is not null or undefined
            assertParamExists('getSignableWithdrawal', 'getSignableWithdrawalRequest', getSignableWithdrawalRequest)
            const localVarPath = `/v1/signable-withdrawal-details`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(getSignableWithdrawalRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets details of withdrawal with the given ID
         * @summary Gets details of withdrawal with the given ID
         * @param {string} id Withdrawal ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWithdrawal: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getWithdrawal', 'id', id)
            const localVarPath = `/v1/withdrawals/{id}`
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
         * Get a list of withdrawals
         * @summary Get a list of withdrawals
         * @param {boolean} [withdrawnToWallet] Withdrawal has been transferred to user\&#39;s Layer 1 wallet
         * @param {string} [rollupStatus] Status of the on-chain batch confirmation for this withdrawal
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this withdrawal
         * @param {string} [status] Status of this withdrawal
         * @param {string} [minTimestamp] Minimum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the withdrawn asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenAddress] Token address of the withdrawn asset
         * @param {string} [tokenName] Token name of the withdrawn asset
         * @param {string} [minQuantity] Min quantity for the withdrawn asset
         * @param {string} [maxQuantity] Max quantity for the withdrawn asset
         * @param {string} [metadata] JSON-encoded metadata filters for the withdrawn asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWithdrawals: async (withdrawnToWallet?: boolean, rollupStatus?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenAddress?: string, tokenName?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/withdrawals`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (withdrawnToWallet !== undefined) {
                localVarQueryParameter['withdrawn_to_wallet'] = withdrawnToWallet;
            }

            if (rollupStatus !== undefined) {
                localVarQueryParameter['rollup_status'] = rollupStatus;
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

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (minTimestamp !== undefined) {
                localVarQueryParameter['min_timestamp'] = minTimestamp;
            }

            if (maxTimestamp !== undefined) {
                localVarQueryParameter['max_timestamp'] = maxTimestamp;
            }

            if (tokenType !== undefined) {
                localVarQueryParameter['token_type'] = tokenType;
            }

            if (tokenId !== undefined) {
                localVarQueryParameter['token_id'] = tokenId;
            }

            if (assetId !== undefined) {
                localVarQueryParameter['asset_id'] = assetId;
            }

            if (tokenAddress !== undefined) {
                localVarQueryParameter['token_address'] = tokenAddress;
            }

            if (tokenName !== undefined) {
                localVarQueryParameter['token_name'] = tokenName;
            }

            if (minQuantity !== undefined) {
                localVarQueryParameter['min_quantity'] = minQuantity;
            }

            if (maxQuantity !== undefined) {
                localVarQueryParameter['max_quantity'] = maxQuantity;
            }

            if (metadata !== undefined) {
                localVarQueryParameter['metadata'] = metadata;
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
 * WithdrawalsApi - functional programming interface
 * @export
 */
export const WithdrawalsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WithdrawalsApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a withdrawal
         * @summary Creates a withdrawal of a token
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateWithdrawalRequest} createWithdrawalRequest create a withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createWithdrawal(xImxEthAddress: string, xImxEthSignature: string, createWithdrawalRequest: CreateWithdrawalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CreateWithdrawalResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createWithdrawal(xImxEthAddress, xImxEthSignature, createWithdrawalRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets details of a signable withdrawal
         * @summary Gets details of a signable withdrawal
         * @param {GetSignableWithdrawalRequest} getSignableWithdrawalRequest get details of signable withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSignableWithdrawal(getSignableWithdrawalRequest: GetSignableWithdrawalRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetSignableWithdrawalResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSignableWithdrawal(getSignableWithdrawalRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Gets details of withdrawal with the given ID
         * @summary Gets details of withdrawal with the given ID
         * @param {string} id Withdrawal ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWithdrawal(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Withdrawal>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWithdrawal(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of withdrawals
         * @summary Get a list of withdrawals
         * @param {boolean} [withdrawnToWallet] Withdrawal has been transferred to user\&#39;s Layer 1 wallet
         * @param {string} [rollupStatus] Status of the on-chain batch confirmation for this withdrawal
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this withdrawal
         * @param {string} [status] Status of this withdrawal
         * @param {string} [minTimestamp] Minimum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the withdrawn asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenAddress] Token address of the withdrawn asset
         * @param {string} [tokenName] Token name of the withdrawn asset
         * @param {string} [minQuantity] Min quantity for the withdrawn asset
         * @param {string} [maxQuantity] Max quantity for the withdrawn asset
         * @param {string} [metadata] JSON-encoded metadata filters for the withdrawn asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listWithdrawals(withdrawnToWallet?: boolean, rollupStatus?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenAddress?: string, tokenName?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListWithdrawalsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listWithdrawals(withdrawnToWallet, rollupStatus, pageSize, cursor, orderBy, direction, user, status, minTimestamp, maxTimestamp, tokenType, tokenId, assetId, tokenAddress, tokenName, minQuantity, maxQuantity, metadata, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WithdrawalsApi - factory interface
 * @export
 */
export const WithdrawalsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WithdrawalsApiFp(configuration)
    return {
        /**
         * Creates a withdrawal
         * @summary Creates a withdrawal of a token
         * @param {string} xImxEthAddress eth address
         * @param {string} xImxEthSignature eth signature
         * @param {CreateWithdrawalRequest} createWithdrawalRequest create a withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWithdrawal(xImxEthAddress: string, xImxEthSignature: string, createWithdrawalRequest: CreateWithdrawalRequest, options?: any): AxiosPromise<CreateWithdrawalResponse> {
            return localVarFp.createWithdrawal(xImxEthAddress, xImxEthSignature, createWithdrawalRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets details of a signable withdrawal
         * @summary Gets details of a signable withdrawal
         * @param {GetSignableWithdrawalRequest} getSignableWithdrawalRequest get details of signable withdrawal
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSignableWithdrawal(getSignableWithdrawalRequest: GetSignableWithdrawalRequest, options?: any): AxiosPromise<GetSignableWithdrawalResponse> {
            return localVarFp.getSignableWithdrawal(getSignableWithdrawalRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets details of withdrawal with the given ID
         * @summary Gets details of withdrawal with the given ID
         * @param {string} id Withdrawal ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWithdrawal(id: string, options?: any): AxiosPromise<Withdrawal> {
            return localVarFp.getWithdrawal(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of withdrawals
         * @summary Get a list of withdrawals
         * @param {boolean} [withdrawnToWallet] Withdrawal has been transferred to user\&#39;s Layer 1 wallet
         * @param {string} [rollupStatus] Status of the on-chain batch confirmation for this withdrawal
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [user] Ethereum address of the user who submitted this withdrawal
         * @param {string} [status] Status of this withdrawal
         * @param {string} [minTimestamp] Minimum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [maxTimestamp] Maximum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
         * @param {string} [tokenType] Token type of the withdrawn asset
         * @param {string} [tokenId] ERC721 Token ID of the minted asset
         * @param {string} [assetId] Internal IMX ID of the minted asset
         * @param {string} [tokenAddress] Token address of the withdrawn asset
         * @param {string} [tokenName] Token name of the withdrawn asset
         * @param {string} [minQuantity] Min quantity for the withdrawn asset
         * @param {string} [maxQuantity] Max quantity for the withdrawn asset
         * @param {string} [metadata] JSON-encoded metadata filters for the withdrawn asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listWithdrawals(withdrawnToWallet?: boolean, rollupStatus?: string, pageSize?: number, cursor?: string, orderBy?: string, direction?: string, user?: string, status?: string, minTimestamp?: string, maxTimestamp?: string, tokenType?: string, tokenId?: string, assetId?: string, tokenAddress?: string, tokenName?: string, minQuantity?: string, maxQuantity?: string, metadata?: string, options?: any): AxiosPromise<ListWithdrawalsResponse> {
            return localVarFp.listWithdrawals(withdrawnToWallet, rollupStatus, pageSize, cursor, orderBy, direction, user, status, minTimestamp, maxTimestamp, tokenType, tokenId, assetId, tokenAddress, tokenName, minQuantity, maxQuantity, metadata, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createWithdrawal operation in WithdrawalsApi.
 * @export
 * @interface WithdrawalsApiCreateWithdrawalRequest
 */
export interface WithdrawalsApiCreateWithdrawalRequest {
    /**
     * eth address
     * @type {string}
     * @memberof WithdrawalsApiCreateWithdrawal
     */
    readonly xImxEthAddress: string

    /**
     * eth signature
     * @type {string}
     * @memberof WithdrawalsApiCreateWithdrawal
     */
    readonly xImxEthSignature: string

    /**
     * create a withdrawal
     * @type {CreateWithdrawalRequest}
     * @memberof WithdrawalsApiCreateWithdrawal
     */
    readonly createWithdrawalRequest: CreateWithdrawalRequest
}

/**
 * Request parameters for getSignableWithdrawal operation in WithdrawalsApi.
 * @export
 * @interface WithdrawalsApiGetSignableWithdrawalRequest
 */
export interface WithdrawalsApiGetSignableWithdrawalRequest {
    /**
     * get details of signable withdrawal
     * @type {GetSignableWithdrawalRequest}
     * @memberof WithdrawalsApiGetSignableWithdrawal
     */
    readonly getSignableWithdrawalRequest: GetSignableWithdrawalRequest
}

/**
 * Request parameters for getWithdrawal operation in WithdrawalsApi.
 * @export
 * @interface WithdrawalsApiGetWithdrawalRequest
 */
export interface WithdrawalsApiGetWithdrawalRequest {
    /**
     * Withdrawal ID
     * @type {string}
     * @memberof WithdrawalsApiGetWithdrawal
     */
    readonly id: string
}

/**
 * Request parameters for listWithdrawals operation in WithdrawalsApi.
 * @export
 * @interface WithdrawalsApiListWithdrawalsRequest
 */
export interface WithdrawalsApiListWithdrawalsRequest {
    /**
     * Withdrawal has been transferred to user\&#39;s Layer 1 wallet
     * @type {boolean}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly withdrawnToWallet?: boolean

    /**
     * Status of the on-chain batch confirmation for this withdrawal
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly rollupStatus?: string

    /**
     * Page size of the result
     * @type {number}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly orderBy?: string

    /**
     * Direction to sort (asc/desc)
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly direction?: string

    /**
     * Ethereum address of the user who submitted this withdrawal
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly user?: string

    /**
     * Status of this withdrawal
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly status?: string

    /**
     * Minimum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly minTimestamp?: string

    /**
     * Maximum timestamp for this deposit, in ISO 8601 UTC format. Example: \&#39;2022-05-27T00:10:22Z\&#39;
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly maxTimestamp?: string

    /**
     * Token type of the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly tokenType?: string

    /**
     * ERC721 Token ID of the minted asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly tokenId?: string

    /**
     * Internal IMX ID of the minted asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly assetId?: string

    /**
     * Token address of the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly tokenAddress?: string

    /**
     * Token name of the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly tokenName?: string

    /**
     * Min quantity for the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly minQuantity?: string

    /**
     * Max quantity for the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly maxQuantity?: string

    /**
     * JSON-encoded metadata filters for the withdrawn asset
     * @type {string}
     * @memberof WithdrawalsApiListWithdrawals
     */
    readonly metadata?: string
}

/**
 * WithdrawalsApi - object-oriented interface
 * @export
 * @class WithdrawalsApi
 * @extends {BaseAPI}
 */
export class WithdrawalsApi extends BaseAPI {
    /**
     * Creates a withdrawal
     * @summary Creates a withdrawal of a token
     * @param {WithdrawalsApiCreateWithdrawalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawalsApi
     */
    public createWithdrawal(requestParameters: WithdrawalsApiCreateWithdrawalRequest, options?: AxiosRequestConfig) {
        return WithdrawalsApiFp(this.configuration).createWithdrawal(requestParameters.xImxEthAddress, requestParameters.xImxEthSignature, requestParameters.createWithdrawalRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets details of a signable withdrawal
     * @summary Gets details of a signable withdrawal
     * @param {WithdrawalsApiGetSignableWithdrawalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawalsApi
     */
    public getSignableWithdrawal(requestParameters: WithdrawalsApiGetSignableWithdrawalRequest, options?: AxiosRequestConfig) {
        return WithdrawalsApiFp(this.configuration).getSignableWithdrawal(requestParameters.getSignableWithdrawalRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Gets details of withdrawal with the given ID
     * @summary Gets details of withdrawal with the given ID
     * @param {WithdrawalsApiGetWithdrawalRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawalsApi
     */
    public getWithdrawal(requestParameters: WithdrawalsApiGetWithdrawalRequest, options?: AxiosRequestConfig) {
        return WithdrawalsApiFp(this.configuration).getWithdrawal(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of withdrawals
     * @summary Get a list of withdrawals
     * @param {WithdrawalsApiListWithdrawalsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawalsApi
     */
    public listWithdrawals(requestParameters: WithdrawalsApiListWithdrawalsRequest = {}, options?: AxiosRequestConfig) {
        return WithdrawalsApiFp(this.configuration).listWithdrawals(requestParameters.withdrawnToWallet, requestParameters.rollupStatus, requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.user, requestParameters.status, requestParameters.minTimestamp, requestParameters.maxTimestamp, requestParameters.tokenType, requestParameters.tokenId, requestParameters.assetId, requestParameters.tokenAddress, requestParameters.tokenName, requestParameters.minQuantity, requestParameters.maxQuantity, requestParameters.metadata, options).then((request) => request(this.axios, this.basePath));
    }
}
