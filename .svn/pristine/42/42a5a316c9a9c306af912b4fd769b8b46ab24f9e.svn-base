
function FnBase() {
    this.JScriptMode = false;
}
FnBase.prototype.__convertParamsToArray = function (prm) {
    var arr = [];
    for (var i = 0; i < prm.length; i++)
        arr.push(prm[i]);
    return arr;
}
//STRING FUNCTIONS
FnBase.prototype.CharAt = function (s, p) { return s ? s.charAt(p) : ''; }
FnBase.prototype.CharCodeAt = function (s, p) { return s ? s.charCodeAt(p) : ''; }
FnBase.prototype.Contains = function (s1, s2, c) { s1 = s1 ? s1 : ""; s2 = s2 ? s2 : ""; if (c == true) { s1 = s1.toLowerCase(); s2 = s2.toLowerCase(); } return s1.indexOf(s2) > -1; }
FnBase.prototype.EndsWith = function (s1, s2, c) { s1 = s1 ? s1 : ""; s2 = s2 ? s2 : ""; if (c == true) { s1 = s1.toLowerCase(); s2 = s2.toLowerCase(); } return s1.indexOf(s2) == s1.length - s2.length; }
FnBase.prototype.IndexOf = function (s1, s2, c) { s1 = s1 ? s1 : ""; s2 = s2 ? s2 : ""; if (c == true) { s1 = s1.toLowerCase(); s2 = s2.toLowerCase(); } return s1.indexOf(s2); }
FnBase.prototype.LastIndexOf = function (s1, s2, c) { s1 = s1 ? s1 : ""; s2 = s2 ? s2 : ""; if (c == true) { s1 = s1.toLowerCase(); s2 = s2.toLowerCase(); } return s1.lastIndexOf(s2); }
FnBase.prototype.LTrim = function (s, c) { c = c || "\\s"; return s ? s.replace(new RegExp("^[" + c + "]+", "g"), "") : ""; }
FnBase.prototype.RTrim = function (s, c) { c = c || "\\s"; return s ? s.replace(new RegExp("[" + c + "]+$", "g"), "") : ""; }
FnBase.prototype.Replace = function (s, s1, s2, c) { s = s ? s : ""; s1 = s1 ? s1 : ""; s2 = s2 ? s2 : "";s1 = s1.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); if (c == true) return s.replace(new RegExp(s1, "ig"), s2); else return s.replace(new RegExp(s1, "g"), s2); }
FnBase.prototype.ToUpperCase = function (s) { return s ? s.toUpperCase() : ""; }
FnBase.prototype.ToLowerCase = function (s) { return s ? s.toLowerCase() : ""; }
FnBase.prototype.Trim = function (s, c) { return this.RTrim(this.LTrim(s, c), c); }
FnBase.prototype.SubString = function (s, f, t) { return s ? s.substring(f, t) : ""; }
FnBase.prototype.Split = function (s, a) { s = s ? s : ""; if (arguments.length < 3 || s == "") return s.toString().split(a); var r = ''; for (var i = 1; i < arguments.length; i++) r += arguments[i]; return s.split(new RegExp("[" + r + "]+")); }
//MATH FUNCTIONS
FnBase.prototype.Abs = function (n) { return n && !this.IsNan(n) ? Math.abs(n) : 0; }
FnBase.prototype.Ceil = function (n) { return n && !this.IsNan(n) ? Math.ceil(n) : 0; }
FnBase.prototype.Cos = function (n) { return n && !this.IsNan(n) ? Math.cos(n) : 0; }
FnBase.prototype.Exp = function (n) { return n && !this.IsNan(n) ? Math.exp(n) : 0; }
FnBase.prototype.Floor = function (n) { return n && !this.IsNan(n) ? Math.floor(n) : 0; }
FnBase.prototype.Log = function (n) { return n && !this.IsNan(n) ? Math.log(n) : 0; }
FnBase.prototype.Pow = function (n) { return n && !this.IsNan(n) ? Math.pow(n) : 0; }
FnBase.prototype.Round = function (n, d) { n = n && !this.IsNan(n) ? n : 0; d = d && !isNaN(d) ? d : 0; if (d <= 0) return Math.round(n); else return +(Math.round(n + "e+" + d) + "e-" + d); }
FnBase.prototype.Sin = function (n) { return n && !this.IsNan(n) ? Math.sin(n) : 0; }
FnBase.prototype.Sqrt = function (n) { return n && !this.IsNan(n) ? Math.sqrt(n) : 0; }
FnBase.prototype.Tan = function (n) { return n && !this.IsNan(n) ? Math.tan(n) : 0; }
//DATE FUNCTIONS
FnBase.prototype.Date = function (y, m, d) { y = d && !isNaN(y) ? y : 0; m = m && !this.IsNan(m) ? m + 1 : 0; d = d && !this.IsNan(d) ? d : 0; return new Date(y, m, d); }
FnBase.prototype.Now = function () { return new Date(); }
FnBase.prototype.Today = function () { var d = new Date(); return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
//CONVERSION FUNCTIONS
FnBase.prototype.CStr = function (v) { return v ? v.toString() : ""; }
FnBase.prototype.CInt = function (v) { v = v == true ? 1 : v; return this.IsNan(v) ? 0 : parseInt(v); }
FnBase.prototype.CFlt = function (v) { v = v == true ? 1 : v; return this.IsNan(v)? 0 : parseFloat(v); }
FnBase.prototype.CBool = function (v) { return v == true || v / 1 == 1 || typeof v == "string" && v.toLowerCase() == "true"; }
FnBase.prototype.CDate = function (v) { v = v ? v : ""; return Date.parse(v); }
//AGGR FUNCTIONS
FnBase.prototype.Sum = function (PARAMSARRAY) {
    if (arguments.length == 0)
        return;
    var a = arguments[0], c = (arguments.length > 1 ? arguments[1] : null), f = (arguments.length > 2 ? arguments[2] : null);
    if (!a)
        return 0;
    var s = 0;
    var isFn = (typeof f == "function");
    if (a.constructor == Array && c == null) {
        for (var i = 0; i < a.length; i++)
            s += this.CFlt(a[i]);
    }
    else if (a.constructor == Array && c && typeof c == "string") {
        for (var i = 0; i < a.length; i++) {
            if(!isFn || (isFn && f(a[i])))
            s += this.CFlt(a[i][c]);
        }
    }
    else if (typeof a == "number") {
        for (var i = 0; i < arguments.length; i++)
            s += this.CFlt(arguments[i]);
    }
    return s;
}

FnBase.prototype.Min = function (PARAMSARRAY) {
    if (arguments.length == 0)
        return;    
    var a = arguments[0], c = (arguments.length > 1 ? arguments[1] : null), f = (arguments.length > 2 ? arguments[2] : null);
    if (!a)
        return 0;
    var s = Infinity;
    var isFn = (typeof f == "function");
    if (a.constructor == Array && c == null) {
        return Math.min.apply(null, a);
    }
    else if (a.constructor == Array && c && typeof c == "string") {
        for (var i = 0; i < a.length; i++) {
            if (!isFn || (isFn && f(a[i]))) {
                var s1 = this.CFlt(a[i][c]);
                s = s1 < s ? s1 : s;
            }
        }
    }
    else if (typeof a == "number" && !this.JScriptMode) {
        return Math.min.apply(null, arguments);
    }
    else if (typeof a == "number" && this.JScriptMode) {        
        return Math.min.apply(null, this.__convertParamsToArray(arguments));
    }
    return s;
}

FnBase.prototype.Max = function (PARAMSARRAY) {
    if (arguments.length == 0)
        return;
    var a = arguments[0], c = (arguments.length > 1 ? arguments[1] : null), f = (arguments.length > 2 ? arguments[2] : null);
    if (!a)
        return 0;
    var s = 0;
    var isFn = (typeof f == "function");
    if (a.constructor == Array && c ==null) {
        return Math.max.apply(null, a);
    }
    else if (a.constructor == Array && c && typeof c == "string") {
        for (var i = 0; i < a.length; i++) {
            if (!isFn || (isFn && f(a[i]))) {
                var s1 = this.CFlt(a[i][c]);
                s = s1 > s ? s1 : s;
            }
        }
    }
    else if (typeof a == "number" && !this.JScriptMode) {
        return Math.max.apply(null, arguments);
    }
    else if (typeof a == "number" && this.JScriptMode) {
        return Math.max.apply(null, this.__convertParamsToArray(arguments));
    }
    return s;
}

FnBase.prototype.Avg = function (PARAMSARRAY) {
    if (arguments.length == 0)
        return;
    var a = arguments[0], c = (arguments.length > 1 ? arguments[1] : null), f = (arguments.length > 2 ? arguments[2] : null);
    if (!a)
        return 0;
    var s = 0,l=0;
    var isFn = (typeof f == "function");
    if (a.constructor == Array && c == null) {
        for (var i = 0; i < a.length; i++)
            s += this.CFlt(a[i]);
        l = a.length;
    }
    else if (a.constructor == Array && c && typeof c == "string") {
        for (var i = 0; i < a.length; i++) {
            if (!isFn || (isFn && f(a[i]))) {
                s += this.CFlt(a[i][c]); l++;
            }
        }
    }
    else if (typeof a == "number") {
        for (var i = 0; i < arguments.length; i++)
            s += this.CFlt(arguments[i]);
        l = arguments.length;
    }
    return s / (l <= 0 ? 1 : l);
}
FnBase.prototype.Filter = function (a, f) {
    if (!a)
        return [];
    if (typeof f != "function")
        return a;
    var r = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i],i)) {
            r.push(a[i]);
        }
    }
    return r;
}
FnBase.prototype.Sort = function (array, sortExpression) {
    //eg Fn.Sort(arr,"fld1 desc")
    var field = sortExpression.split(' ')[0];
    var direction = sortExpression.split(' ')[1];

    array.sort(function (a, b) {
        var aValue = a[field];
        var bValue = b[field];

        if (aValue == null && bValue == null) {
            return 0;
        }
        else if (aValue == null) {
            return direction.toLowerCase() === 'desc' ? 1 : -1;
        }
        else if (bValue == null) {
            return direction.toLowerCase() === 'desc' ? -1 : 1;
        }

        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return direction.toLowerCase() === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        }
        else if (typeof aValue === 'string' && typeof bValue === 'string') {
            return direction.toLowerCase() === 'desc' ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        }
        else if (typeof aValue === 'number' && typeof bValue === 'number') {
            return direction.toLowerCase() === 'desc' ? bValue - aValue : aValue - bValue;
        }
        else if (aValue instanceof Date && bValue instanceof Date) {
            return direction.toLowerCase() === 'desc' ? bValue.getTime() - aValue.getTime() : aValue.getTime() - bValue.getTime();
        }

        return 0;
    });
    return array;
}

FnBase.prototype.First = function (a, f) {
    var r = this.Filter.apply(null, [a,f]);
    return r && r.length > 0 ? r[0] : null;
}
FnBase.prototype.Last = function (a, f) {
    var r = this.Filter.apply(null, [a, f]);
    return r && r.length > 0 ? r[r.length-1] : null;
}
//MISC FUNCTIONS
FnBase.prototype.IsNan = function (u) { return isNaN(parseFloat(u)); }
FnBase.prototype.IsEmpty = function (val) {
    if (typeof val == "undefined" || val == null || val == "undefined" || this.Trim(val.toString())=="")
        return true;
    else
        return false;
}
FnBase.prototype.Default = function (v1, v2) { return this.IsEmpty(v1) ? v2 : v1; }
FnBase.prototype.Eq = function (v1, v2) { return typeof v1 == "number" || typeof v2 == "number" ? (this.CFlt(v1) == this.CFlt(v2)) : (this.ToUpperCase(this.CStr(v1)) == this.ToUpperCase(this.CStr(v2))); }
FnBase.prototype.IfNull = function (v1, v2) { return this.IsEmpty(v1) ? v2 : v1; }
FnBase.prototype.DecodeURI = function (u) { u = u ? u : ""; return decodeURI(u); }
FnBase.prototype.EncodeURI = function (u) { u = u ? u : ""; return encodeURI(u); }
FnBase.prototype.GetFileName = function (p) { p = p ? p : ""; return p.split('\\').pop().split('/').pop(); }
FnBase.prototype.Random = function (minVal, maxVal, floatVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
}
FnBase.prototype.GetProp = function (qkey) {
    if (this.JScriptMode)
        return "";
    if (!qkey)
        return "";
    if (qkey.toUpperCase() == "EID" || qkey.toUpperCase() == "_FC") {
        if (qkey.toUpperCase() == "EID" && typeof Erp == "object" && !Fn.IsEmpty(Erp.EntityID))
            return Erp.EntityID;
        return Users && Users["\x53\x4D\x4F"] > 0 ? Crypto["\x64\x65\x63\x6F\x64\x65"]($.QS(qkey), "\x31\x32\x31\x39") : $.QS(qkey)
    }
    return $.QS(qkey);
}

//DO NOT COPY TO JSEVAL
FnBase.prototype.CDate = function (v, fmt) {
    v = v ? v : "";
    if (v instanceof Date)
        return moment(v).toDate();
    fmt = fmt ? __momentDateFormat(fmt) : "YYYY-MM-DD hh:mm A";
    var m = moment(v, fmt);
    return m.isValid() ? m.toDate() : null;
}
FnBase.prototype.Format = function (v, fmt) {
    if (v == null || v == undefined)
        return "";
    if (!fmt)
        return String(v);
    if (fmt.indexOf("{") < 0)
        fmt = "{0:"+fmt+"}";
    return String.localeFormat(fmt, v);  
}
FnBase.prototype.UnFormatNumber = function (num) {
    if (!isNaN(num))
        return Number(num);
    if (!this.IsEmpty(num))
        return (num.indexOf("-") == 0 ? -1 : 1) * Number(num.replace(/[^0-9\.]+/g, ""));
    return 0;
}
FnBase.prototype.ToWords = function (value) {
    var v = Fn.CStr(value);
    if (v.length == 11) {
        return this.ToWords(v.substring(0, 4)) + " Crores " + this.ToWords(v.substring(4));
    }
    var number = Fn.CInt(value);
    var useAnd = true;   
    if (number == 0) return "Zero";
    var and = useAnd ? "and " : ""; // deals with using 'and' separator
    if (number == -2147483648) return "Minus Two Hundred " + and + "Fourteen Crore Seventy Four Lakh Eighty Three Thousand Six Hundred " + and + "Forty Eight";
    var num = [null, null, null, null];
    var first = 0;
    var u, h, t;
    var sb = [];
    if (number < 0) {
        sb.push("Minus ");
        number = -number;
    }
    var words0 = ["", "One ", "Two ", "Three ", "Four ", "Five ", "Six ", "Seven ", "Eight ", "Nine "];
    var words1 = ["Ten ", "Eleven ", "Twelve ", "Thirteen ", "Fourteen ", "Fifteen ", "Sixteen ", "Seventeen ", "Eighteen ", "Nineteen "];
    var words2 = ["Twenty ", "Thirty ", "Forty ", "Fifty ", "Sixty ", "Seventy ", "Eighty ", "Ninety "];
    var words3 = ["Thousand ", "Lakh ", "Crore "];
    num[0] = Math.floor(number % 1000); // units
    num[1] = Math.floor(number / 1000);
    num[2] = Math.floor(number / 100000);
    num[1] = Math.floor(num[1] - 100 * num[2]); // thousands
    num[3] = Math.floor(number / 10000000); // crores
    num[2] = num[2] - 100 * num[3]; // lakhs
    for (var i = 3; i > 0; i--) {
        if (num[i] != 0) {
            first = i;
            break;
        }
    }
    for (var i = first; i >= 0; i--) {
        if (num[i] == 0) continue;
        u = Math.floor(num[i] % 10); // ones 
        t = Math.floor(num[i] / 10);
        h = Math.floor(num[i] / 100); // hundreds
        t = t - 10 * h; // tens
        if (h > 0) sb.push(words0[h] + "Hundred ");
        if (u > 0 || t > 0) {
            // if (h > 0 || i < first) sb.push(and);
            if (i == 0) sb.push(and);

            if (t == 0)
                sb.push(words0[u]);
            else if (t == 1)
                sb.push(words1[u]);
            else
                sb.push(words2[t - 2] + words0[u]);
        }
        if (i != 0) sb.push(words3[i - 1]);
    }
    var temp = Fn.Trim(sb.join(''));
    var useArab = false;
    if (useArab && Fn.Abs(number) >= 1000000000) {
        var index = temp.indexOf("Hundred Crore");
        if (index > -1) return temp.substring(0, index) + "Arab" + temp.substring(index + 13);
        index = temp.indexOf("Hundred"); return temp.substring(0, index) + "Arab" + temp.substring(index + 7);
    }
    if (temp.indexOf("and ")==0)
        temp = temp.substring(4);
    return temp;
}

Fn = new FnBase();

function __momentDateFormat(format) {

    var currentFormat = format;

    // Convert the date
    currentFormat = currentFormat.Replace("ddd", "~~~");
    currentFormat = currentFormat.Replace("dd", "DD");
    currentFormat = currentFormat.Replace("d", "D");
    currentFormat = currentFormat.Replace("~~~", "ddd");
    // Convert year
    currentFormat = currentFormat.indexOf("yyyy") > -1 ? currentFormat.Replace("yyyy", "YYYY") : currentFormat.Replace("yy", "YY");


    //convert time 
    currentFormat = currentFormat.Replace("tt", "A");
    currentFormat = currentFormat.Replace("t", "hh:mm A");
    currentFormat = currentFormat.Replace("T", "hh:mm:ss A");

    return currentFormat;
}


