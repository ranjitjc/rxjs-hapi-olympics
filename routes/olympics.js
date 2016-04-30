/*jshint esversion: 6 */
'use strict';

// import fs from 'fs';
// import Rx from 'rx';

const fs = require('fs');
const Rx = require('rxjs');


exports.findDisciplines = {
  handler: (request, reply) => {
    var disStream = new Rx.Subject();

    let readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
    let data = readFileAsObservable('./data/discipline.json', 'utf8');
    data.subscribe(data => { disStream.next(data); });
    
    disStream.subscribe(disciplines => { return reply(disciplines); });
    
  }
}
