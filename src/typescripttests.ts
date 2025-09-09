function double(x: number): number {
	return 2 * x;
}

function timesTen(x: number): number {
	return 10 * x;
}

function stackFunctions<A, B, C>(fn1: (x: B) => C, fn2: (x: A) => B, x: A): C {
	return fn1(fn2(x));
}

function timesTwenty(x: number): number {
	return stackFunctions(double, timesTen, x);
}

console.log(timesTwenty(5));
