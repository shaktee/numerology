import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    myMsg = '';
    numerology = 0;
    sum = 0;
    numbers = {'aijqy1': 1,
	       'bkr2'  : 2,
	       'cgls3' : 3,
	       'dmt4'  : 4,
	       'ehnx5' : 5,
	       'uvw6'  : 6,
	       'oz7'   : 7,
	       'fp8'   : 8,
	       '9'     : 9,
	       '0'     : 0
	      };
    numbermap: any  = {};

    update(val: string) {
	this.numerology = 0;
	for (let x = 0; x < val.length; x++) {
	    let v = val[x].toLowerCase();
	    if (Object.keys(this.numbermap).indexOf(v) != -1) {
		this.numerology += this.numbermap[v];
	    }
	}
	this.sum = this.numerology % 9;
    }
    constructor() {
	Object.keys(this.numbers).forEach((k) => {
	    for (let x = 0; x < k.length; x++) {
		this.numbermap[k[x]] = this.numbers[k];
	    }
	});
    }
}
