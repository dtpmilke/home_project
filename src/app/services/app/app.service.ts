import { Injectable } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router'
import { GetTokenResponseInterface } from '../../models/get-token-response.interface'

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  init(): void {
    if (this.auth.getToken()) {
      this.initApp()
    } else {
      this.getToken()
    }
  }

  private initApp(): void {
    if (this.auth.isAuth()) {
      this.router.navigate([''])
    } else {
      this.router.navigate(['/login'])
    }
  }

  private getToken(): void {
    this.auth.getNewToken().subscribe(
      (data: GetTokenResponseInterface) => {
        this.initApp()
      }
    )
  }
}
