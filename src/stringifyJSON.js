// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
   var str = '';
  if(typeof obj === 'undefined' || typeof obj === 'function'){
  	return undefined;
  } 
  else if (typeof obj === 'string'){
  	return '\"' + obj + '\"';
  }
  else if (typeof obj !== 'object'){
  	return '' + obj;
  } 
  else if (obj === null){
  	return 'null';
  }
  else if(Array.isArray(obj) === true){
      
  		for(var i = 0; i < obj.length; i++){
  			var temp = stringifyJSON(obj[i]);
  			str = str + temp;
  			if(i !== obj.length - 1){
  				str = str + ',';
  			}
  		}
  		
  		return '[' + str + ']';
  	} else {
  		var flag = false;
  		for(var key in obj){
  			var temp = stringifyJSON(obj[key]);
  			if(typeof temp !== 'undefined'){
  				flag = true;
  				str = str + '\"' + key + '\":' + temp + ','; 
  			}
  		}
  		//if obj not empty, the last ',' need to delete
  		if(flag)
  			str = str.slice(0, -1);
  		}
  		return '{' + str + '}';
  	};
  



