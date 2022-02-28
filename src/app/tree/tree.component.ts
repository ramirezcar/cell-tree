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
  public node:number = 0
  
  constructor(private CellService: CellService) {
    this.CellService.getCells().subscribe((resp:any) => {
      this.cells = resp.data
      // Extraer Niveles
      this.parent_cells = [...new Set(this.cells.map(e => parseInt(e.Parent)))];
      // Ordenar Array por Niveles de forma ascendente
      this.parent_cells.sort((a:any, b:any) => {
        return a - b
      })
      this.cells.sort((a:any, b:any) => {
        return a.ID - b.ID
      })
      this.setNodes()
    })
  }

  setNodes(){
    var root = document.createElement("div");
    
    this.cells.forEach(element => {
      // Si tiene hijos
      // crea un elemento li
      let li = document.createElement('li')
      if (this.hasChildren(element.ID)) {
        // crea un span con el nombre
        let name = document.createElement('span')
        name.innerText = element.Name
        // crea un ul y le asigna el ID
        let ul = document.createElement('ul')
        ul.setAttribute("id", element.ID);
        li.setAttribute("class", element.ID);
        
        li.appendChild(name)
        li.appendChild(ul)
      } else {
        li.innerText = element.Name
        // li.setAttribute("id", element.ID);
      }
      var parent = document.getElementById(element.Parent);
      if (parent) {
        parent.appendChild(li); 
      } 
    });

    // Añade el elemento creado y su contenido al DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(root, currentDiv);
  }
  
  hasChildren(parent_level:any) {
    let filtered = this.cells.filter(function(cell){
      return cell.Parent == parent_level;
    });
    return filtered.length > 0
  }


  counter(i: number) {
    return new Array(i);
  }
  
  ngOnInit(): void {
    
  }
}
