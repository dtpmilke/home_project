import { NgModule, APP_INITIALIZER } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AppInitializer } from './app-initializer'
import { AuthService } from './services/auth/auth.service'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { CookieModule } from 'ngx-cookie'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CookieModule.forRoot()
  ],
  providers: [
    {
    provide: APP_INITIALIZER,
    useFactory: AppInitializer,
    multi: true,
    deps: [AuthService]
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
