module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readjson("package.json"),
    })
grunt.registerTask("olaGrunt", function(){
    const done = this.async();
    setTimeout(function() {
    console.log("olaGrunt");
    done();
    }, 3000);
});
}