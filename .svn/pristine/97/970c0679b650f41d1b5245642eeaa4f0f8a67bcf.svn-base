String.prototype.trim=function(chars){
	    return this.ltrim(chars).rtrim(chars);
}     
 String.prototype.Trim=function(chars){
	    return this.ltrim(chars).rtrim(chars);
}          
String.prototype.ltrim=function(chars){
    chars = chars || "\\s";
    return this.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
String.prototype.rtrim=function(chars){
    chars = chars || "\\s";
    return this.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
String.prototype.endsWith=function(val){
    var ind=this.indexOf(val);
    if(ind == this.length-val.length)
        return true;
    else
        return false
}
String.prototype.startsWith=function(val){        
    if(this.indexOf(val)==0)
        return true;
    else
        return false
}   
String.prototype.padLeft=function(val){        
    var pad="";
    for(var i=0;i<val;i++)
        pad +=" ";
    
    return pad + this;
}
String.prototype.contains=function(val){        
    if(this.toLowerCase().indexOf(val.toLowerCase())>-1)
        return true;
    else
        return  false;
}
String.prototype.Replace = function (oldString, newString) {
   var _os = oldString.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');//escaping regex chars
   return this.replace(new RegExp(_os, "g"), newString);
}

function rgb2hex(rgb) {
    if (rgb.search("rgb") == -1) {
        return rgb;
    } else {
        rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }
}
function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function rgb2hsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;

    var M = Math.max(r, g, b);
    var m = Math.min(r, g, b);
    var C = M - m;
    var L = 0.5 * (M + m);
    var S = (C === 0) ? 0 : C / (1 - Math.abs(2 * L - 1));

    var h;
    if (C === 0) h = 0; // spec'd as undefined, but usually set to 0
    else if (M === r) h = ((g - b) / C) % 6;
    else if (M === g) h = ((b - r) / C) + 2;
    else if (M === b) h = ((r - g) / C) + 4;

    var H = 60 * h;

    return [H, parseFloat(S), parseFloat(L)];
}
function isLightColor(c) {
    var c = hexToRgb(c);
    if (c) {
        var hsl = rgb2hsl(c.r, c.g, c.b);
        var lightness = hsl[2] - Math.cos((hsl[0] + 60) / 180 * Math.PI) * 0.1;
        return lightness > 0.5;
    }
    return false;
}
//https://github.com/PimpTrizkit/PJs/wiki/12.-Shade,-Blend-and-Convert-a-Web-Color-(pSBC.js)
function LightenDarkenColor(p, c0, c1, l) {
    var r,g,b,P,f,t,h,i=parseInt,m=Math.round,a=typeof(c1)=="string";
    if(typeof(p)!="number"||p<-1||p>1||typeof(c0)!="string"||(c0[0]!='r'&&c0[0]!='#')||(c1&&!a))return null;
    if(!this.pSBCr)this.pSBCr=function(d){
        var n=d.length,x={};
        if(n>9){
            [r,g,b,a]=d=d.split(","),n=d.length;
            if(n<3||n>4)return null;
            x.r=i(r[3]=="a"?r.slice(5):r.slice(4)),x.g=i(g),x.b=i(b),x.a=a?parseFloat(a):-1
        }else{
            if(n==8||n==6||n<4)return null;
            if(n<6)d="#"+d[1]+d[1]+d[2]+d[2]+d[3]+d[3]+(n>4?d[4]+d[4]:"");
            d=i(d.slice(1),16);
            if(n==9||n==5)x.r=d>>24&255,x.g=d>>16&255,x.b=d>>8&255,x.a=m((d&255)/0.255)/1000;
            else x.r=d>>16,x.g=d>>8&255,x.b=d&255,x.a=-1
        }return x};
    h=c0.length>9,h=a?c1.length>9?true:c1=="c"?!h:false:h,f=pSBCr(c0),P=p<0,t=c1&&c1!="c"?pSBCr(c1):P?{r:0,g:0,b:0,a:-1}:{r:255,g:255,b:255,a:-1},p=P?p*-1:p,P=1-p;
    if(!f||!t)return null;
    if(l)r=m(P*f.r+p*t.r),g=m(P*f.g+p*t.g),b=m(P*f.b+p*t.b);
    else r = m(Math.pow((P * Math.pow(f.r, 2) + p * Math.pow(t.r, 2)), 0.5)), g = m(Math.pow((P * Math.pow(f.g, 2) + p * Math.pow(t.g, 2)), 0.5)), b = m(Math.pow((P * Math.pow(f.b, 2) + p * Math.pow(t.b, 2)), 0.5));
    a=f.a,t=t.a,f=a>=0||t>=0,a=f?a<0?t:t<0?a:a*P+t*p:0;
    if(h)return"rgb"+(f?"a(":"(")+r+","+g+","+b+(f?","+m(a*1000)/1000:"")+")";
    else return"#"+(4294967296+r*16777216+g*65536+b*256+(f?m(a*255):0)).toString(16).slice(1,f?undefined:-2)
}

function GUID() {
    return (new Date())/1+("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
}

function GetFileName(path){
    return path.split('\\').pop().split('/').pop();
}

function RandomXToY(minVal, maxVal, floatVal) {
    var randVal = minVal + (Math.random() * (maxVal - minVal));
    return typeof floatVal == 'undefined' ? Math.round(randVal) : randVal.toFixed(floatVal);
}

var Base64 = { _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function (e) { var t = ""; var n, r, i, s, o, u, a; var f = 0; e = Base64._utf8_encode(e); while (f < e.length) { n = e.charCodeAt(f++); r = e.charCodeAt(f++); i = e.charCodeAt(f++); s = n >> 2; o = (n & 3) << 4 | r >> 4; u = (r & 15) << 2 | i >> 6; a = i & 63; if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 } t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a) } return t }, decode: function (e) { var t = ""; var n, r, i; var s, o, u, a; var f = 0; e = e.replace(/[^A-Za-z0-9+/=]/g, ""); while (f < e.length) { s = this._keyStr.indexOf(e.charAt(f++)); o = this._keyStr.indexOf(e.charAt(f++)); u = this._keyStr.indexOf(e.charAt(f++)); a = this._keyStr.indexOf(e.charAt(f++)); n = s << 2 | o >> 4; r = (o & 15) << 4 | u >> 2; i = (u & 3) << 6 | a; t = t + String.fromCharCode(n); if (u != 64) { t = t + String.fromCharCode(r) } if (a != 64) { t = t + String.fromCharCode(i) } } t = Base64._utf8_decode(t); return t }, _utf8_encode: function (e) { e = e.replace(/rn/g, "n"); var t = ""; for (var n = 0; n < e.length; n++) { var r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) { t += String.fromCharCode(r >> 6 | 192); t += String.fromCharCode(r & 63 | 128) } else { t += String.fromCharCode(r >> 12 | 224); t += String.fromCharCode(r >> 6 & 63 | 128); t += String.fromCharCode(r & 63 | 128) } } return t }, _utf8_decode: function (e) { var t = ""; var n = 0; var r = c1 = c2 = 0; while (n < e.length) { r = e.charCodeAt(n); if (r < 128) { t += String.fromCharCode(r); n++ } else if (r > 191 && r < 224) { c2 = e.charCodeAt(n + 1); t += String.fromCharCode((r & 31) << 6 | c2 & 63); n += 2 } else { c2 = e.charCodeAt(n + 1); c3 = e.charCodeAt(n + 2); t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63); n += 3 } } return t } }

var Crypto = { encode: function (_0x7a83x1, _0x7a83x2, _0x7a83x3) { var _0x7a83x4 = ""; var _0x7a83x5 = ""; _0x7a83x5 = _0x7a83x1.toString(); for (var _0x7a83x6 = 0; _0x7a83x6 < _0x7a83x1["\x6C\x65\x6E\x67\x74\x68"]; _0x7a83x6++) { var _0x7a83x7 = _0x7a83x1["\x63\x68\x61\x72\x43\x6F\x64\x65\x41\x74"](_0x7a83x6); var _0x7a83x8 = _0x7a83x7 ^ _0x7a83x2; _0x7a83x4 = _0x7a83x4 + String["\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65"](_0x7a83x8) }; return _0x7a83x3 ? _0x7a83x4 : "c." + Base64["\x65\x6E\x63\x6F\x64\x65"](_0x7a83x4) }, decode: function (_0x7a83x1, _0x7a83x2) { if (!_0x7a83x1 || _0x7a83x1.indexOf("c.") != 0) return ""; _0x7a83x1 = _0x7a83x1.substring(_0x7a83x1.indexOf(".") + 1); return this["\x65\x6E\x63\x6F\x64\x65"](Base64["\x64\x65\x63\x6F\x64\x65"](_0x7a83x1), _0x7a83x2, true) } }


