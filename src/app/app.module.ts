import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemFormComponent } from './AddItemForm/AddItemForm.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BudgetItemListComponent } from './BudgetItemList/BudgetItemList.component';
import { BudgetItemCardComponent } from './BudgetItemList/budgetItemCard/budgetItemCard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
