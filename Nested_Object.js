var object = {"a": { "b": { "c": "d" }}};
console.log("Result at 'a.b.c': ",_.get(object, 'a.b.c'));
//Result at 'a.b.c':  d


var object = {"x": { "y": { "z": "a" }}};
console.log("Result at 'x.y.z': ",_.get(object, 'x.y.z'));
//Result at 'x.y.z':  a


