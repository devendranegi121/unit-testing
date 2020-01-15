const functions=require('./functions');
test('add of 2 and 2 is equal 4',()=>{
    expect(functions.add(2,2)).toBe(4);
});

test('add of 2 and 2 is equal 4',()=>{
    expect(functions.add(2,2)).not.toBe(5);
});