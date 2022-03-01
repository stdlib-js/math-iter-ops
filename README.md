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

# Operators

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Math operator iterators.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-ops
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

</section>

<section class="usage">

## Usage

```javascript
var ns = require( '@stdlib/math-iter-ops' );
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

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var ns = require( '@stdlib/math-iter-ops' );

console.log( objectKeys( ns ) );
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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

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

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-ops/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-ops/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-ops/tree/esm

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-ops/main/LICENSE

<!-- <toc-links> -->

[@stdlib/math/iter/ops/add]: https://github.com/stdlib-js/math-iter-ops-add

[@stdlib/math/iter/ops/divide]: https://github.com/stdlib-js/math-iter-ops-divide

[@stdlib/math/iter/ops/mod]: https://github.com/stdlib-js/math-iter-ops-mod

[@stdlib/math/iter/ops/multiply]: https://github.com/stdlib-js/math-iter-ops-multiply

[@stdlib/math/iter/ops/subtract]: https://github.com/stdlib-js/math-iter-ops-subtract

<!-- </toc-links> -->

</section>

<!-- /.links -->
