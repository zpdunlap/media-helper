import { Component } from '@angular/core';

@Component({ selector: 'main-component', templateUrl: './main.component.html' })
export class MainAppComponent {
  imgs = [
    'bkld8Me0WiLWipLORRNfF1yIPHu.jpg',
    'ozBX0u5caaJFli9AssqJmARb5R.jpg',
    'h47JJZ015VF4neia33AFwTU37Yb.jpg',
  ].map((n) => `https://image.tmdb.org/t/p/original/${n}`);

  imgs2 = [
    'hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg',
    'q4FQOiSRhTLWulHl5Vpg37FMArH.jpg',
    'h47JJZ015VF4neia33AFwTU37Yb.jpg',
  ].map((n) => `https://image.tmdb.org/t/p/original/${n}`);

  text = "recommended for you"
  textt = "friend's interests"
}
