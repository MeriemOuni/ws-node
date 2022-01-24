// import local module 
// const calcul = require("./localModule")

// import core module => installé avec node
// const fs = require("fs")

// require 3rd party module
// const express = require("express")

const { response } = require("express")
const http = require("http")

http.createServer((request, response) => {
    response.end("Hello mahdi")
}).listen(3567)
