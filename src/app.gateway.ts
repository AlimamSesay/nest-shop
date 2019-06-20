import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
// @WebSocketGateway(4001, { transport: ['websocket'] })
@WebSocketGateway(3001)
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss;

  private logger = new Logger('AppGateway');

  handleConnection(client) {
    this.logger.log('New client connected');
    client.emit('ping', 'ping');
  }

  handleDisconnect(client) {
    this.logger.log('Client disconnected');
  }
}
