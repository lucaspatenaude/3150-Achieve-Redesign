// everything is wrapped in the XD function to reduce namespace collisions
/* 
 * a backwards compatable implementation of postMessage
 * by Josh Fraser (joshfraser.com)
 * released under the Apache 2.0 license.
 *
 * this code was adapted from Ben Alman's jQuery postMessage code found at:
 * http://benalman.com/projects/jquery-postmessage-plugin/
 *
 * other inspiration was taken from Luke Shepard's code for Facebook Connect:
 * http://github.com/facebook/connect-js/blob/master/src/core/xd.js
 *
 * the goal of this project was to make a backwards compatable version of postMessage
 * without having any dependency on jQuery or the FB Connect libraries
 *
 * my goal was to keep this as terse as possible since my own purpose was to use this
 * as part of a distributed widget where filesize could be sensative.
 *
 */

// everything is wrapped in the XD function to reduce namespace collisions
var XD = function() {

  var interval_id,
    last_hash,
    cache_bust = 1,
    attached_callback,
    window = this;

  return {
    postMessage: function(message, target_url, target) {
      if (!target_url) {
        return;
      }
      target = target || parent; // default to parent

      if (window['postMessage']) {
        // the browser supports window.postMessage, so call it with a targetOrigin
        // set appropriately, based on the target_url parameter.
        target['postMessage'](message, target_url.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));

      } else if (target_url) {
        // the browser does not support window.postMessage, so set the location
        // of the target to target_url#message. A bit ugly, but it works! A cache
        // bust parameter is added to ensure that repeat messages trigger the callback.
        target.location = target_url.replace(/#.*$/, '') + '#' + (+new Date) + (cache_bust++) + '&' + message;
      }
    },

    receiveMessage: function(callback, source_origin) {
      // browser supports window.postMessage
      if (window['postMessage']) {
        // bind the callback to the actual event associated with window.postMessage
        if (callback) {
          attached_callback = function(e) {
            if ((typeof source_origin === 'string' && e.origin !== source_origin) || (Object.prototype.toString.call(source_origin) === "[object Function]" && source_origin(e.origin) === !1)) {
              return !1;
            }
            callback(e);
          };
        }
        if (window['addEventListener']) {
          window[callback ? 'addEventListener' : 'removeEventListener']('message', attached_callback, !1);
        } else {
          window[callback ? 'attachEvent' : 'detachEvent']('onmessage', attached_callback);
        }
      } else {
        // a polling loop is started & callback is called whenever the location.hash changes
        interval_id && clearInterval(interval_id);
        interval_id = null;

        if (callback) {
          interval_id = setInterval(function() {
            var hash = document.location.hash,
              re = /^#?\d+&/;
            if (hash !== last_hash && re.test(hash)) {
              last_hash = hash;
              callback({
                data: hash.replace(re, '')
              });
            }
          }, 100);
        }
      }
    }
  };
}();
/*! iFrame Resizer (iframeSizer.min.js ) - v2.5.2 - 2014-07-17
 *  Desc: Force cross domain iframes to size to content.
 *  Requires: iframeResizer.contentWindow.min.js to be loaded into the target frame.
 *  Copyright: (c) 2014 David J. Bradshaw - dave@bradshaw.net
 *  License: MIT
 */

!function(){"use strict";function a(a,b,c){"addEventListener"in window?a.addEventListener(b,c,!1):"attachEvent"in window&&a.attachEvent("on"+b,c)}function b(){var a,b=["moz","webkit","o","ms"];for(a=0;a<b.length&&!w;a+=1)w=window[b[a]+"RequestAnimationFrame"];w||c(" RequestAnimationFrame not supported")}function c(a){y.log&&"object"==typeof console}function d(a){function b(){function a(){h(w),f(),y.resizedCallback(w)}i(a,w,"resetPage")}function d(a){var b=a.id;c(" Removing iFrame: "+b),a.parentNode.removeChild(a),y.closedCallback(b),c(" --")}function e(){var a=v.substr(t).split(":");return{iframe:document.getElementById(a[0]),id:a[0],height:a[1],width:a[2],type:a[3]}}function j(a){var b=Number(y["max"+a]),d=Number(y["min"+a]),e=a.toLowerCase(),f=Number(w[e]);if(d>b)throw new Error("Value for min"+a+" can not be greater than max"+a);c(" Checking "+e+" is in range "+d+"-"+b),d>f&&(f=d,c(" Set "+e+" to min value")),f>b&&(f=b,c(" Set "+e+" to max value")),w[e]=""+f}function k(){var b=a.origin,d=w.iframe.src.split("/").slice(0,3).join("/");if(y.checkOrigin&&(c(" Checking connection is from: "+d),""+b!="null"&&b!==d))throw new Error("Unexpected message received from: "+b+" for "+w.iframe.id+". Message was: "+a.data+". This error can be disabled by adding the checkOrigin: false option.");return!0}function l(){return s===(""+v).substr(0,t)}function m(){var a=w.type in{"true":1,"false":1};return a&&c(" Ignoring init message from meta parent page"),a}function n(){var a=v.substr(v.indexOf(":")+r+6);c(" MessageCallback passed: {iframe: "+w.iframe.id+", message: "+a+"}"),y.messageCallback({iframe:w.iframe,message:a}),c(" --")}function o(){if(null===w.iframe)throw new Error("iFrame ("+w.id+") does not exist on "+u);return!0}function q(){switch(w.type){case"close":d(w.iframe),y.resizedCallback(w);break;case"message":n();break;case"scrollTo":crollRequestFromChild();break;case"reset":g(w);break;case"init":b(),y.initCallback(w.iframe);break;default:b()}}var v=a.data,w={};l()&&(c(" Received: "+v),w=e(),j("Height"),j("Width"),!m()&&o()&&k()&&(q(),p=!1))}function e(){null===v&&(v={x:void 0!==window.pageXOffset?window.pageXOffset:document.documentElement.scrollLeft,y:void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop},c(" Get position: "+v.x+","+v.y))}function f(){null!==v&&(window.scrollTo(v.x,v.y),c(" Set position: "+v.x+","+v.y),v=null)}function g(a){function b(){h(a),j("reset","reset",a.iframe)}c(" Size reset requested by "+("init"===a.type?"host page":"iFrame")),e(),i(b,a,"init")}function h(a){function b(b){a.iframe.style[b]=a[b]+"px",c(" IFrame ("+a.iframe.id+") "+b+" set to "+a[b]+"px")}y.sizeHeight&&b("height"),y.sizeWidth&&b("width")}function i(a,b,d){d!==b.type&&w?(c(" Requesting animation frame"),w(a)):a()}function j(a,b,d){c("["+a+"] Sending msg to iframe ("+b+")"),d.contentWindow.postMessage(s+b,"*")}function k(){function b(){function a(a){1/0!==y[a]&&0!==y[a]&&(k.style[a]=y[a]+"px",c(" Set "+a+" = "+y[a]+"px"))}a("maxHeight"),a("minHeight"),a("maxWidth"),a("minWidth")}function d(a){return""===a&&(k.id=a="iFrameResizer"+o++,c(" Added missing iframe ID: "+a+" ("+k.src+")")),a}function e(){c(" IFrame scrolling "+(y.scrolling?"enabled":"disabled")+" for "+l),k.style.overflow=!1===y.scrolling?"hidden":"auto",k.scrolling=!1===y.scrolling?"no":"yes"}function f(){("number"==typeof y.bodyMargin||"0"===y.bodyMargin)&&(y.bodyMarginV1=y.bodyMargin,y.bodyMargin=""+y.bodyMargin+"px")}function h(){return l+":"+y.bodyMarginV1+":"+y.sizeWidth+":"+y.log+":"+y.interval+":"+y.enablePublicMethods+":"+y.autoResize+":"+y.bodyMargin+":"+y.heightCalculationMethod+":"+y.bodyBackground+":"+y.bodyPadding+":"+y.tolerance}function i(b){a(k,"load",function(){var a=p;j("iFrame.onload",b,k),!a&&y.heightCalculationMethod in x&&g({iframe:k,height:0,width:0,type:"init"})}),j("init",b,k)}var k=this,l=d(k.id);e(),b(),f(),i(h())}function l(a){if("object"!=typeof a)throw new TypeError("Options is not an object.")}function m(){function a(a){if("IFRAME"!==a.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+a.tagName+">.");k.call(a)}function b(a){a=a||{},l(a);for(var b in z)z.hasOwnProperty(b)&&(y[b]=a.hasOwnProperty(b)?a[b]:z[b])}return function(c,d){b(c),Array.prototype.forEach.call(document.querySelectorAll(d||"iframe"),a)}}function n(a){a.fn.iFrameResize=function(b){return l(b),y=a.extend({},z,b),this.filter("iframe").each(k).end()}}var o=0,p=!0,q="message",r=q.length,s="[iFrameSizer]",t=s.length,u="",v=null,w=window.requestAnimationFrame,x={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},y={},z={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,enablePublicMethods:!1,heightCalculationMethod:"offset",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,scrolling:!1,sizeHeight:!0,sizeWidth:!1,tolerance:0,closedCallback:function(){},initCallback:function(){},messageCallback:function(){},resizedCallback:function(){}};b(),a(window,"message",d),"jQuery"in window&&n(jQuery),"function"==typeof define&&define.amd?define(function(){return m()}):window.iFrameResize=m()}();

var LGLFormFrameArgs = {};

function LGLFormFrame(formId, initialHeight, formPrefix) {
  this.formId = formId;
  this.initialHeight = initialHeight;
  this.formPrefix = formPrefix;
  this.frame = null;
  this.frameId = 'frame-'+this.formId
  this.load_count = 0

  this.init = function() {
    this.createFormFrame();
    this.setupMessaging();
  };

  this.createFormFrame = function() {
    document.write('<div id="' + this.formId + '-top"></div>');
    document.write('<iframe id="'+this.frameId+'" height="'+this.initialHeight+'" allowTransparency="true" allow="payment" frameborder="0" scrolling="no" style="width:100%;border:none"><a href="'+this.formPrefix+'/s/'+this.formId+'">Fill out my LGL form!</a></iframe>');

    this.frame = document.getElementById(this.frameId);

  };

  this.setupMessaging = function() {
    src = this.formPrefix+'/s/'+this.formId+'?origin=' + encodeURIComponent(document.location.href);
    this.frame.src = src;    
    var self = this;

    this.frame.onload = function() {
      // XD.postMessage('update_height', src, self.frame.contentWindow);
      // window.scroll(0,0)
      self.load_count ++;
      if (self.load_count > 1) {
        self.returnToTop();
      }
    }
    // setup a callback to handle the dispatched MessageEvent. if window.postMessage is supported the passed
    // event will have .data, .origin and .source properties. otherwise, it will only have the .data property.
    XD.receiveMessage(function(message){
      if (message.data == "returnToTop") {
        self.returnToTop();
      } else {
        self.resizeFrame(message.data);
      }
    }, src.replace(/([^:]+:\/\/[^\/]+).*/, '$1'));
  }

  this.returnToTop = function() {
    //window.scrollTo(0,this.frame.offsetTop);
    document.getElementById(this.formId + '-top').scrollIntoView();
  }

  this.resizeFrame = function(height){
    this.frame.height= (height);
  }

  this.init();
}

var formFrame_HO1dkV6CKRtnRPSN71yo6Q = new LGLFormFrame("HO1dkV6CKRtnRPSN71yo6Q", 994, "https://secure.lglforms.com/form_engine");

iFrameResize();
