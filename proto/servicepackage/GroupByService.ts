// Original file: proto/service.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GetGroupByResponse as _servicepackage_GetGroupByResponse, GetGroupByResponse__Output as _servicepackage_GetGroupByResponse__Output } from '../servicepackage/GetGroupByResponse';
import type { GetRequest as _servicepackage_GetRequest, GetRequest__Output as _servicepackage_GetRequest__Output } from '../servicepackage/GetRequest';

export interface GroupByServiceClient extends grpc.Client {
  GroupByUsers(argument: _servicepackage_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  GroupByUsers(argument: _servicepackage_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  GroupByUsers(argument: _servicepackage_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  GroupByUsers(argument: _servicepackage_GetRequest, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  groupByUsers(argument: _servicepackage_GetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  groupByUsers(argument: _servicepackage_GetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  groupByUsers(argument: _servicepackage_GetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  groupByUsers(argument: _servicepackage_GetRequest, callback: grpc.requestCallback<_servicepackage_GetGroupByResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface GroupByServiceHandlers extends grpc.UntypedServiceImplementation {
  GroupByUsers: grpc.handleUnaryCall<_servicepackage_GetRequest__Output, _servicepackage_GetGroupByResponse>;
  
}

export interface GroupByServiceDefinition extends grpc.ServiceDefinition {
  GroupByUsers: MethodDefinition<_servicepackage_GetRequest, _servicepackage_GetGroupByResponse, _servicepackage_GetRequest__Output, _servicepackage_GetGroupByResponse__Output>
}
