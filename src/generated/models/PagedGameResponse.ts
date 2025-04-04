/* tslint:disable */
/* eslint-disable */
/**
 * Hnefatafl API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Game } from './Game';
import {
    GameFromJSON,
    GameFromJSONTyped,
    GameToJSON,
} from './Game';

/**
 * 
 * @export
 * @interface PagedGameResponse
 */
export interface PagedGameResponse {
    /**
     * 
     * @type {Array<Game>}
     * @memberof PagedGameResponse
     */
    items: Array<Game>;
    /**
     * 
     * @type {number}
     * @memberof PagedGameResponse
     */
    page: number;
    /**
     * 
     * @type {number}
     * @memberof PagedGameResponse
     */
    size: number;
    /**
     * 
     * @type {number}
     * @memberof PagedGameResponse
     */
    total: number;
}

/**
 * Check if a given object implements the PagedGameResponse interface.
 */
export function instanceOfPagedGameResponse(value: object): boolean {
    if (!('items' in value)) return false;
    if (!('page' in value)) return false;
    if (!('size' in value)) return false;
    if (!('total' in value)) return false;
    return true;
}

export function PagedGameResponseFromJSON(json: any): PagedGameResponse {
    return PagedGameResponseFromJSONTyped(json, false);
}

export function PagedGameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PagedGameResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(GameFromJSON)),
        'page': json['page'],
        'size': json['size'],
        'total': json['total'],
    };
}

export function PagedGameResponseToJSON(value?: PagedGameResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'items': ((value['items'] as Array<any>).map(GameToJSON)),
        'page': value['page'],
        'size': value['size'],
        'total': value['total'],
    };
}

