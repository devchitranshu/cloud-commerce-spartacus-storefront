/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import * as tslib_1 from "tslib";
import * as msRest from "@azure/ms-rest-js";
var packageName = "occ-client";
var packageVersion = "0.2.0";
var CommerceWebservicesV2Context = /** @class */ (function (_super) {
    tslib_1.__extends(CommerceWebservicesV2Context, _super);
    /**
     * Initializes a new instance of the CommerceWebservicesV2Context class.
     * @param [options] The parameter options
     */
    function CommerceWebservicesV2Context(options) {
        var _this = this;
        if (!options) {
            options = {};
        }
        if (!options.userAgent) {
            var defaultUserAgent = msRest.getDefaultUserAgentValue();
            options.userAgent = packageName + "/" + packageVersion + " " + defaultUserAgent;
        }
        _this = _super.call(this, undefined, options) || this;
        _this.baseUri = options.baseUri || _this.baseUri || "http://localhost:9002";
        _this.requestContentType = "application/json; charset=utf-8";
        return _this;
    }
    return CommerceWebservicesV2Context;
}(msRest.ServiceClient));
export { CommerceWebservicesV2Context };
//# sourceMappingURL=commerceWebservicesV2Context.js.map