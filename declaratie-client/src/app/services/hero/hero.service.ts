import { Injectable } from '@angular/core';
import { Hero } from '../../models/Hero';
import { HEROES } from '../../components/mocks/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessagesService } from '../../services/messages/messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessagesService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
