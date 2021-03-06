import { EntityType } from './DataTypes'

export interface IApiErrorInfo {
  ErrorMessage: string,
  ExceptionType: string,
  FullErrorMessage: string,
  ErrorCode: string | undefined
  InternalErrorMessage: string | undefined
}

export class ApiError extends Error {
  public readonly statusCode: number
  public readonly body: string
  public readonly errorInfo: IApiErrorInfo | undefined
  constructor(statusCode: number, body: string, message: string) {
    super(message)
    this.statusCode = statusCode
    this.body = body
    this.name = 'ApiError'
    if (body) {
      try {
        const json: IApiErrorInfo = JSON.parse(body)
        this.errorInfo = json
      } catch (error) {
        return
      }
    }
  }

  public static isApiError(error: Error): error is ApiError {
    // tslint:disable-next-line:no-any
    return !!(error as ApiError).statusCode
  }

  public static buildString(apiError: ApiError): string {
    let strToPrint: string = ''
    if (apiError) {
      if (apiError.statusCode) {
        strToPrint += apiError.statusCode + '\n'
      }
      if (apiError.errorInfo) {
        if (apiError.errorInfo.ErrorCode) {
          strToPrint += apiError.errorInfo.ErrorCode + '\n'
        }
        if (apiError.errorInfo.ErrorMessage) {
          strToPrint += apiError.errorInfo.ErrorMessage + '\n'
        }
        if (apiError.errorInfo.ExceptionType) {
          strToPrint += apiError.errorInfo.ExceptionType + '\n'
        }
        if (apiError.errorInfo.FullErrorMessage) {
          strToPrint += apiError.errorInfo.FullErrorMessage + '\n'
        }
        if (apiError.statusCode === 500) {
          strToPrint += 'Clave unica repetida, favor de poner una clave correcta'
        }
      }
    }
    return strToPrint
  }
}

export class RestApi<T> {

  private readonly entityType: EntityType
  constructor(entityType: EntityType) {
    this.entityType = entityType
  }

  public static getApiBaseUrl(): string {
    // The base URL will be overriden, so make sure we override this one as well
    const url = new URL(window.location.href)
    return url.protocol + '//' + url.host
  }

  public static async getErrorFromResponse(response: Response): Promise<Error> {
    const body = await response.text()
    const statusCode = response.status
    return new ApiError(statusCode, body, 'API request failed')
  }

  public async getEntities(): Promise<T[]> {
    const response = await fetch(`https://sana-en-casa-back.herokuapp.com/inventario/${this.entityType}/get`)
    if (response.status === 200) {
      return await response.json()
    }
    const error = await RestApi.getErrorFromResponse(response)
    throw error
  }

  public async addEntity(entity: T): Promise<T> {
    const response = await fetch(`https://sana-en-casa-back.herokuapp.com/inventario/${this.entityType}/post`, {
      method: 'POST',
      body: JSON.stringify(entity),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 201) {
      return await response.json()
    }
    const error = await RestApi.getErrorFromResponse(response)
    throw error
  }

  public async editEntity(entity: T, id: string): Promise<void> {
    const response = await fetch(`https://sana-en-casa-back.herokuapp.com/inventario/${this.entityType}/edit`, {
      method: 'PUT',
      body: JSON.stringify(entity),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 202) {
      return await response.json()
    }
    const error = await RestApi.getErrorFromResponse(response)
    throw error
  }

  public async deleteEntity(id: string): Promise<void> {
    const response = await fetch(`https://sana-en-casa-back.herokuapp.com/inventario/${this.entityType}/delete`, {
      method: 'DELETE',
      body: JSON.stringify({id: id}),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.status === 202) {
      return await response.json()
    }
    const error = await RestApi.getErrorFromResponse(response)
    throw error
  }
}
