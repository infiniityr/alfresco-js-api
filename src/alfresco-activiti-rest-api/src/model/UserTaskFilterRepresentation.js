(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaskFilterRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskFilterRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserTaskFilterRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.TaskFilterRepresentation);
  }
}(this, function(ApiClient, TaskFilterRepresentation) {
  'use strict';




  /**
   * The UserTaskFilterRepresentation model module.
   * @module model/UserTaskFilterRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>UserTaskFilterRepresentation</code>.
   * @alias module:model/UserTaskFilterRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>UserTaskFilterRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserTaskFilterRepresentation} obj Optional instance to populate.
   * @return {module:model/UserTaskFilterRepresentation} The populated <code>UserTaskFilterRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'Integer');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = TaskFilterRepresentation.constructFromObject(data['filter']);
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recent')) {
        obj['recent'] = ApiClient.convertToType(data['recent'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {module:model/TaskFilterRepresentation} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} recent
   */
  exports.prototype['recent'] = undefined;




  return exports;
}));


