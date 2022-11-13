export interface IApiResponse<T> {
  result: T;
  error: Record<string, unknown> | null | string;
  message: string | null;
  statusCode: number;
}
export interface IPagination {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}
export interface IResponseList<T> {
  data: Array<T>;
  pagination: IPagination;
}
export interface IResponseBoolean {
  result: boolean;
}
export interface IResponseError {
  result: null;
}
export type IApiResponseList<T> = IApiResponse<IResponseList<T>>;
export type IApiResponseBoolean = IApiResponse<boolean>;
export type IApiResponseError = IApiResponse<null>;
