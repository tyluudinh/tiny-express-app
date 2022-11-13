export interface IErrorValidation {
  details?: Map<string, { details?: Array<{ message: string }> }>;
  message?: string;
  status?: number;
}
