function table(log, reason, squirrel){
  // table[0]: event true, pizza true
  // table[1]: event true, pizza false
  // table[2]: event false, pizza true
  // table[3]: event false, pizza false
  var table = [0,0,0,0];
  for(var i=0; i<log.length; i++){
    if(log[i].events.indexOf(reason)>-1){
      if(log[i].squirrel === true){
        table[0]++;
      } else {
        table[1]++;
      }
    } else {
      if(log[i].squirrel === true){
        table[2]++;
      } else {
        table[3]++;
      }
    }
  }
  return table;
}

function corr(table){
  return (table[0]*table[3] - table[1]*table[2])/
        Math.sqrt((table[0]+table[1]) * (table[2]+table[3]) * (table[0]+table[2]) * (table[1]+table[3]));
}


var t =  require('./jacques_journal');
var tab = table(t, 'pizza', true);
var tab = corr(tab);
console.log(tab);

function allCorr(log){
  var phis = {};
  for(var i = 0; i<log.length; i++){
    for(var t = 0; t<log[i].events.length; t++){
      var reason = log[i].events[t];
      if(!(reason in phis)){
        var tab = table(log, reason, true);
        phis[reason] = corr(tab);
      }
    }
  }
  return phis;
};

console.log(allCorr(t));






  
  
