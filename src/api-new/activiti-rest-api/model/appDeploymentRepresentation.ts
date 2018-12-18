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

import { AppDefinitionRepresentation } from './appDefinitionRepresentation';
import { DateAlfresco } from '../../content-rest-api/model/dateAlfresco';
import { LightUserRepresentation } from './lightUserRepresentation';

export class AppDeploymentRepresentation {
    appDefinition?: AppDefinitionRepresentation;
    created?: DateAlfresco;
    createdBy?: LightUserRepresentation;
    deploymentId?: string;
    dmnDeploymentId?: number;
    id?: number;

    constructor(input?: any) {

        Object.assign(this, input);
        this.appDefinition = input.appDefinition ? new AppDefinitionRepresentation(input.appDefinition) : undefined;
        this.created = input.created ? new DateAlfresco(input.created) : undefined;
        this.createdBy = input.createdBy ? new LightUserRepresentation(input.createdBy) : undefined;
    }

}