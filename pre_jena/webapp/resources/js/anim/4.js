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
(lib.fortune_silver_love = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 11
	this.instance = new lib.オーロラ();
	this.instance.setTransform(323.2/late,844.8/late,1,0.015,0,0,0,332.8/late,854.2/late);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({_off:false},0).to({regY:854.4/late,scaleY:0.6},3).wait(4));

	// 鑑定書
	this.instance_1 = new lib.card();
	this.instance_1.setTransform(320/late,417/late,0.699,0.699,0,0,0,292.5/late,447/late);
	this.instance_1.alpha = 0.488;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({scaleX:0.74,scaleY:0.74},2).to({regX:292.4/late,regY:446.9/late,scaleX:0.6,scaleY:0.6},2).to({_off:true},1).wait(8));

	// 鑑定書
	this.instance_2 = new lib.card();
	this.instance_2.setTransform(320/late,477/late,0.563,0.563,0,0,0,292.5/late,447/late);
	this.instance_2.alpha = 0.301;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(136).to({_off:false},0).to({y:407/late,alpha:1},14,cjs.Ease.get(1)).to({y:417/late},4).wait(12));

	// 白い板
	this.instance_3 = new lib.siroiita();
	this.instance_3.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(153).to({_off:false},0).to({alpha:0},5,cjs.Ease.get(1)).to({_off:true},1).wait(7));

	// 白い板
	this.instance_4 = new lib.siroiita();
	this.instance_4.setTransform(326.1/late,414.1/late,1,1,0,0,0,346.1/late,434.1/late);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(89).to({_off:false},0).to({alpha:0.191},20).to({alpha:0.801},15,cjs.Ease.get(1)).to({alpha:1},12).to({_off:true},17).wait(13));

	// 丸い光
	this.instance_5 = new lib.maruihikari();
	this.instance_5.setTransform(334/late,313.7/late,0.032,0.032,0,0,0,248.1/late,248.1/late);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({regX:248/late,regY:248/late,scaleX:1,scaleY:1},11,cjs.Ease.get(1)).to({_off:true},91).wait(23));

	// ハート
	this.instance_6 = new lib.heart2();
	this.instance_6.setTransform(332.8/late,313.5/late,1.187,1.187,0,0,0,435/late,380/late);
	this.instance_6.alpha = 0.121;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(105).to({_off:false},0).to({scaleX:12.33,scaleY:12.33,x:332.9/late,alpha:0.398},37,cjs.Ease.get(1)).to({_off:true},1).wait(23));

	// ハート
	this.instance_7 = new lib.heart_1();
	this.instance_7.setTransform(357.9/late,288.4/late,0.351,0.351,90,0,0,435/late,380/late);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(94).to({_off:false},0).to({regX:434.9/late,scaleX:0.61,scaleY:0.61,rotation:144.9,x:242.1/late,y:145.4/late,alpha:0.641},11,cjs.Ease.get(1)).to({regX:435/late,scaleX:1,scaleY:1,rotation:225.1,x:525.6/late,y:751.7/late,alpha:0.121},37).to({_off:true},1).wait(23));

	// ハート
	this.instance_8 = new lib.heart_1();
	this.instance_8.setTransform(298.9/late,310.1/late,0.339,0.339,180,0,0,435.1/late,380.1/late);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(94).to({_off:false},0).to({regX:435/late,regY:380/late,scaleX:1,scaleY:1,rotation:135,x:761.2/late,y:126.1/late,alpha:0.121},48,cjs.Ease.get(1)).to({_off:true},1).wait(23));

	// ハート
	this.instance_9 = new lib.heart_1();
	this.instance_9.setTransform(307.5/late,348.7/late,0.319,0.319,-90,0,0,434.9/late,380/late);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).to({regX:435.1/late,scaleX:1,scaleY:1,rotation:30,x:120/late,y:-102/late,alpha:0.121},48,cjs.Ease.get(1)).to({_off:true},1).wait(23));

	// ハート
	this.instance_10 = new lib.heart_1();
	this.instance_10.setTransform(366/late,328/late,0.347,0.347,180,0,0,435/late,380/late);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(94).to({_off:false},0).to({regY:380/late,scaleX:1,scaleY:1,rotation:315,x:-94/late,y:506/late,alpha:0.121},48,cjs.Ease.get(1)).to({_off:true},1).wait(23));

	// 光
	this.instance_11 = new lib.hikarinaka();
	this.instance_11.setTransform(330/late,306/late,1,1,114);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(111).to({_off:false},0).to({_off:true},32).wait(23));

	// 光
	this.instance_12 = new lib.hikarinaka();
	this.instance_12.setTransform(326/late,306/late,1,1,84);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(109).to({_off:false},0).to({_off:true},34).wait(23));

	// 光
	this.instance_13 = new lib.hikarinaka();
	this.instance_13.setTransform(326/late,306/late,1,1,45);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(89).to({_off:false},0).to({_off:true},54).wait(23));

	// 光
	this.instance_14 = new lib.hikarinaka();
	this.instance_14.setTransform(326/late,306/late);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(45).to({_off:false},0).to({_off:true},98).wait(23));

	// 黒い板
	this.instance_15 = new lib.kuroita();
	this.instance_15.setTransform(326/late,414/late,1,1,0,0,0,346/late,434/late);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(7).to({_off:false},0).to({alpha:0.5},9,cjs.Ease.get(1)).to({_off:true},127).wait(23));

	// 扉
	this.instance_16 = new lib.tobira();
	this.instance_16.setTransform(480/late,424/late,1,1,0,0,180,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.67},88).to({_off:true},4).wait(30));

	// 扉
	this.instance_17 = new lib.tobira();
	this.instance_17.setTransform(180/late,424/late,1,1,0,0,0,0,270/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({scaleX:1},24,cjs.Ease.get(-0.99)).to({scaleX:0.64},88).to({_off:true},4).wait(30));

	// BG
	this.instance_18 = new lib.BG("synched",0);
	this.instance_18.setTransform(326/late,418/late,1,1,0,0,0,326/late,416/late);

	this.instance_19 = new lib.hoshizora2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18}]}).to({state:[]},136).to({state:[{t:this.instance_19}]},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,651,834);


// symbols:
// (lib.Group_0 = function() {
// 	this.initialize(img.Group_0);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,126,126);


(lib.bg00 = function() {
	this.initialize(img.bg00);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,650/late,834/late);


(lib.card1 = function() {
	this.initialize(img.card1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,584/late,894/late);


(lib.cardback = function() {
	this.initialize(img.cardback);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,704/late,1000/late);


(lib.DOOA1 = function() {
	this.initialize(img.DOOA1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,150/late,540/late);


(lib.heart = function() {
	this.initialize(img.heart);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,870/late,760/late);


// (lib.hikari = function() {
// 	this.initialize(img.hikari);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,90,526);


(lib.hikari1 = function() {
	this.initialize(img.hikari1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298/late,950/late);


(lib.hikari2 = function() {
	this.initialize(img.hikari2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,298/late,950/late);


// (lib.hikaritourou = function() {
// 	this.initialize(img.hikaritourou);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,79,94);


(lib.hoshizora2 = function() {
	this.initialize(img.hoshizora2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640/late,834/late);


// (lib._img = function() {
// 	this.initialize(img._img);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,658);


// (lib.kirakira04 = function() {
// 	this.initialize(img.kirakira04);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,534,531);


// (lib.kirakira = function() {
// 	this.initialize(img.kirakira);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,170,171);


// (lib.nagare = function() {
// 	this.initialize(img.nagare);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,511,433);


// (lib.seiza = function() {
// 	this.initialize(img.seiza);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,640,640);


// (lib.扉03a = function() {
// 	this.initialize(img.扉03a);
// }).prototype = new cjs.Bitmap();
// p.nominalBounds = new cjs.Rectangle(0,0,651,834);


(lib.オーロラ２ = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginLinearGradientFill(["rgba(174,156,255,0.302)","rgba(159,236,255,0)"],[0,0.749],0,420/late,0,-420/late).beginStroke().moveTo(332/late,-428/late).lineTo(332/late,428/late).lineTo(-332/late,428/late).lineTo(-332/late,-428/late).closePath();
	this.shape.setTransform(332/late,428/late);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,666/late,854/late);


(lib.tobira = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.DOOA1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,150/late,540/late);


(lib.siroiita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(346/late,-434/late).lineTo(346/late,434/late).lineTo(-346/late,434/late).lineTo(-346/late,-434/late).closePath();
	this.shape_1.setTransform(346/late,434/late);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692/late,868/late);


(lib.sirohikari = function() {
	this.initialize();

	// レイヤー 2
	this.instance_1 = new lib.hikari2();
	this.instance_1.setTransform(76/late,0,0.488,1);

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(76/late,0,145/late,950/late);


(lib.maruihikari = function() {
	this.initialize();

	// レイヤー 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginRadialGradientFill(["#FFFFFF","rgba(255,255,255,0)"],[0.157,1],0,0,0,0,0,250.9/late).beginStroke().moveTo(248,0).curveTo(248,102.8,175.4,175.4).curveTo(102.8,248,0,248).curveTo(-102.8,248,-175.4,175.4).curveTo(-248,102.8,-248,0).curveTo(-248,-102.8,-175.4,-175.4).curveTo(-102.8,-248,0,-248).curveTo(102.8,-248,175.4,-175.4).curveTo(248,-102.8,248,0).closePath();
	this.shape_2.setTransform(248/late,248/late);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,496/late,496/late);


(lib.kuroita = function() {
	this.initialize();

	// レイヤー 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(346/late,-434/late).lineTo(346/late,434/late).lineTo(-346/late,434/late).lineTo(-346/late,-434/late).closePath();
	this.shape_3.setTransform(346/late,434/late);

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,692/late,868/late);


(lib.kiirohikari = function() {
	this.initialize();

	// レイヤー 3
	this.instance_2 = new lib.hikari1();
	this.instance_2.setTransform(70/late,0,0.529,1);

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(70/late,0,158/late,950/late);


(lib.heart2 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_3 = new lib.heart();
	this.instance_3.setTransform(382/late,334/late,0.121,0.121);

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(382/late,334/late,105/late,92/late);


(lib.heart_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_4 = new lib.heart();
	this.instance_4.setTransform(382/late,334/late,0.121,0.121);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleX:0.121,x:382.5/late}}]}).to({state:[{t:this.instance_4,p:{scaleX:0.064,x:407.3/late}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.018,x:427.3/late}}]},2).to({state:[{t:this.instance_4,p:{scaleX:0.064,x:407.3/late}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(382/late,334/late,106/late,92/late);


(lib.cardback_1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance_5 = new lib.cardback();
	this.instance_5.setTransform(-4/late,0);

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4/late,0,704/late,1000/late);


(lib.BG = function() {
	this.initialize();

	// 恋愛
	this.instance_6 = new lib.bg00();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,650/late,834/late);


(lib.オーロラ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_7 = new lib.オーロラ２();
	this.instance_7.setTransform(332/late,854/late,1,1,0,0,0,332/late,854/late);
	this.instance_7.alpha = 0.25;

	//this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleY:0.55,alpha:1},59,cjs.Ease.get(1)).to({regY:854/late,scaleY:0.99,y:854/late,alpha:0.25},59,cjs.Ease.get(-0.99)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,666/late,854/late);


(lib.hikari_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:29},true);

	// レイヤー 2
	this.instance_8 = new lib.sirohikari();
	this.instance_8.setTransform(-58/late,-154/late,1,1,0,0,0,44/late,264/late);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({alpha:1},30,cjs.Ease.get(1)).to({alpha:0},30).wait(1));

	// レイヤー 1
	this.instance_9 = new lib.kiirohikari();
	this.instance_9.setTransform(-58/late,-154/late,1,1,0,0,0,44/late,264/late);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({alpha:1},29,cjs.Ease.get(1)).to({alpha:0},30,cjs.Ease.get(-0.99)).to({alpha:1},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-417.5,157,950);


(lib.card2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// レイヤー 1
	this.instance_10 = new lib.card1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).wait(120));

	// レイヤー 2
	this.instance_11 = new lib.cardback_1();
	this.instance_11.setTransform(294/late,450/late,1,1,0,0,0,352/late,500/late);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},60).to({alpha:0},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-50/late,704/late,1000/late);


(lib.card = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{re:14},true);

	// レイヤー 1
	this.instance_12 = new lib.card2();
	this.instance_12.setTransform(292/late,448/late,1,1,0,0,0,292/late,448/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(14).to({y:426/late},45).to({y:446/late},44).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62/late,-50/late,704/late,1000/late);


(lib.hikarinaka = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// hikari
	this.instance_13 = new lib.hikari_1();
	this.instance_13.setTransform(0,0,1,0.232,-90,0,0,46/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleY:1},29,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// hikari
	this.instance_14 = new lib.hikari_1();
	this.instance_14.setTransform(0,0,1,0.239,180,0,0,46/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleY:1},29,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// hikari
	this.instance_15 = new lib.hikari_1();
	this.instance_15.setTransform(0,0,1,0.243,90,0,0,46/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({scaleY:1},29,cjs.Ease.get(1)).to({_off:true},45).wait(1));

	// hikari
	this.instance_16 = new lib.hikari_1();
	this.instance_16.setTransform(0,0,1,0.255,0,0,0,46/late,526/late);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({scaleY:1},29,cjs.Ease.get(1)).to({_off:true},45).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-218/late,-240/late,448/late,466/late);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;