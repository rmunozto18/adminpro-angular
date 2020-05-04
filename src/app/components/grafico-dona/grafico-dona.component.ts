import { Component, OnInit, Input } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';


@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: []
})
export class GraficoDonaComponent implements OnInit {

   // Doughnut
   @Input('labels') public doughnutChartLabels: Label[];
   @Input('data') public doughnutChartData: MultiDataSet [];
   @Input('type') public doughnutChartType: ChartType;
   //@Input('title') public title:string;

  constructor() { }

  ngOnInit() {
  }

}
