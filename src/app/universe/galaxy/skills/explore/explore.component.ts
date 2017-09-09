import {Component, OnInit, ViewChild} from '@angular/core';
import {SkillSetService} from '../../_services/skill-set.service';
import {SearchService} from '../../_services/search.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {


  private searchTerm = new Subject<string>();

  skillSets = [];
  searchResults = [];
  searching = false;


  constructor(private skillSetService: SkillSetService,
              private searchService: SearchService) {
  }

  async ngOnInit() {
    this.skillSets = await this.skillSetService.skillSets().map(it => it.json()).toPromise();

    this.searchTerm.debounceTime(200).subscribe(query => {
      this.searching = true;
      this.searchService.skillSets(query).subscribe(res => {
        this.searching = false;
        this.searchResults = res.json();
      });
    });
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    if (term.length > 2) {
      this.searchTerm.next(term);
    }
  }


}
