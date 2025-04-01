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
 * @interface Player
 */
export interface Player {
    /**
     * 
     * @type {string}
     * @memberof Player
     */
    name: string;
}

/**
 * Check if a given object implements the Player interface.
 */
export function instanceOfPlayer(value: object): boolean {
    if (!('name' in value)) return false;
    return true;
}

export function PlayerFromJSON(json: any): Player {
    return PlayerFromJSONTyped(json, false);
}

export function PlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Player {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function PlayerToJSON(value?: Player | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
    };
}

