// https://bellard.org/quickjs/quickjs.html#std-module

var std = {};

std.exit = function() {};
std.evalScript = function() {};
std.loadScript = function() {};
std.Error = function() {};
std.open = function() {};
std.popen = function() {};
std.fdopen = function() {};
std.tmpfile = function() {};
std.puts = function() {};
std.printf = function() {};
std.sprintf = function() {};
std.in = {};
std.out = {};
std.err = {};

std.gc = function() {};
std.getenv = function() {};
std.urlGet = function() {};

// File

function close(){};
function puts(){};
function printf(){};
function flush(){};
function seek(){};
function tell(){};
function eof(){};
function fileno(){};
function read(){};
function write(){};
function getline(){};
function readAsString(){};
function getByte(){};
function putByte(){};

var os = {};

