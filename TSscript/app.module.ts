import { NgModule, ModuleWithProviders }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
 import { routing } from './app.routing';
 import { HttpModule } from '@angular/http'; 
 import { FormsModule }    from '@angular/forms';
 import { AuthGuard } from './Auth_Guard/index';
 import { LayoutComponent }   from './Dashboard/layout.component';
 import { LoginComponent } from './Login/index';
 import { DashboardModule} from './dashboard.module';
@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule, DashboardModule],
    declarations: [AppComponent, LayoutComponent, LoginComponent], 
    bootstrap: [AppComponent],
    providers: [AuthGuard]
})

export class AppModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AppModule,
            providers: [
            ]
        };
    }
}