# .RecordCategory

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **string** |  | [default to null]
**parentId** | **string** |  | [default to null]
**name** | **string** | The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.
 | [default to null]
**nodeType** | **string** |  | [default to null]
**hasRetentionSchedule** | **boolean** | Indicates if the record category has a retention schedule defined | [optional] [default to null]
**modifiedAt** | [**DateAlfresco**](DateAlfresco.md) |  | [default to null]
**modifiedByUser** | [**UserInfo**](UserInfo.md) |  | [default to null]
**createdAt** | [**DateAlfresco**](DateAlfresco.md) |  | [default to null]
**createdByUser** | [**UserInfo**](UserInfo.md) |  | [default to null]
**aspectNames** | **string[]** |  | [optional] [default to null]
**properties** | **any** |  | [optional] [default to null]
**allowableOperations** | **string[]** |  | [optional] [default to null]
**path** | [**PathInfo**](PathInfo.md) |  | [optional] [default to null]

