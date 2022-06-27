//shanto lifecycle
//wake up
//take breakfast
//go to office
//start work
//take lunch
//start work
//go to home
//take dinner
//go to sleep

//sohan lifecycle
//wake up
//take breakfast
//start work
//take lunch
//start work
//take dinner
//go to sleep

//fumction:awake
//param:name
//defination :how to awake

function awake(name) {
  console.log(`${name} is awake`);
}

//fumction:eat
//param:name,time
//defination :how to eat

function eat(name, time) {
  console.log(`${name} taking his ${time}`);
}
//function work
//params:name
//defination:how to work

function work(name) {
  console.log(`${name} is working`);
}

//function walk
//params:name,destination
//defination:how to walk

function walk(name, destination) {
  console.log(`${name} is going to ${destination}`);
}

//function sleep
//params:name
//defination:how to sleep

function sleep(name) {
  console.log(`${name} is going to sleep`);
}

//function:job_holder_lifecycle
//param:name
//awake->name
//eat->name,time
//walk->name,destination
//work->name
//eat->name,destination
//work->name
//walk->name,destination
//eat->name,time
//sleep->name

function jobholderLifecycle(name) {
  awake(name);
  eat(name, "breakfast");
  walk(name, "office");
  work(name);
  eat(name, "lunch");
  work(name);
  walk(name, "home");
  eat(name, "dinner");
  sleep(name);
}
jobholderLifecycle("shofol");
console.log("------------------------");
jobholderLifecycle("shanto");
console.log("------------------------");
jobholderLifecycle("sohan");
console.log("------------------------");
jobholderLifecycle("akash");
console.log("------------------------");

//function:Work_from_home_lifecycle
//param:name
//awake->name
//eat->name,time
//work->name
//eat->name,time
//work->name
//eat->name,time
//sleep->name
function workFromHome(name) {
  awake(name);
  eat(name, "breakfast");
  work(name);
  eat(name, "lunch");
  work(name);
  eat(name, "dinner");
  sleep(name);
}
workFromHome("Akask");
console.log("------------------------");
workFromHome("Nazim");
