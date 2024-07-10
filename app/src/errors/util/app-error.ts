export abstract class AppError<
  TExtra = Record<string, any> | void,
> extends Error {
  protected httpStatusCode: number = 500
  protected isUserError: boolean = false
  public message: string = 'An error occurred'

  constructor(
    protected extra: TExtra,
    cause: Error | null = null,
    stack: string | null = null,
  ) {
    super()
    if (cause) {
      this.cause = cause
    }

    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}
