// This file is automatically generated, do not edit
goog.provide('ol.renderer.webgl.tilelayer.shader');
goog.provide('ol.renderer.webgl.tilelayer.shader.Locations');
goog.provide('ol.renderer.webgl.tilelayer.shader.Fragment');
goog.provide('ol.renderer.webgl.tilelayer.shader.Vertex');

goog.require('ol.webgl.shader');



/**
 * @constructor
 * @extends {ol.webgl.shader.Fragment}
 * @struct
 */
ol.renderer.webgl.tilelayer.shader.Fragment = function() {
  goog.base(this, ol.renderer.webgl.tilelayer.shader.Fragment.SOURCE);
};
goog.inherits(ol.renderer.webgl.tilelayer.shader.Fragment, ol.webgl.shader.Fragment);
goog.addSingletonGetter(ol.renderer.webgl.tilelayer.shader.Fragment);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Fragment.DEBUG_SOURCE = 'precision mediump float;\nvarying vec2 v_texCoord;\n\n\nuniform sampler2D u_texture;\n\nvoid main(void) {\n  gl_FragColor = texture2D(u_texture, v_texCoord);\n}\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Fragment.OPTIMIZED_SOURCE = 'precision mediump float;varying vec2 a;uniform sampler2D e;void main(void){gl_FragColor=texture2D(e,a);}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Fragment.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.tilelayer.shader.Fragment.DEBUG_SOURCE :
    ol.renderer.webgl.tilelayer.shader.Fragment.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @extends {ol.webgl.shader.Vertex}
 * @struct
 */
ol.renderer.webgl.tilelayer.shader.Vertex = function() {
  goog.base(this, ol.renderer.webgl.tilelayer.shader.Vertex.SOURCE);
};
goog.inherits(ol.renderer.webgl.tilelayer.shader.Vertex, ol.webgl.shader.Vertex);
goog.addSingletonGetter(ol.renderer.webgl.tilelayer.shader.Vertex);


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Vertex.DEBUG_SOURCE = 'varying vec2 v_texCoord;\n\n\nattribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform vec4 u_tileOffset;\n\nvoid main(void) {\n  gl_Position = vec4(a_position * u_tileOffset.xy + u_tileOffset.zw, 0., 1.);\n  v_texCoord = a_texCoord;\n}\n\n\n';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Vertex.OPTIMIZED_SOURCE = 'varying vec2 a;attribute vec2 b;attribute vec2 c;uniform vec4 d;void main(void){gl_Position=vec4(b*d.xy+d.zw,0.,1.);a=c;}';


/**
 * @const
 * @type {string}
 */
ol.renderer.webgl.tilelayer.shader.Vertex.SOURCE = goog.DEBUG ?
    ol.renderer.webgl.tilelayer.shader.Vertex.DEBUG_SOURCE :
    ol.renderer.webgl.tilelayer.shader.Vertex.OPTIMIZED_SOURCE;



/**
 * @constructor
 * @param {WebGLRenderingContext} gl GL.
 * @param {WebGLProgram} program Program.
 * @struct
 */
ol.renderer.webgl.tilelayer.shader.Locations = function(gl, program) {

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_texture = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_texture' : 'e');

  /**
   * @type {WebGLUniformLocation}
   */
  this.u_tileOffset = gl.getUniformLocation(
      program, goog.DEBUG ? 'u_tileOffset' : 'd');

  /**
   * @type {number}
   */
  this.a_position = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_position' : 'b');

  /**
   * @type {number}
   */
  this.a_texCoord = gl.getAttribLocation(
      program, goog.DEBUG ? 'a_texCoord' : 'c');
};
