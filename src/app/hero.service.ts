import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Hero} from './heroes/hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: Fetched Heroes!');
    return heroes;
  }

  constructor(private messageService: MessageService) { }
}
