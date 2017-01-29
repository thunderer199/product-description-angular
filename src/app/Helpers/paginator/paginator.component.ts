import {Component, TemplateRef, ContentChild, Input, OnChanges} from '@angular/core';
import {range} from '../Helper';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnChanges {
  @ContentChild(TemplateRef) public template;

  @Input() public items: any[] = [];
  @Input() public itemPerPage: number = 10; // default value

  protected pagesCount = 1;
  protected currentPage = 1;
  protected pagesList: number[] = [];

  constructor() {
  }

  ngOnChanges(): void {
    const count = this.items.length / this.itemPerPage;
    this.pagesCount = Math.ceil(count);
    this.pagesList = range(this.pagesCount, 1);
  }

  public setPage(page) {
    this.currentPage = page;
  }

  public incrementPage() {
    if (this.currentPage < this.pagesList.length) {
      this.currentPage++;
    }
  }

  public decrementPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
