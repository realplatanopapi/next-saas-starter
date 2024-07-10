import { AppError } from '@/errors/util/app-error'

export class TokenExpiredError extends AppError {
  isUserError = true
  httpStatusCode = 401
  message = 'Token expired'
}
