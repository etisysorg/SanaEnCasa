import sweetalert2, { SweetAlertResult, SweetAlertType } from 'sweetalert2'
import { ApiError } from './RestApi'

const dialogDelayInMs = 1100

export class DialogMessages {
  public static async showErrorMessage(error: Error): Promise<void> {
    if (ApiError.isApiError(error)) {
      if (error.errorInfo && error.errorInfo.ErrorCode === '-2146232060' && error.errorInfo.InternalErrorMessage) {
        if (error.errorInfo.InternalErrorMessage.indexOf('duplicate key') !== -1) {
          await this.sameKeyDialog()
          return
        }
        if (error.errorInfo.InternalErrorMessage.indexOf('FOREIGN KEY') !== -1) {
          await this.keyNotExist()
          return
        }
      }
      if (error.statusCode === 404) {
        await this.notFoundError()
        return
      }
      await sweetalert2.fire({
        type: 'error',
        title: 'Error de Api',
        text: ApiError.buildString(error),
      })
      return
    }
    await sweetalert2.fire({
      type: 'error',
      title: 'Error inesperado',
      showConfirmButton: false,
      timer: dialogDelayInMs,
    })
  }

  public static async areYouSureDeleteDialog(): Promise<SweetAlertResult> {
    return await sweetalert2.fire({
      title: 'Estas Seguro?',
      text: 'No vas a poder revertir esto',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Si, borrar!',
    })
  }

  public static async simpleNotificationDialog(title: string, typeIcon: SweetAlertType, text: string) {
    await sweetalert2.fire({
      title: title,
      type: typeIcon,
      text: text,
      showConfirmButton: false,
      timer: dialogDelayInMs,
    })
  }

  private static async sameKeyDialog() {
    await sweetalert2.fire({
      type: 'error',
      title: 'Error de Api',
      text: 'Esta clave ya existe',
    })
  }

  private static async keyNotExist() {
    await sweetalert2.fire({
      type: 'error',
      title: 'Error de Api',
      text: 'La clave de algun campo que especificaste no existe',
    })
  }

  private static async notFoundError() {
    await sweetalert2.fire({
      type: 'error',
      title: 'Error de Api',
      text: 'Objeto no encontrado (Probablemente alguien lo borro/edito en otro dispositivo)',
    })
  }
}