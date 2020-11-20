

const getDatosNotas=(array)=>array.map((elem)=>{
    let notes=[...elem.note]
    let foll=[...elem.followers]
    let ups=[...elem.up]
    let numbers=[...elem.number]
    let matrizNotes=[]
    for(let i=0;i<notes.length;i++){
        let obj={}
        obj["id"]=i+1;obj["note"]=notes[i];obj["followers"]=foll[i];obj["up"]=ups[i];obj["number"]=numbers[i];
        matrizNotes.push(obj)
    }
    elem.newNotes=[...matrizNotes]
    return elem
})

export default getDatosNotas
