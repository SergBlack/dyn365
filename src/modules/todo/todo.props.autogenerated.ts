/**
 * Copyright (c) Microsoft Corporation
 * All rights reserved. See License.txt in the project root for license information.
 * ITodo contentModule Interface Properties
 * THIS FILE IS AUTO-GENERATED - MANUAL MODIFICATIONS WILL BE LOST
 */

import * as Msdyn365 from '@msdyn365-commerce/core';

export interface ITodoConfig extends Msdyn365.IModuleConfig {
    showText?: string;
}

export interface ITodoResources {
    resourceKey: string;
}

export interface ITodoProps<T> extends Msdyn365.IModule<T> {
    resources: ITodoResources;
    config: ITodoConfig;
}
