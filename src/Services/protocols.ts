export interface MQTTMessage<B> {
  params?: any;
  body?: B;
}
