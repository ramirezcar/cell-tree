import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CellService {
  _url = 'https://test.defontana.com/'
  constructor(
    private http:HttpClient) {
  }

  getCells() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')
      
    return this.http.get(this._url, {
      headers: headers
    });
  }

}

// 0: {ID: '4', Name: 'uryarchaeota', Parent: 2}
// 1: {ID: '5', Name: 'renarchaeota', Parent: 2}
// 2: {ID: '6', Name: 'orarchaeota', Parent: 2}
// 3: {ID: '7', Name: 'occals', Parent: 3}
// 4: {ID: '1', Name: 'ukaryota', Parent: 0}
// 5: {ID: '2', Name: 'rchaea', Parent: 0}
// 6: {ID: '3', Name: 'acteria', Parent: 0}
// 7: {ID: '8', Name: 'acilus', Parent: 3}
// 8: {ID: '9', Name: 'pirillum', Parent: 3}
// 9: {ID: '10', Name: 'Vibrio', Parent: 3}
// 10: {ID: '11', Name: 'Plants', Parent: 1}
// 11: {ID: '12', Name: 'Animals', Parent: 1}
// 12: {ID: '13', Name: 'Fungi', Parent: 1}
// 13: {ID: '14', Name: 'Protista', Parent: 1}
// 14: {ID: '15', Name: 'Nonvascular', Parent: 11}
// 15: {ID: '16', Name: 'Vascular', Parent: 11}
// 16: {ID: '17', Name: 'Seedless', Parent: 16}
// 17: {ID: '18', Name: 'With seed', Parent: 16}
// 18: {ID: '19', Name: 'Gymnosperm', Parent: 18}
// 19: {ID: '20', Name: 'Anglosperm', Parent: 18}
// 20: {ID: '21', Name: 'Basidiomycetes', Parent: 13}
// 21: {ID: '22', Name: 'Zygomicetes', Parent: 13}
// 22: {ID: '23', Name: 'Ascomycetes', Parent: 13}
// 23: {ID: '25', Name: 'Cnidarians', Parent: 12}
// 24: {ID: '26', Name: 'Bilateral', Parent: 12}
// 25: {ID: '27', Name: 'Arthopods', Parent: 26}
// 26: {ID: '28', Name: 'Vertebrates', Parent: 26}
// 27: {ID: '29', Name: 'Mollusks', Parent: 26}
// 28: {ID: '30', Name: 'Crustaceans', Parent: 27}
// 29: {ID: '31', Name: 'Arachnids', Parent: 27}
// 30: {ID: '32', Name: 'Myriapods', Parent: 27}
// 31: {ID: '33', Name: 'Insects', Parent: 27}
// 32: {ID: '34', Name: 'Cartilaginous Fish', Parent: 28}
// 33: {ID: '35', Name: 'Tetrapods', Parent: 28}
// 34: {ID: '36', Name: 'Bony Fish', Parent: 28}
// 35: {ID: '37', Name: 'Amphibians', Parent: 35}
// 36: {ID: '38', Name: 'Amniotes', Parent: 35}
// 37: {ID: '39', Name: 'Birds and  Reptiles', Parent: 38}
// 38: {ID: '40', Name: 'Mammals', Parent: 38}
// 39: {ID: '41', Name: 'Placentals', Parent: 40}
// 40: {ID: '42', Name: 'Marsupials', Parent: 40}
// 41: {ID: '43', Name: 'Monotremes', Parent: 40}
// 42: {ID: '44', Name: 'Turtles', Parent: 39}
// 43: {ID: '45', Name: 'Lizards', Parent: 39}
// 44: {ID: '46', Name: 'Snakes', Parent: 39}