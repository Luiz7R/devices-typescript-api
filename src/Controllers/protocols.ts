export interface HttpResponse<T> {
  statusCode: HttpStatusCode;
  body: T;
}

export interface HttpRequest<B> {
  params?: any;
  headers?: any;
  body?: B;
}

export enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  BAD_REQUESTS = 400,
  SERVER_ERROR = 500,
}

export interface IController {
  handleRequisition(
    httpRequest: HttpRequest<unknown>
  ): Promise<HttpResponse<unknown>>;
}
