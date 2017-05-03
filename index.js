module.exports = function(classPath, target) {
    const ClassLoader = require('./ClassLoader');

    this.ClassLoader = ClassLoader;

    if(!target) {
        target = global;
    }

    let classes = new ClassLoader().build(
        classPath
    );

    Object.defineProperties(
        target,
        Object.getOwnPropertyDescriptors(classes)
    );
};
