var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as moment from 'moment';
var SPService = (function () {
    function SPService(_context) {
        this._context = _context;
        this.graphClient = null;
        this.HireDateListTitle = "New Joinees";
    }
    // Get Profiles
    SPService.prototype.getPHireDates = function (upcommingDays) {
        return __awaiter(this, void 0, void 0, function () {
            var _results, _today, _month, _day, _filter, _orderby, _countdays, _f, _nextYearStart, _FinalDate, _a, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _results = null;
                        _today = '2000-' + moment().format('MM-DD');
                        _month = moment().format('MM');
                        _day = parseInt(moment().format('DD'));
                        _orderby = "fields/HireDate";
                        // If we are in Dezember we have to look if there are HireDate in January
                        // we have to build a condition to select HireDate in January based on number of upcommingDays
                        // we can not use the year for teste , the year is always 2000.
                        // console.log(_month);
                        _a = this;
                        return [4 /*yield*/, this._context.msGraphClientFactory.getClient()];
                    case 1:
                        // If we are in Dezember we have to look if there are HireDate in January
                        // we have to build a condition to select HireDate in January based on number of upcommingDays
                        // we can not use the year for teste , the year is always 2000.
                        // console.log(_month);
                        _a.graphClient = _b.sent();
                        return [4 /*yield*/, this.graphClient.api("sites/root/lists('" + this.HireDateListTitle + "')/items?orderby=Fields/HireDate desc")
                                .version('v1.0')
                                .top(upcommingDays)
                                .expand('fields')
                                .get()];
                    case 2:
                        _results = _b.sent();
                        return [2 /*return*/, _results.value];
                    case 3:
                        error_1 = _b.sent();
                        console.dir(error_1);
                        return [2 /*return*/, Promise.reject(error_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return SPService;
}());
export { SPService };
export default SPService;
//# sourceMappingURL=SPService.js.map