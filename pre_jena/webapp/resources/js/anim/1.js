/*
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{};(function(){var c=function(){throw"UID cannot be instantiated";};c._nextID=0;c.get=function(){return c._nextID++};createjs.UID=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Ticker cannot be instantiated.";};c.useRAF=null;c._listeners=null;c._pauseable=null;c._paused=false;c._inited=false;c._startTime=0;c._pausedTime=0;c._ticks=0;c._pausedTicks=0;c._interval=50;c._lastTime=0;c._times=null;c._tickTimes=null;c._rafActive=false;c._timeoutID=null;c.addListener=function(a,l){a!=null&&(c._inited||c.init(),c.removeListener(a),c._pauseable[c._listeners.length]=l==null?true:l,c._listeners.push(a))};c.init=function(){c._inited=true;c._times=[];
c._tickTimes=[];c._pauseable=[];c._listeners=[];c._times.push(c._lastTime=c._startTime=c._getTime());c.setInterval(c._interval)};c.removeListener=function(a){var l=c._listeners;l&&(a=l.indexOf(a),a!=-1&&(l.splice(a,1),c._pauseable.splice(a,1)))};c.removeAllListeners=function(){c._listeners=[];c._pauseable=[]};c.setInterval=function(a){c._interval=a;c._inited&&c._setupTick()};c.getInterval=function(){return c._interval};c.setFPS=function(a){c.setInterval(1E3/a)};c.getFPS=function(){return 1E3/c._interval};
c.getMeasuredFPS=function(a){if(c._times.length<2)return-1;a==null&&(a=c.getFPS()|0);a=Math.min(c._times.length-1,a);return 1E3/((c._times[0]-c._times[a])/a)};c.setPaused=function(a){c._paused=a};c.getPaused=function(){return c._paused};c.getTime=function(a){return c._getTime()-c._startTime-(a?c._pausedTime:0)};c.getTicks=function(a){return c._ticks-(a?c._pausedTicks:0)};c._handleAF=function(){c._rafActive=false;c._setupTick();c._getTime()-c._lastTime>=(c._interval-1)*0.97&&c._tick()};c._handleTimeout=
function(){c.timeoutID=null;c._setupTick();c._tick()};c._setupTick=function(){if(!(c._rafActive||c.timeoutID!=null)){if(c.useRAF){var a=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;if(a){a(c._handleAF);c._rafActive=true;return}}c.timeoutID=setTimeout(c._handleTimeout,c._interval)}};c._tick=function(){var a=c._getTime();c._ticks++;var l=a-c._lastTime,b=c._paused;b&&(c._pausedTicks++,
c._pausedTime+=l);c._lastTime=a;for(var d=c._pauseable,e=c._listeners.slice(),f=e?e.length:0,g=0;g<f;g++){var i=e[g];i==null||b&&d[g]||(i.tick?i.tick(l,b):i instanceof Function&&i(l,b))}for(c._tickTimes.unshift(c._getTime()-a);c._tickTimes.length>100;)c._tickTimes.pop();for(c._times.unshift(a);c._times.length>100;)c._times.pop()};var b=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow);c._getTime=function(){return b&&b.call(performance)||
(new Date).getTime()};createjs.Ticker=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,l,b,d,e,c,g,i,j){this.initialize(a,l,b,d,e,c,g,i,j)},b=c.prototype;b.stageX=0;b.stageY=0;b.rawX=0;b.rawY=0;b.type=null;b.nativeEvent=null;b.onMouseMove=null;b.onMouseUp=null;b.target=null;b.pointerID=0;b.primary=false;b.initialize=function(a,l,b,d,e,c,g,i,j){this.type=a;this.stageX=l;this.stageY=b;this.target=d;this.nativeEvent=e;this.pointerID=c;this.primary=g;this.rawX=i==null?l:i;this.rawY=j==null?b:j};b.clone=function(){return new c(this.type,this.stageX,this.stageY,
this.target,this.nativeEvent,this.pointerID,this.primary,this.rawX,this.rawY)};b.toString=function(){return"[MouseEvent (type="+this.type+" stageX="+this.stageX+" stageY="+this.stageY+")]"};createjs.MouseEvent=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,l,b,d,e,c){this.initialize(a,l,b,d,e,c)},b=c.prototype;c.identity=null;c.DEG_TO_RAD=Math.PI/180;b.a=1;b.b=0;b.c=0;b.d=1;b.tx=0;b.ty=0;b.alpha=1;b.shadow=null;b.compositeOperation=null;b.initialize=function(a,l,b,d,e,c){if(a!=null)this.a=a;this.b=l||0;this.c=b||0;if(d!=null)this.d=d;this.tx=e||0;this.ty=c||0;return this};b.prepend=function(a,l,b,d,e,c){var g=this.tx;if(a!=1||l!=0||b!=0||d!=1){var i=this.a,j=this.c;this.a=i*a+this.b*b;this.b=i*l+this.b*d;this.c=j*a+this.d*
b;this.d=j*l+this.d*d}this.tx=g*a+this.ty*b+e;this.ty=g*l+this.ty*d+c;return this};b.append=function(a,l,b,d,e,c){var g=this.a,i=this.b,j=this.c,k=this.d;this.a=a*g+l*j;this.b=a*i+l*k;this.c=b*g+d*j;this.d=b*i+d*k;this.tx=e*g+c*j+this.tx;this.ty=e*i+c*k+this.ty;return this};b.prependMatrix=function(a){this.prepend(a.a,a.b,a.c,a.d,a.tx,a.ty);this.prependProperties(a.alpha,a.shadow,a.compositeOperation);return this};b.appendMatrix=function(a){this.append(a.a,a.b,a.c,a.d,a.tx,a.ty);this.appendProperties(a.alpha,
a.shadow,a.compositeOperation);return this};b.prependTransform=function(a,l,b,d,e,f,g,i,j){if(e%360)var k=e*c.DEG_TO_RAD,e=Math.cos(k),k=Math.sin(k);else e=1,k=0;if(i||j)this.tx-=i,this.ty-=j;f||g?(f*=c.DEG_TO_RAD,g*=c.DEG_TO_RAD,this.prepend(e*b,k*b,-k*d,e*d,0,0),this.prepend(Math.cos(g),Math.sin(g),-Math.sin(f),Math.cos(f),a,l)):this.prepend(e*b,k*b,-k*d,e*d,a,l);return this};b.appendTransform=function(a,l,b,d,e,f,g,i,j){if(e%360)var k=e*c.DEG_TO_RAD,e=Math.cos(k),k=Math.sin(k);else e=1,k=0;f||
g?(f*=c.DEG_TO_RAD,g*=c.DEG_TO_RAD,this.append(Math.cos(g),Math.sin(g),-Math.sin(f),Math.cos(f),a,l),this.append(e*b,k*b,-k*d,e*d,0,0)):this.append(e*b,k*b,-k*d,e*d,a,l);if(i||j)this.tx-=i*this.a+j*this.c,this.ty-=i*this.b+j*this.d;return this};b.rotate=function(a){var l=Math.cos(a),a=Math.sin(a),b=this.a,d=this.c,c=this.tx;this.a=b*l-this.b*a;this.b=b*a+this.b*l;this.c=d*l-this.d*a;this.d=d*a+this.d*l;this.tx=c*l-this.ty*a;this.ty=c*a+this.ty*l;return this};b.skew=function(a,l){a*=c.DEG_TO_RAD;l*=
c.DEG_TO_RAD;this.append(Math.cos(l),Math.sin(l),-Math.sin(a),Math.cos(a),0,0);return this};b.scale=function(a,l){this.a*=a;this.d*=l;this.tx*=a;this.ty*=l;return this};b.translate=function(a,l){this.tx+=a;this.ty+=l;return this};b.identity=function(){this.alpha=this.a=this.d=1;this.b=this.c=this.tx=this.ty=0;this.shadow=this.compositeOperation=null;return this};b.invert=function(){var a=this.a,l=this.b,b=this.c,d=this.d,c=this.tx,f=a*d-l*b;this.a=d/f;this.b=-l/f;this.c=-b/f;this.d=a/f;this.tx=(b*
this.ty-d*c)/f;this.ty=-(a*this.ty-l*c)/f;return this};b.isIdentity=function(){return this.tx==0&&this.ty==0&&this.a==1&&this.b==0&&this.c==0&&this.d==1};b.decompose=function(a){a==null&&(a={});a.x=this.tx;a.y=this.ty;a.scaleX=Math.sqrt(this.a*this.a+this.b*this.b);a.scaleY=Math.sqrt(this.c*this.c+this.d*this.d);var b=Math.atan2(-this.c,this.d),h=Math.atan2(this.b,this.a);b==h?(a.rotation=h/c.DEG_TO_RAD,this.a<0&&this.d>=0&&(a.rotation+=a.rotation<=0?180:-180),a.skewX=a.skewY=0):(a.skewX=b/c.DEG_TO_RAD,
a.skewY=h/c.DEG_TO_RAD);return a};b.reinitialize=function(a,b,h,d,c,f,g,i,j){this.initialize(a,b,h,d,c,f);this.alpha=g||1;this.shadow=i;this.compositeOperation=j;return this};b.appendProperties=function(a,b,h){this.alpha*=a;this.shadow=b||this.shadow;this.compositeOperation=h||this.compositeOperation;return this};b.prependProperties=function(a,b,h){this.alpha*=a;this.shadow=this.shadow||b;this.compositeOperation=this.compositeOperation||h;return this};b.clone=function(){var a=new c(this.a,this.b,
this.c,this.d,this.tx,this.ty);a.shadow=this.shadow;a.alpha=this.alpha;a.compositeOperation=this.compositeOperation;return a};b.toString=function(){return"[Matrix2D (a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+")]"};c.identity=new c(1,0,0,1,0,0);createjs.Matrix2D=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b){this.initialize(a,b)},b=c.prototype;b.x=0;b.y=0;b.initialize=function(a,b){this.x=a==null?0:a;this.y=b==null?0:b};b.clone=function(){return new c(this.x,this.y)};b.toString=function(){return"[Point (x="+this.x+" y="+this.y+")]"};createjs.Point=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,h,d){this.initialize(a,b,h,d)},b=c.prototype;b.x=0;b.y=0;b.width=0;b.height=0;b.initialize=function(a,b,h,d){this.x=a==null?0:a;this.y=b==null?0:b;this.width=h==null?0:h;this.height=d==null?0:d};b.clone=function(){return new c(this.x,this.y,this.width,this.height)};b.toString=function(){return"[Rectangle (x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+")]"};createjs.Rectangle=c})();this.createjs=this.createjs||{};(function(){var c=function(a,b,h,d){this.initialize(a,b,h,d)},b=c.prototype;c.identity=null;b.color=null;b.offsetX=0;b.offsetY=0;b.blur=0;b.initialize=function(a,b,h,d){this.color=a;this.offsetX=b;this.offsetY=h;this.blur=d};b.toString=function(){return"[Shadow]"};b.clone=function(){return new c(this.color,this.offsetX,this.offsetY,this.blur)};c.identity=new c("transparent",0,0,0);createjs.Shadow=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype;b.complete=true;b.onComplete=null;b._animations=null;b._frames=null;b._images=null;b._data=null;b._loadCount=0;b._frameHeight=0;b._frameWidth=0;b._numFrames=0;b._regX=0;b._regY=0;b.initialize=function(a){var b,h,d;if(a!=null){if(a.images&&(h=a.images.length)>0){d=this._images=[];for(b=0;b<h;b++){var c=a.images[b];if(typeof c=="string"){var f=c,c=new Image;c.src=f}d.push(c);if(!c.getContext&&!c.complete)this._loadCount++,this.complete=
false,function(a){c.onload=function(){a._handleImageLoad()}}(this)}}if(a.frames!=null)if(a.frames instanceof Array){this._frames=[];d=a.frames;for(b=0,h=d.length;b<h;b++)f=d[b],this._frames.push({image:this._images[f[4]?f[4]:0],rect:new createjs.Rectangle(f[0],f[1],f[2],f[3]),regX:f[5]||0,regY:f[6]||0})}else h=a.frames,this._frameWidth=h.width,this._frameHeight=h.height,this._regX=h.regX||0,this._regY=h.regY||0,this._numFrames=h.count,this._loadCount==0&&this._calculateFrames();if((h=a.animations)!=
null){this._animations=[];this._data={};for(var g in h){a={name:g};f=h[g];if(isNaN(f))if(f instanceof Array){a.frequency=f[3];a.next=f[2];d=a.frames=[];for(b=f[0];b<=f[1];b++)d.push(b)}else a.frequency=f.frequency,a.next=f.next,b=f.frames,d=a.frames=!isNaN(b)?[b]:b.slice(0);else d=a.frames=[f];a.next=d.length<2||a.next==false?null:a.next==null||a.next==true?g:a.next;if(!a.frequency)a.frequency=1;this._animations.push(g);this._data[g]=a}}}};b.getNumFrames=function(a){return a==null?this._frames?this._frames.length:
this._numFrames:(a=this._data[a],a==null?0:a.frames.length)};b.getAnimations=function(){return this._animations.slice(0)};b.getAnimation=function(a){return this._data[a]};b.getFrame=function(a){return this.complete&&this._frames&&(frame=this._frames[a])?frame:null};b.toString=function(){return"[SpriteSheet]"};b.clone=function(){var a=new c;a.complete=this.complete;a._animations=this._animations;a._frames=this._frames;a._images=this._images;a._data=this._data;a._frameHeight=this._frameHeight;a._frameWidth=
this._frameWidth;a._numFrames=this._numFrames;a._loadCount=this._loadCount;return a};b._handleImageLoad=function(){if(--this._loadCount==0)this._calculateFrames(),this.complete=true,this.onComplete&&this.onComplete()};b._calculateFrames=function(){if(!(this._frames||this._frameWidth==0)){this._frames=[];for(var a=0,b=this._frameWidth,h=this._frameHeight,d=0,c=this._images;d<c.length;d++){for(var f=c[d],g=(f.width+1)/b|0,i=(f.height+1)/h|0,i=this._numFrames>0?Math.min(this._numFrames-a,g*i):g*i,j=
0;j<i;j++)this._frames.push({image:f,rect:new createjs.Rectangle(j%g*b,(j/g|0)*h,b,h),regX:this._regX,regY:this._regY});a+=i}this._numFrames=a}};createjs.SpriteSheet=c})();this.createjs=this.createjs||{};
(function(){function c(a,b,d){this.f=a;this.params=b;this.path=d==null?true:d}c.prototype.exec=function(a){this.f.apply(a,this.params)};var b=function(){this.initialize()},a=b.prototype;b.getRGB=function(a,b,d,c){a!=null&&d==null&&(c=b,d=a&255,b=a>>8&255,a=a>>16&255);return c==null?"rgb("+a+","+b+","+d+")":"rgba("+a+","+b+","+d+","+c+")"};b.getHSL=function(a,b,c,e){return e==null?"hsl("+a%360+","+b+"%,"+c+"%)":"hsla("+a%360+","+b+"%,"+c+"%,"+e+")"};b.BASE_64={A:0,B:1,C:2,D:3,E:4,F:5,G:6,H:7,I:8,J:9,
K:10,L:11,M:12,N:13,O:14,P:15,Q:16,R:17,S:18,T:19,U:20,V:21,W:22,X:23,Y:24,Z:25,a:26,b:27,c:28,d:29,e:30,f:31,g:32,h:33,i:34,j:35,k:36,l:37,m:38,n:39,o:40,p:41,q:42,r:43,s:44,t:45,u:46,v:47,w:48,x:49,y:50,z:51,0:52,1:53,2:54,3:55,4:56,5:57,6:58,7:59,8:60,9:61,"+":62,"/":63};b.STROKE_CAPS_MAP=["butt","round","square"];b.STROKE_JOINTS_MAP=["miter","round","bevel"];b._ctx=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.beginCmd=new c(b._ctx.beginPath,
[],false);b.fillCmd=new c(b._ctx.fill,[],false);b.strokeCmd=new c(b._ctx.stroke,[],false);a._strokeInstructions=null;a._strokeStyleInstructions=null;a._fillInstructions=null;a._instructions=null;a._oldInstructions=null;a._activeInstructions=null;a._active=false;a._dirty=false;a.initialize=function(){this.clear();this._ctx=b._ctx};a.draw=function(a){this._dirty&&this._updateInstructions();for(var b=this._instructions,c=0,e=b.length;c<e;c++)b[c].exec(a)};a.drawAsPath=function(a){this._dirty&&this._updateInstructions();
for(var b,c=this._instructions,e=0,f=c.length;e<f;e++)((b=c[e]).path||e==0)&&b.exec(a)};a.moveTo=function(a,b){this._activeInstructions.push(new c(this._ctx.moveTo,[a,b]));return this};a.lineTo=function(a,b){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.lineTo,[a,b]));return this};a.arcTo=function(a,b,d,e,f){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.arcTo,[a,b,d,e,f]));return this};a.arc=function(a,b,d,e,f,g){this._dirty=this._active=
true;g==null&&(g=false);this._activeInstructions.push(new c(this._ctx.arc,[a,b,d,e,f,g]));return this};a.quadraticCurveTo=function(a,b,d,e){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.quadraticCurveTo,[a,b,d,e]));return this};a.bezierCurveTo=function(a,b,d,e,f,g){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.bezierCurveTo,[a,b,d,e,f,g]));return this};a.rect=function(a,b,d,e){this._dirty=this._active=true;this._activeInstructions.push(new c(this._ctx.rect,
[a,b,d,e]));return this};a.closePath=function(){if(this._active)this._dirty=true,this._activeInstructions.push(new c(this._ctx.closePath,[]));return this};a.clear=function(){this._instructions=[];this._oldInstructions=[];this._activeInstructions=[];this._strokeStyleInstructions=this._strokeInstructions=this._fillInstructions=null;this._active=this._dirty=false;return this};a.beginFill=function(a){this._active&&this._newPath();this._fillInstructions=a?[new c(this._setProp,["fillStyle",a],false)]:null;
return this};a.beginLinearGradientFill=function(a,b,d,e,f,g){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,g);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",d],false)];return this};a.beginRadialGradientFill=function(a,b,d,e,f,g,i,j){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,g,i,j);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._fillInstructions=[new c(this._setProp,["fillStyle",
d],false)];return this};a.beginBitmapFill=function(a,b){this._active&&this._newPath();var d=this._ctx.createPattern(a,b||"");this._fillInstructions=[new c(this._setProp,["fillStyle",d],false)];return this};a.endFill=function(){return this.beginFill()};a.setStrokeStyle=function(a,h,d,e){this._active&&this._newPath();this._strokeStyleInstructions=[new c(this._setProp,["lineWidth",a==null?"1":a],false),new c(this._setProp,["lineCap",h==null?"butt":isNaN(h)?h:b.STROKE_CAPS_MAP[h]],false),new c(this._setProp,
["lineJoin",d==null?"miter":isNaN(d)?d:b.STROKE_JOINTS_MAP[d]],false),new c(this._setProp,["miterLimit",e==null?"10":e],false)];return this};a.beginStroke=function(a){this._active&&this._newPath();this._strokeInstructions=a?[new c(this._setProp,["strokeStyle",a],false)]:null;return this};a.beginLinearGradientStroke=function(a,b,d,e,f,g){this._active&&this._newPath();d=this._ctx.createLinearGradient(d,e,f,g);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=[new c(this._setProp,
["strokeStyle",d],false)];return this};a.beginRadialGradientStroke=function(a,b,d,e,f,g,i,j){this._active&&this._newPath();d=this._ctx.createRadialGradient(d,e,f,g,i,j);e=0;for(f=a.length;e<f;e++)d.addColorStop(b[e],a[e]);this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],false)];return this};a.beginBitmapStroke=function(a,b){this._active&&this._newPath();var d=this._ctx.createPattern(a,b||"");this._strokeInstructions=[new c(this._setProp,["strokeStyle",d],false)];return this};a.endStroke=
function(){this.beginStroke();return this};a.curveTo=a.quadraticCurveTo;a.drawRect=a.rect;a.drawRoundRect=function(a,b,c,e,f){this.drawRoundRectComplex(a,b,c,e,f,f,f,f);return this};a.drawRoundRectComplex=function(a,b,d,e,f,g,i,j){var k=(d<e?d:e)/2,m=0,o=0,n=0,q=0;f<0&&(f*=m=-1);f>k&&(f=k);g<0&&(g*=o=-1);g>k&&(g=k);i<0&&(i*=n=-1);i>k&&(i=k);j<0&&(j*=q=-1);j>k&&(j=k);this._dirty=this._active=true;var k=this._ctx.arcTo,p=this._ctx.lineTo;this._activeInstructions.push(new c(this._ctx.moveTo,[a+d-g,b]),
new c(k,[a+d+g*o,b-g*o,a+d,b+g,g]),new c(p,[a+d,b+e-i]),new c(k,[a+d+i*n,b+e+i*n,a+d-i,b+e,i]),new c(p,[a+j,b+e]),new c(k,[a-j*q,b+e+j*q,a,b+e-j,j]),new c(p,[a,b+f]),new c(k,[a-f*m,b-f*m,a+f,b,f]),new c(this._ctx.closePath));return this};a.drawCircle=function(a,b,c){this.arc(a,b,c,0,Math.PI*2);return this};a.drawEllipse=function(a,b,d,e){this._dirty=this._active=true;var f=d/2*0.5522848,g=e/2*0.5522848,i=a+d,j=b+e,d=a+d/2,e=b+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[a,e]),new c(this._ctx.bezierCurveTo,
[a,e-g,d-f,b,d,b]),new c(this._ctx.bezierCurveTo,[d+f,b,i,e-g,i,e]),new c(this._ctx.bezierCurveTo,[i,e+g,d+f,j,d,j]),new c(this._ctx.bezierCurveTo,[d-f,j,a,e+g,a,e]));return this};a.drawPolyStar=function(a,b,d,e,f,g){this._dirty=this._active=true;f==null&&(f=0);f=1-f;g==null?g=0:g/=180/Math.PI;var i=Math.PI/e;this._activeInstructions.push(new c(this._ctx.moveTo,[a+Math.cos(g)*d,b+Math.sin(g)*d]));for(var j=0;j<e;j++)g+=i,f!=1&&this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(g)*d*
f,b+Math.sin(g)*d*f])),g+=i,this._activeInstructions.push(new c(this._ctx.lineTo,[a+Math.cos(g)*d,b+Math.sin(g)*d]));return this};a.decodePath=function(a){for(var c=[this.moveTo,this.lineTo,this.quadraticCurveTo,this.bezierCurveTo],d=[2,2,4,6],e=0,f=a.length,g=[],i=0,j=0,k=b.BASE_64;e<f;){var m=a.charAt(e),o=k[m],n=o>>3,q=c[n];if(!q||o&3)throw"bad path data (@"+e+"): "+m;m=d[n];n||(i=j=0);g.length=0;e++;o=(o>>2&1)+2;for(n=0;n<m;n++){var p=k[a.charAt(e)],s=p>>5?-1:1,p=(p&31)<<6|k[a.charAt(e+1)];o==
3&&(p=p<<6|k[a.charAt(e+2)]);p=s*p/10;n%2?i=p+=i:j=p+=j;g[n]=p;e+=o}q.apply(this,g)}return this};a.clone=function(){var a=new b;a._instructions=this._instructions.slice();a._activeInstructions=this._activeInstructions.slice();a._oldInstructions=this._oldInstructions.slice();if(this._fillInstructions)a._fillInstructions=this._fillInstructions.slice();if(this._strokeInstructions)a._strokeInstructions=this._strokeInstructions.slice();if(this._strokeStyleInstructions)a._strokeStyleInstructions=this._strokeStyleInstructions.slice();
a._active=this._active;a._dirty=this._dirty;a.drawAsPath=this.drawAsPath;return a};a.toString=function(){return"[Graphics]"};a.mt=a.moveTo;a.lt=a.lineTo;a.at=a.arcTo;a.bt=a.bezierCurveTo;a.qt=a.quadraticCurveTo;a.a=a.arc;a.r=a.rect;a.cp=a.closePath;a.c=a.clear;a.f=a.beginFill;a.lf=a.beginLinearGradientFill;a.rf=a.beginRadialGradientFill;a.bf=a.beginBitmapFill;a.ef=a.endFill;a.ss=a.setStrokeStyle;a.s=a.beginStroke;a.ls=a.beginLinearGradientStroke;a.rs=a.beginRadialGradientStroke;a.bs=a.beginBitmapStroke;
a.es=a.endStroke;a.dr=a.drawRect;a.rr=a.drawRoundRect;a.rc=a.drawRoundRectComplex;a.dc=a.drawCircle;a.de=a.drawEllipse;a.dp=a.drawPolyStar;a.p=a.decodePath;a._updateInstructions=function(){this._instructions=this._oldInstructions.slice();this._instructions.push(b.beginCmd);this._fillInstructions&&this._instructions.push.apply(this._instructions,this._fillInstructions);this._strokeInstructions&&(this._instructions.push.apply(this._instructions,this._strokeInstructions),this._strokeStyleInstructions&&
this._instructions.push.apply(this._instructions,this._strokeStyleInstructions));this._instructions.push.apply(this._instructions,this._activeInstructions);this._fillInstructions&&this._instructions.push(b.fillCmd);this._strokeInstructions&&this._instructions.push(b.strokeCmd)};a._getEllipseArc=function(a,b,d,e){var f=d/2*0.5522848,g=e/2*0.5522848,i=a+d,j=b+e,d=a+d/2,e=b+e/2;this._activeInstructions.push(new c(this._ctx.moveTo,[a,e]),new c(this._ctx.bezierCurveTo,[a,e-g,d-f,b,d,b]),new c(this._ctx.bezierCurveTo,
[d+f,b,i,e-g,i,e]),new c(this._ctx.bezierCurveTo,[i,e+g,d+f,j,d,j]),new c(this._ctx.bezierCurveTo,[d-f,j,a,e+g,a,e]));return this};a._newPath=function(){this._dirty&&this._updateInstructions();this._oldInstructions=this._instructions;this._activeInstructions=[];this._active=this._dirty=false};a._setProp=function(a,b){this[a]=b};createjs.Graphics=b})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.suppressCrossDomainErrors=false;c._hitTestCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._hitTestCanvas.width=c._hitTestCanvas.height=1;c._hitTestContext=c._hitTestCanvas.getContext("2d");c._nextCacheID=1;b.alpha=1;b.cacheCanvas=null;b.id=-1;b.mouseEnabled=true;b.name=null;b.parent=null;b.regX=0;b.regY=0;b.rotation=0;b.scaleX=1;b.scaleY=1;b.skewX=0;b.skewY=0;b.shadow=null;b.visible=true;b.x=0;
b.y=0;b.compositeOperation=null;b.snapToPixel=false;b.onPress=null;b.onClick=null;b.onDoubleClick=null;b.onMouseOver=null;b.onMouseOut=null;b.onTick=null;b.filters=null;b.cacheID=0;b.mask=null;b.hitArea=null;b._cacheOffsetX=0;b._cacheOffsetY=0;b._cacheScale=1;b._cacheDataURLID=0;b._cacheDataURL=null;b._matrix=null;b.initialize=function(){this.id=createjs.UID.get();this._matrix=new createjs.Matrix2D};b.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0};b.draw=function(a,
b){var c=this.cacheCanvas;if(b||!c)return false;var d=this._cacheScale;a.drawImage(c,this._cacheOffsetX,this._cacheOffsetY,c.width/d,c.height/d);return true};b.updateContext=function(a){var b,c=this.mask;c&&c.graphics&&(b=c.getMatrix(c._matrix),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty),c.graphics.drawAsPath(a),a.clip(),b.invert(),a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty));b=this._matrix.identity().appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY);
createjs.Stage._snapToPixelEnabled&&this.snapToPixel?a.transform(b.a,b.b,b.c,b.d,b.tx+0.5|0,b.ty+0.5|0):a.transform(b.a,b.b,b.c,b.d,b.tx,b.ty);a.globalAlpha*=this.alpha;if(this.compositeOperation)a.globalCompositeOperation=this.compositeOperation;this.shadow&&this._applyShadow(a,this.shadow)};b.cache=function(a,b,c,d,e){e=e||1;if(!this.cacheCanvas)this.cacheCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");this.cacheCanvas.width=Math.ceil(c*e);this.cacheCanvas.height=
Math.ceil(d*e);this._cacheOffsetX=a;this._cacheOffsetY=b;this._cacheScale=e||1;this.updateCache()};b.updateCache=function(a){var b=this.cacheCanvas,h=this._cacheOffsetX,d=this._cacheOffsetY,e=this._cacheScale;if(!b)throw"cache() must be called before updateCache()";var f=b.getContext("2d");f.save();a||f.clearRect(0,0,b.width,b.height);f.globalCompositeOperation=a;f.setTransform(e,0,0,e,-h,-d);this.draw(f,true);this._applyFilters();f.restore();this.cacheID=c._nextCacheID++};b.uncache=function(){this._cacheDataURL=
this.cacheCanvas=null;this.cacheID=this._cacheOffsetX=this._cacheOffsetY=0;this._cacheScale=1};b.getCacheDataURL=function(){if(!this.cacheCanvas)return null;if(this.cacheID!=this._cacheDataURLID)this._cacheDataURL=this.cacheCanvas.toDataURL();return this._cacheDataURL};b.getStage=function(){for(var a=this;a.parent;)a=a.parent;return a instanceof createjs.Stage?a:null};b.localToGlobal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(c==null)return null;c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,
c.ty)};b.globalToLocal=function(a,b){var c=this.getConcatenatedMatrix(this._matrix);if(c==null)return null;c.invert();c.append(1,0,0,1,a,b);return new createjs.Point(c.tx,c.ty)};b.localToLocal=function(a,b,c){a=this.localToGlobal(a,b);return c.globalToLocal(a.x,a.y)};b.setTransform=function(a,b,c,d,e,f,g,i,j){this.x=a||0;this.y=b||0;this.scaleX=c==null?1:c;this.scaleY=d==null?1:d;this.rotation=e||0;this.skewX=f||0;this.skewY=g||0;this.regX=i||0;this.regY=j||0;return this};b.getMatrix=function(a){return(a?
a.identity():new createjs.Matrix2D).appendTransform(this.x,this.y,this.scaleX,this.scaleY,this.rotation,this.skewX,this.skewY,this.regX,this.regY).appendProperties(this.alpha,this.shadow,this.compositeOperation)};b.getConcatenatedMatrix=function(a){a?a.identity():a=new createjs.Matrix2D;for(var b=this;b!=null;)a.prependTransform(b.x,b.y,b.scaleX,b.scaleY,b.rotation,b.skewX,b.skewY,b.regX,b.regY).prependProperties(b.alpha,b.shadow,b.compositeOperation),b=b.parent;return a};b.hitTest=function(a,b){var h=
c._hitTestContext,d=c._hitTestCanvas;h.setTransform(1,0,0,1,-a,-b);this.draw(h);h=this._testHit(h);d.width=0;d.width=1;return h};b.clone=function(){var a=new c;this.cloneProps(a);return a};b.toString=function(){return"[DisplayObject (name="+this.name+")]"};b.cloneProps=function(a){a.alpha=this.alpha;a.name=this.name;a.regX=this.regX;a.regY=this.regY;a.rotation=this.rotation;a.scaleX=this.scaleX;a.scaleY=this.scaleY;a.shadow=this.shadow;a.skewX=this.skewX;a.skewY=this.skewY;a.visible=this.visible;
a.x=this.x;a.y=this.y;a.mouseEnabled=this.mouseEnabled;a.compositeOperation=this.compositeOperation;if(this.cacheCanvas)a.cacheCanvas=this.cacheCanvas.cloneNode(true),a.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0,0,this.cacheCanvas.width,this.cacheCanvas.height),0,0)};b._applyShadow=function(a,b){b=b||Shadow.identity;a.shadowColor=b.color;a.shadowOffsetX=b.offsetX;a.shadowOffsetY=b.offsetY;a.shadowBlur=b.blur};b._tick=function(a){if(this.onTick)if(a)this.onTick.apply(this,
a);else this.onTick()};b._testHit=function(a){try{var b=a.getImageData(0,0,1,1).data[3]>1}catch(h){if(!c.suppressCrossDomainErrors)throw"An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";}return b};b._applyFilters=function(){if(this.filters&&this.filters.length!=0&&this.cacheCanvas)for(var a=this.filters.length,b=this.cacheCanvas.getContext("2d"),c=this.cacheCanvas.width,d=this.cacheCanvas.height,e=0;e<a;e++)this.filters[e].applyFilter(b,
0,0,c,d)};createjs.DisplayObject=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype=new createjs.DisplayObject;b.children=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(){this.DisplayObject_initialize();this.children=[]};b.isVisible=function(){return this.visible&&this.alpha>0&&this.children.length&&this.scaleX!=0&&this.scaleY!=0};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return true;for(var c=this.children.slice(0),d=0,e=c.length;d<e;d++){var f=c[d];f.isVisible()&&
(a.save(),f.updateContext(a),f.draw(a),a.restore())}return true};b.addChild=function(a){if(a==null)return a;var b=arguments.length;if(b>1){for(var c=0;c<b;c++)this.addChild(arguments[c]);return arguments[b-1]}a.parent&&a.parent.removeChild(a);a.parent=this;this.children.push(a);return a};b.addChildAt=function(a,b){var c=arguments.length,d=arguments[c-1];if(d<0||d>this.children.length)return arguments[c-2];if(c>2){for(var e=0;e<c-1;e++)this.addChildAt(arguments[e],d+e);return arguments[c-2]}a.parent&&
a.parent.removeChild(a);a.parent=this;this.children.splice(b,0,a);return a};b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=true,d=0;d<b;d++)c=c&&this.removeChild(arguments[d]);return c}return this.removeChildAt(this.children.indexOf(a))};b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;d<b;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var e=true,d=0;d<b;d++)e=e&&this.removeChildAt(c[d]);return e}if(a<0||a>this.children.length-1)return false;
if(b=this.children[a])b.parent=null;this.children.splice(a,1);return true};b.removeAllChildren=function(){for(var a=this.children;a.length;)a.pop().parent=null};b.getChildAt=function(a){return this.children[a]};b.sortChildren=function(a){this.children.sort(a)};b.getChildIndex=function(a){return this.children.indexOf(a)};b.getNumChildren=function(){return this.children.length};b.swapChildrenAt=function(a,b){var c=this.children,d=c[a],e=c[b];d&&e&&(c[a]=e,c[b]=d)};b.swapChildren=function(a,b){for(var c=
this.children,d,e,f=0,g=c.length;f<g;f++)if(c[f]==a&&(d=f),c[f]==b&&(e=f),d!=null&&e!=null)break;f!=g&&(c[d]=b,c[e]=a)};b.setChildIndex=function(a,b){var c=this.children,d=c.length;if(!(a.parent!=this||b<0||b>=d)){for(var e=0;e<d;e++)if(c[e]==a)break;e==d||e==b||(c.splice(e,1),b<e&&b--,c.splice(b,0,a))}};b.contains=function(a){for(;a;){if(a==this)return true;a=a.parent}return false};b.hitTest=function(a,b){return this.getObjectUnderPoint(a,b)!=null};b.getObjectsUnderPoint=function(a,b){var c=[],d=
this.localToGlobal(a,b);this._getObjectsUnderPoint(d.x,d.y,c);return c};b.getObjectUnderPoint=function(a,b){var c=this.localToGlobal(a,b);return this._getObjectsUnderPoint(c.x,c.y)};b.clone=function(a){var b=new c;this.cloneProps(b);if(a)for(var h=b.children=[],d=0,e=this.children.length;d<e;d++){var f=this.children[d].clone(a);f.parent=b;h.push(f)}return b};b.toString=function(){return"[Container (name="+this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){for(var b=this.children.length-
1;b>=0;b--){var c=this.children[b];c._tick&&c._tick(a)}this.DisplayObject__tick(a)};b._getObjectsUnderPoint=function(a,b,h,d){var e=createjs.DisplayObject._hitTestContext,f=createjs.DisplayObject._hitTestCanvas,g=this._matrix,i=d&1&&(this.onPress||this.onClick||this.onDoubleClick)||d&2&&(this.onMouseOver||this.onMouseOut);if(this.cacheCanvas&&i&&(this.getConcatenatedMatrix(g),e.setTransform(g.a,g.b,g.c,g.d,g.tx-a,g.ty-b),e.globalAlpha=g.alpha,this.draw(e),this._testHit(e)))return f.width=0,f.width=
1,this;for(var j=this.children.length-1;j>=0;j--){var k=this.children[j];if(k.isVisible()&&k.mouseEnabled)if(k instanceof c)if(i){if(k=k._getObjectsUnderPoint(a,b))return this}else{if(k=k._getObjectsUnderPoint(a,b,h,d),!h&&k)return k}else if(!d||i||d&1&&(k.onPress||k.onClick||k.onDoubleClick)||d&2&&(k.onMouseOver||k.onMouseOut)){var m=k.hitArea;k.getConcatenatedMatrix(g);m&&(g.appendTransform(m.x+k.regX,m.y+k.regY,m.scaleX,m.scaleY,m.rotation,m.skewX,m.skewY,m.regX,m.regY),g.alpha*=m.alpha/k.alpha);
e.globalAlpha=g.alpha;e.setTransform(g.a,g.b,g.c,g.d,g.tx-a,g.ty-b);(m||k).draw(e);if(this._testHit(e))if(f.width=0,f.width=1,i)return this;else if(h)h.push(k);else return k}}return null};createjs.Container=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.Container;c._snapToPixelEnabled=false;b.autoClear=true;b.canvas=null;b.mouseX=0;b.mouseY=0;b.onMouseMove=null;b.onMouseUp=null;b.onMouseDown=null;b.snapToPixelEnabled=false;b.mouseInBounds=false;b.tickOnUpdate=true;b.mouseMoveOutside=false;b._pointerData=null;b._pointerCount=0;b._primaryPointerID=null;b._mouseOverIntervalID=null;b.Container_initialize=b.initialize;b.initialize=function(a){this.Container_initialize();this.canvas=
a instanceof HTMLCanvasElement?a:document.getElementById(a);this._pointerData={};this._enableMouseEvents(true)};b.update=function(){if(this.canvas){this.autoClear&&this.clear();c._snapToPixelEnabled=this.snapToPixelEnabled;this.tickOnUpdate&&this._tick(arguments.length?arguments:null);var a=this.canvas.getContext("2d");a.save();this.updateContext(a);this.draw(a,false);a.restore()}};b.tick=b.update;b.clear=function(){if(this.canvas){var a=this.canvas.getContext("2d");a.setTransform(1,0,0,1,0,0);a.clearRect(0,
0,this.canvas.width,this.canvas.height)}};b.toDataURL=function(a,b){b||(b="image/png");var c=this.canvas.getContext("2d"),d=this.canvas.width,e=this.canvas.height,f;if(a){f=c.getImageData(0,0,d,e);var g=c.globalCompositeOperation;c.globalCompositeOperation="destination-over";c.fillStyle=a;c.fillRect(0,0,d,e)}var i=this.canvas.toDataURL(b);if(a)c.clearRect(0,0,d,e),c.putImageData(f,0,0),c.globalCompositeOperation=g;return i};b.enableMouseOver=function(a){if(this._mouseOverIntervalID)clearInterval(this._mouseOverIntervalID),
this._mouseOverIntervalID=null;if(a==null)a=20;else if(a<=0)return;var b=this;this._mouseOverIntervalID=setInterval(function(){b._testMouseOver()},1E3/Math.min(50,a))};b.clone=function(){var a=new c(null);this.cloneProps(a);return a};b.toString=function(){return"[Stage (name="+this.name+")]"};b._enableMouseEvents=function(){var a=this,b=window.addEventListener?window:document;b.addEventListener("mouseup",function(b){a._handleMouseUp(b)},false);b.addEventListener("mousemove",function(b){a._handleMouseMove(b)},
false);b.addEventListener("dblclick",function(b){a._handleDoubleClick(b)},false);this.canvas&&this.canvas.addEventListener("mousedown",function(b){a._handleMouseDown(b)},false)};b._getPointerData=function(a){var b=this._pointerData[a];if(!b&&(b=this._pointerData[a]={x:0,y:0},this._primaryPointerID==null))this._primaryPointerID=a;return b};b._handleMouseMove=function(a){if(!a)a=window.event;this._handlePointerMove(-1,a,a.pageX,a.pageY)};b._handlePointerMove=function(a,b,c,d){if(this.canvas){var e=
this._getPointerData(a),f=e.inBounds;this._updatePointerPosition(a,c,d);if(f||e.inBounds||this.mouseMoveOutside){a=new createjs.MouseEvent("onMouseMove",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY);if(this.onMouseMove)this.onMouseMove(a);if(e.event&&e.event.onMouseMove)a=a.clone(),a.target=e.event.target,e.event.onMouseMove(a)}}};b._updatePointerPosition=function(a,b,c){var d=this._getElementRect(this.canvas);b-=d.left;c-=d.top;var e=this.canvas.width,f=this.canvas.height;b/=(d.right-
d.left)/e;c/=(d.bottom-d.top)/f;d=this._getPointerData(a);if(d.inBounds=b>=0&&c>=0&&b<=e-1&&c<=f-1)d.x=b,d.y=c;else if(this.mouseMoveOutside)d.x=b<0?0:b>e-1?e-1:b,d.y=c<0?0:c>f-1?f-1:c;d.rawX=b;d.rawY=c;if(a==this._primaryPointerID)this.mouseX=d.x,this.mouseY=d.y,this.mouseInBounds=d.inBounds};b._getElementRect=function(a){var b=a.getBoundingClientRect(),c=(window.pageXOffset||document.scrollLeft||0)-(document.clientLeft||document.body.clientLeft||0),d=(window.pageYOffset||document.scrollTop||0)-
(document.clientTop||document.body.clientTop||0),e=window.getComputedStyle?getComputedStyle(a):a.currentStyle,a=parseInt(e.paddingLeft)+parseInt(e.borderLeftWidth),f=parseInt(e.paddingTop)+parseInt(e.borderTopWidth),g=parseInt(e.paddingRight)+parseInt(e.borderRightWidth),e=parseInt(e.paddingBottom)+parseInt(e.borderBottomWidth);return{left:b.left+c+a,right:b.right+c-g,top:b.top+d+f,bottom:b.bottom+d-e}};b._handleMouseUp=function(a){this._handlePointerUp(-1,a,false)};b._handlePointerUp=function(a,
b,c){var d=this._getPointerData(a),e=new createjs.MouseEvent("onMouseUp",d.x,d.y,this,b,a,a==this._primaryPointerID,d.rawX,d.rawY);if(this.onMouseUp)this.onMouseUp(e);if(d.event&&d.event.onMouseUp)e=e.clone(),e.target=d.event.target,d.event.onMouseUp(e);if(d.target&&d.target.onClick&&this._getObjectsUnderPoint(d.x,d.y,null,true,this._mouseOverIntervalID?3:1)==d.target)d.target.onClick(new createjs.MouseEvent("onClick",d.x,d.y,d.target,b,a,a==this._primaryPointerID,d.rawX,d.rawY));if(c){if(a==this._primaryPointerID)this._primaryPointerID=
null;delete this._pointerData[a]}else d.event=d.target=null};b._handleMouseDown=function(a){this._handlePointerDown(-1,a,false)};b._handlePointerDown=function(a,b,c,d){var e=this._getPointerData(a);d!=null&&this._updatePointerPosition(a,c,d);if(this.onMouseDown)this.onMouseDown(new createjs.MouseEvent("onMouseDown",e.x,e.y,this,b,a,a==this._primaryPointerID,e.rawX,e.rawY));if(c=this._getObjectsUnderPoint(e.x,e.y,null,this._mouseOverIntervalID?3:1)){if(c.onPress&&(a=new createjs.MouseEvent("onPress",
e.x,e.y,c,b,a,a==this._primaryPointerID,e.rawX,e.rawY),c.onPress(a),a.onMouseMove||a.onMouseUp))e.event=a;e.target=c}};b._testMouseOver=function(){if(this._primaryPointerID==-1&&!(this.mouseX==this._mouseOverX&&this.mouseY==this._mouseOverY&&this.mouseInBounds)){var a=null;if(this.mouseInBounds)a=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,3),this._mouseOverX=this.mouseX,this._mouseOverY=this.mouseY;if(this._mouseOverTarget!=a){if(this._mouseOverTarget&&this._mouseOverTarget.onMouseOut)this._mouseOverTarget.onMouseOut(new createjs.MouseEvent("onMouseOut",
this.mouseX,this.mouseY,this._mouseOverTarget));if(a&&a.onMouseOver)a.onMouseOver(new createjs.MouseEvent("onMouseOver",this.mouseX,this.mouseY,a));this._mouseOverTarget=a}}};b._handleDoubleClick=function(a){if(this.onDoubleClick)this.onDoubleClick(new createjs.MouseEvent("onDoubleClick",this.mouseX,this.mouseY,this,a,-1,true));var b=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,this._mouseOverIntervalID?3:1);if(b&&b.onDoubleClick)b.onDoubleClick(new createjs.MouseEvent("onDoubleClick",
this.mouseX,this.mouseY,b,a,-1,true))};createjs.Stage=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.image=null;b.snapToPixel=true;b.sourceRect=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();typeof a=="string"?(this.image=new Image,this.image.src=a):this.image=a};b.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.image&&(this.image.complete||this.image.getContext||this.image.readyState>=2)};b.DisplayObject_draw=
b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return true;var c=this.sourceRect;c?a.drawImage(this.image,c.x,c.y,c.width,c.height,0,0,c.width,c.height):a.drawImage(this.image,0,0);return true};b.clone=function(){var a=new c(this.image);this.cloneProps(a);return a};b.toString=function(){return"[Bitmap (name="+this.name+")]"};createjs.Bitmap=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.onAnimationEnd=null;b.currentFrame=-1;b.currentAnimation=null;b.paused=true;b.spriteSheet=null;b.snapToPixel=true;b.offset=0;b.currentAnimationFrame=0;b._advanceCount=0;b._animation=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();this.spriteSheet=a};b.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.spriteSheet.complete&&
this.currentFrame>=0};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return true;this._normalizeFrame();var c=this.spriteSheet.getFrame(this.currentFrame);if(c!=null){var d=c.rect;a.drawImage(c.image,d.x,d.y,d.width,d.height,-c.regX,-c.regY,d.width,d.height);return true}};b.play=function(){this.paused=false};b.stop=function(){this.paused=true};b.gotoAndPlay=function(a){this.paused=false;this._goto(a)};b.gotoAndStop=function(a){this.paused=true;this._goto(a)};b.advance=
function(){this._animation?this.currentAnimationFrame++:this.currentFrame++;this._normalizeFrame()};b.clone=function(){var a=new c(this.spriteSheet);this.cloneProps(a);return a};b.toString=function(){return"[BitmapAnimation (name="+this.name+")]"};b.DisplayObject__tick=b._tick;b._tick=function(a){var b=this._animation?this._animation.frequency:1;!this.paused&&(++this._advanceCount+this.offset)%b==0&&this.advance();this.DisplayObject__tick(a)};b._normalizeFrame=function(){var a=this._animation;if(a)if(this.currentAnimationFrame>=
a.frames.length){if(a.next?this._goto(a.next):(this.paused=true,this.currentAnimationFrame=a.frames.length-1,this.currentFrame=a.frames[this.currentAnimationFrame]),this.onAnimationEnd)this.onAnimationEnd(this,a.name)}else this.currentFrame=a.frames[this.currentAnimationFrame];else if(this.currentFrame>=this.spriteSheet.getNumFrames()&&(this.currentFrame=0,this.onAnimationEnd))this.onAnimationEnd(this,null)};b.DisplayObject_cloneProps=b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);
a.onAnimationEnd=this.onAnimationEnd;a.currentFrame=this.currentFrame;a.currentAnimation=this.currentAnimation;a.paused=this.paused;a.offset=this.offset;a._animation=this._animation;a.currentAnimationFrame=this.currentAnimationFrame};b._goto=function(a){if(isNaN(a)){var b=this.spriteSheet.getAnimation(a);if(b)this.currentAnimationFrame=0,this._animation=b,this.currentAnimation=a,this._normalizeFrame()}else this.currentAnimation=this._animation=null,this.currentFrame=a};createjs.BitmapAnimation=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.graphics=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){this.DisplayObject_initialize();this.graphics=a?a:new createjs.Graphics};b.isVisible=function(){return Boolean(this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.graphics)};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return true;this.graphics.draw(a);return true};b.clone=function(a){a=
new c(a&&this.graphics?this.graphics.clone():this.graphics);this.cloneProps(a);return a};b.toString=function(){return"[Shape (name="+this.name+")]"};createjs.Shape=c})();this.createjs=this.createjs||{};
(function(){var c=function(a,b,c){this.initialize(a,b,c)},b=c.prototype=new createjs.DisplayObject;c._workingContext=(createjs.createCanvas?createjs.createCanvas():document.createElement("canvas")).getContext("2d");b.text="";b.font=null;b.color="#000";b.textAlign="left";b.textBaseline="top";b.maxWidth=null;b.outline=false;b.lineHeight=0;b.lineWidth=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a,b,c){this.DisplayObject_initialize();this.text=a;this.font=b;this.color=c?c:"#000"};
b.isVisible=function(){return Boolean(this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0&&this.text!=null&&this.text!=="")};b.DisplayObject_draw=b.draw;b.draw=function(a,b){if(this.DisplayObject_draw(a,b))return true;this.outline?a.strokeStyle=this.color:a.fillStyle=this.color;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";this._drawText(a);return true};b.getMeasuredWidth=function(){return this._getWorkingContext().measureText(this.text).width};
b.getMeasuredLineHeight=function(){return this._getWorkingContext().measureText("M").width*1.2};b.getMeasuredHeight=function(){return this._drawText()*(this.lineHeight||this.getMeasuredLineHeight())};b.clone=function(){var a=new c(this.text,this.font,this.color);this.cloneProps(a);return a};b.toString=function(){return"[Text (text="+(this.text.length>20?this.text.substr(0,17)+"...":this.text)+")]"};b.DisplayObject_cloneProps=b.cloneProps;b.cloneProps=function(a){this.DisplayObject_cloneProps(a);a.textAlign=
this.textAlign;a.textBaseline=this.textBaseline;a.maxWidth=this.maxWidth;a.outline=this.outline;a.lineHeight=this.lineHeight;a.lineWidth=this.lineWidth};b._getWorkingContext=function(){var a=c._workingContext;a.font=this.font;a.textAlign=this.textAlign||"start";a.textBaseline=this.textBaseline||"alphabetic";return a};b._drawText=function(a){var b=!!a;b||(a=this._getWorkingContext());for(var c=String(this.text).split(/(?:\r\n|\r|\n)/),d=this.lineHeight||this.getMeasuredLineHeight(),e=0,f=0,g=c.length;f<
g;f++){var i=a.measureText(c[f]).width;if(this.lineWidth==null||i<this.lineWidth)b&&this._drawTextLine(a,c[f],e*d);else{for(var i=c[f].split(/(\s)/),j=i[0],k=1,m=i.length;k<m;k+=2)a.measureText(j+i[k]+i[k+1]).width>this.lineWidth?(b&&this._drawTextLine(a,j,e*d),e++,j=i[k+1]):j+=i[k]+i[k+1];b&&this._drawTextLine(a,j,e*d)}e++}return e};b._drawTextLine=function(a,b,c){this.outline?a.strokeText(b,0,c,this.maxWidth||65535):a.fillText(b,0,c,this.maxWidth||65535)};createjs.Text=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"SpriteSheetUtils cannot be instantiated";};c._workingCanvas=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");c._workingContext=c._workingCanvas.getContext("2d");c.addFlippedFrames=function(b,a,l,h){if(a||l||h){var d=0;a&&c._flip(b,++d,true,false);l&&c._flip(b,++d,false,true);h&&c._flip(b,++d,true,true)}};c.extractFrame=function(b,a){isNaN(a)&&(a=b.getAnimation(a).frames[0]);var l=b.getFrame(a);if(!l)return null;var h=l.rect,d=c._workingCanvas;
d.width=h.width;d.height=h.height;c._workingContext.drawImage(l.image,h.x,h.y,h.width,h.height,0,0,h.width,h.height);l=new Image;l.src=d.toDataURL("image/png");return l};c.mergeAlpha=function(b,a,c){c||(c=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas"));c.width=Math.max(a.width,b.width);c.height=Math.max(a.height,b.height);var h=c.getContext("2d");h.save();h.drawImage(b,0,0);h.globalCompositeOperation="destination-in";h.drawImage(a,0,0);h.restore();return c};c._flip=
function(b,a,l,h){for(var d=b._images,e=c._workingCanvas,f=c._workingContext,g=d.length/a,i=0;i<g;i++){var j=d[i];j.__tmp=i;e.width=0;e.width=j.width;e.height=j.height;f.setTransform(l?-1:1,0,0,h?-1:1,l?j.width:0,h?j.height:0);f.drawImage(j,0,0);var k=new Image;k.src=e.toDataURL("image/png");k.width=j.width;k.height=j.height;d.push(k)}f=b._frames;e=f.length/a;for(i=0;i<e;i++){var j=f[i],m=j.rect.clone(),k=d[j.image.__tmp+g*a],o={image:k,rect:m,regX:j.regX,regY:j.regY};if(l)m.x=k.width-m.x-m.width,
o.regX=m.width-j.regX;if(h)m.y=k.height-m.y-m.height,o.regY=m.height-j.regY;f.push(o)}l="_"+(l?"h":"")+(h?"v":"");h=b._animations;b=b._data;d=h.length/a;for(i=0;i<d;i++){f=h[i];j=b[f];g={name:f+l,frequency:j.frequency,next:j.next,frames:[]};j.next&&(g.next+=l);f=j.frames;j=0;for(k=f.length;j<k;j++)g.frames.push(f[j]+e*a);b[g.name]=g;h.push(g.name)}};createjs.SpriteSheetUtils=c})();this.createjs=this.createjs||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.ERR_DIMENSIONS="frame dimensions exceed max spritesheet dimensions";c.ERR_RUNNING="a build is already running";b.maxWidth=2048;b.maxHeight=2048;b.spriteSheet=null;b.scale=1;b.padding=1;b._frames=null;b._animations=null;b._data=null;b._nextFrameIndex=0;b._index=0;b._callback=null;b._timeSlice=null;b._timerID=null;b._scale=1;b.initialize=function(){this._frames=[];this._animations={}};b.addFrame=function(a,b,h,d,e,f){if(this._data)throw c.ERR_RUNNING;
b=b||a.bounds||a.nominalBounds;!b&&a.getBounds&&(b=a.getBounds());if(!b)return null;h=h||1;return this._frames.push({source:a,sourceRect:b,scale:h,funct:d,params:e,scope:f,index:this._frames.length,height:b.height*h})-1};b.addAnimation=function(a,b,h,d){if(this._data)throw c.ERR_RUNNING;this._animations[a]={frames:b,next:h,frequency:d}};b.addMovieClip=function(a,b,h){if(this._data)throw c.ERR_RUNNING;var d=a.frameBounds,e=b||a.bounds||a.nominalBounds;!e&&a.getBounds&&(e=a.getBounds());if(!e&&!d)return null;
for(var b=a.timeline.duration,f=0;f<b;f++)this.addFrame(a,d&&d[f]?d[f]:e,h,function(a){var b=this.actionsEnabled;this.actionsEnabled=false;this.gotoAndStop(a);this.actionsEnabled=b},[f],a);var f=a.timeline._labels,a=[],g;for(g in f)a.push({index:f[g],label:g});if(a.length){a.sort(function(a,b){return a.index-b.index});f=0;for(g=a.length;f<g;f++){for(var h=a[f].label,d=f==g-1?b:a[f+1].index,e=[],i=a[f].index;i<d;i++)e.push(i);this.addAnimation(h,e,true)}}};b.build=function(){if(this._data)throw c.ERR_RUNNING;
this._callback=null;for(this._startBuild();this._drawNext(););this._endBuild();return this.spriteSheet};b.buildAsync=function(a,b){if(this._data)throw c.ERR_RUNNING;this._callback=a;this._startBuild();this._timeSlice=Math.max(0.01,Math.min(0.99,b||0.3))*50;var h=this;this._timerID=setTimeout(function(){h._run()},50-this._timeSlice)};b.stopAsync=function(){clearTimeout(this._timerID);this._data=null};b.clone=function(){throw"SpriteSheetBuilder cannot be cloned.";};b.toString=function(){return"[SpriteSheetBuilder]"};
b._startBuild=function(){var a=this.padding||0;this.spriteSheet=null;this._index=0;this._scale=this.scale;var b=[];this._data={images:[],frames:b,animations:this._animations};var h=this._frames.slice();h.sort(function(a,b){return a.height<=b.height?-1:1});if(h[h.length-1].height+a*2>this.maxHeight)throw c.ERR_DIMENSIONS;for(var d=0,e=0,f=0;h.length;){var g=this._fillRow(h,d,f,b,a);if(g.w>e)e=g.w;d+=g.h;if(!g.h||!h.length){var i=createjs.createCanvas?createjs.createCanvas():document.createElement("canvas");
i.width=this._getSize(e,this.maxWidth);i.height=this._getSize(d,this.maxHeight);this._data.images[f]=i;g.h||(e=d=0,f++)}}};b._getSize=function(a,b){for(var c=4;Math.pow(2,++c)<a;);return Math.min(b,Math.pow(2,c))};b._fillRow=function(a,b,h,d,e){var f=this.maxWidth,g=this.maxHeight-b,i=e;b+=e;for(var j=0,k=a.length-1;k>=0;k--){var m=a[k],o=this._scale*m.scale,n=m.sourceRect,q=m.source,p=Math.floor(o*n.x-e),s=Math.floor(o*n.y-e),r=Math.ceil(o*n.height+e*2),n=Math.ceil(o*n.width+e*2);if(n>f)throw c.ERR_DIMENSIONS;
if(!(r>g||i+n>f))m.img=h,m.rect=new createjs.Rectangle(i,b,n,r),j=j||r,a.splice(k,1),d[m.index]=[i,b,n,r,h,Math.round(-p+o*q.regX-e),Math.round(-s+o*q.regY-e)],i+=n}return{w:i,h:j}};b._endBuild=function(){this.spriteSheet=new createjs.SpriteSheet(this._data);this._data=null;this._callback&&this._callback(this)};b._run=function(){for(var a=(new Date).getTime()+this._timeSlice,b=false;a>(new Date).getTime();)if(!this._drawNext()){b=true;break}if(b)this._endBuild();else{var c=this;this._timerID=setTimeout(function(){c._run()},
50-this._timeSlice)}};b._drawNext=function(){var a=this._frames[this._index],b=a.scale*this._scale,c=a.rect,d=a.sourceRect,e=this._data.images[a.img].getContext("2d");a.funct&&a.funct.apply(a.scope,a.params);e.save();e.beginPath();e.rect(c.x,c.y,c.width,c.height);e.clip();e.translate(Math.ceil(c.x-d.x*b),Math.ceil(c.y-d.y*b));e.scale(b,b);a.source.draw(e);e.restore();return++this._index<this._frames.length};createjs.SpriteSheetBuilder=c})();this.createjs=this.createjs||{};
(function(){var c=function(a){this.initialize(a)},b=c.prototype=new createjs.DisplayObject;b.htmlElement=null;b._style=null;b.DisplayObject_initialize=b.initialize;b.initialize=function(a){typeof a=="string"&&(a=document.getElementById(a));this.DisplayObject_initialize();this.mouseEnabled=false;if(this.htmlElement=a)this._style=a.style,this._style.position="absolute",this._style.transformOrigin=this._style.WebkitTransformOrigin=this._style.msTransformOrigin=this._style.MozTransformOrigin=this._style.OTransformOrigin=
"0% 0%"};b.isVisible=function(){return this.htmlElement!=null};b.draw=function(){if(this.htmlElement!=null){var a=this.getConcatenatedMatrix(this._matrix),b=this.htmlElement;b.style.opacity=""+a.alpha;b.style.visibility=this.visible?"visible":"hidden";b.style.transform=b.style.WebkitTransform=b.style.OTransform=b.style.msTransform=["matrix("+a.a,a.b,a.c,a.d,a.tx+0.5|0,(a.ty+0.5|0)+")"].join(",");b.style.MozTransform=["matrix("+a.a,a.b,a.c,a.d,(a.tx+0.5|0)+"px",(a.ty+0.5|0)+"px)"].join(",");return true}};
b.cache=function(){};b.uncache=function(){};b.updateCache=function(){};b.hitTest=function(){};b.localToGlobal=function(){};b.globalToLocal=function(){};b.localToLocal=function(){};b.clone=function(){var a=new c;this.cloneProps(a);return a};b.toString=function(){return"[DOMElement (name="+this.name+")]"};b._tick=function(a){if(this.htmlElement!=null&&(this.htmlElement.style.visibility="hidden",this.onTick))this.onTick(a)};createjs.DOMElement=c})();this.createjs=this.createjs||{};(function(){var c=function(){this.initialize()},b=c.prototype;b.initialize=function(){};b.getBounds=function(){return new createjs.Rectangle(0,0,0,0)};b.applyFilter=function(){};b.toString=function(){return"[Filter]"};b.clone=function(){return new c};createjs.Filter=c})();this.createjs=this.createjs||{};
(function(){var c=function(){throw"Touch cannot be instantiated";};c.isSupported=function(){return"ontouchstart"in window||window.navigator.msPointerEnabled};c.enable=function(b,a,l){if(!b||!b.canvas||!c.isSupported())return false;b.__touch={pointers:{},multitouch:!a,preventDefault:!l,count:0};"ontouchstart"in window?c._IOS_enable(b):window.navigator.msPointerEnabled&&c._IE_enable(b);return true};c.disable=function(b){b&&("ontouchstart"in window?c._IOS_disable(b):window.navigator.msPointerEnabled&&c._IE_disable(b))};
c._IOS_enable=function(b){var a=b.canvas,l=b.__touch.f=function(a){c._IOS_handleEvent(b,a)};a.addEventListener("touchstart",l,false);a.addEventListener("touchmove",l,false);a.addEventListener("touchend",l,false);a.addEventListener("touchcancel",l,false)};c._IOS_disable=function(b){var a=b.canvas;if(a)b=b.__touch.f,a.removeEventListener("touchstart",b,false),a.removeEventListener("touchmove",b,false),a.removeEventListener("touchend",b,false),a.removeEventListener("touchcancel",b,false)};c._IOS_handleEvent=
function(b,a){if(b){b.__touch.preventDefault&&a.preventDefault&&a.preventDefault();for(var c=a.changedTouches,h=a.type,d=0,e=c.length;d<e;d++){var f=c[d],g=f.identifier;f.target==b.canvas&&(h=="touchstart"?this._handleStart(b,g,a,f.pageX,f.pageY):h=="touchmove"?this._handleMove(b,g,a,f.pageX,f.pageY):(h=="touchend"||h=="touchcancel")&&this._handleEnd(b,g,a))}}};c._IE_enable=function(b){var a=b.canvas,l=b.__touch.f=function(a){c._IE_handleEvent(b,a)};a.addEventListener("MSPointerDown",l,false);window.addEventListener("MSPointerMove",
l,false);window.addEventListener("MSPointerUp",l,false);window.addEventListener("MSPointerCancel",l,false);if(b.__touch.preventDefault)a.style.msTouchAction="none";b.__touch.activeIDs={}};c._IE_disable=function(b){var a=b.__touch.f;window.removeEventListener("MSPointerMove",a,false);window.removeEventListener("MSPointerUp",a,false);window.removeEventListener("MSPointerCancel",a,false);b.canvas&&b.canvas.removeEventListener("MSPointerDown",a,false)};c._IE_handleEvent=function(b,a){if(b){b.__touch.preventDefault&&
a.preventDefault&&a.preventDefault();var c=a.type,h=a.pointerId,d=b.__touch.activeIDs;if(c=="MSPointerDown")a.srcElement==b.canvas&&(d[h]=true,this._handleStart(b,h,a,a.pageX,a.pageY));else if(d[h])if(c=="MSPointerMove")this._handleMove(b,h,a,a.pageX,a.pageY);else if(c=="MSPointerUp"||c=="MSPointerCancel")delete d[h],this._handleEnd(b,h,a)}};c._handleStart=function(b,a,c,h,d){var e=b.__touch;if(e.multitouch||!e.count){var f=e.pointers;f[a]||(f[a]=true,e.count++,b._handlePointerDown(a,c,h,d))}};c._handleMove=
function(b,a,c,h,d){b.__touch.pointers[a]&&b._handlePointerMove(a,c,h,d)};c._handleEnd=function(b,a,c){var h=b.__touch,d=h.pointers;d[a]&&(h.count--,b._handlePointerUp(a,c,true),delete d[a])};createjs.Touch=c})();
/*
* TweenJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{};
(function(){var b=function(g,a){this.initialize(g,a)},a=b.prototype;b.NONE=0;b.LOOP=1;b.REVERSE=2;b.IGNORE={};b._tweens=[];b._plugins={};b.get=function(g,a,c){return new b(g,a,c)};b.tick=function(g,a){for(var c=b._tweens.slice(),e=c.length-1;e>=0;e--){var d=c[e];a&&!d.ignoreGlobalPause||d._paused||d.tick(d._useTicks?1:g)}};createjs.Ticker&&createjs.Ticker.addListener(b,false);b.removeTweens=function(g){if(g.tweenjs_count){for(var a=b._tweens,c=a.length-1;c>=0;c--)if(a[c]._target==g)a[c]._paused=true,
a.splice(c,1);g.tweenjs_count=0}};b.hasActiveTweens=function(g){return g?g.tweenjs_count:b._tweens&&b._tweens.length};b.installPlugin=function(g,a){var c=g.priority;if(c==null)g.priority=c=0;for(var e=0,d=a.length,f=b._plugins;e<d;e++){var i=a[e];if(f[i]){for(var k=f[i],j=0,l=k.length;j<l;j++)if(c<k[j].priority)break;f[i].splice(j,0,g)}else f[i]=[g]}};b._register=function(g,a){var c=g._target;if(a){if(c)c.tweenjs_count=c.tweenjs_count?c.tweenjs_count+1:1;b._tweens.push(g)}else c&&c.tweenjs_count--,
c=b._tweens.indexOf(g),c!=-1&&b._tweens.splice(c,1)};a.ignoreGlobalPause=false;a.loop=false;a.duration=0;a.pluginData=null;a.onChange=null;a.target=null;a.position=null;a._paused=false;a._curQueueProps=null;a._initQueueProps=null;a._steps=null;a._actions=null;a._prevPosition=0;a._stepPosition=0;a._prevPos=-1;a._target=null;a._useTicks=false;a.initialize=function(g,a,c){this.target=this._target=g;if(a)this._useTicks=a.useTicks,this.ignoreGlobalPause=a.ignoreGlobalPause,this.loop=a.loop,this.onChange=
a.onChange,a.override&&b.removeTweens(g);this.pluginData=c||{};this._curQueueProps={};this._initQueueProps={};this._steps=[];this._actions=[];a&&a.paused?this._paused=true:b._register(this,true);a&&a.position!=null&&this.setPosition(a.position,b.NONE)};a.wait=function(a){if(a==null||a<=0)return this;var b=this._cloneProps(this._curQueueProps);return this._addStep({d:a,p0:b,e:this._linearEase,p1:b})};a.to=function(a,b,c){if(isNaN(b)||b<0)b=0;return this._addStep({d:b||0,p0:this._cloneProps(this._curQueueProps),
e:c,p1:this._cloneProps(this._appendQueueProps(a))})};a.call=function(a,b,c){return this._addAction({f:a,p:b?b:[this],o:c?c:this._target})};a.set=function(a,b){return this._addAction({f:this._set,o:this,p:[a,b?b:this._target]})};a.play=function(a){return this.call(a.setPaused,[false],a)};a.pause=function(a){a||(a=this);return this.call(a.setPaused,[true],a)};a.setPosition=function(a,b){a<0&&(a=0);b==null&&(b=1);var c=a,e=false;if(c>=this.duration)this.loop?c%=this.duration:(c=this.duration,e=true);
if(c==this._prevPos)return e;if(this._target)if(e)this._updateTargetProps(null,1);else if(this._steps.length>0){for(var d=0,f=this._steps.length;d<f;d++)if(this._steps[d].t>c)break;d=this._steps[d-1];this._updateTargetProps(d,(this._stepPosition=c-d.t)/d.d,c)}d=this._prevPos;this.position=this._prevPos=c;this._prevPosition=a;b!=0&&this._actions.length>0&&(this._useTicks?this._runActions(c,c):b==1&&c<d?(d!=this.duration&&this._runActions(d,this.duration),this._runActions(0,c,true)):this._runActions(d,
c));e&&this.setPaused(true);this.onChange&&this.onChange(this);return e};a.tick=function(a){this._paused||this.setPosition(this._prevPosition+a)};a.setPaused=function(a){this._paused=!!a;b._register(this,!a);return this};a.w=a.wait;a.t=a.to;a.c=a.call;a.s=a.set;a.toString=function(){return"[Tween]"};a.clone=function(){throw"Tween can not be cloned.";};a._updateTargetProps=function(a,h,c){var e,d,f,i;!a&&h==1?e=d=this._curQueueProps:(a.e&&(h=a.e(h,0,1,1)),e=a.p0,d=a.p1);for(n in this._initQueueProps){if((f=
e[n])==null)e[n]=f=this._initQueueProps[n];if((i=d[n])==null)d[n]=i=f;f=f==i||h==0||h==1||typeof f!="number"?h==1?i:f:f+(i-f)*h;var k=false;if(i=b._plugins[n])for(var j=0,l=i.length;j<l;j++){var m=i[j].tween(this,n,f,e,d,h,c,!a);m==b.IGNORE?k=true:f=m}k||(this._target[n]=f)}};a._runActions=function(a,b,c){var e=a,d=b,f=-1,i=this._actions.length,k=1;a>b&&(e=b,d=a,f=i,i=k=-1);for(;(f+=k)!=i;){var b=this._actions[f],j=b.t;(j==d||j>e&&j<d||c&&j==a)&&b.f.apply(b.o,b.p)}};a._appendQueueProps=function(a){var h,
c,e,d;for(d in a){if(this._initQueueProps[d]==null){c=this._target[d];if(h=b._plugins[d])for(var f=0,i=h.length;f<i;f++)e=h[f].init(this,d,c),e!=b.IGNORE&&(c=e);this._initQueueProps[d]=c}this._curQueueProps[d]=a[d]}return this._curQueueProps};a._cloneProps=function(a){var b={},c;for(c in a)b[c]=a[c];return b};a._addStep=function(a){if(a.d>0)this._steps.push(a),a.t=this.duration,this.duration+=a.d;return this};a._addAction=function(a){a.t=this.duration;this._actions.push(a);return this};a._set=function(a,
b){for(var c in a)b[c]=a[c]};createjs.Tween=b})();this.createjs=this.createjs||{};
(function(){var b=function(a,b,c){this.initialize(a,b,c)},a=b.prototype;a.ignoreGlobalPause=false;a.duration=0;a.loop=false;a.onChange=null;a.position=null;a._paused=false;a._tweens=null;a._labels=null;a._prevPosition=0;a._prevPos=-1;a._useTicks=false;a.initialize=function(a,b,c){this._tweens=[];if(c)this._useTicks=c.useTicks,this.loop=c.loop,this.ignoreGlobalPause=c.ignoreGlobalPause,this.onChange=c.onChange;a&&this.addTween.apply(this,a);this.setLabels(b);c&&c.paused?this._paused=true:createjs.Tween._register(this,
true);c&&c.position!=null&&this.setPosition(c.position,createjs.Tween.NONE)};a.addTween=function(a){var b=arguments.length;if(b>1){for(var c=0;c<b;c++)this.addTween(arguments[c]);return arguments[0]}else if(b==0)return null;this.removeTween(a);this._tweens.push(a);a.setPaused(true);a._paused=false;a._useTicks=this._useTicks;if(a.duration>this.duration)this.duration=a.duration;this._prevPos>=0&&a.setPosition(this._prevPos,createjs.Tween.NONE);return a};a.removeTween=function(a){var b=arguments.length;
if(b>1){for(var c=true,e=0;e<b;e++)c=c&&this.removeTween(arguments[e]);return c}else if(b==0)return false;b=this._tweens.indexOf(a);return b!=-1?(this._tweens.splice(b,1),a.duration>=this.duration&&this.updateDuration(),true):false};a.addLabel=function(a,b){this._labels[a]=b};a.setLabels=function(a){this._labels=a?a:{}};a.gotoAndPlay=function(a){this.setPaused(false);this._goto(a)};a.gotoAndStop=function(a){this.setPaused(true);this._goto(a)};a.setPosition=function(a,b){a<0&&(a=0);var c=this.loop?
a%this.duration:a,e=!this.loop&&a>=this.duration;if(c==this._prevPos)return e;this._prevPosition=a;this.position=this._prevPos=c;for(var d=0,f=this._tweens.length;d<f;d++)if(this._tweens[d].setPosition(c,b),c!=this._prevPos)return false;e&&this.setPaused(true);this.onChange&&this.onChange(this);return e};a.setPaused=function(a){this._paused=!!a;createjs.Tween._register(this,!a)};a.updateDuration=function(){for(var a=this.duration=0,b=this._tweens.length;a<b;a++)if(tween=this._tweens[a],tween.duration>
this.duration)this.duration=tween.duration};a.tick=function(a){this.setPosition(this._prevPosition+a)};a.resolve=function(a){var b=parseFloat(a);isNaN(b)&&(b=this._labels[a]);return b};a.toString=function(){return"[Timeline]"};a.clone=function(){throw"Timeline can not be cloned.";};a._goto=function(a){a=this.resolve(a);a!=null&&this.setPosition(a)};createjs.Timeline=b})();this.createjs=this.createjs||{};
(function(){var b=function(){throw"Ease cannot be instantiated.";};b.linear=function(a){return a};b.none=b.linear;b.get=function(a){a<-1&&(a=-1);a>1&&(a=1);return function(b){return a==0?b:a<0?b*(b*-a+1+a):b*((2-b)*a+(1-a))}};b.getPowIn=function(a){return function(b){return Math.pow(b,a)}};b.getPowOut=function(a){return function(b){return 1-Math.pow(1-b,a)}};b.getPowInOut=function(a){return function(b){return(b*=2)<1?0.5*Math.pow(b,a):1-0.5*Math.abs(Math.pow(2-b,a))}};b.quadIn=b.getPowIn(2);b.quadOut=
b.getPowOut(2);b.quadInOut=b.getPowInOut(2);b.cubicIn=b.getPowIn(3);b.cubicOut=b.getPowOut(3);b.cubicInOut=b.getPowInOut(3);b.quartIn=b.getPowIn(4);b.quartOut=b.getPowOut(4);b.quartInOut=b.getPowInOut(4);b.quintIn=b.getPowIn(5);b.quintOut=b.getPowOut(5);b.quintInOut=b.getPowInOut(5);b.sineIn=function(a){return 1-Math.cos(a*Math.PI/2)};b.sineOut=function(a){return Math.sin(a*Math.PI/2)};b.sineInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};b.getBackIn=function(a){return function(b){return b*
b*((a+1)*b-a)}};b.backIn=b.getBackIn(1.7);b.getBackOut=function(a){return function(b){return--b*b*((a+1)*b+a)+1}};b.backOut=b.getBackOut(1.7);b.getBackInOut=function(a){a*=1.525;return function(b){return(b*=2)<1?0.5*b*b*((a+1)*b-a):0.5*((b-=2)*b*((a+1)*b+a)+2)}};b.backInOut=b.getBackInOut(1.7);b.circIn=function(a){return-(Math.sqrt(1-a*a)-1)};b.circOut=function(a){return Math.sqrt(1- --a*a)};b.circInOut=function(a){return(a*=2)<1?-0.5*(Math.sqrt(1-a*a)-1):0.5*(Math.sqrt(1-(a-=2)*a)+1)};b.bounceIn=
function(a){return 1-b.bounceOut(1-a)};b.bounceOut=function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};b.bounceInOut=function(a){return a<0.5?b.bounceIn(a*2)*0.5:b.bounceOut(a*2-1)*0.5+0.5};b.getElasticIn=function(a,b){var h=Math.PI*2;return function(c){if(c==0||c==1)return c;var e=b/h*Math.asin(1/a);return-(a*Math.pow(2,10*(c-=1))*Math.sin((c-e)*h/b))}};b.elasticIn=b.getElasticIn(1,0.3);b.getElasticOut=
function(a,b){var h=Math.PI*2;return function(c){if(c==0||c==1)return c;var e=b/h*Math.asin(1/a);return a*Math.pow(2,-10*c)*Math.sin((c-e)*h/b)+1}};b.elasticOut=b.getElasticOut(1,0.3);b.getElasticInOut=function(a,b){var h=Math.PI*2;return function(c){var e=b/h*Math.asin(1/a);return(c*=2)<1?-0.5*a*Math.pow(2,10*(c-=1))*Math.sin((c-e)*h/b):a*Math.pow(2,-10*(c-=1))*Math.sin((c-e)*h/b)*0.5+1}};b.elasticInOut=b.getElasticInOut(1,0.3*1.5);createjs.Ease=b})();
/*
* EaselJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
*/
this.createjs=this.createjs||{};
(function(){var d=function(b,a,c,f){this.initialize(b,a,c,f)},a=d.prototype=new createjs.Container;d.INDEPENDENT="independent";d.SINGLE_FRAME="single";d.SYNCHED="synched";a.startPosition=0;a.loop=true;a.timeline=null;a.paused=false;a.actionsEnabled=true;a._synchOffset=0;a._prevPos=-1;a._prevPosition=0;a.Container_initialize=a.initialize;a.initialize=function(b,a,c,f){this.mode=b||d.INDEPENDENT;this.startPosition=a||0;this.loop=c;props={paused:true,position:a,useTicks:true};this.Container_initialize();
this.timeline=new createjs.Timeline(null,f,props);this._managed={}};a.isVisible=function(){return this.visible&&this.alpha>0&&this.scaleX!=0&&this.scaleY!=0};a.Container_draw=a.draw;a.draw=function(b,a,c){if(this.DisplayObject_draw(b,a))return true;this._updateTimeline();this.Container_draw(b,a,c)};a.play=function(){this.paused=false};a.stop=function(){this.paused=true};a.gotoAndPlay=function(b){this.paused=false;this._goto(b)};a.gotoAndStop=function(b){this.paused=true;this._goto(b)};a.clone=function(){throw"MovieClip cannot be cloned.";
};a.toString=function(){return"[MovieClip (name="+this.name+")]"};a.Container__tick=a._tick;a._tick=function(b){if(!this.paused&&this.mode==d.INDEPENDENT)this._prevPosition=this._prevPos<0?0:this._prevPosition+1;this.Container__tick(b)};a._goto=function(b){b=this.timeline.resolve(b);if(b!=null)this._prevPosition=b,this._updateTimeline()};a._reset=function(){this._prevPos=-1};a._updateTimeline=function(){var b=this.timeline,a=b._tweens,c=this.children,f=this.mode!=d.INDEPENDENT;b.loop=this.loop==null?
true:this.loop;f?b.setPosition(this.startPosition+(this.mode==d.SINGLE_FRAME?0:this._synchOffset),createjs.Tween.NONE):b.setPosition(this._prevPosition,this.actionsEnabled?null:createjs.Tween.NONE);this._prevPosition=b._prevPosition;if(this._prevPos!=b._prevPos){this._prevPos=b._prevPos;for(var e in this._managed)this._managed[e]=1;for(b=a.length-1;b>=0;b--)if(e=a[b],f=e._target,f!=this)e=e._stepPosition,f instanceof createjs.DisplayObject?this._addManagedChild(f,e):this._setState(f.state,e);for(b=
c.length-1;b>=0;b--)a=c[b].id,this._managed[a]==1&&(this.removeChildAt(b),delete this._managed[a])}};a._setState=function(b,a){if(b)for(var c=0,f=b.length;c<f;c++){var e=b[c],d=e.t,e=e.p,g;for(g in e)d[g]=e[g];this._addManagedChild(d,a)}};a._addManagedChild=function(b,a){if(!b._off){this.addChild(b);if(b instanceof d)b._synchOffset=a,b.mode==d.INDEPENDENT&&(!this._managed[b.id]||this._prevPos==0)&&b._reset();this._managed[b.id]=2}};createjs.MovieClip=d;var g=function(){throw"MovieClipPlugin cannot be instantiated.";
};g.priority=100;g.install=function(){createjs.Tween.installPlugin(g,["startPosition"])};g.init=function(b,a,c){if(a=="startPosition"||!(b._target instanceof createjs.MovieClip))return c};g.tween=function(b,a,c,d,e,g){return!(b._target instanceof createjs.MovieClip)?c:g==1?e[a]:d[a]};g.install()})();
/**
* PreloadJS
* Visit http://createjs.com/ for documentation, updates and examples.
*
* Copyright (c) 2011 gskinner.com, inc.
* 
* Distributed under the terms of the MIT license.
* http://www.opensource.org/licenses/mit-license.html
*
* This notice shall be included in all copies or substantial portions of the Software.
**/this.createjs=this.createjs||{};
(function(){var d=function(){this.init()};d.prototype={};var a=d.prototype;a.loaded=false;a.canceled=false;a.progress=0;a._item=null;a.onProgress=null;a.onLoadStart=null;a.onFileLoad=null;a.onFileProgress=null;a.onComplete=null;a.onError=null;a.getItem=function(){return this._item};a.init=function(){};a.load=function(){};a.cancel=function(){};a._sendLoadStart=function(){if(!this._isCanceled()&&this.onLoadStart)this.onLoadStart({target:this})};a._sendProgress=function(a){if(!this._isCanceled()){var b;if(a instanceof
Number)this.progress=a,b={loaded:this.progress,total:1};else if(b=a,this.progress=a.loaded/a.total,isNaN(this.progress)||this.progress==Infinity)this.progress=0;b.target=this;if(this.onProgress)this.onProgress(b)}};a._sendFileProgress=function(a){if(this._isCanceled())this._cleanUp();else if(this.onFileProgress)a.target=this,this.onFileProgress(a)};a._sendComplete=function(){if(!this._isCanceled()&&this.onComplete)this.onComplete({target:this})};a._sendFileComplete=function(a){if(!this._isCanceled()&&
this.onFileLoad)a.target=this,this.onFileLoad(a)};a._sendError=function(a){if(!this._isCanceled()&&this.onError)a==null&&(a={}),a.target=this,this.onError(a)};a._isCanceled=function(){return window.createjs==null||this.canceled?true:false};a.toString=function(){return"[PreloadJS AbstractLoader]"};createjs.AbstractLoader=d})();this.createjs=this.createjs||{};
(function(){var d=function(b){this.initialize(b)},a=d.prototype=new createjs.AbstractLoader;d.IMAGE="image";d.SVG="svg";d.SOUND="sound";d.JSON="json";d.JAVASCRIPT="javascript";d.CSS="css";d.XML="xml";d.TEXT="text";d.TIMEOUT_TIME=8E3;a.useXHR=true;a.stopOnError=false;a.maintainScriptOrder=true;a.next=null;a.typeHandlers=null;a.extensionHandlers=null;a._loadStartWasDispatched=false;a._maxConnections=1;a._currentLoads=null;a._loadQueue=null;a._loadedItemsById=null;a._loadedItemsBySrc=null;a._targetProgress=
0;a._numItems=0;a._numItemsLoaded=null;a._scriptOrder=null;a._loadedScripts=null;a.TAG_LOAD_OGGS=true;a.initialize=function(b){this._targetProgress=this._numItemsLoaded=this._numItems=0;this._paused=false;this._currentLoads=[];this._loadQueue=[];this._scriptOrder=[];this._loadedScripts=[];this._loadedItemsById={};this._loadedItemsBySrc={};this.typeHandlers={};this.extensionHandlers={};this._loadStartWasDispatched=false;this.useXHR=b!=false&&window.XMLHttpRequest!=null;this.determineCapabilities()};
a.determineCapabilities=function(){var b=createjs.PreloadJS.BrowserDetect;if(b!=null)createjs.PreloadJS.TAG_LOAD_OGGS=b.isFirefox||b.isOpera};d.isBinary=function(b){switch(b){case createjs.PreloadJS.IMAGE:case createjs.PreloadJS.SOUND:return true;default:return false}};a.installPlugin=function(b){if(!(b==null||b.getPreloadHandlers==null)){b=b.getPreloadHandlers();if(b.types!=null)for(var a=0,c=b.types.length;a<c;a++)this.typeHandlers[b.types[a]]=b.callback;if(b.extensions!=null)for(a=0,c=b.extensions.length;a<
c;a++)this.extensionHandlers[b.extensions[a]]=b.callback}};a.setMaxConnections=function(b){this._maxConnections=b;this._paused||this._loadNext()};a.loadFile=function(b,a){b==null?this._sendError({text:"File is null."}):(this._addItem(b),a!==false&&this.setPaused(false))};a.loadManifest=function(b,a){var c;if(b instanceof Array){if(b.length==0){this._sendError({text:"Manifest is empty."});return}c=b}else{if(b==null){this._sendError({text:"Manifest is null."});return}c=[b]}for(var d=0,f=c.length;d<
f;d++)this._addItem(c[d],false);a!==false&&this._loadNext()};a.load=function(){this.setPaused(false)};a.getResult=function(b){return this._loadedItemsById[b]||this._loadedItemsBySrc[b]};a.setPaused=function(b){(this._paused=b)||this._loadNext()};a.close=function(){for(;this._currentLoads.length;)this._currentLoads.pop().cancel();this._scriptOrder.length=0;this._loadedScripts.length=0};a._addItem=function(b){b=this._createLoadItem(b);b!=null&&(this._loadQueue.push(b),this._numItems++,this._updateProgress(),
b.getItem().type==createjs.PreloadJS.JAVASCRIPT&&(this._scriptOrder.push(b.getItem()),this._loadedScripts.push(null)))};a._loadNext=function(){if(!this._paused){if(!this._loadStartWasDispatched)this._sendLoadStart(),this._loadStartWasDispatched=true;if(this._numItems==this._numItemsLoaded)this.loaded=true,this._sendComplete(),this.next&&this.next.load&&this.next.load.apply(this.next);for(;this._loadQueue.length&&this._currentLoads.length<this._maxConnections;)this._loadItem(this._loadQueue.shift())}};
a._loadItem=function(b){b.onProgress=createjs.PreloadJS.proxy(this._handleProgress,this);b.onComplete=createjs.PreloadJS.proxy(this._handleFileComplete,this);b.onError=createjs.PreloadJS.proxy(this._handleFileError,this);this._currentLoads.push(b);b.load()};a._handleFileError=function(b){var b=b.target,a=this._createResultData(b.getItem());this._numItemsLoaded++;this._updateProgress();this._sendError(a);this.stopOnError||(this._removeLoadItem(b),this._loadNext())};a._createResultData=function(b){var a=
{id:b.id,result:null,data:b.data,type:b.type,src:b.src};this._loadedItemsById[b.id]=a;return this._loadedItemsBySrc[b.src]=a};a._handleFileComplete=function(b){var b=b.target,a=b.getItem(),c=this._createResultData(a);this._removeLoadItem(b);c.result=b instanceof createjs.XHRLoader?this._createResult(a,b.getResult()):a.tag;switch(a.type){case createjs.PreloadJS.IMAGE:if(b instanceof createjs.XHRLoader){var d=this;c.result.onload=function(){d._handleFileTagComplete(a,c)};return}break;case createjs.PreloadJS.JAVASCRIPT:if(this.maintainScriptOrder){this._loadedScripts[this._scriptOrder.indexOf(a)]=
a;this._checkScriptLoadOrder(b);return}}this._handleFileTagComplete(a,c)};a._checkScriptLoadOrder=function(){for(var b=this._loadedScripts.length,a=0;a<b;a++){var c=this._loadedScripts[a];if(c===null)break;if(c!==true){var d=this.getResult(c.src),c=this.getResult(c.id);c.result=d.result;this._handleFileTagComplete(d,c);this._loadedScripts[a]=true;a--;b--}}};a._handleFileTagComplete=function(b,a){this._numItemsLoaded++;b.completeHandler&&b.completeHandler(a);this._updateProgress();this._sendFileComplete(a);
this._loadNext()};a._removeLoadItem=function(b){for(var a=this._currentLoads.length,c=0;c<a;c++)if(this._currentLoads[c]==b){this._currentLoads.splice(c,1);break}};a._createResult=function(b,a){var c=null,d;switch(b.type){case createjs.PreloadJS.IMAGE:c=this._createImage();break;case createjs.PreloadJS.SOUND:c=b.tag||this._createAudio();break;case createjs.PreloadJS.CSS:c=this._createLink();break;case createjs.PreloadJS.JAVASCRIPT:c=this._createScript();break;case createjs.PreloadJS.SVG:var c=this._createSVG(),
f=this._createXML(a,"image/svg+xml");c.appendChild(f);break;case createjs.PreloadJS.XML:d=this._createXML(a,"text/xml");break;case createjs.PreloadJS.JSON:case createjs.PreloadJS.TEXT:d=a}if(c){if(b.type==createjs.PreloadJS.CSS)c.href=b.src;else if(b.type!=createjs.PreloadJS.SVG)c.src=b.src;return c}else return d};a._createXML=function(b,a){var c;window.DOMParser?(c=new DOMParser,c=c.parseFromString(b,a)):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async=false,c.loadXML(b));return c};a._handleProgress=
function(b){var b=b.target,a=this._createResultData(b.getItem());a.progress=b.progress;this._sendFileProgress(a);this._updateProgress()};a._updateProgress=function(){var b=this._numItemsLoaded/this._numItems,a=this._numItems-this._numItemsLoaded;if(a>0){for(var c=0,d=0,f=this._currentLoads.length;d<f;d++)c+=this._currentLoads[d].progress;b+=c/a*(a/this._numItems)}this._sendProgress({loaded:b,total:1})};a._createLoadItem=function(a){var c={};switch(typeof a){case "string":c.src=a;break;case "object":a instanceof
HTMLAudioElement?(c.tag=a,c.src=c.tag.src,c.type=createjs.PreloadJS.SOUND):c=a}c.ext=this._getNameAfter(c.src,".");if(!c.type)c.type=this.getType(c.ext);if(c.id==null||c.id=="")c.id=c.src;if(a=this.typeHandlers[c.type]||this.extensionHandlers[c.ext]){a=a(c.src,c.type,c.id,c.data);if(a===false)return null;else if(a!==true){if(a.src!=null)c.src=a.src;if(a.id!=null)c.id=a.id;if(a.tag!=null&&a.tag.load instanceof Function)c.tag=a.tag}c.ext=this._getNameAfter(c.src,".")}a=this.useXHR;switch(c.type){case createjs.PreloadJS.JSON:case createjs.PreloadJS.XML:case createjs.PreloadJS.TEXT:a=
true;break;case createjs.PreloadJS.SOUND:c.ext=="ogg"&&createjs.PreloadJS.TAG_LOAD_OGGS&&(a=false)}return this.useXHR==true&&(c.type==createjs.PreloadJS.IMAGE||c.type==createjs.PreloadJS.SVG)?(c=this._createTagItem(c),c.useXHR=true,c):a?new createjs.XHRLoader(c):c.tag?new createjs.TagLoader(c):this._createTagItem(c)};a._createTagItem=function(a){var c,d="src",e=false;switch(a.type){case createjs.PreloadJS.IMAGE:c=this._createImage();break;case createjs.PreloadJS.SOUND:c=this._createAudio();break;
case createjs.PreloadJS.CSS:d="href";e=true;c=this._createLink();break;case createjs.PreloadJS.JAVASCRIPT:e=true;c=this._createScript();break;case createjs.PreloadJS.SVG:d="data",c=this._createSVG()}a.tag=c;return new createjs.TagLoader(a,d,e)};a.getType=function(a){switch(a){case "jpeg":case "jpg":case "gif":case "png":return createjs.PreloadJS.IMAGE;case "ogg":case "mp3":case "wav":return createjs.PreloadJS.SOUND;case "json":return createjs.PreloadJS.JSON;case "xml":return createjs.PreloadJS.XML;
case "css":return createjs.PreloadJS.CSS;case "js":return createjs.PreloadJS.JAVASCRIPT;case "svg":return createjs.PreloadJS.SVG;default:return createjs.PreloadJS.TEXT}};a._getNameAfter=function(a,c){var d=a.lastIndexOf(c),d=a.substr(d+1),e=d.lastIndexOf(/[\b|\?|\#|\s]/);return e==-1?d:d.substr(0,e)};a._createImage=function(){return document.createElement("img")};a._createSVG=function(){var a=document.createElement("object");a.type="image/svg+xml";return a};a._createAudio=function(){var a=document.createElement("audio");
a.autoplay=false;a.type="audio/ogg";return a};a._createScript=function(){var a=document.createElement("script");a.type="text/javascript";return a};a._createLink=function(){var a=document.createElement("link");a.type="text/css";a.rel="stylesheet";return a};a.toString=function(){return"[PreloadJS]"};d.proxy=function(a,c){return function(d){return a.apply(c,arguments)}};createjs.PreloadJS=d;var c=function(){};c.init=function(){var a=navigator.userAgent;c.isFirefox=a.indexOf("Firefox")>-1;c.isOpera=window.opera!=
null;c.isIOS=a.indexOf("iPod")>-1||a.indexOf("iPhone")>-1||a.indexOf("iPad")>-1};c.init();createjs.PreloadJS.BrowserDetect=c})();this.createjs=this.createjs||{};
(function(){var d=function(a,b,d){this.init(a,b,d)},a=d.prototype=new createjs.AbstractLoader;a._srcAttr=null;a._loadTimeOutTimeout=null;a.tagCompleteProxy=null;a.init=function(a,b,d){this._item=a;this._srcAttr=b||"src";this.useXHR=d==true;this.isAudio=a.tag instanceof HTMLAudioElement;this.tagCompleteProxy=createjs.PreloadJS.proxy(this._handleTagLoad,this)};a.cancel=function(){this.canceled=true;this._clean();var a=this.getItem();if(a!=null)a.src=null};a.load=function(){this.useXHR?this.loadXHR():
this.loadTag()};a.loadXHR=function(){var a=this.getItem(),a=new createjs.XHRLoader(a);a.onProgress=createjs.PreloadJS.proxy(this._handleProgress,this);a.onFileLoad=createjs.PreloadJS.proxy(this._handleXHRComplete,this);a.onComplete=createjs.PreloadJS.proxy(this._handleXHRComplete,this);a.onError=createjs.PreloadJS.proxy(this._handleLoadError,this);a.load()};a._handleXHRComplete=function(a){if(!this._isCanceled()){this._clean();a.target.onFileLoad=null;a.target.onComplete=null;var b=a.target.getItem();
a.target.getResult();b.type==createjs.PreloadJS.IMAGE?(b.tag.onload=createjs.PreloadJS.proxy(this._sendComplete,this),b.tag.src=b.src):(b.tag[this._srcAttr]=b.src,this._sendComplete())}};a._handleLoadError=function(a){a.error&&a.error.code==101?this.loadTag():(this._clean(),this._sendError(a))};a.loadTag=function(){var a=this.getItem(),b=a.tag;clearTimeout(this._loadTimeOutTimeout);this._loadTimeOutTimeout=setTimeout(createjs.PreloadJS.proxy(this._handleLoadTimeOut,this),createjs.PreloadJS.TIMEOUT_TIME);
if(this.isAudio)b.src=null,b.preload="auto",b.setAttribute("data-temp","true");b.onerror=createjs.PreloadJS.proxy(this._handleLoadError,this);b.onprogress=createjs.PreloadJS.proxy(this._handleProgress,this);this.isAudio?(b.onstalled=createjs.PreloadJS.proxy(this._handleStalled,this),b.addEventListener("canplaythrough",this.tagCompleteProxy,false)):b.onload=createjs.PreloadJS.proxy(this._handleTagLoad,this);b[this._srcAttr]=a.src;a.type==createjs.PreloadJS.SVG&&document.getElementsByTagName("body")[0].appendChild(b);
a=a.type==createjs.PreloadJS.SOUND&&a.ext=="ogg"&&createjs.PreloadJS.BrowserDetect.isFirefox;b.load!=null&&!a&&b.load()};a._handleLoadTimeOut=function(){this._clean();this._sendError()};a._handleStalled=function(){};a._handleLoadError=function(){this._clean();this._sendError()};a._handleTagLoad=function(){if(!this._isCanceled()){var a=this.getItem().tag;clearTimeout(this._loadTimeOutTimeout);if(!(this.loaded||this.isAudio&&a.readyState!==4))this.getItem().type==createjs.PreloadJS.SVG&&document.getElementsByTagName("body")[0].removeChild(a),
this.loaded=true,this._clean(),this._sendComplete()}};a._clean=function(){clearTimeout(this._loadTimeOutTimeout);var a=this.getItem().tag;a.onload=null;a.removeEventListener&&a.removeEventListener("canplaythrough",this.tagCompleteProxy,false);a.onstalled=null;a.onprogress=null;a.onerror=null};a._handleProgress=function(a){clearTimeout(this._loadTimeOutTimeout);if(this.isAudio){a=this.getItem();if(a.buffered==null)return;a={loaded:a.buffered.length>0?a.buffered.end(0):0,total:a.duration}}this._sendProgress(a)};
a.toString=function(){return"[PreloadJS TagLoader]"};createjs.TagLoader=d})();this.createjs=this.createjs||{};
(function(){var d=function(a){this.init(a)},a=d.prototype=new createjs.AbstractLoader;a._wasLoaded=false;a._request=null;a._loadTimeOutTimeout=null;a._xhrLevel=null;a.init=function(a){this._item=a;this._createXHR(a)};a.getResult=function(){try{return this._request.responseText}catch(a){}return this._request.response};a.cancel=function(){this.canceled=true;this._clean();this._request.abort()};a.load=function(){if(this._request==null)this.handleError();else{if(this._xhrLevel==1)this._loadTimeOutTimeout=
setTimeout(createjs.PreloadJS.proxy(this.handleTimeout,this),createjs.PreloadJS.TIMEOUT_TIME);this._request.onloadstart=createjs.PreloadJS.proxy(this.handleLoadStart,this);this._request.onprogress=createjs.PreloadJS.proxy(this.handleProgress,this);this._request.onabort=createjs.PreloadJS.proxy(this.handleAbort,this);this._request.onerror=createjs.PreloadJS.proxy(this.handleError,this);this._request.ontimeout=createjs.PreloadJS.proxy(this.handleTimeout,this);this._request.onload=createjs.PreloadJS.proxy(this.handleLoad,
this);this._request.onreadystatechange=createjs.PreloadJS.proxy(this.handleReadyStateChange,this);try{this._request.send()}catch(a){this._sendError({source:a})}}};a.handleProgress=function(a){a.loaded>0&&a.total==0||this._sendProgress({loaded:a.loaded,total:a.total})};a.handleLoadStart=function(){clearTimeout(this._loadTimeOutTimeout);this._sendLoadStart()};a.handleAbort=function(){this._clean();this._sendError()};a.handleError=function(){this._clean();this._sendError()};a.handleReadyStateChange=
function(){this._request.readyState==4&&this.handleLoad()};a._checkError=function(){switch(parseInt(this._request.status)){case 404:case 0:return false}return this._hasResponse()||this._hasTextResponse()||this._hasXMLResponse()};a._hasResponse=function(){return this._request.response!=null};a._hasTextResponse=function(){try{return this._request.responseText!=null}catch(a){return false}};a._hasXMLResponse=function(){try{return this._request.responseXML!=null}catch(a){return false}};a.handleLoad=function(){if(!this.loaded)this.loaded=
true,this._checkError()?(this._clean(),this._sendComplete()):this.handleError()};a.handleTimeout=function(){this._clean();this._sendError()};a._createXHR=function(a){this._xhrLevel=1;if(window.ArrayBuffer)this._xhrLevel=2;if(window.XMLHttpRequest)this._request=new XMLHttpRequest;else try{this._request=new ActiveXObject("MSXML2.XMLHTTP.3.0")}catch(b){return null}a.type==createjs.PreloadJS.TEXT&&this._request.overrideMimeType&&this._request.overrideMimeType("text/plain; charset=x-user-defined");this._request.open("GET",
a.src,true);if(createjs.PreloadJS.isBinary(a.type))this._request.responseType="arraybuffer";return true};a._clean=function(){clearTimeout(this._loadTimeOutTimeout);var a=this._request;a.onloadstart=null;a.onprogress=null;a.onabort=null;a.onerror=null;a.onload=null;a.ontimeout=null;a.onloadend=null;a.onreadystatechange=null;clearInterval(this._checkLoadInterval)};a.toString=function(){return"[PreloadJS XHRLoader]"};createjs.XHRLoader=d})();
(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib._zodiac = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// キラキラ
	this.instance = new lib.kirakirahikaru();
	this.instance.setTransform(570.3/late,1010.1/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_1 = new lib.kirakirahikaru();
	this.instance_1.setTransform(37/late,993.9/late,1,1,90,0,0,37.1/late,53/late);

	this.instance_2 = new lib.kirakirahikaru();
	this.instance_2.setTransform(292.9/late,935.5/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.instance_3 = new lib.kirakirahikaru();
	this.instance_3.setTransform(598.3/late,888/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_4 = new lib.kirakirahikaru();
	this.instance_4.setTransform(560.7/late,959.2/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_5 = new lib.kirakirahikaru();
	this.instance_5.setTransform(230.4/late,882.4/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_6 = new lib.kirakirahikaru();
	this.instance_6.setTransform(423.4/late,973.5/late,1,1,90,0,0,37.1/late,53/late);

	this.instance_7 = new lib.kirakirahikaru();
	this.instance_7.setTransform(80.6/late,860.3/late,0.711,0.711,0,0,0,37.1/late,52.9/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},135).wait(31));

	// キラキラ
	this.instance_8 = new lib.kirakirahikaru();
	this.instance_8.setTransform(108.9/late,1080/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.instance_9 = new lib.kirakirahikaru();
	this.instance_9.setTransform(614.1/late,1141.2/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_10 = new lib.kirakirahikaru();
	this.instance_10.setTransform(141.2/late,898/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_11 = new lib.kirakirahikaru();
	this.instance_11.setTransform(640.4/late,946.3/late,1,1,90,0,0,37.1/late,53/late);

	this.instance_12 = new lib.kirakirahikaru();
	this.instance_12.setTransform(11.2/late,918.4/late,0.57,0.57,0,0,0,37.3/late,52.9/late);

	this.instance_13 = new lib.kirakirahikaru();
	this.instance_13.setTransform(538.2/late,860.4/late,0.613,0.613,0,0,0,37.2/late,53.1/late);

	this.instance_14 = new lib.kirakirahikaru();
	this.instance_14.setTransform(305.3/late,1104.1/late,1,1,0,0,0,120.5/late,119.9/late);

	this.instance_15 = new lib.kirakirahikaru();
	this.instance_15.setTransform(345.8/late,860.3/late,0.711,0.711,0,0,0,37.2/late,53/late);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]},165).wait(1));

	// レイヤー 11
	this.instance_16 = new lib.オーロラ();
	this.instance_16.setTransform(324/late,844/late,1,0.015,0,0,0,332.8/late,854.2/late);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(154).to({_off:false},0).to({regY:854.4/late,scaleY:0.6},3).wait(9));

	// 鑑定書
	this.instance_17 = new lib.card();
	this.instance_17.setTransform(320/late,417/late,0.699,0.699,0,0,0,292.5/late,447/late);
	this.instance_17.alpha = 0.488;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(145).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},2).to({regX:292.4/late,regY:446.9/late,scaleX:0.6,scaleY:0.6},2).to({_off:true},1).wait(16));

	// 鑑定書
	this.instance_18 = new lib.card();
	this.instance_18.setTransform(320/late,417/late,0.055,0.055,0,0,0,292.5/late,446.9/late);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(136).to({_off:false},0).to({regX:292.8/late,scaleX:0.08,scaleY:0.08},7).to({regX:292.9/late,scaleX:0.83,scaleY:0.83,x:320.1/late},2).to({regX:292.5/late,regY:447/late,scaleX:0.56,scaleY:0.56,x:320/late},2).wait(19));

	// 白い板
	this.instance_19 = new lib.siroiita();
	this.instance_19.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(145).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(15));

	// 白い板
	this.instance_20 = new lib.siroiita();
	this.instance_20.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(89).to({_off:false},0).to({alpha:0.191},20).to({alpha:0.801},15,cjs.Ease.get(1)).to({alpha:1},12).to({_off:true},9).wait(21));

	// 丸い光
	this.instance_21 = new lib.maruihikari();
	this.instance_21.setTransform(320/late,313.7/late,0.052,0.052,0,0,0,248.1/late,248.1/late);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(19).to({_off:false},0).to({scaleX:0.34,scaleY:0.34},4).to({scaleX:0.05,scaleY:0.05},2).to({scaleX:0.03,scaleY:0.03},18).to({regX:248/late,regY:248/late,scaleX:1,scaleY:1},9,cjs.Ease.get(1)).to({_off:true},91).wait(23));

	// 光
	this.instance_22 = new lib.hikarinaka();
	this.instance_22.setTransform(321.1/late,305.9/late,1,1,113.2);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(111).to({_off:false},0).to({_off:true},32).wait(23));

	// 光
	this.instance_23 = new lib.hikarinaka();
	this.instance_23.setTransform(321.1/late,305.9/late,1,1,83.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(109).to({_off:false},0).to({_off:true},34).wait(23));

	// 光
	this.instance_24 = new lib.hikarinaka();
	this.instance_24.setTransform(321.1/late,305.9/late,1,1,45);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(89).to({_off:false},0).to({_off:true},54).wait(23));

	// 光
	this.instance_25 = new lib.hikarinaka();
	this.instance_25.setTransform(321.1/late,305.9/late);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(45).to({_off:false},0).to({_off:true},98).wait(23));

	// 星座
	this.instance_26 = new lib.seiza_1();
	this.instance_26.setTransform(320/late,329.1/late,2.553,2.553,0,0,0,320/late,329/late);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(43).to({_off:false},0).to({scaleX:0.92,scaleY:0.92},46,cjs.Ease.get(1)).wait(19).to({scaleX:1,scaleY:1},5,cjs.Ease.get(-0.99)).to({regX:319.9/late,regY:328.9/late,scaleX:0.32,scaleY:0.32,y:329/late},5,cjs.Ease.get(-0.99)).to({_off:true},25).wait(23));

	// 黒い板
	this.instance_27 = new lib.kuroita();
	this.instance_27.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(19).to({_off:false},0).to({alpha:0.5},25,cjs.Ease.get(1)).to({_off:true},99).wait(23));

	// 流れ星
	this.instance_28 = new lib.nagareboshi();
	this.instance_28.setTransform(404.9/late,253.6/late,0.298,0.298,7.2,0,0,244.7/late,203.5/late);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(1).to({_off:false},0).to({_off:true},38).wait(33));

	// BG
	this.instance_29 = new lib.BG("synched",0);
	this.instance_29.setTransform(325.5/late,417/late,1,1,0,0,0,325.5/late,417/late);

	this.instance_30 = new lib.hoshizora2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_29}]},44).to({state:[{t:this.instance_30}]},99).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


// symbols:
// (lib.Group_0 = function() {
// 	this.initialize(img.Group_0);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.cardback = function() {
	this.initialize(img.cardback);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,703/late,1000/late);


// (lib.cardback1 = function() {
// 	this.initialize(img.cardback1);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,703,1000);


// (lib.hikari = function() {
// 	this.initialize(img.hikari);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hikari1 = function() {
	this.initialize(img.hikari1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.hikari2 = function() {
	this.initialize(img.hikari2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


// (lib.hikari3 = function() {
// 	this.initialize(img.hikari3);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hoshizora = function() {
	this.initialize(img.hoshizora);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


(lib.hoshizora2 = function() {
	this.initialize(img.hoshizora2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,834/late);


// (lib._img = function() {
// 	this.initialize(img._img);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,658);


(lib.kirakira04 = function() {
	this.initialize(img.kirakira04);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,534/late,531/late);


(lib.kirakira = function() {
	this.initialize(img.kirakira);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,170/late,171/late);


(lib.nagare = function() {
	this.initialize(img.nagare);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,511/late,433/late);


(lib.seiza = function() {
	this.initialize(img.seiza);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,640/late);


(lib.鑑定書 = function() {
	this.initialize(img.鑑定書);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,585/late,894/late);


// (lib.鑑定書_1 = function() {
// 	this.initialize(img.鑑定書_1);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


// (lib.鑑定書04 = function() {
// 	this.initialize(img.鑑定書04);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,1000,1000);


(lib.オーロラ２ = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(174,156,255,0.302)","rgba(159,236,255,0)"],[0,0.749],0,420.8,0,-420.7).beginStroke().moveTo(332.8/late,-427.2/late).lineTo(332.8/late,427.2/late).lineTo(-332.8/late,427.2/late).lineTo(-332.8/late,-427.2/late).closePath();
	this.shape.setTransform(332.8/late,427.2/late);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.siroiita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(346.1/late,-434.1/late).lineTo(346.1/late,434.1/late).lineTo(-346.1/late,434.1/late).lineTo(-346.1/late,-434.1/late).closePath();
	this.shape_1.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.sirohikari = function() {
	this.initialize();

	// レイヤー 2
	this.instance = new lib.hikari2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.seiza2 = function() {
	this.initialize();

	// レイヤー 2
	this.instance_1 = new lib.seiza();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,640/late);


(lib.nagareboshi2 = function() {
	this.initialize();

	// レイヤー 2
	this.instance_2 = new lib.nagare();
	this.instance_2.setTransform(-16.9/late,-9.9/late);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.9/late,-9.9/late,511/late,433/late);


(lib.maruihikari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,0,0,0,0,250.9/late).beginStroke().moveTo(248/late,0/late).curveTo(248,102.8,175.4,175.4).curveTo(102.8,248,0,248).curveTo(-102.8,248,-175.4,175.4).curveTo(-248,102.8,-248,0).curveTo(-248,-102.8,-175.4,-175.4).curveTo(-102.8,-248,0,-248).curveTo(102.8,-248,175.4,-175.4).curveTo(248,-102.8,248,0).closePath();
	this.shape_2.setTransform(248/late,248/late);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,496/late,496/late);


(lib.kuroita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(346.1/late,-434.1/late).lineTo(346.1/late,434.1/late).lineTo(-346.1/late,434.1/late).lineTo(-346.1/late,-434.1/late).closePath();
	this.shape_3.setTransform(346.1/late,434.1/late);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692.2/late,868.3/late);


(lib.kirakirahikaru3 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.kirakira04();
	this.instance_3.setTransform(0,0,0.139/late,0.139/late);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,74.4/late,74/late);


(lib.kirakiraboshi = function() {
	this.initialize();

	// レイヤー 2
	this.instance_4 = new lib.kirakira();
	this.instance_4.setTransform(-20.9/late,-24.9/late);

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.9/late,-24.9/late,170/late,171/late);


(lib.kiirohikari = function() {
	this.initialize();

	// レイヤー 3
	this.instance_5 = new lib.hikari1();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297/late,950/late);


(lib.cardback_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_6 = new lib.cardback();
	this.instance_6.setTransform(-5/late,0);

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5/late,0,703/late,1000/late);


(lib.BG = function() {
	this.initialize();

	// レイヤー 1
	this.instance_7 = new lib.hoshizora();

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,651/late,834/late);


(lib.オーロラ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_8 = new lib.オーロラ２();
	this.instance_8.setTransform(332.8/late,854.4/late,1,1,0,0,0,332.8/late,854.4/late);
	this.instance_8.alpha = 0.25;

	//this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.55,alpha:1},59,cjs.Ease.get(1)).to({regY:854.5/late,scaleY:0.99,y:854.5/late,alpha:0.25},59,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,665.6/late,854.4/late);


(lib.seiza_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_9 = new lib.seiza2();
	this.instance_9.setTransform(320/late,329/late,1,1,0,0,0,320/late,329/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:320.1/late,regY:328.9/late,rotation:716.6,x:320.1/late,y:328.9/late},159).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,640/late);


(lib.nagareboshi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_10 = new lib.kirakiraboshi();
	this.instance_10.setTransform(489.9/late,0,1,1,0,0,0,63/late,63/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:398.5/late,y:28.6/late},7,cjs.Ease.get(-0.99)).to({x:208.7/late,y:139.8/late},late===2?3:6).to({x:91/late,y:263/late},3).to({x:5.3/late,y:398.9/late},3).wait(1).to({scaleX:0.59,scaleY:0.59},0).to({_off:true},1).wait(18));

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_4 = new cjs.Graphics().moveTo(55.1/late,-4.5/late).curveTo(55.1,4.4,46.7,10.6).curveTo(39.8,15.7,26.1,19.8).curveTo(25.6,19.9,24.9,20.1).curveTo(21.3,13.8,11.7,8.8).curveTo(-1.8,1.9,-22.2,-0.4).curveTo(-41.2,-2.5,-55.1,0.6).curveTo(-4.6,-20.1,35.5,-20.1).curveTo(45.9,-20.1,51.2,-14.2).curveTo(55.1,-9.8,55.1,-4.5).closePath();
	var mask_graphics_5 = new cjs.Graphics().moveTo(55.6/late,-6.6/late).curveTo(55.6,2.3,47.2,8.5).curveTo(40.3,13.5,26.6,17.6).curveTo(22.1,19,8.2,22.3).curveTo(5.3,13.5,-3.1,8.1).curveTo(-17.6,-1.3,-49.8,-1.3).curveTo(-52.8,-1.3,-55.6,-1.2).curveTo(-4.5,-22.3,36,-22.3).curveTo(46.4,-22.3,51.7,-16.3).curveTo(55.6,-11.9,55.6,-6.6).closePath();
	var mask_graphics_6 = new cjs.Graphics().moveTo(64.7/late,-9.8/late).curveTo(64.7,-0.9,56.3,5.3).curveTo(49.4,10.4,35.7,14.4).curveTo(30.1,16.1,10.2,20.8).curveTo(-0.4,23.2,-7.3,25.4).curveTo(-12.9,18.2,-24.3,12.9).curveTo(-41.4,5,-64.7,3.7).curveTo(-62.4,2.6,-60.2,1.6).curveTo(-0.7,-25.4,45.1,-25.4).curveTo(55.5,-25.4,60.8,-19.5).curveTo(64.7,-15.1,64.7,-9.8).closePath();
	var mask_graphics_7 = new cjs.Graphics().moveTo(74.7/late,-14/late).curveTo(74.7,-5.1,66.3,1.1).curveTo(59.4,6.1,45.7,10.2).curveTo(40.1,11.9,20.2,16.5).curveTo(4.3,20.2,-3.2,23.3).curveTo(-9.1,25.6,-18.4,29.7).curveTo(-22.2,24.3,-30,19.8).curveTo(-43.6,12,-63,9.9).curveTo(-69.2,9.3,-74.7,9.3).curveTo(-62.2,2.8,-50.2,-2.7).curveTo(9.3,-29.7,55.1,-29.7).curveTo(65.5,-29.7,70.8,-23.7).curveTo(74.7,-19.3,74.7,-14).closePath();
	var mask_graphics_8 = new cjs.Graphics().moveTo(90.2/late,-22.6/late).curveTo(90.2,-13.8,81.7,-7.5).curveTo(74.9,-2.5,61.2,1.6).curveTo(55.6,3.2,35.6,7.9).curveTo(19.8,11.6,12.2,14.7).curveTo(0.1,19.5,-26.2,31.5).curveTo(-34.5,35.3,-41.2,38.3).curveTo(-43.3,32,-50,26.8).curveTo(-61.4,17.9,-81,17.9).curveTo(-85.8,17.9,-90.2,18).curveTo(-61.4,0.8,-34.7,-11.3).curveTo(24.8,-38.3,70.6,-38.3).curveTo(80.9,-38.3,86.3,-32.4).curveTo(90.2,-27.9,90.2,-22.6).closePath();
	var mask_graphics_9 = new cjs.Graphics().moveTo(104.2/late,-30.5/late).curveTo(104.2,-21.6,95.8,-15.4).curveTo(88.9,-10.3,75.2,-6.3).curveTo(69.6,-4.6,49.7,0.1).curveTo(33.8,3.8,26.3,6.8).curveTo(14.1,11.7,-12.1,23.7).curveTo(-41.8,37.2,-51.5,41.3).curveTo(-56.6,43.5,-61.9,46.1).curveTo(-63.2,43.8,-64.9,41.7).curveTo(-73.1,31.6,-90,31.6).curveTo(-91.9,31.6,-95.6,32).curveTo(-96.7,31,-98.1,30.3).curveTo(-100.9,28.7,-104.2,27.9).curveTo(-60.3,-1.2,-20.7,-19.1).curveTo(38.8,-46.1,84.6,-46.1).curveTo(95,-46.1,100.3,-40.2).curveTo(104.2,-35.8,104.2,-30.5).closePath();
	var mask_graphics_10 = new cjs.Graphics().moveTo(119.4/late,-38.9/late).curveTo(119.4,-30,111,-23.8).curveTo(104.1,-18.8,90.4,-14.7).curveTo(84.8,-13,64.9,-8.4).curveTo(49,-4.7,41.5,-1.6).curveTo(29.3,3.2,3.1,15.2).curveTo(-26.6,28.7,-36.3,32.8).curveTo(-55.2,41,-76,54.6).curveTo(-77.1,51.8,-78.9,49.4).curveTo(-85.9,40,-101.5,40).curveTo(-111.3,40,-119.4,40.5).curveTo(-113.9,36.5,-108.3,32.6).curveTo(-53.6,-5.8,-5.5,-27.6).curveTo(54,-54.6,99.8,-54.6).curveTo(110.2,-54.6,115.5,-48.6).curveTo(119.4,-44.2,119.4,-38.9).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(134/late,-47.1/late).curveTo(134,-38.2,125.6,-32).curveTo(118.7,-26.9,105,-22.9).curveTo(99.4,-21.2,79.5,-16.5).curveTo(63.6,-12.8,56.1,-9.8).curveTo(43.9,-4.9,17.7,7.1).curveTo(-12,20.6,-21.7,24.7).curveTo(-50.9,37.3,-84.5,62.7).curveTo(-91.8,50.2,-108.3,50.2).curveTo(-123.2,50.2,-134,54.3).curveTo(-114,38.7,-93.7,24.4).curveTo(-39,-13.9,9.1,-35.7).curveTo(68.6,-62.7,114.4,-62.7).curveTo(124.8,-62.7,130.1,-56.8).curveTo(134,-52.4,134,-47.1).closePath();
	var mask_graphics_12 = new cjs.Graphics().moveTo(140/late,-59.9/late).curveTo(140,-51,131.5,-44.8).curveTo(124.7,-39.7,111,-35.7).curveTo(105.4,-34,85.4,-29.3).curveTo(69.6,-25.6,62,-22.6).curveTo(49.9,-17.7,23.6,-5.7).curveTo(-6.1,7.8,-15.7,11.9).curveTo(-54.7,28.7,-101.4,68.3).curveTo(-105.6,71.8,-109.8,75.5).curveTo(-112.5,69.9,-118,66.1).curveTo(-120.9,64.2,-124.2,62.9).curveTo(-128.5,51.5,-140,50.9).curveTo(-114.2,30.1,-87.7,11.6).curveTo(-33.1,-26.7,15.1,-48.5).curveTo(74.6,-75.5,120.4,-75.5).curveTo(130.7,-75.5,136.1,-69.6).curveTo(140,-65.2,140,-59.9).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(153.8/late,-74.8/late).curveTo(153.8,-65.9,145.3,-59.7).curveTo(138.5,-54.7,124.8,-50.6).curveTo(119.2,-48.9,99.2,-44.3).curveTo(83.4,-40.6,75.8,-37.5).curveTo(63.7,-32.7,37.4,-20.7).curveTo(7.7,-7.2,-1.9,-3.1).curveTo(-40.9,13.8,-87.6,53.3).curveTo(-107.5,70.2,-128,90.5).curveTo(-128.8,88,-129.6,85.6).curveTo(-138,62,-153.8,59).curveTo(-153.7,59,-153.6,58.9).curveTo(-114.5,25.1,-73.9,-3.3).curveTo(-19.3,-41.7,28.9,-63.5).curveTo(88.4,-90.5,134.2,-90.5).curveTo(144.5,-90.5,149.9,-84.5).curveTo(153.8,-80.1,153.8,-74.8).closePath();
	var mask_graphics_14 = new cjs.Graphics().moveTo(176/late,-95.5/late).curveTo(176,-86.6,167.6,-80.4).curveTo(160.7,-75.3,147,-71.3).curveTo(141.4,-69.6,121.4,-64.9).curveTo(105.6,-61.2,98.1,-58.2).curveTo(85.9,-53.3,59.6,-41.3).curveTo(29.9,-27.8,20.3,-23.8).curveTo(-18.6,-6.9,-65.3,32.7).curveTo(-96.8,59.3,-129.8,94.5).curveTo(-136.8,101.9,-146,111.1).curveTo(-151.7,81.3,-176,81.3).curveTo(-170.4,75,-167.2,71.4).curveTo(-160.2,63.1,-131.4,38.2).curveTo(-92.3,4.5,-51.7,-24).curveTo(2.9,-62.3,51.1,-84.1).curveTo(110.6,-111.1,156.4,-111.1).curveTo(166.8,-111.1,172.1,-105.2).curveTo(176,-100.8,176,-95.5).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(194.3/late,-115/late).curveTo(194.3,-106.1,185.9,-99.9).curveTo(179,-94.8,165.3,-90.8).curveTo(159.7,-89.1,139.8,-84.4).curveTo(123.9,-80.8,116.4,-77.7).curveTo(104.2,-72.8,78,-60.8).curveTo(48.3,-47.3,38.6,-43.2).curveTo(-0.3,-26.4,-47,13.2).curveTo(-78.5,39.8,-111.5,75).curveTo(-130.9,95.6,-167.7,130.6).curveTo(-167.9,130.3,-168,129.9).curveTo(-169.9,123,-173.4,117.3).curveTo(-181.2,104.8,-194.3,101.6).curveTo(-159.1,63.7,-148.9,51.9).curveTo(-141.9,43.6,-113.1,18.7).curveTo(-74,-15,-33.4,-43.5).curveTo(21.3,-81.8,69.4,-103.6).curveTo(128.9,-130.7,174.7,-130.7).curveTo(185.1,-130.7,190.4,-124.7).curveTo(194.3,-120.3,194.3,-115).closePath();
	var mask_graphics_16 = new cjs.Graphics().moveTo(214.2/late,-128.8/late).curveTo(214.2,-119.9,205.7,-113.7).curveTo(198.9,-108.7,185.2,-104.6).curveTo(179.6,-102.9,159.6,-98.3).curveTo(143.8,-94.6,136.2,-91.5).curveTo(124.1,-86.7,97.8,-74.7).curveTo(68.1,-61.2,58.5,-57.1).curveTo(19.5,-40.2,-27.2,-0.7).curveTo(-58.7,25.9,-91.7,61.1).curveTo(-113.4,84.3,-157.3,125.7).curveTo(-167.4,135.6,-175.5,144.5).curveTo(-179.3,138.9,-186.2,135.4).curveTo(-197.9,129.6,-214.2,131.2).curveTo(-201.2,116.5,-181.8,95.6).curveTo(-140.3,51,-129,38).curveTo(-122,29.8,-93.2,4.9).curveTo(-54.1,-28.9,-13.5,-57.3).curveTo(41.1,-95.7,89.3,-117.5).curveTo(148.8,-144.5,194.6,-144.5).curveTo(204.9,-144.5,210.3,-138.5).curveTo(214.2,-134.1,214.2,-128.8).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(232.2/late,-151.1/late).curveTo(232.2,-142.2,223.8,-136).curveTo(216.9,-130.9,203.2,-126.9).curveTo(197.6,-125.2,177.7,-120.5).curveTo(161.9,-116.8,154.3,-113.8).curveTo(142.1,-108.9,115.9,-96.9).curveTo(86.2,-83.4,76.6,-79.3).curveTo(37.6,-62.5,-9.1,-22.9).curveTo(-40.6,3.7,-73.6,38.9).curveTo(-95.3,62.1,-139.2,103.5).curveTo(-174.9,138.6,-185.6,160.3).curveTo(-186.6,162.4,-188.7,166.7).curveTo(-191.1,164.4,-194.2,162.6).curveTo(-206.2,155.7,-224.4,157.2).curveTo(-228.5,157.6,-232.2,158.3).curveTo(-220.7,138.6,-213.2,129.2).curveTo(-199.3,111.6,-163.7,73.4).curveTo(-122.2,28.8,-110.9,15.8).curveTo(-103.9,7.5,-75.2,-17.4).curveTo(-36.1,-51.1,4.6,-79.6).curveTo(59.2,-117.9,107.4,-139.7).curveTo(166.9,-166.7,212.6,-166.7).curveTo(223,-166.7,228.4,-160.8).curveTo(232.2,-156.4,232.2,-151.1).closePath();
	var mask_graphics_18 = new cjs.Graphics().moveTo(243/late,-173.6/late).curveTo(243,-164.8,234.5,-158.5).curveTo(227.7,-153.5,214,-149.4).curveTo(208.4,-147.8,188.4,-143.1).curveTo(172.6,-139.4,165,-136.3).curveTo(152.9,-131.5,126.6,-119.5).curveTo(96.9,-106,87.3,-101.9).curveTo(48.3,-85,1.6,-45.5).curveTo(-29.9,-18.9,-62.9,16.3).curveTo(-84.6,39.5,-128.5,80.9).curveTo(-164.2,116.1,-174.9,137.8).curveTo(-177.4,143.1,-187.2,164.1).curveTo(-193.8,178,-199.5,189.3).curveTo(-200.2,188.5,-201,187.8).curveTo(-207.9,180.9,-218.6,177.2).curveTo(-229.7,173.1,-240.5,174.1).curveTo(-241.8,174.2,-243,174.3).curveTo(-241.5,171.5,-239.9,168.6).curveTo(-215.2,122.6,-202.5,106.6).curveTo(-188.6,89.1,-153,50.8).curveTo(-111.5,6.2,-100.2,-6.8).curveTo(-93.2,-15,-64.4,-39.9).curveTo(-25.3,-73.7,15.3,-102.1).curveTo(69.9,-140.5,118.1,-162.3).curveTo(177.6,-189.3,223.4,-189.3).curveTo(233.7,-189.3,239.1,-183.3).curveTo(243,-178.9,243,-173.6).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(253.1/late,-203.6/late).curveTo(253.1,-194.7,244.6,-188.5).curveTo(237.8,-183.4,224.1,-179.4).curveTo(218.4,-177.7,198.5,-173).curveTo(182.7,-169.3,175.1,-166.3).curveTo(162.9,-161.4,136.7,-149.4).curveTo(107,-135.9,97.4,-131.8).curveTo(58.4,-115,11.7,-75.4).curveTo(-19.8,-48.8,-52.8,-13.6).curveTo(-74.5,9.6,-118.4,51).curveTo(-154.1,86.1,-164.8,107.8).curveTo(-167.3,113.1,-177.1,134.2).curveTo(-187.4,156,-195.7,171.5).curveTo(-221.1,219.2,-233.2,219.2).curveTo(-246.1,219.2,-250.8,203.5).curveTo(-253,196.1,-253,186).curveTo(-253,181.9,-229.8,138.6).curveTo(-205.1,92.7,-192.4,76.7).curveTo(-178.5,59.1,-142.9,20.9).curveTo(-101.4,-23.7,-90.1,-36.7).curveTo(-83.1,-45,-54.3,-69.9).curveTo(-15.2,-103.6,25.4,-132.1).curveTo(80,-170.4,128.2,-192.2).curveTo(187.7,-219.2,233.4,-219.2).curveTo(243.8,-219.2,249.2,-213.3).curveTo(253.1,-208.9,253.1,-203.6).closePath();
	var mask_graphics_20 = new cjs.Graphics().moveTo(182.2/late,-212.5/late).curveTo(179.3,-211.9,178.1,-210.3).curveTo(176.9,-208.8,174.3,-208.2).curveTo(170.8,-207.5,162.7,-207.3).curveTo(151.8,-203.2,140.4,-198).curveTo(92.3,-176.2,37.6,-137.9).curveTo(-3,-109.4,-42.1,-75.7).curveTo(-70.9,-50.8,-77.9,-42.5).curveTo(-89.1,-29.5,-130.6,15.1).curveTo(-166.2,53.3,-180.2,70.9).curveTo(-192.8,86.9,-217.5,132.8).curveTo(-240.8,176.2,-240.8,180.2).curveTo(-240.8,190.3,-238.5,197.7).curveTo(-233.8,213.5,-221,213.5).curveTo(-208.9,213.5,-183.4,165.7).curveTo(-175.2,150.2,-164.9,128.4).curveTo(-155.1,107.3,-152.5,102).curveTo(-141.9,80.3,-106.2,45.2).curveTo(-62.3,3.8,-40.5,-19.4).curveTo(-7.5,-54.6,24,-81.2).curveTo(70.7,-120.8,109.6,-137.6).curveTo(119.3,-141.7,149,-155.2).curveTo(175.2,-167.2,187.4,-172.1).curveTo(194.3,-174.8,208.1,-178.2).curveTo(214.6,-181.6,223.1,-186.2).curveTo(236.6,-193.8,240.8,-199.2).curveTo(234.7,-209.5,225.5,-211.9).curveTo(219.8,-213.5,199.1,-213.5).curveTo(186.9,-213.5,182.2,-212.5).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(214.3/late,-177.8/late).curveTo(221.4,-185.9,221.4,-190.3).curveTo(221.4,-199.7,202.8,-206.3).curveTo(195.3,-208.9,186.7,-210.5).curveTo(184.6,-210.4,182.1,-210.3).curveTo(171.2,-206.1,159.8,-201).curveTo(111.7,-179.2,57,-140.8).curveTo(16.4,-112.4,-22.7,-78.6).curveTo(-51.5,-53.7,-58.5,-45.5).curveTo(-69.7,-32.5,-111.2,12.1).curveTo(-146.8,50.4,-160.8,67.9).curveTo(-173.4,83.9,-198.1,129.9).curveTo(-221.4,173.2,-221.4,177.3).curveTo(-221.4,187.3,-219.1,194.8).curveTo(-214.4,210.5,-201.6,210.5).curveTo(-189.5,210.5,-164,162.7).curveTo(-155.8,147.3,-145.5,125.4).curveTo(-135.7,104.4,-133.1,99.1).curveTo(-122.5,77.4,-86.8,42.2).curveTo(-42.9,0.8,-21.1,-22.4).curveTo(11.9,-57.6,43.4,-84.2).curveTo(90.1,-123.7,129,-140.6).curveTo(138.7,-144.7,168.3,-158.2).curveTo(194.6,-170.2,206.8,-175).curveTo(209.8,-176.3,214.2,-177.6).curveTo(214.3,-177.7,214.3,-177.8).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(207.5/late,-197.1/late).curveTo(207.6,-197.4,207.8,-197.8).curveTo(207.5,-197.9,207.2,-198).curveTo(207.3,-197.5,207.5,-197.1).closePath().moveTo(171.9/late,-188.4/late).curveTo(166.4,-194.7,159.7,-194.7).curveTo(141,-194.7,132.3,-190).curveTo(127.6,-187.5,125.3,-186.9).curveTo(123.5,-186.3,121.1,-186).curveTo(96.6,-171.5,70.6,-153.3).curveTo(30,-124.8,-9.1,-91.1).curveTo(-37.9,-66.2,-44.9,-57.9).curveTo(-56.1,-44.9,-97.6,-0.3).curveTo(-133.2,37.9,-147.2,55.5).curveTo(-159.8,71.5,-184.5,117.4).curveTo(-207.8,160.7,-207.8,164.8).curveTo(-207.8,174.9,-205.5,182.3).curveTo(-200.8,198,-188,198).curveTo(-175.9,198,-150.4,150.3).curveTo(-142.2,134.8,-131.9,113).curveTo(-122.1,91.9,-119.5,86.6).curveTo(-108.9,64.9,-73.2,29.8).curveTo(-29.3,-11.6,-7.5,-34.8).curveTo(25.5,-70,57,-96.6).curveTo(103.7,-136.2,142.6,-153).curveTo(150.5,-156.4,171.8,-166).curveTo(176.7,-173.1,176.7,-178.8).curveTo(176.7,-183,171.9,-188.4).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(172/late,-167.4/late).curveTo(172,-178.3,162.9,-181.6).curveTo(157.8,-183.5,142.8,-183.7).curveTo(140.1,-183.7,137.8,-183.8).curveTo(136.1,-183.2,134.5,-182.6).curveTo(125.6,-179.3,121.4,-177.8).curveTo(114,-172.8,106.4,-167.5).curveTo(65.8,-139,26.7,-105.3).curveTo(-2.1,-80.4,-9.1,-72.1).curveTo(-20.3,-59.1,-61.8,-14.5).curveTo(-97.4,23.7,-111.4,41.3).curveTo(-124,57.3,-148.7,103.2).curveTo(-172,146.5,-172,150.6).curveTo(-172,160.7,-169.7,168.1).curveTo(-165,183.8,-152.2,183.8).curveTo(-140.1,183.8,-114.6,136.1).curveTo(-106.4,120.6,-96.1,98.8).curveTo(-86.3,77.7,-83.7,72.4).curveTo(-73.1,50.7,-37.4,15.6).curveTo(6.5,-25.8,28.3,-49).curveTo(61.3,-84.2,92.8,-110.8).curveTo(135.4,-147,171.6,-164.2).curveTo(172,-165.9,172,-167.4).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(121.6/late,-135.6/late).curveTo(121.6,-143,100.5,-142.4).curveTo(94.8,-142.2,83.1,-141.1).curveTo(73.4,-140.3,69.7,-140.2).curveTo(47.4,-120.6,41.3,-113.5).curveTo(30.1,-100.5,-11.4,-55.9).curveTo(-47,-17.7,-61,-0.1).curveTo(-73.6,15.9,-98.3,61.8).curveTo(-121.6,105.1,-121.6,109.2).curveTo(-121.6,119.3,-119.3,126.7).curveTo(-114.6,142.4,-101.8,142.4).curveTo(-89.7,142.4,-64.2,94.7).curveTo(-56,79.2,-45.7,57.4).curveTo(-35.9,36.3,-33.3,31).curveTo(-22.7,9.3,13,-25.8).curveTo(56.9,-67.2,78.7,-90.4).curveTo(99.9,-113.1,120.6,-132.2).curveTo(121.6,-135.5,121.6,-135.6).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(5.5/late,-63.1/late).curveTo(3.6,-60.2,1.5,-56.8).curveTo(0.6,-54.8,0.3,-54.5).curveTo(0.1,-54.3,-0.1,-54.1).curveTo(-9.9,-38.2,-23,-13.8).curveTo(-46.2,29.5,-46.2,33.6).curveTo(-46.2,43.7,-44,51.1).curveTo(-39.3,66.8,-26.4,66.8).curveTo(-14.3,66.8,11.1,19.1).curveTo(19.4,3.6,29.7,-18.2).curveTo(39.5,-39.3,42,-44.6).curveTo(43.8,-48.1,46.2,-52.1).curveTo(45.3,-54.1,44.4,-55.6).curveTo(38,-66.8,27.2,-66.8).curveTo(14,-66.8,8.1,-64.5).curveTo(6.6,-63.9,5.5,-63.1).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(4).to({graphics:mask_graphics_4,x:436.1/late,y:4.3/late}).wait(1).to({graphics:mask_graphics_5,x:435.6/late,y:6.4/late}).wait(1).to({graphics:mask_graphics_6,x:426.5/late,y:9.6/late}).wait(1).to({graphics:mask_graphics_7,x:416.5/late,y:13.8/late}).wait(1).to({graphics:mask_graphics_8,x:401.1/late,y:22.5/late}).wait(1).to({graphics:mask_graphics_9,x:387/late,y:30.3/late}).wait(1).to({graphics:mask_graphics_10,x:371.8/late,y:38.7/late}).wait(1).to({graphics:mask_graphics_11,x:357.2/late,y:46.9/late}).wait(1).to({graphics:mask_graphics_12,x:351.3/late,y:59.7/late}).wait(1).to({graphics:mask_graphics_13,x:337.5/late,y:74.6/late}).wait(1).to({graphics:mask_graphics_14,x:315.3/late,y:95.3/late}).wait(1).to({graphics:mask_graphics_15,x:296.9/late,y:114.8/late}).wait(1).to({graphics:mask_graphics_16,x:277.1/late,y:128.6/late}).wait(1).to({graphics:mask_graphics_17,x:259/late,y:150.9/late}).wait(1).to({graphics:mask_graphics_18,x:248.3/late,y:173.5/late}).wait(1).to({graphics:mask_graphics_19,x:238.2/late,y:203.4/late}).wait(1).to({graphics:mask_graphics_20,x:225.9/late,y:209.2/late}).wait(1).to({graphics:mask_graphics_21,x:206.6/late,y:212.1/late}).wait(1).to({graphics:mask_graphics_22,x:192.9/late,y:224.6/late}).wait(1).to({graphics:mask_graphics_23,x:157.2/late,y:238.8/late}).wait(1).to({graphics:mask_graphics_24,x:106.7/late,y:280.2/late}).wait(1).to({graphics:mask_graphics_25,x:31.4/late,y:355.8/late}).wait(1).to({graphics:null,x:0,y:0}).wait(13));

	// レイヤー 1
	this.instance_11 = new lib.nagareboshi2();
	this.instance_11.setTransform(245/late,203.7/late,1,1,0,0,0,245/late,203.7/late);
	this.instance_11.alpha = 0.609;
	this.instance_11._off = true;

	this.instance_11.mask = mask;
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).to({alpha:1},16).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.9/late,-87.9/late,170/late,171/late);


(lib.kirakirahikaru2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_12 = new lib.kirakirahikaru3();
	this.instance_12.setTransform(66.2/late,65.8/late,1,1,0,0,0,66.2/late,65.8/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({alpha:0.699},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,74.4/late,74/late);


(lib.kirakirahikaru = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_13 = new lib.kirakirahikaru2();
	this.instance_13.setTransform(120.5/late,135.9/late,1,1,0,0,0,120.5/late,119.9/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({y:119.9/late},0).to({y:66/late},4).to({y:-782.4/late},121).to({y:-891.1/late,alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16/late,74.4/late,74/late);


(lib.hikari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:29},true);

	// レイヤー 2
	this.instance_14 = new lib.sirohikari();
	this.instance_14.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(29).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).to({alpha:0},30).wait(1));

	// レイヤー 1
	this.instance_15 = new lib.kiirohikari();
	this.instance_15.setTransform(-58/late,-154.4/late,1,1,0,0,0,45/late,263/late);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({alpha:1},29,cjs.Ease.get(1)).to({alpha:0},30,cjs.Ease.get(-0.99)).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103/late,-417.5/late,297/late,950/late);


(lib.card2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_16 = new lib.鑑定書();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).wait(120));

	// レイヤー 2
	this.instance_17 = new lib.cardback_1();
	this.instance_17.setTransform(294.5/late,450/late,1,1,0,0,0,351.5/late,500/late);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({alpha:1},60).to({alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-49.9/late,703/late,1000/late);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:14},true);

	// レイヤー 1
	this.instance_18 = new lib.card2();
	this.instance_18.setTransform(292.5/late,447/late,1,1,0,0,0,292.5/late,447/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(14).to({y:426.8/late},45).to({y:446.6/late},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-49.9/late,703/late,1000/late);


(lib.hikarinaka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// hikari
	this.instance_19 = new lib.hikari_1();
	this.instance_19.setTransform(0,0,1,0.232,-89.9,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).to({scaleY:1},29,cjs.Ease.get(1)).wait(56));

	// hikari
	this.instance_20 = new lib.hikari_1();
	this.instance_20.setTransform(0,0,1,0.239,180,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).to({scaleY:1},29,cjs.Ease.get(1)).wait(56));

	// hikari
	this.instance_21 = new lib.hikari_1();
	this.instance_21.setTransform(0,0,1,0.243,90,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleY:1},29,cjs.Ease.get(1)).wait(56));

	// hikari
	this.instance_22 = new lib.hikari_1();
	this.instance_22.setTransform(0,0,1,0.255,0,0,0,45/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).to({scaleY:1},29,cjs.Ease.get(1)).wait(56));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218.6/late,-240.1/late,448.1/late,466.1/late);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;