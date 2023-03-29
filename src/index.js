import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Arrow Functions</h1>
<div>
  Here we will recapitulate arrow functions :) - a new ES6 concept.
  <p>when they live into another function is not necesary to have a name
  </p>
  <p>Arrow functions let us do one step further: replace the <u>function</u> word with "=>" like this:
  <pre>
  const newNumbers = numbers.map( x => {
    return x * x;
  });
  
  console.log(newNumbers);
  </pre>

  If we have just one input parameter then we do not need (), but if we have more than one, we need them:
  <pre>
  const newNumbers = numbers.map((x, y) => {
    return x * y;
  });
  
  console.log(newNumbers);
  </pre>
On top of that, if you only have a single line statement where you only return a single expression, you can ignore the return keyword and the {} like this:
<pre>
const newNumbers = numbers.map(x =>  x * y;
);

console.log(newNumbers);
</pre>

<h3>Let's simplify each of these functions as much as we can: </h3>

Map - Create a new array by doing something with each item
in an array.
<pre>
const newNumbers = numbers.map(function(x) {
	return x * 2;
});
</pre>
to:
<pre>
const newNumbers = numbers.map(x => x * 2);
</pre>

Filter - Create a new array by keeping the items that return true.
<pre>
const newNumbers = numbers.filter(function(num) {
	return num< 10;
});
</pre>
to:
<pre>
const newNumbers = numbers.filter(num => num < 10);
</pre>

//Reduce - Accumulate a value by doing something to each item
in an array.
<pre>
var newNumber = numbers.reduce(function(accumulator, currentNumber){
	return accumulator + currentNumber;
})
</pre>
to:
<pre>
var newNumber = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber;
})
</pre>

  </p>

</div>
`;

//
