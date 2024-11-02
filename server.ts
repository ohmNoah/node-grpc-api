import express, { Request, Response } from "express";
import {
  credentials,
  loadPackageDefinition,
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import axios from "axios";
import path from "path";
import { ProtoGrpcType } from "./proto/service";
import { IDummyJson } from "./interface/dummy.interface";
import { GetGroupByResponse } from "./proto/servicepackage/GetGroupByResponse";
import { GetRequest } from "./proto/servicepackage/GetRequest";
import { groupByUsers } from "./utils/response.util";

const PROTO_PATH = path.join(__dirname, "proto/service.proto");
const GRPC_PORT = 50051;
const packageDefinition = loadSync(PROTO_PATH);
const serviceProto = loadPackageDefinition(
  packageDefinition
) as unknown as ProtoGrpcType;

const serviceGroupByPackage = serviceProto.servicepackage.GroupByService;

const getGroupByUsers = async (
  _request: ServerUnaryCall<GetRequest, GetGroupByResponse>,
  callback: sendUnaryData<GetGroupByResponse>
) => {
  try {
    const response = await axios.get<IDummyJson>("https://dummyjson.com/users");
    const newData = groupByUsers(response.data);
    callback(null, newData);
  } catch (error) {
    callback(error, null);
  }
};

(() => {
  const grpcServer = new Server();
  grpcServer.addService(serviceGroupByPackage.service, {
    GroupByUsers: getGroupByUsers,
  });

  grpcServer.bindAsync(
    `0.0.0.0:${GRPC_PORT}`,
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(`Failed to bind server: ${error.message}`);
        return;
      }
      console.log(`GRPC server running on port ${port}`);
    }
  );
})();

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const client = new serviceGroupByPackage(
    `localhost:${GRPC_PORT}`,
    credentials.createInsecure()
  );
  client.GroupByUsers({}, (error, response) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    return res.json(response);
  });
});

const HTTP_PORT = 3000;
app.listen(HTTP_PORT, () => {
  console.log(`HTTP server running on port http://localhost:${HTTP_PORT}`);
});

module.exports = app;