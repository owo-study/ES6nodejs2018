let map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set(3, "c");
map.set(4, "d");
map.delete(4);
console.log( map.get(3) );
console.log( map.has(4) );
console.log( map.keys() );
console.log( map.values() );
console.log( map.entries() );

