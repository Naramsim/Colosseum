export default function pokemonFilterStartFilter(){
    return function(arr, searchString){
        if(!searchString){
            return arr.slice(0, 6);
        }
        if(/^\w+$/.test(searchString)){
            if (arr) {
                var result = [];
                searchString = searchString.toLowerCase();
                arr.forEach(function(item){
                    if(item.indexOf(searchString) === 0){
                        result.push(item);
                    }
                });
                return result.slice(0, 6);
            }
        }
    };
}