import {Component, OnInit} from '@angular/core';
import {SkillSetService} from '../../_services/skill-set.service';
import {SearchService} from '../../_services/search.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})
export class ExploreComponent implements OnInit {

  skillSets = [];
  searchResults = [];
  query = '';

  constructor(private skillSetService: SkillSetService, private searchService: SearchService) {
  }

  async ngOnInit() {

    this.skillSets = await this.skillSetService.skillSets().map(it => it.json()).toPromise();
  }

  async search() {
    if (this.query !== '') {
      this.searchResults = await this.searchService.skillSets(this.query).map(res => res.json()).toPromise();
    }

    console.log(this.searchResults);
  }

}
