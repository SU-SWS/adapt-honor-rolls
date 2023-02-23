// Helper types to navigate RTK Query results
export type ResultDataType<T = any> = { data: T };
export type ResultErrorType<E = any> = { error: E };
export type ResultType<T = any, E = any> = ResultDataType<T> | ResultErrorType<E>;
export const isResultError = <R extends ResultType>(
  result: R
): result is R & { error: unknown } => result && 'error' in result;
export const isResultData = <R extends ResultType>(
  result: R
): result is R & { data: unknown } => result && 'data' in result;
