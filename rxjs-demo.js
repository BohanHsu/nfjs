const Rx = require('rxjs/Rx')

const obs = Rx.Observable.of(3,4,5);


// observable push value like a iterator
obs.subscribe({
    next: (n) => console.log(n),
    complete: () => console.log('done'),
    error: (e) => console.log(e)
})


Rx.Observable.timer(5000, 1000)
// start after 5 sec, each 1 sec on one tick

const p = new Promise(function(res, rej) {
  setTimeout(function() {
    res(true), 1000
  })
})

p.then()

const readDir = Rx.Observable
.fromNodeCallback(fs.readdir)('/User');

readDir.subscribe({
}) // wait for that to do things

//
var mouses = Rx.Observable.fromEvent(...)
const sib = mouse.subscribe()
sib.unsubscribe()

// difference between map and flatMap
Rx.Observable.from([1,2,3])
.map(n => Rx.Observable.range(1,n))
.subscribe({
  next: (n) => console.log(n)
})

Rx.Observable.from([1,2,3])
.flatMap(n => Rx.Observable.range(1,n))
.subscribe({
  next: (n) => console.log(n)
})

const source = Rx.Observable.timer(0, 5000);
const example = source.switchMap((n) => {
  return Rx.Observable.interval(500);
})

const subscribe  = example.subscribe(val => console.log(val))

// the internal get auto canceled!!!!
