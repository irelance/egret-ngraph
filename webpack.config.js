module.exports = {
    entry:  __dirname + "/index.js",//your project entry
    output: {//webpack output
        path: __dirname + "/libsrc/src",
        filename: "ngraph.js"
    }
}