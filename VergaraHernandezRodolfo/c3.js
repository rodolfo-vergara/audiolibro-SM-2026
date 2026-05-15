(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"c3_atlas_1", frames: [[0,0,1203,1202]]},
		{name:"c3_atlas_2", frames: [[0,1202,1440,664],[0,0,1200,1200]]},
		{name:"c3_atlas_3", frames: [[1877,175,116,116],[1878,0,116,116],[1743,743,77,77],[1913,589,116,116],[1704,175,171,171],[1913,707,116,116],[1704,0,172,173],[839,673,238,66],[1720,839,222,66],[839,743,486,118],[1822,743,77,77],[0,673,837,243],[1704,348,285,66],[1251,431,726,156],[0,0,1249,671],[1251,0,451,429],[1251,589,660,152],[1327,839,391,94],[1327,743,414,94]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_192 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(img.CachedBmp_179);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1384,2139);


(lib.CachedBmp_178 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(img.CachedBmp_174);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1443,2567);


(lib.CachedBmp_173 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["c3_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(img.CachedBmp_171);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1440,2560);


(lib.CachedBmp_170 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["c3_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["c3_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["c3_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.btnStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_192();
	this.instance.setTransform(-29,-29,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.btnSiguiente = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_191();
	this.instance.setTransform(-29,-29,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.btnRetroceder = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_190();
	this.instance.setTransform(-19.25,-19.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-19.2,38.5,38.5);


(lib.btnPrevio = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_189();
	this.instance.setTransform(-29,-29,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.btnPlay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_188();
	this.instance.setTransform(-42.85,-42.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.8,-42.8,85.5,85.5);


(lib.btnPause = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_187();
	this.instance.setTransform(-29,-29,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29,-29,58,58);


(lib.btnHome = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_186();
	this.instance.setTransform(-43.1,-43.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.1,-43.1,86,86.5);


(lib.btnCpaitulo16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_185();
	this.instance.setTransform(-59.3,-18.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_184();
	this.instance_1.setTransform(-121.4,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-29.5,243,59);


(lib.btnCapitulo3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_183();
	this.instance.setTransform(-55.5,-18.8,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_184();
	this.instance_1.setTransform(-121.4,-29.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.4,-29.5,243,59);


(lib.btnAvanzar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_181();
	this.instance.setTransform(-19.25,-19.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-19.2,38.5,38.5);


(lib.barraProgreso = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A4LAjIAAhFMAwXAAAIAABFg");
	this.shape.setTransform(289.9321,0,1.8727,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barraProgreso, new cjs.Rectangle(0.1,-3.5,579.6999999999999,7), null);


(lib.barraMango = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGBHQgdgeAAgpQAAgoAdgeQAdgdApAAQAqAAAdAdQAdAeAAAoQAAApgdAeQgdAdgqAAQgpAAgdgdg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barraMango, new cjs.Rectangle(-10,-10,20,20), null);


(lib.barraFondo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B2B2B2").s().p("EgtQAAjIAAhFMBahAAAIAABFg");
	this.shape.setTransform(289.725,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.barraFondo, new cjs.Rectangle(0,-3.5,579.5,7), null);


(lib.Rectangle = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#706F6F","#565555","#3B3B3B","#252525","#141414","#090909","#020202","#000000"],[0.016,0.067,0.133,0.212,0.298,0.412,0.569,1],0,-640,0,640).s().p("Eg4PBkAMAAAjH/MBwfAAAMAAADH/g");
	this.shape.setTransform(360,640);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Rectangle, new cjs.Rectangle(0,0,720,1280), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_180();
	this.instance.setTransform(9.75,13,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(9.8,13,418.5,121.5), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_179();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,692,1069.5), null);


(lib.AudioTexto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.CachedBmp_178();
	this.instance.setTransform(-2,-5.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AudioTexto, new cjs.Rectangle(-2,-5.3,142.5,33), null);


// stage content:
(lib.c3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {inicio:0,capitulo3:19,capitulo16:39};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		// ============================================================
		//  CÓDIGO JAVASCRIPT PARA ADOBE ANIMATE — HTML5 CANVAS
		//  Arquitectura para 2 capítulos
		//
		//  INSTRUCCIONES GENERALES:
		//  1. Crea un fotograma con etiqueta "inicio"
		//  2. Crea un fotograma por capítulo con etiquetas:
		//     "capitulo1", "capitulo2"
		//  3. En cada fotograma de capítulo coloca los objetos
		//     indicados en la sección anterior del proyecto.
		//  4. Pega este código en el panel Acciones del fotograma 1.
		//
		//  PANTALLA DE INICIO — objetos requeridos:
		//    btnCapitulo1
		//	  btnCapitulo2
		//
		//  CAPÍTULOS — objetos requeridos (igual que antes):
		//    btnHome, btnPrev, btnSiguiente
		//    btnPlay, btnPause, btnStop, btnAvanzar, btnRetroceder
		//    barraFondo, barraProgreso, barraMango, lblTiempo
		//
		//  CONFIGURACIÓN DE LA BARRA:
		//    Ajusta BARRA_X y BARRA_ANCHO según tu escenario.
		// ============================================================
		this.stop();
		var exportRoot = this;
		
			//==========
			//UTILIDADES
			//==========
			/* Navega a un fotograma por su etiqueta y deten la reproducción*/
			function irA(etiqueta){
				exportRoot.gotoAndStop(etiqueta);
			}
		
			/* Activa los bones existentes en el escenario actual*/
			function activarBtn(nombre, handler){
				var btn = exportRoot[nombre];
				if(btn){
					btn.cursor = "pointer";
					btn.removeAllEventListeners("click");
					btn.on("click", handler);
				}
			}
		
			/*Convierte milisegundos a m:ss*/
			function fmt(ms) {
				if(!ms || isNaN(ms) || ms<0) return "0:00";
				var s = Math.floor(ms/1000);
				var m = Math.floor(s/60);
				s = s%60;
				return m + ":" + (s<10?"0":"") + s;
			}
		
			//================
			//GESTION DE AUDIO
			//================
			//instancia createjs.AbstractSoundInstance
			var audioActual = null;
			var tickListener = null;
			var audioPaused = false;
			
			/*Reproduce el audio indicado*/
			  function playAudio(id) {
			    if(audioPaused){
					resumeAudio();
				}else{
					if(audioActual)audioActual.stop();
					audioActual = createjs.Sound.play(id);
					iniciarTicker();
					}
			  }
		
			/*Pausa el audio en curso*/
			function pauseAudio(){
				if(audioActual){
					audioActual.paused = true;
					audioPaused = true;
				}
			}
		
			/*Reanuda el audio en curso*/
			function resumeAudio(){
				if(audioActual){
					audioActual.paused = false;
					audioPaused = false;
				}
			}
		
			/*Detiene completamente el audio en curso*/
			function stopAudio(){
				if(audioActual){
					audioActual.stop();
					audioActual = null;
					audioPaused = false;
				}
				detenerTicker();
				actualizarBarra(0,0);
			}
		
			/*Avanza 5 segundos en el audio en curso*/
			function avanzarAudio(){
				if(audioActual){
					audioActual.position = Math.min(
						audioActual.position + 5000,
						audioActual.duration
					);
				}
			}
		
			/*Retroce 5 segundos en el audio en curso*/
			function retrocederAudio(){
				if(audioActual){
					audioActual.position = Math.max(audioActual.position - 5000, 0);
				}
			}
		
			//========================================
			//BARRA DE PROGRESO - ACTUALIZACION VISUAL
			//========================================
			var BARRA_X = 73.9;
			var BARRA_ANCHO = 579.45;
		
			function actualizarBarra(pos,dur){
				var pct = (dur>0)?Math.min(pos/dur, 1):0;
				
				var bp = exportRoot["barraProgreso"];
				if (bp) bp.scaleX = pct;
		
				var bm = exportRoot["barraMango"];
				if(bm) bm.x = BARRA_X + pct*BARRA_ANCHO;
		
				var lbl = exportRoot["lblTiempo"];
				if(lbl) lbl.text = fmt(pos) + " / " + fmt(dur);
			}
		
			//=======================================
			//TICKER - SINCRONIZACIÓN AUDIO-ANIMACION
			//=======================================
			function iniciarTicker(){
				detenerTicker();
				tickListener = createjs.Ticker.on("tick", function(){
					if(audioActual && !audioActual.paused){
						actualizarBarra(audioActual.position, audioActual.duration);
					}
				});
			}
		
			function detenerTicker(){
				if(tickListener !== null){
					createjs.Ticker.off("tick", tickListener);
					tickListener = null;
				}
			}
		
			//===============================
			//BARRA DE PROGRESO - INTERRACION
			//===============================
			var arrastrando = false;
		
			/*Convierte coordenada x a milisegundos*/
			function xAms(xStage, dur){
				var stage = exportRoot.stage || exportRoot.getStage();
				var escala = stage?stage.scaleX:1;
				var xLocal = xStage/escala;
				var rel = Math.max(0, Math.min(xLocal - BARRA_X, BARRA_ANCHO));
				return (rel/BARRA_ANCHO)*dur;
			}
		
			function activarBarraDrag(){
				var fondo = exportRoot["barraFondo"];
				var mango = exportRoot["barraMango"];
				var stage = exportRoot.stage || exportRoot.getStage();
		
				//Click en el fondo -> salto directo
				if(fondo){
					fondo.cursor = "pointer";
					fondo.removeAllEventListeners("click");
					fondo.on("click", function(evt){
						if(!audioActual) return;
						audioActual.position = xAms(evt.stageX, audioActual.duration);
						actualizarBarra(audioActual.position, audioActual.duration);
					});
				}
		
				//Inicio de arrastre
				if(mango){
					mango.cursor ="ew-resize";
					mango.removeAllEventListeners("mousedown");
					mango.on("mousedown", function(){
						arrastrando = true;
						//pausa durante el scroll para evitar desfases de audio
						if(audioActual) audioActual.paused = true;
					});
				}
		
				//Movimiento de arrastre
				if(stage){
					stage.removeAllEventListeners("stagemousemove");
					stage.removeAllEventListeners("stagemouseup");
					stage.on("stagemousemove", function(evt){
						if(!arrastrando || !audioActual) return;
						var nuevaPos = xAms(evt.stageX, audioActual.duration);
						audioActual.position = nuevaPos;
						actualizarBarra(nuevaPos, audioActual.duration);
					});
		
					//soltar
					stage.on("stagemouseup", function(){
						if(!arrastrando) return;
						arrastrando = false;
						if(audioActual) audioActual.paused = false;
					});
				}
			}
		
			//==================
			//PANTALLA DE INICIO
			//==================
			function initInicio(){
				//Detener el audio al entrar a la página de inciio
				stopAudio();
		
				activarBtn("btnCapitulo3", function(){
					irA("capitulo3");
					initCapitulo3();
				});
		
				activarBtn("btnCapitulo16", function(){
					irA("capitulo16");
					initCapitulo16();
				});
			}
		
			//===========================================
			//CAPITULO 3 (etiqueta fotgrama: "capitulo3")
			//===========================================
			function initCapitulo3(){
				//Navegacion UI
				//Boton Home
				activarBtn("btnHome", function(){
					stopAudio();
					irA("inicio");
					initInicio();
				});
			
				//Boton prev
				activarBtn("btnPrev", function(){
					console.log("Estás en el primer capítulo");
				});
		
				//Boton siguiente
				activarBtn("btnSiguiente", function(){
					stopAudio();
					irA("capitulo16");
					initCapitulo16();
				});
		
				//Controles de audio
				activarBtn("btnPlay", function(){playAudio("audCapitulo3");});
				activarBtn("btnPause", function(){pauseAudio();});
				activarBtn("btnStop", function(){stopAudio();});
				activarBtn("btnAvanzar", function(){avanzarAudio();});
				activarBtn("btnRetroceder", function(){retrocederAudio();});
		
				// Barra de progreso
			    actualizarBarra(0, 0);
			    activarBarraDrag();
			}
		
			//===========================================
			//CAPITULO 16 (etiqueta fotgrama: "capitulo16")
			//===========================================
			function initCapitulo16(){
				//Navegacion UI
				//Boton Home
				activarBtn("btnHome", function(){
					stopAudio();
					irA("inicio");
					initInicio();
				});
		
				//Boton prev
				activarBtn("btnPrevio", function(){
					stopAudio();
					irA("capitulo3");
					initCapitulo3();
				});
			
				//Boton siguiente
				activarBtn("btnSiguiente", function(){
					console.log("Estás en el último capítulo.");
				});
		
				//Controles de audio
				activarBtn("btnPlay", function(){playAudio("audCapitulo16");});
				activarBtn("btnPause", function(){pauseAudio();});
				activarBtn("btnStop", function(){stopAudio();});
				activarBtn("btnAvanzar", function(){avanzarAudio();});
				activarBtn("btnRetroceder", function(){retrocederAudio();});
		
				// Barra de progreso
			    actualizarBarra(0, 0);
			    activarBarraDrag();
			}
		
			//===========================================
			//Este codigo se ejecuta automaticamente
			//al iniciar la publicación
			//===========================================
		
			initInicio();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(59));

	// btnHome
	this.btnHome = new lib.btnHome();
	this.btnHome.name = "btnHome";
	this.btnHome.setTransform(648.1,69.65);
	this.btnHome._off = true;
	new cjs.ButtonHelper(this.btnHome, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnHome).wait(19).to({_off:false},0).wait(40));

	// btnSiguiente
	this.btnSiguiente = new lib.btnSiguiente();
	this.btnSiguiente.name = "btnSiguiente";
	this.btnSiguiente.setTransform(623.35,1163.65);
	this.btnSiguiente._off = true;
	new cjs.ButtonHelper(this.btnSiguiente, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnSiguiente).wait(19).to({_off:false},0).wait(40));

	// btnPrevio
	this.btnPrevio = new lib.btnPrevio();
	this.btnPrevio.name = "btnPrevio";
	this.btnPrevio.setTransform(93.7,1163.65);
	this.btnPrevio._off = true;
	new cjs.ButtonHelper(this.btnPrevio, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPrevio).wait(19).to({_off:false},0).wait(40));

	// btnRetrocrder
	this.btnRetroceder = new lib.btnRetroceder();
	this.btnRetroceder.name = "btnRetroceder";
	this.btnRetroceder.setTransform(181.95,1163.9);
	this.btnRetroceder._off = true;
	new cjs.ButtonHelper(this.btnRetroceder, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRetroceder).wait(19).to({_off:false},0).wait(40));

	// btnAvanzar
	this.btnAvanzar = new lib.btnAvanzar();
	this.btnAvanzar.name = "btnAvanzar";
	this.btnAvanzar.setTransform(535.05,1163.9);
	this.btnAvanzar._off = true;
	new cjs.ButtonHelper(this.btnAvanzar, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnAvanzar).wait(19).to({_off:false},0).wait(40));

	// btnStop
	this.btnStop = new lib.btnStop();
	this.btnStop.name = "btnStop";
	this.btnStop.setTransform(456.8,1163.65);
	this.btnStop._off = true;
	new cjs.ButtonHelper(this.btnStop, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnStop).wait(19).to({_off:false},0).wait(40));

	// btnPause
	this.btnPause = new lib.btnPause();
	this.btnPause.name = "btnPause";
	this.btnPause.setTransform(260.25,1163.65);
	this.btnPause._off = true;
	new cjs.ButtonHelper(this.btnPause, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPause).wait(19).to({_off:false},0).wait(40));

	// btnPlay
	this.btnPlay = new lib.btnPlay();
	this.btnPlay.name = "btnPlay";
	this.btnPlay.setTransform(358.5,1160.45);
	this.btnPlay._off = true;
	new cjs.ButtonHelper(this.btnPlay, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPlay).wait(19).to({_off:false},0).wait(40));

	// lblTiempo
	this.lblTiempo = new cjs.Text("01:27", "30px 'Bahnschrift'", "#FFFFFF");
	this.lblTiempo.name = "lblTiempo";
	this.lblTiempo.lineHeight = 42;
	this.lblTiempo.parent = this;
	this.lblTiempo.setTransform(73.9,990.3);
	this.lblTiempo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.lblTiempo).wait(19).to({_off:false},0).wait(40));

	// barraMango
	this.barraMango = new lib.barraMango();
	this.barraMango.name = "barraMango";
	this.barraMango.setTransform(382,1047.4);
	this.barraMango._off = true;

	this.timeline.addTween(cjs.Tween.get(this.barraMango).wait(19).to({_off:false},0).wait(40));

	// barraProgreso
	this.barraProgreso = new lib.barraProgreso();
	this.barraProgreso.name = "barraProgreso";
	this.barraProgreso.setTransform(73.9,1047.05);
	this.barraProgreso._off = true;

	this.timeline.addTween(cjs.Tween.get(this.barraProgreso).wait(19).to({_off:false},0).wait(40));

	// barraFondo
	this.barraFondo = new lib.barraFondo();
	this.barraFondo.name = "barraFondo";
	this.barraFondo.setTransform(73.9,1047.05);
	this.barraFondo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.barraFondo).wait(19).to({_off:false},0).wait(40));

	// ilustracion16
	this.instance = new lib.CachedBmp_167();
	this.instance.setTransform(61.2,158.85,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(20));

	// ilustracion3
	this.instance_1 = new lib.CachedBmp_168();
	this.instance_1.setTransform(58.7,158.85,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({_off:true},20).wait(20));

	// textoCapitulo16
	this.instance_2 = new lib.CachedBmp_169();
	this.instance_2.setTransform(256.55,864.8,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(20));

	// textoCapitulo3
	this.instance_3 = new lib.CachedBmp_170();
	this.instance_3.setTransform(262.25,864.8,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({_off:true},20).wait(20));

	// background
	this.instance_4 = new lib.CachedBmp_173();
	this.instance_4.setTransform(195.05,795.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_172();
	this.instance_5.setTransform(0,948.05,0.5,0.5);

	this.instance_6 = new lib.AudioTexto();
	this.instance_6.setTransform(360.9,71.95,1,1,0,0,0,69.2,11.1);
	this.instance_6.alpha = 0.6914;

	this.instance_7 = new lib.CachedBmp_171();
	this.instance_7.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},19).wait(40));

	// btnCapitulo16
	this.btnCapitulo16 = new lib.btnCpaitulo16();
	this.btnCapitulo16.name = "btnCapitulo16";
	this.btnCapitulo16.setTransform(518.95,1193.95);
	new cjs.ButtonHelper(this.btnCapitulo16, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnCapitulo16).to({_off:true},19).wait(40));

	// btnCapitulo3
	this.btnCapitulo3 = new lib.btnCapitulo3();
	this.btnCapitulo3.name = "btnCapitulo3";
	this.btnCapitulo3.setTransform(201,1193.95);
	new cjs.ButtonHelper(this.btnCapitulo3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnCapitulo3).to({_off:true},19).wait(40));

	// background
	this.instance_8 = new lib.CachedBmp_177();
	this.instance_8.setTransform(189,345.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_193();
	this.instance_9.setTransform(49.9,252.1,0.5,0.5);

	this.instance_10 = new lib.Rectangle();
	this.instance_10.setTransform(360,640,1,1,0,0,0,360,640);
	this.instance_10.alpha = 0.3906;

	this.instance_11 = new lib.Group_1();
	this.instance_11.setTransform(371.05,553.2,1,1,0,0,0,346.1,534.7);
	this.instance_11.alpha = 0.6094;

	this.instance_12 = new lib.CachedBmp_175();
	this.instance_12.setTransform(291.2,851,0.5,0.5);

	this.instance_13 = new lib.Path();
	this.instance_13.setTransform(462.55,139.05,1,1,0,0,0,219.1,73.8);
	this.instance_13.alpha = 0.8984;

	this.instance_14 = new lib.CachedBmp_174();
	this.instance_14.setTransform(-1.35,-3.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8}]}).to({state:[]},19).to({state:[]},1).wait(39));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(358.7,636.7,361.50000000000006,643.5);
// library properties:
lib.properties = {
	id: 'B368BB133CF90B4C9DF331A474A983A6',
	width: 720,
	height: 1280,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_179.png?1778031879422", id:"CachedBmp_179"},
		{src:"images/CachedBmp_174.png?1778031879422", id:"CachedBmp_174"},
		{src:"images/CachedBmp_171.png?1778031879422", id:"CachedBmp_171"},
		{src:"images/c3_atlas_1.png?1778031879379", id:"c3_atlas_1"},
		{src:"images/c3_atlas_2.png?1778031879379", id:"c3_atlas_2"},
		{src:"images/c3_atlas_3.png?1778031879380", id:"c3_atlas_3"},
		{src:"sounds/audCapitulo16.mp3?1778031879422", id:"audCapitulo16"},
		{src:"sounds/audCapitulo3.mp3?1778031879422", id:"audCapitulo3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['B368BB133CF90B4C9DF331A474A983A6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
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
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;