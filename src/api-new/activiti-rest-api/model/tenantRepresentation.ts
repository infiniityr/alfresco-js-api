/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';

export class TenantRepresentation {
    active?: boolean;
    created?: DateAlfresco;
    domain?: string;
    id?: number;
    lastUpdate?: DateAlfresco;
    logoId?: number;
    maxUsers?: number;
    name?: string;

    constructor(input?: any) {

        Object.assign(this, input);
        this.created = input.created ? new DateAlfresco(input.created) : undefined;
        this.lastUpdate = input.lastUpdate ? new DateAlfresco(input.lastUpdate) : undefined;
    }

}