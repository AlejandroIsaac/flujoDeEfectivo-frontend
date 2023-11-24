import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AccountTreeService } from 'src/app/services/account-tree.service';

interface Account {
  id: number;
  name: string;
  total:number;
  children?: Account[];
}

const TREE_DATA: Account[] = [
  {
    id:1,
    name: 'activo',
    total: 100.0,
    children: [
      {
        id: 10,
        name: 'Activo circulante',
        total: 500.0,
        children: [
          {
            id: 19,
            name: 'Ganancias',
            total: 50.0
          },
        {
          id: 20,
          name: 'Inventario',
          total: 50.0
        },
        {
          id: 18,
          name: 'Efectivo',
          total: 50.0
        }]
      }],
  }
];
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  total: number;
  level: number;
}



@Component({
  selector: 'app-libromayor',
  templateUrl: './libromayor.component.html',
  styleUrls: ['./libromayor.component.css'],
  //standalone: true,
  //imports: [MatTreeModule, MatButtonModule, MatIconModule],
})
export class LibromayorComponent {
  sing :string="$";
  private _transformer = (node: Account, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      total: node.total,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );
  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );
  
  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private accountTreeService : AccountTreeService
  ){
    this.dataSource.data = TREE_DATA;
    //console.log("LibromayorComponent=> Ejecuta constructor");
  }
  ngOnInit(): void{
    //console.log("LibromayorComponent=> Ejecuta ngOnInit");
    this.accountTreeService.getAccountTree().subscribe(
      accountTree => {
        //console.log("ngOnInit--accountTreeService.getAccountTree()");
        //console.log("this.datasouce 0 " ,this.dataSource.data);
        //console.log(accountTree);
        this.dataSource.data = accountTree;
        //console.log("this.datasouce 1 " ,this.dataSource.data);
      }
    );
  }
  
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
 
 

}
// {
//   "idRoot": 1,
//   "name": "activo",
//   "total": 0.00,
//   "precedingAccountList": [
//       {
//           "idPreceding": 10,
//           "name": "Activo circulante",
//           "total": 0.00,
//           "accountList": [
//               {
//                   "idAccount": 19,
//                   "name": "Ganancias",
//                   "total": 0.00
//               },
//               {
//                   "idAccount": 20,
//                   "name": "Inventario",
//                   "total": 0.00
//               },
//               {
//                   "idAccount": 18,
//                   "name": "Efectivo",
//                   "total": 0.00
//               }
//           ]
//       }
//   ]
// }