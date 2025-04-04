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


import * as runtime from '../runtime';
import type {
  Board,
  Game,
  GameChangeNameRequest,
  GameCreateRequest,
  PagedGameResponse,
  SelectedTileInfo,
  TilePosition,
} from '../models/index';
import {
    BoardFromJSON,
    BoardToJSON,
    GameFromJSON,
    GameToJSON,
    GameChangeNameRequestFromJSON,
    GameChangeNameRequestToJSON,
    GameCreateRequestFromJSON,
    GameCreateRequestToJSON,
    PagedGameResponseFromJSON,
    PagedGameResponseToJSON,
    SelectedTileInfoFromJSON,
    SelectedTileInfoToJSON,
    TilePositionFromJSON,
    TilePositionToJSON,
} from '../models/index';

export interface GamesGetRequest {
    page?: number;
    size?: number;
}

export interface GamesIdBoardGetRequest {
    id: string;
}

export interface GamesIdBoardMoveTilePostRequest {
    id: string;
    tilePosition: TilePosition;
}

export interface GamesIdBoardSelectTilePostRequest {
    id: string;
    tilePosition: TilePosition;
}

export interface GamesIdBoardSelectedTileGetRequest {
    id: string;
}

export interface GamesIdGetRequest {
    id: string;
}

export interface GamesPatchRequest {
    gameChangeNameRequest: GameChangeNameRequest;
}

export interface GamesPostRequest {
    gameCreateRequest: GameCreateRequest;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Get paginated list of games
     */
    async gamesGetRaw(requestParameters: GamesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PagedGameResponse>> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['size'] != null) {
            queryParameters['size'] = requestParameters['size'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PagedGameResponseFromJSON(jsonValue));
    }

    /**
     * Get paginated list of games
     */
    async gamesGet(requestParameters: GamesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PagedGameResponse> {
        const response = await this.gamesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get game board
     */
    async gamesIdBoardGetRaw(requestParameters: GamesIdBoardGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Board>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gamesIdBoardGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/{id}/board`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BoardFromJSON(jsonValue));
    }

    /**
     * Get game board
     */
    async gamesIdBoardGet(requestParameters: GamesIdBoardGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Board> {
        const response = await this.gamesIdBoardGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Move selected tile to new position
     */
    async gamesIdBoardMoveTilePostRaw(requestParameters: GamesIdBoardMoveTilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gamesIdBoardMoveTilePost().'
            );
        }

        if (requestParameters['tilePosition'] == null) {
            throw new runtime.RequiredError(
                'tilePosition',
                'Required parameter "tilePosition" was null or undefined when calling gamesIdBoardMoveTilePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/games/{id}/board/move-tile`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TilePositionToJSON(requestParameters['tilePosition']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Move selected tile to new position
     */
    async gamesIdBoardMoveTilePost(requestParameters: GamesIdBoardMoveTilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gamesIdBoardMoveTilePostRaw(requestParameters, initOverrides);
    }

    /**
     * Select a tile
     */
    async gamesIdBoardSelectTilePostRaw(requestParameters: GamesIdBoardSelectTilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gamesIdBoardSelectTilePost().'
            );
        }

        if (requestParameters['tilePosition'] == null) {
            throw new runtime.RequiredError(
                'tilePosition',
                'Required parameter "tilePosition" was null or undefined when calling gamesIdBoardSelectTilePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/games/{id}/board/select-tile`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TilePositionToJSON(requestParameters['tilePosition']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Select a tile
     */
    async gamesIdBoardSelectTilePost(requestParameters: GamesIdBoardSelectTilePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gamesIdBoardSelectTilePostRaw(requestParameters, initOverrides);
    }

    /**
     * Get selected tile and allowed moves
     */
    async gamesIdBoardSelectedTileGetRaw(requestParameters: GamesIdBoardSelectedTileGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SelectedTileInfo>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gamesIdBoardSelectedTileGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/{id}/board/selected-tile`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelectedTileInfoFromJSON(jsonValue));
    }

    /**
     * Get selected tile and allowed moves
     */
    async gamesIdBoardSelectedTileGet(requestParameters: GamesIdBoardSelectedTileGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SelectedTileInfo> {
        const response = await this.gamesIdBoardSelectedTileGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get game by ID
     */
    async gamesIdGetRaw(requestParameters: GamesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Game>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling gamesIdGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/games/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameFromJSON(jsonValue));
    }

    /**
     * Get game by ID
     */
    async gamesIdGet(requestParameters: GamesIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Game> {
        const response = await this.gamesIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Rename game
     */
    async gamesPatchRaw(requestParameters: GamesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Game>> {
        if (requestParameters['gameChangeNameRequest'] == null) {
            throw new runtime.RequiredError(
                'gameChangeNameRequest',
                'Required parameter "gameChangeNameRequest" was null or undefined when calling gamesPatch().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/games`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameChangeNameRequestToJSON(requestParameters['gameChangeNameRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameFromJSON(jsonValue));
    }

    /**
     * Rename game
     */
    async gamesPatch(requestParameters: GamesPatchRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Game> {
        const response = await this.gamesPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Start a new game
     */
    async gamesPostRaw(requestParameters: GamesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Game>> {
        if (requestParameters['gameCreateRequest'] == null) {
            throw new runtime.RequiredError(
                'gameCreateRequest',
                'Required parameter "gameCreateRequest" was null or undefined when calling gamesPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/games`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCreateRequestToJSON(requestParameters['gameCreateRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameFromJSON(jsonValue));
    }

    /**
     * Start a new game
     */
    async gamesPost(requestParameters: GamesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Game> {
        const response = await this.gamesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
