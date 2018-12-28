//This logic updates a list of objects and deletes empty property

var collection = {
    "2548" :{
    "album" :"Slippery when wet",
    "artist" :"Bob Marley",
    "tracks" :[
        "Let it rock",
        "It's just one thing",
        "Last but only three"
]
    },
        
    "2549":{
    "album":"Slush",
    "artist":"kenoil",
    "tracks":[
        "Live the life",
        "It's just one thing luck",
        "put you in the line"
]
    }
};

function updateRecord(id,prop,value){
    if(value === ""){
        delete collection[id][prop];
    }else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
        }else{
            collection[id][prop] = value;
        }
    return collection;
}
console.log(updateRecord("2548","Art", "ABBA"));
