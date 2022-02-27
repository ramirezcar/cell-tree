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
  public levels:Array<any> = []
  public normalized_levels:Array<any> = []
  
  constructor(private CellService: CellService) {
    this.CellService.getCells().subscribe((resp:any) => {
      this.cells = resp.data
      // Extraer Niveles
      this.levels = [...new Set(this.cells.map(e => parseInt(e.Parent)))];
      // Array de niveles unicos con sus respectivas celulas
      this.levels.forEach(level => {
        let level_arr:Array<any> = []
        level_arr[level] = this.cells.filter(function (e) {
          if(e.Parent == level.key) 
            return e
        })
        // this.normalized_levels.push(level)
      })
      // Ordenar Array por Niveles de forma ascendente
      this.levels.sort((a:any, b:any) => {
        return a - b
      })
      
      console.log('levels', this.cells)
    })
  }
  
  getCellsByLevel(level:any) {
    let filtered = this.cells.filter(function(cell){
      return cell.Parent == level;
    });
    return filtered
  }

  counter(i: number) {
    return new Array(i);
  }
  
  ngOnInit(): void {
  }
}
