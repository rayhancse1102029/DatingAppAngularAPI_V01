/*!
* Ladda
* http://lab.hakim.se/ladda
* MIT licensed
*
* Copyright (C) 2014 Hakim El Hattab, http://hakim.se
*/(function(root,factory){if(typeof exports==='object'){module.exports=factory(require('spin.js'));}
else if(typeof define==='function'&&define.amd){define(['spin'],factory);}
else{root.Ladda=factory(root.Spinner);}}
(this,function(Spinner){'use strict';var ALL_INSTANCES=[];function create(button){if(typeof button==='undefined'){console.warn("Ladda button target must be defined.");return;}
if(!button.querySelector('.ladda-label')){button.innerHTML='<span class="ladda-label">'+button.innerHTML+'</span>';}
var spinner;var spinnerWrapper=document.createElement('span');spinnerWrapper.className='ladda-spinner';button.appendChild(spinnerWrapper);var timer;var instance={start:function(){if(!spinner)spinner=createSpinner(button);button.setAttribute('disabled','');button.setAttribute('data-loading','');clearTimeout(timer);spinner.spin(spinnerWrapper);this.setProgress(0);return this;},startAfter:function(delay){clearTimeout(timer);timer=setTimeout(function(){instance.start();},delay);return this;},stop:function(){button.removeAttribute('disabled');button.removeAttribute('data-loading');clearTimeout(timer);if(spinner){timer=setTimeout(function(){spinner.stop();},1000);}
return this;},toggle:function(){if(this.isLoading()){this.stop();}
else{this.start();}
return this;},setProgress:function(progress){progress=Math.max(Math.min(progress,1),0);var progressElement=button.querySelector('.ladda-progress');if(progress===0&&progressElement&&progressElement.parentNode){progressElement.parentNode.removeChild(progressElement);}
else{if(!progressElement){progressElement=document.createElement('div');progressElement.className='ladda-progress';button.appendChild(progressElement);}
progressElement.style.width=((progress||0)*button.offsetWidth)+'px';}},enable:function(){this.stop();return this;},disable:function(){this.stop();button.setAttribute('disabled','');return this;},isLoading:function(){return button.hasAttribute('data-loading');}};ALL_INSTANCES.push(instance);return instance;}
function getAncestorOfTagType(elem,type){while(elem.parentNode&&elem.tagName!==type){elem=elem.parentNode;}
return(type===elem.tagName)?elem:undefined;}
function getRequiredFields(form){var requirables=['input','textarea'];var inputs=[];for(var i=0;i<requirables.length;i++){var candidates=form.getElementsByTagName(requirables[i]);for(var j=0;j<candidates.length;j++){if(candidates[j].hasAttribute('required')){inputs.push(candidates[j]);}}}
return inputs;}
function bind(target,options){options=options||{};var targets=[];if(typeof target==='string'){targets=toArray(document.querySelectorAll(target));}
else if(typeof target==='object'&&typeof target.nodeName==='string'){targets=[target];}
for(var i=0,len=targets.length;i<len;i++){(function(){var element=targets[i];if(typeof element.addEventListener==='function'){var instance=create(element);var timeout=-1;element.addEventListener('click',function(event){var valid=true;var form=getAncestorOfTagType(element,'FORM');if(typeof form!=='undefined'){var requireds=getRequiredFields(form);for(var i=0;i<requireds.length;i++){if(requireds[i].value.replace(/^\s+|\s+$/g,'')===''){valid=false;}}}
if(valid){instance.startAfter(1);if(typeof options.timeout==='number'){clearTimeout(timeout);timeout=setTimeout(instance.stop,options.timeout);}
if(typeof options.callback==='function'){options.callback.apply(null,[instance]);}}},false);}})();}}
function stopAll(){for(var i=0,len=ALL_INSTANCES.length;i<len;i++){ALL_INSTANCES[i].stop();}}
function createSpinner(button){var height=button.offsetHeight,spinnerColor;if(height===0){height=parseFloat(window.getComputedStyle(button).height);}
if(height>32){height*=0.8;}
if(button.hasAttribute('data-spinner-size')){height=parseInt(button.getAttribute('data-spinner-size'),10);}
if(button.hasAttribute('data-spinner-color')){spinnerColor=button.getAttribute('data-spinner-color');}
var lines=12,radius=height*0.2,length=radius*0.6,width=radius<7?2:3;return new Spinner({color:spinnerColor||'#fff',lines:lines,radius:radius,length:length,width:width,zIndex:'auto',top:'auto',left:'auto',className:''});}
function toArray(nodes){var a=[];for(var i=0;i<nodes.length;i++){a.push(nodes[i]);}
return a;}
return{bind:bind,create:create,stopAll:stopAll};}));