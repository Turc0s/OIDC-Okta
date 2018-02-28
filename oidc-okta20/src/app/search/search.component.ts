
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person, SearchService } from '../shared';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  searchValue: string = "";
  query: string;
  searchResults: Array<Person>;
  sub: Subscription;

  constructor(private searchService: SearchService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      if (params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.search();
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  search(): void {
    this.searchService.search(this.query).subscribe(
      data => {
        this.searchResults = data;
      },
      error => console.log(error)
    );
  }

  clearInput(form: NgForm) {
    form.reset();
  }
}
