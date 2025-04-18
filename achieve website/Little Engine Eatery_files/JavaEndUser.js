
function NewWindow(strURL) {
	
	var intWidth;
	var intHeight;
	
	intWidth = 700;
	intHeight = 500;
	
	aWindow = window.open(strURL,'_blank','toolbar=yes,location=yes,directories=yes,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width=' + intWidth + ',height=' + intHeight + ',left=10,top=10');
	window.aWindow.focus();
	
}

function SameWindow(strURL) {
	aWindow = window.open(strURL,'_self');
}

function ClickItem(intItemID) {
	window.open('ShoppingCartInfo.aspx?ItemID=' + intItemID, '_self');
}

function DisplayELink(strUser, strDPrefix, strDSuffix) {
   var strH1 = "hr";
   var strH2 = "ef"; 
    var strM1 = "mai";
    var strM2 = "lto";
    var strDisplay = strUser + "@" + strDPrefix + "." + strDSuffix;
    var strFull = "<A class='Hyperlink' " + strH1 + strH2 + "=" + strM1 + strM2 + ":" + strDisplay + ">" + strDisplay + "</a>";
    document.write(strFull);
}

function LaunchELink(strDPrefix, strDSuffix, strUser) {
    var strM1 = "mai";
    var strM2 = "lto";
    var strDisplay = strUser + "@" + strDPrefix + "." + strDSuffix;
    var strURL = strM1 + strM2 + ":" + strDisplay
	aWindow = window.open(strURL,'_self');
}

function ImageDetailWindow(strFile) {
	
	var intWidth;
	var intHeight;
	var strURL;
	
	intWidth = 300;
	intHeight = 400;
	
	strURL = "ImageDetail.aspx?File=" + strFile
	
	aWindow = window.open(strURL,'_blank','toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=' + intWidth + ',height=' + intHeight + ',left=75,top=50');
	window.aWindow.focus();
	
}

//TopMenu RD
function ShowMainMenu() {
	var objControl = document.getElementById("ToggleMenuPlusMinus");
	var objTarget = document.getElementById("MenuPackage");
	if (objControl.innerHTML == "+") {
		objControl.innerHTML = "-";
		objTarget.classList.remove("Hide");
		objTarget.classList.add("Show");
	} else {
		objControl.innerHTML = "+";
		objTarget.classList.remove("Show");
		objTarget.classList.add("Hide");
	}
}
function ShowSubMenu(objControl) {
	var objToggleMenu = document.getElementById("ToggleMenu");
	var objToggleStyle = window.getComputedStyle(objToggleMenu);
	if (objToggleStyle.display == "block") {
		objControl.classList.toggle("active")
		var objTarget = objControl.nextElementSibling;
//	alert(objTarget.tagName);
		var objNextStyle = window.getComputedStyle(objTarget);
//		alert(objNextStyle.display);
//		if (objNextStyle.display == "none") {
//		  objTarget = objTarget.nextElementSibling;
//    }
		if (objTarget.classList.contains("Show")) {
			objTarget.classList.remove("Show");
		} else {
			objTarget.classList.add("Show");
		}
	}
}

function ShowLeftMainMenu() {
	var objControl = document.getElementById("LeftToggleMenuPlusMinus");
	var objTarget = document.getElementById("LeftMenuPackage");
	if (objControl.innerHTML == "+") {
		objControl.innerHTML = "-";
		objTarget.classList.remove("Hide");
		objTarget.classList.add("Show");
	} else {
		objControl.innerHTML = "+";
		objTarget.classList.remove("Show");
		objTarget.classList.add("Hide");
	}
}
function ShowLeftSubMenu(objControl) {
	var objToggleMenu = document.getElementById("LeftToggleMenu");
	var objToggleStyle = window.getComputedStyle(objToggleMenu);
	if (objToggleStyle.display == "block") {
		objControl.classList.toggle("active")
		var objTarget = objControl.nextElementSibling;
		var objNextStyle = window.getComputedStyle(objTarget);
//		if (objNextStyle.display == "none") {
//		  objTarget = objTarget.nextElementSibling;
//    }
		if (objTarget.classList.contains("Show")) {
			objTarget.classList.remove("Show");
		} else {
			objTarget.classList.add("Show");
		}
	}
}

	function ShowPopup(strLinkID, strPopupID, strLocation) {
	
		var objLink = document.getElementById(strLinkID);
		var objPopup = document.getElementById(strPopupID);
		var intLinkWidth = 0;
		var intLinkLeft = 0;
		var intLinkTop = 0;
		
		//parentElement;
		
		if ((objLink.parentNode.id == "LeftMenu") || (objLink.parentNode.id == "TopMenu")) {
			intLinkLeft = GetXPosition(objLink);
			intLinkTop = GetYPosition(objLink);
		} else {
			intLinkLeft = objLink.offsetLeft;
			intLinkTop = objLink.offsetTop;
		}
		
		intLinkWidth = objLink.offsetWidth;

		var intLinkHeight = objLink.offsetHeight;
//	document.getElementById("txtTest").value = objLink.tagName;

//		document.body.appendChild(objPopup);
		
		if (strLocation == "Bottom") {
			objPopup.style.left = intLinkLeft + "px";
			objPopup.style.top = (intLinkTop + intLinkHeight) + "px";
		} else {
			objPopup.style.left = (intLinkLeft + intLinkWidth) + "px";
//			objPopup.style.left = (intLinkWidth - 0) + "px";
//			objPopup.style.left = "120px";// (intLinkLeft + 20) + "px";
//			objPopup.style.left = (intLinkLeft + 20) + "px";
//			objPopup.style.top = "20px";// (intLinkTop - 10) + "px";
			objPopup.style.top = intLinkTop + "px";
		}
		objPopup.style.display = "block";
	}
	function HidePopup(strImageID) {
		document.getElementById(strImageID).style.display = "none";
	}
	
	function ShowMenuPopup(strLinkID, strPopupID, strLocation) {
	
		var objLink = document.getElementById(strLinkID);
		var objPopup = document.getElementById(strPopupID);
		var intLinkWidth = 0;
		var intLinkLeft = 0;
		var intLinkTop = 0;
		var intLinkHeight = 0;
		if ((objLink.parentNode.id == "LeftMenu") || (objLink.parentNode.id == "TopMenu")) {
			intLinkLeft = GetXPosition(objLink);
			intLinkTop = GetYPosition(objLink);
		} else {
			intLinkLeft = objLink.offsetLeft;
			intLinkTop = objLink.offsetTop;
		}		
		intLinkWidth = objLink.offsetWidth;
		intLinkHeight = objLink.offsetHeight;
//		alert(intLinkHeight);
		if (strLocation == "Bottom") {
			objPopup.style.left = intLinkLeft + "px";
			objPopup.style.top = (intLinkTop + intLinkHeight) + "px";
		} else {
			objPopup.style.left = (intLinkLeft + intLinkWidth - 1) + "px";
//			objPopup.style.left = (intLinkWidth - 0) + "px";
//			objPopup.style.left = "120px";// (intLinkLeft + 20) + "px";
//			objPopup.style.left = (intLinkLeft + 20) + "px";
//			objPopup.style.top = "20px";// (intLinkTop - 10) + "px";
			objPopup.style.top = intLinkTop + "px";
		}
		objPopup.style.display = "block";
	}	
function HideMenuPopup(event, strPopupID, strParentID) {
	var objPopup = document.getElementById(strPopupID);
	var objTarget = null;
	var bolChild = false;
	if (event.toElement === undefined) {
		objTarget = event.relatedTarget;
	} else {
		objTarget = event.toElement;
	}
	while(objTarget.tagName != "BODY") {
		if (objTarget.id == strParentID) {
			bolChild = true;
			break;
		} else {
			objTarget = objTarget.parentNode;
		}  
	}
	if (!bolChild) {
		objPopup.style.display = "none";
	}
}
	
	function GetXPosition(objElement) {
		var intX = 0;
		while(objElement != null ) {
			intX += objElement.offsetLeft;
			objElement = objElement.offsetParent;
		}
		return intX;
	}			
	function GetYPosition(objElement) {
		var intY = 0;
		while(objElement != null ) {
			intY += objElement.offsetTop;
			objElement = objElement.offsetParent;
		}
		return intY;
	}			

	//Validation Functions
	
	//Integer
	function IsInteger(strValue) {
		if (parseInt(strValue) == strValue - 0) {
			return true;
		} else {
			return false;
		}
	}

//Conversion/Formatting Functions
function FormatCurrency(decAmount)
{
	var strMinus = '';
	if(decAmount < 0) { 
	  strMinus = '-';
	}
	decAmount = Math.abs(decAmount);
	decAmount = parseInt((decAmount + .005) * 100);
	decAmount = decAmount / 100;
	strAmount = new String(decAmount);
	if(strAmount.indexOf('.') < 0) { 
	  strAmount += '.00';
	}
	if(strAmount.indexOf('.') == (strAmount.length - 2)) {
	  strAmount += '0';
	}
	strAmount = "$" + strMinus + strAmount;
	return strAmount;
}

function CommaFormatted(amount) //Not used right now
{
	var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3)
	{
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
}

//Google Search Code
function URLEncode (strText) {
  var strOutput = '';
  var x = 0;
  strText = strText.toString();
  var regex = /(^[a-zA-Z0-9_.]*)/;
  while (x < strText.length) {
    var match = regex.exec(strText.substr(x));
    if (match != null && match.length > 1 && match[1] != '') {
    	strOutput += match[1];
      x += match[1].length;
    } else {
      if (strText[x] == ' ')
        strOutput += '+';
      else {
        var charCode = strText.charCodeAt(x);
        var hexVal = charCode.toString(16);
        strOutput += '%' + ( hexVal.length < 2 ? '0' : '' ) + hexVal.toUpperCase();
      }
      x++;
    }
  }
  return strOutput;
}

function EnterKeySearch(objTextBox, e) {
  var keycode;
  if (window.event) {
    keycode = window.event.keyCode;
  } else if (e) {
    keycode = e.which;
  } else {
    return true;
  }
  if (keycode == 13) {
    SearchSite();
    return false;
  } else {
    return true;
  }
}


function SearchSite() {
	var strCX = "009907816502587093904:jggmfg6al-q";
	var strResultPage = "SearchResults.aspx"
	var strCof = "FORID%3A10"
	document.location.href = strResultPage + "?cx=" + strCX + "&cof=" + strCof + "&ie=UTF-8&q=" + URLEncode(document.getElementById('q').value) + '&sa=Search';
}  

function AddSearchWatermark() {
  var objTextBox = document.getElementById("txtGoogleSearch");
  if (objTextBox.value.length == 0) {
    objTextBox.style.backgroundImage = "url(/MainSiteGraphics/GoogleSearch.jpg)";
  }
}
function RemoveSearchWatermark() {
  var objTextBox = document.getElementById("txtGoogleSearch");
  objTextBox.style.backgroundImage = "none";
}
    
//End Google Search Code

//Scroll To an element by ID - works better than normal anchor
function ScrollToID(strID, strPageName) {
	//location.href="Pet-Food-FAQ";
	//alert("Pause");
	var intY = GetYPosition(document.getElementById(strID));
	document.documentElement.scrollTop = intY;
	document.body.scrollTop = intY;
}

function GetYPosition(objElement) {
	var intY = 0;
	while(objElement != null ) {
		intY += objElement.offsetTop;
		objElement = objElement.offsetParent;
	}
	return intY;
}

//Add Additional Function to widnow.onload event
function AddLoadEvent(objFunction, bolMakeFirst) {
  var objOrigOnLoad = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = objFunction;
  } else {
    window.onload = function() {
			if (bolMakeFirst) {
				objFunction();
				if (objOrigOnLoad) {
					objOrigOnLoad();
				}
			} else {
				if (objOrigOnLoad) {
					objOrigOnLoad();
				}
				objFunction();
			}
    }
  }
}
//Basic Instructions
//AddLoadEvent(nameOfSomeFunctionToRunOnPageLoad);
//AddLoadEvent(function() {
//  /* more code to run on page load */
//});

function ModifyStyle(strTitle, strSelector, strProperty, strValue) {
  var aobjStyleSheets = new Array();
  var aobjRules = new Array();
  //Need to loop through for IE8, otherwise use document.getElementById(x).sheet;
  aobjStyleSheets = document.styleSheets;
  for (n in aobjStyleSheets) {
    if (aobjStyleSheets[n].title == strTitle) {
      var objStyleSheet = document.styleSheets[n];
    }
  }
  if (objStyleSheet.cssRules) {
   aobjRules = objStyleSheet.cssRules; 
  } else if (objStyleSheet.rules) {
   aobjRules = objStyleSheet.rules;
  }  
  for (n in aobjRules) {
    if (aobjRules[n].selectorText == strSelector) {
      var objRule = aobjRules[n];
      if (objRule.style.setProperty) {
        objRule.style.setProperty (strProperty, strValue, null);
      } else if (objRule.setAttribute) {
        objRule.style.setAttribute (strProperty, strValue);
      } else { //IE8 falls in here.
        var strCommand = "objRule.style." + strProperty + " = '" + strValue + "';";
        eval(strCommand);
      }
    }
  }
}
