// Q - Implement cyclic sort


function cyclicSort(list) {
    for(let i = 0; i<list.length-1;i++) {
        let item = list[i];

        let pos = i;

        for(let j=i+1;j<list.length;j++){
            if(list[j]<item) pos+=1;
        }


        if(pos === i) continue;

        while(item === list[pos]) {pos++}
        const swap = list[pos];
        list[pos] = item;
        item = swap;

        while(pos!==i){
            pos = i;
            for(let k = i+1;k<list.length;k++){
                if(list[k]<item) pos+=1;
            }

            while(item === list[pos]){
                pos+=1;
            }
            const swap = list[pos]
            list[pos] = item
            item = swap
        }

    }
    return list;  
}

