//PROMISES LET U AVOID COMPLEX IF STATEMENTS
//new creates new instance of a promise, have to call promise like a function
// promise gets called with 2 arguments. not asynchronous yet..
//u can resolve or reject objects u can set properties on too

//REQUEST DOESN'T USE PROMISES BUT CAN WRAP IT.
//whoever calls async add can add in arguments and return then
//promise resolve reject is constructor function
//adding two numbers, if not numbers reject
//This is async :)...
//we've taken an async function that usually requires callbacks and wrapped it in promises
var asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
	  	if (typeof a === 'number' && typeof b === 'number') {
	  		resolve(a + b);
	  	} else {
	  		reject('Arguments must be numbers');
	  	}
	  }, 1500);
	 });
};


//this is a chained promise.. add 33 to first output of 5 * 7 addition
asyncAdd(5,7).then((res) => {
	console.log('Result:', res);
	return asyncAdd(res, 33);
}).then((res) => {
	console.log('Should be 45', res);
}).catch((errorMessage) => {
	console.log(errorMessage);
});

//catch promise is better in this example, won't run success after failiure

//res is result
//if u need a promise output to return another promise, can chain
//in the success are add new promise, add asyncAdd again
//here we add 33 to the first output success of adding 5 & 7;
/*
asyncAdd(5,7).then((res) => {
 console.log('Result:', res);
}, (errorMessage) => {
	console.log(errorMessage);
});
*/
//^this gives result of 12 :)

//THIS RETURNS STRAIGHT AWAY CAUSE IT'S NOT ASYNCHRONOUS..
/*
var somePromise = new Promise((resolve, reject) => {
   resolve('Hey, it worked!');
});


somePromise.then((message) => {
	console.log('Success: ',message);
})
*/

//then lets us deal with success and failures
// two functions


//This doesn't get called for 2 and a half seconds.
//caused by set timeout
// have to create second one called reject to handle errors
//have to pass in error argument so simple error msg will do
//CAN ONLY RESOLVE ONCE, OR REJECT ONCE..can't put both resolve or reject
//not real life cause we will  have to usually pass inputs...
//so, need to add asyncAdd.

//whoever calls async add can pass in an argument

/*
var somePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
   resolve('Hey, it worked!');
   //reject('Unable to fulfil promise');
}, 2500);
});


//adding second argument to then, to handle error msg
somePromise.then((message) => {
	console.log('Success: ',message);
}, (errorMessage) => {
	console.log('Error:', errorMessage);
});
*/