import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { AttendanceDTO } from "./attendance.dto";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class AttendanceGateway implements OnGatewayConnection{

    @WebSocketServer() wss: Server
   
    handleConnection(client) {
        client.emit('connection', 'Successfully connected to server')
    }
}