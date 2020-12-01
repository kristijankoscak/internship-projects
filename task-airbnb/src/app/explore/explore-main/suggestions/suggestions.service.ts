import { Injectable } from '@angular/core';
import { Suggestion } from './suggestion.model';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  private suggestions: Suggestion[] = [
    { image: 'https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720', description: 'Cijeli prostori' },
    { image: 'https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720', description: 'Brvnare i seoske kućice' },
    { image: 'https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720', description: 'Jedinstveni smještaji' },
    { image: 'https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=720', description: 'Kućni su ljubimci dobrodošli' }
  ];

  constructor() { }

  getSuggestions(): Suggestion[]{
    return this.suggestions;
  }
}
