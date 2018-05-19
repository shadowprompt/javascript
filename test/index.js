for (i=0,j=0;i<10,j<6;i++,j++){
	k=i+j;
}
console.log(k);

console.log('String instanceof Object');

console.log('String instanceof Object ->'+ (null instanceof Object));
console.log('null === undefined ->'+ (null === undefined));
console.log('null == undefined ->'+ (null == undefined));
console.log('NaN == NaN ->'+ (NaN == NaN));
console.log('null==null ->'+ (null==null));
console.log('null === null ->'+ (null === null));

console.log('dfd' + true== 'dfd'+true);
console.log('cdk'.charAt(-1));


var myArray = ['a','dfa','dss'];
for (var index in myArray) { // 千万别这样做，
	//在这段代码中，赋给index的值不是实际的数字，而是字符串“0”、“1”、“2”，此时很可能在无意之间进行字符串算数计算，例如：“2” + 1 == “21”，这给编码过程带来极大的不便。
  console.log(myArray[index]);
}

for (var value of myArray) {
  console.log(value);
}

//-----
for (var chr of "") {
  console.log(chr);
}
var uniqueWords = new Set("words");
for (var word of uniqueWords) {
   console.log(word);
}

var parent = document.getElementById('s');
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"，这里包含空行
parent.appendChild(document.createElement('div'));
console.log(child_nodes.length); // should output "3"
//迭代器
var zeroesForeverIterator = {
 [Symbol.iterator]: function () {
   return this;
  },
  next: function () {
  return {done: false, value: 0};
 }
};
class RangeIterator {
  constructor(start, stop) {
	this.value = start;
	this.stop = stop;
  }

  [Symbol.iterator]() { return this; }

  next() {
	var value = this.value;
	if (value < this.stop) {
	  this.value++;
	  return {done: false, value: value};
	} else {
	  return {done: true, value: undefined};
	}
  }
}

// 返回一个新的迭代器，可以从start到stop计数。
function range(start, stop) {
  return new RangeIterator(start, stop);
}
for (var value of range(0, 3)) {
  console.log("Ding! at floor #" + value);
}
// 拆分一维数组icons
// 根据长度rowLength
function splitIntoRows(icons, rowLength) {
  var rows = [];
  for (var i = 0; i < icons.length; i += rowLength) {
	rows.push(icons.slice(i, i + rowLength));
  }
  return rows;
}
console.log(splitIntoRows(['a','bb','ccc','dddd'],1));
function getSptcc(){
    $.ajax({
		url:"http://127.0.0.1:8898/",
		data: {
		  "t": "tt"
		},
		success: function(res){
		  console.log("成功了");
		  console.log(res);
		}
  	})
};
function init(){
	try{
		$.ajax({
			url: "//220.248.75.36/handapp/PGcardAmtServlet",//这样能自动请求http/https资源
			data: {
				"arg1":66386386229
			},
			type: "get",
			async: true,
			dataType: "jsonp",
    		jsonp: "callback", //传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
    		jsonpCallback: "transportMoney", //自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
			success: function(data, textStatus){
				var ba = {
					"balance": data
				}
				console.log(ba);
			},
			error: function(){

   			}
		});
	}catch(err){
		console.log(err);
	}finally{

	};
	// var ba = {
	// 	"balance": "8"
	// };
	// return ba;
};
init();
getSptcc();


(function(){
var list = [
    {
      "description": "支付",
      "parentId": 0,
      "projectId": 1,
      "projectName": "支付",
      "projectVoList": [
        {
          "description": "微信支付",
          "parentId": 1,
          "projectId": 2,
          "projectName": "微信支付",
          "projectVoList": [
            {
              "description": "企业微信",
              "parentId": 2,
              "projectId": 4,
              "projectName": "企业微信支付",
              "shorthand": "service_register"
            }
          ],
          "shorthand": "wechat"
        },
        {
          "description": "支付宝支付",
          "parentId": 1,
          "projectId": 3,
          "projectName": "支付宝支付",
          "shorthand": "alipay"
        }
      ],
      "shorthand": "StatusCode"
    },
    {
      "description": "服务治理中心",
      "parentId": 0,
      "projectId": 5,
      "projectName": "服务治理中心",
      "projectVoList": [
        {
          "description": "服务注册",
          "parentId": 5,
          "projectId": 6,
          "projectName": "服务注册",
          "projectVoList": [
            {
              "description": "动态注册",
              "parentId": 6,
              "projectId": 7,
              "projectName": "动态注册",
              "projectVoList": [
                {
                  "description": "",
                  "parentId": 7,
                  "projectId": 8,
                  "projectName": "dddddd",
                  "shorthand": "dddd"
                }
              ],
              "shorthand": "dongtaireister"
            }
          ],
          "shorthand": "service_register"
        }
      ],
      "shorthand": "govern_center"
    }
];

var i = 0;
// function objArrRecursion(list=[], cb){
//   console.log('list', list);
//   let res = list &list.map( (item,index, arr)=> {
//       if(index== arr.length-1){
//         i++;
//       }

//       return cb(item, i, test);
//   });
//   return res;
// }

var res = objArrRecursion(list, function cb(item, fn){
  console.log("item- " + i, item,);
    if (item.projectVoList) {
        return {
            label: item.projectName,
            value: item.projectId,
            parentId: item.parentId,
            children: fn(item.projectVoList, cb)
        }
    } else {
        return {
            label: item.projectName,
            value: item.projectId,
            parentId: item.parentId,
        }
    }

});
//
function objArrRecursion(list = [], cb) {
    let res = list.map( (item,index, arr) => {
        console.log('index ', index, i);
        if(index== arr.length-1){
          i++;
        }
        if(i>1) return;
        return cb(item, objArrRecursion);
    });
    return res;
}

// var res  = objArrRecursion(list, function cb(item, fn) {
//     if (item.projectVoList) {
//         return {
//             label: item.projectName,
//             value: item.projectId,
//             parentId: item.parentId,
//             children: fn(item.projectVoList, cb)
//         }
//     } else {
//         return {
//             label: item.projectName,
//             value: item.projectId,
//             parentId: item.parentId,
//         }
//     }
// });


console.log('---res---', res);
})()