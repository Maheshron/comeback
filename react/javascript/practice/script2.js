function delay(i){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(i)
    }, i * 500)
  })
}

async function test(){
  console.log("started");
  for(var i=1;i < 10;i++){
   const data = await delay(i);
   console.log(data);
  }
  console.log("Ended");
}

test();







