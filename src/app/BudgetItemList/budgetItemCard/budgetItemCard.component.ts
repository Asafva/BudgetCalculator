import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budgetItemCard',
  templateUrl: './budgetItemCard.component.html',
  styleUrls: ['./budgetItemCard.component.css']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() isIncome: boolean = false;;


  constructor() { }

  ngOnInit() {
  }

}
