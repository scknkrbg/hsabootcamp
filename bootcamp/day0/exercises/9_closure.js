// Uh oh, this doesn't print as expected.
// Use a closure to make this print 0-4

var t = 5;
for (var i = 0; i < 5; i++) { 
  setTimeout(function() { console.log(i-(t--)); },0);
}
