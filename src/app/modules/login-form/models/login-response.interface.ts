import { PayloadInterface } from '../../../models/payload.interface'

export interface LoginResponseInterface extends PayloadInterface {
  payload: {
    name: string,
    surname: string,
  },
}
