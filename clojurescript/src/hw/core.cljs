(ns hw.core)

(println "Running...")
(println js/scriptArgs)

(def f (.open js/std "./build/test.txt" "w"))
(.puts f (str "hello world" " " (system-time)))
(.flush f)
(.close f)

(println "Wrote ./build/test.txt")
