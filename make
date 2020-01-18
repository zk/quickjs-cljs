#!/bin/bash

mkdir ./build

pushd clojurescript

time clj -m cljs.main --optimizations advanced --compile-opts "{:preamble [\"preamble.js\"] :externs [\"externs.js\"]}" -c hw.core

popd

pushd quickjs

./qjsc -o ../build/runbin ../clojurescript/out/main.js

popd

./build/runbin
