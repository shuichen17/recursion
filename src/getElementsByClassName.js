// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
     var res = [];
     if(document.body.classList.contains(className)){
     	res.push(document.body); //see below explain
     }
   helper(document.body.childNodes, className, res);
   return res;
};

function helper (nodes, className, res){
	if(nodes.length === 0){
		return;
	}
	else {
		for(var i = 0; i < nodes.length; i++){
			var temp = nodes[i];
			if(temp !== undefined && temp.classList !== undefined && temp.classList.contains(className)){
                    res.push(temp);
			}
			helper(temp.childNodes, className, res);
		}
	}
	return
}
// var res = [];
//docunment.body >> <body class="inited" style="...;">...</body>
//res.push(document.body) >> [body.inited]
//=====the output issame as use built-in method===
//document.getElementsByClassName('inited') >> HTMLCollection [body.inited]