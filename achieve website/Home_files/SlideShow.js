// SLIDE SHOW CODE

var intMaxFadeLevel = 10;
aobjSlideShows = new Array();

//CURRENT

function SlideShow(strKey, intSlideCount, bolAutoPlay, intDisplayTime, intTransitionTime, varTimeout, intCurrentImage) {
    this.Key = strKey;
    this.SlideCount = intSlideCount;
    this.AutoPlay = bolAutoPlay;
    this.DisplayTime = intDisplayTime;
    this.TransitionTime = intTransitionTime;
    this.CurrentImage = intCurrentImage;
    this.FadeOption = intMaxFadeLevel;
    this.TimeoutPointer = varTimeout;
}

function GetSlideShow(strKey) {
    for (var i = 0; i < aobjSlideShows.length; i++) {
        if (aobjSlideShows[i].Key == strKey) {
            return aobjSlideShows[i];
        }
    }
}

function RemoveSlideShow(strKey) {
    for (var i = 0; i < aobjSlideShows.length; i++) {
        if (aobjSlideShows[i].Key == strKey) {
            aobjSlideShows.splice(i, 1);
        }
    }
}


//Current
function SlideShowSetup(strKey, intSlideCount, bolAutoPlay, intDisplayTime, intTransitionTime, intWidth, intHeight, intOptionalCurrentImage) {

    var intCurrentImage;
    if (intOptionalCurrentImage) {
        intCurrentImage = intOptionalCurrentImage;
    } else {
        intCurrentImage = 1
    }

    var varTimeout;
    var objSlideShow = new SlideShow(strKey, intSlideCount, bolAutoPlay, intDisplayTime, intTransitionTime, varTimeout, intCurrentImage);
    aobjSlideShows[aobjSlideShows.length] = objSlideShow;

    var divSlideContainer = document.getElementById("SS" + strKey);

    divSlideContainer.style.width = intWidth;
    if (document.getElementById("IC" + strKey)) {
        document.getElementById("IC" + strKey).style.height = intHeight;
    } else {
        divSlideContainer.style.height = intHeight;
    }

    document.getElementById("img" + strKey + "-" + intCurrentImage).style.display = "inline-block";
    if (document.getElementById("cap" + strKey + "-" + intCurrentImage)) {
        document.getElementById("cap" + strKey + "-" + intCurrentImage).style.display = "inline-block";
    }

    var aPlay = document.getElementById("aPlay" + strKey);
    if (!bolAutoPlay) {
        if (aPlay) {
            //aPlay.innerHTML = "<img src='/MainSiteGraphics/PlayButton.jpg' />"//"&#9654;"
            aPlay.innerHTML = "&#9654;";
        }
        var aPrevious = document.getElementById("Prev" + strKey);
        aPrevious.style.display = "block";
        var aNext = document.getElementById("Next" + strKey);
        aNext.style.display = "block";
    } else {
        if (aPlay) {
            //aPlay.innerHTML = "<img src='/MainSiteGraphics/PauseButton.jpg' />"//"&#9208;";
            aPlay.innerHTML = "&#9208;";
        }
        var aPrevious = document.getElementById("Prev" + strKey);
        if (aPrevious) {
            aPrevious.style.display = "none";
        }
        var aNext = document.getElementById("Next" + strKey);
        if (aNext) {
            aNext.style.display = "none";
        }

        objSlideShow.TimeoutPointer = setTimeout(function () { FadeOutSlide(strKey) }, objSlideShow.DisplayTime * 1000);
    }
    objSlideShow = null;
}


function NextSlide(strKey, bolFadeIn) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage).style.display = "none";

    if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
        document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage).style.display = "none";
    }

    if (objSlideShow.CurrentImage == objSlideShow.SlideCount) {
        objSlideShow.CurrentImage = 1;
    } else {
        objSlideShow.CurrentImage += 1;
    }
    if (bolFadeIn) {
        SetOpacity(document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
        document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
        if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
            document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
        }
        objSlideShow.FadeOption = 2;
        objSlideShow.TimeoutPointer = setTimeout(function () { FadeInSlide(strKey) }, intTransitionTime);
    } else {
        document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
        if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
            document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
        }
    }
    objSlideShow = null;
}

function PreviousSlide(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage).style.display = "none";
    if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
        document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage).style.display = "none";
    }
    if (objSlideShow.CurrentImage == 1) {
        objSlideShow.CurrentImage = objSlideShow.SlideCount;
    } else {
        objSlideShow.CurrentImage -= 1;
    }
    document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
    if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
        document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage).style.display = "inline-block";
    }
    objSlideShow = null;
}

function PreviousSlideOld(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intCurrentImage = objSlideShow.CurrentImage;
    var intSlideCount = objSlideShow.SlideCount;
    document.getElementById("img" + strKey + "-" + intCurrentImage).style.display = "none";
    if (intCurrentImage == 1) {
        intCurrentImage = intSlideCount;
    } else {
        intCurrentImage -= 1;
    }
    document.getElementById("img" + strKey + "-" + intCurrentImage).style.display = "inline-block";
    GetSlideShow(strKey).CurrentImage = intCurrentImage;
}


//Current
function FadeOutSlide(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    var intOpacity = (100 - intMaxFadeLevel) * objSlideShow.FadeOption;
    objSlideShow.FadeOption -= 1
    SetOpacity(document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
        SetOpacity(document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    }
    if (objSlideShow.FadeOption == 1) {
        objSlideShow.TimeoutPointer = setTimeout(function () { NextSlide(strKey, true) }, intTransitionTime);
    } else {
        objSlideShow.TimeoutPointer = setTimeout(function () { FadeOutSlide(strKey) }, intTransitionTime);
    }
    objSlideShow = null;
}


//Current
function FadeInSlide(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    SetOpacity(document.getElementById("img" + strKey + "-" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    if (document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage)) {
        SetOpacity(document.getElementById("cap" + strKey + "-" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    }
    if (objSlideShow.FadeOption == intMaxFadeLevel) {
        objSlideShow.TimeoutPointer = setTimeout(function () { FadeOutSlide(strKey) }, objSlideShow.DisplayTime * 1000);
    } else {
        objSlideShow.FadeOption += 1
        objSlideShow.TimeoutPointer = setTimeout(function () { FadeInSlide(strKey) }, intTransitionTime);
    }
    objSlideShow = null;
}

function SetOpacity(objImage, intOpacity) {
    objImage.style.filter = "alpha(opacity=" + intOpacity + ")";
    objImage.style.opacity = intOpacity / 100;
}

function PlaySlideShow(strKey) {

    var objSlideShow = GetSlideShow(strKey);
    var intSlideCount = objSlideShow.SlideCount;
    var intDisplayTime = objSlideShow.DisplayTime;
    var intTransitionTime = objSlideShow.TransitionTime;
    var intCurrentImage = objSlideShow.CurrentImage;


    if (objSlideShow.AutoPlay) {

        clearTimeout(objSlideShow.TimeoutPointer);

        for (var i = 1; i <= objSlideShow.SlideCount; i++) {
           var objImage = document.getElementById("img" + strKey + "-" + i);
           SetOpacity(objImage, 100);
           if (document.getElementById("cap" + strKey + "-" + i)) {
               var objCaption = document.getElementById("cap" + strKey + "-" + i);
               SetOpacity(objCaption, 100);
            }
        }

        RemoveSlideShow(strKey);

        SlideShowSetup(strKey, intSlideCount, false, intDisplayTime, intTransitionTime, 400, 225, intCurrentImage);

    } else {


        RemoveSlideShow(strKey);

        SlideShowSetup(strKey, intSlideCount, true, intDisplayTime, intTransitionTime, 400, 225, intCurrentImage);

    }

}

function PauseSlideShow(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    clearTimeout(objSlideShow.TimeoutPointer);

    for (var i = 1; i <= objSlideShow.SlideCount; i++) {
        var objImage = document.getElementById("img" + strKey + "-" + i);
        SetOpacity(objImage, 100)
    }
    RemoveSlideShow(strKey);
    SlideShowSetup('20171215918', 3, false, 3, 1, 400, 225);
}


function SlideShowCount() {
    alert(aobjSlideShows.length);

}


function ShowHideControls(strPlayID, strOption) {
    if (strOption == "Hide") {
        document.getElementById(strPlayID).style.display = "none";
    } else {
        document.getElementById(strPlayID).style.display = "block";
    }
}



//HOLD

function PreviousImage(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intCurrentImage = objSlideShow.CurrentImage;
    var intSlideCount = objSlideShow.SlideCount;
    document.getElementById(strKey + "img" + intCurrentImage).style.display = "none";
    if (intCurrentImage == 1) {
        intCurrentImage = intSlideCount;
    } else {
        intCurrentImage -= 1;
    }
    document.getElementById(strKey + "img" + intCurrentImage).style.display = "block";
    GetSlideShow(strKey).CurrentImage = intCurrentImage;
}

//function PreviousSlide(strKey) {
//    var objSlideShow = GetSlideShow(strKey);
//    var intCurrentImage = objSlideShow.CurrentImage;
//    var intSlideCount = objSlideShow.SlideCount;
//    document.getElementById("img" + strKey + "-" + intCurrentImage).style.display = "none";
//    if (intCurrentImage == 1) {
//        intCurrentImage = intSlideCount;
//    } else {
//        intCurrentImage -= 1;
//    }
//    document.getElementById("img" + strKey + "-" + intCurrentImage).style.display = "block";
//    GetSlideShow(strKey).CurrentImage = intCurrentImage;
//}

function NextImage(strKey, bolFadeIn) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    document.getElementById(strKey + "img" + objSlideShow.CurrentImage).style.display = "none";
    if (objSlideShow.CurrentImage == objSlideShow.SlideCount) {
        objSlideShow.CurrentImage = 1;
    } else {
        objSlideShow.CurrentImage += 1;
    }
    if (bolFadeIn) {
        SetOpacity(document.getElementById(strKey + "img" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
        document.getElementById(strKey + "img" + objSlideShow.CurrentImage).style.display = "inline-block";
        objSlideShow.FadeOption = 2;
        setTimeout(function () { FadeIn(strKey) }, intTransitionTime);
    } else {
        document.getElementById(strKey + "img" + objSlideShow.CurrentImage).style.display = "inline-block";
    }
    objSlideShow = null;
}


function FadeOut(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    var intOpacity = (100 - intMaxFadeLevel) * objSlideShow.FadeOption;
    objSlideShow.FadeOption -= 1
    SetOpacity(document.getElementById(strKey + "img" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    if (objSlideShow.FadeOption == 1) {
        setTimeout(function () { NextImage(strKey, true) }, intTransitionTime);
    } else {
        setTimeout(function () { FadeOut(strKey) }, intTransitionTime);
    }
    objSlideShow = null;
}


function FadeIn(strKey) {
    var objSlideShow = GetSlideShow(strKey);
    var intTransitionTime = (objSlideShow.TransitionTime * 1000) / (2 * intMaxFadeLevel);
    SetOpacity(document.getElementById(strKey + "img" + objSlideShow.CurrentImage), (100 / intMaxFadeLevel) * objSlideShow.FadeOption)
    if (objSlideShow.FadeOption == intMaxFadeLevel) {
        setTimeout(function () { FadeOut(strKey) }, objSlideShow.DisplayTime * 1000);
    } else {
        objSlideShow.FadeOption += 1
        setTimeout(function () { FadeIn(strKey) }, intTransitionTime);
    }
    objSlideShow = null;
}



//Not Used right now
function SetupSlideShow(strKey, intSlideCount, bolAutoPlay, intDisplayTime, intTransitionTime, intWidth, intHeight) {

    var varTimeout;
    var objSlideShow = new SlideShow(strKey, intSlideCount, bolAutoPlay, intDisplayTime, intTransitionTime, varTimeout, 1);

    aobjSlideShows[aobjSlideShows.length] = objSlideShow;
    var divSlideShow = document.getElementById(strKey + "div");
    divSlideShow.style.width = intWidth + "px";
    divSlideShow.style.height = intHeight + "px";

    document.getElementById(strKey + "img1").style.display = "inline-block";
    if (!bolAutoPlay) {
        var divPrevious = document.getElementById(strKey + "Previous");
        divPrevious.style.top = (intHeight / 2) - 11;
        divPrevious.style.left = 20;
        var divNext = document.getElementById(strKey + "Next");
        divNext.style.top = (intHeight / 2) - 11;
        divNext.style.left = intWidth - 40;
    } else {
        setTimeout(function () { FadeOut(strKey) }, objSlideShow.DisplayTime * 1000);
    }
    objSlideShow = null;
}



// END SLIDE SHOW CODE

