import { Component, OnInit } from '@angular/core';
import { CellService } from '../services/cell.service';
  
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

export class TreeComponent implements OnInit {
  title = 'client'
  public cells: Array<any> = []
  public parent_cells:Array<any> = []
  public normalized_levels:Array<any> = []
  
  constructor(private CellService: CellService) {
    this.CellService.getCells().subscribe((resp:any) => {
      this.cells = resp.data
      // Extraer Niveles
      this.parent_cells = [...new Set(this.cells.map(e => parseInt(e.Parent)))];
      // Ordenar Array por Niveles de forma ascendente
      this.parent_cells.sort((a:any, b:any) => {
        return a - b
      })
      
      console.log('levels', this.cells)
    })
  }
  
  getChilden(parent_level:any) {
    let filtered = this.cells.filter(function(cell){
      return cell.Parent == parent_level;
    });
    return filtered
  }

  counter(i: number) {
    return new Array(i);
  }
  
  ngOnInit(): void {
  }
}
