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
/**
 * 
 * @export
 * @interface GameChangeNameRequest
 */
export interface GameChangeNameRequest {
    /**
     * 
     * @type {string}
     * @memberof GameChangeNameRequest
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GameChangeNameRequest
     */
    type: string;
}

/**
 * Check if a given object implements the GameChangeNameRequest interface.
 */
export function instanceOfGameChangeNameRequest(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function GameChangeNameRequestFromJSON(json: any): GameChangeNameRequest {
    return GameChangeNameRequestFromJSONTyped(json, false);
}

export function GameChangeNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameChangeNameRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function GameChangeNameRequestToJSON(value?: GameChangeNameRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': value['type'],
    };
}

