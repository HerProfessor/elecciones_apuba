module.exports = function sliceArrayToJSONObj (arr, idIn, idOut, listas){
    //header
    let keys = arr[0];
    //vacate keys from main array
    let newArr = arr.slice(idIn, idOut);
//     console.log(listas)
  
    let formatted = [],
    data = newArr

    for (let i=0; i<data.length; i++) {
        let d = data[i],
        o = {};
        for (let j=0; j<keys.length; j++){
                for (let k=0; k<listas.length; k++){
                        // console.log('key ' + keys[j])
                        // console.log('lista ' + listas[k])
                        if(keys[j]==listas[k]){
                                let list = {}
     
                                if(listas[k] == 'Nulo'){
                                        list[keys[j]] = d[j]
                                }         
                                o['list'] = list
                                o[keys[j]] = d[j];
                                console.log(list)
                        }
                }
        }
        
        formatted.push(o);
    }
    return formatted;
  }

  
