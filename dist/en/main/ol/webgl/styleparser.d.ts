/**
 * @param {import('../style/literal.js').SymbolType} type Symbol type
 * @param {string} sizeExpressionGlsl Size expression
 * @return {string} The GLSL opacity function
 */
export function getSymbolOpacityGlslFunction(type: import('../style/literal.js').SymbolType, sizeExpressionGlsl: string): string;
/**
 * @typedef {Object} StyleParseResult
 * @property {ShaderBuilder} builder Shader builder pre-configured according to a given style
 * @property {boolean} hasSymbol Has a symbol style defined
 * @property {boolean} hasStroke Has a stroke style defined
 * @property {boolean} hasFill Has a fill style defined
 * @property {Object<string,import("./Helper").UniformValue>} uniforms Uniform definitions.
 * @property {Array<import("../renderer/webgl/PointsLayer").CustomAttribute>} attributes Attribute descriptions.
 */
/**
 * Parses a {@link import("../style/literal").LiteralStyle} object and returns a {@link ShaderBuilder}
 * object that has been configured according to the given style, as well as `attributes` and `uniforms`
 * arrays to be fed to the `WebGLPointsRenderer` class.
 *
 * Also returns `uniforms` and `attributes` properties as expected by the
 * {@link module:ol/renderer/webgl/PointsLayer~WebGLPointsLayerRenderer}.
 *
 * @param {import("../style/literal").LiteralStyle} style Literal style.
 * @return {StyleParseResult} Result containing shader params, attributes and uniforms.
 */
export function parseLiteralStyle(style: import("../style/literal").LiteralStyle): StyleParseResult;
export type StyleParseResult = {
    /**
     * Shader builder pre-configured according to a given style
     */
    builder: ShaderBuilder;
    /**
     * Has a symbol style defined
     */
    hasSymbol: boolean;
    /**
     * Has a stroke style defined
     */
    hasStroke: boolean;
    /**
     * Has a fill style defined
     */
    hasFill: boolean;
    /**
     * Uniform definitions.
     */
    uniforms: {
        [x: string]: import("./Helper").UniformValue;
    };
    /**
     * Attribute descriptions.
     */
    attributes: Array<import("../renderer/webgl/PointsLayer").CustomAttribute>;
};
import { ShaderBuilder } from './ShaderBuilder.js';
//# sourceMappingURL=styleparser.d.ts.map