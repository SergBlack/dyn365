/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

import * as React from 'react';

import { ITodoViewProps } from './todo';
import { Card } from './components/Card';
import { Form } from './components/Form';

export default (props: ITodoViewProps) => {
    return (
        <>
            <div className='row'>
                <h1>Config Value: {props.config.showText}</h1>
            </div>
            <div className='row'>
                <h2>Resource Value: {props.resources.resourceKey}</h2>
            </div>
            <div className='row'>
                <Form {...props} />
            </div>

            <div className='row'>
                {props.data.getCards.result?.cards.map(({ id, title, text, src }) => (
                    <Card key={id} title={title} text={text} src={src} />
                ))}
            </div>
        </>
    );
};
