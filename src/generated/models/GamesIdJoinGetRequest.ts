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
import type { PlayerEnum } from './PlayerEnum';
import {
    PlayerEnumFromJSON,
    PlayerEnumFromJSONTyped,
    PlayerEnumToJSON,
} from './PlayerEnum';

/**
 * 
 * @export
 * @interface GamesIdJoinGetRequest
 */
export interface GamesIdJoinGetRequest {
    /**
     * 
     * @type {PlayerEnum}
     * @memberof GamesIdJoinGetRequest
     */
    player?: PlayerEnum;
}

/**
 * Check if a given object implements the GamesIdJoinGetRequest interface.
 */
export function instanceOfGamesIdJoinGetRequest(value: object): boolean {
    return true;
}

export function GamesIdJoinGetRequestFromJSON(json: any): GamesIdJoinGetRequest {
    return GamesIdJoinGetRequestFromJSONTyped(json, false);
}

export function GamesIdJoinGetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GamesIdJoinGetRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'player': json['player'] == null ? undefined : PlayerEnumFromJSON(json['player']),
    };
}

export function GamesIdJoinGetRequestToJSON(value?: GamesIdJoinGetRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'player': PlayerEnumToJSON(value['player']),
    };
}

