function number_game(x,y){
	var arr = [];
	if(x>y){
	//if x is greater than y
	//print out even numbers between x and y
		for(let i = x; i > y; i--){
			if(i%2 == 0){
				console.log(JSON.parse("[" + i + "]"));
				arr.push(i);
			}
		} 
	}else if (x < y){
    		for(let i = x; i < y; i++){
			if(i%2 == 1){
				console.log(JSON.parse("[" + i + "]"));
				arr.push(i);
			}
		} 
  }else{
    return ([]);
  }
	//nothing is done when x is equal to y
	
	return arr;
}
number_game(0,0);
