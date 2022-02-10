import { AuthService } from './services/auth/auth.service'

export const AppInitializer = (auth: AuthService) => () => {
  return new Promise((resolve: any) => {
    auth.refreshToken().subscribe().add(resolve)
  })
}
