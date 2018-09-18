var cvi = cvi || {};

/**
 * @class Color3B 用Byte表示三原色
 * @property {Number} r 红色
 * @property {Number} g 绿色
 * @property {Number} b 蓝色
 * @constructor
 */
cvi.Color3B = function (r, g, b) {
    this.initialize(r, g, b);
};

cvi.Color3B.prototype.initialize = function (r, g, b) {
    r = cvi.clamp(r, 0, 255);
    g = cvi.clamp(g, 0, 255);
    b = cvi.clamp(b, 0, 255);
    this.r = r;
    this.g = g;
    this.b = b;
};

/**
 * @description 将三原色数值表示成CSS颜色值
 * @returns {String}
 */
cvi.Color3B.prototype.toStr = function () {
    return cvi.c3bToStr(this);
};

/**
 * @description 克隆颜色对象
 * @returns {cvi.Color3B}
 */
cvi.Color3B.prototype.clone = function () {
    return new cvi.Color3B(this.r, this.g, this.b);
};

/**
 * @class Color3F 用Float表示三原色
 * @property {Number} r 红色
 * @property {Number} g 绿色
 * @property {Number} b 蓝色
 * @constructor
 */
cvi.Color3F = function (r, g, b) {
    this.initialize(r, g, b);
};

cvi.Color3F.prototype.initialize = function (r, g, b) {
    r = cvi.clamp(r, 0, 1);
    g = cvi.clamp(g, 0, 1);
    b = cvi.clamp(b, 0, 1);
    this.r = r;
    this.g = g;
    this.b = b;
};

/**
 * @description 将三原色数值表示成CSS颜色值
 * @returns {string}
 */
cvi.Color3F.prototype.toStr = function () {
    return cvi.c3fToStr(this);
};

/**
 * @description 克隆颜色对象
 * @returns {cvi.Color3F}
 */
cvi.Color3F.prototype.clone = function () {
    return new cvi.Color3F(this.r, this.g, this.b);
};

/**
 * @class 用Byte表示颜色值，另加透明度属性
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a Alpha透明度
 * @constructor
 */
cvi.Color4B = function (r, g, b, a) {
    this.initialize(r, g, b, a);
};

cvi.Color4B.prototype.initialize = function (r, g, b, a) {
    r = cvi.clamp(r, 0, 255);
    g = cvi.clamp(g, 0, 255);
    b = cvi.clamp(b, 0, 255);
    a = cvi.clamp(a, 0, 255);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};

/**
 * @description 将数值表示成CSS颜色值
 * @returns {string}
 */
cvi.Color4B.prototype.toStr = function () {
    return cvi.c4bToStr(this);
};

/**
 * @description 克隆颜色对象
 * @returns {cvi.Color4B}
 */
cvi.Color4B.prototype.clone = function () {
    return new cvi.Color4B(this.r, this.g, this.b, this.a);
};

/**
 * @class 用Float表示颜色值，另加透明度属性
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @param {Number} a Alpha透明度
 * @constructor
 */
cvi.Color4F = function (r, g, b, a) {
    this.initialize(r, g, b, a);
};

cvi.Color4F.prototype.initialize = function (r, g, b, a) {
    r = cvi.clamp(r, 0, 1);
    g = cvi.clamp(g, 0, 1);
    b = cvi.clamp(b, 0, 1);
    a = cvi.clamp(a, 0, 1);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
};

/**
 * @description 将数值表示成CSS颜色值
 * @returns {string}
 */
cvi.Color4F.prototype.toStr = function () {
    return cvi.c4fToStr(this);
};

/**
 * @description 克隆颜色对象
 * @returns {cvi.Color4F}
 */
cvi.Color4F.prototype.clone = function () {
    return new cvi.Color4F(this.r, this.g, this.b, this.a);
};

/**
 * @description 快速创建Color3B颜色对象
 * @param {Number} r 0-255
 * @param {Number} g 0-255
 * @param {Number} b 0-255
 * @returns {cvi.Color3B}
 */
cvi.c3b = function (r, g, b) {
    return new cvi.Color3B(r, g, b);
};

/**
 * @description 快速创建Color3F颜色对象
 * @param {Number} r 0-1
 * @param {Number} g 0-1
 * @param {Number} b 0-1
 * @returns {cvi.Color3F}
 */
cvi.c3f = function (r, g, b) {
    return new cvi.Color3F(r, g, b);
};

/**
 * @description 将Byte表示转化成Float表示
 * @param {cvi.Color3B} c3b
 * @returns {cvi.Color3F}
 */
cvi.c3bToc3f = function (c3b) {
    var r = (c3b.r / 255);
    var g = (c3b.g / 255);
    var b = (c3b.b / 255);
    return cvi.c3f(r, g, b);
};

/**
 * @description 将Float表示转化成Byte表示
 * @param {cvi.Color3F} c3f
 * @returns {cvi.Color3B}
 */
cvi.c3fToc3b = function (c3f) {
    var r = Math.floor(c3f.r * 255);
    var g = Math.floor(c3f.g * 255);
    var b = Math.floor(c3f.b * 255);
    return cvi.c3b(r, g, b);
};

/**
 * @description 将Byte表示转化成CSS颜色值
 * @param {cvi.Color3B} c3b
 * @returns {string}
 */
cvi.c3bToStr = function (c3b) {
    var r = c3b.r;
    var g = c3b.g;
    var b = c3b.b;

    var result = '#';
    result += r < 16 ? ('0' + r) : r.toString(16);
    result += g < 16 ? ('0' + g) : g.toString(16);
    result += b < 16 ? ('0' + b) : b.toString(16);
    return result;
};

/**
 * @description 将Float表示转化成CSS颜色值
 * @param {cvi.Color3F} c3f
 * @returns {string}
 */
cvi.c3fToStr = function (c3f) {
    var c3b = cvi.c3fToc3b(c3f);
    return cvi.c3bToStr(c3b);
};

/**
 * @description 快速创建Color4B颜色对象
 * @param {Number} r 0-255
 * @param {Number} g 0-255
 * @param {Number} b 0-255
 * @param {Number} a 0-255
 * @returns {cvi.Color4B}
 */
cvi.c4b = function (r, g, b, a) {
    return new cvi.Color4B(r, g, b, a);
};

/**
 * @description 快速创建Color4F颜色对象
 * @param {Number} r 0-1
 * @param {Number} g 0-1
 * @param {Number} b 0-1
 * @param {Number} a 0-1
 * @returns {cvi.Color4F}
 */
cvi.c4f = function (r, g, b, a) {
    return new cvi.Color4F(r, g, b, a);
};

/**
 * @description 将Float表示转化成Byte表示
 * @param {cvi.Color4F} c4f
 * @returns {cvi.Color4B}
 */
cvi.c4fToc4b = function (c4f) {
    var r = Math.floor(c4f.r * 255);
    var g = Math.floor(c4f.g * 255);
    var b = Math.floor(c4f.b * 255);
    var a = Math.floor(c4f.a * 255);
    return cvi.c4b(r, g, b, a);
};

/**
 * @description 将Byte表示转化成Float表示
 * @param {cvi.Color4B} c4b
 * @returns {cvi.Color4F}
 */
cvi.c4bToc4f = function (c4b) {
    var r = (c4b.r / 255);
    var g = (c4b.g / 255);
    var b = (c4b.b / 255);
    var a = (c4b.a / 255);
    return cvi.c4f(r, g, b, a);
};

/**
 * @description 将Byte表示转化成CSS颜色值
 * @param {cvi.Color4B} c4b
 * @returns {string}
 */
cvi.c4bToStr = function (c4b) {
    var result = 'rgba(';
    result += c4b.r + ',';
    result += c4b.g + ',';
    result += c4b.b + ',';
    result += c4b.a / 255 + ')';
    return result;
};

/**
 * @description 将Float表示转化成CSS颜色值
 * @param {cvi.Color4F} c4f
 * @returns {string}
 */
cvi.c4fToStr = function (c4f) {
    var result = 'rgba(';
    result += Math.floor(c4f.r * 255) + ',';
    result += Math.floor(c4f.g * 255) + ',';
    result += Math.floor(c4f.b * 255) + ',';
    result += c4f.a + ')';
    return result;
};

/**
 * @description 颜色相加
 * @param {cvi.Color3B} c3b1
 * @param {cvi.Color3B} c3b2
 * @returns {cvi.Color3B}
 */
cvi.c3bAdd = function (c3b1, c3b2) {
    return cvi.c3b(c3b1.r + c3b2.r, c3b1.g + c3b2.g, c3b1.b + c3b2.b)
};

/**
 * @description 颜色相减
 * @param {cvi.Color3B} c3b1
 * @param {cvi.Color3B} c3b2
 * @returns {cvi.Color3B}
 */
cvi.c3bSub = function (c3b1, c3b2) {
    return cvi.c3b(c3b1.r - c3b2.r, c3b1.g - c3b2.g, c3b1.b - c3b2.b)
};
var cvi = cvi || {};


/**
 * @class cvi.Bezier 复杂计算和表示贝塞尔曲线
 * @property {cvi.Point[]} pointArray 贝塞尔曲线上的端点
 * @property {cvi.Point[]} controlPt1 端点间的第一控制点
 * @property {cvi.Point[]} controlPt2 端点间的第二控制点
 * @constructor
 */
cvi.Bezier = function (pointArray) {
    this.initialize(pointArray);
};
cvi.Bezier.prototype.initialize = function (pointArray) {
    this.pointArray = [];
    this.controlPt1 = [];
    this.controlPt2 = [];
    pointArray = pointArray || [];
    for (var i = 0; i < pointArray.length - 1; i += 3) {
        this.pointArray.push(pointArray[i]);
        this.controlPt1.push(pointArray[i + 1]);
        this.controlPt2.push(pointArray[i + 2]);
    }
    var lastPt = pointArray[pointArray.length - 1];
    this.pointArray.push(lastPt);
};

/**
 * 计算贝塞尔曲线总长度
 * @returns {Number}
 */
cvi.Bezier.prototype.getTotalLength = function () {
    var locPoints = this.pointArray;
    var totalLen = 0;
    for(var i = 0; i < locPoints.length - 1; ++i) {
        totalLen += this._getSegmentLength(i);
    }
    return totalLen;
};

/**
 * 计算出给定端点所形成贝塞尔曲线路径
 * @param {Number} step 步长
 * @returns {cvi.Point[]}
 */
cvi.Bezier.prototype.getBezierPointsByStep = function (step) {
    var tempPoints = [];
    var locPoints = this.pointArray;
    var dRemain = 0;

    tempPoints.push(locPoints[0]);
    //TODO 去除locPoints.push(locPoints[0]);
    for (var i = 0; i < locPoints.length - 1; ++i){
        var dLineLen = this._getSegmentLength(i);
        var dNewLen  = dRemain + dLineLen;
        var dCut     = -dRemain;
        while (dNewLen > step) {
            dCut += step;
            var dPrec = dCut / dLineLen;
            var ptSplit = this._splitBezier(dPrec, i);
            tempPoints.push(ptSplit);
            dNewLen -= step;
        }
        dRemain = dNewLen;
    }

    if (dRemain > (step >> 2)) {
        var p = locPoints[locPoints.length - 1];
        tempPoints.push(p);
    }
    locPoints.pop();
    tempPoints.pop();

    return tempPoints;
};

/**
 * 计算贝塞尔曲线上，两个端点间的距离
 * @param {Number} segID 线段下标
 * @returns {Number}
 * @protect
 */
cvi.Bezier.prototype._getSegmentLength = function (segID) {
    var locPoints = this.pointArray;
    var cPoints1 = this.controlPt1;
    var cPoints2 = this.controlPt2;
    var p0 = locPoints[segID];
    var cp1 = cPoints1[segID];
    var cp2 = cPoints2[segID];
    var p3 = locPoints[segID + 1];

    var dx = Math.abs(p0.x - p3.x);
    var dy = Math.abs(p0.y - p3.y);
    var dLen = Math.max(dx, dy);
    if(dLen < 100) dLen = 100;
    var step = 1 / dLen;

    var x, y;
    var t3, t2, t11, t12, t13;
    var dPreX = p0.x;
    var dPreY = p0.y;

    var dBezierLength = 0;
    for(var t = step; t < 1; t += step) {
        t11 = 1 - t;
        t12 = t11 * t11;
        t13 = t12 * t11;
        t2 = t * t;
        t3 = t2 * t;
        var  t_t12_3 = 3 * t * t12 ;
        var  t2_t11_3 = 3 * t2 * t11;
        x =  t13 * p0.x + t_t12_3 * cp1.x + t2_t11_3 * cp2.x + t3 * p3.x;
        y =  t13 * p0.y + t_t12_3 * cp1.y + t2_t11_3 * cp2.y + t3 * p3.y;
        dBezierLength += cvi.pDistance(cvi.p(x, y), cvi.p(dPreX, dPreY));

        dPreX = x;
        dPreY = y;
    }
    return dBezierLength;
};

/**
 * 分隔一段贝塞尔线段，并返回每个分割点
 * @param {Number} dPrecent 百分比
 * @param {Number} segID 线段下标
 * @returns {cvi.Point}
 * @protect
 */
cvi.Bezier.prototype._splitBezier = function (dPrecent, segID) {
    var locPoints = this.pointArray;
    var cPoints1 = this.controlPt1;
    var cPoints2 = this.controlPt2;
    var p0 = locPoints[segID];
    var cp1 = cPoints1[segID];
    var cp2 = cPoints2[segID];
    var p3 = locPoints[segID + 1];

    var sp = cvi.pSub(p0, cp1);
    var dp = cvi.pMult(sp, dPrecent);
    var newPt01 = cvi.pSub(p0, dp);         //新的前一条Bezier曲线的1号控制点

    sp = cvi.pSub(cp1, cp2);
    dp = cvi.pMult(sp, dPrecent);
    var tempPt122 = cvi.pSub(cp1, dp);      //2, 1、2控制点之间连线上的百分比点。

    sp = cvi.pSub(newPt01, tempPt122);
    dp = cvi.pMult(sp, dPrecent);
    var newPt02 = cvi.pSub(newPt01, dp);

    sp = cvi.pSub(cp2, p3);
    dp = cvi.pMult(sp, dPrecent);
    var newPt12 = cvi.pSub(cp2, dp);        //新的后一条Bezier曲线的2号控制点。

    sp = cvi.pSub(tempPt122, newPt12);
    dp = cvi.pMult(sp, dPrecent);
    var newPt11 = cvi.pSub(tempPt122, dp);  //新的后一条Bezier曲线的1号控制点。

    sp = cvi.pSub(newPt02, newPt11);
    dp = cvi.pMult(sp, dPrecent);
    return cvi.pSub(newPt02, dp);
};

/**
 *
 * @class cvi.Spline 样条曲线，只需给出端点，控制点内部计算
 * @extend cvi.Bezier
 * @property {cvi.Point[]} pointArray 贝塞尔曲线上的端点
 * @property {cvi.Point[]} controlPt1 端点间的第一控制点
 * @property {cvi.Point[]} controlPt2 端点间的第二控制点
 * @constructor
 */
cvi.Spline = function (pointArray) {
    this.initialize(pointArray);
};
cvi.Spline.prototype = new cvi.Bezier();
cvi.Spline.prototype.initialize = function (pointArray) {
    this.pointArray = [];
    this.controlPt1 = [];
    this.controlPt2 = [];

    this.pointArray = pointArray.slice(0);

    this._getControlPt();
};

/**
 * 由端点算出控制点
 * @private
 */
cvi.Spline.prototype._getControlPt = function () {
    var locPoints = this.pointArray;
    var cPoints1 = this.controlPt1;
    var cPoints2 = this.controlPt2;

    var len = locPoints.length, q = 1, u = [];
    for (var i = 0; i < len; ++i) {
        if (i == 0) {
            u[i] = cvi.p(q * (locPoints[1].x - locPoints[len - 1].x) >> 1, q * (locPoints[1].y - locPoints[len - 1].y) >> 1);
        } else if (i == len - 1) {
            u[i] = cvi.p(q * (locPoints[0].x - locPoints[i - 1].x) >> 1, q * (locPoints[0].y - locPoints[i - 1].y) >> 1);
        } else {
            u[i] = cvi.p(q * (locPoints[i + 1].x - locPoints[i - 1].x) >> 1, q * (locPoints[i + 1].y - locPoints[i - 1].y) >> 1);
        }
    }
    for (var i = 0; i <= (len - 1); ++i) {
        if (i == (len - 1)) {
            cPoints1[i] = cvi.p(locPoints[i].x + u[i].x / 3, locPoints[i].y + u[i].y / 3);
            cPoints2[i] = cvi.p(locPoints[0].x - u[0].x / 3, locPoints[0].y - u[0].y / 3);
        } else {
            cPoints1[i] = cvi.p(locPoints[i].x + u[i].x / 3, locPoints[i].y + u[i].y / 3);
            cPoints2[i] = cvi.p(locPoints[i + 1].x - u[i + 1].x / 3, locPoints[i + 1].y - u[i + 1].y / 3);
        }
    }
};
var cvi = cvi || {};

cvi.DegToRad = Math.PI / 180;
cvi.RadToDeg = 180 / Math.PI;

cvi.p = function (x, y) {
    if (arguments.length == 0)
        return new cvi.Point(0, 0);
    return new cvi.Point(x, y);
};

cvi.size = function (width, height) {
    if (arguments.length == 0)
        return new cvi.Size(0, 0);
    return new cvi.Size(width, height);
};

/**
 * 快速创建矩形对象
 * @param {Number} x 矩形原点x坐标
 * @param {Number} y 矩形原点y坐标
 * @param {Number} width 矩形宽度
 * @param {Number} height 矩形长度
 * @returns {cvi.Rectangle}
 */
cvi.rect = function (x, y, width, height) {
    if (arguments.length == 0)
        return new cvi.Rectangle(0, 0, 0, 0);
    if (arguments.length == 2)
        return new cvi.Rectangle(x.x, x.y, y.width, y.height);
    if (arguments.length == 4)
        return new cvi.Rectangle(x, y, width, height);
};

/**
 * 检测矩形是否包含点
 * @param {cvi.Rectangle} rect
 * @param {cvi.Point} point
 * @returns {boolean}
 */
cvi.rectContainsPoint = function (rect, point) {
    var left = rect.x;
    var right = rect.x + rect.width;
    var top = rect.y;
    var bottom = rect.y + rect.height;
    return (left <= point.x && right >= point.x && top <= point.y && bottom >= point.y);
};

/**
 * 检测两矩形是否相交
 * @param {cvi.Rectangle} rect1
 * @param {cvi.Rectangle} rect2
 * @returns {boolean}
 */
cvi.rectIntersectsRect = function (rect1, rect2) {
    var left1 = rect1.x;
    var right1 = rect1.x + rect1.width;
    var top1= rect1.y;
    var bottom1 = rect1.y + rect1.height;
    var left2 = rect2.x;
    var right2 = rect2.x + rect2.width;
    var top2 = rect2.y;
    var bottom2 = rect2.y + rect2.height;
    return !(left2 > right1 || left1 > right2 || top1 > bottom2 || top2 > bottom1);
};

cvi.pAdd = function (p1, p2) {
    return cvi.p(p1.x + p2.x, p1.y + p2.y);
};

cvi.pSub = function (p1, p2) {
    return cvi.p(p1.x - p2.x, p1.y - p2.y);
};

cvi.pMult = function (point, value) {
    return cvi.p(point.x * value, point.y * value);
};

cvi.pDistance = function (p1, p2) {
    var p = cvi.pSub(p1, p2);
    return Math.sqrt(p.x * p.x + p.y * p.y);
};


cvi.clamp = function (value, min, max) {
    return value < min ? min : (value > max ? max : value);
};

/**
 * 两点所成直线于x轴正向夹角，从p1指向p2，角度按画布规定
 * @param {cvi.Point} p1 起始点
 * @param {cvi.Point} p2 终止点
 * @return {Number} 返回度数
 */
cvi.pAngle = function (p1, p2) {
    var length = cvi.pDistance(p1, p2);
    var dx = p2.x - p1.x;
    var dy = p2.y - p1.y;
    var cosv = dx / length ;
    var sinv = dy / length ;
    var radiu;
    if(sinv >= 0) radiu = Math.acos(cosv);
    else if(sinv < 0) radiu = Math.PI * 2 - Math.acos(cosv);
    return radiu * cvi.RadToDeg;
};
var cvi = cvi || {};



cvi.Point = function (x, y) {
    this.initialize(x, y);
}


cvi.Point.prototype.initialize = function (x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

cvi.Point.prototype.clone = function () {
    return new Point(this.x, this.y);
}

cvi.Point.prototype.toString= function () {
    return "[Point:(x = " + this.x + ', y = ' + this.y + ")]";
}
var cvi = cvi || {};

cvi.Rectangle = function (x, y, width, height) {
    this.initialize(x, y, width, height);
};


cvi.Rectangle.prototype.initialize = function (x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;

    this.origin = cvi.p(x, y);
    this.size = cvi.size(width, height);
};

cvi.Rectangle.prototype.clone = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
};

cvi.Rectangle.prototype.toString = function () {
    return "[Rectangle:(x = " + this.x + ', y = ' + this.y + ", width = " + this.width + ", height = " + this.height + ")]";
};
var cvi = cvi || {};

cvi.Size = function (width, height) {
    this.initialize(width, height);
};


cvi.Size.prototype.initialize = function (width, height) {
    this.width = width || 0;
    this.height = height || 0;
};

cvi.Size.prototype.clone = function () {
    return new Size(this.width, this.height);
};

cvi.Size.prototype.toString= function () {
    return "[Size:(width = " + this.width + ", height = " + this.height + ")]";
};


var cvi = cvi || {};

cvi.NOT_FILL = 0;
cvi.NORMAL_FILL = 1;
cvi.LINEAR_FILL = 2;
cvi.RADIAL_FILL = 3;
cvi.PATTREN_FILL = 4;

var CVIShapeBase = function() {
    this.initialize();
};

CVIShapeBase.prototype.initialize = function () {
    this.fillType    = cvi.NOT_FILL;
    this.startColor  = "#000000";
    this.endColor    = "#000000";
    this.startPoint  = cvi.p(0, 0);
    this.endPoint    = cvi.p(0, 0);
    this.r0          = 0;
    this.r1          = 0;
    this.ratios      = [];
    this.colors      = [];
    this.pattern     = null;
    this.repetition  = "repeat";     //"repeat", "repeat-x", "repeat-y", "no-repeat"

    this.lineColor   = "#000000";
    this.lineWidth   = 1;

    this.lineCap     = "butt";    //"butt", "round", "square"
    this.lineJoin    = "miter";    //"miter", "round", "bevel"
    this.miterLimit  = 10.0;
    this.lineDash    = [];

    this.close       = false;
};

CVIShapeBase.prototype.setLineColor = function (color) {
    this.lineColor = color;
    return this;
};


CVIShapeBase.prototype.setLineWidth = function (width) {
    this.lineWidth = width;
    return this;
};

CVIShapeBase.prototype.setLineCap = function (type) {
    this.lineCap = type;
    return this;
};

CVIShapeBase.prototype.setLineJoin = function (type) {
    this.lineJoin = type;
    return this;
};


CVIShapeBase.prototype.setMiterLimit = function (value) {
    this.miterLimit = value;
    return this;
};

CVIShapeBase.prototype.setLineDash = function (segments) {
    this.lineDash = segments;
    return this;
};

CVIShapeBase.prototype.setClose = function (close) {
    this.close = close;
    return this;
};

CVIShapeBase.prototype.lineStyle = function (lineColor, lineWidth, lineCap, lineJoin, miterLimit, lineDash) {
    this.lineColor = lineColor || this.lineColor;
    this.lineWidth = lineWidth || this.lineWidth;
    this.lineCap = lineCap || this.lineCap;
    this.lineJoin = lineJoin || this.lineJoin;
    this.miterLimit = miterLimit || this.miterLimit;
    this.lineDash = lineDash || this.lineDash;
    return this;
};

CVIShapeBase.prototype.notFill = function () {
    this.fillType = cvi.NOT_FILL;
    return this;
};

CVIShapeBase.prototype.fillColor = function (color) {
    this.fillType = cvi.NORMAL_FILL;
    this.startColor = color;;
    return this;
};

CVIShapeBase.prototype.linearGradientFill = function (startP, endP, ratios, colors) {
    this.fillType = cvi.LINEAR_FILL;
    this.startPoint = startP;
    this.endPoint = endP;
    this.ratios = [];
    this.colors = [];
    if (ratios instanceof Array) {
        this.ratios = ratios.slice(0);
        this.colors = colors.slice(0);
    } else if (ratios instanceof String || ratios instanceof Object) {
        this.startColor = ratios;
        this.endColor = colors;
    }
    return this;
};

CVIShapeBase.prototype.radialGradientFill= function(startP, r0, endP, r1, ratios, colors){
    this.fillType = cvi.RADIAL_FILL;
    this.startPoint = startP;
    this.endPoint = endP;
    this.r0 = r0;
    this.r1 = r1;
    this.ratios = [];
    this.colors = [];
    if (ratios instanceof Array) {
        this.ratios = ratios.slice(0);
        this.colors = colors.slice(0);
    } else if (ratios instanceof String || ratios instanceof Object) {
        this.startColor = ratios;
        this.endColor = colors;
    }
    return this;
};

CVIShapeBase.prototype.patternFill = function (image, repetition) {
    this.fillType = cvi.PATTREN_FILL;
    this.pattern = image;
    this.repetition = repetition || "repeat";
    return this;
};

CVIShapeBase.prototype.draw = function (ctx) {
    ctx.save();
    ctx.strokeStyle = this._convertColor(this.lineColor);
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;
    ctx.lineJoin = this.lineJoin;
    ctx.miterLimit = this.miterLimit;
    if (ctx.setLineDash) ctx.setLineDash(this.lineDash);
    ctx.beginPath();
    this._doDraw(ctx);
    if (this.close) ctx.closePath();
    if (this.lineWidth > 0) ctx.stroke();
    this._doFill(ctx);
    ctx.restore();
};

CVIShapeBase.prototype._convertColor = function (color) {
    if (typeof color == "string") {
        return color;
    } else {
        return color.toStr();
    }
};

CVIShapeBase.prototype._doFill = function (ctx) {
    switch (this.fillType) {
        case cvi.NOT_FILL:
            break;
        case cvi.NORMAL_FILL:
            ctx.fillStyle = this._convertColor(this.startColor);
            ctx.fill();
            break;
        case cvi.LINEAR_FILL: {
            var gradient = ctx.createLinearGradient(this.startPoint.x, this.startPoint.y, this.endPoint.x, this.endPoint.y);
            if (this.ratios.length > 0) {
                for (var i = 0; i < this.ratios.length; ++i) {
                    gradient.addColorStop(this.ratios[i], this._convertColor(this.colors[i]));
                }
            } else {
                gradient.addColorStop(0, this._convertColor(this.startColor));
                gradient.addColorStop(1, this._convertColor(this.endColor));
            }
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        case cvi.RADIAL_FILL: {
            var gradient = ctx.createRadialGradient(
                this.startPoint.x, this.startPoint.y, this.r0,
                this.endPoint.x, this.endPoint.y, this.r1);
            if (this.ratios.length > 0) {
                for (var i = 0; i < this.ratios.length; ++i) {
                    gradient.addColorStop(this.ratios[i], this._convertColor(this.colors[i]));
                }
            } else {
                gradient.addColorStop(0, this._convertColor(this.startColor));
                gradient.addColorStop(1, this._convertColor(this.endColor));
            }
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        case cvi.PATTREN_FILL: {
            var gradient = ctx.createPattern(this.pattern, this.repetition);
            ctx.fillStyle = gradient;
            ctx.fill();
            break;
        }
        default :
            console.log("some problems happen when do fill.");
            break;
    }
};

CVIShapeBase.prototype._doDraw = function (ctx) {
    //override me
};



var CVIRect = function (rect) {
    this.initialize(rect);
};
CVIRect.prototype = new CVIShapeBase();

CVIRect.prototype.Shape_init = CVIRect.prototype.initialize;
CVIRect.prototype.initialize = function (rect) {
    this.Shape_init();
    this.rect = rect;
};

CVIRect.prototype._doDraw = function (ctx) {
    var rect = this.rect;
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
};




var CVIRoundRect = function (rect, topLeft, topRight, bottomLeft, bottomRight) {
    this.initialize(rect, topLeft, topRight, bottomLeft, bottomRight);
};
CVIRoundRect.prototype = new CVIRect();

CVIRoundRect.prototype.Rect_init = CVIRoundRect.prototype.initialize;
CVIRoundRect.prototype.initialize = function (rect, topLeft, topRight, bottomLeft, bottomRight) {
    this.Rect_init(rect);

    this.cornerTL = topLeft;
    this.cornerTR = topRight || topLeft;
    this.cornerBL = bottomLeft || topLeft;
    this.cornerBR = bottomRight || topLeft;

    if ((this.cornerTL + this.cornerTR) > rect.width || (this.cornerBL + this.cornerBR) > rect.width ||
        (this.cornerTL + this.cornerBL) > rect.height || (this.cornerTR + this.cornerBR) > rect.height) {
        this.cornerTL = this.cornerTR = this.cornerBL = this.cornerBR = 0;
    }
};

CVIRoundRect.prototype._doDraw = function (ctx) {
    var x = this.rect.x;
    var y = this.rect.y;
    var w = this.rect.width;
    var h = this.rect.height;

    ctx.moveTo(x + this.cornerTL, y);
    ctx.lineTo(x + w - this.cornerTR, y);
    ctx.arc(x + w - this.cornerTR, y + this.cornerTR, this.cornerTR, -Math.PI/2, 0, false);
    ctx.lineTo(x + w, y + h - this.cornerBR);
    ctx.arc(x + w - this.cornerBR, y + h - this.cornerBR, this.cornerBR, 0, Math.PI/2, false);
    ctx.lineTo(x + this.cornerBL, y + h);
    ctx.arc(x + this.cornerBL, y + h - this.cornerBL, this.cornerBL, Math.PI/2, Math.PI, false);
    ctx.lineTo(x, y + this.cornerTL);
    ctx.arc(x + this.cornerTL, y + this.cornerTL, this.cornerTL, Math.PI, Math.PI*3/2, false);
};


var CVIArc = function (point, radius, startAngle, endAngle, anticlockwise) {
    this.initialize(point, radius, startAngle, endAngle, anticlockwise)
};
CVIArc.prototype = new CVIShapeBase();

CVIArc.prototype.Shape_init = CVIArc.prototype.initialize;
CVIArc.prototype.initialize = function (point, radius, startAngle, endAngle, anticlockwise) {
    this.Shape_init();
    this.origin = point;
    this.radius = radius;
    this.startAngle = startAngle / 180 * Math.PI || 0;
    this.endAngle = endAngle / 180 * Math.PI || (Math.PI * 2);
    this.anticlockwise = anticlockwise || false;
};

CVIArc.prototype._doDraw = function (ctx) {
    ctx.arc(this.origin.x, this.origin.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
};


var CVILine = function (pointAry) {
    this.initialize(pointAry)
};
CVILine.prototype = new CVIShapeBase();

CVILine.prototype.Shape_init = CVILine.prototype.initialize;
CVILine.prototype.initialize = function (pointAry) {
    this.Shape_init();
    pointAry = pointAry || [];
    this._pointAry = pointAry.slice(0);
};

CVILine.prototype._doDraw = function (ctx) {
    ctx.moveTo(this._pointAry[0].x, this._pointAry[0].y);
    for (var i = 1; i < this._pointAry.length; ++i) {
        ctx.lineTo(this._pointAry[i].x, this._pointAry[i].y);
    }
};

var CVIQuadraticCurve = function (originPt, pointAry) {
    this.initialize(originPt, pointAry)
};
CVIQuadraticCurve.prototype = new CVILine();

CVIQuadraticCurve.prototype.Line_init = CVIQuadraticCurve.prototype.initialize;
CVIQuadraticCurve.prototype.initialize = function (originPt, pointAry) {
    var ary = pointAry.slice(0);
    if (ary.length % 2 != 0) ary.pop();
    this._pointAry = ary;
    this._origin = originPt;
};

CVIQuadraticCurve.prototype._doDraw = function (ctx) {
    ctx.moveTo(this._origin.x, this._origin.y);
    for (var i = 0; i < this._pointAry.length; i += 2) { //
        ctx.quadraticCurveTo(this._pointAry[i].x, this._pointAry[i].y,this._pointAry[i + 1].x, this._pointAry[i + 1].y);
    }
};


var CVIBezierCurve = function (originPt, pointAry) {
    this.initialize(originPt, pointAry)
};
CVIBezierCurve.prototype = new CVILine();

CVIBezierCurve.prototype.Line_init = CVIBezierCurve.prototype.initialize;
CVIBezierCurve.prototype.initialize = function (originPt, pointAry) {
    var ary = pointAry.slice(0);
    while (ary.length % 3 != 0) ary.pop();
    this._pointAry = ary;
    this._origin = originPt;
};

CVIBezierCurve.prototype._doDraw = function (ctx) {
    ctx.moveTo(this._origin.x, this._origin.y);
    for (var i = 0; i < this._pointAry.length; i += 3) { //
        ctx.bezierCurveTo(this._pointAry[i].x, this._pointAry[i].y,this._pointAry[i + 1].x, this._pointAry[i + 1].y,
            this._pointAry[i + 2].x, this._pointAry[i + 2].y);
    }
};

var CVISpline = function (pointAry) {
    this.initialize(pointAry)
};
CVISpline.prototype = new CVILine();

CVISpline.prototype.Line_init = CVISpline.prototype.initialize;
CVISpline.prototype.initialize = function (pointAry) {
    this.Line_init(pointAry);
    this.controlPt1 = [];
    this.controlPt2 = [];
    this._getControlPt();
};

CVISpline.prototype._getControlPt = function () {
    var points = this._pointAry;
    var cp1 = this.controlPt1;
    var cp2 = this.controlPt2;

    var len = points.length, q = 1, u = [];
    for (var i = 0; i < len; ++i) {
        if (i == 0) {
            u[i] = cvi.p(q * (points[1].x - points[len - 1].x) >> 1, q * (points[1].y - points[len - 1].y) >> 1);
        } else if (i == len - 1) {
            u[i] = cvi.p(q * (points[0].x - points[i - 1].x) >> 1, q * (points[0].y - points[i - 1].y) >> 1);
        } else {
            u[i] = cvi.p(q * (points[i + 1].x - points[i - 1].x) >> 1, q * (points[i + 1].y - points[i - 1].y) >> 1);
        }
    }
    for (var i = 0; i <= (len - 1); ++i) {
        if (i == (len - 1)) {
            cp1[i] = cvi.p(points[i].x + u[i].x / 3, points[i].y + u[i].y / 3);
            cp2[i] = cvi.p(points[0].x - u[0].x / 3, points[0].y - u[0].y / 3);
        } else {
            cp1[i] = cvi.p(points[i].x + u[i].x / 3, points[i].y + u[i].y / 3);
            cp2[i] = cvi.p(points[i + 1].x - u[i + 1].x / 3, points[i + 1].y - u[i + 1].y / 3);
        }
    }
};

CVISpline.prototype._doDraw = function (ctx) {
    var len = this._pointAry.length;

    ctx.moveTo(this._pointAry[0].x, this._pointAry[0].y);
    for (var i = 0; i < len - 1; ++i) { //
        ctx.bezierCurveTo(this.controlPt1[i].x, this.controlPt1[i].y,this.controlPt2[i].x, this.controlPt2[i].y,
            this._pointAry[i + 1].x, this._pointAry[i + 1].y);
    }
    if (this.close) {
        ctx.bezierCurveTo(this.controlPt1[len - 1].x, this.controlPt1[len - 1].y, this.controlPt2[len - 1].x, this.controlPt2[len - 1].y,
            this._pointAry[0].x, this._pointAry[0].y);
    }
};


var CVIStarShape = function (originPt, maxLen, minLen, angles) {
    this.initialize(originPt, maxLen, minLen, angles)
};
CVIStarShape.prototype = new CVIShapeBase();

CVIStarShape.prototype.Shape_init = CVIStarShape.prototype.initialize;
CVIStarShape.prototype.initialize = function (originPt, maxLen, minLen, angles) {
    this.Shape_init();
    this.origin = originPt;
    this.maxLen = maxLen;
    this.minLen = minLen || maxLen * 2 / 5;
    this.angles = angles || 5;
};

CVIStarShape.prototype._doDraw = function (ctx) {
    var o = this.origin;
    var min = this.minLen;
    var max = this.maxLen;
    var count = this.angles;
    var angle = Math.PI / count;

    ctx.moveTo(o.x, o.y - max);
    for (var i = 1; i <= count * 2; i += 2) {
        ctx.lineTo(o.x - Math.sin(angle * i) * min, o.y - Math.cos(angle * i) * min);
        ctx.lineTo(o.x - Math.sin(angle * (i + 1)) * max, o.y - Math.cos(angle * (i + 1)) * max);
    }
};



var CVIPolygon = function (originPt, len, sides) {
    this.initialize(originPt, len, sides)
};
CVIPolygon.prototype = new CVIShapeBase();

CVIPolygon.prototype.Shape_init = CVIPolygon.prototype.initialize;
CVIPolygon.prototype.initialize = function (originPt, len, sides) {
    this.Shape_init();
    this.origin = originPt;
    this.length = len;
    this.sides = sides;
};

CVIPolygon.prototype._doDraw = function (ctx) {
    var o = this.origin;
    var len = this.length;
    var sides = this.sides;
    var angle = Math.PI * 2 / sides;
    var offset = Math.PI;

    ctx.moveTo(o.x, o.y - len);
    for (var i = 1; i <= sides; ++i) {
        ctx.lineTo(o.x + Math.sin(offset + angle * i) * len, o.y + Math.cos(offset + angle * i) * len);
    }
};


var CVIEllipse = function (originPt, xHalfLen, yHalfLen) {
    this.initialize(originPt, xHalfLen, yHalfLen)
};
CVIEllipse.prototype = new CVIShapeBase();

CVIEllipse.prototype.Shape_init = CVIEllipse.prototype.initialize;
CVIEllipse.prototype.initialize = function (originPt, xHalfLen, yHalfLen) {
    this.Shape_init();
    this.origin = originPt;
    this.xHalfLen = xHalfLen;
    this.yHalfLen = yHalfLen;
};

CVIEllipse.prototype._doDraw = function (ctx) {
    var o = this.origin;
    var xh = this.xHalfLen;
    var yh = this.yHalfLen;
    var ox = 0.5 * xh, oy = 0.6 * yh;

    ctx.moveTo(o.x, o.y + yh);
    ctx.bezierCurveTo(o.x + ox, o.y + yh, o.x + xh, o.y + oy, o.x + xh, o.y);
    ctx.bezierCurveTo(o.x + xh, o.y - oy, o.x + ox, o.y - yh, o.x, o.y - yh);
    ctx.bezierCurveTo(o.x - ox, o.y - yh, o.x - xh, o.y - oy, o.x - xh, o.y);
    ctx.bezierCurveTo(o.x - xh, o.y + oy, o.x - ox, o.y + yh, o.x, o.y + yh);
    //ctx.ellipse(o.x, o.y, xh, yh, 0, 0, Math.PI * 2, false);
};
var cvi = cvi || {};


var CVIGraph = function () {
    this.initialize();
    this.children = [];
};
CVIGraph.prototype = new CVIShapeBase();

CVIGraph.prototype.gLineStyle = CVIShapeBase.prototype.lineStyle;
CVIGraph.prototype.gSetClose = CVIShapeBase.prototype.setClose;
CVIGraph.prototype.gNotFill = CVIShapeBase.prototype.notFill;
CVIGraph.prototype.gFillColor = CVIShapeBase.prototype.fillColor;
CVIGraph.prototype.gLinearGradientFill = CVIShapeBase.prototype.linearGradientFill;
CVIGraph.prototype.gRadialGradientFill = CVIShapeBase.prototype.radialGradientFill;
CVIGraph.prototype.gPatternFill = CVIShapeBase.prototype.patternFill;

/**
 * 改变线条样式函数，利用CVIGraph绘制的图形全部改变
 * @param {cvi.Color3B|String} lineColor 线条颜色
 * @param {Number} lineWidth 线宽
 * @param {String} lineCap 线帽样式
 * @param {String} lineJoin 线段连接处样式
 * @param {Number} miterLimit 斜接限制
 * @param {Array} lineDash 线点样式
 * @returns {CVIGraph}
 */
CVIGraph.prototype.lineStyle = function (lineColor, lineWidth, lineCap, lineJoin, miterLimit, lineDash) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.lineStyle(lineColor, lineWidth, lineCap, lineJoin, miterLimit, lineDash);
    }
    return this;
};

/**
 * @description 设置图形头尾闭合
 * @param {Boolean} close 是否闭合曲线
 * @returns {CVIGraph}
 */
CVIGraph.prototype.setClose = function (close) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.setClose(close);
    }
    return this;
}

/**
 * @description 设置图形不填充
 * @returns {CVIGraph}
 */
CVIGraph.prototype.notFill = function () {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.notFill();
    }
    return this;
}

/**
 * @description 设置图形填充颜色
 * @param {cvi.Color3B|String} color B填充颜色
 * @returns {CVIGraph}
 */
CVIGraph.prototype.fillColor = function (color) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.fillColor(color);
    }
    return this;
}

/**
 * @description 设置图形线性渐变填充颜色
 * @param {cvi.Point} startP 起始位置
 * @param {cvi.Point} endP 终止位置
 * @param {cvi.Color3B|String|Number[]} ratios 起始颜色 或 相对位置数组
 * @param {cvi.Color3B|String|cvi.Color3B[]} colors 终止颜色 或 对应位置颜色数组
 * @returns {CVIGraph}
 */
CVIGraph.prototype.linearGradientFill = function (startP, endP, ratios, colors) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.linearGradientFill(startP, endP, ratios, colors);
    }
    return this;
};

/**
 * @description 设置图形径向渐变填充颜色
 * @param {cvi.Point} startP 起始位置
 * @param {Number} r0 起始圆半径
 * @param {cvi.Point} endP 终止位置
 * @param {Number} r1 终止圆半径
 * @param {cvi.Color3B|String|Number[]} ratios 起始颜色 或 相对位置数组
 * @param {cvi.Color3B|String|cvi.Color3B[]} colors 终止颜色 或 对应位置颜色数组
 * @returns {CVIGraph}
 */
CVIGraph.prototype.radialGradientFill = function (startP, r0, endP, r1, ratios, colors) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.radialGradientFill(startP, r0, endP, r1, ratios, colors);
    }
    return this;
};

/**
 * @description 设置图形图案填充
 * @param {canvas|Image} image
 * @param {String} repetition  填充方式，有"repeat", "repeat-x", "repeat-y", "no-repeat"
 * @returns {CVIGraph}
 */
CVIGraph.prototype.patternFill = function (image, repetition) {
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.patternFill(image, repetition);
    }
    return this;
};

/**
 * @description 生成矩形绘图对象
 * @param {cvi.Rectangle} rect 矩形对象，可利用cvi.rect函数快速创建
 * @returns {CVIRect}
 */
CVIGraph.prototype.rect = function (rect) {
    var shape = new CVIRect(rect);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.roundRect = function (rect, topLeft, topRight, bottomLeft, bottomRight) {
    var shape = new CVIRoundRect(rect, topLeft, topRight, bottomLeft, bottomRight);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.arc = function (point, radius, startAngle, endAngle, anticlockwise) {
    var shape = new CVIArc(point, radius, startAngle, endAngle, anticlockwise);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.lineTo = function (pointAry) {
    var shape = new CVILine(pointAry);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.quadTo = function (originPt, pointAry) {
    var shape = new CVIQuadraticCurve(originPt, pointAry);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.bezierTo = function (originPt, pointAry) {
    var shape = new CVIBezierCurve(originPt, pointAry);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.splineTo = function (pointAry) {
    var shape = new CVISpline(pointAry);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.ellipse = function (originPt, xHalfLen, yHalfLen) {
    var shape = new CVIEllipse(originPt, xHalfLen, yHalfLen);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.polygon = function (originPt, len, sides) {
    var shape = new CVIPolygon(originPt, len, sides);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.star = function (originPt, maxLen, minLen, angles) {
    var shape = new CVIStarShape(originPt, maxLen, minLen, angles);
    this.initShape(shape);
    return shape;
};

CVIGraph.prototype.initShape = function (shape) {
    this.children.push(shape);
    shape.lineStyle(this.lineColor, this.lineWidth, this.lineCap, this.lineJoin, this.miterLimit, this.lineDash);
    shape.setClose(this.close);
    switch (this.fillType) {
        case cvi.NOT_FILL       : shape.notFill();break;
        case cvi.NORMAL_FILL    : shape.fillColor(this.startColor);break;
        case cvi.LINEAR_FILL    : shape.linearGradientFill(this.startPoint, this.endPoint,
            this.ratios.length ? this.ratios : this.startColor, this.colors.length ? this.colors : this.endColor);break;
        case cvi.RADIAL_FILL    : shape.radialGradientFill(this.startPoint, this.r1,  this.endPoint, this.r1,
            this.ratios.length ? this.ratios : this.startColor, this.colors.length ? this.colors : this.endColor);break;
        case cvi.PATTREN_FILL   : shape.patternFill(this.pattern, this.repetition);break;
        default                 : console.log("some problems happen when initialize shape.");break;
    }
};

CVIGraph.prototype.draw = function(ctx){
    var len = this.children.length;
    for (var i = 0; i < len; ++i) {
        var child = this.children[i];
        child.draw(ctx, false);
    }
    return true;
};