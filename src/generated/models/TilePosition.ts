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
 * @interface TilePosition
 */
export interface TilePosition {
    /**
     * 
     * @type {number}
     * @memberof TilePosition
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof TilePosition
     */
    y: number;
}

/**
 * Check if a given object implements the TilePosition interface.
 */
export function instanceOfTilePosition(value: object): boolean {
    if (!('x' in value)) return false;
    if (!('y' in value)) return false;
    return true;
}

export function TilePositionFromJSON(json: any): TilePosition {
    return TilePositionFromJSONTyped(json, false);
}

export function TilePositionFromJSONTyped(json: any, ignoreDiscriminator: boolean): TilePosition {
    if (json == null) {
        return json;
    }
    return {
        
        'x': json['x'],
        'y': json['y'],
    };
}

export function TilePositionToJSON(value?: TilePosition | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'x': value['x'],
        'y': value['y'],
    };
}

