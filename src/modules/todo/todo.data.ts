/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */
import { AsyncResult } from '@msdyn365-commerce/retail-proxy';
import { Card } from '../../types';

export interface ITodoData {
    actionResponse: { text: string };
    getCards: AsyncResult<{ cards: Card[] }>;
    postCard: AsyncResult<{ card: Card }>;
}
