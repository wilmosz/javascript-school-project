var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
	canvas = document.getElementById("canvas");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	handleComplete();
}
function handleComplete() {
	//This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
	exportRoot = new lib.mm4();
	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.enableMouseOver();	
	//Registers the "tick" event listener.
	fnStartAnimation = function() {
		createjs.Ticker.setFPS(lib.properties.fps);
		createjs.Ticker.addEventListener("tick", stage);
	}	    
	//Code to support hidpi screens and responsive scaling.
	function makeResponsive(isResp, respDim, isScale, scaleType) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}			
			canvas.width = w*pRatio*sRatio;			
			canvas.height = h*pRatio*sRatio;
			canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
			canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;			
			lastW = iw; lastH = ih; lastS = sRatio;		
		}
	}
	makeResponsive(true,'both',false,1);	
	fnStartAnimation();
}

// animate output

(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).lineTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).lineTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,-16.6,100.7,33.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).lineTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).closePath();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).lineTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.3,-16.6,100.7,33.3);


(lib.paars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// paars
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#EB2A71").beginStroke().moveTo(-269.1,330).lineTo(-152.7,-330).lineTo(269.1,-330).lineTo(269.1,330).closePath();
	this.shape.setTransform(269.1,330);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.paars, new cjs.Rectangle(0,0,538.2,660), null);


(lib.mint = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#89D5C2").beginStroke().moveTo(-269.1,330).lineTo(-269.1,-330).lineTo(269.1,-330).lineTo(152.7,330).closePath();
	this.shape.setTransform(269.1,330);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.mint, new cjs.Rectangle(0,0,538.3,660), null);


(lib.click = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#2A3744").beginStroke().moveTo(-19.1,11.3).curveTo(-20.9,10.1,-21.6,7.5).lineTo(-21.7,7.3).curveTo(-22.3,4.8,-21.4,3).curveTo(-20.5,1.1,-18.2,0.5).curveTo(-16.2,-0,-14.7,0.8).curveTo(-13.2,1.6,-12.6,3.4).lineTo(-14.9,4).curveTo(-15.2,3.1,-15.9,2.6).curveTo(-16.7,2.2,-17.6,2.5).curveTo(-18.8,2.8,-19.3,3.8).curveTo(-19.7,4.9,-19.2,6.6).lineTo(-19.1,7).curveTo(-18.6,8.7,-17.8,9.4).curveTo(-16.9,10.1,-15.7,9.8).curveTo(-14.8,9.6,-14.3,8.8).curveTo(-13.8,8.2,-14,7.4).lineTo(-11.7,6.8).curveTo(-11.5,7.8,-11.9,8.8).curveTo(-12.2,9.9,-13.1,10.7).curveTo(-13.9,11.4,-15.1,11.7).curveTo(-16,11.9,-16.7,11.9).curveTo(-18,11.9,-19.1,11.3).closePath().moveTo(-12.9,-5.6).lineTo(-10.4,-6.3).lineTo(-6.3,9.2).lineTo(-8.7,9.8).closePath().moveTo(-6.4,-2.4).lineTo(-4,-3.1).lineTo(-1,7.8).lineTo(-3.5,8.4).closePath().moveTo(2.1,5.6).curveTo(0.4,4.4,-0.3,1.8).lineTo(-0.4,1.6).curveTo(-1.1,-0.9,-0.1,-2.7).curveTo(0.8,-4.6,3.1,-5.2).curveTo(5,-5.7,6.6,-4.9).curveTo(8.1,-4.1,8.6,-2.3).lineTo(6.3,-1.7).curveTo(6.1,-2.6,5.3,-3.1).curveTo(4.5,-3.5,3.6,-3.2).curveTo(2.4,-2.9,2,-1.9).curveTo(1.6,-0.8,2,0.9).lineTo(2.1,1.3).curveTo(2.6,3,3.5,3.7).curveTo(4.4,4.4,5.6,4.1).curveTo(6.5,3.9,6.9,3.1).curveTo(7.5,2.5,7.2,1.7).lineTo(9.5,1.1).curveTo(9.8,2.1,9.4,3.1).curveTo(9.1,4.2,8.2,5).curveTo(7.3,5.7,6.1,6).curveTo(5.3,6.2,4.5,6.2).curveTo(3.2,6.2,2.1,5.6).closePath().moveTo(8.2,-11.3).lineTo(10.7,-11.9).lineTo(13.1,-3).lineTo(15.6,-8.3).lineTo(18.6,-9.1).lineTo(15.8,-3.5).lineTo(21.9,1.6).lineTo(19.1,2.4).lineTo(14.6,-1.4).lineTo(13.9,-0).lineTo(14.8,3.5).lineTo(12.4,4.2).closePath().moveTo(-6.7,-4.4).curveTo(-7.2,-4.7,-7.3,-5.2).curveTo(-7.5,-5.8,-7.2,-6.3).curveTo(-7,-6.7,-6.3,-6.9).curveTo(-5.7,-7.1,-5.2,-6.8).curveTo(-4.7,-6.5,-4.6,-6).curveTo(-4.4,-5.4,-4.7,-5).curveTo(-5,-4.5,-5.6,-4.3).lineTo(-6.1,-4.3).curveTo(-6.4,-4.3,-6.7,-4.4).closePath();
	this.shape.setTransform(21.9,11.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.9,23.9);


(lib.btnmoederbord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#2A3744").beginStroke().moveTo(90.8,12.2).curveTo(88.5,9.2,88.5,4.1).curveTo(88.5,-0.8,90.8,-3.8).curveTo(93,-6.7,96.9,-6.7).curveTo(100.2,-6.7,102.3,-4.4).lineTo(102.3,-15.2).lineTo(107,-15.2).lineTo(107,14.8).lineTo(102.7,14.8).lineTo(102.5,12.6).curveTo(100.4,15.2,96.8,15.2).curveTo(93.1,15.2,90.8,12.2).closePath().moveTo(94.5,-1).curveTo(93.3,0.8,93.3,4.5).curveTo(93.3,7.7,94.5,9.5).curveTo(95.7,11.3,98,11.3).curveTo(100.9,11.3,102.3,8.7).lineTo(102.3,-0.3).curveTo(101,-2.9,98.1,-2.9).curveTo(95.7,-2.8,94.5,-1).closePath().moveTo(54.4,12.2).curveTo(51.7,9.2,51.7,4.2).lineTo(51.7,4).curveTo(51.7,1,52.9,-1.5).curveTo(54.1,-4.1,56.4,-5.4).curveTo(58.6,-6.7,61.5,-6.7).curveTo(65.8,-6.7,68.5,-4).curveTo(71.1,-1.2,71.3,3.3).lineTo(71.3,4.4).curveTo(71.4,7.6,70.2,10.1).curveTo(68.9,12.5,66.7,13.9).curveTo(64.4,15.2,61.5,15.2).curveTo(57.1,15.2,54.4,12.2).closePath().moveTo(57.8,-1.1).curveTo(56.5,0.8,56.5,4.4).curveTo(56.5,7.7,57.8,9.5).curveTo(59.2,11.4,61.5,11.4).curveTo(63.9,11.4,65.3,9.5).curveTo(66.6,7.7,66.6,4).curveTo(66.6,0.9,65.2,-1.1).curveTo(63.9,-2.9,61.5,-2.9).curveTo(59.2,-2.9,57.8,-1.1).closePath().moveTo(34.6,12.5).lineTo(34.3,14.8).lineTo(30,14.8).lineTo(30,-15.2).lineTo(34.8,-15.2).lineTo(34.8,-4.3).curveTo(36.9,-6.7,40.4,-6.7).curveTo(44.2,-6.7,46.4,-3.9).curveTo(48.7,-1,48.6,4.2).lineTo(48.6,4.4).curveTo(48.6,9.3,46.5,12.3).curveTo(44.2,15.2,40.4,15.2).curveTo(36.7,15.2,34.6,12.5).closePath().moveTo(34.8,-0.2).lineTo(34.8,8.5).curveTo(36.1,11.3,39.2,11.3).curveTo(41.4,11.3,42.6,9.6).curveTo(43.8,8,43.9,4.7).lineTo(43.9,4).curveTo(43.9,0.6,42.6,-1.1).curveTo(41.4,-2.9,39.1,-2.9).curveTo(36,-2.9,34.8,-0.2).closePath().moveTo(-3.4,12.3).curveTo(-6.2,9.5,-6.3,4.8).lineTo(-6.3,4.2).curveTo(-6.3,1,-5,-1.4).curveTo(-3.8,-3.9,-1.6,-5.3).curveTo(0.6,-6.7,3.4,-6.7).curveTo(7.7,-6.7,10,-4).curveTo(12.3,-1.2,12.4,3.8).lineTo(12.4,5.8).lineTo(-1.5,5.8).curveTo(-1.3,8.4,0.3,9.9).curveTo(1.8,11.4,4.2,11.4).curveTo(7.4,11.4,9.4,8.7).lineTo(12,11.2).curveTo(10.7,13.1,8.7,14.1).curveTo(6.6,15.2,3.9,15.2).curveTo(-0.6,15.2,-3.4,12.3).closePath().moveTo(0.2,-1.5).curveTo(-1,-0.2,-1.4,2.2).lineTo(7.7,2.2).lineTo(7.7,1.9).curveTo(7.5,-0.5,6.4,-1.7).curveTo(5.3,-2.9,3.3,-2.9).curveTo(1.4,-2.9,0.2,-1.5).closePath().moveTo(-26.6,12.2).curveTo(-28.8,9.2,-28.8,4.1).curveTo(-28.9,-0.8,-26.6,-3.8).curveTo(-24.3,-6.7,-20.5,-6.7).curveTo(-17.2,-6.7,-15.1,-4.4).lineTo(-15.1,-15.2).lineTo(-10.4,-15.2).lineTo(-10.4,14.8).lineTo(-14.6,14.8).lineTo(-14.9,12.6).curveTo(-17,15.2,-20.6,15.2).curveTo(-24.3,15.2,-26.6,12.2).closePath().moveTo(-22.8,-1).curveTo(-24.1,0.8,-24.1,4.5).curveTo(-24.1,7.7,-22.8,9.5).curveTo(-21.7,11.3,-19.4,11.3).curveTo(-16.4,11.3,-15.1,8.7).lineTo(-15.1,-0.3).curveTo(-16.4,-2.9,-19.3,-2.9).curveTo(-21.6,-2.8,-22.8,-1).closePath().moveTo(-47.4,12.3).curveTo(-50.2,9.5,-50.3,4.8).lineTo(-50.3,4.2).curveTo(-50.3,1,-49,-1.4).curveTo(-47.8,-3.9,-45.6,-5.3).curveTo(-43.4,-6.7,-40.6,-6.7).curveTo(-36.4,-6.7,-34,-4).curveTo(-31.7,-1.2,-31.6,3.8).lineTo(-31.6,5.8).lineTo(-45.5,5.8).curveTo(-45.2,8.4,-43.7,9.9).curveTo(-42.2,11.4,-39.8,11.4).curveTo(-36.6,11.4,-34.5,8.7).lineTo(-32,11.2).curveTo(-33.3,13.1,-35.3,14.1).curveTo(-37.5,15.2,-40.1,15.2).curveTo(-44.6,15.2,-47.4,12.3).closePath().moveTo(-43.8,-1.5).curveTo(-45,-0.2,-45.3,2.2).lineTo(-36.3,2.2).lineTo(-36.3,1.9).curveTo(-36.5,-0.5,-37.6,-1.7).curveTo(-38.7,-2.9,-40.7,-2.9).curveTo(-42.6,-2.9,-43.8,-1.5).closePath().moveTo(-70.3,12.2).curveTo(-73,9.2,-73,4.2).lineTo(-73,4).curveTo(-73.1,1,-71.9,-1.5).curveTo(-70.6,-4.1,-68.4,-5.4).curveTo(-66.1,-6.7,-63.2,-6.7).curveTo(-58.9,-6.7,-56.3,-4).curveTo(-53.7,-1.2,-53.4,3.3).lineTo(-53.4,4.4).curveTo(-53.4,7.6,-54.6,10.1).curveTo(-55.8,12.5,-58.1,13.9).curveTo(-60.3,15.2,-63.2,15.2).curveTo(-67.7,15.2,-70.3,12.2).closePath().moveTo(-66.9,-1.1).curveTo(-68.3,0.8,-68.3,4.4).curveTo(-68.3,7.7,-66.9,9.5).curveTo(-65.6,11.4,-63.2,11.4).curveTo(-60.8,11.4,-59.4,9.5).curveTo(-58.2,7.7,-58.2,4).curveTo(-58.2,0.9,-59.5,-1.1).curveTo(-60.9,-2.9,-63.2,-2.9).curveTo(-65.6,-2.9,-66.9,-1.1).closePath().moveTo(75.3,14.8).lineTo(75.3,-6.4).lineTo(79.9,-6.4).lineTo(80,-4).curveTo(81.7,-6.7,84.7,-6.7).curveTo(85.8,-6.7,86.4,-6.5).lineTo(86.4,-2).lineTo(84.5,-2.2).curveTo(81.2,-2.2,80.1,0.4).lineTo(80.1,14.8).closePath().moveTo(16,14.8).lineTo(16,-6.4).lineTo(20.6,-6.4).lineTo(20.7,-4).curveTo(22.4,-6.7,25.4,-6.7).curveTo(26.4,-6.7,27.1,-6.5).lineTo(27.1,-2).lineTo(25.2,-2.2).curveTo(21.9,-2.2,20.7,0.4).lineTo(20.7,14.8).closePath().moveTo(-81.8,14.8).lineTo(-81.8,1.1).curveTo(-81.8,-0.9,-82.7,-1.9).curveTo(-83.6,-2.9,-85.5,-2.9).curveTo(-87.2,-2.8,-88.2,-2).curveTo(-89.2,-1.1,-89.7,0.3).lineTo(-89.7,14.8).lineTo(-94.4,14.8).lineTo(-94.4,0.9).curveTo(-94.5,-2.9,-98.2,-2.9).curveTo(-101.1,-2.8,-102.3,-0.5).lineTo(-102.3,14.8).lineTo(-107,14.8).lineTo(-107,-6.4).lineTo(-102.5,-6.4).lineTo(-102.4,-4.1).curveTo(-100.1,-6.7,-96.3,-6.7).curveTo(-92.1,-6.7,-90.5,-3.5).curveTo(-88.2,-6.7,-84,-6.7).curveTo(-80.5,-6.7,-78.8,-4.8).curveTo(-77.1,-2.9,-77.1,0.9).lineTo(-77.1,14.8).closePath();
	this.shape.setTransform(0,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#2A3744").beginStroke().moveTo(90.8,12.2).curveTo(88.5,9.2,88.5,4.1).curveTo(88.5,-0.8,90.7,-3.7).curveTo(93,-6.7,96.8,-6.7).curveTo(100.2,-6.7,102.2,-4.4).lineTo(102.2,-15.2).lineTo(107,-15.2).lineTo(107,14.8).lineTo(102.7,14.8).lineTo(102.5,12.6).curveTo(100.3,15.2,96.8,15.2).curveTo(93.1,15.2,90.8,12.2).closePath().moveTo(94.5,-1).curveTo(93.2,0.8,93.2,4.5).curveTo(93.2,7.7,94.5,9.6).curveTo(95.7,11.3,98,11.3).curveTo(100.9,11.3,102.2,8.8).lineTo(102.2,-0.3).curveTo(101,-2.9,98,-2.8).curveTo(95.8,-2.8,94.5,-1).closePath().moveTo(54.4,12.2).curveTo(51.7,9.2,51.7,4.3).lineTo(51.7,4.1).curveTo(51.7,0.9,52.9,-1.6).curveTo(54.2,-4.1,56.4,-5.4).curveTo(58.6,-6.7,61.5,-6.7).curveTo(65.8,-6.7,68.5,-3.9).curveTo(71.1,-1.2,71.3,3.4).lineTo(71.4,4.4).curveTo(71.3,7.5,70.1,10).curveTo(69,12.5,66.7,13.8).curveTo(64.4,15.2,61.6,15.2).curveTo(57.1,15.2,54.4,12.2).closePath().moveTo(57.8,-1).curveTo(56.4,0.8,56.4,4.4).curveTo(56.4,7.7,57.8,9.6).curveTo(59.1,11.4,61.6,11.4).curveTo(64,11.4,65.3,9.6).curveTo(66.6,7.6,66.6,4.1).curveTo(66.6,0.8,65.2,-1).curveTo(63.9,-2.9,61.5,-2.9).curveTo(59.2,-2.9,57.8,-1).closePath().moveTo(34.6,12.5).lineTo(34.4,14.8).lineTo(30.1,14.8).lineTo(30.1,-15.2).lineTo(34.8,-15.2).lineTo(34.8,-4.3).curveTo(36.9,-6.7,40.3,-6.7).curveTo(44.2,-6.7,46.4,-3.8).curveTo(48.6,-1,48.7,4.2).lineTo(48.7,4.4).curveTo(48.7,9.4,46.4,12.3).curveTo(44.2,15.2,40.4,15.2).curveTo(36.7,15.2,34.6,12.5).closePath().moveTo(34.8,-0.1).lineTo(34.8,8.6).curveTo(36.1,11.3,39.2,11.3).curveTo(41.4,11.3,42.7,9.7).curveTo(43.9,8,43.9,4.6).lineTo(43.9,4.1).curveTo(43.9,0.6,42.7,-1.1).curveTo(41.5,-2.8,39.1,-2.8).curveTo(36.1,-2.8,34.8,-0.1).closePath().moveTo(-3.4,12.4).curveTo(-6.2,9.5,-6.2,4.8).lineTo(-6.2,4.2).curveTo(-6.2,1.1,-5,-1.5).curveTo(-3.8,-3.9,-1.6,-5.4).curveTo(0.7,-6.7,3.3,-6.7).curveTo(7.6,-6.7,10,-3.9).curveTo(12.4,-1.2,12.3,3.8).lineTo(12.3,5.7).lineTo(-1.4,5.7).curveTo(-1.3,8.3,0.3,9.9).curveTo(1.8,11.4,4.1,11.4).curveTo(7.4,11.4,9.4,8.8).lineTo(12.1,11.2).curveTo(10.8,13.1,8.6,14.2).curveTo(6.6,15.2,3.9,15.2).curveTo(-0.6,15.2,-3.4,12.4).closePath().moveTo(0.2,-1.6).curveTo(-1.1,-0.2,-1.4,2.3).lineTo(7.7,2.3).lineTo(7.7,1.9).curveTo(7.5,-0.4,6.4,-1.7).curveTo(5.3,-2.9,3.3,-2.9).curveTo(1.3,-2.9,0.2,-1.6).closePath().moveTo(-26.6,12.2).curveTo(-28.9,9.2,-28.9,4.1).curveTo(-28.8,-0.8,-26.6,-3.7).curveTo(-24.4,-6.7,-20.5,-6.7).curveTo(-17.1,-6.7,-15.1,-4.4).lineTo(-15.1,-15.2).lineTo(-10.4,-15.2).lineTo(-10.4,14.8).lineTo(-14.7,14.8).lineTo(-14.9,12.6).curveTo(-17,15.2,-20.5,15.2).curveTo(-24.2,15.2,-26.6,12.2).closePath().moveTo(-22.9,-1).curveTo(-24.1,0.8,-24.1,4.5).curveTo(-24.1,7.7,-22.9,9.6).curveTo(-21.7,11.3,-19.4,11.3).curveTo(-16.5,11.3,-15.1,8.8).lineTo(-15.1,-0.3).curveTo(-16.4,-2.9,-19.3,-2.8).curveTo(-21.6,-2.8,-22.9,-1).closePath().moveTo(-47.4,12.4).curveTo(-50.2,9.5,-50.2,4.8).lineTo(-50.2,4.2).curveTo(-50.2,1.1,-49,-1.5).curveTo(-47.8,-3.9,-45.6,-5.4).curveTo(-43.4,-6.7,-40.7,-6.7).curveTo(-36.3,-6.7,-34,-3.9).curveTo(-31.7,-1.2,-31.7,3.8).lineTo(-31.7,5.7).lineTo(-45.5,5.7).curveTo(-45.3,8.3,-43.7,9.9).curveTo(-42.1,11.4,-39.9,11.4).curveTo(-36.6,11.4,-34.6,8.8).lineTo(-32,11.2).curveTo(-33.2,13.1,-35.4,14.2).curveTo(-37.4,15.2,-40.1,15.2).curveTo(-44.6,15.2,-47.4,12.4).closePath().moveTo(-43.8,-1.6).curveTo(-45.1,-0.2,-45.4,2.3).lineTo(-36.3,2.3).lineTo(-36.3,1.9).curveTo(-36.5,-0.4,-37.6,-1.7).curveTo(-38.7,-2.9,-40.7,-2.9).curveTo(-42.7,-2.9,-43.8,-1.6).closePath().moveTo(-70.4,12.2).curveTo(-73.1,9.2,-73.1,4.3).lineTo(-73.1,4.1).curveTo(-73.1,0.9,-71.8,-1.6).curveTo(-70.6,-4.1,-68.3,-5.4).curveTo(-66.2,-6.7,-63.3,-6.7).curveTo(-59,-6.7,-56.3,-3.9).curveTo(-53.7,-1.2,-53.5,3.4).lineTo(-53.4,4.4).curveTo(-53.4,7.5,-54.6,10).curveTo(-55.8,12.5,-58.1,13.8).curveTo(-60.3,15.2,-63.2,15.2).curveTo(-67.7,15.2,-70.4,12.2).closePath().moveTo(-67,-1).curveTo(-68.3,0.8,-68.3,4.4).curveTo(-68.3,7.7,-67,9.6).curveTo(-65.6,11.4,-63.2,11.4).curveTo(-60.8,11.4,-59.5,9.6).curveTo(-58.2,7.6,-58.1,4.1).curveTo(-58.1,0.8,-59.5,-1).curveTo(-60.9,-2.9,-63.3,-2.9).curveTo(-65.6,-2.9,-67,-1).closePath().moveTo(75.3,14.8).lineTo(75.3,-6.4).lineTo(79.8,-6.4).lineTo(79.9,-3.9).curveTo(81.7,-6.7,84.8,-6.7).curveTo(85.7,-6.7,86.4,-6.4).lineTo(86.4,-2).lineTo(84.4,-2.1).curveTo(81.2,-2.1,80,0.3).lineTo(80,14.8).closePath().moveTo(16,14.8).lineTo(16,-6.4).lineTo(20.5,-6.4).lineTo(20.6,-3.9).curveTo(22.4,-6.7,25.5,-6.7).curveTo(26.5,-6.7,27.1,-6.4).lineTo(27.1,-2).lineTo(25.1,-2.1).curveTo(21.9,-2.1,20.8,0.3).lineTo(20.8,14.8).closePath().moveTo(-81.8,14.8).lineTo(-81.8,1).curveTo(-81.8,-0.9,-82.6,-1.9).curveTo(-83.5,-2.8,-85.6,-2.8).curveTo(-87.2,-2.9,-88.2,-1.9).curveTo(-89.3,-1.1,-89.6,0.3).lineTo(-89.6,14.8).lineTo(-94.4,14.8).lineTo(-94.4,0.9).curveTo(-94.5,-2.8,-98.2,-2.8).curveTo(-101,-2.9,-102.2,-0.5).lineTo(-102.2,14.8).lineTo(-107,14.8).lineTo(-107,-6.4).lineTo(-102.5,-6.4).lineTo(-102.3,-4.2).curveTo(-100.2,-6.7,-96.2,-6.7).curveTo(-92,-6.7,-90.5,-3.5).curveTo(-88.1,-6.7,-84,-6.7).curveTo(-80.5,-6.7,-78.8,-4.8).curveTo(-77.1,-2.8,-77,0.9).lineTo(-77,14.8).closePath();
	this.shape_1.setTransform(5,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#293745").setStrokeStyle(5,2,0,3).moveTo(-125,-30).lineTo(125,-30).lineTo(125,30).lineTo(-125,30).closePath();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#D8D8DD").beginStroke().moveTo(-120,24.8).lineTo(-120,-24.8).lineTo(120,-24.8).lineTo(120,24.8).closePath();
	this.shape_3.setTransform(2.5,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#293745").setStrokeStyle(5,2,0,3).moveTo(-125,-30).lineTo(125,-30).lineTo(125,30).lineTo(-125,30).closePath();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-125,30).lineTo(-125,-30).lineTo(125,-30).lineTo(125,30).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-32.5,255,65);


(lib.btnharddisk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#2A3744").beginStroke().moveTo(40.3,14.2).curveTo(38.3,13.3,37.2,11.7).curveTo(36,10.1,36,8.2).lineTo(40.6,8.2).curveTo(40.7,9.8,41.9,10.7).curveTo(43.1,11.6,45,11.6).curveTo(46.9,11.6,47.9,11).curveTo(48.9,10.2,48.9,9.1).curveTo(48.9,7.8,47.8,7.1).curveTo(46.8,6.4,44.3,5.9).curveTo(41.9,5.4,40.3,4.7).curveTo(36.7,2.9,36.7,-0.3).curveTo(36.7,-3,39,-4.9).curveTo(41.4,-6.7,44.9,-6.7).curveTo(48.7,-6.7,51,-4.9).curveTo(53.4,-2.9,53.4,-0).lineTo(48.6,-0).curveTo(48.6,-1.3,47.6,-2.3).curveTo(46.6,-3.2,44.9,-3.2).curveTo(43.3,-3.2,42.4,-2.4).curveTo(41.4,-1.7,41.4,-0.5).curveTo(41.4,0.6,42.3,1.2).curveTo(43.2,1.8,46,2.4).curveTo(48.8,3,50.4,3.9).curveTo(52,4.7,52.8,5.9).curveTo(53.5,7.1,53.5,8.8).curveTo(53.5,11.7,51.2,13.4).curveTo(48.8,15.2,45,15.2).curveTo(42.4,15.2,40.3,14.2).closePath().moveTo(5.7,12.2).curveTo(3.4,9.2,3.4,4.1).curveTo(3.4,-0.8,5.6,-3.8).curveTo(7.9,-6.7,11.7,-6.7).curveTo(15.1,-6.7,17.1,-4.4).lineTo(17.1,-15.2).lineTo(21.9,-15.2).lineTo(21.9,14.8).lineTo(17.6,14.8).lineTo(17.4,12.6).curveTo(15.2,15.2,11.7,15.2).curveTo(8,15.2,5.7,12.2).closePath().moveTo(9.4,-1).curveTo(8.1,0.8,8.1,4.5).curveTo(8.1,7.7,9.4,9.5).curveTo(10.6,11.3,12.9,11.3).curveTo(15.8,11.3,17.1,8.7).lineTo(17.1,-0.3).curveTo(15.8,-2.9,12.9,-2.9).curveTo(10.6,-2.8,9.4,-1).closePath().moveTo(-16.9,12.2).curveTo(-19.2,9.2,-19.2,4.1).curveTo(-19.2,-0.8,-16.9,-3.8).curveTo(-14.7,-6.7,-10.8,-6.7).curveTo(-7.5,-6.7,-5.4,-4.4).lineTo(-5.4,-15.2).lineTo(-0.7,-15.2).lineTo(-0.7,14.8).lineTo(-5,14.8).lineTo(-5.2,12.6).curveTo(-7.3,15.2,-10.9,15.2).curveTo(-14.6,15.2,-16.9,12.2).closePath().moveTo(-13.2,-1).curveTo(-14.4,0.8,-14.4,4.5).curveTo(-14.4,7.7,-13.2,9.5).curveTo(-12,11.3,-9.7,11.3).curveTo(-6.8,11.3,-5.4,8.7).lineTo(-5.4,-0.3).curveTo(-6.7,-2.9,-9.6,-2.9).curveTo(-11.9,-2.8,-13.2,-1).closePath().moveTo(-52.6,13.3).curveTo(-54.6,11.6,-54.6,8.9).curveTo(-54.6,5.5,-52.1,3.7).curveTo(-49.6,1.9,-44.9,1.9).lineTo(-42,1.9).lineTo(-42,0.5).curveTo(-42,-1.2,-42.9,-2.1).curveTo(-43.9,-3.1,-45.7,-3.1).curveTo(-47.4,-3.1,-48.4,-2.3).curveTo(-49.4,-1.5,-49.4,-0.3).lineTo(-54.2,-0.3).curveTo(-54.2,-2,-53,-3.5).curveTo(-51.9,-5,-49.9,-5.9).curveTo(-47.9,-6.7,-45.5,-6.7).curveTo(-41.7,-6.7,-39.5,-4.9).curveTo(-37.3,-3,-37.3,0.4).lineTo(-37.3,9.9).curveTo(-37.3,12.7,-36.5,14.5).lineTo(-36.5,14.8).lineTo(-41.3,14.8).curveTo(-41.6,14.2,-41.9,12.9).curveTo(-44.1,15.2,-47.4,15.2).curveTo(-50.6,15.2,-52.6,13.3).closePath().moveTo(-48.5,5.8).curveTo(-49.9,6.7,-49.9,8.4).curveTo(-49.9,9.7,-49,10.6).curveTo(-48.1,11.4,-46.5,11.4).curveTo(-45.1,11.4,-43.9,10.7).curveTo(-42.6,10,-42,8.8).lineTo(-42,4.9).lineTo(-44.6,4.9).curveTo(-47.2,4.9,-48.5,5.8).closePath().moveTo(70.7,14.8).lineTo(64.5,5.8).lineTo(62.4,7.9).lineTo(62.4,14.8).lineTo(57.6,14.8).lineTo(57.6,-15.2).lineTo(62.4,-15.2).lineTo(62.4,2.1).lineTo(69.7,-6.4).lineTo(75.4,-6.4).lineTo(67.5,2.5).lineTo(76.2,14.8).closePath().moveTo(27.1,14.8).lineTo(27.1,-6.4).lineTo(31.9,-6.4).lineTo(31.9,14.8).closePath().moveTo(-32.4,14.8).lineTo(-32.4,-6.4).lineTo(-27.8,-6.4).lineTo(-27.7,-4).curveTo(-26,-6.7,-22.9,-6.7).curveTo(-21.9,-6.7,-21.3,-6.5).lineTo(-21.3,-2).lineTo(-23.2,-2.2).curveTo(-26.5,-2.2,-27.6,0.4).lineTo(-27.6,14.8).closePath().moveTo(-63.5,14.8).lineTo(-63.5,1.2).curveTo(-63.5,-1,-64.4,-1.9).curveTo(-65.4,-2.9,-67.2,-2.9).curveTo(-70.1,-2.9,-71.5,-0.3).lineTo(-71.5,14.8).lineTo(-76.2,14.8).lineTo(-76.2,-15.2).lineTo(-71.5,-15.2).lineTo(-71.5,-4.1).curveTo(-69.1,-6.7,-65.6,-6.7).curveTo(-58.8,-6.7,-58.7,1).lineTo(-58.7,14.8).closePath().moveTo(27.5,-10.1).curveTo(26.8,-10.7,26.8,-11.9).curveTo(26.8,-12.9,27.5,-13.7).curveTo(28.2,-14.4,29.5,-14.4).curveTo(30.8,-14.4,31.5,-13.7).curveTo(32.2,-12.9,32.2,-11.9).curveTo(32.2,-10.7,31.5,-10.1).curveTo(30.8,-9.3,29.5,-9.3).curveTo(28.2,-9.3,27.5,-10.1).closePath();
	this.shape.setTransform(1.3,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#2A3744").beginStroke().moveTo(40.3,14.3).curveTo(38.3,13.3,37.2,11.7).curveTo(36,10.1,36,8.1).lineTo(40.6,8.1).curveTo(40.7,9.8,41.9,10.8).curveTo(43.1,11.7,45,11.6).curveTo(46.9,11.7,47.9,10.9).curveTo(48.9,10.2,48.9,9).curveTo(48.9,7.8,47.8,7.1).curveTo(46.8,6.5,44.3,6).curveTo(41.9,5.4,40.3,4.6).curveTo(36.7,3,36.7,-0.3).curveTo(36.7,-3.1,39,-4.9).curveTo(41.4,-6.7,44.9,-6.7).curveTo(48.7,-6.7,51,-4.8).curveTo(53.4,-3,53.4,0).lineTo(48.6,0).curveTo(48.6,-1.4,47.6,-2.2).curveTo(46.6,-3.1,44.9,-3.1).curveTo(43.3,-3.1,42.4,-2.5).curveTo(41.4,-1.7,41.4,-0.5).curveTo(41.4,0.6,42.3,1.2).curveTo(43.2,1.8,46,2.4).curveTo(48.8,3,50.4,3.9).curveTo(52,4.7,52.8,5.9).curveTo(53.5,7.1,53.5,8.8).curveTo(53.5,11.7,51.2,13.4).curveTo(48.8,15.2,45,15.2).curveTo(42.4,15.2,40.3,14.3).closePath().moveTo(5.7,12.2).curveTo(3.4,9.2,3.4,4.1).curveTo(3.4,-0.8,5.6,-3.7).curveTo(7.9,-6.7,11.7,-6.7).curveTo(15.1,-6.7,17.1,-4.4).lineTo(17.1,-15.2).lineTo(21.9,-15.2).lineTo(21.9,14.8).lineTo(17.6,14.8).lineTo(17.4,12.6).curveTo(15.2,15.2,11.7,15.2).curveTo(8,15.2,5.7,12.2).closePath().moveTo(9.4,-1).curveTo(8.1,0.8,8.1,4.5).curveTo(8.1,7.7,9.4,9.6).curveTo(10.6,11.3,12.9,11.3).curveTo(15.8,11.3,17.1,8.8).lineTo(17.1,-0.3).curveTo(15.8,-2.9,12.9,-2.8).curveTo(10.6,-2.8,9.4,-1).closePath().moveTo(-16.9,12.2).curveTo(-19.2,9.2,-19.2,4.1).curveTo(-19.2,-0.8,-16.9,-3.7).curveTo(-14.7,-6.7,-10.8,-6.7).curveTo(-7.5,-6.7,-5.4,-4.4).lineTo(-5.4,-15.2).lineTo(-0.7,-15.2).lineTo(-0.7,14.8).lineTo(-5,14.8).lineTo(-5.2,12.6).curveTo(-7.3,15.2,-10.9,15.2).curveTo(-14.6,15.2,-16.9,12.2).closePath().moveTo(-13.2,-1).curveTo(-14.4,0.8,-14.4,4.5).curveTo(-14.4,7.7,-13.2,9.6).curveTo(-12,11.3,-9.7,11.3).curveTo(-6.8,11.3,-5.4,8.8).lineTo(-5.4,-0.3).curveTo(-6.7,-2.9,-9.6,-2.8).curveTo(-11.9,-2.8,-13.2,-1).closePath().moveTo(-52.6,13.4).curveTo(-54.6,11.6,-54.6,8.9).curveTo(-54.6,5.5,-52.1,3.7).curveTo(-49.6,1.9,-44.9,1.9).lineTo(-42,1.9).lineTo(-42,0.5).curveTo(-42,-1.1,-42.9,-2.1).curveTo(-43.9,-3.1,-45.7,-3.1).curveTo(-47.4,-3.1,-48.4,-2.3).curveTo(-49.4,-1.5,-49.4,-0.2).lineTo(-54.2,-0.2).curveTo(-54.2,-2,-53,-3.5).curveTo(-51.9,-5,-49.9,-5.8).curveTo(-47.9,-6.7,-45.5,-6.7).curveTo(-41.7,-6.7,-39.5,-4.8).curveTo(-37.3,-3,-37.3,0.4).lineTo(-37.3,9.9).curveTo(-37.3,12.8,-36.5,14.4).lineTo(-36.5,14.8).lineTo(-41.3,14.8).curveTo(-41.6,14.2,-41.9,12.8).curveTo(-44.1,15.2,-47.4,15.2).curveTo(-50.6,15.2,-52.6,13.4).closePath().moveTo(-48.5,5.8).curveTo(-49.9,6.7,-49.9,8.4).curveTo(-49.9,9.8,-49,10.6).curveTo(-48.1,11.4,-46.5,11.4).curveTo(-45.1,11.4,-43.9,10.7).curveTo(-42.6,10,-42,8.9).lineTo(-42,4.9).lineTo(-44.6,4.9).curveTo(-47.2,4.9,-48.5,5.8).closePath().moveTo(70.7,14.8).lineTo(64.5,5.7).lineTo(62.4,7.9).lineTo(62.4,14.8).lineTo(57.6,14.8).lineTo(57.6,-15.2).lineTo(62.4,-15.2).lineTo(62.4,2.1).lineTo(69.7,-6.4).lineTo(75.4,-6.4).lineTo(67.5,2.5).lineTo(76.2,14.8).closePath().moveTo(27.1,14.8).lineTo(27.1,-6.4).lineTo(31.9,-6.4).lineTo(31.9,14.8).closePath().moveTo(-32.4,14.8).lineTo(-32.4,-6.4).lineTo(-27.8,-6.4).lineTo(-27.7,-3.9).curveTo(-26,-6.7,-22.9,-6.7).curveTo(-21.9,-6.7,-21.3,-6.4).lineTo(-21.3,-2).lineTo(-23.2,-2.1).curveTo(-26.5,-2.1,-27.6,0.3).lineTo(-27.6,14.8).closePath().moveTo(-63.5,14.8).lineTo(-63.5,1.1).curveTo(-63.5,-1,-64.4,-1.9).curveTo(-65.4,-2.8,-67.2,-2.8).curveTo(-70.1,-2.9,-71.5,-0.3).lineTo(-71.5,14.8).lineTo(-76.2,14.8).lineTo(-76.2,-15.2).lineTo(-71.5,-15.2).lineTo(-71.5,-4).curveTo(-69.1,-6.7,-65.6,-6.7).curveTo(-58.8,-6.7,-58.7,1).lineTo(-58.7,14.8).closePath().moveTo(27.5,-10).curveTo(26.8,-10.8,26.8,-11.8).curveTo(26.8,-12.9,27.5,-13.7).curveTo(28.2,-14.4,29.5,-14.4).curveTo(30.8,-14.4,31.5,-13.7).curveTo(32.2,-12.9,32.2,-11.8).curveTo(32.2,-10.8,31.5,-10).curveTo(30.8,-9.3,29.5,-9.3).curveTo(28.2,-9.3,27.5,-10).closePath();
	this.shape_1.setTransform(6.3,2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#293745").setStrokeStyle(5,2,0,3).moveTo(-125,-30).lineTo(125,-30).lineTo(125,30).lineTo(-125,30).closePath();

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#D8D8DD").beginStroke().moveTo(-120,24.8).lineTo(-120,-24.8).lineTo(120,-24.8).lineTo(120,24.8).closePath();
	this.shape_3.setTransform(2.5,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// bg
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#293745").setStrokeStyle(5,2,0,3).moveTo(-125,-30).lineTo(125,-30).lineTo(125,30).lineTo(-125,30).closePath();

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-125,30).lineTo(-125,-30).lineTo(125,-30).lineTo(125,30).closePath();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-32.5,255,65);


(lib.arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(1.6,6.7).curveTo(-0.5,7.2,-2.3,6.1).curveTo(-4.2,5,-4.7,2.8).lineTo(-5.5,-0.3).curveTo(-6,-2.4,-4.9,-4.3).curveTo(-3.8,-6.1,-1.7,-6.7).curveTo(0.4,-7.2,2.3,-6.1).curveTo(4.2,-4.9,4.7,-2.8).lineTo(5.5,0.3).curveTo(6,2.4,4.9,4.3).curveTo(3.7,6.2,1.6,6.7).closePath();
	this.shape.setTransform(39.7,68.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.3,6.1).curveTo(-4.2,5,-4.7,2.8).lineTo(-5.5,-0.3).curveTo(-6,-2.4,-4.9,-4.3).curveTo(-3.8,-6.1,-1.7,-6.7).curveTo(0.4,-7.2,2.3,-6.1).curveTo(4.2,-4.9,4.7,-2.8).lineTo(5.5,0.3).curveTo(6,2.4,4.9,4.3).curveTo(3.7,6.2,1.6,6.7).curveTo(0.9,6.8,0.3,6.8).curveTo(-1.1,6.8,-2.3,6.1).closePath();
	this.shape_1.setTransform(39.7,68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-5.4,0).curveTo(-5.4,-2.2,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.2,5.5,0).curveTo(5.5,2.2,3.9,3.8).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.8).curveTo(-5.4,2.2,-5.4,0).closePath();
	this.shape_2.setTransform(51.7,108.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.8,3.8).curveTo(-5.4,2.2,-5.5,0).curveTo(-5.4,-2.2,-3.8,-3.8).curveTo(-2.3,-5.4,0,-5.4).curveTo(2.2,-5.4,3.8,-3.8).curveTo(5.5,-2.2,5.4,0).curveTo(5.5,2.2,3.8,3.8).curveTo(2.2,5.4,0,5.4).curveTo(-2.3,5.4,-3.8,3.8).closePath();
	this.shape_3.setTransform(51.7,108.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.1,0).curveTo(-4.1,-1.7,-2.9,-2.9).curveTo(-1.7,-4.1,0,-4.1).curveTo(1.7,-4.1,2.9,-2.9).curveTo(4.1,-1.7,4.1,0).curveTo(4.1,1.7,2.9,2.9).curveTo(1.7,4.1,0,4.1).curveTo(-1.7,4.1,-2.9,2.9).curveTo(-4.1,1.7,-4.1,0).closePath();
	this.shape_4.setTransform(46,86.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.9,2.9).curveTo(-4.1,1.7,-4.1,0).curveTo(-4.1,-1.7,-2.9,-2.9).curveTo(-1.7,-4.1,-0,-4.1).curveTo(1.7,-4.1,2.9,-2.9).curveTo(4.1,-1.7,4.1,0).curveTo(4.1,1.7,2.9,2.9).curveTo(1.7,4.1,-0,4.1).curveTo(-1.7,4.1,-2.9,2.9).closePath();
	this.shape_5.setTransform(46,86.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-3.9,-0).curveTo(-3.9,-1.6,-2.8,-2.8).curveTo(-1.6,-3.9,0,-3.9).curveTo(1.6,-3.9,2.8,-2.8).curveTo(3.9,-1.6,3.9,-0).curveTo(3.9,1.6,2.8,2.8).curveTo(1.6,3.9,0,3.9).curveTo(-1.6,3.9,-2.8,2.8).curveTo(-3.9,1.6,-3.9,-0).closePath();
	this.shape_6.setTransform(26.3,52.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.8,2.8).curveTo(-3.9,1.6,-3.9,-0).curveTo(-3.9,-1.6,-2.8,-2.8).curveTo(-1.6,-3.9,0,-3.9).curveTo(1.6,-3.9,2.8,-2.8).curveTo(3.9,-1.6,3.9,-0).curveTo(3.9,1.6,2.8,2.8).curveTo(1.6,3.9,0,3.9).curveTo(-1.6,3.9,-2.8,2.8).closePath();
	this.shape_7.setTransform(26.3,52.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-17.9,-0).curveTo(-17.9,-7.4,-12.6,-12.6).curveTo(-7.4,-17.9,0,-17.9).curveTo(7.4,-17.9,12.6,-12.6).curveTo(17.9,-7.4,17.9,-0).curveTo(17.9,7.4,12.6,12.6).curveTo(7.4,17.8,0,17.8).curveTo(-7.4,17.8,-12.6,12.6).curveTo(-17.9,7.4,-17.9,-0).closePath();
	this.shape_8.setTransform(29.4,29);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-12.6,12.6).curveTo(-17.9,7.4,-17.9,-0).curveTo(-17.9,-7.4,-12.6,-12.6).curveTo(-7.4,-17.9,0,-17.8).curveTo(7.4,-17.9,12.6,-12.6).curveTo(17.9,-7.4,17.9,-0).curveTo(17.9,7.4,12.6,12.6).curveTo(7.4,17.9,0,17.9).curveTo(-7.4,17.9,-12.6,12.6).closePath();
	this.shape_9.setTransform(29.4,29);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(11.7,-9.7).lineTo(14.7,1.2).lineTo(14.8,2).lineTo(15.3,27.2).lineTo(16.1,31).lineTo(14.3,31.4).lineTo(12.6,26.9).lineTo(0.2,5.1).lineTo(-1,0.9).curveTo(-1.3,0.1,-2.2,0).lineTo(-3.4,-0).curveTo(-4.2,-0,-5,-0.6).lineTo(-7.6,-2.8).curveTo(-8.3,-3.3,-8.5,-4.2).lineTo(-15.9,-31.3).lineTo(-13.3,-30.8).curveTo(-10.4,-29.3,-9.3,-24.7).curveTo(-8.3,-20.3,-6.5,-14.4).curveTo(-5.1,-9.9,-4.4,-8.1).curveTo(-4.3,-7.9,-4.1,-7.7).lineTo(0.6,-4.5).curveTo(0.9,-4.3,1.1,-4.4).lineTo(6.9,-5.6).curveTo(7.7,-5.7,8.5,-6.4).closePath();
	this.shape_10.setTransform(49.2,122.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CCCCCC").beginStroke().moveTo(12.5,26.8).lineTo(0.1,5.1).lineTo(-1.1,0.9).curveTo(-1.4,0.1,-2.3,-0).lineTo(-3.5,-0.1).curveTo(-4.3,-0.1,-5.1,-0.7).lineTo(-7.7,-2.8).curveTo(-8.4,-3.3,-8.6,-4.2).lineTo(-16,-31.4).lineTo(-13.4,-30.8).curveTo(-10.5,-29.3,-9.4,-24.7).curveTo(-8.4,-20.3,-6.6,-14.5).curveTo(-5.2,-10,-4.5,-8.2).lineTo(-4.2,-7.8).lineTo(0.5,-4.6).curveTo(0.8,-4.4,1,-4.5).lineTo(6.8,-5.6).curveTo(7.6,-5.8,8.4,-6.5).lineTo(11.6,-9.8).lineTo(14.6,1.2).lineTo(14.7,1.9).lineTo(15.2,27.2).lineTo(16,30.9).lineTo(14.2,31.4).closePath();
	this.shape_11.setTransform(49.3,123);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(32.6,76.6).lineTo(30.8,77.1).lineTo(29,72.5).lineTo(16.7,50.8).lineTo(15.4,46.6).curveTo(15.2,45.8,14.3,45.7).lineTo(13,45.6).curveTo(12.2,45.6,11.5,45).lineTo(8.8,42.9).curveTo(8.2,42.4,7.9,41.5).lineTo(0.5,14.3).lineTo(-10,-5.4).curveTo(-10.3,-5.9,-10.4,-6.4).curveTo(-10.5,-7.4,-9.5,-7.9).curveTo(-8.3,-8.4,-8.5,-10.3).curveTo(-8.7,-12.2,-10.1,-14.6).lineTo(-29.2,-50.8).lineTo(-32.3,-55.1).curveTo(-33.2,-56.4,-32.2,-57.7).lineTo(-23.9,-68.7).curveTo(-23.4,-69.4,-22.5,-69.7).lineTo(-2.3,-77.1).curveTo(-1.7,-77.3,-1.4,-77.3).lineTo(2,-77.3).curveTo(2.8,-77.3,3.4,-76.8).lineTo(16.9,-67.4).curveTo(18,-66.6,17.8,-65.3).curveTo(16.8,-55.5,18.5,-45.8).curveTo(18.6,-45.4,18.5,-44.9).curveTo(16.5,-34.2,16.5,-22.6).curveTo(16.5,0.3,24.4,21.3).curveTo(26.3,27.8,28.1,33.2).lineTo(28.4,34.2).curveTo(28.6,35.4,28.1,35.9).lineTo(31.2,46.9).lineTo(31.3,47.6).lineTo(31.7,72.9).closePath();
	this.shape_12.setTransform(32.7,77.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#CCCCCC").beginStroke().moveTo(29.1,72.6).lineTo(16.8,50.9).lineTo(15.5,46.7).curveTo(15.3,45.9,14.4,45.8).lineTo(13.1,45.7).curveTo(12.3,45.7,11.6,45.1).lineTo(8.9,43).curveTo(8.3,42.5,8,41.6).lineTo(0.6,14.4).lineTo(-9.9,-5.3).curveTo(-10.2,-5.8,-10.3,-6.3).curveTo(-10.4,-7.3,-9.4,-7.8).curveTo(-8.2,-8.3,-8.4,-10.2).curveTo(-8.6,-12.1,-10,-14.5).lineTo(-29.1,-50.7).lineTo(-32.2,-55).curveTo(-33.1,-56.3,-32.1,-57.6).lineTo(-23.8,-68.6).curveTo(-23.3,-69.3,-22.4,-69.6).lineTo(-2.2,-77).lineTo(-1.3,-77.2).lineTo(2.1,-77.2).curveTo(2.9,-77.2,3.5,-76.7).lineTo(17,-67.3).curveTo(18.1,-66.5,17.9,-65.2).curveTo(16.9,-55.4,18.6,-45.7).curveTo(18.7,-45.3,18.6,-44.8).curveTo(16.6,-34.1,16.6,-22.5).curveTo(16.6,0.4,24.5,21.4).curveTo(26.4,27.9,28.2,33.3).lineTo(28.5,34.3).curveTo(28.7,35.5,28.2,36).lineTo(31.3,47).lineTo(31.4,47.7).lineTo(31.8,73).lineTo(32.7,76.7).lineTo(30.9,77.2).closePath();
	this.shape_13.setTransform(32.6,77.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,67.5,156.5);


(lib.moederbord = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// click
	this.instance = new lib.click("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(303.1,160.3,1,1,0,0,0,21.9,12);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({scaleX:1.69,scaleY:1.69,y:160.4,alpha:0},7).wait(9));

	// moederbord
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(26.8,26.9).lineTo(-26.8,26.9).lineTo(-26.8,-26.9).lineTo(26.8,-26.9).closePath();
	this.shape.setTransform(222.1,39);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-26.8,26.9).lineTo(-26.8,-26.9).lineTo(26.8,-26.9).lineTo(26.8,26.9).closePath();
	this.shape_1.setTransform(222.1,39);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(0,37.5).lineTo(-37.3,0).lineTo(0,-37.5).lineTo(37.4,0).closePath();
	this.shape_2.setTransform(220.8,110.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-37.3,0).lineTo(0,-37.5).lineTo(37.4,0).lineTo(0,37.5).closePath();
	this.shape_3.setTransform(220.8,110.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(21.9,22).lineTo(-21.9,22).lineTo(-21.9,-22).lineTo(21.9,-22).closePath();
	this.shape_4.setTransform(161,155.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-21.9,22).lineTo(-21.9,-22).lineTo(21.9,-22).lineTo(21.9,22).closePath();
	this.shape_5.setTransform(161,155.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(158.9,-0.4).curveTo(150.3,3.1,140.9,3.2).lineTo(139.5,4.9).curveTo(135.4,4.9,131.6,4.3).lineTo(130.4,2.5).curveTo(119.2,0.6,109.6,-6.1).lineTo(107.1,-5.9).curveTo(99.9,-11.3,94.9,-18.4).lineTo(95.5,-20.5).curveTo(86.4,-34.2,86.4,-50.5).lineTo(86.4,-105.2).curveTo(86.4,-107.2,85.1,-108.6).curveTo(83.7,-110,81.7,-110).lineTo(32.8,-110).lineTo(31.3,-108.6).curveTo(30.8,-108,29.9,-108).lineTo(21.2,-108).curveTo(20.2,-108,19.7,-108.7).lineTo(18.6,-110).lineTo(6.6,-110).curveTo(4.6,-110,3.2,-108.5).curveTo(1.8,-107.1,1.8,-105.1).lineTo(2.6,-50.7).curveTo(2.6,-28.6,-13,-13).curveTo(-28.5,2.6,-50.5,2.6).curveTo(-60.6,2.6,-69.9,-1.1).curveTo(-78.8,-4.7,-86,-11.3).lineTo(-88.4,-11.3).curveTo(-94.8,-17.5,-98.8,-25.2).lineTo(-98.1,-27.5).curveTo(-103.5,-38.8,-103.5,-51.2).lineTo(-103.5,-101.2).curveTo(-103.5,-102.1,-104.1,-102.7).curveTo(-104.8,-103.4,-105.7,-103.4).lineTo(-158.4,-103.4).curveTo(-159.3,-103.4,-159.9,-102.7).curveTo(-160.5,-102.1,-160.5,-101.2).lineTo(-160.5,-91.3).lineTo(-165.1,-91.3).lineTo(-165.1,-93.7).lineTo(-178,-93.7).lineTo(-178,-91.3).lineTo(-184.9,-91.3).lineTo(-184.9,-90.6).lineTo(-186.8,-90.6).lineTo(-186.8,-83).lineTo(-182.9,-83).lineTo(-182.9,-77.1).lineTo(-186.8,-77.1).lineTo(-186.8,-69.2).lineTo(-181.8,-67).lineTo(-178.8,-67).lineTo(-178.8,-65).lineTo(-173.8,-65).lineTo(-173.8,-63.9).lineTo(-186.8,-63.9).lineTo(-186.8,-47.4).lineTo(-181.8,-46).lineTo(-174,-46).lineTo(-174,-41.7).lineTo(-186.1,-41.7).lineTo(-186.1,-20.9).lineTo(-182.2,-20).lineTo(-174,-20).lineTo(-174,-15.6).lineTo(-186.1,-15.6).lineTo(-186.1,5.1).lineTo(-184.6,5.7).lineTo(-174.3,5.7).lineTo(-174.3,10.5).lineTo(-186.4,10.5).lineTo(-186.4,31.8).lineTo(-174.3,31.8).lineTo(-174.3,37).lineTo(-186.4,37).lineTo(-186.4,49.8).lineTo(-174.3,49.8).lineTo(-174.3,53.7).lineTo(-187.4,53.7).lineTo(-187.4,68.8).lineTo(-168.8,68.8).lineTo(-168.8,73.6).lineTo(-187.5,73.6).lineTo(-187.5,88.8).lineTo(-174.6,88.8).lineTo(-174.6,104.6).curveTo(-174.6,106.4,-173.3,107.6).curveTo(-172.1,108.9,-170.3,108.9).lineTo(-57.9,108.9).lineTo(-57.9,110).lineTo(-24.6,110).lineTo(-24.6,109.3).lineTo(-18.8,109.3).curveTo(-17.6,109.3,-16.6,108.9).lineTo(-15.2,108.2).curveTo(-14.2,107.8,-13,107.8).lineTo(34.4,107.8).lineTo(36.7,108.9).curveTo(38.1,109.7,39.4,108.8).lineTo(40.2,108.2).curveTo(42.1,106.9,42.1,104.8).lineTo(42.1,99).lineTo(43.2,96.4).lineTo(43.2,92.9).lineTo(44.4,91.9).lineTo(44.6,80.4).curveTo(44.6,80.2,44.8,80.1).curveTo(45.1,79.8,45.6,79.8).curveTo(46,79.9,46.2,80.2).lineTo(46.2,94.9).curveTo(45.8,94.9,45.4,95.2).curveTo(44.4,95.6,44.4,96.7).lineTo(44.4,98.6).lineTo(44.2,100.5).curveTo(44.1,102.6,45.3,103.3).lineTo(45.4,103.8).curveTo(45.7,104.3,46.2,104.3).curveTo(47.1,104.3,47.1,103.2).lineTo(48.9,103.1).curveTo(50.7,102.7,50.7,101.1).curveTo(50.7,99.2,50.2,98.4).curveTo(49.8,97.6,48.6,97.6).curveTo(48.8,96.9,48.7,95.8).curveTo(48.7,93.6,47.7,91.7).lineTo(47.7,78.9).curveTo(48.9,79.1,48.9,78.9).lineTo(48.9,75.2).lineTo(149.2,75.2).lineTo(149.4,84.7).curveTo(149.6,94.7,148.6,96.6).lineTo(149.9,96.6).lineTo(149.9,97.4).curveTo(149.4,97.6,148.8,97.9).curveTo(147.6,98.8,147.6,100.2).curveTo(147.6,102.9,149.9,102.9).lineTo(150.4,103.7).curveTo(151.2,104.4,152.2,104.4).lineTo(152.2,103.4).lineTo(152.9,103.4).lineTo(152.9,104.1).lineTo(153.9,103.7).curveTo(155,102.9,155,101.8).curveTo(155,100.2,154.7,99.5).curveTo(154.2,98.7,153.2,98.7).lineTo(153.2,91.8).curveTo(153.2,91.9,154.3,91.8).curveTo(155.5,91.9,155.5,93).lineTo(160.9,93).lineTo(161.6,92.4).lineTo(183.8,92.4).curveTo(185.4,92.4,186.4,91.3).curveTo(187.5,90.2,187.5,88.7).lineTo(187.5,3.7).curveTo(187.5,2,186.4,0.8).curveTo(185.2,-0.4,183.5,-0.4).closePath();
	this.shape_6.setTransform(187.5,110);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-57.9,110).lineTo(-57.9,108.9).lineTo(-170.3,108.9).curveTo(-172.1,108.9,-173.4,107.6).curveTo(-174.6,106.4,-174.6,104.6).lineTo(-174.6,88.8).lineTo(-187.5,88.8).lineTo(-187.5,73.6).lineTo(-168.8,73.6).lineTo(-168.8,68.8).lineTo(-187.4,68.8).lineTo(-187.4,53.7).lineTo(-174.4,53.7).lineTo(-174.4,49.8).lineTo(-186.4,49.8).lineTo(-186.4,37).lineTo(-174.3,37).lineTo(-174.3,31.7).lineTo(-186.4,31.7).lineTo(-186.4,10.4).lineTo(-174.4,10.4).lineTo(-174.4,5.6).lineTo(-184.6,5.6).lineTo(-186.2,5).lineTo(-186.2,-15.7).lineTo(-174,-15.7).lineTo(-174,-20).lineTo(-182.2,-20).lineTo(-186.1,-20.9).lineTo(-186.1,-41.7).lineTo(-174,-41.7).lineTo(-174,-46).lineTo(-181.8,-46).lineTo(-186.9,-47.5).lineTo(-186.9,-63.9).lineTo(-173.8,-63.9).lineTo(-173.8,-65).lineTo(-178.8,-65).lineTo(-178.8,-67.1).lineTo(-181.7,-67.1).lineTo(-186.9,-69.2).lineTo(-186.9,-77.1).lineTo(-182.9,-77.1).lineTo(-182.9,-83).lineTo(-186.9,-83).lineTo(-186.9,-90.7).lineTo(-185,-90.7).lineTo(-185,-91.3).lineTo(-178.1,-91.3).lineTo(-178.1,-93.7).lineTo(-165.2,-93.7).lineTo(-165.2,-91.3).lineTo(-160.5,-91.3).lineTo(-160.5,-101.3).curveTo(-160.6,-102.1,-159.9,-102.7).curveTo(-159.3,-103.4,-158.4,-103.4).lineTo(-105.7,-103.4).curveTo(-104.8,-103.4,-104.2,-102.7).curveTo(-103.5,-102.1,-103.5,-101.3).lineTo(-103.5,-51.2).curveTo(-103.5,-38.7,-98.1,-27.6).lineTo(-98.8,-25.2).curveTo(-94.7,-17.5,-88.4,-11.3).lineTo(-86,-11.3).curveTo(-78.9,-4.7,-69.9,-1.1).curveTo(-60.6,2.6,-50.5,2.6).curveTo(-28.6,2.6,-13,-13).curveTo(2.6,-28.6,2.6,-50.7).lineTo(1.8,-105.2).curveTo(1.7,-107.1,3.1,-108.6).curveTo(4.6,-110,6.5,-110).lineTo(18.6,-110).lineTo(19.7,-108.7).curveTo(20.2,-108,21.2,-108).lineTo(29.9,-108).curveTo(30.8,-108,31.3,-108.6).lineTo(32.7,-110).lineTo(81.7,-110).curveTo(83.7,-110,85,-108.6).curveTo(86.4,-107.2,86.4,-105.2).lineTo(86.4,-50.5).curveTo(86.4,-34.2,95.5,-20.6).lineTo(94.9,-18.5).curveTo(99.9,-11.3,107.1,-5.9).lineTo(109.6,-6.1).curveTo(119.2,0.5,130.5,2.5).lineTo(131.6,4.3).curveTo(135.5,4.9,139.5,4.9).lineTo(140.9,3.2).curveTo(150.3,3.1,159,-0.5).lineTo(183.5,-0.5).curveTo(185.2,-0.5,186.3,0.8).curveTo(187.5,2,187.5,3.7).lineTo(187.5,88.6).curveTo(187.5,90.2,186.4,91.3).curveTo(185.4,92.4,183.8,92.4).lineTo(161.5,92.4).lineTo(161,93).lineTo(155.5,93).curveTo(155.5,91.9,154.3,91.8).lineTo(153.1,91.8).lineTo(153.2,98.7).curveTo(154.2,98.7,154.7,99.5).curveTo(155,100.2,155,101.8).curveTo(155,102.9,153.9,103.7).lineTo(152.9,104.1).lineTo(152.9,103.4).lineTo(152.2,103.4).lineTo(152.2,104.4).curveTo(151.2,104.4,150.4,103.7).lineTo(150,102.9).curveTo(147.6,102.9,147.6,100.1).curveTo(147.5,98.8,148.7,98).curveTo(149.4,97.5,150,97.4).lineTo(150,96.6).lineTo(148.6,96.6).curveTo(149.6,94.6,149.4,84.7).lineTo(149.2,75.1).lineTo(48.8,75.1).lineTo(48.8,79).curveTo(48.8,79.1,47.7,79).lineTo(47.7,91.7).curveTo(48.7,93.6,48.7,95.8).curveTo(48.8,96.9,48.6,97.6).curveTo(49.8,97.6,50.3,98.4).curveTo(50.6,99.2,50.6,101.1).curveTo(50.7,102.7,48.8,103.1).lineTo(47,103.3).curveTo(47,104.3,46.2,104.3).curveTo(45.7,104.3,45.4,103.8).lineTo(45.3,103.3).curveTo(44.1,102.6,44.2,100.5).lineTo(44.4,98.6).lineTo(44.4,96.6).curveTo(44.5,95.6,45.3,95.2).curveTo(45.7,94.9,46.2,94.8).lineTo(46.2,80.2).curveTo(46,79.9,45.6,79.8).curveTo(45.1,79.8,44.8,80.1).lineTo(44.6,80.4).lineTo(44.3,91.9).lineTo(43.2,92.9).lineTo(43.2,96.4).lineTo(42.1,99).lineTo(42.1,104.8).curveTo(42.1,106.9,40.3,108.2).lineTo(39.4,108.8).curveTo(38.1,109.6,36.7,109).lineTo(34.3,107.8).lineTo(-13.1,107.8).curveTo(-14.2,107.8,-15.2,108.2).lineTo(-16.7,108.9).curveTo(-17.6,109.3,-18.8,109.3).lineTo(-24.6,109.3).lineTo(-24.6,110).closePath();
	this.shape_7.setTransform(187.5,110);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(1));

	// ram
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(287,290.8);
	this.instance_1.alpha = 0;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(287,203.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).lineTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).closePath();
	this.shape_8.setTransform(287,203.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-49.3,15.6).lineTo(-49.3,-11.8).lineTo(-47.8,-11.8).lineTo(-47.8,-15.6).lineTo(47.1,-15.6).lineTo(47.1,-1.1).lineTo(49.3,-1.1).lineTo(49.3,15.6).closePath();
	this.shape_9.setTransform(287,203.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},14).to({state:[{t:this.shape_9},{t:this.shape_8}]},15).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,y:203.8,alpha:1},14).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,382.5,308.4);


(lib.harddisk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// arm
	this.instance = new lib.arm("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(80.8,106.4,1,1,0,0,0,29.4,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:29.5,rotation:-45,x:80.9,y:106.3},9).to({rotation:-17.2},10).to({regX:29.4,rotation:-39.7,x:80.8,y:106.4},10).to({rotation:0},10).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-24.4,55.8).lineTo(-24.2,47.9).curveTo(-24.2,47,-24.6,46.1).lineTo(-24.7,45.9).curveTo(-25.4,44.3,-24.5,42.8).lineTo(-21.3,37.6).curveTo(-21.6,34.2,-21.2,29.8).curveTo(-20.5,21.1,-17.5,16.6).lineTo(-15.7,16.6).curveTo(-14.1,13.4,-10.9,9.9).curveTo(-4.6,3,3.2,1.3).lineTo(4.8,-1.1).lineTo(9.8,-2.3).curveTo(15.7,-3.2,20.7,-1.1).lineTo(33.2,-1.1).lineTo(35.6,-2.6).lineTo(43.3,-2.6).curveTo(45,-2.5,46.5,-3.4).curveTo(49.5,-5.4,49,-10.5).curveTo(49,-11.2,48.1,-12.4).curveTo(46.4,-14.8,42.1,-17.2).curveTo(41.5,-17.6,41.1,-18.3).curveTo(40.3,-19.7,41.2,-21.2).curveTo(42.1,-22.8,43.9,-22.5).curveTo(44.9,-22.4,45.6,-21.9).lineTo(47.8,-20.3).lineTo(57.5,-34.4).lineTo(54,-37.4).curveTo(53.6,-37.8,53.4,-38.5).curveTo(53.2,-39.9,54.5,-41.5).curveTo(56,-43.4,55.7,-46.8).curveTo(55.5,-49.9,54,-51.1).curveTo(52.4,-52.2,50.6,-52.7).curveTo(48.4,-53.2,44.2,-53.1).curveTo(43.3,-53.1,42.3,-53.6).curveTo(40.3,-54.6,40.3,-56.6).curveTo(40.3,-58.7,38,-59.2).lineTo(35.6,-59.2).curveTo(34,-59.5,32.4,-59.2).curveTo(29.3,-58.8,29.3,-56.2).lineTo(29.3,-51.5).lineTo(29.1,-50.3).curveTo(28.2,-49.2,24.5,-49.2).curveTo(20.8,-49.2,16.9,-46.9).curveTo(14.9,-45.9,13.6,-44.8).curveTo(13.1,-44.3,11.8,-43.8).curveTo(9.2,-42.9,5.2,-42.9).lineTo(-1.1,-42.9).curveTo(-2,-42.7,-3,-43.4).curveTo(-4.9,-44.7,-4.9,-48.8).lineTo(-4.9,-60.7).curveTo(-4.7,-61.4,-5,-62.2).curveTo(-5.5,-63.7,-7.7,-63.7).lineTo(-16.5,-63.7).curveTo(-17.2,-63.7,-17.7,-63.3).lineTo(-30.7,-54).curveTo(-31.5,-53.4,-31.6,-52.4).lineTo(-32.1,-46.4).lineTo(-33.3,-43.9).curveTo(-35.1,-41.9,-38.3,-43.6).curveTo(-41.1,-45,-42.7,-46.7).curveTo(-43.3,-47.3,-44.2,-47.4).curveTo(-45.1,-47.5,-45.8,-47).lineTo(-55.1,-40.5).curveTo(-55.8,-40.1,-56,-39.3).curveTo(-56.3,-38.6,-56.1,-37.8).lineTo(-55.1,-34.8).curveTo(-54.8,-34.1,-54.4,-33.6).lineTo(-44.8,-24.1).lineTo(-43.7,-22.6).curveTo(-42.5,-20.8,-42.3,-18.9).curveTo(-41.4,-12.9,-49.7,-9).curveTo(-50.1,-8.8,-50.7,-8.8).lineTo(-52.6,-8.8).curveTo(-53.6,-8.8,-54.4,-8.2).lineTo(-57.2,-5.4).curveTo(-57.8,-4.8,-57.8,-3.9).lineTo(-57.8,35.3).curveTo(-57.8,36.1,-57.1,36.6).curveTo(-55.7,37.6,-55.7,40.2).curveTo(-55.7,42.7,-57,43.5).curveTo(-57.8,44,-57.8,44.9).lineTo(-57.8,61.9).curveTo(-57.8,62.6,-57.3,63.2).curveTo(-56.8,63.7,-56,63.7).lineTo(-28.8,63.7).curveTo(-28.1,63.7,-27.5,63.2).curveTo(-27,62.7,-27,62).curveTo(-26.6,57.7,-24.4,55.8).closePath();
	this.shape.setTransform(67.8,74.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-55.9,63.7).curveTo(-56.6,63.7,-57.1,63.2).curveTo(-57.7,62.7,-57.7,61.9).lineTo(-57.7,44.9).curveTo(-57.7,44,-56.9,43.5).curveTo(-55.5,42.7,-55.5,40.2).curveTo(-55.5,37.6,-56.9,36.6).curveTo(-57.7,36.2,-57.7,35.3).lineTo(-57.7,-3.9).curveTo(-57.7,-4.7,-57,-5.4).lineTo(-54.2,-8.1).curveTo(-53.5,-8.8,-52.5,-8.8).lineTo(-50.6,-8.8).curveTo(-50,-8.8,-49.6,-9).curveTo(-41.3,-12.9,-42.1,-18.9).curveTo(-42.4,-20.8,-43.5,-22.6).lineTo(-44.6,-24.1).lineTo(-54.2,-33.6).curveTo(-54.7,-34,-54.9,-34.8).lineTo(-55.9,-37.8).curveTo(-56.2,-38.5,-55.9,-39.3).curveTo(-55.6,-40,-55,-40.5).lineTo(-45.6,-47).curveTo(-44.9,-47.5,-44,-47.4).curveTo(-43.1,-47.3,-42.5,-46.6).curveTo(-41,-45,-38.1,-43.6).curveTo(-35,-41.9,-33.1,-43.9).lineTo(-31.9,-46.4).lineTo(-31.5,-52.5).curveTo(-31.4,-53.4,-30.6,-54).lineTo(-17.6,-63.3).curveTo(-17,-63.7,-16.3,-63.7).lineTo(-7.5,-63.7).curveTo(-5.3,-63.7,-4.8,-62.2).curveTo(-4.6,-61.4,-4.8,-60.7).lineTo(-4.8,-48.7).curveTo(-4.8,-44.6,-2.8,-43.3).curveTo(-1.9,-42.7,-0.9,-42.9).lineTo(5.4,-42.9).curveTo(9.3,-42.9,11.9,-43.8).curveTo(13.3,-44.3,13.8,-44.8).curveTo(15,-45.9,17,-46.9).curveTo(21,-49.2,24.7,-49.2).curveTo(28.4,-49.2,29.3,-50.3).lineTo(29.4,-51.5).lineTo(29.4,-56.2).curveTo(29.4,-58.8,32.6,-59.2).curveTo(34.2,-59.5,35.7,-59.2).lineTo(38.1,-59.2).curveTo(40.5,-58.7,40.5,-56.6).curveTo(40.5,-54.5,42.4,-53.6).curveTo(43.4,-53.1,44.4,-53).curveTo(48.6,-53.1,50.7,-52.7).curveTo(52.5,-52.2,54.1,-51.1).curveTo(55.7,-50,55.9,-46.7).curveTo(56.1,-43.4,54.6,-41.5).curveTo(53.3,-39.9,53.6,-38.5).curveTo(53.7,-37.8,54.1,-37.5).lineTo(57.7,-34.5).lineTo(47.9,-20.3).lineTo(45.7,-21.9).curveTo(45,-22.3,44.1,-22.5).curveTo(42.3,-22.8,41.4,-21.3).curveTo(40.5,-19.7,41.3,-18.3).curveTo(41.7,-17.6,42.3,-17.2).curveTo(46.6,-14.8,48.3,-12.4).curveTo(49.1,-11.2,49.1,-10.5).curveTo(49.7,-5.4,46.6,-3.4).curveTo(45.1,-2.5,43.5,-2.5).lineTo(35.7,-2.5).lineTo(33.4,-1).lineTo(20.9,-1).curveTo(15.9,-3.2,9.9,-2.3).lineTo(5,-1).lineTo(3.4,1.3).curveTo(-4.5,3,-10.8,10).curveTo(-13.9,13.4,-15.5,16.5).lineTo(-17.4,16.5).curveTo(-20.3,21.1,-21.1,29.9).curveTo(-21.4,34.2,-21.2,37.7).lineTo(-24.4,42.8).curveTo(-25.2,44.3,-24.5,46).lineTo(-24.5,46.1).curveTo(-24.1,47,-24.1,47.9).lineTo(-24.2,55.8).curveTo(-26.5,57.7,-26.8,62).curveTo(-26.9,62.7,-27.4,63.2).curveTo(-27.9,63.7,-28.6,63.7).closePath();
	this.shape_1.setTransform(67.7,74.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.6,0).curveTo(-4.6,-1.9,-3.2,-3.2).curveTo(-1.9,-4.6,0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.3).curveTo(1.9,4.6,0,4.6).curveTo(-1.9,4.6,-3.2,3.3).curveTo(-4.6,1.9,-4.6,0).closePath();
	this.shape_2.setTransform(199,121.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.3,3.2).curveTo(-4.6,1.9,-4.6,-0).curveTo(-4.6,-1.9,-3.3,-3.2).curveTo(-1.9,-4.6,-0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,-0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,-0,4.6).curveTo(-1.9,4.6,-3.3,3.2).closePath();
	this.shape_3.setTransform(199,121.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.6,0).curveTo(-4.6,-1.9,-3.2,-3.2).curveTo(-1.9,-4.6,0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,0,4.6).curveTo(-1.9,4.6,-3.2,3.2).curveTo(-4.6,1.9,-4.6,0).closePath();
	this.shape_4.setTransform(216.2,159.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.3,3.2).curveTo(-4.6,1.9,-4.6,0).curveTo(-4.6,-1.9,-3.3,-3.2).curveTo(-1.9,-4.6,-0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,-0,4.6).curveTo(-1.9,4.6,-3.3,3.2).closePath();
	this.shape_5.setTransform(216.2,159.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.6,0).curveTo(-4.6,-1.9,-3.2,-3.2).curveTo(-1.9,-4.6,0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,0,4.6).curveTo(-1.9,4.6,-3.2,3.2).curveTo(-4.6,1.9,-4.6,0).closePath();
	this.shape_6.setTransform(254.7,143.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.2,3.2).curveTo(-4.6,1.9,-4.6,-0).curveTo(-4.6,-1.9,-3.2,-3.3).curveTo(-1.9,-4.6,-0,-4.6).curveTo(1.9,-4.6,3.2,-3.3).curveTo(4.6,-1.9,4.6,-0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,-0,4.6).curveTo(-1.8,4.6,-3.2,3.2).closePath();
	this.shape_7.setTransform(254.7,143.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.6,0).curveTo(-4.6,-1.9,-3.2,-3.2).curveTo(-1.9,-4.6,0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.2).curveTo(1.9,4.6,0,4.6).curveTo(-1.9,4.6,-3.2,3.2).curveTo(-4.6,1.9,-4.6,0).closePath();
	this.shape_8.setTransform(237.9,104.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.2,3.3).curveTo(-4.6,1.9,-4.6,0).curveTo(-4.6,-1.9,-3.2,-3.2).curveTo(-1.9,-4.6,0,-4.6).curveTo(1.9,-4.6,3.2,-3.2).curveTo(4.6,-1.9,4.6,0).curveTo(4.6,1.9,3.2,3.3).curveTo(1.9,4.6,0,4.6).curveTo(-1.9,4.6,-3.2,3.3).closePath();
	this.shape_9.setTransform(237.9,104.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-13.4,-0).curveTo(-13.4,-5.5,-9.5,-9.5).curveTo(-5.6,-13.4,0,-13.4).curveTo(5.6,-13.4,9.5,-9.5).curveTo(13.4,-5.5,13.4,-0).curveTo(13.4,5.5,9.5,9.5).curveTo(5.6,13.4,0,13.4).curveTo(-5.6,13.4,-9.5,9.5).curveTo(-13.4,5.5,-13.4,-0).closePath();
	this.shape_10.setTransform(226.8,132.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-9.5,9.5).curveTo(-13.4,5.5,-13.4,-0).curveTo(-13.4,-5.5,-9.5,-9.5).curveTo(-5.6,-13.4,0,-13.4).curveTo(5.6,-13.4,9.5,-9.5).curveTo(13.4,-5.5,13.4,-0).curveTo(13.4,5.5,9.5,9.5).curveTo(5.6,13.4,0,13.4).curveTo(-5.6,13.4,-9.5,9.5).closePath();
	this.shape_11.setTransform(226.8,132.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-44.2,-0).curveTo(-44.2,-18.3,-31.2,-31.2).curveTo(-18.3,-44.1,0,-44.1).curveTo(18.3,-44.1,31.2,-31.2).curveTo(44.2,-18.2,44.2,-0).curveTo(44.2,18.2,31.2,31.2).curveTo(18.3,44.1,0,44.1).curveTo(-18.3,44.1,-31.2,31.2).curveTo(-44.2,18.2,-44.2,-0).closePath();
	this.shape_12.setTransform(226.8,132.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-31.2,31.2).curveTo(-44.2,18.2,-44.2,-0).curveTo(-44.2,-18.3,-31.2,-31.2).curveTo(-18.3,-44.1,0,-44.1).curveTo(18.3,-44.1,31.2,-31.2).curveTo(44.2,-18.2,44.2,-0).curveTo(44.2,18.2,31.2,31.2).curveTo(18.3,44.1,0,44.1).curveTo(-18.3,44.1,-31.2,31.2).closePath();
	this.shape_13.setTransform(226.8,132.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-121.4,-0).curveTo(-121.4,-24.7,-111.9,-47.2).curveTo(-102.7,-68.9,-85.9,-85.7).curveTo(-69.1,-102.5,-47.3,-111.7).curveTo(-24.7,-121.2,0,-121.2).curveTo(24.7,-121.2,47.3,-111.7).curveTo(69.1,-102.5,85.9,-85.7).curveTo(102.7,-68.9,111.9,-47.2).curveTo(121.4,-24.7,121.4,-0).curveTo(121.4,24.6,111.9,47.2).curveTo(102.7,68.9,85.9,85.7).curveTo(69.1,102.5,47.3,111.7).curveTo(24.7,121.2,0,121.2).curveTo(-24.7,121.2,-47.3,111.7).curveTo(-69.1,102.5,-85.9,85.7).curveTo(-102.7,68.9,-111.9,47.2).curveTo(-121.4,24.6,-121.4,-0).closePath();
	this.shape_14.setTransform(226.8,132.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-47.3,111.7).curveTo(-69.1,102.5,-85.9,85.7).curveTo(-102.7,68.9,-111.9,47.2).curveTo(-121.4,24.6,-121.4,-0).curveTo(-121.4,-24.7,-111.9,-47.2).curveTo(-102.7,-68.9,-85.9,-85.7).curveTo(-69.1,-102.5,-47.3,-111.7).curveTo(-24.7,-121.2,0,-121.2).curveTo(24.7,-121.2,47.3,-111.7).curveTo(69.1,-102.5,85.9,-85.7).curveTo(102.7,-68.9,111.9,-47.2).curveTo(121.4,-24.7,121.4,-0).curveTo(121.4,24.6,111.9,47.2).curveTo(102.7,68.9,85.9,85.7).curveTo(69.1,102.5,47.3,111.7).curveTo(24.7,121.2,0,121.2).curveTo(-24.7,121.2,-47.3,111.7).closePath();
	this.shape_15.setTransform(226.8,132.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(187.5,89.7).lineTo(185.3,-99.3).curveTo(185.3,-100,184.8,-100.5).curveTo(184.2,-101,183.5,-101).lineTo(182.3,-101).lineTo(182.3,-119.9).curveTo(182.3,-123.2,179.9,-125.5).curveTo(177.6,-127.9,174.3,-127.9).lineTo(145.5,-127.9).lineTo(143.1,-130).lineTo(123.7,-130).lineTo(121.3,-127.9).lineTo(-74.9,-127.9).lineTo(-77.3,-130).lineTo(-87,-130).lineTo(-89.4,-127.9).lineTo(-141.2,-127.9).lineTo(-143.6,-130).lineTo(-162.9,-130).lineTo(-165.4,-127.9).lineTo(-182.7,-127.9).curveTo(-184.7,-127.9,-186.1,-126.5).curveTo(-187.5,-125.1,-187.5,-123.1).lineTo(-187.5,123.8).curveTo(-187.5,125.8,-186.1,127.2).curveTo(-184.7,128.6,-182.7,128.6).lineTo(-165.1,128.6).lineTo(-163.6,130).lineTo(-141.9,130).lineTo(-140.3,128.6).lineTo(122.1,128.6).lineTo(123.7,130).lineTo(143.1,130).lineTo(144.6,128.6).lineTo(174.3,128.6).curveTo(177.6,128.6,179.9,126.3).curveTo(182.3,124,182.3,120.6).lineTo(182.3,105.1).lineTo(184.7,105.1).curveTo(185.6,105.1,186.2,104.5).curveTo(186.8,103.8,186.8,102.9).lineTo(186.6,97.3).closePath();
	this.shape_16.setTransform(187.5,130);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#CCCCCC").beginStroke().moveTo(123.7,130).lineTo(122.1,128.6).lineTo(-140.3,128.6).lineTo(-141.8,130).lineTo(-163.5,130).lineTo(-165.1,128.6).lineTo(-182.6,128.6).curveTo(-184.7,128.6,-186.1,127.2).curveTo(-187.5,125.8,-187.5,123.8).lineTo(-187.5,-123.1).curveTo(-187.5,-125.1,-186.1,-126.5).curveTo(-184.7,-127.9,-182.6,-127.9).lineTo(-165.3,-127.9).lineTo(-162.9,-130).lineTo(-143.6,-130).lineTo(-141.1,-127.9).lineTo(-89.4,-127.9).lineTo(-86.9,-130).lineTo(-77.3,-130).lineTo(-74.9,-127.9).lineTo(121.3,-127.9).lineTo(123.7,-130).lineTo(143.1,-130).lineTo(145.5,-127.9).lineTo(174.3,-127.9).curveTo(177.6,-127.9,179.9,-125.5).curveTo(182.3,-123.2,182.3,-119.9).lineTo(182.3,-101).lineTo(183.5,-101).curveTo(184.3,-101,184.8,-100.5).curveTo(185.3,-100,185.3,-99.3).lineTo(187.5,89.7).lineTo(186.7,97.3).lineTo(186.8,102.9).curveTo(186.8,103.8,186.2,104.5).curveTo(185.6,105.1,184.7,105.1).lineTo(182.3,105.1).lineTo(182.3,120.6).curveTo(182.3,124,179.9,126.3).curveTo(177.6,128.6,174.3,128.6).lineTo(144.6,128.6).lineTo(143.1,130).closePath();
	this.shape_17.setTransform(187.5,130);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(1.6,6.7).curveTo(-0.5,7.2,-2.3,6.1).curveTo(-4.2,5,-4.7,2.8).lineTo(-5.5,-0.3).curveTo(-6,-2.4,-4.9,-4.3).curveTo(-3.8,-6.1,-1.7,-6.7).curveTo(0.4,-7.2,2.3,-6.1).curveTo(4.2,-4.9,4.7,-2.8).lineTo(5.5,0.3).curveTo(6,2.4,4.9,4.3).curveTo(3.7,6.2,1.6,6.7).closePath();
	this.shape_18.setTransform(91.1,146.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.3,6.1).curveTo(-4.2,5,-4.7,2.8).lineTo(-5.5,-0.3).curveTo(-6,-2.4,-4.9,-4.3).curveTo(-3.8,-6.1,-1.7,-6.7).curveTo(0.4,-7.2,2.3,-6.1).curveTo(4.2,-4.9,4.7,-2.8).lineTo(5.5,0.3).curveTo(6,2.4,4.9,4.3).curveTo(3.7,6.2,1.6,6.7).curveTo(0.9,6.8,0.3,6.8).curveTo(-1.1,6.8,-2.3,6.1).closePath();
	this.shape_19.setTransform(91.1,146.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-5.4,0).curveTo(-5.4,-2.2,-3.8,-3.8).curveTo(-2.2,-5.4,0,-5.4).curveTo(2.3,-5.4,3.9,-3.8).curveTo(5.5,-2.2,5.5,0).curveTo(5.5,2.2,3.9,3.8).curveTo(2.3,5.4,0,5.4).curveTo(-2.2,5.4,-3.8,3.8).curveTo(-5.4,2.2,-5.4,0).closePath();
	this.shape_20.setTransform(103.1,186.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-3.8,3.8).curveTo(-5.4,2.2,-5.5,0).curveTo(-5.4,-2.2,-3.8,-3.8).curveTo(-2.3,-5.4,0,-5.4).curveTo(2.2,-5.4,3.8,-3.8).curveTo(5.5,-2.2,5.4,0).curveTo(5.5,2.2,3.8,3.8).curveTo(2.2,5.4,0,5.4).curveTo(-2.3,5.4,-3.8,3.8).closePath();
	this.shape_21.setTransform(103.1,186.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-4.1,0).curveTo(-4.1,-1.7,-2.9,-2.9).curveTo(-1.7,-4.1,0,-4.1).curveTo(1.7,-4.1,2.9,-2.9).curveTo(4.1,-1.7,4.1,0).curveTo(4.1,1.7,2.9,2.9).curveTo(1.7,4.1,0,4.1).curveTo(-1.7,4.1,-2.9,2.9).curveTo(-4.1,1.7,-4.1,0).closePath();
	this.shape_22.setTransform(97.4,163.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.9,2.9).curveTo(-4.1,1.7,-4.1,0).curveTo(-4.1,-1.7,-2.9,-2.9).curveTo(-1.7,-4.1,-0,-4.1).curveTo(1.7,-4.1,2.9,-2.9).curveTo(4.1,-1.7,4.1,0).curveTo(4.1,1.7,2.9,2.9).curveTo(1.7,4.1,-0,4.1).curveTo(-1.7,4.1,-2.9,2.9).closePath();
	this.shape_23.setTransform(97.4,163.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-3.9,-0).curveTo(-3.9,-1.6,-2.8,-2.8).curveTo(-1.6,-3.9,0,-3.9).curveTo(1.6,-3.9,2.8,-2.8).curveTo(3.9,-1.6,3.9,-0).curveTo(3.9,1.6,2.8,2.8).curveTo(1.6,3.9,0,3.9).curveTo(-1.6,3.9,-2.8,2.8).curveTo(-3.9,1.6,-3.9,-0).closePath();
	this.shape_24.setTransform(77.6,130.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-2.8,2.8).curveTo(-3.9,1.6,-3.9,-0).curveTo(-3.9,-1.6,-2.8,-2.8).curveTo(-1.6,-3.9,0,-3.9).curveTo(1.6,-3.9,2.8,-2.8).curveTo(3.9,-1.6,3.9,-0).curveTo(3.9,1.6,2.8,2.8).curveTo(1.6,3.9,0,3.9).curveTo(-1.6,3.9,-2.8,2.8).closePath();
	this.shape_25.setTransform(77.6,130.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(-17.9,-0).curveTo(-17.9,-7.4,-12.6,-12.6).curveTo(-7.4,-17.9,0,-17.9).curveTo(7.4,-17.9,12.6,-12.6).curveTo(17.9,-7.4,17.9,-0).curveTo(17.9,7.4,12.6,12.6).curveTo(7.4,17.8,0,17.8).curveTo(-7.4,17.8,-12.6,12.6).curveTo(-17.9,7.4,-17.9,-0).closePath();
	this.shape_26.setTransform(80.8,106.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#CCCCCC").beginStroke().moveTo(-12.6,12.6).curveTo(-17.9,7.4,-17.9,-0).curveTo(-17.9,-7.4,-12.6,-12.6).curveTo(-7.4,-17.9,0,-17.8).curveTo(7.4,-17.9,12.6,-12.6).curveTo(17.9,-7.4,17.9,-0).curveTo(17.9,7.4,12.6,12.6).curveTo(7.4,17.9,0,17.9).curveTo(-7.4,17.9,-12.6,12.6).closePath();
	this.shape_27.setTransform(80.8,106.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(11.7,-9.7).lineTo(14.7,1.2).lineTo(14.8,2).lineTo(15.3,27.2).lineTo(16.1,31).lineTo(14.3,31.4).lineTo(12.6,26.9).lineTo(0.2,5.1).lineTo(-1,0.9).curveTo(-1.3,0.1,-2.2,0).lineTo(-3.4,-0).curveTo(-4.2,-0,-5,-0.6).lineTo(-7.6,-2.8).curveTo(-8.3,-3.3,-8.5,-4.2).lineTo(-15.9,-31.3).lineTo(-13.3,-30.8).curveTo(-10.4,-29.3,-9.3,-24.7).curveTo(-8.3,-20.3,-6.5,-14.4).curveTo(-5.1,-9.9,-4.4,-8.1).curveTo(-4.3,-7.9,-4.1,-7.7).lineTo(0.6,-4.5).curveTo(0.9,-4.3,1.1,-4.4).lineTo(6.9,-5.6).curveTo(7.7,-5.7,8.5,-6.4).closePath();
	this.shape_28.setTransform(100.5,200.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#CCCCCC").beginStroke().moveTo(12.5,26.8).lineTo(0.1,5.1).lineTo(-1.1,0.9).curveTo(-1.4,0.1,-2.3,-0).lineTo(-3.5,-0.1).curveTo(-4.3,-0.1,-5.1,-0.7).lineTo(-7.7,-2.8).curveTo(-8.4,-3.3,-8.6,-4.2).lineTo(-16,-31.4).lineTo(-13.4,-30.8).curveTo(-10.5,-29.3,-9.4,-24.7).curveTo(-8.4,-20.3,-6.6,-14.5).curveTo(-5.2,-10,-4.5,-8.2).lineTo(-4.2,-7.8).lineTo(0.5,-4.6).curveTo(0.8,-4.4,1,-4.5).lineTo(6.8,-5.6).curveTo(7.6,-5.8,8.4,-6.5).lineTo(11.6,-9.8).lineTo(14.6,1.2).lineTo(14.7,1.9).lineTo(15.2,27.2).lineTo(16,30.9).lineTo(14.2,31.4).closePath();
	this.shape_29.setTransform(100.6,200.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill().beginStroke("#2B3744").setStrokeStyle(2).moveTo(32.6,76.6).lineTo(30.8,77.1).lineTo(29,72.5).lineTo(16.7,50.8).lineTo(15.4,46.6).curveTo(15.2,45.8,14.3,45.7).lineTo(13,45.6).curveTo(12.2,45.6,11.5,45).lineTo(8.8,42.9).curveTo(8.2,42.4,7.9,41.5).lineTo(0.5,14.3).lineTo(-10,-5.4).curveTo(-10.3,-5.9,-10.4,-6.4).curveTo(-10.5,-7.4,-9.5,-7.9).curveTo(-8.3,-8.4,-8.5,-10.3).curveTo(-8.7,-12.2,-10.1,-14.6).lineTo(-29.2,-50.8).lineTo(-32.3,-55.1).curveTo(-33.2,-56.4,-32.2,-57.7).lineTo(-23.9,-68.7).curveTo(-23.4,-69.4,-22.5,-69.7).lineTo(-2.3,-77.1).curveTo(-1.7,-77.3,-1.4,-77.3).lineTo(2,-77.3).curveTo(2.8,-77.3,3.4,-76.8).lineTo(16.9,-67.4).curveTo(18,-66.6,17.8,-65.3).curveTo(16.8,-55.5,18.5,-45.8).curveTo(18.6,-45.4,18.5,-44.9).curveTo(16.5,-34.2,16.5,-22.6).curveTo(16.5,0.3,24.4,21.3).curveTo(26.3,27.8,28.1,33.2).lineTo(28.4,34.2).curveTo(28.6,35.4,28.1,35.9).lineTo(31.2,46.9).lineTo(31.3,47.6).lineTo(31.7,72.9).closePath();
	this.shape_30.setTransform(84.1,154.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#CCCCCC").beginStroke().moveTo(29.1,72.6).lineTo(16.8,50.9).lineTo(15.5,46.7).curveTo(15.3,45.9,14.4,45.8).lineTo(13.1,45.7).curveTo(12.3,45.7,11.6,45.1).lineTo(8.9,43).curveTo(8.3,42.5,8,41.6).lineTo(0.6,14.4).lineTo(-9.9,-5.3).curveTo(-10.2,-5.8,-10.3,-6.3).curveTo(-10.4,-7.3,-9.4,-7.8).curveTo(-8.2,-8.3,-8.4,-10.2).curveTo(-8.6,-12.1,-10,-14.5).lineTo(-29.1,-50.7).lineTo(-32.2,-55).curveTo(-33.1,-56.3,-32.1,-57.6).lineTo(-23.8,-68.6).curveTo(-23.3,-69.3,-22.4,-69.6).lineTo(-2.2,-77).lineTo(-1.3,-77.2).lineTo(2.1,-77.2).curveTo(2.9,-77.2,3.5,-76.7).lineTo(17,-67.3).curveTo(18.1,-66.5,17.9,-65.2).curveTo(16.9,-55.4,18.6,-45.7).curveTo(18.7,-45.3,18.6,-44.8).curveTo(16.6,-34.1,16.6,-22.5).curveTo(16.6,0.4,24.5,21.4).curveTo(26.4,27.9,28.2,33.3).lineTo(28.5,34.3).curveTo(28.7,35.5,28.2,36).lineTo(31.3,47).lineTo(31.4,47.7).lineTo(31.8,73).lineTo(32.7,76.7).lineTo(30.9,77.2).closePath();
	this.shape_31.setTransform(84,154.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_31},{t:this.shape_30},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.3,-3.2,382.4,264.2);


// stage content:
(lib.mm4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		// stopt de hoofdtijdlijn
		
		this.stop();
		
		// buttons naar de pagina's
		
		this.btn_moederbord.addEventListener("click", goMoederbord);
		this.btn_harddisk.addEventListener("click", goHarddisk,);
		
		function goMoederbord() {
			window.open("pages/moederbord.html", "_top");
		}
		
		function goHarddisk() {
			window.open("pages/harddisk.html", "_top");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Moederbord
	this.moederbord = new lib.moederbord();
	this.moederbord.parent = this;
	this.moederbord.setTransform(137.5,802.9,1,1,10,0,0,190.2,111.6);
	this.moederbord._off = true;

	this.timeline.addTween(cjs.Tween.get(this.moederbord).wait(29).to({_off:false},0).to({x:236.5,y:362.6},10,cjs.Ease.get(1)).wait(21));

	// Harddisk
	this.harddisk = new lib.harddisk();
	this.harddisk.parent = this;
	this.harddisk.setTransform(622.5,847.6,1,1,10.7,0,0,184.8,128.9);
	this.harddisk._off = true;

	this.timeline.addTween(cjs.Tween.get(this.harddisk).wait(29).to({_off:false},0).to({x:713.5,y:375.6},10,cjs.Ease.get(1)).wait(21));

	// btn_moederbord
	this.btn_moederbord = new lib.btnmoederbord();
	this.btn_moederbord.parent = this;
	this.btn_moederbord.setTransform(225,-70);
	this.btn_moederbord._off = true;
	new cjs.ButtonHelper(this.btn_moederbord, 0, 1, 2, false, new lib.btnmoederbord(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_moederbord).wait(29).to({_off:false},0).to({x:175,y:80},10,cjs.Ease.get(1)).wait(21));

	// btn_harddisk
	this.btn_harddisk = new lib.btnharddisk();
	this.btn_harddisk.parent = this;
	this.btn_harddisk.setTransform(835,-70);
	this.btn_harddisk._off = true;
	new cjs.ButtonHelper(this.btn_harddisk, 0, 1, 2, false, new lib.btnharddisk(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_harddisk).wait(29).to({_off:false},0).to({x:785,y:80},10,cjs.Ease.get(1)).wait(21));

	// paars
	this.paars = new lib.paars();
	this.paars.parent = this;
	this.paars.setTransform(1229.1,330,1,1,0,0,0,269.1,330);

	this.timeline.addTween(cjs.Tween.get(this.paars).to({x:691},29,cjs.Ease.get(1)).wait(31));

	// mint
	this.mint = new lib.mint();
	this.mint.parent = this;
	this.mint.setTransform(-268,330,1,1,0,0,0,269.1,330);

	this.timeline.addTween(cjs.Tween.get(this.mint).to({x:269.1},29,cjs.Ease.get(1)).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.1,330,2035.2,660);
// library properties:
lib.properties = {
	width: 960,
	height: 660,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;



/* %%%%%%%%%%%%%%%%%%%%%%%%%%% hieronder is voor de image map %%%%%%%%%%%%%%%%%%%%%%%%%%% */

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_setTextOfLayer(objId,x,newText) { //v9.0
  with (document) if (getElementById && ((obj=getElementById(objId))!=null))
    with (obj) innerHTML = unescape(newText);
}

/* %%%%%%%%%%%%%%%%%%%%%%%%%%% hieronder is voor de titel en text voor het moederbord %%%%%%%%%%%%%%%%%%%%%%%%%%% */


function cpu() {
	document.getElementById("titel").innerHTML = "CPU";
	document.getElementById("text").innerHTML = "Een processor, ook wel bekend als CPU (Engels: central processing unit) of in het Nederlands centrale verwerkingseenheid (cve) genoemd, is een stuk hardware in een computer dat instaat voor basisbewerkingen en -controle bij het uitvoeren van programmacode. De eerste processors waren uitgevoerd als printplaten vol met losse componenten en IC's, maar sinds de jaren 70 ontstonden de eerste zogenaamde microprocessors, waarbij het hele systeem op één enkele chip werd vervaardigd. De eerste microprocessor was de i4004 van Intel.";
}

function gpu_1() {
	document.getElementById("titel").innerHTML = "GPU 1";
	document.getElementById("text").innerHTML = "Een graphics processing unit of GPU is een processor die gebruikt wordt voor alle videotaken. Hiermee neemt hij deze taken van de CPU (Central Processing Unit) over. De GPU bevindt zich meestal op een videokaart. De voorloper van de GPU (de Video Display Controller) werd reeds gebruikt in de jaren 70 en 80. Spelcomputers en pc's zoals de machines van Atari, Commodore en Apple hadden vaak een specifieke chip die bepaalde videobewerkingen kon uitvoeren zonder tussenkomst van de CPU. Deze bewerkingen bleven echter nog vrij beperkt tot vooral bitmaptransformaties (een zogenaamde \"blitter\") of het laten bewegen van een sprite.";
}

function gpu_2() {
	document.getElementById("titel").innerHTML = "GPU 2";
	document.getElementById("text").innerHTML = "Een graphics processing unit of GPU is een processor die gebruikt wordt voor alle videotaken. Hiermee neemt hij deze taken van de CPU (Central Processing Unit) over. De GPU bevindt zich meestal op een videokaart. De voorloper van de GPU (de Video Display Controller) werd reeds gebruikt in de jaren 70 en 80. Spelcomputers en pc's zoals de machines van Atari, Commodore en Apple hadden vaak een specifieke chip die bepaalde videobewerkingen kon uitvoeren zonder tussenkomst van de CPU. Deze bewerkingen bleven echter nog vrij beperkt tot vooral bitmaptransformaties (een zogenaamde \"blitter\") of het laten bewegen van een sprite.";
}

function hubs() {
	document.getElementById("titel").innerHTML = "Hubs";
	document.getElementById("text").innerHTML = "Een hub is net als een switch een apparaat in de infrastructuur van een netwerk. Het Engelse woord \'hub\' betekent \'naaf\'. Men kan hierbij denken aan de naaf in een fietswiel, het middelpunt van de spaken. In een computernetwerk is een hub het middelpunt van de aangesloten computers.";
}

function ram_slot() {
	document.getElementById("titel").innerHTML = "RAM slot";
	document.getElementById("text").innerHTML = "Dual in-line memory modules, acroniem DIMM, zijn SDRAM-modules die het werkgeheugen van een personal computer vormen. DIMM\'s zijn de modernere versies van het verouderende Single in-line memory module (SIMM)-systeem. Ze heten \"Dual\" omdat ze in tegenstelling tot SIMM\'s aan beide kanten van het printplaatje aansluitcontactpunten hebben. DIMM\'s zijn verkrijgbaar in verschillende versies, onder andere 5 volt en 3 volt, gebufferd of ongebufferd, SDR SDRAM (168 aansluitingen) of DDR SDRAM (184 aansluitingen). SDR staat voor Single data rate en DDR staat voor Double data rate en slaat op het aantal bits dat het geheugen per kloktik kan verwerken. SDRAM staat voor Synchronous dynamic RAM.";
}

function reset_moederbord() {
	document.getElementById("titel").innerHTML = "Moederbord";
	document.getElementById("text").innerHTML = "Beweeg over één van de stukken van het moederbord voor meer informatie.";
}


/* %%%%%%%%%%%%%%%%%%%%%%%%%%% hieronder is voor de titel en text voor de harddisk %%%%%%%%%%%%%%%%%%%%%%%%%%% */


function actuator() {
	document.getElementById("titel").innerHTML = "Actuator";
	document.getElementById("text").innerHTML = "Op een beweegbare arm (actuator) zitten de lees- en schrijfkoppen. Die arm heeft een spoel die beweegt tussen sterke magneten. Door de spoel van meer en minder spanning (Positief - Negatief) te voorzien kan de arm zeer precies worden gestuurd. De informatie wordt dus met koppen op de schijf gezet en weer teruggelezen. Omdat hiervoor de kop moet worden verplaatst en soms moet worden gewacht tot het juiste gedeelte van de schijf onder de kop doordraait is de harde schijf een aantal ordes van grootte trager dan geheugen in geïntegreerde schakelingen. De opslagcapaciteit van harde schijven is de laatste decennia enorm toegenomen.";
}

function actuator_arm() {
	document.getElementById("titel").innerHTML = "Actuator arm";
	document.getElementById("text").innerHTML = "Op een beweegbare arm (actuator) zitten de lees- en schrijfkoppen. Die arm heeft een spoel die beweegt tussen sterke magneten. Door de spoel van meer en minder spanning (Positief - Negatief) te voorzien kan de arm zeer precies worden gestuurd. De informatie wordt dus met koppen op de schijf gezet en weer teruggelezen. Omdat hiervoor de kop moet worden verplaatst en soms moet worden gewacht tot het juiste gedeelte van de schijf onder de kop doordraait is de harde schijf een aantal ordes van grootte trager dan geheugen in geïntegreerde schakelingen. De opslagcapaciteit van harde schijven is de laatste decennia enorm toegenomen.";
}

function platter_spindle() {
	document.getElementById("titel").innerHTML = "Platter & Spindle";
	document.getElementById("text").innerHTML = "De harde schijf heet hard omdat hij bestaat uit één of meer niet-flexibele ronde platen, in tegenstelling tot de flexibele floppy's die bij de oudste minicomputers het enige opslagmedium waren. De platen zijn gecoat met een microndunne magnetiseerbare laag. Deze platen worden platters genoemd.";
}

function jumper_sata_power_conector() {
	document.getElementById("titel").innerHTML = "Jumper, SATA & Power conector";
	document.getElementById("text").innerHTML = "Serial ATA (ook SATA of S-ATA), voluit Serial Advanced Technology Attachment, is een computerbus ontworpen voor het transport van gegevens tussen de computer en de harde schijf, SSD of dvd-/cd-speler. Serial ATA is de opvolger van Parallel ATA (PATA of P-ATA, Parallel Advanced Technology Attachment) of IDE-bus. SATA is gebaseerd op een seriële signaleringstechniek. Het heeft een aantal praktische voordelen ten opzichte van PATA, dat op parallelle signaleringstechniek gebaseerd is en in IDE-harde schijven gebruikt wordt. De voordelen zijn dat de kabels van SATA flexibeler, dunner en minder massief zijn dan de flat cables die gebruikt worden voor PATA-harde schijven. Een SATA-kabel heeft minder last van crosstalk en EMI (electromagnetic interference).";
}

function reset_harddisk() {
	document.getElementById("titel").innerHTML = "Harddisk";
	document.getElementById("text").innerHTML = "Beweeg over één van de stukken van de harddisk voor meer informatie.";
}



