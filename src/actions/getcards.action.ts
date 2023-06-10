/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as Msdyn365 from '@msdyn365-commerce/core';
import { Card } from '../types';

export const cardData: Card[] = [
    { id: '0', title: 'First card', text: 'Text for the first card', src: 'https://picsum.photos/286/180' },
    { id: '1', title: 'Second card', text: 'Text for the second card', src: 'https://picsum.photos/286/180' }
];

/**
 * Getcards Input Action
 */
export class GetcardsInput implements Msdyn365.IActionInput {
    // TODO: Construct the input needed to run the action
    constructor() {}

    // TODO: Determine if the results of this get action should cache the results and if so provide
    // a cache object type and an appropriate cache key
    public getCacheKey = () => `TODO`;
    public getCacheObjectType = () => 'TODO';
    public dataCacheType = (): Msdyn365.CacheType => 'application';
}

// TODO: Create a data model here or import one to capture the response of the action
export interface IGetcardsData {
    cards: Card[];
}

/**
 * TODO: Use this function to create the input required to make the action call
 */
const createInput = (args: Msdyn365.ICreateActionContext): Msdyn365.IActionInput => {
    return new GetcardsInput();
};

/**
 * TODO: Use this function to call your action and process the results as needed
 */
async function action(input: GetcardsInput, ctx: Msdyn365.IActionContext): Promise<IGetcardsData> {
    // const apiSettings = Msdyn365.msdyn365Commerce.apiSettings;

    // TODO: Uncomment the below line to get the value from a service
    // const response = await Msdyn365.sendRequest<IGetcardsData[]>('/get/example/id/1', 'get');
    return { cards: cardData };
}

export default Msdyn365.createObservableDataAction({
    action: <Msdyn365.IAction<IGetcardsData>>action,
    // TODO: Give your data action a unique id
    id: 'Getcards',
    input: createInput
    // TODO: Uncomment the below line if this is a meant to be a batched data action
    // isBatched: true
});
