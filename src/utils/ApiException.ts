import { AxiosError } from 'axios';
import { NextApiResponse } from 'next';

export const exceptionMessages: Record<number | string, string> = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  408: 'Request Timeout',
  409: 'Conflict',
  423: 'Locked',
  500: 'Internal Server Error',
};

export interface ExceptionConfig {
  status?: number;
  data?: any;
}

export const ApiException = (
  res: NextApiResponse,
  { status = 500, data }: ExceptionConfig = {}
) => res.status(status).json(data || exceptionMessages[status]);

// Convenience Exception wrappers
export const BadRequestException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 400, data });
export const UnauthorizedException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 401, data });
export const ForbiddenException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 403, data });
export const NotFoundException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 404, data });
export const RequestTimeout = (res: NextApiResponse, data?: any) => ApiException(res, { status: 408, data });
export const ConflictException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 409, data });
export const LockedException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 423, data });
export const InternalServerException = (res: NextApiResponse, data?: any) => ApiException(res, { status: 500, data });

// NOTE: Expand exception types as needed

// Pass along the error code while obfuscating the error data
/**
 * @deprecated Please use the {@link ExceptionHandler} moving forward
 */
export const AxiosException = (res: NextApiResponse, err: AxiosError) => {
  if (err.isAxiosError && err.response) {
    switch (err.response.status) {
      case 404:
        return NotFoundException(res);
      default:
    }
  }

  return ApiException(res, {
    status: 500,
    data: 'Unhandled Excpetion',
  });
};

export interface ExceptionHandlerOptions {
  /**
   * Whether to use the default status code message or allow the parsed error data to pass through
   */
  defaultMessage?: boolean;
}

/**
 * Catch-all exception handler for backend error responses.
 * Automatically responds appropriately so do not execute any code after calling.
 * @param res Connect response object
 * @param err The error to parse and respond for
 * @param options {@link ExceptionHandlerOptions}
 */
export const ExceptionHandler = (
  res: NextApiResponse,
  err: any,
  { defaultMessage = false }: ExceptionHandlerOptions = {}
) => {
  const status = parseInt(err?.response?.status || err?.status, 10) || 500;
  const data = defaultMessage
    ? exceptionMessages[status]
    : err?.response?.data?.detail || err?.response?.data || err?.data;

  return ApiException(res, { status, data });
};
