const Datos=require('./src/components/notes/data.json')

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