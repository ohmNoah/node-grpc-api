import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { GroupByServiceClient as _servicepackage_GroupByServiceClient, GroupByServiceDefinition as _servicepackage_GroupByServiceDefinition } from './servicepackage/GroupByService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  servicepackage: {
    AllGroupBy: MessageTypeDefinition
    GetGroupByResponse: MessageTypeDefinition
    GetRequest: MessageTypeDefinition
    GroupByService: SubtypeConstructor<typeof grpc.Client, _servicepackage_GroupByServiceClient> & { service: _servicepackage_GroupByServiceDefinition }
  }
}

