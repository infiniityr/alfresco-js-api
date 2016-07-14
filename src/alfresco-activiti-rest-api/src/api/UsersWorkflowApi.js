(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UsersWorkflowApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, ResultListDataRepresentation) {
  'use strict';

  /**
   * UsersWorkflow service.
   * @module api/UsersWorkflowApi
   * @version 1.4.0
   */

  /**
   * Constructs a new UsersWorkflowApi. 
   * @alias module:api/UsersWorkflowApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUsersUsingGET2 operation.
     * @callback module:api/UsersWorkflowApi~getUsersUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     * A common use case is that a user wants to select another user (eg. when assigning a task) or group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.email email
     * @param {String} opts.externalId externalId
     * @param {String} opts.externalIdCaseInsensitive externalIdCaseInsensitive
     * @param {String} opts.excludeTaskId excludeTaskId
     * @param {String} opts.excludeProcessId excludeProcessId
     * @param {Integer} opts.groupId groupId
     * @param {Integer} opts.tenantId tenantId
     * @param {module:api/UsersWorkflowApi~getUsersUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUsersUsingGET2 = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'email': opts['email'],
        'externalId': opts['externalId'],
        'externalIdCaseInsensitive': opts['externalIdCaseInsensitive'],
        'excludeTaskId': opts['excludeTaskId'],
        'excludeProcessId': opts['excludeProcessId'],
        'groupId': opts['groupId'],
        'tenantId': opts['tenantId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
