export interface HttpResponse {
  statusCode: number
  body: any
  errorInfo?: any
  headers?: any
}

export interface HttpRequest {
  body?: any
  headers?: any
}

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>
}