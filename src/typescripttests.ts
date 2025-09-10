function double(x: number): number {
	return 2 * x;
}

function timesTen(x: number): number {
	return 10 * x;
}

function stackFunctions<A, B, C>(fn1: (x: A) => B, fn2: (x: B) => C, x: A): C {
	return fn2(fn1(x));
}

function timesTwenty(x: number): number {
	return stackFunctions<number, number, number>(double, timesTen, x);
}

console.log(timesTwenty(5));

console.log("this is the test branch");
