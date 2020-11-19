
Datos=[
    {
    "id":1,
    "name":"facebook",
    "note":["Page views","Likes"],
    "image":"/images/icon-facebook.svg",
    "followers":["87","52"],
    "up":[true,false],
    "number":[3,2]
    },
    {
        "id":2,
        "name":"instagram",
        "note":["Likes","Profile Views"],
        "image":"/images/icon-instagram.svg",
        "followers":["5462","52k"],
        "up":[true,true],
        "number":[2257,1375]
    },
    {
    "id":3,
    "name":"twiter",
    "note":["Retweets","Likes"],
    "image":"/images/icon-twitter.svg",
    "followers":[117,507],
    "up":[true,true],
    "number":[303,553]
    },
    {
        "id":4,
        "name":"youtube",
        "note":["Likes","Total Views"],
        "image":"/images/icon-youtube.svg",
        "followers":[107,1407],
        "up":[false,false],
        "number":[19,12]
    }
]

const funt=array=>array.map((elem)=>{
    let notes=[...elem.note]
    let foll=[...elem.followers]
    let ups=[...elem.up]
    let numbers=[...elem.number]
    let matrizNotes=[]
    for(i=0;i<notes.length;i++){
        let obj={}
        obj["id"]=i+1;obj["note"]=notes[i];obj["followers"]=foll[i];obj["up"]=ups[i];obj["number"]=numbers[i];
        matrizNotes.push(obj)
    }
    elem.nuevaprpiedad=[...matrizNotes]
    return elem
})
const nuevo=funt(Datos)
console.table(nuevo[2].nuevaprpiedad[0])