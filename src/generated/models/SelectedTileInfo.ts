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
import type { TilePosition } from './TilePosition';
import {
    TilePositionFromJSON,
    TilePositionFromJSONTyped,
    TilePositionToJSON,
} from './TilePosition';

/**
 * 
 * @export
 * @interface SelectedTileInfo
 */
export interface SelectedTileInfo {
    /**
     * 
     * @type {TilePosition}
     * @memberof SelectedTileInfo
     */
    selectedTile: TilePosition;
    /**
     * 
     * @type {Array<TilePosition>}
     * @memberof SelectedTileInfo
     */
    allowedMoves?: Array<TilePosition>;
}

/**
 * Check if a given object implements the SelectedTileInfo interface.
 */
export function instanceOfSelectedTileInfo(value: object): boolean {
    if (!('selectedTile' in value)) return false;
    return true;
}

export function SelectedTileInfoFromJSON(json: any): SelectedTileInfo {
    return SelectedTileInfoFromJSONTyped(json, false);
}

export function SelectedTileInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedTileInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'selectedTile': TilePositionFromJSON(json['selectedTile']),
        'allowedMoves': json['allowedMoves'] == null ? undefined : ((json['allowedMoves'] as Array<any>).map(TilePositionFromJSON)),
    };
}

export function SelectedTileInfoToJSON(value?: SelectedTileInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'selectedTile': TilePositionToJSON(value['selectedTile']),
        'allowedMoves': value['allowedMoves'] == null ? undefined : ((value['allowedMoves'] as Array<any>).map(TilePositionToJSON)),
    };
}

