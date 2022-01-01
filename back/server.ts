// lib/server.ts
import App from "./src/App";
import grpc from "grpc";
import {roomManager} from "./src/RoomManager";
import {IRoomManagerServer, RoomManagerService} from "./src/Messages/generated/messages_grpc_pb";
import {HTTP_HOST, HTTP_PORT, GRPC_HOST, GRPC_PORT} from "./src/Enum/EnvironmentVariable";

App.listen(HTTP_HOST, HTTP_PORT, () => log.info(`WorkAdventure HTTP API starting on port %d!`, HTTP_PORT));

const server = new grpc.Server();
server.addService<IRoomManagerServer>(RoomManagerService, roomManager);

server.bind(GRPC_HOST+':'+GRPC_PORT, grpc.ServerCredentials.createInsecure());
server.start();
console.log('WorkAdventure HTTP/2 API starting on port %d!', GRPC_PORT);
