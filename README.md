<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Operators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math operator iterators.



<section class="usage">

## Usage

To use in Observable,

```javascript
ns = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-ops@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var ns = require( 'path/to/vendor/umd/math-iter-ops/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-ops@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.ns;
})();
</script>
```

#### ns

Namespace containing math operator iterators.

```javascript
var iterators = ns;
// returns {...}
```

The namespace contains the following functions for creating iterator protocol-compliant iterators:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`iterAdd( iter0, ...iterator )`][@stdlib/math/iter/ops/add]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise addition of two or more iterators.</span>
-   <span class="signature">[`iterDivide( iter0, ...iterator )`][@stdlib/math/iter/ops/divide]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise division of two or more iterators.</span>
-   <span class="signature">[`iterMod( iter0, ...iterator )`][@stdlib/math/iter/ops/mod]</span><span class="delimiter">: </span><span class="description">create an iterator which performs an element-wise modulo operation of two or more iterators.</span>
-   <span class="signature">[`iterMultiply( iter0, ...iterator )`][@stdlib/math/iter/ops/multiply]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise multiplication of two or more iterators.</span>
-   <span class="signature">[`iterSubtract( iter0, ...iterator )`][@stdlib/math/iter/ops/subtract]</span><span class="delimiter">: </span><span class="description">create an iterator which performs element-wise subtraction of two or more iterators.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-ops@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Demonstrate operations with two iterators:
var arr1 = [ 2.0, 3.0 ];
var arr2 = [ 1.0, 4.0 ];
var itAdd = ns.iterAdd( array2iterator( arr1 ), array2iterator( arr2 ) );
var itDiv = ns.iterDivide( array2iterator( arr1 ), array2iterator( arr2 ) );
var itMul = ns.iterMultiply( array2iterator( arr1 ), array2iterator( arr2 ) );
var itSub = ns.iterSubtract( array2iterator( arr1 ), array2iterator( arr2 ) );

// Addition: 2+1=3, 3+4=7
console.log( itAdd.next().value );
// => 3.0
console.log( itAdd.next().value );
// => 7.0

// Division: 2/1=2, 3/4=0.75
console.log( itDiv.next().value );
// => 2.0
console.log( itDiv.next().value );
// => 0.75

// Multiplication: 2*1=2, 3*4=12
console.log( itMul.next().value );
// => 2.0
console.log( itMul.next().value );
// => 12.0

// Subtraction: 2-1=1, 3-4=-1
console.log( itSub.next().value );
// => 1.0
console.log( itSub.next().value );
// => -1.0

// Demonstrate broadcasting:
var itAdd3 = ns.iterAdd( array2iterator( [ 1.0, 2.0 ] ), 3.0 );

console.log( itAdd3.next().value );
// => 4.0
console.log( itAdd3.next().value );
// => 5.0

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-ops.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-ops

[test-image]: https://github.com/stdlib-js/math-iter-ops/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-ops/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-ops/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-ops?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-ops.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-ops/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-ops/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-iter-ops/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-iter-ops/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-iter-ops/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-iter-ops/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-iter-ops/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-iter-ops/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-ops/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/iter/ops/add]: https://github.com/stdlib-js/math-iter-ops-add/tree/umd

[@stdlib/math/iter/ops/divide]: https://github.com/stdlib-js/math-iter-ops-divide/tree/umd

[@stdlib/math/iter/ops/mod]: https://github.com/stdlib-js/math-iter-ops-mod/tree/umd

[@stdlib/math/iter/ops/multiply]: https://github.com/stdlib-js/math-iter-ops-multiply/tree/umd

[@stdlib/math/iter/ops/subtract]: https://github.com/stdlib-js/math-iter-ops-subtract/tree/umd

<!-- </toc-links> -->

</section>

<!-- /.links -->
