import { Injectable } from "@angular/core";

export class DynamicFlatNode {
    constructor(
      public item: string,
      public level = 1,
      public expandable = false,
      public isLoading = false,
    ) {}
  }
  
  /**
   * Database for dynamic data. When expanding a node in the tree, the data source will need to fetch
   * the descendants data from the database.
   */
  @Injectable({providedIn: 'root'})
  export class DynamicDatabase {
    dataMap = new Map<string, string[]>([
      ['Courses', ['Web Development','Node.js', 'Angular']],
      ['Notes', ['Angular', 'HTML', 'CSS', 'JavaScript']],
      ['Privacy policy', ['TERMS & CONDITIONS']],
      ['Refund Policy', ['Cancelation Policy']]
    ]);
  
    rootLevelNodes: string[] = ['Courses', 'Notes','Privacy policy','Refund Policy'];
  
    /** Initial data from database */
    initialData(): DynamicFlatNode[] {
      return this.rootLevelNodes.map(name => new DynamicFlatNode(name, 0, true));
    }
  
    getChildren(node: string): string[] | undefined {
      return this.dataMap.get(node);
    }
  
    isExpandable(node: string): boolean {
      return this.dataMap.has(node);
    }
  }