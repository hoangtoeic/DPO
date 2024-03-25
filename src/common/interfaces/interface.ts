export interface MessageInterface {
  messageType: string;
  body: string;
}

export interface SQSProcessorInterface {
  getMessageType(): string;
  process(msg: MessageInterface): Promise<void>;
}

export interface SQSPublisherInterface<T> {
  sendMessage(payload: T, delay: number): Promise<void>;
}

export abstract class ProcessorClass {
  abstract getMessageType(): string;
  abstract process(msg: MessageInterface): Promise<void>;
}
