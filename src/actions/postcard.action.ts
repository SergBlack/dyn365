/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

/**
 * Postcard Input Action
 */
export class PostcardInput implements Msdyn365.IActionInput {
    public text: string;
    public title: string;
    // TODO: Construct the input needed to run the action
    constructor(text: string, title: string) {
        this.text = text;
        this.title = title;
    }

    // TODO: Determine if the results of this get action should cache the results and if so provide
    // a cache object type and an appropriate cache key
    public getCacheKey = () => `${this.text}-${this.title}`;
    public getCacheObjectType = () => 'Card';
    public dataCacheType = (): Msdyn365.CacheType => 'application';
}

// TODO: Create a data model here or import one to capture the response of the action
export interface IPostcardData {
    card: {
        id: string;
        title: string;
        text: string;
    };
}

/**
 * TODO: Use this function to create the input required to make the action call
 */
const createInput = (args: Msdyn365.ICreateActionContext<Msdyn365.IGeneric<Msdyn365.IAny>>): Msdyn365.IActionInput => {
    return new PostcardInput(args.config?.title, args.config?.text);
};

/**
 * TODO: Use this function to call your action and process the results as needed
 */
async function action(input: PostcardInput, ctx: Msdyn365.IActionContext): Promise<IPostcardData> {
    // const apiSettings = Msdyn365.msdyn365Commerce.apiSettings;

    // TODO: Uncomment the below line to get the value from a service
    // const response = await Msdyn365.sendRequest<IPostcardData[]>('/get/example/id/1', 'get');
    const newCard = {
        id: Math.random().toString(),
        title: input.title,
        text: input.text,
        src: 'https://picsum.photos/286/180'
    };

    return {
        card: newCard
    };
}

export default Msdyn365.createObservableDataAction({
    action: <Msdyn365.IAction<IPostcardData>>action,
    // TODO: Give your data action a unique id
    id: 'Postcard',
    input: createInput
    // TODO: Uncomment the below line if this is a meant to be a batched data action
    // isBatched: true
});
