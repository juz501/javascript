var Demo = new function() {
	// declare variables
	var myArray;
	var myObject;
	var myFromIndex;
	var myIndex;
	var self = this;
	// initialise variables
	this.Init = function(arr, obj, fromindex) {
		self.SetArray(arr);
		self.SetObject(obj);
		self.SetFromIndex(fromindex);
		return self;
	}
	this.SetArray = function(newArray) {
		if (Object.prototype.toString.call(newArray) !== "[object Array]") {
			throw new TypeError('object not of type Array');
		} 
		myArray = newArray;
	}
	this.GetArray = function() {
		 return myArray;
	}
	this.SetObject = function(searchObj) {
		myObject = searchObj;
		return self;
	}
	this.GetObject = function() {
		return myObject;
	}
	this.SetFromIndex = function(fi) {
		if (Object.prototype.toString.call(fi) !== "[object Number]") {
			throw new TypeError('from index not a number');
		} else if (!isInteger(fi)) {
			throw new TypeError('from index not an integer');
		}
		myFromIndex = fi;
		return self;
	}
	this.GetFromIndex = function() {
		return myFromIndex;
	}
	var isInteger = function(inte) {
		return ((inte | 0) === inte);
	}
	this.RunScript = function() {
		myIndex = myArray.indexOf(myObject, myFromIndex);
		return showResult();
	}
	var showResult = function() {
		var myArrayStr;
		var comma;
		var i;
		var myObjectStr;
		// set up strings for display
		myArrayStr = "[";
		comma = "";
		for (i = 0; i < myArray.length; i++) {
				myArrayStr += comma + '"' + myArray[i] + '"';
				comma = ', ';
		}
		myArrayStr += "]";
		myObjectStr = '"' + myObject + '"';
		document.getElementById("original").innerHTML = myArrayStr;
		document.getElementById("searchobj").innerHTML = myObjectStr;
		document.getElementById("fromindex").innerHTML = myFromIndex;
		document.getElementById("result").innerHTML = myIndex;
	}
};
var demo1 = function (e) {
	document.getElementById("currentdemo").innerHTML = e.value; 
	Demo.Init(["Jordan", "Harry", "Tim", "David"], "Tim", 2).RunScript();
};
var demo2 = function (e) {
	document.getElementById("currentdemo").innerHTML = e.value;
	Demo.Init(["Jordan", "Harry", "Tim", "David"], "Harry", 0).RunScript();
};
var demo3 = function (e) {
	document.getElementById("currentdemo").innerHTML = e.value;
	Demo.Init(["Jordan", "Harry", "Tim", "David"], "Julian", 0).RunScript();
};
