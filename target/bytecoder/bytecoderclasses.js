const bytecoder = {
    imports: {
        "java.lang.System": {
            J$currentTimeMillis$$: function () {
                return Date.now();
            },
        },
        "java.lang.Object": {
            Ljava$lang$Class$$getClass$$: function (inst) {
                return inst.constructor.$rt;
            },
        },
        "java.lang.NullPointerException": {
            Ljava$lang$String$$getExtendedNPEMessage$$: function(inst) {
                return null;
            }
        },
        "jdk.internal.misc.ScopedMemoryAccess": {
            V$registerNatives$$: function () {
            },
        },
        "java.lang.Float": {
            I$floatToRawIntBits$F: function (value) {
                let fl = new Float32Array(1);
                fl[0] = value;
                let br = new Int32Array(fl.buffer);
                return br[0];
            },
            Z$isNaN$D: function (a) {
                return isNaN(a) ? 1 : 0
            },
            Z$isNaN$F: function (a) {
                return isNaN(a) ? 1 : 0
            },
            Z$isInfinite$F: function (a) {
                return (a === Number.POSITIVE_INFINITY || a === Number.NEGATIVE_INFINITY) ? 1 : 0
            },
            Ljava$lang$String$$toString$F: function (value) {
                let str = value.toString();
                if (str.indexOf(".") < 0) {
                    str += '.0';
                }
                return bytecoder.toBytecoderString(str);
            },
            F$parseFloat$Ljava$lang$String$: function (value) {
                return parseFloat(value.nativeObject);
            },
        },
        "java.lang.Math": {
            I$min$I$I: function (a, b) {
                return Math.min(a, b);
            },
            J$min$J$J: function (a, b) {
                return Math.min(a, b);
            },
            D$min$D$D: function (a, b) {
                return Math.min(a, b);
            },
            F$min$F$F: function (a, b) {
                return Math.min(a, b);
            },
            D$max$D$D: function (a, b) {
                return Math.max(a, b);
            },
            I$max$I$I: function (a, b) {
                return Math.max(a, b);
            },
            J$max$J$J: function (a, b) {
                return Math.max(a, b);
            },
            D$floor$D: function (a) {
                return Math.floor(a);
            },
            F$floor$F: function (a) {
                return Math.floor(a);
            },
            D$ceil$D: function (a) {
                return Math.ceil(a);
            },
            F$ceil$F: function (a) {
                return Math.ceil(a);
            },
            D$toRadians$D: function (a) {
                return a * (Math.PI / 180.0);
            },
            D$toDegrees$D: function (a) {
                return a * (180. / Math.PI);
            },
            D$cos$D: function (a) {
                return Math.cos(a);
            },
            D$sin$D: function (a) {
                return Math.sin(a);
            },
            D$tan$D: function (a) {
                return Math.tan(a);
            },
            D$sqrt$D: function (a) {
                return Math.sqrt(a);
            },
            D$cbrt$D: function (a) {
                return Math.cbrt(a);
            },
            D$log$D: function (a) {
                return Math.log(a);
            },
            D$random$$: function () {
                return Math.random();
            },
        },
        "java.lang.StrictMath": {
            D$sqrt$D: function (a) {
                return Math.sqrt(a);
            },
            I$round$F: function(a) {
                return Math.round(a);
            },
            D$sin$D: function(a) {
                return Math.sin(a);
            },
            D$cos$D: function(a) {
                return Math.sin(a);
            }
        },
        "java.lang.reflect.Array": {
            Ljava$lang$Object$$newArray$Ljava$lang$Class$$I: function (t, l) {
                return bytecoder.newarray(l, null);
            },
        },
        "jdk.internal.misc.CDS": {
            Z$isDumpingClassList0$$: function () {
                return 0;
            },
            Z$isDumpingArchive0$$: function () {
                return 0;
            },
            Z$isSharingEnabled0$$: function () {
                return 0;
            },
            V$initializeFromArchive$Ljava$lang$Class$: function (cls) {
            },
            J$getRandomSeedForDumping$$: function(cls) {
                return Math.trunc(Math.random() * 10000000);
            },
        },
        "java.io.UnixFileSystem": {
            I$getBooleanAttributes0$Ljava$lang$String$: function (fsref, path) {
                let jsPath = bytecoder.toJSString(path);
                try {
                    let request = new XMLHttpRequest();
                    request.open('HEAD', jsPath, false);
                    request.send(null);
                    if (request.status === 200) {
                        let length = request.getResponseHeader('content-length');
                        return 0x01;
                    }
                    return 0;
                } catch (e) {
                    return 0;
                }
            },
        },
        "java.lang.Class": {
            Ljava$lang$ClassLoader$$getClassLoader$$: function (classRef) {
                return null;
            },
            Ljava$lang$Class$$forName$Ljava$lang$String$$Z$Ljava$lang$ClassLoader$: function(className, initialize, classLoader) {
                throw 'Not supported class for reflective access';
            },
            Z$desiredAssertionStatus$$: function(classRef) {
                return false;
            }
        },
        "java.io.FileInputStream": {
            I$open0$Ljava$io$FileDescriptor$$Ljava$lang$String$: function (fis, fdd, name) {
                let fd = bytecoder.openForRead(bytecoder.toJSString(name));
                if (fd >= 0) {
                    bytecoder.exports["setFileDescriptorHandle"].call(fdd, fd);
                }
                return fd;
            },
            J$skip0$Ljava$io$FileDescriptor$$I: function (fis, fdd, amount) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.J$skip0$I(fd, amount);
            },
            I$available0$Ljava$io$FileDescriptor$: function (fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$available0$$(fd);
            },
            I$read0$Ljava$io$FileDescriptor$: function (fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$read0$$(fd);
            },
            I$readBytes$Ljava$io$FileDescriptor$$$B$I$I: function (fis, fdd, b, off, len) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                return x.I$readBytes$$B$I$I(fd, b, off, len);
            },
        },
        "java.io.FileOutputStream": {
            V$writeBytes$Ljava$io$FileDescriptor$$$B$I$I: function (fis, fdd, b, off, len) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                x.V$writeBytes$$B$I$I(fd, b, off, len);
            },
            V$writeInt$Ljava$io$FileDescriptor$$I: function (fis, fdd, cp) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                let x = bytecoder.filehandles[fd];
                x.V$writeInt$I(fd, cp);
            },
            V$close0$Ljava$io$FileDescriptor$: function(fis, fdd) {
                let fd = bytecoder.exports["getFileDescriptorHandle"].call(fdd);
                bytecoder.filehandles[fd] = null;
            }
        },
        "de.mirkosertic.bytecoder.classlib.BytecoderCharsetDecoder": {
            $C$decodeFromBytes$Ljava$lang$String$$$B: function (decoder, charsetName, data) {
                let targetCharacterSet = charsetName.nativeObject;
                let byteData = new Uint8Array(data.data);
                let dec = new TextDecoder(targetCharacterSet);

                let str = dec.decode(byteData);

                let charArray = bytecoder.newarray(str.length, 0);
                for (let i = 0; i < str.length; i++) {
                    charArray.data[i] = str.codePointAt(i);
                }
                return charArray;
            },
        },
        "de.mirkosertic.bytecoder.classlib.BytecoderCharsetEncoder": {
            $B$encodeToBytes$Ljava$lang$String$$$C: function (encoder, charsetName, data) {
                let str = '';
                for (var i = 0; i < data.data.length; i++) {
                    str += String.fromCodePoint(data.data[i]);
                }

                let targetCharacterSet = charsetName.nativeObject;
                if (targetCharacterSet !== 'UTF-8') {
                    throw 'Not supported character set!';
                }

                let enc = new TextEncoder();
                let byteData = enc.encode(str);

                let bytes = bytecoder.newarray(byteData.length, 0);
                for (var i = 0; i < byteData.length; i++) {
                    bytes.data[i] = byteData[i];
                }

                return bytes;
            },
        },
        "java.lang.StringBuffer": {
            V$initializeWith$I: function (buffer, size) {
                buffer.nativeObject = '';
            },
            Ljava$lang$StringBuffer$$append$Ljava$lang$String$: function (buffer, str) {
                buffer.nativeObject += str.nativeObject;
            },
            Ljava$lang$String$$toString$$: function (buffer) {
                return bytecoder.toBytecoderString(buffer.nativeObject);
            },
        },
        "java.lang.StringBuilder": {
            V$initializeWith$I: function (builder, size) {
                builder.nativeObject = '';
            },
            Ljava$lang$StringBuilder$$append$Ljava$lang$String$: function (builder, str) {
                builder.nativeObject += str.nativeObject;
                return builder;
            },
            Ljava$lang$StringBuilder$$append$Ljava$lang$CharSequence$$I$I: function (builder, str, start, end) {
                builder.nativeObject += str.nativeObject.substring(start, end);
                return builder;
            },
            Ljava$lang$String$$toString$$: function (builder) {
                return bytecoder.toBytecoderString(builder.nativeObject);
            },
            I$length$$: function (builder) {
                return builder.nativeObject.length;
            },
            V$setLength$I: function (builder, size) {
            },
            Ljava$lang$StringBuilder$$append$$C$I$I: function (builder, chars, offset, count) {
                for (let i = offset; i < offset + count; i++) {
                    builder.nativeObject += String.fromCodePoint(chars.data[i]);
                }
                return builder;
            },
            Ljava$lang$StringBuilder$$deleteCharAt$I: function(builder, index) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + current.slice(index + 1);
                return builder;
            },
            V$setCharAt$I$C: function(builder, index, char) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + String.fromCodePoint(char) + current.slice(index + 1);
            },
            Ljava$lang$StringBuilder$$insert$I$C: function(builder, index, char) {
                const current = builder.nativeObject;
                builder.nativeObject = current.slice(0, index) + String.fromCodePoint(char) + current.slice(index);
                return builder
            },
            C$charAt$I: function(builder, index) {
                const current = builder.nativeObject;
                return current.codePointAt(index);
            }
        },
        "java.lang.String": {
            C$charAt$I: function (str, index) {
                return str.nativeObject.codePointAt(index);
            },
            I$length$$: function (str) {
                return str.nativeObject.length;
            },
            V$getChars$I$I$$C$I: function (str, srcBegin, srcEnd, dst, dstBegin) {
                let dstOffset = dstBegin;
                let s = str.nativeObject;
                for (let i = srcBegin; i < srcEnd; i++) {
                    dst.data[dstOffset] = s.codePointAt(i);
                    dstOffset++;
                }
            },
            I$indexOf$I: function (str, cp) {
                if (cp >= 0) {
                    return str.nativeObject.indexOf(String.fromCodePoint(cp));
                }
                return -1;
            },
            I$lastIndexOf$I: function (str, cp) {
                if (cp >= 0) {
                    const a = bytecoder.toJSString(str);
                    return a.lastIndexOf(String.fromCodePoint(cp));
                }
                return -1;
            },
            Z$startsWith$Ljava$lang$String$: function (str, otherstr) {
                const a = bytecoder.toJSString(str);
                const b = bytecoder.toJSString(otherstr);
                if (a.startsWith(b)) {
                    return 1;
                }
                return 0;
            },
            Z$endsWith$Ljava$lang$String$: function (str, otherstr) {
                const a = bytecoder.toJSString(str);
                const b = bytecoder.toJSString(otherstr);
                if (a.endsWith(b)) {
                    return 1;
                }
                return 0;
            },
            Ljava$lang$String$$replaceAll$Ljava$lang$String$$Ljava$lang$String$(str, regex, replacement) {
                return str;
            },
            I$lastIndexOf$Ljava$lang$String$: function (str, s) {
                return str.nativeObject.lastIndexOf(s.nativeObject);
            },
            Ljava$lang$String$$trim$$: function (str) {
                return bytecoder.toBytecoderString(str.nativeObject.trim());
            },
            Ljava$lang$String$$substring$I: function(str, i) {
                return bytecoder.toBytecoderString(str.nativeObject.substring(i));
            },
            Ljava$lang$String$$substring$I$I: function(str, i, b) {
                return bytecoder.toBytecoderString(str.nativeObject.substring(i, b));
            },
            Ljava$lang$String$$repeat$I: function (str, amount) {
                return bytecoder.toBytecoderString(str.nativeObject.repeat(amount));
            },
            Z$equals0$Ljava$lang$String$: function (str, otherstr) {
                if (str.nativeObject === otherstr.nativeObject) {
                    return 1;
                }
                return 0;
            },
            Z$equalsIgnoreCase$Ljava$lang$String$: function (str, otherstr) {
                if (str == null) {
                    return 0;
                }
                if (otherstr == null) {
                    return 0;
                }
                if (str.nativeObject.toUpperCase() === otherstr.nativeObject.toUpperCase()) {
                    return 1;
                }
                return 0;
            },
            V$initializeWith$$C$I$I: function (str, chars, offset, count) {
                str.nativeObject = '';
                for (let i = offset; i < offset + count; i++) {
                    str.nativeObject += String.fromCodePoint(chars.data[i]);
                }
            },
            V$initializeWith$$I$I$I: function (str, points, offset, count) {
                str.nativeObject = '';
                for (let i = offset; i < offset + count; i++) {
                    str.nativeObject += String.fromCodePoint(points.data[i]);
                }
            },
            $C$toCharArray$$: function (str) {
                let arr = bytecoder.newarray(str.nativeObject.length, 0);
                for (let i = 0; i < str.nativeObject.length; i++) {
                    arr.data[i] = str.nativeObject.codePointAt(i);
                }
                return arr;
            },
            V$initializeWith$Ljava$lang$String$: function (str, otherstr) {
                str.nativeObject = otherstr.nativeObject;
            },
            V$initializeWith$$B$I$I$B: function(str, bytes, index, count, coder) {
                const arr = new Uint8Array(bytecoder.exports.byteArrayLength(bytes))
                for (var i = index; i < index + count; i++) {
                    arr[i - index] = bytecoder.exports.getByteArrayEntry(bytes, i);
                }
                const jsstr = new TextDecoder().decode(arr);
                str.nativeObject = jsstr;
            },
            $B$getBytes$$: function(str) {
                const jsstr = str.nativeObject;
                const bytes = new TextEncoder().encode(jsstr);

                const arr = bytecoder.exports.newByteArray(bytes.length);
                for (var i = 0; i < bytes.length; i++) {
                    bytecoder.exports.setByteArrayEntry(arr, i, bytes[i]);
                }

                return arr;
            },
            Ljava$lang$String$$toUpperCase$$: function(str) {
                return bytecoder.toBytecoderString(str.nativeObject.toUpperCase());
            },
            Ljava$lang$String$$toLowerCase$$: function(str) {
                return bytecoder.toBytecoderString(str.nativeObject.toLowerCase());
            }
        },
        "java.lang.Character": {
            Z$isDigit$C: function (char) {
                if ("0123456789".indexOf(String.fromCodePoint(char)) >= 0) {
                    return 1;
                }
                return 0;
            },
            Z$isLowerCase$C: function (char) {
                let str = String.fromCodePoint(char);
                if (str.toLowerCase() === str) {
                    return 1;
                }
                return 0;
            },
            Z$isUpperCase$C: function (char) {
                let str = String.fromCodePoint(char);
                if (str.toUpperCase() === str) {
                    return 1;
                }
                return 0;
            },
            C$toLowerCase$C: function (char) {
                let str = String.fromCodePoint(char).toLowerCase();
                return str.codePointAt(0);
            },
            C$toUpperCase$C: function (char) {
                let str = String.fromCodePoint(char).toUpperCase();
                return str.codePointAt(0);
            },
            I$digit$C$I: function (char, radix) {
                let str = String.fromCodePoint(char).toUpperCase();
                if ('0' === str) {
                    return 0;
                }
                if ('1' === str) {
                    return 1;
                }
                if ('2' === str) {
                    return 2;
                }
                if ('3' === str) {
                    return 3;
                }
                if ('4' === str) {
                    return 4;
                }
                if ('5' === str) {
                    return 5;
                }
                if ('6' === str) {
                    return 6;
                }
                if ('7' === str) {
                    return 7;
                }
                if ('8' === str) {
                    return 8;
                }
                if ('9' === str) {
                    return 9;
                }
                if ('A' === str) {
                    return 10;
                }
                if ('B' === str) {
                    return 11;
                }
                if ('C' === str) {
                    return 12;
                }
                if ('D' === str) {
                    return 13;
                }
                if ('E' === str) {
                    return 14;
                }
                if ('15' === str) {
                    return 15;
                }
                return -1;
            },
            Ljava$lang$String$$toString$C: function (char) {
                return bytecoder.toBytecoderString(String.fromCodePoint(char));
            },
        },
        "java.lang.Byte": {
            Ljava$lang$String$$toString$B$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            B$parseByte$Ljava$lang$String$: function (str) {
                return parseInt(str.nativeObject);Ljava$lang$String$$replaceAll$Ljava$lang$String$$Ljava$lang$String$
            },
        },
        "java.lang.Short": {
            Ljava$lang$String$$toString$S$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            S$parseShort$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Integer": {
            Ljava$lang$String$$toString$I$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            Ljava$lang$String$$toHexString$I: function (value) {
                return bytecoder.toBytecoderString(value.toString(16));
            },
            I$parseInt$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Long": {
            Ljava$lang$String$$toString$J$I: function (value, radix) {
                return bytecoder.toBytecoderString(value.toString(radix));
            },
            J$parseLong$Ljava$lang$String$$I: function (value, radix) {
                return parseInt(value.nativeObject, radix);
            },
        },
        "java.lang.Double": {
            Ljava$lang$String$$toString$D: function (value) {
                let str = value.toString();
                if (str.indexOf(".") < 0) {
                    str += '.0';
                }
                return bytecoder.toBytecoderString(str);
            },
            D$parseDouble$Ljava$lang$String$: function (str) {
                return parseFloat(str.nativeObject);
            },
            Z$isNaN$D: function (d) {
                return isNaN(d) ? 1 : 0;
            },
            Z$isInfinite$D: function (d) {
                return isFinite(d) ? 1 : 0;
            }
        },
        "runtime": {
            nativeconsole: function() {
                return console;
            },
            nativewindow: function() {
                return window;
            },
            nativedocument: function() {
                return document;
            }
        },
        "de.mirkosertic.bytecoder.api.web.OpaqueArrays": {
            Lde$mirkosertic$bytecoder$api$web$FloatArray$$createFloatArray$I: function(length) {
                return new Float32Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$IntArray$$createIntArray$I': function(length) {
                return new Int32Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$Int16Array$$createInt16Array$I': function(length) {
                return new Int16Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$Int8Array$$createInt8Array$I': function(length) {
                return new Int8Array(length);
            },
            'Lde$mirkosertic$bytecoder$api$web$OpaqueReferenceArray$$createObjectArray$$': function(length) {
                return [];
            }
        },
    },
    exports: {},
    filehandles : [],
    stringconstants: [],
    generated: [],
    cmp: function(a,b) {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
    },
    instanceOf: function(a,b) {
        if (a) {
            let rt = a.constructor.$rt;
            return rt.instanceOf(a, b);
        }
        return 0;
    },
    registerStack: function(exception, stack) {
        exception.stack = stack;
        return exception;
    },
    toJSString: function(str) {
        if (str) {
            return str.nativeObject;
        }
        return '';
    },
    newarray: function(len, defaultvalue) {
        let x = new de$mirkosertic$bytecoder$classlib$Array();
        x.data = new Array(len);
        x.data.fill(defaultvalue);
        return x;
    },
    toBytecoderString: function(jsstring) {
        const x = new java$lang$String();
        x.V$$init$$$.call(x);
        x.nativeObject = jsstring;
        return x;
    },
    toBytecoderBoolean: function(v) {
        return v ? 1: 0;
    },
    instanceWithLambdaImpl: function(instType, lambdaImpl) {
        let inst = new instType();
        inst.$lambdaimpl = lambdaImpl.bind(inst);
        return inst;
    },
    primitives: {
        byte: {
        },
        char: {
        },
        short: {
        },
        int: {
        },
        float: {
        },
        double: {
        },
        long: {
        },
        boolean: {
        },
        void: {
        }
    },
    openForRead :  function(path) {
        try {
            let request = new XMLHttpRequest();
            request.open('GET',path,false);
            request.overrideMimeType('text/plain; charset=x-user-defined');
            request.send(null);
            if (request.status === 200) {
                let length = request.getResponseHeader('content-length');
                let responsetext = request.response;
                let buf = new ArrayBuffer(responsetext.length);
                let bufView = new Uint8Array(buf);
                let i = 0;
                const strLen = responsetext.length;
                for (; i < strLen; i++) {
                    bufView[i] = responsetext.charCodeAt(i) & 0xff;
                }
                let handle = bytecoder.filehandles.length;
                bytecoder.filehandles[handle] = {
                    currentpos: 0,
                    data: bufView,
                    size: length,
                    J$skip0$I: function(fd, amount) {
                        let remaining = this.size - this.currentpos;
                        let possible = Math.min(remaining, amount);
                        this.currentpos += possible;
                        return possible;
                    },
                    I$available0$$: function(fd) {
                        return this.size - this.currentpos;
                    },
                    I$read0$$: function(fd) {
                        return this.data[this.currentpos++];
                    },
                    I$readBytes$$B$I$I: function(fd, target, offset, length) {
                        if (length === 0) {return 0;}
                        let remaining = this.size - this.currentpos;
                        let possible = Math.min(remaining, length);
                        if (possible === 0) {return -1;}
                        for (let j=0; j<possible; j++) {
                            target.data[offset++] = this.data[this.currentpos++];
                        }
                        return possible;
                    }
                };
                return handle;
            }
            return -1;
        } catch(e) {
            return -1;
        }
    },
    newRuntimeClassFor: function(type,supportedtypes) {
        return {
            Ljava$lang$ClassLoader$$getClassLoader$$: function() {
                return null;
            },
            Ljava$lang$ClassLoader$$getClassLoader0$$: function() {
                return null;
            },
            Z$desiredAssertionStatus$$: function() {
                return false;
            },
            Ljava$lang$Object$$newInstance$$: function() {
                const x = new type.$i();
                x.V$$init$$$();
                return x;
            },
            $Ljava$lang$Object$$getEnumConstants$$: function() {
                return type.$i.$VALUES;
            },
            instanceOf: function(a, b) {
                if (supportedtypes.includes(b)) {
                    return 1;
                }
                return 0;
            },
        };
    },
    wrapNativeIntoTypeInstance: function(instType, value) {
        let inst = new instType();
        inst.nativeObject = value;
        return inst;
    }
};

bytecoder.filehandles[1] = {
    V$writeBytes$$B$I$I: function(fd, b, off, len) {
        let decoder = new TextDecoder();
        let arr = new Uint8Array(b.data.slice(off, off +  len));
        console.log(decoder.decode(arr).replace('\n', ''));
    },
    V$writeInt$I: function(fd, cp) {
        let decoder = new TextDecoder();
        let arr = new Uint8Array([cp]);
        console.log(decoder.decode(arr).replace('\n', ''));
    },
};

bytecoder.imports["java.lang.Class"]["Ljava$lang$Class$$forName$Ljava$lang$String$$Z$Ljava$lang$ClassLoader$"] = function(className, initialize, classLoader) {
  throw 'Not supported class for reflective access';
};


class java$lang$Object {
  nativeObject = null;
  constructor() {
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Object,[java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$String$$toString$$() {
    // source file is Object.java
    // line number 36
    return bytecoder.stringconstants[1];
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Object.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = 0;
    var0 = arg0;
    // line number 40
    var1 = var0;
    If_9_0: {
     if (this != var1) {
      phi3 = this;
      phi4 = var0;
      phi5 = (0) | 0;
      break If_9_0;
     } else {
      var2 = (1) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = var0;
      phi5 = (var2) | 0;
      break If_9_0;
     }
    }
    return phi5;
  }

  V$$init$$$() {
    // source file is Object.java
    return;
  }

  I$hashCode$$() {
    // source file is Object.java
    // line number 44
    return 0;
  }
}


class java$util$Objects extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Objects,[java$util$Objects,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static I$checkFromIndexSize$I$I$I(arg0,arg1,arg2) {
    // source file is Objects.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var0 = (arg1) | 0;
    // line number 437
    var1 = (var0) | 0;
    var2 = null;
    jdk$internal$util$Preconditions.$i;
    var3 = ((jdk$internal$util$Preconditions.I$checkFromIndexSize$I$I$I$Ljava$util$function$BiFunction$(arg0,var1,arg2,var2))) | 0;
    return var3;
  }

  static Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg0) {
    // source file is Objects.java
    var var0 = null;
    // line number 232
    if (arg0 != null) {
     // line number 234
     return arg0;
    } else {
     // line number 233
     var0 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var0);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$$init$$$() {
    // source file is Objects.java
    var var0 = null;
    var var1 = null;
    // line number 43
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 44
    var0 = new java$lang$AssertionError();
    var1 = bytecoder.stringconstants[91];
    java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var0,var1);
    throw bytecoder.registerStack(var0, new Error().stack);
  }

  static Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Objects.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var phi5 = null;
    var phi6 = null;
    var phi7 = 0;
    var phi8 = null;
    var phi9 = null;
    var0 = arg1;
    // line number 64
    var1 = var0;
    If_9_0: {
     If_9_1: {
      if (arg0 == var1) {
       phi5 = arg0;
       phi6 = var0;
       break If_9_1;
      } else {
       var2 = arg0;
       If_13_0: {
        if (var2 == null) {
         phi8 = arg0;
         phi9 = var0;
         break If_13_0;
        } else {
         var3 = arg0;
         var4 = (var3.Z$equals$Ljava$lang$Object$(var0));
         if (var4 == 0) {
          phi8 = arg0;
          phi9 = var0;
          break If_13_0;
         } else {
          phi5 = arg0;
          phi6 = var0;
          break If_9_1;
         }
        }
       }
       phi5 = phi8;
       phi6 = phi9;
       phi7 = (0) | 0;
       break If_9_0;
      }
     }
     // Here was a goto statement
     phi7 = (1) | 0;
     break If_9_0;
    }
    return phi7;
  }

  static I$hashCode$Ljava$lang$Object$(arg0) {
    // source file is Objects.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 103
    If_4_0: {
     if (arg0 == null) {
      phi2 = arg0;
      phi3 = (0) | 0;
      break If_4_0;
     } else {
      var0 = arg0;
      var1 = ((var0.I$hashCode$$())) | 0;
      // Here was a goto statement
      phi2 = arg0;
      phi3 = (var1) | 0;
      break If_4_0;
     }
    }
    return phi3;
  }

  static I$checkIndex$I$I(arg0,arg1) {
    // source file is Objects.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = (arg1) | 0;
    // line number 385
    var1 = (var0) | 0;
    jdk$internal$util$Preconditions.$i;
    var2 = ((jdk$internal$util$Preconditions.I$checkIndex$I$I$Ljava$util$function$BiFunction$(arg0,var1,null))) | 0;
    return var2;
  }
}


class java$util$Map extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Map,[java$lang$Object,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is Map.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var phi12 = null;
    var var13 = null;
    var0 = arg0;
    // line number 1048
    var1 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    // line number 1050
    var2 = (this.Ljava$lang$Object$$get$Ljava$lang$Object$(var0));
    var3 = var2;
    If_21_0: {
     if (var2 != null) {
      phi9 = this;
      phi10 = var0;
      phi11 = arg1;
      phi12 = var3;
      break If_21_0;
     } else {
      // line number 1052
      var4 = var0;
      var5 = (arg1.Ljava$lang$Object$$apply$Ljava$lang$Object$(var4));
      var6 = var5;
      if (var5 == null) {
       phi9 = this;
       phi10 = var0;
       phi11 = arg1;
       phi12 = var3;
       break If_21_0;
      } else {
       // line number 1053
       var7 = var0;
       var8 = (this.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(var7,var6));
       // line number 1054
       return var6;
      }
     }
    }
    // line number 1058
    var13 = phi12;
    return var13;
  }
}


class jdk$internal$foreign$MemorySessionImpl extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$foreign$MemorySessionImpl,[java$lang$Object,jdk$internal$foreign$MemorySessionImpl]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$checkValidStateRaw$$() {
    // source file is MemorySessionImpl.java
    // line number 29
    return;
  }

  V$$init$$$() {
    // source file is MemorySessionImpl.java
    // line number 23
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$charset$CoderResult extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;
  static names = null;
  type = 0;
  length = 0;
  static UNDERFLOW = null;
  static OVERFLOW = null;
  static malformed4 = null;
  static unmappable4 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CoderResult,[java$nio$charset$CoderResult,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = null;
    var var24 = 0;
    var var25 = null;
    var var26 = 0;
    var var27 = null;
    var var28 = 0;
    var var29 = null;
    var var30 = 0;
    var var31 = null;
    var var32 = 0;
    var var33 = null;
    var var34 = 0;
    // line number 84
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$charset$CoderResult.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$charset$CoderResult.$i;
    java$nio$charset$CoderResult.$assertionsDisabled = phi2;
    // line number 92
    var3 = bytecoder.newarray((4),null);
    var4 = (0) | 0;
    var3.data[var4] = bytecoder.stringconstants[73];
    var5 = (1) | 0;
    var3.data[var5] = bytecoder.stringconstants[74];
    var6 = (2) | 0;
    var3.data[var6] = bytecoder.stringconstants[75];
    var7 = (3) | 0;
    var3.data[var7] = bytecoder.stringconstants[76];
    java$nio$charset$CoderResult.names = var3;
    // line number 183
    var8 = new java$nio$charset$CoderResult();
    var9 = (0) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var8,var9,0);
    java$nio$charset$CoderResult.UNDERFLOW = var8;
    // line number 190
    var10 = new java$nio$charset$CoderResult();
    var11 = (1) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var10,var11,0);
    java$nio$charset$CoderResult.OVERFLOW = var10;
    // line number 201
    var12 = bytecoder.newarray((4),null);
    var13 = (0) | 0;
    var14 = new java$nio$charset$CoderResult();
    var15 = (2) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var14,var15,1);
    var12.data[var13] = var14;
    var16 = (1) | 0;
    var17 = new java$nio$charset$CoderResult();
    var18 = (2) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var17,var18,2);
    var12.data[var16] = var17;
    var19 = (2) | 0;
    var20 = new java$nio$charset$CoderResult();
    var21 = (2) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var20,var21,3);
    var12.data[var19] = var20;
    var22 = (3) | 0;
    var23 = new java$nio$charset$CoderResult();
    var24 = (4) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var23,2,var24);
    var12.data[var22] = var23;
    java$nio$charset$CoderResult.malformed4 = var12;
    // line number 226
    var25 = bytecoder.newarray((4),null);
    var26 = (0) | 0;
    var27 = new java$nio$charset$CoderResult();
    var28 = (1) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var27,3,var28);
    var25.data[var26] = var27;
    var29 = new java$nio$charset$CoderResult();
    var30 = (2) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var29,3,var30);
    var25.data[1] = var29;
    var31 = new java$nio$charset$CoderResult();
    var32 = (3) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var31,3,var32);
    var25.data[2] = var31;
    var33 = new java$nio$charset$CoderResult();
    var34 = (4) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var33,3,var34);
    var25.data[3] = var33;
    java$nio$charset$CoderResult.unmappable4 = var25;
    return;
  }

  V$$init$$I$I(arg0,arg1) {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 98
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 99
    var1 = this;
    var1.type = var0;
    // line number 100
    var2 = this;
    var2.length = arg1;
    // line number 101
    return;
  }

  Z$isOverflow$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 128
    var0 = ((this.type)) | 0;
    If_8_0: {
     if (var0 != 1) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_8_0;
     }
    }
    return phi3;
  }

  Z$isUnderflow$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 119
    var0 = ((this.type)) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  static Ljava$nio$charset$CoderResult$$malformedForLength$I(arg0) {
    // source file is CoderResult.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    // line number 218
    if (arg0 > 0) {
     // line number 220
     var2 = (4) | 0;
     if (arg0 > var2) {
      // line number 222
      java$nio$charset$CoderResult$Cache.$i;
      var7 = (java$nio$charset$CoderResult$Cache.INSTANCE);
      var8 = (var7.malformed);
      java$lang$Integer.$i;
      var9 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg0));
      var10 = bytecoder.instanceWithLambdaImpl(java$util$function$Function, function(arg0) { return java$nio$charset$CoderResult.Ljava$nio$charset$CoderResult$$lambda$malformedForLength$0$Ljava$lang$Integer$.call(this, arg0);});
      var11 = (var8.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(var9,var10));
      var12 = var11;
      return var12;
     } else {
      // line number 221
      java$nio$charset$CoderResult.$i;
      var3 = (java$nio$charset$CoderResult.malformed4);
      var4 = (1) | 0;
      var5 = ((arg0 - var4)) | 0;
      var6 = (var3.data[var5]);
      return var6;
     }
    } else {
     // line number 219
     var0 = new java$lang$IllegalArgumentException();
     var1 = bytecoder.stringconstants[79];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var0,var1);
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  static Ljava$nio$charset$CoderResult$$lambda$malformedForLength$0$Ljava$lang$Integer$(arg0) {
    // source file is CoderResult.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    // line number 223
    java$nio$charset$CoderResult.$i;
    var0 = new java$nio$charset$CoderResult();
    var1 = (2) | 0;
    var2 = ((java$lang$Integer.prototype.I$intValue$$.call(arg0))) | 0;
    java$nio$charset$CoderResult.prototype.V$$init$$I$I.call(var0,var1,var2);
    return var0;
  }

  Z$isMalformed$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 148
    var0 = ((this.type)) | 0;
    If_8_0: {
     if (var0 != 2) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_8_0;
     }
    }
    return phi3;
  }

  I$length$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    // line number 173
    var0 = (java$nio$charset$CoderResult.prototype.Z$isError$$.call(this));
    if (var0 != 0) {
     // line number 175
     var2 = ((this.length)) | 0;
     return var2;
    } else {
     // line number 174
     var1 = new java$lang$UnsupportedOperationException();
     java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  Z$isError$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 138
    var0 = ((this.type)) | 0;
    If_8_0: {
     if (var0 < 2) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_8_0;
     }
    }
    return phi3;
  }

  Z$isUnmappable$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 159
    var0 = ((this.type)) | 0;
    If_8_0: {
     if (var0 != 3) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_8_0;
     }
    }
    return phi3;
  }

  Ljava$lang$String$$toString$$() {
    // source file is CoderResult.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    // line number 109
    java$nio$charset$CoderResult.$i;
    var0 = (java$nio$charset$CoderResult.names);
    var1 = ((this.type)) | 0;
    var2 = (var0.data[var1]);
    // line number 110
    var3 = (java$nio$charset$CoderResult.prototype.Z$isError$$.call(this));
    If_20_0: {
     if (var3 == 0) {
      phi11 = this;
      phi12 = var2;
      phi13 = var2;
      break If_20_0;
     } else {
      var4 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var4);
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var4,var2));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[81]));
      var7 = ((this.length)) | 0;
      var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var6,var7));
      var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var8,bytecoder.stringconstants[82]));
      var10 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var9));
      // Here was a goto statement
      phi11 = this;
      phi12 = var2;
      phi13 = var10;
      break If_20_0;
     }
    }
    return phi13;
  }

  V$throwException$$() {
    // source file is CoderResult.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    // line number 271
    var0 = ((this.type)) | 0;
    if ((var0) >= 0 && (var0) <= 3) switch ((var0) - 0) {
     case 0: {
      // line number 272
      var7 = new java$nio$BufferUnderflowException();
      java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var7);
      throw bytecoder.registerStack(var7, new Error().stack);
     }
     case 1: {
      // line number 273
      var6 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var6);
      throw bytecoder.registerStack(var6, new Error().stack);
     }
     case 2: {
      // line number 274
      var4 = new java$nio$charset$MalformedInputException();
      var5 = ((this.length)) | 0;
      java$nio$charset$MalformedInputException.prototype.V$$init$$I.call(var4,var5);
      throw bytecoder.registerStack(var4, new Error().stack);
     }
     case 3: {
      // line number 275
      var1 = new java$nio$charset$UnmappableCharacterException();
      var2 = this;
      var3 = ((var2.length)) | 0;
      java$nio$charset$UnmappableCharacterException.prototype.V$$init$$I.call(var1,var3);
      throw bytecoder.registerStack(var1, new Error().stack);
     }
    } else {
     // line number 277
     java$nio$charset$CoderResult.$i;
     var8 = (java$nio$charset$CoderResult.$assertionsDisabled);
     if (var8 != 0) {
      // line number 279
      return;
     } else {
      var9 = new java$lang$AssertionError();
      java$lang$AssertionError.prototype.V$$init$$$.call(var9);
      throw bytecoder.registerStack(var9, new Error().stack);
     }
    }
  }
}


class java$lang$Throwable extends java$lang$Object {
  nativeObject = null;

  message = null;
  cause = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Throwable,[java$lang$Throwable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$String$$getMessage$$() {
    // source file is Throwable.java
    var var0 = null;
    // line number 71
    var0 = (this.message);
    return var0;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is Throwable.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 29
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 30
    var1 = this;
    var1.message = var0;
    // line number 31
    var2 = this;
    var2.cause = null;
    // line number 32
    return;
  }

  V$$init$$$() {
    // source file is Throwable.java
    var var0 = null;
    var var1 = null;
    // line number 49
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 50
    var0 = this;
    var0.message = null;
    // line number 51
    var1 = this;
    var1.cause = null;
    // line number 52
    return;
  }

  Ljava$lang$Throwable$$initCause$Ljava$lang$Throwable$(arg0) {
    // source file is Throwable.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = this;
    // line number 83
    var1 = arg0;
    var0.cause = var1;
    // line number 84
    var2 = var0;
    return var2;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is Throwable.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 44
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 45
    var1 = this;
    var1.message = null;
    // line number 46
    var2 = this;
    var2.cause = var0;
    // line number 47
    return;
  }
}


class java$lang$ref$Reference extends java$lang$Object {
  nativeObject = null;

  referent = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ref$Reference,[java$lang$ref$Reference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$Object$$get$$() {
    // source file is Reference.java
    var var0 = null;
    // line number 40
    var0 = (this.referent);
    return var0;
  }

  static V$reachabilityFence$Ljava$lang$Object$(arg0) {
    // source file is Reference.java
    // line number 48
    return;
  }
}


class java$io$Flushable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$Flushable,[java$lang$Object,java$io$Flushable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$Iterator extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Iterator,[java$lang$Object,java$util$Iterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$Map$Entry extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Map$Entry,[java$util$Map$Entry,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$CharSequence extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$CharSequence,[java$lang$Object,java$lang$CharSequence]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$length$$ = impl;
  }

  Z$isEmpty$$() {
    // source file is CharSequence.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 101
    var0 = ((this.I$length$$())) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }
}


class java$util$concurrent$locks$Lock extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$concurrent$locks$Lock,[java$lang$Object,java$util$concurrent$locks$Lock]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$RandomAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$RandomAccess,[java$lang$Object,java$util$RandomAccess]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$AutoCloseable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$AutoCloseable,[java$lang$Object,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$CharsetEncoder extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;
  static stateNames = null;
  malformedInputAction = null;
  unmappableCharacterAction = null;
  charset = null;
  state = 0;
  cachedDecoder = null;
  replacement = null;
  averageBytesPerChar = 0.0;
  maxBytesPerChar = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CharsetEncoder,[java$lang$Object,java$nio$charset$CharsetEncoder]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$encodeLoop$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$ = impl;
  }

  static V$$clinit$$$() {
    // source file is CharsetEncoder.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    // line number 137
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$charset$CharsetEncoder.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$charset$CharsetEncoder.$i;
    java$nio$charset$CharsetEncoder.$assertionsDisabled = phi2;
    // line number 158
    var3 = bytecoder.newarray((4),null);
    var4 = (0) | 0;
    var3.data[var4] = bytecoder.stringconstants[19];
    var5 = (1) | 0;
    var3.data[var5] = bytecoder.stringconstants[20];
    var6 = (2) | 0;
    var3.data[var6] = bytecoder.stringconstants[21];
    var7 = (3) | 0;
    var3.data[var7] = bytecoder.stringconstants[22];
    java$nio$charset$CharsetEncoder.stateNames = var3;
    return;
  }

  Ljava$nio$charset$CharsetEncoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 381
    if (var0 != null) {
     // line number 383
     var3 = this;
     var3.malformedInputAction = var0;
     // line number 384
     var4 = var0;
     java$nio$charset$CharsetEncoder.prototype.V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(this,var4);
     // line number 385
     return this;
    } else {
     // line number 382
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[26];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var0 = arg0;
    // line number 397
    return;
  }

  Ljava$nio$charset$CharsetEncoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 425
    if (var0 != null) {
     // line number 427
     var3 = this;
     var3.unmappableCharacterAction = var0;
     // line number 428
     var4 = var0;
     java$nio$charset$CharsetEncoder.prototype.V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(this,var4);
     // line number 429
     return this;
    } else {
     // line number 426
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[26];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var0 = arg0;
    // line number 441
    return;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    // source file is CharsetEncoder.java
    var var0 = null;
    // line number 244
    var0 = (this.charset);
    return var0;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F(arg0,arg1,arg2) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = .0;
    var var2 = null;
    var var3 = .0;
    var var4 = null;
    var var5 = 0;
    var0 = arg0;
    var1 = arg2;
    // line number 233
    var2 = var0;
    var3 = var1;
    var4 = bytecoder.newarray((1),0);
    var5 = (0) | 0;
    var4.data[var5] = 63;
    java$nio$charset$CharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F$$B.call(this,var2,arg1,var3,var4);
    // line number 236
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F$$B(arg0,arg1,arg2,arg3) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = .0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = .0;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var var13 = .0;
    var var14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 190
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 144
    var2 = this;
    java$nio$charset$CodingErrorAction.$i;
    var3 = (java$nio$charset$CodingErrorAction.REPORT);
    var2.malformedInputAction = var3;
    // line number 146
    var4 = this;
    var5 = (java$nio$charset$CodingErrorAction.REPORT);
    var4.unmappableCharacterAction = var5;
    // line number 156
    var6 = this;
    var6.state = 0;
    // line number 320
    var7 = this;
    var7.cachedDecoder = null;
    // line number 191
    var8 = this;
    var8.charset = var0;
    // line number 193
    var9 = 0.0;
    var10 = (bytecoder.cmp(arg1,var9)) | 0;
    if (var10 > 0) {
     // line number 197
     var13 = 0.0;
     var14 = (bytecoder.cmp(var1,var13)) | 0;
     if (var14 > 0) {
      // line number 200
      var17 = (bytecoder.cmp(arg1,var1)) | 0;
      if (var17 <= 0) {
       // line number 204
       var20 = this;
       var20.replacement = arg3;
       // line number 205
       var21 = this;
       var21.averageBytesPerChar = arg1;
       // line number 206
       var22 = this;
       var22.maxBytesPerChar = var1;
       // line number 207
       var23 = arg3;
       var24 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$replaceWith$$B.call(this,var23));
       // line number 208
       return;
      } else {
       // line number 201
       var18 = new java$lang$IllegalArgumentException();
       var19 = bytecoder.stringconstants[69];
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var18,var19);
       throw bytecoder.registerStack(var18, new Error().stack);
      }
     } else {
      // line number 198
      var15 = new java$lang$IllegalArgumentException();
      var16 = bytecoder.stringconstants[68];
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var15,var16);
      throw bytecoder.registerStack(var15, new Error().stack);
     }
    } else {
     // line number 194
     var11 = new java$lang$IllegalArgumentException();
     var12 = bytecoder.stringconstants[67];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var11,var12);
     throw bytecoder.registerStack(var11, new Error().stack);
    }
  }

  Ljava$nio$charset$CharsetEncoder$$replaceWith$$B(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = .0;
    var var6 = .0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var0 = arg0;
    // line number 287
    if (var0 != null) {
     // line number 289
     var3 = (var0.data.length) | 0;
     // line number 290
     if (var3 != 0) {
      // line number 292
      var5 = var3;
      var6 = (this.maxBytesPerChar);
      var7 = (bytecoder.cmp(var5,var6)) | 0;
      if (var7 <= 0) {
       // line number 298
       var9 = var0;
       var10 = (java$nio$charset$CharsetEncoder.prototype.Z$isLegalReplacement$$B.call(this,var9));
       if (var10 != 0) {
        // line number 300
        var12 = this;
        var13 = var0;
        var14 = (var13.data.length) | 0;
        java$util$Arrays.$i;
        var15 = (java$util$Arrays.$B$copyOf$$B$I(var0,var14));
        var12.replacement = var15;
        // line number 302
        var16 = this;
        var17 = (var16.replacement);
        java$nio$charset$CharsetEncoder.prototype.V$implReplaceWith$$B.call(this,var17);
        // line number 303
        return this;
       } else {
        // line number 299
        var11 = new java$lang$IllegalArgumentException();
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var11,bytecoder.stringconstants[83]);
        throw bytecoder.registerStack(var11, new Error().stack);
       }
      } else {
       // line number 293
       var8 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var8,bytecoder.stringconstants[72]);
       throw bytecoder.registerStack(var8, new Error().stack);
      }
     } else {
      // line number 291
      var4 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var4,bytecoder.stringconstants[71]);
      throw bytecoder.registerStack(var4, new Error().stack);
     }
    } else {
     // line number 288
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[70];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  Z$isLegalReplacement$$B(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var phi21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var var25 = .0;
    var var26 = null;
    var var27 = .0;
    var var28 = .0;
    var var29 = 0;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = 0;
    var var35 = 0;
    var phi36 = null;
    var phi37 = null;
    var phi38 = null;
    var phi39 = 0;
    var var40 = null;
    var0 = arg0;
    // line number 339
    var1 = (this.cachedDecoder);
    // line number 340
    var2 = null;
    // line number 341
    If_17_0: {
     If_17_1: {
      if (var1 == null) {
       phi7 = this;
       phi8 = var0;
       phi9 = var1;
       phi10 = var2;
       break If_17_1;
      } else {
       var3 = var1;
       var4 = (var3.Ljava$lang$Object$$get$$());
       var5 = var4;
       var6 = var5;
       if (var5 != null) {
        // line number 347
        var40 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$reset$$.call(var6));
        phi7 = this;
        phi8 = var0;
        phi9 = var1;
        phi21 = var6;
        break If_17_0;
       } else {
        phi7 = this;
        phi8 = var0;
        phi9 = var1;
        phi10 = var6;
        break If_17_1;
       }
      }
     }
     // line number 342
     var11 = phi7;
     var12 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$Charset$$charset$$.call(var11));
     var13 = (var12.Ljava$nio$charset$CharsetDecoder$$newDecoder$$());
     // line number 343
     java$nio$charset$CodingErrorAction.$i;
     var14 = (java$nio$charset$CodingErrorAction.REPORT);
     var15 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(var13,var14));
     // line number 344
     var16 = (java$nio$charset$CodingErrorAction.REPORT);
     var17 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(var13,var16));
     // line number 345
     var18 = phi7;
     var19 = new java$lang$ref$WeakReference();
     var20 = var13;
     java$lang$ref$WeakReference.prototype.V$$init$$Ljava$lang$Object$.call(var19,var20);
     var18.cachedDecoder = var19;
     // Here was a goto statement
     phi21 = var13;
     break If_17_0;
    }
    // line number 349
    var22 = phi8;
    java$nio$ByteBuffer.$i;
    var23 = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$wrap$$B(var22));
    // line number 350
    var24 = ((var23.I$remaining$$())) | 0;
    var25 = var24;
    var26 = phi21;
    // line number 351
    var27 = (java$nio$charset$CharsetDecoder.prototype.F$maxCharsPerByte$$.call(var26));
    var28 = (var25 * var27);
    var29 = ((var28 | 0)) | 0;
    // line number 350
    java$nio$CharBuffer.$i;
    var30 = (java$nio$CharBuffer.Ljava$nio$CharBuffer$$allocate$I(var29));
    // line number 352
    var31 = phi21;
    var32 = var30;
    var33 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CoderResult$$decode$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$$Z.call(var31,var23,var32,1));
    // line number 353
    var34 = (java$nio$charset$CoderResult.prototype.Z$isError$$.call(var33));
    If_133_0: {
     if (var34 != 0) {
      phi36 = var23;
      phi37 = var30;
      phi38 = var33;
      phi39 = (0) | 0;
      break If_133_0;
     } else {
      var35 = (1) | 0;
      // Here was a goto statement
      phi36 = var23;
      phi37 = var30;
      phi38 = var33;
      phi39 = (var35) | 0;
      break If_133_0;
     }
    }
    return phi39;
  }

  V$implReplaceWith$$B(arg0) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var0 = arg0;
    // line number 316
    return;
  }

  Ljava$nio$charset$CoderResult$$encode$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$$Z(arg0,arg1,arg2) {
    // source file is CharsetEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var phi16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = null;
    var var33 = 0;
    var var34 = null;
    var var35 = 0;
    var var36 = null;
    var phi37 = null;
    var var38 = null;
    var var39 = null;
    var var40 = 0;
    var var41 = null;
    var var42 = null;
    var phi43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = null;
    var var53 = 0;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = null;
    var var59 = null;
    var var60 = null;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = 0;
    var var66 = null;
    var var67 = 0;
    var var68 = 0;
    var var69 = null;
    var var70 = 0;
    var var71 = null;
    var var72 = null;
    var var73 = 0;
    var var74 = null;
    var var75 = null;
    var var76 = 0;
    var var77 = null;
    var var78 = null;
    var var79 = null;
    var phi80 = null;
    var var81 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 575
    If_11_0: {
     if (var1 == 0) {
      phi3 = this;
      phi4 = var0;
      phi5 = arg1;
      phi6 = var1;
      phi7 = (1) | 0;
      break If_11_0;
     } else {
      var2 = (2) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = var0;
      phi5 = arg1;
      phi6 = var1;
      phi7 = (var2) | 0;
      break If_11_0;
     }
    }
    var8 = (phi7) | 0;
    // line number 576
    var9 = phi3;
    var10 = ((var9.state)) | 0;
    If_34_0: {
     if (var10 == 0) {
      phi16 = (var8) | 0;
      break If_34_0;
     } else {
      var11 = phi3;
      var12 = ((var11.state)) | 0;
      if (var12 == 1) {
       phi16 = (var8) | 0;
       break If_34_0;
      } else {
       var13 = phi6;
       If_47_0: {
        if (var13 == 0) {
         phi16 = (var8) | 0;
         break If_47_0;
        } else {
         var14 = phi3;
         var15 = ((var14.state)) | 0;
         if (var15 == 2) {
          phi16 = (var8) | 0;
          break If_34_0;
         } else {
          phi16 = (var8) | 0;
          break If_47_0;
         }
        }
       }
       // line number 578
       var17 = phi3;
       var18 = phi3;
       var19 = ((var18.state)) | 0;
       var20 = (phi16) | 0;
       java$nio$charset$CharsetEncoder.prototype.V$throwIllegalStateException$I$I.call(var17,var19,var20);
       break If_34_0;
      }
     }
    }
    // line number 579
    var21 = phi3;
    var22 = (phi16) | 0;
    var21.state = var22;
    TryCatch_80: while(true) {
     TryCatch_80_0: {
      try {
       // line number 585
       var25 = phi3;
       var26 = phi4;
       var27 = phi5;
       var28 = (var25.Ljava$nio$charset$CoderResult$$encodeLoop$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$(var26,var27));
       break TryCatch_80_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$RuntimeException) {
        // line number 586
        // line number 587
        var23 = new java$nio$charset$CoderMalfunctionError();
        var24 = __ex;
        java$nio$charset$CoderMalfunctionError.prototype.V$$init$$Ljava$lang$Exception$.call(var23,var24);
        throw bytecoder.registerStack(var23, new Error().stack);
       }
       throw __ex;
      }
     }
     // line number 588
     // Here was a goto statement
     // line number 590
     var29 = (java$nio$charset$CoderResult.prototype.Z$isOverflow$$.call(var28));
     if (var29 == 0) {
      // line number 593
      var30 = (java$nio$charset$CoderResult.prototype.Z$isUnderflow$$.call(var28));
      If_128_0: {
       if (var30 == 0) {
        phi37 = var28;
        break If_128_0;
       } else {
        // line number 594
        var31 = phi6;
        If_135_0: {
         if (var31 == 0) {
          phi80 = var28;
          break If_135_0;
         } else {
          var32 = phi4;
          var33 = (var32.Z$hasRemaining$$());
          if (var33 == 0) {
           phi80 = var28;
           break If_135_0;
          } else {
           // line number 595
           var34 = phi4;
           var35 = ((var34.I$remaining$$())) | 0;
           java$nio$charset$CoderResult.$i;
           var36 = (java$nio$charset$CoderResult.Ljava$nio$charset$CoderResult$$malformedForLength$I(var35));
           // Here was a goto statement
           phi37 = var36;
           break If_128_0;
          }
         }
        }
        // line number 598
        var81 = phi80;
        return var81;
       }
      }
      // line number 602
      var38 = null;
      // line number 603
      var39 = phi37;
      var40 = (java$nio$charset$CoderResult.prototype.Z$isMalformed$$.call(var39));
      If_173_0: {
       if (var40 == 0) {
        // line number 605
        var72 = phi37;
        var73 = (java$nio$charset$CoderResult.prototype.Z$isUnmappable$$.call(var72));
        if (var73 == 0) {
         // line number 608
         java$nio$charset$CharsetEncoder.$i;
         var76 = (java$nio$charset$CharsetEncoder.$assertionsDisabled);
         if (var76 != 0) {
          phi43 = var38;
          break If_173_0;
         } else {
          var77 = new java$lang$AssertionError();
          var78 = phi37;
          var79 = (java$nio$charset$CoderResult.prototype.Ljava$lang$String$$toString$$.call(var78));
          java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var77,var79);
          throw bytecoder.registerStack(var77, new Error().stack);
         }
        } else {
         // line number 606
         var74 = phi3;
         var75 = (var74.unmappableCharacterAction);
         // Here was a goto statement
         phi43 = var75;
         break If_173_0;
        }
       } else {
        // line number 604
        var41 = phi3;
        var42 = (var41.malformedInputAction);
        // Here was a goto statement
        phi43 = var42;
        break If_173_0;
       }
      }
      // line number 610
      var44 = phi43;
      java$nio$charset$CodingErrorAction.$i;
      var45 = (java$nio$charset$CodingErrorAction.REPORT);
      if (var44 != var45) {
       // line number 613
       var47 = phi43;
       var48 = (java$nio$charset$CodingErrorAction.REPLACE);
       If_211_0: {
        if (var47 != var48) {
         break If_211_0;
        } else {
         // line number 614
         var49 = phi5;
         var50 = ((var49.I$remaining$$())) | 0;
         var51 = phi3;
         var52 = (var51.replacement);
         var53 = (var52.data.length) | 0;
         if (var50 >= var53) {
          // line number 616
          var55 = phi5;
          var56 = phi3;
          var57 = (var56.replacement);
          var58 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$put$$B.call(var55,var57));
          break If_211_0;
         } else {
          // line number 615
          java$nio$charset$CoderResult.$i;
          var54 = (java$nio$charset$CoderResult.OVERFLOW);
          return var54;
         }
        }
       }
       // line number 619
       var59 = phi43;
       var60 = (java$nio$charset$CodingErrorAction.IGNORE);
       If_259_0: {
        if (var59 == var60) {
         break If_259_0;
        } else {
         var61 = phi43;
         var62 = (java$nio$charset$CodingErrorAction.REPLACE);
         if (var61 != var62) {
          // line number 626
          java$nio$charset$CharsetEncoder.$i;
          var70 = (java$nio$charset$CharsetEncoder.$assertionsDisabled);
          if (var70 != 0) {
           // line number 627
           // Here was a goto statement
           continue TryCatch_80;
          } else {
           var71 = new java$lang$AssertionError();
           java$lang$AssertionError.prototype.V$$init$$$.call(var71);
           throw bytecoder.registerStack(var71, new Error().stack);
          }
         } else {
          break If_259_0;
         }
        }
       }
       // line number 622
       var63 = phi4;
       var64 = phi4;
       var65 = ((var64.I$position$$())) | 0;
       var66 = phi37;
       var67 = ((java$nio$charset$CoderResult.prototype.I$length$$.call(var66))) | 0;
       var68 = ((var65 + var67)) | 0;
       var69 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(var63,var68));
       // line number 623
       // Here was a goto statement
       continue TryCatch_80;
      } else {
       // line number 611
       var46 = phi37;
       return var46;
      }
     } else {
      // line number 591
      return var28;
     }
    }
  }

  V$throwIllegalStateException$I$I(arg0,arg1) {
    // source file is CharsetEncoder.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var0 = (arg0) | 0;
    // line number 996
    var1 = new java$lang$IllegalStateException();
    var2 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[77]));
    java$nio$charset$CharsetEncoder.$i;
    var4 = (java$nio$charset$CharsetEncoder.stateNames);
    var5 = (var4.data[var0]);
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,var5));
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[78]));
    var8 = (java$nio$charset$CharsetEncoder.stateNames);
    var9 = (var8.data[arg1]);
    var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var7,var9));
    var11 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var10));
    java$lang$IllegalStateException.prototype.V$$init$$Ljava$lang$String$.call(var1,var11);
    throw bytecoder.registerStack(var1, new Error().stack);
  }

  F$maxBytesPerChar$$() {
    // source file is CharsetEncoder.java
    var var0 = .0;
    // line number 471
    var0 = (this.maxBytesPerChar);
    return var0;
  }
}


class jdk$internal$misc$VM extends java$lang$Object {
  nativeObject = null;

  static lock = null;
  static directMemory = 0;
  static initLevel = 0;
  static savedProps = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$VM,[java$lang$Object,jdk$internal$misc$VM]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is VM.java
    var var0 = null;
    var var1 = null;
    // line number 37
    var0 = new java$lang$Object();
    java$lang$Object.prototype.V$$init$$$.call(var0);
    jdk$internal$misc$VM.$i;
    jdk$internal$misc$VM.lock = var0;
    // line number 76
    jdk$internal$misc$VM.directMemory = 67108864;
    // line number 183
    var1 = new java$util$HashMap();
    java$util$HashMap.prototype.V$$init$$$.call(var1);
    jdk$internal$misc$VM.V$saveProperties$Ljava$util$Map$(var1);
    // line number 184
    return;
  }

  static V$saveProperties$Ljava$util$Map$(arg0) {
    // source file is VM.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    // line number 113
    jdk$internal$misc$VM.$i;
    var0 = ((jdk$internal$misc$VM.I$initLevel$$())) | 0;
    if (var0 == 0) {
     // line number 118
     var3 = (jdk$internal$misc$VM.savedProps);
     If_31_0: {
      if (var3 != null) {
       phi4 = arg0;
       break If_31_0;
      } else {
       // line number 119
       jdk$internal$misc$VM.savedProps = arg0;
       phi4 = arg0;
       break If_31_0;
      }
     }
     // line number 121
     return;
    } else {
     // line number 114
     var1 = new java$lang$IllegalStateException();
     var2 = bytecoder.stringconstants[41];
     java$lang$IllegalStateException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  static I$initLevel$$() {
    // source file is VM.java
    var var0 = 0;
    // line number 49
    jdk$internal$misc$VM.$i;
    var0 = ((jdk$internal$misc$VM.initLevel)) | 0;
    return var0;
  }

  static Z$isBooted$$() {
    // source file is VM.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 65
    jdk$internal$misc$VM.$i;
    var0 = ((jdk$internal$misc$VM.initLevel)) | 0;
    If_9_0: {
     if (var0 < 4) {
      phi2 = (0) | 0;
      break If_9_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_9_0;
     }
    }
    return phi2;
  }

  V$$init$$$() {
    // source file is VM.java
    // line number 25
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class jdk$internal$access$JavaIOPrintStreamAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$access$JavaIOPrintStreamAccess,[java$lang$Object,jdk$internal$access$JavaIOPrintStreamAccess]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$BufferMismatch extends java$lang$Object {
  nativeObject = null;

  static SCOPED_MEMORY_ACCESS = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$BufferMismatch,[java$lang$Object,java$nio$BufferMismatch]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is BufferMismatch.java
    var var0 = null;
    // line number 35
    jdk$internal$misc$ScopedMemoryAccess.$i;
    var0 = (jdk$internal$misc$ScopedMemoryAccess.Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$());
    java$nio$BufferMismatch.$i;
    java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS = var0;
    return;
  }

  static I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(arg0,arg1,arg2,arg3,arg4) {
    // source file is BufferMismatch.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var phi22 = null;
    var phi23 = 0;
    var phi24 = null;
    var phi25 = 0;
    var phi26 = 0;
    var phi27 = 0;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var var31 = 0;
    var var32 = 0;
    var var33 = 0;
    var var34 = 0;
    var var35 = null;
    var var36 = 0;
    var var37 = 0;
    var var38 = 0;
    var var39 = 0;
    var var40 = 0;
    var0 = (arg1) | 0;
    var1 = (arg3) | 0;
    // line number 38
    // line number 39
    var2 = (7) | 0;
    If_18_0: {
     if (arg4 <= var2) {
      phi22 = arg0;
      phi23 = (var0) | 0;
      phi24 = arg2;
      phi25 = (var1) | 0;
      phi26 = (arg4) | 0;
      phi27 = (0) | 0;
      break If_18_0;
     } else {
      // line number 40
      var3 = (arg0.B$get$I(var0));
      var4 = (arg2.B$get$I(var1));
      if (var3 == var4) {
       // line number 42
       java$nio$BufferMismatch.$i;
       var5 = (java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS);
       var6 = (arg0.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
       var7 = (arg2.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
       // line number 43
       var8 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(arg0));
       var9 = (arg0.address);
       var10 = (var0 | 0);
       var11 = (var9 + var10);
       // line number 44
       var12 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(arg2));
       var13 = (arg2.address);
       var14 = (var1 | 0);
       var15 = (var13 + var14);
       jdk$internal$util$ArraysSupport.$i;
       var16 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_BYTE_INDEX_SCALE)) | 0;
       // line number 42
       var17 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(var5,var6,var7,var8,var11,var12,var15,arg4,var16))) | 0;
       // line number 47
       if (var17 < 0) {
        // line number 48
        var19 = (-1) | 0;
        var20 = ((var17 ^ var19)) | 0;
        var21 = ((arg4 - var20)) | 0;
        phi22 = arg0;
        phi23 = (var0) | 0;
        phi24 = arg2;
        phi25 = (var1) | 0;
        phi26 = (arg4) | 0;
        phi27 = (var21) | 0;
        break If_18_0;
       } else {
        var18 = (var17) | 0;
        return var18;
       }
      } else {
       // line number 41
       return 0;
      }
     }
    }
    L1137428607: while(true) {
     // line number 50
     var28 = (phi27) | 0;
     var29 = (phi26) | 0;
     if (var28 >= var29) {
      // line number 54
      return -1;
     } else {
      // line number 51
      var30 = phi22;
      var31 = (phi23) | 0;
      var32 = (phi27) | 0;
      var33 = ((var31 + var32)) | 0;
      var34 = (var30.B$get$I(var33));
      var35 = phi24;
      var36 = (phi25) | 0;
      var37 = (phi27) | 0;
      var38 = ((var36 + var37)) | 0;
      var39 = (var35.B$get$I(var38));
      if (var34 == var39) {
       // line number 50
       phi27 = ((phi27 + 1)) | 0;
       // Here was a goto statement
       continue L1137428607;
      } else {
       // line number 52
       var40 = (phi27) | 0;
       return var40;
      }
     }
    }
  }

  static I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(arg0,arg1,arg2,arg3,arg4) {
    // source file is BufferMismatch.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    var var26 = 0;
    var var27 = 0;
    var var28 = 0;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = 0;
    var phi33 = null;
    var phi34 = 0;
    var phi35 = null;
    var phi36 = 0;
    var phi37 = 0;
    var phi38 = 0;
    var var39 = 0;
    var var40 = 0;
    var var41 = null;
    var var42 = 0;
    var var43 = 0;
    var var44 = 0;
    var var45 = 0;
    var var46 = null;
    var var47 = 0;
    var var48 = 0;
    var var49 = 0;
    var var50 = 0;
    var var51 = 0;
    var0 = (arg1) | 0;
    var1 = (arg3) | 0;
    // line number 58
    // line number 62
    var2 = (3) | 0;
    If_18_0: {
     if (arg4 <= var2) {
      phi33 = arg0;
      phi34 = (var0) | 0;
      phi35 = arg2;
      phi36 = (var1) | 0;
      phi37 = (arg4) | 0;
      phi38 = (0) | 0;
      break If_18_0;
     } else {
      var3 = arg0;
      var4 = (var3.Ljava$nio$ByteOrder$$charRegionOrder$$());
      var5 = (arg2.Ljava$nio$ByteOrder$$charRegionOrder$$());
      if (var4 != var5) {
       phi33 = arg0;
       phi34 = (var0) | 0;
       phi35 = arg2;
       phi36 = (var1) | 0;
       phi37 = (arg4) | 0;
       phi38 = (0) | 0;
       break If_18_0;
      } else {
       var6 = arg0;
       // line number 63
       var7 = (var6.Ljava$nio$ByteOrder$$charRegionOrder$$());
       if (var7 == null) {
        phi33 = arg0;
        phi34 = (var0) | 0;
        phi35 = arg2;
        phi36 = (var1) | 0;
        phi37 = (arg4) | 0;
        phi38 = (0) | 0;
        break If_18_0;
       } else {
        var8 = arg2;
        var9 = (var8.Ljava$nio$ByteOrder$$charRegionOrder$$());
        if (var9 == null) {
         phi33 = arg0;
         phi34 = (var0) | 0;
         phi35 = arg2;
         phi36 = (var1) | 0;
         phi37 = (arg4) | 0;
         phi38 = (0) | 0;
         break If_18_0;
        } else {
         // line number 64
         var10 = (arg0.C$get$I(var0));
         var11 = (arg2.C$get$I(var1));
         if (var10 == var11) {
          // line number 66
          java$nio$BufferMismatch.$i;
          var12 = (java$nio$BufferMismatch.SCOPED_MEMORY_ACCESS);
          var13 = (arg0.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
          var14 = (arg2.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
          // line number 67
          var15 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(arg0));
          var16 = (arg0.address);
          jdk$internal$util$ArraysSupport.$i;
          var17 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0;
          var18 = ((var0 << var17)) | 0;
          var19 = (var18 | 0);
          var20 = (var16 + var19);
          // line number 68
          var21 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(arg2));
          var22 = (arg2.address);
          var23 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0;
          var24 = ((var1 << var23)) | 0;
          var25 = (var24 | 0);
          var26 = (var22 + var25);
          var27 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE)) | 0;
          // line number 66
          var28 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(var12,var13,var14,var15,var20,var21,var26,arg4,var27))) | 0;
          // line number 71
          if (var28 < 0) {
           // line number 72
           var30 = (-1) | 0;
           var31 = ((var28 ^ var30)) | 0;
           var32 = ((arg4 - var31)) | 0;
           phi33 = arg0;
           phi34 = (var0) | 0;
           phi35 = arg2;
           phi36 = (var1) | 0;
           phi37 = (arg4) | 0;
           phi38 = (var32) | 0;
           break If_18_0;
          } else {
           var29 = (var28) | 0;
           return var29;
          }
         } else {
          // line number 65
          return 0;
         }
        }
       }
      }
     }
    }
    L638407283: while(true) {
     // line number 74
     var39 = (phi38) | 0;
     var40 = (phi37) | 0;
     if (var39 >= var40) {
      // line number 78
      return -1;
     } else {
      // line number 75
      var41 = phi33;
      var42 = (phi34) | 0;
      var43 = (phi38) | 0;
      var44 = ((var42 + var43)) | 0;
      var45 = (var41.C$get$I(var44));
      var46 = phi35;
      var47 = (phi36) | 0;
      var48 = (phi38) | 0;
      var49 = ((var47 + var48)) | 0;
      var50 = (var46.C$get$I(var49));
      if (var45 == var50) {
       // line number 74
       phi38 = ((phi38 + 1)) | 0;
       // Here was a goto statement
       continue L638407283;
      } else {
       // line number 76
       var51 = (phi38) | 0;
       return var51;
      }
     }
    }
  }

  V$$init$$$() {
    // source file is BufferMismatch.java
    // line number 33
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$reflect$Type extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$reflect$Type,[java$lang$Object,java$lang$reflect$Type]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Appendable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Appendable,[java$lang$Object,java$lang$Appendable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Math extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Math,[java$lang$Object,java$lang$Math]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Math.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 21
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(de$mirkosertic$bytecoder$classlib$java$lang$TMath.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$lang$Math.$i;
    java$lang$Math.$assertionsDisabled = phi2;
    return;
  }

  static I$floorMod$I$I(arg0,arg1) {
    // source file is Math.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var0 = (arg1) | 0;
    // line number 140
    var1 = (arg0) | 0;
    java$lang$Math.$i;
    var2 = ((java$lang$Math.I$floorDiv$I$I(var1,var0))) | 0;
    var3 = ((var2 * var0)) | 0;
    var4 = ((arg0 - var3)) | 0;
    return var4;
  }

  static I$floorDiv$I$I(arg0,arg1) {
    // source file is Math.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var0 = (arg1) | 0;
    // line number 144
    var1 = (var0) | 0;
    var2 = (Math.floor(arg0 / var1)) | 0;
    // line number 146
    java$lang$Integer.$i;
    var3 = ((java$lang$Integer.I$signum$I(arg0))) | 0;
    var4 = ((java$lang$Integer.I$signum$I(var0))) | 0;
    If_23_0: {
     if (var3 == var4) {
      phi8 = (arg0) | 0;
      phi9 = (var0) | 0;
      phi10 = (var2) | 0;
      break If_23_0;
     } else {
      var5 = (var2) | 0;
      var6 = ((var5 * var0)) | 0;
      if (var6 == arg0) {
       phi8 = (arg0) | 0;
       phi9 = (var0) | 0;
       phi10 = (var2) | 0;
       break If_23_0;
      } else {
       // line number 147
       var7 = ((var2 + -1)) | 0;
       phi8 = (arg0) | 0;
       phi9 = (var0) | 0;
       phi10 = (var7) | 0;
       break If_23_0;
      }
     }
    }
    // line number 149
    var11 = (phi10) | 0;
    return var11;
  }

  static I$min$I$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Math'].I$min$I$I(arg0, arg1);
  }

  static I$round$F(arg0) {
    // source file is Math.java
    var var0 = 0;
    // line number 199
    var0 = ((arg0 | 0)) | 0;
    return var0;
  }

  V$$init$$$() {
    // source file is Math.java
    // line number 22
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$charset$CoderResult$Cache extends java$lang$Object {
  nativeObject = null;

  unmappable = null;
  malformed = null;
  static INSTANCE = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CoderResult$Cache,[java$lang$Object,java$nio$charset$CoderResult$Cache]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is CoderResult.java
    var var0 = null;
    // line number 194
    java$nio$charset$CoderResult$Cache.$i;
    var0 = new java$nio$charset$CoderResult$Cache();
    java$nio$charset$CoderResult$Cache.prototype.V$$init$$$.call(var0);
    java$nio$charset$CoderResult$Cache.INSTANCE = var0;
    return;
  }

  V$$init$$$() {
    // source file is CoderResult.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    // line number 195
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 197
    var0 = this;
    var1 = new java$util$concurrent$ConcurrentHashMap();
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$$.call(var1);
    var0.unmappable = var1;
    // line number 198
    var2 = this;
    var3 = new java$util$concurrent$ConcurrentHashMap();
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$$.call(var3);
    var2.malformed = var3;
    // line number 195
    return;
  }
}


class java$lang$Cloneable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Cloneable,[java$lang$Cloneable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$ClassLoader extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ClassLoader,[java$lang$ClassLoader,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ClassLoader.java
    // line number 22
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class jdk$internal$misc$ScopedMemoryAccess extends java$lang$Object {
  nativeObject = null;

  static UNSAFE = null;
  static theScopedMemoryAccess = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$ScopedMemoryAccess,[java$lang$Object,jdk$internal$misc$ScopedMemoryAccess]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    // line number 79
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    jdk$internal$misc$ScopedMemoryAccess.$i;
    jdk$internal$misc$ScopedMemoryAccess.UNSAFE = var0;
    // line number 83
    jdk$internal$misc$ScopedMemoryAccess.V$registerNatives$$();
    // line number 94
    var1 = new jdk$internal$misc$ScopedMemoryAccess();
    jdk$internal$misc$ScopedMemoryAccess.prototype.V$$init$$$.call(var1);
    jdk$internal$misc$ScopedMemoryAccess.theScopedMemoryAccess = var1;
    return;
  }

  static V$registerNatives$$() {
    bytecoder.imports['jdk.internal.misc.ScopedMemoryAccess'].V$registerNatives$$();
  }

  V$$init$$$() {
    // source file is ScopedMemoryAccess.java
    // line number 92
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  static Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$() {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    // line number 97
    jdk$internal$misc$ScopedMemoryAccess.$i;
    var0 = (jdk$internal$misc$ScopedMemoryAccess.theScopedMemoryAccess);
    return var0;
  }

  V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = arg6;
    TryCatch_17_0: {
     try {
      // line number 129
      var5 = arg1;
      var6 = arg3;
      var7 = arg5;
      jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(this,var0,var5,var1,var6,var2,var7,var3);
      break TryCatch_17_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       // line number 130
       // line number 131
       var4 = (jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(__ex));
       throw bytecoder.registerStack(var4, new Error().stack);
      }
      throw __ex;
     }
    }
    // line number 132
    // Here was a goto statement
    // line number 133
    return;
  }

  V$copyMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = 0;
    var phi11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = arg6;
    TryCatch_17_0: {
     try {
      // line number 141
      If_34_0: {
       if (var0 == null) {
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = var3;
        break If_34_0;
       } else {
        // line number 142
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var0);
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = var3;
        break If_34_0;
       }
      }
      // line number 144
      var12 = phi6;
      If_52_0: {
       if (var12 == null) {
        break If_52_0;
       } else {
        // line number 145
        var13 = phi6;
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var13);
        break If_52_0;
       }
      }
      // line number 147
      jdk$internal$misc$ScopedMemoryAccess.$i;
      var14 = (jdk$internal$misc$ScopedMemoryAccess.UNSAFE);
      var15 = phi7;
      var16 = phi8;
      var17 = phi9;
      var18 = phi10;
      var19 = phi11;
      jdk$internal$misc$Unsafe.prototype.V$copyMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var14,var15,var16,var17,var18,var19);
      break TryCatch_17_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_18_0: {
        // line number 149
        break TryCatch_18_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var0);
       // line number 150
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       // line number 151
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    // line number 149
    var20 = phi5;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var20);
    // line number 150
    var21 = phi6;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var21);
    // line number 151
    // Here was a goto statement
    // line number 152
    return;
  }

  I$vectorizedMismatch$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = (arg6) | 0;
    TryCatch_18_0: {
     try {
      // line number 213
      var5 = arg1;
      var6 = arg3;
      var7 = arg5;
      var8 = (arg7) | 0;
      var9 = ((jdk$internal$misc$ScopedMemoryAccess.prototype.I$vectorizedMismatchInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I.call(this,var0,var5,var1,var6,var2,var7,var3,var8))) | 0;
      break TryCatch_18_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       // line number 214
       // line number 215
       var4 = (jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(__ex));
       throw bytecoder.registerStack(var4, new Error().stack);
      }
      throw __ex;
     }
    }
    return var9;
  }

  I$vectorizedMismatchInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = 0;
    var phi11 = 0;
    var phi12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = (arg6) | 0;
    TryCatch_18_0: {
     try {
      // line number 226
      If_35_0: {
       if (var0 == null) {
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = (var3) | 0;
        phi12 = (arg7) | 0;
        break If_35_0;
       } else {
        // line number 227
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var0);
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = (var3) | 0;
        phi12 = (arg7) | 0;
        break If_35_0;
       }
      }
      // line number 229
      var13 = phi6;
      If_54_0: {
       if (var13 == null) {
        break If_54_0;
       } else {
        // line number 230
        var14 = phi6;
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var14);
        break If_54_0;
       }
      }
      // line number 232
      var15 = phi7;
      var16 = phi8;
      var17 = phi9;
      var18 = phi10;
      var19 = (phi11) | 0;
      var20 = (phi12) | 0;
      jdk$internal$util$ArraysSupport.$i;
      var21 = ((jdk$internal$util$ArraysSupport.I$vectorizedMismatch$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(var15,var16,var17,var18,var19,var20))) | 0;
      break TryCatch_18_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_19_0: {
        // line number 234
        break TryCatch_19_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var0);
       // line number 235
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       // line number 236
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    // line number 234
    var22 = phi5;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var22);
    // line number 235
    var23 = phi6;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var23);
    // line number 232
    return var21;
  }

  V$copySwapMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = arg6;
    TryCatch_18_0: {
     try {
      // line number 160
      var5 = arg1;
      var6 = arg3;
      var7 = arg5;
      var8 = arg7;
      jdk$internal$misc$ScopedMemoryAccess.prototype.V$copySwapMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(this,var0,var5,var1,var6,var2,var7,var3,var8);
      break TryCatch_18_0;
     } catch (__ex) {
      if (__ex instanceof jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError) {
       // line number 161
       // line number 162
       var4 = (jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError.prototype.Ljava$lang$RuntimeException$$newRuntimeException$$.call(__ex));
       throw bytecoder.registerStack(var4, new Error().stack);
      }
      throw __ex;
     }
    }
    // line number 163
    // Here was a goto statement
    // line number 164
    return;
  }

  V$copySwapMemoryInternal$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5,arg6,arg7) {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = 0;
    var phi11 = 0;
    var phi12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    var3 = arg6;
    TryCatch_18_0: {
     try {
      // line number 172
      If_35_0: {
       if (var0 == null) {
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = var3;
        phi12 = arg7;
        break If_35_0;
       } else {
        // line number 173
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var0);
        phi4 = this;
        phi5 = var0;
        phi6 = arg1;
        phi7 = var1;
        phi8 = arg3;
        phi9 = var2;
        phi10 = arg5;
        phi11 = var3;
        phi12 = arg7;
        break If_35_0;
       }
      }
      // line number 175
      var13 = phi6;
      If_54_0: {
       if (var13 == null) {
        break If_54_0;
       } else {
        // line number 176
        var14 = phi6;
        jdk$internal$foreign$MemorySessionImpl.prototype.V$checkValidStateRaw$$.call(var14);
        break If_54_0;
       }
      }
      // line number 178
      jdk$internal$misc$ScopedMemoryAccess.$i;
      var15 = (jdk$internal$misc$ScopedMemoryAccess.UNSAFE);
      var16 = phi7;
      var17 = phi8;
      var18 = phi9;
      var19 = phi10;
      var20 = phi11;
      var21 = phi12;
      jdk$internal$misc$Unsafe.prototype.V$copySwapMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(var15,var16,var17,var18,var19,var20,var21);
      break TryCatch_18_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_19_0: {
        // line number 180
        break TryCatch_19_0;
       }
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var0);
       // line number 181
       java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(arg1);
       // line number 182
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    // line number 180
    var22 = phi5;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var22);
    // line number 181
    var23 = phi6;
    java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var23);
    // line number 182
    // Here was a goto statement
    // line number 183
    return;
  }
}


class java$lang$ThreadGroup extends java$lang$Object {
  nativeObject = null;

  name = null;
  parent = null;
  static SYSTEM = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ThreadGroup,[java$lang$Object,java$lang$ThreadGroup]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ThreadGroup.java
    var var0 = null;
    // line number 23
    java$lang$ThreadGroup.$i;
    var0 = new java$lang$ThreadGroup();
    java$lang$ThreadGroup.prototype.V$$init$$$.call(var0);
    java$lang$ThreadGroup.SYSTEM = var0;
    return;
  }

  V$$init$$$() {
    // source file is ThreadGroup.java
    var var0 = null;
    var var1 = null;
    // line number 28
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 29
    var0 = this;
    var0.name = bytecoder.stringconstants[42];
    // line number 30
    var1 = this;
    var1.parent = null;
    // line number 31
    return;
  }

  V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$(arg0,arg1) {
    // source file is ThreadGroup.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 38
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 39
    var1 = this;
    var1.name = arg1;
    // line number 40
    var2 = this;
    var2.parent = var0;
    // line number 41
    return;
  }
}


class java$lang$invoke$CallSite extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$invoke$CallSite,[java$lang$invoke$CallSite,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$invoke$MethodHandle$$getTarget$$ = impl;
  }

  V$$init$$$() {
    // source file is CallSite.java
    // line number 23
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$Void extends java$lang$Object {
  nativeObject = null;

  static TYPE = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Void,[java$lang$Void,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Void.java
    var var0 = null;
    // line number 43
    var0 = (java$lang$Class.Ljava$lang$Class$$getPrimitiveClass$Ljava$lang$String$(bytecoder.stringconstants[2]));
    java$lang$Void.$i;
    java$lang$Void.TYPE = var0;
    return;
  }

  V$$init$$$() {
    // source file is Void.java
    // line number 48
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$ByteOrder extends java$lang$Object {
  nativeObject = null;

  name = null;
  static BIG_ENDIAN = null;
  static LITTLE_ENDIAN = null;
  static NATIVE_ORDER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$ByteOrder,[java$lang$Object,java$nio$ByteOrder]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ByteOrder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var phi6 = null;
    var var7 = null;
    // line number 50
    java$nio$ByteOrder.$i;
    var0 = new java$nio$ByteOrder();
    var1 = bytecoder.stringconstants[39];
    java$nio$ByteOrder.prototype.V$$init$$Ljava$lang$String$.call(var0,var1);
    java$nio$ByteOrder.BIG_ENDIAN = var0;
    // line number 58
    var2 = new java$nio$ByteOrder();
    java$nio$ByteOrder.prototype.V$$init$$Ljava$lang$String$.call(var2,bytecoder.stringconstants[40]);
    java$nio$ByteOrder.LITTLE_ENDIAN = var2;
    // line number 64
    jdk$internal$misc$Unsafe.$i;
    var3 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    var4 = (jdk$internal$misc$Unsafe.prototype.Z$isBigEndian$$.call(var3));
    If_34_0: {
     if (var4 == 0) {
      var7 = (java$nio$ByteOrder.LITTLE_ENDIAN);
      phi6 = var7;
      break If_34_0;
     } else {
      // line number 65
      var5 = (java$nio$ByteOrder.BIG_ENDIAN);
      // Here was a goto statement
      phi6 = var5;
      break If_34_0;
     }
    }
    java$nio$ByteOrder.NATIVE_ORDER = phi6;
    // line number 63
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is ByteOrder.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 42
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 43
    var1 = this;
    var1.name = var0;
    // line number 44
    return;
  }

  static Ljava$nio$ByteOrder$$nativeOrder$$() {
    // source file is ByteOrder.java
    var var0 = null;
    // line number 79
    java$nio$ByteOrder.$i;
    var0 = (java$nio$ByteOrder.NATIVE_ORDER);
    return var0;
  }

  Ljava$lang$String$$toString$$() {
    // source file is ByteOrder.java
    var var0 = null;
    // line number 92
    var0 = (this.name);
    return var0;
  }
}


class java$lang$AbstractStringBuilder extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$AbstractStringBuilder,[java$lang$Object,java$lang$AbstractStringBuilder]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$CodingErrorAction extends java$lang$Object {
  nativeObject = null;

  name = null;
  static IGNORE = null;
  static REPLACE = null;
  static REPORT = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CodingErrorAction,[java$nio$charset$CodingErrorAction,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is CodingErrorAction.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    // line number 55
    java$nio$charset$CodingErrorAction.$i;
    var0 = new java$nio$charset$CodingErrorAction();
    var1 = bytecoder.stringconstants[23];
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var0,var1);
    java$nio$charset$CodingErrorAction.IGNORE = var0;
    // line number 63
    var2 = new java$nio$charset$CodingErrorAction();
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var2,bytecoder.stringconstants[24]);
    java$nio$charset$CodingErrorAction.REPLACE = var2;
    // line number 72
    var3 = new java$nio$charset$CodingErrorAction();
    java$nio$charset$CodingErrorAction.prototype.V$$init$$Ljava$lang$String$.call(var3,bytecoder.stringconstants[25]);
    java$nio$charset$CodingErrorAction.REPORT = var3;
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is CodingErrorAction.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 47
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 48
    var1 = this;
    var1.name = var0;
    // line number 49
    return;
  }

  Ljava$lang$String$$toString$$() {
    // source file is CodingErrorAction.java
    var var0 = null;
    // line number 81
    var0 = (this.name);
    return var0;
  }
}


class jdk$internal$util$Preconditions extends java$lang$Object {
  nativeObject = null;

  static SIOOBE_FORMATTER = null;
  static AIOOBE_FORMATTER = null;
  static IOOBE_FORMATTER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$Preconditions,[jdk$internal$util$Preconditions,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    // line number 52
    var0 = new jdk$internal$util$Preconditions$1();
    jdk$internal$util$Preconditions$1.prototype.V$$init$$$.call(var0);
    jdk$internal$util$Preconditions.$i;
    var1 = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var0));
    jdk$internal$util$Preconditions.SIOOBE_FORMATTER = var1;
    // line number 60
    var2 = new jdk$internal$util$Preconditions$2();
    jdk$internal$util$Preconditions$2.prototype.V$$init$$$.call(var2);
    var3 = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var2));
    jdk$internal$util$Preconditions.AIOOBE_FORMATTER = var3;
    // line number 68
    var4 = new jdk$internal$util$Preconditions$3();
    jdk$internal$util$Preconditions$3.prototype.V$$init$$$.call(var4);
    var5 = (jdk$internal$util$Preconditions.Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(var4));
    jdk$internal$util$Preconditions.IOOBE_FORMATTER = var5;
    return;
  }

  static Ljava$util$function$BiFunction$$outOfBoundsExceptionFormatter$Ljava$util$function$Function$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    // line number 210
    var0 = new jdk$internal$util$Preconditions$4();
    var1 = arg0;
    jdk$internal$util$Preconditions$4.prototype.V$$init$$Ljava$util$function$Function$.call(var0,var1);
    return var0;
  }

  static I$checkFromIndexSize$I$I$I$Ljava$util$function$BiFunction$(arg0,arg1,arg2,arg3) {
    // source file is Preconditions.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var phi11 = null;
    var var12 = null;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = null;
    var0 = (arg1) | 0;
    var1 = arg3;
    // line number 396
    var2 = (arg0) | 0;
    var3 = ((arg2 | var2)) | 0;
    var4 = ((var3 | var0)) | 0;
    If_19_0: {
     if (var4 < 0) {
      phi8 = (arg0) | 0;
      phi9 = (var0) | 0;
      phi10 = (arg2) | 0;
      phi11 = var1;
      break If_19_0;
     } else {
      var5 = (var0) | 0;
      var6 = (arg0) | 0;
      var7 = ((arg2 - var6)) | 0;
      if (var5 <= var7) {
       // line number 398
       return arg0;
      } else {
       phi8 = (arg0) | 0;
       phi9 = (var0) | 0;
       phi10 = (arg2) | 0;
       phi11 = var1;
       break If_19_0;
      }
     }
    }
    // line number 397
    var12 = phi11;
    var13 = (phi8) | 0;
    var14 = (phi9) | 0;
    var15 = (phi10) | 0;
    jdk$internal$util$Preconditions.$i;
    var16 = (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBoundsCheckFromIndexSize$Ljava$util$function$BiFunction$$I$I$I(var12,var13,var14,var15));
    throw bytecoder.registerStack(var16, new Error().stack);
  }

  static Ljava$lang$RuntimeException$$outOfBoundsCheckFromIndexSize$Ljava$util$function$BiFunction$$I$I$I(arg0,arg1,arg2,arg3) {
    // source file is Preconditions.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var0 = (arg1) | 0;
    var1 = (arg3) | 0;
    // line number 118
    var2 = bytecoder.stringconstants[49];
    var3 = bytecoder.newarray((3),null);
    var4 = (0) | 0;
    java$lang$Integer.$i;
    var5 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(var0));
    var3.data[var4] = var5;
    var6 = (1) | 0;
    var7 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg2));
    var3.data[var6] = var7;
    var8 = (2) | 0;
    var9 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(var1));
    var3.data[var8] = var9;
    jdk$internal$util$Preconditions.$i;
    var10 = (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,var2,var3));
    return var10;
  }

  static Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,arg1,arg2) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var0 = arg1;
    // line number 96
    var1 = (java$util$List.Ljava$util$List$$of$$Ljava$lang$Object$(arg2));
    // line number 97
    If_15_0: {
     if (arg0 != null) {
      var14 = var0;
      var15 = (arg0.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$(var14,var1));
      var16 = var15;
      phi2 = arg0;
      phi3 = var0;
      phi4 = arg2;
      phi5 = var1;
      phi6 = var16;
      break If_15_0;
     } else {
      // line number 98
      // Here was a goto statement
      phi2 = arg0;
      phi3 = var0;
      phi4 = arg2;
      phi5 = var1;
      phi6 = null;
      break If_15_0;
     }
    }
    var7 = phi6;
    // line number 99
    If_32_0: {
     if (var7 != null) {
      phi12 = var7;
      phi13 = var7;
      break If_32_0;
     } else {
      // line number 100
      var8 = new java$lang$IndexOutOfBoundsException();
      var9 = phi3;
      var10 = phi5;
      jdk$internal$util$Preconditions.$i;
      var11 = (jdk$internal$util$Preconditions.Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(var9,var10));
      java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var8,var11);
      // Here was a goto statement
      phi12 = var7;
      phi13 = var8;
      break If_32_0;
     }
    }
    // line number 99
    return phi13;
  }

  static Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(arg0,arg1) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var phi23 = 0;
    var phi24 = null;
    var phi25 = 0;
    var var26 = 0;
    var var27 = 0;
    var phi28 = 0;
    var var29 = null;
    var var30 = 0;
    var var31 = 0;
    var var32 = null;
    var phi33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = 0;
    var phi37 = null;
    var phi38 = 0;
    var var39 = 0;
    var var40 = 0;
    var var41 = null;
    var var42 = 0;
    var var43 = null;
    var var44 = null;
    var var45 = 0;
    var var46 = null;
    var var47 = null;
    var var48 = 0;
    var var49 = null;
    var var50 = null;
    var var51 = null;
    var var52 = 0;
    var var53 = null;
    var var54 = 0;
    var var55 = null;
    var var56 = null;
    var var57 = 0;
    var var58 = null;
    var var59 = null;
    var var60 = 0;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = 0;
    var var65 = null;
    var var66 = 0;
    var var67 = null;
    var var68 = null;
    var var69 = 0;
    var var70 = null;
    var var71 = null;
    var var72 = null;
    var var73 = 0;
    var var74 = null;
    var var75 = 0;
    var var76 = null;
    var var77 = 0;
    var var78 = null;
    var var79 = null;
    var var80 = null;
    var var81 = 0;
    var var82 = 0;
    var var83 = null;
    var var84 = 0;
    var var85 = 0;
    var var86 = 0;
    var var87 = 0;
    var var88 = null;
    var var89 = 0;
    var var90 = 0;
    var var91 = 0;
    var var92 = 0;
    var var93 = 0;
    var var94 = 0;
    var var95 = 0;
    var0 = arg1;
    // line number 219
    If_7_0: {
     if (arg0 != null) {
      phi5 = arg0;
      phi6 = var0;
      break If_7_0;
     } else {
      var1 = var0;
      if (var1 != null) {
       phi5 = arg0;
       phi6 = var0;
       break If_7_0;
      } else {
       // line number 220
       var2 = (0) | 0;
       var3 = bytecoder.newarray((var2),null);
       var4 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[59],var3));
       return var4;
      }
     }
    }
    // line number 221
    var7 = phi5;
    if (var7 != null) {
     // line number 223
     var13 = phi6;
     if (var13 != null) {
      // line number 227
      // line number 228
      var19 = phi5;
      var20 = (-1) | 0;
      var21 = var19;
      var22 = ((java$lang$String.prototype.I$hashCode$$.call(var21))) | 0;
      LookupSwitch_100_0: {
       switch (var22) {
        case -538822486: {
         var94 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var19,bytecoder.stringconstants[66]));
         if (var94 == 0) {
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var20) | 0;
          break LookupSwitch_100_0;
         } else {
          var95 = (0) | 0;
          // Here was a goto statement
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var95) | 0;
          break LookupSwitch_100_0;
         }
        }
        case 1844394469: {
         var92 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var19,bytecoder.stringconstants[65]));
         if (var92 == 0) {
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var20) | 0;
          break LookupSwitch_100_0;
         } else {
          var93 = (1) | 0;
          // Here was a goto statement
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var93) | 0;
          break LookupSwitch_100_0;
         }
        }
        case 1848935233: {
         var90 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var19,bytecoder.stringconstants[49]));
         if (var90 == 0) {
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var20) | 0;
          break LookupSwitch_100_0;
         } else {
          var91 = (2) | 0;
          phi23 = (0) | 0;
          phi24 = var19;
          phi25 = (var91) | 0;
          break LookupSwitch_100_0;
         }
        }
        default: {
         phi23 = (0) | 0;
         phi24 = var19;
         phi25 = (var20) | 0;
         break LookupSwitch_100_0;
        }
       }
      }
      var26 = (phi25) | 0;
      TableSwitch_108_0: {
       if ((var26) >= 0 && (var26) <= 2) switch ((var26) - 0) {
        case 0: {
         // line number 230
         var89 = (2) | 0;
         // line number 231
         // Here was a goto statement
         phi28 = (var89) | 0;
         break TableSwitch_108_0;
        }
        case 1: {
         // line number 234
         var27 = (3) | 0;
         // line number 235
         // Here was a goto statement
         phi28 = (var27) | 0;
         break TableSwitch_108_0;
        }
        case 2: {
         // line number 234
         var27 = (3) | 0;
         // line number 235
         // Here was a goto statement
         phi28 = (var27) | 0;
         break TableSwitch_108_0;
        }
       } else {
        phi28 = (phi23) | 0;
        break TableSwitch_108_0;
       }
      }
      // line number 240
      var29 = phi6;
      var30 = ((var29.I$size$$())) | 0;
      var31 = (phi28) | 0;
      If_129_0: {
       if (var30 == var31) {
        var88 = phi5;
        phi33 = var88;
        break If_129_0;
       } else {
        var32 = bytecoder.stringconstants[1];
        // Here was a goto statement
        phi33 = var32;
        break If_129_0;
       }
      }
      var34 = phi33;
      var35 = var34;
      var36 = ((java$lang$String.prototype.I$hashCode$$.call(var35))) | 0;
      LookupSwitch_146_0: {
       switch (var36) {
        case -538822486: {
         var86 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var34,bytecoder.stringconstants[66]));
         if (var86 == 0) {
          phi37 = var34;
          phi38 = (-1) | 0;
          break LookupSwitch_146_0;
         } else {
          var87 = (0) | 0;
          // Here was a goto statement
          phi37 = var34;
          phi38 = (var87) | 0;
          break LookupSwitch_146_0;
         }
        }
        case 1844394469: {
         var83 = bytecoder.stringconstants[65];
         var84 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var34,var83));
         if (var84 == 0) {
          phi37 = var34;
          phi38 = (-1) | 0;
          break LookupSwitch_146_0;
         } else {
          var85 = (1) | 0;
          // Here was a goto statement
          phi37 = var34;
          phi38 = (var85) | 0;
          break LookupSwitch_146_0;
         }
        }
        case 1848935233: {
         var80 = bytecoder.stringconstants[49];
         var81 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var34,var80));
         if (var81 == 0) {
          phi37 = var34;
          phi38 = (-1) | 0;
          break LookupSwitch_146_0;
         } else {
          var82 = (2) | 0;
          phi37 = var34;
          phi38 = (var82) | 0;
          break LookupSwitch_146_0;
         }
        }
        default: {
         phi37 = var34;
         phi38 = (-1) | 0;
         break LookupSwitch_146_0;
        }
       }
      }
      var39 = (phi38) | 0;
      if ((var39) >= 0 && (var39) <= 2) switch ((var39) - 0) {
       case 0: {
        // line number 242
        var64 = (2) | 0;
        var65 = bytecoder.newarray((var64),null);
        var66 = (0) | 0;
        var67 = phi6;
        // line number 243
        var68 = (var67.Ljava$lang$Object$$get$I(0));
        var65.data[var66] = var68;
        var69 = (1) | 0;
        var70 = phi6;
        var71 = (var70.Ljava$lang$Object$$get$I(1));
        var65.data[var69] = var71;
        // line number 242
        var72 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[63],var65));
        return var72;
       }
       case 1: {
        // line number 245
        var52 = (3) | 0;
        var53 = bytecoder.newarray((var52),null);
        var54 = (0) | 0;
        var55 = phi6;
        // line number 246
        var56 = (var55.Ljava$lang$Object$$get$I(0));
        var53.data[var54] = var56;
        var57 = (1) | 0;
        var58 = phi6;
        var59 = (var58.Ljava$lang$Object$$get$I(1));
        var53.data[var57] = var59;
        var60 = (2) | 0;
        var61 = phi6;
        var62 = (var61.Ljava$lang$Object$$get$I(2));
        var53.data[var60] = var62;
        // line number 245
        var63 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[62],var53));
        return var63;
       }
       case 2: {
        // line number 248
        var40 = (3) | 0;
        var41 = bytecoder.newarray((var40),null);
        var42 = (0) | 0;
        var43 = phi6;
        // line number 249
        var44 = (var43.Ljava$lang$Object$$get$I(0));
        var41.data[var42] = var44;
        var45 = (1) | 0;
        var46 = phi6;
        var47 = (var46.Ljava$lang$Object$$get$I(1));
        var41.data[var45] = var47;
        var48 = (2) | 0;
        var49 = phi6;
        var50 = (var49.Ljava$lang$Object$$get$I(2));
        var41.data[var48] = var50;
        // line number 248
        var51 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[61],var41));
        return var51;
       }
      } else {
       // line number 251
       var73 = (2) | 0;
       var74 = bytecoder.newarray((var73),null);
       var75 = (0) | 0;
       var76 = phi5;
       var74.data[var75] = var76;
       var77 = (1) | 0;
       var78 = phi6;
       var74.data[var77] = var78;
       var79 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[64],var74));
       return var79;
      }
     } else {
      // line number 224
      var14 = (1) | 0;
      var15 = bytecoder.newarray((var14),null);
      var16 = (0) | 0;
      var17 = phi5;
      var15.data[var16] = var17;
      var18 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[60],var15));
      return var18;
     }
    } else {
     // line number 222
     var8 = (1) | 0;
     var9 = bytecoder.newarray((var8),null);
     var10 = (0) | 0;
     var11 = phi6;
     var9.data[var10] = var11;
     var12 = (java$lang$String.Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(bytecoder.stringconstants[60],var9));
     return var12;
    }
  }

  V$$init$$$() {
    // source file is Preconditions.java
    // line number 37
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  static I$checkIndex$I$I$Ljava$util$function$BiFunction$(arg0,arg1,arg2) {
    // source file is Preconditions.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var phi3 = 0;
    var phi4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var0 = (arg1) | 0;
    // line number 301
    If_8_0: {
     if (arg0 < 0) {
      phi2 = (arg0) | 0;
      phi3 = (var0) | 0;
      phi4 = arg2;
      break If_8_0;
     } else {
      var1 = (arg0) | 0;
      if (var1 < var0) {
       // line number 303
       return arg0;
      } else {
       phi2 = (arg0) | 0;
       phi3 = (var0) | 0;
       phi4 = arg2;
       break If_8_0;
      }
     }
    }
    // line number 302
    var5 = phi4;
    var6 = (phi2) | 0;
    var7 = (phi3) | 0;
    jdk$internal$util$Preconditions.$i;
    var8 = (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBoundsCheckIndex$Ljava$util$function$BiFunction$$I$I(var5,var6,var7));
    throw bytecoder.registerStack(var8, new Error().stack);
  }

  static Ljava$lang$RuntimeException$$outOfBoundsCheckIndex$Ljava$util$function$BiFunction$$I$I(arg0,arg1,arg2) {
    // source file is Preconditions.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var0 = (arg1) | 0;
    // line number 106
    var1 = bytecoder.stringconstants[66];
    var2 = bytecoder.newarray((2),null);
    var3 = (0) | 0;
    java$lang$Integer.$i;
    var4 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(var0));
    var2.data[var3] = var4;
    var5 = (1) | 0;
    var6 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg2));
    var2.data[var5] = var6;
    jdk$internal$util$Preconditions.$i;
    var7 = (jdk$internal$util$Preconditions.Ljava$lang$RuntimeException$$outOfBounds$Ljava$util$function$BiFunction$$Ljava$lang$String$$$Ljava$lang$Number$(arg0,var1,var2));
    return var7;
  }
}


class java$lang$System extends java$lang$Object {
  nativeObject = null;

  static PROPERTIES = null;
  static in = null;
  static out = null;
  static err = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$System,[java$lang$Object,java$lang$System]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is System.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    // line number 33
    java$util$Properties.$i;
    var0 = new java$util$Properties();
    java$util$Properties.prototype.V$$init$$$.call(var0);
    java$lang$System.$i;
    java$lang$System.PROPERTIES = var0;
    // line number 34
    var1 = (java$lang$System.PROPERTIES);
    var2 = bytecoder.stringconstants[14];
    var3 = (java$util$Properties.prototype.Ljava$lang$Object$$setProperty$Ljava$lang$String$$Ljava$lang$String$.call(var1,bytecoder.stringconstants[13],var2));
    // line number 37
    var4 = new java$io$FileInputStream();
    java$io$FileDescriptor.$i;
    var5 = (java$io$FileDescriptor.in);
    java$io$FileInputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var4,var5);
    java$lang$System.in = var4;
    // line number 39
    java$io$PrintStream.$i;
    var6 = new java$io$PrintStream();
    var7 = new java$io$FileOutputStream();
    var8 = (java$io$FileDescriptor.out);
    java$io$FileOutputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var7,var8);
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$.call(var6,var7);
    java$lang$System.out = var6;
    // line number 41
    var9 = new java$io$PrintStream();
    var10 = new java$io$FileOutputStream();
    var11 = (java$io$FileDescriptor.err);
    java$io$FileOutputStream.prototype.V$$init$$Ljava$io$FileDescriptor$.call(var10,var11);
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$.call(var9,var10);
    java$lang$System.err = var9;
    return;
  }

  static Ljava$lang$String$$getProperty$Ljava$lang$String$(arg0) {
    // source file is System.java
    var var0 = null;
    var var1 = null;
    // line number 114
    java$lang$System.$i;
    var0 = (java$lang$System.PROPERTIES);
    var1 = (java$util$Properties.prototype.Ljava$lang$String$$getProperty$Ljava$lang$String$.call(var0,arg0));
    return var1;
  }

  static Ljava$lang$String$$lineSeparator$$() {
    // source file is System.java
    // line number 130
    return bytecoder.stringconstants[48];
  }

  static J$nanoTime$$() {
    // source file is System.java
    var var0 = 0;
    var var1 = 0;
    // line number 44
    java$lang$System.$i;
    var0 = (java$lang$System.J$currentTimeMillis$$());
    var1 = (var0 * 1000000);
    return var1;
  }

  static J$currentTimeMillis$$() {
    return bytecoder.imports['java.lang.System'].J$currentTimeMillis$$();
  }

  static I$identityHashCode$Ljava$lang$Object$(arg0) {
    // source file is System.java
    var var0 = 0;
    // line number 106
    var0 = ((arg0.I$hashCode$$())) | 0;
    return var0;
  }

  static V$arraycopy$$C$I$$C$I$I(arg0,arg1,arg2,arg3,arg4) {
    // source file is System.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var0 = (arg1) | 0;
    var1 = (arg3) | 0;
    // line number 50
    phi2 = arg0;
    phi3 = (var0) | 0;
    phi4 = arg2;
    phi5 = (var1) | 0;
    phi6 = (arg4) | 0;
    phi7 = (0) | 0;
    L1024558673: while(true) {
     var8 = (phi7) | 0;
     var9 = (phi6) | 0;
     if (var8 >= var9) {
      // line number 53
      return;
     } else {
      // line number 51
      var10 = phi4;
      var11 = (phi5) | 0;
      var12 = (phi7) | 0;
      var13 = ((var11 + var12)) | 0;
      var14 = phi2;
      var15 = (phi3) | 0;
      var16 = (phi7) | 0;
      var17 = ((var15 + var16)) | 0;
      var18 = (var14.data[var17]);
      var10.data[var13] = var18;
      // line number 50
      phi7 = ((phi7 + 1)) | 0;
      // Here was a goto statement
      continue L1024558673;
     }
    }
  }

  V$$init$$$() {
    // source file is System.java
    // line number 28
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  static V$arraycopy$$B$I$$B$I$I(arg0,arg1,arg2,arg3,arg4) {
    // source file is System.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var0 = (arg1) | 0;
    var1 = (arg3) | 0;
    // line number 56
    phi2 = arg0;
    phi3 = (var0) | 0;
    phi4 = arg2;
    phi5 = (var1) | 0;
    phi6 = (arg4) | 0;
    phi7 = (0) | 0;
    L1391179578: while(true) {
     var8 = (phi7) | 0;
     var9 = (phi6) | 0;
     if (var8 >= var9) {
      // line number 59
      return;
     } else {
      // line number 57
      var10 = phi4;
      var11 = (phi5) | 0;
      var12 = (phi7) | 0;
      var13 = ((var11 + var12)) | 0;
      var14 = phi2;
      var15 = (phi3) | 0;
      var16 = (phi7) | 0;
      var17 = ((var15 + var16)) | 0;
      var18 = (var14.data[var17]);
      var10.data[var13] = var18;
      // line number 56
      phi7 = ((phi7 + 1)) | 0;
      // Here was a goto statement
      continue L1391179578;
     }
    }
  }
}


class java$util$function$BiFunction extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$function$BiFunction,[java$util$function$BiFunction,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$ = impl;
  }
}


class jdk$internal$misc$Unsafe extends java$lang$Object {
  nativeObject = null;

  static INSTANCE = null;
  static ARRAY_BOOLEAN_INDEX_SCALE = 0;
  static ARRAY_BYTE_INDEX_SCALE = 0;
  static ARRAY_CHAR_INDEX_SCALE = 0;
  static ARRAY_SHORT_INDEX_SCALE = 0;
  static ARRAY_INT_INDEX_SCALE = 0;
  static ARRAY_LONG_INDEX_SCALE = 0;
  static ARRAY_FLOAT_INDEX_SCALE = 0;
  static ARRAY_DOUBLE_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$Unsafe,[jdk$internal$misc$Unsafe,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Unsafe.java
    var var0 = null;
    // line number 23
    jdk$internal$misc$Unsafe.$i;
    var0 = new jdk$internal$misc$Unsafe();
    jdk$internal$misc$Unsafe.prototype.V$$init$$$.call(var0);
    jdk$internal$misc$Unsafe.INSTANCE = var0;
    return;
  }

  V$$init$$$() {
    // source file is Unsafe.java
    // line number 21
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  static Ljdk$internal$misc$Unsafe$$getUnsafe$$() {
    // source file is Unsafe.java
    var var0 = null;
    // line number 26
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.INSTANCE);
    return var0;
  }

  V$storeFence$$() {
    // source file is Unsafe.java
    // line number 59
    return;
  }

  I$arrayBaseOffset$Ljava$lang$Class$(arg0) {
    // source file is Unsafe.java
    var var0 = null;
    var0 = arg0;
    // line number 46
    return 0;
  }

  I$arrayIndexScale$Ljava$lang$Class$(arg0) {
    // source file is Unsafe.java
    var var0 = null;
    var0 = arg0;
    // line number 51
    return 0;
  }

  Z$isBigEndian$$() {
    // source file is Unsafe.java
    // line number 65
    return 0;
  }

  V$copyMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J(arg0,arg1,arg2,arg3,arg4) {
    // source file is Unsafe.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    // line number 168
    return;
  }

  J$getLongUnaligned$Ljava$lang$Object$$J(arg0,arg1) {
    // source file is Unsafe.java
    var var0 = null;
    var0 = arg0;
    // line number 69
    return arg1;
  }

  I$getIntUnaligned$Ljava$lang$Object$$J(arg0,arg1) {
    // source file is Unsafe.java
    var var0 = null;
    var var1 = 0;
    var0 = arg0;
    // line number 77
    var1 = ((arg1 | 0)) | 0;
    return var1;
  }

  V$copySwapMemory$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J(arg0,arg1,arg2,arg3,arg4,arg5) {
    // source file is Unsafe.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    var1 = arg2;
    var2 = arg4;
    // line number 174
    return;
  }
}


class java$lang$Readable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Readable,[java$lang$Object,java$lang$Readable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$Class extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Class,[java$lang$Object,java$lang$Class]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$Class$$getPrimitiveClass$Ljava$lang$String$(arg0) {
    // source file is Class.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = 0;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    // line number 124
    var0 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[3],arg0));
    if (var0 == 0) {
     // line number 127
     var2 = arg0;
     var3 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[4],var2));
     if (var3 == 0) {
      // line number 130
      var5 = arg0;
      var6 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[5],var5));
      if (var6 == 0) {
       // line number 133
       var8 = arg0;
       var9 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[6],var8));
       if (var9 == 0) {
        // line number 136
        var11 = arg0;
        var12 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[7],var11));
        if (var12 == 0) {
         // line number 139
         var14 = arg0;
         var15 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[8],var14));
         if (var15 == 0) {
          // line number 142
          var17 = arg0;
          var18 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[9],var17));
          if (var18 == 0) {
           // line number 145
           var20 = arg0;
           var21 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(bytecoder.stringconstants[10],var20));
           if (var21 == 0) {
            // line number 148
            var23 = new java$lang$RuntimeException();
            var24 = arg0;
            java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(var23,var24);
            throw bytecoder.registerStack(var23, new Error().stack);
           } else {
            // line number 146
            var22 = bytecoder.primitives.boolean;
            return var22;
           }
          } else {
           // line number 143
           var19 = bytecoder.primitives.long;
           return var19;
          }
         } else {
          // line number 140
          var16 = bytecoder.primitives.double;
          return var16;
         }
        } else {
         // line number 137
         var13 = bytecoder.primitives.float;
         return var13;
        }
       } else {
        // line number 134
        var10 = bytecoder.primitives.int;
        return var10;
       }
      } else {
       // line number 131
       var7 = bytecoder.primitives.short;
       return var7;
      }
     } else {
      // line number 128
      var4 = bytecoder.primitives.char;
      return var4;
     }
    } else {
     // line number 125
     var1 = bytecoder.primitives.byte;
     return var1;
    }
  }

  Z$desiredAssertionStatus$$() {
    return bytecoder.imports['java.lang.Class'].Z$desiredAssertionStatus$$(this);
  }

  $Ljava$lang$reflect$Type$$getGenericInterfaces$$() {
    // source file is Class.java
    var var0 = null;
    // line number 178
    var0 = bytecoder.newarray((0),null);
    return var0;
  }

  Ljava$lang$String$$getName$$() {
    return bytecoder.imports['java.lang.Class'].Ljava$lang$String$$getName$$(this);
  }

  V$$init$$$() {
    // source file is Class.java
    // line number 35
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  I$hashCode$$() {
    // source file is Class.java
    // line number 281
    return 42;
  }
}


class java$lang$Runnable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Runnable,[java$lang$Object,java$lang$Runnable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class kowi$cse_utils$Main extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(kowi$cse_utils$Main,[kowi$cse_utils$Main,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static V$main$$Ljava$lang$String$(arg0) {
    // source file is Main.java
    var var0 = null;
    // line number 5
    java$lang$System.$i;
    var0 = (java$lang$System.out);
    java$io$PrintStream.prototype.V$println$Ljava$lang$String$.call(var0,bytecoder.stringconstants[46]);
    // line number 6
    return;
  }

  V$$init$$$() {
    // source file is Main.java
    // line number 3
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$invoke$MethodHandle extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$invoke$MethodHandle,[java$lang$invoke$MethodHandle,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$invokeExact$$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    // source file is MethodHandle.java
    // line number 21
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$VM extends java$lang$Object {
  nativeObject = null;

  static SYSTEM_LOADER = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$VM,[de$mirkosertic$bytecoder$classlib$VM,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$String$$exceptionMessage$Ljava$lang$Exception$(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 75
    var0 = (arg0.Ljava$lang$String$$getMessage$$());
    return var0;
  }

  static Ljava$lang$String$$objectToString$Ljava$lang$Object$(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 80
    if (arg0 != null) {
     // line number 83
     var0 = (arg0.Ljava$lang$String$$toString$$());
     return var0;
    } else {
     // line number 81
     return bytecoder.stringconstants[0];
    }
  }

  static Z$nullsafeEquals$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is VM.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg1;
    // line number 88
    var1 = var0;
    if (arg0 != var1) {
     // line number 91
     if (arg0 == null) {
      // line number 94
      return 0;
     } else {
      // line number 92
      var2 = (arg0.Z$equals$Ljava$lang$Object$(var0));
      return var2;
     }
    } else {
     // line number 89
     return 1;
    }
  }

  static Ljava$lang$Byte$$toByte$B(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 99
    java$lang$Byte.$i;
    var0 = (java$lang$Byte.Ljava$lang$Byte$$valueOf$B(arg0));
    return var0;
  }

  static Ljava$lang$Short$$toShort$S(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 104
    java$lang$Short.$i;
    var0 = (java$lang$Short.Ljava$lang$Short$$valueOf$S(arg0));
    return var0;
  }

  static Ljava$lang$Integer$$toInteger$I(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 109
    java$lang$Integer.$i;
    var0 = (java$lang$Integer.Ljava$lang$Integer$$valueOf$I(arg0));
    return var0;
  }

  static Ljava$lang$Long$$toLong$J(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 114
    java$lang$Long.$i;
    var0 = (java$lang$Long.Ljava$lang$Long$$valueOf$J(arg0));
    return var0;
  }

  static Ljava$lang$Float$$toFloat$F(arg0) {
    // source file is VM.java
    var var0 = null;
    // line number 119
    java$lang$Float.$i;
    var0 = (java$lang$Float.Ljava$lang$Float$$valueOf$F(arg0));
    return var0;
  }

  static Ljava$lang$Double$$toDouble$F(arg0) {
    // source file is VM.java
    var var0 = .0;
    var var1 = null;
    // line number 124
    var0 = arg0;
    java$lang$Double.$i;
    var1 = (java$lang$Double.Ljava$lang$Double$$valueOf$D(var0));
    return var1;
  }

  static V$$clinit$$$() {
    // source file is VM.java
    var var0 = null;
    // line number 26
    var0 = new de$mirkosertic$bytecoder$classlib$VM$1();
    de$mirkosertic$bytecoder$classlib$VM$1.prototype.V$$init$$$.call(var0);
    de$mirkosertic$bytecoder$classlib$VM.$i;
    de$mirkosertic$bytecoder$classlib$VM.SYSTEM_LOADER = var0;
    return;
  }

  V$$init$$$() {
    // source file is VM.java
    // line number 24
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup extends java$lang$Object {
  nativeObject = null;

  name = null;
  parent = null;
  static SYSTEM = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup,[java$lang$Object,de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is TThreadGroup.java
    var var0 = null;
    // line number 23
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup();
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.prototype.V$$init$$$.call(var0);
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM = var0;
    return;
  }

  V$$init$$$() {
    // source file is TThreadGroup.java
    var var0 = null;
    var var1 = null;
    // line number 28
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 29
    var0 = this;
    var0.name = bytecoder.stringconstants[42];
    // line number 30
    var1 = this;
    var1.parent = null;
    // line number 31
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$TMath extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$java$lang$TMath,[java$lang$Object,de$mirkosertic$bytecoder$classlib$java$lang$TMath]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is TMath.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 21
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(de$mirkosertic$bytecoder$classlib$java$lang$TMath.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    de$mirkosertic$bytecoder$classlib$java$lang$TMath.$i;
    de$mirkosertic$bytecoder$classlib$java$lang$TMath.$assertionsDisabled = phi2;
    return;
  }

  V$$init$$$() {
    // source file is TMath.java
    // line number 22
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$charset$CharsetDecoder extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;
  static stateNames = null;
  malformedInputAction = null;
  unmappableCharacterAction = null;
  maxCharsPerByte = 0.0;
  state = 0;
  replacement = null;
  charset = null;
  averageCharsPerByte = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CharsetDecoder,[java$lang$Object,java$nio$charset$CharsetDecoder]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$ = impl;
  }

  static V$$clinit$$$() {
    // source file is CharsetDecoder.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    // line number 137
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$charset$CharsetDecoder.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$charset$CharsetDecoder.$i;
    java$nio$charset$CharsetDecoder.$assertionsDisabled = phi2;
    // line number 158
    var3 = bytecoder.newarray((4),null);
    var4 = (0) | 0;
    var3.data[var4] = bytecoder.stringconstants[19];
    var5 = (1) | 0;
    var3.data[var5] = bytecoder.stringconstants[20];
    var6 = (2) | 0;
    var3.data[var6] = bytecoder.stringconstants[21];
    var7 = (3) | 0;
    var3.data[var7] = bytecoder.stringconstants[22];
    java$nio$charset$CharsetDecoder.stateNames = var3;
    return;
  }

  Ljava$nio$charset$CharsetDecoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 381
    if (var0 != null) {
     // line number 383
     var3 = this;
     var3.malformedInputAction = var0;
     // line number 384
     var4 = var0;
     java$nio$charset$CharsetDecoder.prototype.V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(this,var4);
     // line number 385
     return this;
    } else {
     // line number 382
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[26];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implOnMalformedInput$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var0 = arg0;
    // line number 397
    return;
  }

  Ljava$nio$charset$CharsetDecoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 425
    if (var0 != null) {
     // line number 427
     var3 = this;
     var3.unmappableCharacterAction = var0;
     // line number 428
     var4 = var0;
     java$nio$charset$CharsetDecoder.prototype.V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(this,var4);
     // line number 429
     return this;
    } else {
     // line number 426
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[26];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implOnUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var0 = arg0;
    // line number 441
    return;
  }

  F$maxCharsPerByte$$() {
    // source file is CharsetDecoder.java
    var var0 = .0;
    // line number 471
    var0 = (this.maxCharsPerByte);
    return var0;
  }

  Ljava$nio$charset$CoderResult$$decode$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$$Z(arg0,arg1,arg2) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var phi16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = null;
    var var33 = 0;
    var var34 = null;
    var var35 = 0;
    var var36 = null;
    var phi37 = null;
    var var38 = null;
    var var39 = null;
    var var40 = 0;
    var var41 = null;
    var var42 = null;
    var phi43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = null;
    var var53 = 0;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = null;
    var var59 = null;
    var var60 = null;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = 0;
    var var66 = null;
    var var67 = 0;
    var var68 = 0;
    var var69 = null;
    var var70 = 0;
    var var71 = null;
    var var72 = null;
    var var73 = 0;
    var var74 = null;
    var var75 = null;
    var var76 = 0;
    var var77 = null;
    var var78 = null;
    var var79 = null;
    var phi80 = null;
    var var81 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 575
    If_11_0: {
     if (var1 == 0) {
      phi3 = this;
      phi4 = var0;
      phi5 = arg1;
      phi6 = var1;
      phi7 = (1) | 0;
      break If_11_0;
     } else {
      var2 = (2) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = var0;
      phi5 = arg1;
      phi6 = var1;
      phi7 = (var2) | 0;
      break If_11_0;
     }
    }
    var8 = (phi7) | 0;
    // line number 576
    var9 = phi3;
    var10 = ((var9.state)) | 0;
    If_34_0: {
     if (var10 == 0) {
      phi16 = (var8) | 0;
      break If_34_0;
     } else {
      var11 = phi3;
      var12 = ((var11.state)) | 0;
      if (var12 == 1) {
       phi16 = (var8) | 0;
       break If_34_0;
      } else {
       var13 = phi6;
       If_47_0: {
        if (var13 == 0) {
         phi16 = (var8) | 0;
         break If_47_0;
        } else {
         var14 = phi3;
         var15 = ((var14.state)) | 0;
         if (var15 == 2) {
          phi16 = (var8) | 0;
          break If_34_0;
         } else {
          phi16 = (var8) | 0;
          break If_47_0;
         }
        }
       }
       // line number 578
       var17 = phi3;
       var18 = phi3;
       var19 = ((var18.state)) | 0;
       var20 = (phi16) | 0;
       java$nio$charset$CharsetDecoder.prototype.V$throwIllegalStateException$I$I.call(var17,var19,var20);
       break If_34_0;
      }
     }
    }
    // line number 579
    var21 = phi3;
    var22 = (phi16) | 0;
    var21.state = var22;
    TryCatch_80: while(true) {
     TryCatch_80_0: {
      try {
       // line number 585
       var25 = phi3;
       var26 = phi4;
       var27 = phi5;
       var28 = (var25.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$(var26,var27));
       break TryCatch_80_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$RuntimeException) {
        // line number 586
        // line number 587
        var23 = new java$nio$charset$CoderMalfunctionError();
        var24 = __ex;
        java$nio$charset$CoderMalfunctionError.prototype.V$$init$$Ljava$lang$Exception$.call(var23,var24);
        throw bytecoder.registerStack(var23, new Error().stack);
       }
       throw __ex;
      }
     }
     // line number 588
     // Here was a goto statement
     // line number 590
     var29 = (java$nio$charset$CoderResult.prototype.Z$isOverflow$$.call(var28));
     if (var29 == 0) {
      // line number 593
      var30 = (java$nio$charset$CoderResult.prototype.Z$isUnderflow$$.call(var28));
      If_128_0: {
       if (var30 == 0) {
        phi37 = var28;
        break If_128_0;
       } else {
        // line number 594
        var31 = phi6;
        If_135_0: {
         if (var31 == 0) {
          phi80 = var28;
          break If_135_0;
         } else {
          var32 = phi4;
          var33 = (var32.Z$hasRemaining$$());
          if (var33 == 0) {
           phi80 = var28;
           break If_135_0;
          } else {
           // line number 595
           var34 = phi4;
           var35 = ((var34.I$remaining$$())) | 0;
           java$nio$charset$CoderResult.$i;
           var36 = (java$nio$charset$CoderResult.Ljava$nio$charset$CoderResult$$malformedForLength$I(var35));
           // Here was a goto statement
           phi37 = var36;
           break If_128_0;
          }
         }
        }
        // line number 598
        var81 = phi80;
        return var81;
       }
      }
      // line number 602
      var38 = null;
      // line number 603
      var39 = phi37;
      var40 = (java$nio$charset$CoderResult.prototype.Z$isMalformed$$.call(var39));
      If_173_0: {
       if (var40 == 0) {
        // line number 605
        var72 = phi37;
        var73 = (java$nio$charset$CoderResult.prototype.Z$isUnmappable$$.call(var72));
        if (var73 == 0) {
         // line number 608
         java$nio$charset$CharsetDecoder.$i;
         var76 = (java$nio$charset$CharsetDecoder.$assertionsDisabled);
         if (var76 != 0) {
          phi43 = var38;
          break If_173_0;
         } else {
          var77 = new java$lang$AssertionError();
          var78 = phi37;
          var79 = (java$nio$charset$CoderResult.prototype.Ljava$lang$String$$toString$$.call(var78));
          java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var77,var79);
          throw bytecoder.registerStack(var77, new Error().stack);
         }
        } else {
         // line number 606
         var74 = phi3;
         var75 = (var74.unmappableCharacterAction);
         // Here was a goto statement
         phi43 = var75;
         break If_173_0;
        }
       } else {
        // line number 604
        var41 = phi3;
        var42 = (var41.malformedInputAction);
        // Here was a goto statement
        phi43 = var42;
        break If_173_0;
       }
      }
      // line number 610
      var44 = phi43;
      java$nio$charset$CodingErrorAction.$i;
      var45 = (java$nio$charset$CodingErrorAction.REPORT);
      if (var44 != var45) {
       // line number 613
       var47 = phi43;
       var48 = (java$nio$charset$CodingErrorAction.REPLACE);
       If_211_0: {
        if (var47 != var48) {
         break If_211_0;
        } else {
         // line number 614
         var49 = phi5;
         var50 = ((var49.I$remaining$$())) | 0;
         var51 = phi3;
         var52 = (var51.replacement);
         var53 = ((java$lang$String.prototype.I$length$$.call(var52))) | 0;
         if (var50 >= var53) {
          // line number 616
          var55 = phi5;
          var56 = phi3;
          var57 = (var56.replacement);
          var58 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$put$Ljava$lang$String$.call(var55,var57));
          break If_211_0;
         } else {
          // line number 615
          java$nio$charset$CoderResult.$i;
          var54 = (java$nio$charset$CoderResult.OVERFLOW);
          return var54;
         }
        }
       }
       // line number 619
       var59 = phi43;
       var60 = (java$nio$charset$CodingErrorAction.IGNORE);
       If_259_0: {
        if (var59 == var60) {
         break If_259_0;
        } else {
         var61 = phi43;
         var62 = (java$nio$charset$CodingErrorAction.REPLACE);
         if (var61 != var62) {
          // line number 626
          java$nio$charset$CharsetDecoder.$i;
          var70 = (java$nio$charset$CharsetDecoder.$assertionsDisabled);
          if (var70 != 0) {
           // line number 627
           // Here was a goto statement
           continue TryCatch_80;
          } else {
           var71 = new java$lang$AssertionError();
           java$lang$AssertionError.prototype.V$$init$$$.call(var71);
           throw bytecoder.registerStack(var71, new Error().stack);
          }
         } else {
          break If_259_0;
         }
        }
       }
       // line number 622
       var63 = phi4;
       var64 = phi4;
       var65 = ((var64.I$position$$())) | 0;
       var66 = phi37;
       var67 = ((java$nio$charset$CoderResult.prototype.I$length$$.call(var66))) | 0;
       var68 = ((var65 + var67)) | 0;
       var69 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(var63,var68));
       // line number 623
       // Here was a goto statement
       continue TryCatch_80;
      } else {
       // line number 611
       var46 = phi37;
       return var46;
      }
     } else {
      // line number 591
      return var28;
     }
    }
  }

  V$throwIllegalStateException$I$I(arg0,arg1) {
    // source file is CharsetDecoder.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var0 = (arg0) | 0;
    // line number 996
    var1 = new java$lang$IllegalStateException();
    var2 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[77]));
    java$nio$charset$CharsetDecoder.$i;
    var4 = (java$nio$charset$CharsetDecoder.stateNames);
    var5 = (var4.data[var0]);
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,var5));
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[78]));
    var8 = (java$nio$charset$CharsetDecoder.stateNames);
    var9 = (var8.data[arg1]);
    var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var7,var9));
    var11 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var10));
    java$lang$IllegalStateException.prototype.V$$init$$Ljava$lang$String$.call(var1,var11);
    throw bytecoder.registerStack(var1, new Error().stack);
  }

  Ljava$nio$charset$CharsetDecoder$$reset$$() {
    // source file is CharsetDecoder.java
    var var0 = null;
    // line number 713
    java$nio$charset$CharsetDecoder.prototype.V$implReset$$.call(this);
    // line number 714
    var0 = this;
    var0.state = 0;
    // line number 715
    return this;
  }

  V$implReset$$() {
    // source file is CharsetDecoder.java
    // line number 724
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F(arg0,arg1,arg2) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = .0;
    var var2 = null;
    var var3 = .0;
    var0 = arg0;
    var1 = arg2;
    // line number 233
    var2 = var0;
    var3 = var1;
    java$nio$charset$CharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F$Ljava$lang$String$.call(this,var2,arg1,var3,bytecoder.stringconstants[84]);
    // line number 236
    return;
  }

  V$$init$$Ljava$nio$charset$Charset$$F$F$Ljava$lang$String$(arg0,arg1,arg2,arg3) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = .0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = .0;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = .0;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 190
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 144
    var2 = this;
    java$nio$charset$CodingErrorAction.$i;
    var3 = (java$nio$charset$CodingErrorAction.REPORT);
    var2.malformedInputAction = var3;
    // line number 146
    var4 = this;
    var5 = (java$nio$charset$CodingErrorAction.REPORT);
    var4.unmappableCharacterAction = var5;
    // line number 156
    var6 = this;
    var6.state = 0;
    // line number 191
    var7 = this;
    var7.charset = var0;
    // line number 193
    var8 = 0.0;
    var9 = (bytecoder.cmp(arg1,var8)) | 0;
    if (var9 > 0) {
     // line number 197
     var12 = 0.0;
     var13 = (bytecoder.cmp(var1,var12)) | 0;
     if (var13 > 0) {
      // line number 200
      var16 = (bytecoder.cmp(arg1,var1)) | 0;
      if (var16 <= 0) {
       // line number 204
       var19 = this;
       var19.replacement = arg3;
       // line number 205
       var20 = this;
       var20.averageCharsPerByte = arg1;
       // line number 206
       var21 = this;
       var21.maxCharsPerByte = var1;
       // line number 207
       var22 = arg3;
       var23 = (java$nio$charset$CharsetDecoder.prototype.Ljava$nio$charset$CharsetDecoder$$replaceWith$Ljava$lang$String$.call(this,var22));
       // line number 208
       return;
      } else {
       // line number 201
       var17 = new java$lang$IllegalArgumentException();
       var18 = bytecoder.stringconstants[87];
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var17,var18);
       throw bytecoder.registerStack(var17, new Error().stack);
      }
     } else {
      // line number 198
      var14 = new java$lang$IllegalArgumentException();
      var15 = bytecoder.stringconstants[86];
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var14,var15);
      throw bytecoder.registerStack(var14, new Error().stack);
     }
    } else {
     // line number 194
     var10 = new java$lang$IllegalArgumentException();
     var11 = bytecoder.stringconstants[85];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var10,var11);
     throw bytecoder.registerStack(var10, new Error().stack);
    }
  }

  Ljava$nio$charset$CharsetDecoder$$replaceWith$Ljava$lang$String$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = .0;
    var var6 = .0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var0 = arg0;
    // line number 287
    if (var0 != null) {
     // line number 289
     var3 = ((java$lang$String.prototype.I$length$$.call(var0))) | 0;
     // line number 290
     if (var3 != 0) {
      // line number 292
      var5 = var3;
      var6 = (this.maxCharsPerByte);
      var7 = (bytecoder.cmp(var5,var6)) | 0;
      if (var7 <= 0) {
       // line number 295
       var9 = this;
       var9.replacement = var0;
       // line number 302
       var10 = this;
       var11 = (var10.replacement);
       java$nio$charset$CharsetDecoder.prototype.V$implReplaceWith$Ljava$lang$String$.call(this,var11);
       // line number 303
       return this;
      } else {
       // line number 293
       var8 = new java$lang$IllegalArgumentException();
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var8,bytecoder.stringconstants[72]);
       throw bytecoder.registerStack(var8, new Error().stack);
      }
     } else {
      // line number 291
      var4 = new java$lang$IllegalArgumentException();
      java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var4,bytecoder.stringconstants[71]);
      throw bytecoder.registerStack(var4, new Error().stack);
     }
    } else {
     // line number 288
     var1 = new java$lang$IllegalArgumentException();
     var2 = bytecoder.stringconstants[70];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implReplaceWith$Ljava$lang$String$(arg0) {
    // source file is CharsetDecoder.java
    var var0 = null;
    var0 = arg0;
    // line number 316
    return;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    // source file is CharsetDecoder.java
    var var0 = null;
    // line number 244
    var0 = (this.charset);
    return var0;
  }
}


class java$util$function$Function extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$function$Function,[java$lang$Object,java$util$function$Function]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }
}


class java$lang$Comparable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Comparable,[java$lang$Object,java$lang$Comparable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$compareTo$Ljava$lang$Object$ = impl;
  }
}


class jdk$internal$access$SharedSecrets extends java$lang$Object {
  nativeObject = null;

  static javaIOPrintStreamAccess = null;
  static javaNioAccess = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$access$SharedSecrets,[jdk$internal$access$SharedSecrets,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static V$setJavaIOCPrintStreamAccess$Ljdk$internal$access$JavaIOPrintStreamAccess$(arg0) {
    // source file is SharedSecrets.java
    // line number 297
    jdk$internal$access$SharedSecrets.javaIOPrintStreamAccess = arg0;
    // line number 298
    return;
  }

  static V$setJavaNioAccess$Ljdk$internal$access$JavaNioAccess$(arg0) {
    // source file is SharedSecrets.java
    // line number 256
    jdk$internal$access$SharedSecrets.javaNioAccess = arg0;
    // line number 257
    return;
  }

  V$$init$$$() {
    // source file is SharedSecrets.java
    // line number 57
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$Array extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$Array,[de$mirkosertic$bytecoder$classlib$Array,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static $Ljava$lang$Object$$newObjectArray$I(arg0) {
    // source file is Array.java
    var var0 = null;
    // line number 101
    var0 = bytecoder.newarray((arg0),null);
    return var0;
  }

  static $C$newCharArray$I(arg0) {
    // source file is Array.java
    var var0 = null;
    // line number 106
    var0 = bytecoder.newarray((arg0),0);
    return var0;
  }

  static I$charArrayLength$$C(arg0) {
    // source file is Array.java
    var var0 = 0;
    // line number 111
    var0 = (arg0.data.length) | 0;
    return var0;
  }

  static C$getCharArrayEntry$$C$I(arg0,arg1) {
    // source file is Array.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = (arg1) | 0;
    // line number 116
    var1 = (var0) | 0;
    var2 = (arg0.data[var1]);
    return var2;
  }

  static V$setCharArrayEntry$$C$I$C(arg0,arg1,arg2) {
    // source file is Array.java
    var var0 = 0;
    var var1 = 0;
    var0 = (arg1) | 0;
    // line number 121
    var1 = (var0) | 0;
    arg0.data[var1] = arg2;
    // line number 122
    return;
  }

  static $B$newByteArray$I(arg0) {
    // source file is Array.java
    var var0 = null;
    // line number 126
    var0 = bytecoder.newarray((arg0),0);
    return var0;
  }

  static I$byteArrayLength$$B(arg0) {
    // source file is Array.java
    var var0 = 0;
    // line number 131
    var0 = (arg0.data.length) | 0;
    return var0;
  }

  static B$getByteArrayEntry$$B$I(arg0,arg1) {
    // source file is Array.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = (arg1) | 0;
    // line number 136
    var1 = (var0) | 0;
    var2 = (arg0.data[var1]);
    return var2;
  }

  static V$setByteArrayEntry$$B$I$B(arg0,arg1,arg2) {
    // source file is Array.java
    var var0 = 0;
    var var1 = 0;
    var0 = (arg1) | 0;
    // line number 141
    var1 = (var0) | 0;
    arg0.data[var1] = arg2;
    // line number 142
    return;
  }

  static I$getIntArrayEntry$$I$I(arg0,arg1) {
    // source file is Array.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = (arg1) | 0;
    // line number 146
    var1 = (var0) | 0;
    var2 = ((arg0.data[var1])) | 0;
    return var2;
  }

  V$$init$$$() {
    // source file is Array.java
    // line number 20
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class jdk$internal$misc$CDS extends java$lang$Object {
  nativeObject = null;

  static isDumpingClassList = false;
  static isDumpingArchive = false;
  static isSharingEnabled = false;
  static excludeFlags = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$CDS,[jdk$internal$misc$CDS,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is CDS.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    // line number 48
    jdk$internal$misc$CDS.$i;
    var0 = (jdk$internal$misc$CDS.Z$isDumpingClassList0$$());
    jdk$internal$misc$CDS.isDumpingClassList = var0;
    // line number 49
    var1 = (jdk$internal$misc$CDS.Z$isDumpingArchive0$$());
    jdk$internal$misc$CDS.isDumpingArchive = var1;
    // line number 50
    var2 = (jdk$internal$misc$CDS.Z$isSharingEnabled0$$());
    jdk$internal$misc$CDS.isSharingEnabled = var2;
    // line number 232
    var3 = bytecoder.newarray((6),null);
    var4 = (0) | 0;
    var3.data[var4] = bytecoder.stringconstants[50];
    var5 = (1) | 0;
    var3.data[var5] = bytecoder.stringconstants[51];
    var6 = (2) | 0;
    var3.data[var6] = bytecoder.stringconstants[52];
    var7 = (3) | 0;
    var3.data[var7] = bytecoder.stringconstants[53];
    var8 = (4) | 0;
    var3.data[var8] = bytecoder.stringconstants[54];
    var9 = (5) | 0;
    var3.data[var9] = bytecoder.stringconstants[55];
    jdk$internal$misc$CDS.excludeFlags = var3;
    return;
  }

  static Z$isDumpingClassList0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isDumpingClassList0$$();
  }

  static Z$isDumpingArchive0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isDumpingArchive0$$();
  }

  static Z$isSharingEnabled0$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].Z$isSharingEnabled0$$();
  }

  static J$getRandomSeedForDumping$$() {
    return bytecoder.imports['jdk.internal.misc.CDS'].J$getRandomSeedForDumping$$();
  }

  static V$initializeFromArchive$Ljava$lang$Class$(arg0) {
    bytecoder.imports['jdk.internal.misc.CDS'].V$initializeFromArchive$Ljava$lang$Class$(arg0);
  }

  V$$init$$$() {
    // source file is CDS.java
    // line number 43
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$util$Dictionary extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Dictionary,[java$util$Dictionary,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is Dictionary.java
    // line number 57
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 58
    return;
  }
}


class java$util$Collections extends java$lang$Object {
  nativeObject = null;

  static EMPTY_SET = null;
  static EMPTY_LIST = null;
  static EMPTY_MAP = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections,[java$util$Collections,java$lang$Object]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 4403
    var0 = new java$util$Collections$EmptySet();
    java$util$Collections$EmptySet.prototype.V$$init$$$.call(var0);
    java$util$Collections.$i;
    java$util$Collections.EMPTY_SET = var0;
    // line number 4529
    var1 = new java$util$Collections$EmptyList();
    java$util$Collections$EmptyList.prototype.V$$init$$$.call(var1);
    java$util$Collections.EMPTY_LIST = var1;
    // line number 4633
    var2 = new java$util$Collections$EmptyMap();
    java$util$Collections$EmptyMap.prototype.V$$init$$$.call(var2);
    java$util$Collections.EMPTY_MAP = var2;
    return;
  }

  static Ljava$util$Set$$synchronizedSet$Ljava$util$Set$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg1;
    // line number 2188
    var1 = new java$util$Collections$SynchronizedSet();
    var2 = arg0;
    java$util$Collections$SynchronizedSet.prototype.V$$init$$Ljava$util$Set$$Ljava$lang$Object$.call(var1,var2,var0);
    return var1;
  }

  static Ljava$util$Iterator$$emptyIterator$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4304
    java$util$Collections$EmptyIterator.$i;
    var0 = (java$util$Collections$EmptyIterator.EMPTY_ITERATOR);
    return var0;
  }

  static Ljava$util$Set$$emptySet$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4426
    java$util$Collections.$i;
    var0 = (java$util$Collections.EMPTY_SET);
    return var0;
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 86
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 87
    return;
  }

  static Ljava$util$ListIterator$$emptyListIterator$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4348
    java$util$Collections$EmptyListIterator.$i;
    var0 = (java$util$Collections$EmptyListIterator.EMPTY_ITERATOR);
    return var0;
  }
}


class jdk$internal$misc$InternalLock extends java$lang$Object {
  nativeObject = null;

  static CAN_USE_INTERNAL_LOCK = false;
  lock = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$InternalLock,[java$lang$Object,jdk$internal$misc$InternalLock]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is InternalLock.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var phi5 = null;
    var phi6 = null;
    // line number 41
    java$lang$System.$i;
    var0 = (java$lang$System.Ljava$lang$String$$getProperty$Ljava$lang$String$(bytecoder.stringconstants[17]));
    // line number 42
    If_11_0: {
     If_11_1: {
      if (var0 == null) {
       phi6 = var0;
       break If_11_1;
      } else {
       var1 = var0;
       var2 = (var1.Z$isEmpty$$());
       If_18_0: {
        if (var2 != 0) {
         phi5 = var0;
         break If_18_0;
        } else {
         var3 = var0;
         var4 = (java$lang$String.prototype.Z$equals$Ljava$lang$Object$.call(var3,bytecoder.stringconstants[18]));
         if (var4 == 0) {
          phi6 = var0;
          break If_11_1;
         } else {
          phi5 = var0;
          break If_18_0;
         }
        }
       }
       // line number 43
       jdk$internal$misc$InternalLock.$i;
       jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK = 0;
       // Here was a goto statement
       break If_11_0;
      }
     }
     // line number 45
     jdk$internal$misc$InternalLock.$i;
     jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK = 1;
     phi5 = phi6;
     break If_11_0;
    }
    // line number 47
    return;
  }

  static Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(arg0) {
    // source file is InternalLock.java
    var var0 = 0;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    // line number 66
    jdk$internal$misc$InternalLock.$i;
    var0 = (jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK);
    If_9_0: {
     if (var0 == 0) {
      phi2 = arg0;
      phi3 = arg0;
      break If_9_0;
     } else {
      var1 = new jdk$internal$misc$InternalLock();
      jdk$internal$misc$InternalLock.prototype.V$$init$$$.call(var1);
      // Here was a goto statement
      phi2 = arg0;
      phi3 = var1;
      break If_9_0;
     }
    }
    return phi3;
  }

  V$$init$$$() {
    // source file is InternalLock.java
    var var0 = null;
    var var1 = null;
    // line number 51
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 52
    var0 = this;
    var1 = new java$util$concurrent$locks$ReentrantLock();
    java$util$concurrent$locks$ReentrantLock.prototype.V$$init$$$.call(var1);
    var0.lock = var1;
    // line number 53
    return;
  }

  static Ljdk$internal$misc$InternalLock$$newLockOrNull$$() {
    // source file is InternalLock.java
    var var0 = 0;
    var var1 = null;
    var phi2 = null;
    // line number 59
    jdk$internal$misc$InternalLock.$i;
    var0 = (jdk$internal$misc$InternalLock.CAN_USE_INTERNAL_LOCK);
    If_8_0: {
     if (var0 == 0) {
      phi2 = null;
      break If_8_0;
     } else {
      var1 = new jdk$internal$misc$InternalLock();
      jdk$internal$misc$InternalLock.prototype.V$$init$$$.call(var1);
      // Here was a goto statement
      phi2 = var1;
      break If_8_0;
     }
    }
    return phi2;
  }

  V$lock$$() {
    // source file is InternalLock.java
    var var0 = null;
    // line number 74
    var0 = (this.lock);
    java$util$concurrent$locks$ReentrantLock.prototype.V$lock$$.call(var0);
    // line number 75
    return;
  }

  V$unlock$$() {
    // source file is InternalLock.java
    var var0 = null;
    // line number 78
    var0 = (this.lock);
    java$util$concurrent$locks$ReentrantLock.prototype.V$unlock$$.call(var0);
    // line number 79
    return;
  }
}


class java$util$Arrays extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Arrays,[java$lang$Object,java$util$Arrays]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Arrays.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 75
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$util$Arrays.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$util$Arrays.$i;
    java$util$Arrays.$assertionsDisabled = phi2;
    return;
  }

  static $B$copyOf$$B$I(arg0,arg1) {
    // source file is Arrays.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var0 = (arg1) | 0;
    // line number 82
    var1 = bytecoder.newarray((var0),0);
    // line number 83
    var2 = (0) | 0;
    phi3 = arg0;
    phi4 = (var0) | 0;
    phi5 = var1;
    phi6 = (var2) | 0;
    L115804257: while(true) {
     var7 = (phi6) | 0;
     var8 = (phi4) | 0;
     var9 = phi3;
     var10 = (var9.data.length) | 0;
     java$lang$Math.$i;
     var11 = ((java$lang$Math.I$min$I$I(var8,var10))) | 0;
     if (var7 >= var11) {
      // line number 86
      var17 = phi5;
      return var17;
     } else {
      // line number 84
      var12 = phi5;
      var13 = (phi6) | 0;
      var14 = phi3;
      var15 = (phi6) | 0;
      var16 = (var14.data[var15]);
      var12.data[var13] = var16;
      // line number 83
      phi6 = ((phi6 + 1)) | 0;
      // Here was a goto statement
      continue L115804257;
     }
    }
  }

  static $C$copyOf$$C$I(arg0,arg1) {
    // source file is Arrays.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var0 = (arg1) | 0;
    // line number 106
    var1 = bytecoder.newarray((var0),0);
    // line number 107
    var2 = (0) | 0;
    phi3 = arg0;
    phi4 = (var0) | 0;
    phi5 = var1;
    phi6 = (var2) | 0;
    L1605828024: while(true) {
     var7 = (phi6) | 0;
     var8 = (phi4) | 0;
     var9 = phi3;
     var10 = (var9.data.length) | 0;
     java$lang$Math.$i;
     var11 = ((java$lang$Math.I$min$I$I(var8,var10))) | 0;
     if (var7 >= var11) {
      // line number 110
      var17 = phi5;
      return var17;
     } else {
      // line number 108
      var12 = phi5;
      var13 = (phi6) | 0;
      var14 = phi3;
      var15 = (phi6) | 0;
      var16 = (var14.data[var15]);
      var12.data[var13] = var16;
      // line number 107
      phi6 = ((phi6 + 1)) | 0;
      // Here was a goto statement
      continue L1605828024;
     }
    }
  }

  V$$init$$$() {
    // source file is Arrays.java
    // line number 78
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$Iterable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Iterable,[java$lang$Iterable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class jdk$internal$access$JavaNioAccess extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$access$JavaNioAccess,[java$lang$Object,jdk$internal$access$JavaNioAccess]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$ImmutableCollections extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;
  static SALT32L = 0;
  static REVERSE = false;
  static archivedObjects = null;
  static EMPTY = null;
  static EMPTY_LIST = null;
  static EMPTY_LIST_NULLS = null;
  static EMPTY_SET = null;
  static EMPTY_MAP = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections,[java$lang$Object,java$util$ImmutableCollections]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    var phi8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var phi20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var var25 = null;
    var var26 = null;
    var var27 = 0;
    var var28 = null;
    var var29 = null;
    var var30 = 0;
    var var31 = null;
    var var32 = null;
    var var33 = 0;
    var var34 = null;
    var var35 = null;
    var var36 = 0;
    var var37 = null;
    var var38 = 0;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = null;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    // line number 51
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$util$ImmutableCollections.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$util$ImmutableCollections.$i;
    java$util$ImmutableCollections.$assertionsDisabled = phi2;
    // line number 74
    // line number 80
    jdk$internal$misc$CDS.$i;
    var3 = (jdk$internal$misc$CDS.J$getRandomSeedForDumping$$());
    // line number 81
    var4 = 0;
    var5 = (bytecoder.cmp(var3,var4)) | 0;
    If_38_0: {
     if (var5 != 0) {
      phi7 = 2611923443488327891;
      phi8 = var3;
      break If_38_0;
     } else {
      // line number 82
      java$lang$System.$i;
      var6 = (java$lang$System.J$nanoTime$$());
      phi7 = 2611923443488327891;
      phi8 = var6;
      break If_38_0;
     }
    }
    // line number 84
    var9 = phi7;
    var10 = phi8;
    var11 = (var9 * var10);
    var12 = (var11 >> 16);
    var13 = ((var12 | 0)) | 0;
    var14 = (var13 | 0);
    var15 = (var14 & 4294967295);
    java$util$ImmutableCollections.SALT32L = var15;
    // line number 86
    var16 = (java$util$ImmutableCollections.SALT32L);
    var17 = (var16 & 1);
    var18 = (bytecoder.cmp(var17,0)) | 0;
    If_90_0: {
     if (var18 != 0) {
      phi20 = (0) | 0;
      break If_90_0;
     } else {
      var19 = (1) | 0;
      // Here was a goto statement
      phi20 = (var19) | 0;
      break If_90_0;
     }
    }
    java$util$ImmutableCollections.REVERSE = phi20;
    // line number 102
    jdk$internal$misc$CDS.V$initializeFromArchive$Ljava$lang$Class$(java$util$ImmutableCollections.$rt);
    // line number 103
    var21 = (java$util$ImmutableCollections.archivedObjects);
    If_113_0: {
     if (var21 != null) {
      // line number 112
      var43 = (java$util$ImmutableCollections.archivedObjects);
      var44 = (var43.data[0]);
      java$util$ImmutableCollections.EMPTY = var44;
      // line number 113
      var45 = (java$util$ImmutableCollections.archivedObjects);
      var46 = (var45.data[1]);
      var47 = var46;
      java$util$ImmutableCollections.EMPTY_LIST = var47;
      // line number 114
      var48 = (java$util$ImmutableCollections.archivedObjects);
      var49 = (var48.data[2]);
      var50 = var49;
      java$util$ImmutableCollections.EMPTY_LIST_NULLS = var50;
      // line number 115
      var51 = (java$util$ImmutableCollections.archivedObjects);
      var52 = (var51.data[3]);
      var53 = var52;
      java$util$ImmutableCollections.EMPTY_SET = var53;
      // line number 116
      var54 = (java$util$ImmutableCollections.archivedObjects);
      var55 = (var54.data[4]);
      var56 = var55;
      java$util$ImmutableCollections.EMPTY_MAP = var56;
      break If_113_0;
     } else {
      // line number 104
      var22 = new java$lang$Object();
      java$lang$Object.prototype.V$$init$$$.call(var22);
      java$util$ImmutableCollections.EMPTY = var22;
      // line number 105
      var23 = new java$util$ImmutableCollections$ListN();
      var24 = (0) | 0;
      var25 = bytecoder.newarray((var24),null);
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var23,var25,0);
      java$util$ImmutableCollections.EMPTY_LIST = var23;
      // line number 106
      var26 = new java$util$ImmutableCollections$ListN();
      var27 = (0) | 0;
      var28 = bytecoder.newarray((var27),null);
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var26,var28,1);
      java$util$ImmutableCollections.EMPTY_LIST_NULLS = var26;
      // line number 107
      var29 = new java$util$ImmutableCollections$SetN();
      var30 = (0) | 0;
      var31 = bytecoder.newarray((var30),null);
      java$util$ImmutableCollections$SetN.prototype.V$$init$$$Ljava$lang$Object$.call(var29,var31);
      java$util$ImmutableCollections.EMPTY_SET = var29;
      // line number 108
      var32 = new java$util$ImmutableCollections$MapN();
      var33 = (0) | 0;
      var34 = bytecoder.newarray((var33),null);
      java$util$ImmutableCollections$MapN.prototype.V$$init$$$Ljava$lang$Object$.call(var32,var34);
      java$util$ImmutableCollections.EMPTY_MAP = var32;
      // line number 109
      var35 = bytecoder.newarray((5),null);
      var36 = (0) | 0;
      var37 = (java$util$ImmutableCollections.EMPTY);
      var35.data[var36] = var37;
      var38 = (1) | 0;
      var39 = (java$util$ImmutableCollections.EMPTY_LIST);
      var35.data[var38] = var39;
      var40 = (java$util$ImmutableCollections.EMPTY_LIST_NULLS);
      var35.data[2] = var40;
      var41 = (java$util$ImmutableCollections.EMPTY_SET);
      var35.data[3] = var41;
      var42 = (java$util$ImmutableCollections.EMPTY_MAP);
      var35.data[4] = var42;
      java$util$ImmutableCollections.archivedObjects = var35;
      // Here was a goto statement
      break If_113_0;
     }
    }
    // line number 118
    return;
  }

  static Ljava$util$List$$listFromArray$$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = 0;
    var var6 = 0;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    // line number 188
    var0 = (arg0.data.length) | 0;
    var1 = bytecoder.newarray((var0),null);
    // line number 189
    var2 = (0) | 0;
    phi3 = arg0;
    phi4 = var1;
    phi5 = (var2) | 0;
    L6565574: while(true) {
     var6 = (phi5) | 0;
     var7 = phi3;
     var8 = (var7.data.length) | 0;
     if (var6 >= var8) {
      // line number 192
      var15 = new java$util$ImmutableCollections$ListN();
      var16 = phi4;
      java$util$ImmutableCollections$ListN.prototype.V$$init$$$Ljava$lang$Object$$Z.call(var15,var16,0);
      return var15;
     } else {
      // line number 190
      var9 = phi4;
      var10 = (phi5) | 0;
      var11 = phi3;
      var12 = (phi5) | 0;
      var13 = (var11.data[var12]);
      var14 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var13));
      var9.data[var10] = var14;
      // line number 189
      phi5 = ((phi5 + 1)) | 0;
      // Here was a goto statement
      continue L6565574;
     }
    }
  }

  static Ljava$lang$UnsupportedOperationException$$uoe$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    // line number 142
    var0 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var0);
    return var0;
  }

  V$$init$$$() {
    // source file is ImmutableCollections.java
    // line number 134
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference extends java$lang$Object {
  nativeObject = null;

  referent = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference,[de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    // source file is TReference.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 30
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 31
    var1 = this;
    var1.referent = var0;
    // line number 32
    return;
  }
}


class java$nio$Buffer extends java$lang$Object {
  nativeObject = null;

  static $assertionsDisabled = false;
  static UNSAFE = null;
  static SCOPED_MEMORY_ACCESS = null;
  mark = 0;
  position = 0;
  capacity = 0;
  segment = null;
  limit = 0;
  address = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$Buffer,[java$lang$Object,java$nio$Buffer]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Z$isReadOnly$$ = impl;
  }

  static V$$clinit$$$() {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    // line number 197
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$Buffer.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$Buffer.$i;
    java$nio$Buffer.$assertionsDisabled = phi2;
    // line number 201
    jdk$internal$misc$Unsafe.$i;
    var3 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    java$nio$Buffer.UNSAFE = var3;
    // line number 203
    jdk$internal$misc$ScopedMemoryAccess.$i;
    var4 = (jdk$internal$misc$ScopedMemoryAccess.Ljdk$internal$misc$ScopedMemoryAccess$$getScopedMemoryAccess$$());
    java$nio$Buffer.SCOPED_MEMORY_ACCESS = var4;
    // line number 781
    var5 = new java$nio$Buffer$1();
    java$nio$Buffer$1.prototype.V$$init$$$.call(var5);
    jdk$internal$access$SharedSecrets.V$setJavaNioAccess$Ljdk$internal$access$JavaNioAccess$(var5);
    // line number 894
    return;
  }

  static Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    // line number 283
    java$nio$Buffer.$i;
    var0 = (java$nio$Buffer.$assertionsDisabled);
    If_9_0: {
     if (var0 != 0) {
      phi4 = (arg0) | 0;
      break If_9_0;
     } else {
      var1 = (arg0) | 0;
      if (var1 < 0) {
       phi4 = (arg0) | 0;
       break If_9_0;
      } else {
       var2 = new java$lang$AssertionError();
       var3 = bytecoder.stringconstants[27];
       java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var2,var3);
       throw bytecoder.registerStack(var2, new Error().stack);
      }
     }
    }
    // line number 284
    var5 = new java$lang$IllegalArgumentException();
    var6 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var6);
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[28]));
    var8 = (phi4) | 0;
    var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var7,var8));
    var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[29]));
    var11 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var10));
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var5,var11);
    return var5;
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var phi21 = null;
    var phi22 = 0;
    var phi23 = 0;
    var phi24 = 0;
    var phi25 = 0;
    var phi26 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    var2 = arg4;
    // line number 245
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 213
    var3 = this;
    var3.mark = -1;
    // line number 214
    var4 = this;
    var4.position = 0;
    // line number 246
    if (arg3 >= 0) {
     // line number 248
     var6 = this;
     var6.capacity = arg3;
     // line number 249
     var7 = this;
     var7.segment = var2;
     // line number 250
     var8 = (this.Ljava$nio$Buffer$$limit$I(var1));
     // line number 251
     var9 = (arg1) | 0;
     var10 = (this.Ljava$nio$Buffer$$position$I(var9));
     // line number 252
     If_66_0: {
      if (var0 < 0) {
       phi21 = this;
       phi22 = (var0) | 0;
       phi23 = (arg1) | 0;
       phi24 = (var1) | 0;
       phi25 = (arg3) | 0;
       phi26 = var2;
       break If_66_0;
      } else {
       // line number 253
       var11 = (arg1) | 0;
       if (var0 <= var11) {
        // line number 256
        var20 = this;
        var20.mark = var0;
        phi21 = this;
        phi22 = (var0) | 0;
        phi23 = (arg1) | 0;
        phi24 = (var1) | 0;
        phi25 = (arg3) | 0;
        phi26 = var2;
        break If_66_0;
       } else {
        // line number 254
        var12 = new java$lang$IllegalArgumentException();
        var13 = new java$lang$StringBuilder();
        java$lang$StringBuilder.prototype.V$$init$$$.call(var13);
        var14 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var13,bytecoder.stringconstants[38]));
        var15 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var14,var0));
        var16 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var15,bytecoder.stringconstants[31]));
        var17 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var16,arg1));
        var18 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var17,bytecoder.stringconstants[32]));
        var19 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var18));
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var12,var19);
        throw bytecoder.registerStack(var12, new Error().stack);
       }
      }
     }
     // line number 258
     return;
    } else {
     // line number 247
     java$nio$Buffer.$i;
     var5 = (java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg3));
     throw bytecoder.registerStack(var5, new Error().stack);
    }
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var phi9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = 0;
    var var18 = 0;
    var var19 = null;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = 0;
    var var24 = null;
    var var25 = null;
    var0 = (arg0) | 0;
    // line number 373
    var1 = this;
    var2 = ((var1.capacity)) | 0;
    If_12_0: {
     if (var0 <= var2) {
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = (0) | 0;
      break If_12_0;
     } else {
      var3 = (1) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    var7 = (phi5) | 0;
    If_25_0: {
     if (var7 >= 0) {
      phi9 = (0) | 0;
      break If_25_0;
     } else {
      var8 = (1) | 0;
      // Here was a goto statement
      phi9 = (var8) | 0;
      break If_25_0;
     }
    }
    var10 = ((phi6 | phi9)) | 0;
    if (var10 == 0) {
     // line number 375
     var14 = phi4;
     var15 = (phi5) | 0;
     var14.limit = var15;
     // line number 376
     var16 = phi4;
     var17 = ((var16.position)) | 0;
     var18 = (phi5) | 0;
     If_68_0: {
      if (var17 <= var18) {
       break If_68_0;
      } else {
       var19 = phi4;
       var20 = (phi5) | 0;
       var19.position = var20;
       break If_68_0;
      }
     }
     // line number 377
     var21 = phi4;
     var22 = ((var21.mark)) | 0;
     var23 = (phi5) | 0;
     If_85_0: {
      if (var22 <= var23) {
       break If_85_0;
      } else {
       var24 = phi4;
       var24.mark = -1;
       break If_85_0;
      }
     }
     // line number 378
     var25 = phi4;
     return var25;
    } else {
     // line number 374
     var11 = phi4;
     var12 = (phi5) | 0;
     var13 = (java$nio$Buffer.prototype.Ljava$lang$IllegalArgumentException$$createLimitException$I.call(var11,var12));
     throw bytecoder.registerStack(var13, new Error().stack);
    }
  }

  Ljava$lang$IllegalArgumentException$$createLimitException$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var0 = (arg0) | 0;
    // line number 391
    // line number 393
    var1 = this;
    var2 = ((var1.capacity)) | 0;
    If_15_0: {
     if (var0 <= var2) {
      // line number 396
      java$nio$Buffer.$i;
      var16 = (java$nio$Buffer.$assertionsDisabled);
      If_73_0: {
       if (var16 != 0) {
        phi20 = this;
        phi21 = (var0) | 0;
        phi22 = null;
        break If_73_0;
       } else {
        var17 = (var0) | 0;
        if (var17 < 0) {
         phi20 = this;
         phi21 = (var0) | 0;
         phi22 = null;
         break If_73_0;
        } else {
         var18 = new java$lang$AssertionError();
         var19 = bytecoder.stringconstants[33];
         java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var18,var19);
         throw bytecoder.registerStack(var18, new Error().stack);
        }
       }
      }
      // line number 397
      var23 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var23);
      var24 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var23,bytecoder.stringconstants[34]));
      var25 = (phi21) | 0;
      var26 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var24,var25));
      var27 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var26,bytecoder.stringconstants[29]));
      var28 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var27));
      phi11 = phi20;
      phi12 = (phi21) | 0;
      phi13 = var28;
      break If_15_0;
     } else {
      // line number 394
      var3 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var3);
      var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[30]));
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var0));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[31]));
      var7 = ((this.capacity)) | 0;
      var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var6,var7));
      var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var8,bytecoder.stringconstants[32]));
      var10 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var9));
      // Here was a goto statement
      phi11 = this;
      phi12 = (var0) | 0;
      phi13 = var10;
      break If_15_0;
     }
    }
    // line number 400
    var14 = new java$lang$IllegalArgumentException();
    var15 = phi13;
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var14,var15);
    return var14;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var phi9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var0 = (arg0) | 0;
    // line number 320
    var1 = this;
    var2 = ((var1.limit)) | 0;
    If_12_0: {
     if (var0 <= var2) {
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = (0) | 0;
      break If_12_0;
     } else {
      var3 = (1) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    var7 = (phi5) | 0;
    If_25_0: {
     if (var7 >= 0) {
      phi9 = (0) | 0;
      break If_25_0;
     } else {
      var8 = (1) | 0;
      // Here was a goto statement
      phi9 = (var8) | 0;
      break If_25_0;
     }
    }
    var10 = ((phi6 | phi9)) | 0;
    if (var10 == 0) {
     // line number 322
     var14 = phi4;
     var15 = ((var14.mark)) | 0;
     var16 = (phi5) | 0;
     If_61_0: {
      if (var15 <= var16) {
       break If_61_0;
      } else {
       var17 = phi4;
       var17.mark = -1;
       break If_61_0;
      }
     }
     // line number 323
     var18 = phi4;
     var19 = (phi5) | 0;
     var18.position = var19;
     // line number 324
     var20 = phi4;
     return var20;
    } else {
     // line number 321
     var11 = phi4;
     var12 = (phi5) | 0;
     var13 = (java$nio$Buffer.prototype.Ljava$lang$IllegalArgumentException$$createPositionException$I.call(var11,var12));
     throw bytecoder.registerStack(var13, new Error().stack);
    }
  }

  Ljava$lang$IllegalArgumentException$$createPositionException$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var0 = (arg0) | 0;
    // line number 337
    // line number 339
    var1 = this;
    var2 = ((var1.limit)) | 0;
    If_15_0: {
     if (var0 <= var2) {
      // line number 342
      java$nio$Buffer.$i;
      var16 = (java$nio$Buffer.$assertionsDisabled);
      If_73_0: {
       if (var16 != 0) {
        phi20 = this;
        phi21 = (var0) | 0;
        phi22 = null;
        break If_73_0;
       } else {
        var17 = (var0) | 0;
        if (var17 < 0) {
         phi20 = this;
         phi21 = (var0) | 0;
         phi22 = null;
         break If_73_0;
        } else {
         var18 = new java$lang$AssertionError();
         var19 = bytecoder.stringconstants[36];
         java$lang$AssertionError.prototype.V$$init$$Ljava$lang$Object$.call(var18,var19);
         throw bytecoder.registerStack(var18, new Error().stack);
        }
       }
      }
      // line number 343
      var23 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var23);
      var24 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var23,bytecoder.stringconstants[37]));
      var25 = (phi21) | 0;
      var26 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var24,var25));
      var27 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var26,bytecoder.stringconstants[29]));
      var28 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var27));
      phi11 = phi20;
      phi12 = (phi21) | 0;
      phi13 = var28;
      break If_15_0;
     } else {
      // line number 340
      var3 = new java$lang$StringBuilder();
      java$lang$StringBuilder.prototype.V$$init$$$.call(var3);
      var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[35]));
      var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var0));
      var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var5,bytecoder.stringconstants[31]));
      var7 = ((this.limit)) | 0;
      var8 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var6,var7));
      var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var8,bytecoder.stringconstants[32]));
      var10 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var9));
      // Here was a goto statement
      phi11 = this;
      phi12 = (var0) | 0;
      phi13 = var10;
      break If_15_0;
     }
    }
    // line number 346
    var14 = new java$lang$IllegalArgumentException();
    var15 = phi13;
    java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var14,var15);
    return var14;
  }

  I$position$$() {
    // source file is Buffer.java
    var var0 = 0;
    // line number 303
    var0 = ((this.position)) | 0;
    return var0;
  }

  Ljava$nio$Buffer$$flip$$() {
    // source file is Buffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = this;
    // line number 478
    var1 = var0;
    var2 = ((var1.position)) | 0;
    var0.limit = var2;
    // line number 479
    var0.position = 0;
    // line number 480
    var0.mark = -1;
    // line number 481
    return var0;
  }

  I$limit$$() {
    // source file is Buffer.java
    var var0 = 0;
    // line number 355
    var0 = ((this.limit)) | 0;
    return var0;
  }

  Ljava$nio$Buffer$$clear$$() {
    // source file is Buffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var0 = this;
    // line number 450
    var1 = (0) | 0;
    var0.position = var1;
    // line number 451
    var2 = var0;
    var3 = ((var2.capacity)) | 0;
    var0.limit = var3;
    // line number 452
    var0.mark = -1;
    // line number 453
    return var0;
  }

  I$remaining$$() {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    // line number 512
    var0 = ((this.limit)) | 0;
    var1 = ((this.position)) | 0;
    var2 = ((var0 - var1)) | 0;
    // line number 513
    If_15_0: {
     if (var2 <= 0) {
      phi4 = this;
      phi5 = (var2) | 0;
      phi6 = (0) | 0;
      break If_15_0;
     } else {
      var3 = (var2) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = (var2) | 0;
      phi6 = (var3) | 0;
      break If_15_0;
     }
    }
    return phi6;
  }

  Z$hasRemaining$$() {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    // line number 524
    var0 = ((this.position)) | 0;
    var1 = ((this.limit)) | 0;
    If_10_0: {
     if (var0 >= var1) {
      phi3 = this;
      phi4 = (0) | 0;
      break If_10_0;
     } else {
      var2 = (1) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = (var2) | 0;
      break If_10_0;
     }
    }
    return phi4;
  }

  V$checkSession$$() {
    // source file is Buffer.java
    return;
  }

  I$nextPutIndex$$() {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    // line number 725
    var0 = ((this.position)) | 0;
    // line number 726
    var1 = ((this.limit)) | 0;
    if (var0 < var1) {
     // line number 728
     var3 = this;
     var4 = ((var0 + 1)) | 0;
     var3.position = var4;
     // line number 729
     return var0;
    } else {
     // line number 727
     var2 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var2);
     throw bytecoder.registerStack(var2, new Error().stack);
    }
  }

  Ljdk$internal$foreign$MemorySessionImpl$$session$$() {
    // source file is Buffer.java
    var var0 = null;
    var0 = null;
    return var0;
  }

  I$capacity$$() {
    // source file is Buffer.java
    var var0 = 0;
    // line number 294
    var0 = ((this.capacity)) | 0;
    return var0;
  }

  I$checkIndex$I(arg0) {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var0 = (arg0) | 0;
    // line number 746
    var1 = this;
    var2 = ((var1.limit)) | 0;
    var3 = ((java$util$Objects.I$checkIndex$I$I(var0,var2))) | 0;
    return var3;
  }

  I$nextGetIndex$$() {
    // source file is Buffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    // line number 702
    var0 = ((this.position)) | 0;
    // line number 703
    var1 = ((this.limit)) | 0;
    if (var0 < var1) {
     // line number 705
     var3 = this;
     var4 = ((var0 + 1)) | 0;
     var3.position = var4;
     // line number 706
     return var0;
    } else {
     // line number 704
     var2 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var2);
     throw bytecoder.registerStack(var2, new Error().stack);
    }
  }
}


class jdk$internal$util$ArraysSupport extends java$lang$Object {
  nativeObject = null;

  static U = null;
  static BIG_ENDIAN = false;
  static LOG2_ARRAY_BOOLEAN_INDEX_SCALE = 0;
  static LOG2_ARRAY_BYTE_INDEX_SCALE = 0;
  static LOG2_ARRAY_CHAR_INDEX_SCALE = 0;
  static LOG2_ARRAY_SHORT_INDEX_SCALE = 0;
  static LOG2_ARRAY_INT_INDEX_SCALE = 0;
  static LOG2_ARRAY_LONG_INDEX_SCALE = 0;
  static LOG2_ARRAY_FLOAT_INDEX_SCALE = 0;
  static LOG2_ARRAY_DOUBLE_INDEX_SCALE = 0;
  static LOG2_BYTE_BIT_SIZE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$ArraysSupport,[java$lang$Object,jdk$internal$util$ArraysSupport]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ArraysSupport.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    // line number 56
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    jdk$internal$util$ArraysSupport.$i;
    jdk$internal$util$ArraysSupport.U = var0;
    // line number 58
    var1 = (jdk$internal$util$ArraysSupport.U);
    var2 = (jdk$internal$misc$Unsafe.prototype.Z$isBigEndian$$.call(var1));
    jdk$internal$util$ArraysSupport.BIG_ENDIAN = var2;
    // line number 60
    var3 = ((jdk$internal$misc$Unsafe.ARRAY_BOOLEAN_INDEX_SCALE)) | 0;
    var4 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var3))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_BOOLEAN_INDEX_SCALE = var4;
    // line number 61
    var5 = ((jdk$internal$misc$Unsafe.ARRAY_BYTE_INDEX_SCALE)) | 0;
    var6 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var5))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_BYTE_INDEX_SCALE = var6;
    // line number 62
    var7 = ((jdk$internal$misc$Unsafe.ARRAY_CHAR_INDEX_SCALE)) | 0;
    var8 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var7))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_CHAR_INDEX_SCALE = var8;
    // line number 63
    var9 = ((jdk$internal$misc$Unsafe.ARRAY_SHORT_INDEX_SCALE)) | 0;
    var10 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var9))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_SHORT_INDEX_SCALE = var10;
    // line number 64
    var11 = ((jdk$internal$misc$Unsafe.ARRAY_INT_INDEX_SCALE)) | 0;
    var12 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var11))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE = var12;
    // line number 65
    var13 = ((jdk$internal$misc$Unsafe.ARRAY_LONG_INDEX_SCALE)) | 0;
    var14 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var13))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE = var14;
    // line number 66
    var15 = ((jdk$internal$misc$Unsafe.ARRAY_FLOAT_INDEX_SCALE)) | 0;
    var16 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var15))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_FLOAT_INDEX_SCALE = var16;
    // line number 67
    var17 = ((jdk$internal$misc$Unsafe.ARRAY_DOUBLE_INDEX_SCALE)) | 0;
    var18 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(var17))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_ARRAY_DOUBLE_INDEX_SCALE = var18;
    // line number 69
    var19 = ((jdk$internal$util$ArraysSupport.I$exactLog2$I(8))) | 0;
    jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE = var19;
    return;
  }

  static I$exactLog2$I(arg0) {
    // source file is ArraysSupport.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    // line number 72
    var0 = (arg0) | 0;
    var1 = ((var0 - 1)) | 0;
    var2 = ((arg0 & var1)) | 0;
    if (var2 == 0) {
     // line number 74
     java$lang$Integer.$i;
     var5 = ((java$lang$Integer.I$numberOfTrailingZeros$I(arg0))) | 0;
     return var5;
    } else {
     // line number 73
     var3 = new java$lang$Error();
     var4 = bytecoder.stringconstants[90];
     java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(var3,var4);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  static I$vectorizedMismatch$Ljava$lang$Object$$J$Ljava$lang$Object$$J$I$I(arg0,arg1,arg2,arg3,arg4,arg5) {
    // source file is ArraysSupport.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var phi11 = 0;
    var phi12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = 0;
    var var33 = 0;
    var var34 = 0;
    var var35 = 0;
    var var36 = 0;
    var var37 = 0;
    var var38 = 0;
    var var39 = 0;
    var var40 = 0;
    var phi41 = 0;
    var phi42 = 0;
    var phi43 = 0;
    var phi44 = 0;
    var phi45 = 0;
    var var46 = 0;
    var var47 = 0;
    var var48 = 0;
    var var49 = 0;
    var var50 = 0;
    var var51 = 0;
    var var52 = 0;
    var var53 = 0;
    var var54 = 0;
    var var55 = 0;
    var var56 = 0;
    var var57 = 0;
    var var58 = 0;
    var var59 = 0;
    var var60 = 0;
    var var61 = 0;
    var var62 = 0;
    var var63 = 0;
    var var64 = 0;
    var var65 = 0;
    var var66 = 0;
    var var67 = 0;
    var var68 = 0;
    var var69 = 0;
    var var70 = 0;
    var var71 = 0;
    var var72 = null;
    var var73 = null;
    var var74 = 0;
    var var75 = 0;
    var var76 = 0;
    var var77 = null;
    var var78 = null;
    var var79 = 0;
    var var80 = 0;
    var var81 = 0;
    var var82 = 0;
    var var83 = 0;
    var var84 = 0;
    var var85 = 0;
    var var86 = 0;
    var var87 = 0;
    var var88 = 0;
    var var89 = 0;
    var var90 = 0;
    var phi91 = 0;
    var phi92 = 0;
    var phi93 = 0;
    var phi94 = 0;
    var phi95 = 0;
    var phi96 = 0;
    var phi97 = 0;
    var var98 = 0;
    var var99 = 0;
    var var100 = 0;
    var var101 = 0;
    var var102 = 0;
    var var103 = 0;
    var var104 = 0;
    var var105 = 0;
    var var106 = 0;
    var var107 = 0;
    var var108 = 0;
    var var109 = 0;
    var phi110 = 0;
    var phi111 = 0;
    var phi112 = 0;
    var var113 = 0;
    var var114 = 0;
    var var115 = 0;
    var0 = arg1;
    var1 = arg3;
    var2 = (arg5) | 0;
    // line number 122
    jdk$internal$util$ArraysSupport.$i;
    var3 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE)) | 0;
    var4 = ((var3 - var2)) | 0;
    // line number 123
    phi5 = arg0;
    phi6 = var0;
    phi7 = arg2;
    phi8 = var1;
    phi9 = (arg4) | 0;
    phi10 = (var2) | 0;
    phi11 = (var4) | 0;
    phi12 = (0) | 0;
    L808782963: while(true) {
     // line number 124
     var13 = (phi12) | 0;
     var14 = (phi9) | 0;
     var15 = (phi11) | 0;
     var16 = ((var14 >> var15)) | 0;
     if (var13 >= var16) {
      // line number 138
      var56 = (phi9) | 0;
      var57 = (phi12) | 0;
      var58 = (phi11) | 0;
      var59 = ((var57 << var58)) | 0;
      var60 = ((var56 - var59)) | 0;
      // line number 140
      var61 = (phi10) | 0;
      var62 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE)) | 0;
      if (var61 >= var62) {
       // line number 159
       var115 = ((var60 ^ -1)) | 0;
       return var115;
      } else {
       // line number 141
       var63 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_INT_INDEX_SCALE)) | 0;
       var64 = (phi10) | 0;
       var65 = ((var63 - var64)) | 0;
       var66 = ((1 << var65)) | 0;
       // line number 143
       var67 = (var66) | 0;
       If_232_0: {
        if (var60 < var67) {
         phi110 = (var60) | 0;
         phi111 = (var66) | 0;
         break If_232_0;
        } else {
         // line number 144
         var68 = (phi12) | 0;
         var69 = (var68 | 0);
         var70 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE)) | 0;
         var71 = (var69 << var70);
         // line number 145
         var72 = (jdk$internal$util$ArraysSupport.U);
         var73 = phi5;
         var74 = phi6;
         var75 = (var74 + var71);
         var76 = ((jdk$internal$misc$Unsafe.prototype.I$getIntUnaligned$Ljava$lang$Object$$J.call(var72,var73,var75))) | 0;
         // line number 146
         var77 = (jdk$internal$util$ArraysSupport.U);
         var78 = phi7;
         var79 = phi8;
         var80 = (var79 + var71);
         var81 = ((jdk$internal$misc$Unsafe.prototype.I$getIntUnaligned$Ljava$lang$Object$$J.call(var77,var78,var80))) | 0;
         // line number 147
         var82 = (var81) | 0;
         if (var76 == var82) {
          // line number 154
          var108 = (var66) | 0;
          var109 = ((var60 - var108)) | 0;
          phi110 = (var109) | 0;
          phi111 = (var66) | 0;
          phi112 = (var76) | 0;
          break If_232_0;
         } else {
          // line number 148
          var83 = (var81) | 0;
          var84 = ((var76 ^ var83)) | 0;
          // line number 149
          var85 = (jdk$internal$util$ArraysSupport.BIG_ENDIAN);
          If_299_0: {
           if (var85 == 0) {
            // line number 151
            java$lang$Integer.$i;
            var103 = ((java$lang$Integer.I$numberOfTrailingZeros$I(var84))) | 0;
            var104 = ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE)) | 0;
            var105 = (phi10) | 0;
            var106 = ((var104 + var105)) | 0;
            var107 = ((var103 >> var106)) | 0;
            phi91 = (var60) | 0;
            phi92 = (var66) | 0;
            phi93 = var71;
            phi94 = (var76) | 0;
            phi95 = (var81) | 0;
            phi96 = (var84) | 0;
            phi97 = (var107) | 0;
            break If_299_0;
           } else {
            // line number 150
            java$lang$Integer.$i;
            var86 = ((java$lang$Integer.I$numberOfLeadingZeros$I(var84))) | 0;
            var87 = ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE)) | 0;
            var88 = (phi10) | 0;
            var89 = ((var87 + var88)) | 0;
            var90 = ((var86 >> var89)) | 0;
            // Here was a goto statement
            phi91 = (var60) | 0;
            phi92 = (var66) | 0;
            phi93 = var71;
            phi94 = (var76) | 0;
            phi95 = (var81) | 0;
            phi96 = (var84) | 0;
            phi97 = (var90) | 0;
            break If_299_0;
           }
          }
          var98 = (phi97) | 0;
          // line number 152
          var99 = (phi12) | 0;
          var100 = (phi11) | 0;
          var101 = ((var99 << var100)) | 0;
          var102 = ((var101 + var98)) | 0;
          return var102;
         }
        }
       }
       // line number 156
       var113 = (phi110) | 0;
       var114 = ((var113 ^ -1)) | 0;
       return var114;
      }
     } else {
      // line number 125
      var17 = (phi12) | 0;
      var18 = (var17 | 0);
      var19 = ((jdk$internal$util$ArraysSupport.LOG2_ARRAY_LONG_INDEX_SCALE)) | 0;
      var20 = (var18 << var19);
      // line number 126
      var21 = (jdk$internal$util$ArraysSupport.U);
      var22 = phi5;
      var23 = phi6;
      var24 = (var23 + var20);
      var25 = (jdk$internal$misc$Unsafe.prototype.J$getLongUnaligned$Ljava$lang$Object$$J.call(var21,var22,var24));
      // line number 127
      var26 = (jdk$internal$util$ArraysSupport.U);
      var27 = phi7;
      var28 = phi8;
      var29 = (var28 + var20);
      var30 = (jdk$internal$misc$Unsafe.prototype.J$getLongUnaligned$Ljava$lang$Object$$J.call(var26,var27,var29));
      // line number 128
      var31 = var30;
      var32 = (bytecoder.cmp(var25,var31)) | 0;
      if (var32 == 0) {
       // line number 124
       phi12 = ((phi12 + 1)) | 0;
       // Here was a goto statement
       continue L808782963;
      } else {
       // line number 129
       var33 = var30;
       var34 = (var25 ^ var33);
       // line number 130
       var35 = (jdk$internal$util$ArraysSupport.BIG_ENDIAN);
       If_117_0: {
        if (var35 == 0) {
         // line number 132
         java$lang$Long.$i;
         var51 = ((java$lang$Long.I$numberOfTrailingZeros$J(var34))) | 0;
         var52 = ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE)) | 0;
         var53 = (phi10) | 0;
         var54 = ((var52 + var53)) | 0;
         var55 = ((var51 >> var54)) | 0;
         phi41 = var20;
         phi42 = var25;
         phi43 = var30;
         phi44 = var34;
         phi45 = (var55) | 0;
         break If_117_0;
        } else {
         // line number 131
         java$lang$Long.$i;
         var36 = ((java$lang$Long.I$numberOfLeadingZeros$J(var34))) | 0;
         var37 = ((jdk$internal$util$ArraysSupport.LOG2_BYTE_BIT_SIZE)) | 0;
         var38 = (phi10) | 0;
         var39 = ((var37 + var38)) | 0;
         var40 = ((var36 >> var39)) | 0;
         // Here was a goto statement
         phi41 = var20;
         phi42 = var25;
         phi43 = var30;
         phi44 = var34;
         phi45 = (var40) | 0;
         break If_117_0;
        }
       }
       var46 = (phi45) | 0;
       // line number 133
       var47 = (phi12) | 0;
       var48 = (phi11) | 0;
       var49 = ((var47 << var48)) | 0;
       var50 = ((var49 + var46)) | 0;
       return var50;
      }
     }
    }
  }

  V$$init$$$() {
    // source file is ArraysSupport.java
    // line number 77
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$Character extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Character,[java$lang$Object,java$lang$Character]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static I$compare$C$C(arg0,arg1) {
    // source file is Character.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = arg1;
    // line number 36
    var1 = var0;
    var2 = ((arg0 - var1)) | 0;
    return var2;
  }

  static Ljava$lang$String$$toString$C(arg0) {
    return bytecoder.imports['java.lang.Character'].Ljava$lang$String$$toString$C(arg0);
  }
}


class java$util$HashMap$HashIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  expectedModCount = 0;
  next = null;
  current = null;
  index = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap$HashIterator,[java$lang$Object,java$util$HashMap$HashIterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var0 = this;
    // line number 1587
    var1 = arg0;
    var0.this$0 = var1;
    java$lang$Object.prototype.V$$init$$$.call(var0);
    // line number 1588
    var2 = ((arg0.modCount)) | 0;
    var0.expectedModCount = var2;
    // line number 1589
    var3 = (arg0.table);
    // line number 1590
    var4 = var0;
    var5 = null;
    var4.next = var5;
    var0.current = null;
    // line number 1591
    var0.index = 0;
    // line number 1592
    If_37_0: {
     if (var3 == null) {
      phi8 = var0;
      phi9 = arg0;
      phi10 = var3;
      break If_37_0;
     } else {
      var6 = arg0;
      var7 = ((var6.size)) | 0;
      if (var7 <= 0) {
       phi8 = var0;
       phi9 = arg0;
       phi10 = var3;
       break If_37_0;
      } else {
       phi8 = var0;
       phi9 = arg0;
       phi10 = var3;
       L2142431443: while(true) {
        // line number 1593
        var11 = phi8;
        var12 = ((var11.index)) | 0;
        var13 = phi10;
        var14 = (var13.data.length) | 0;
        if (var12 >= var14) {
         break If_37_0;
        } else {
         var15 = phi8;
         var16 = phi10;
         var17 = phi8;
         var18 = ((var17.index)) | 0;
         var19 = ((var18 + 1)) | 0;
         var17.index = var19;
         var20 = (var16.data[var18]);
         var15.next = var20;
         if (var20 == null) {
          continue L2142431443;
         } else {
          break If_37_0;
         }
        }
       }
      }
     }
    }
    // line number 1595
    return;
  }

  Z$hasNext$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 1598
    var0 = (this.next);
    If_7_0: {
     if (var0 == null) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  Ljava$util$HashMap$Node$$nextNode$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var phi14 = null;
    var phi15 = null;
    var phi16 = null;
    var var17 = null;
    var var18 = 0;
    var var19 = null;
    var var20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    // line number 1603
    var0 = (this.next);
    // line number 1604
    var1 = (this.this$0);
    var2 = ((var1.modCount)) | 0;
    var3 = ((this.expectedModCount)) | 0;
    if (var2 == var3) {
     // line number 1606
     if (var0 != null) {
      // line number 1608
      var6 = this;
      var7 = this;
      var8 = var0;
      var7.current = var8;
      var9 = (var0.next);
      var6.next = var9;
      If_57_0: {
       if (var9 != null) {
        phi14 = this;
        phi16 = var0;
        break If_57_0;
       } else {
        var10 = this;
        var11 = (var10.this$0);
        var12 = (var11.table);
        var13 = var12;
        if (var12 == null) {
         phi14 = this;
         phi15 = var13;
         phi16 = var0;
         break If_57_0;
        } else {
         phi14 = this;
         phi15 = var13;
         phi16 = var0;
         L1420214445: while(true) {
          // line number 1609
          var17 = phi14;
          var18 = ((var17.index)) | 0;
          var19 = phi15;
          var20 = (var19.data.length) | 0;
          if (var18 >= var20) {
           break If_57_0;
          } else {
           var21 = phi14;
           var22 = phi15;
           var23 = phi14;
           var24 = ((var23.index)) | 0;
           var25 = ((var24 + 1)) | 0;
           var23.index = var25;
           var26 = (var22.data[var24]);
           var21.next = var26;
           if (var26 == null) {
            continue L1420214445;
           } else {
            break If_57_0;
           }
          }
         }
        }
       }
      }
      // line number 1611
      var27 = phi16;
      return var27;
     } else {
      // line number 1607
      var5 = new java$util$NoSuchElementException();
      java$util$NoSuchElementException.prototype.V$$init$$$.call(var5);
      throw bytecoder.registerStack(var5, new Error().stack);
     }
    } else {
     // line number 1605
     var4 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var4);
     throw bytecoder.registerStack(var4, new Error().stack);
    }
  }
}


class java$io$FileDescriptor extends java$lang$Object {
  nativeObject = null;

  fd = 0;
  static in = null;
  static out = null;
  static err = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$FileDescriptor,[java$lang$Object,java$io$FileDescriptor]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  I$getFileDescriptorHandle$$() {
    // source file is FileDescriptor.java
    var var0 = 0;
    // line number 62
    var0 = ((this.fd)) | 0;
    return var0;
  }

  V$setFileDescriptorHandle$I(arg0) {
    // source file is FileDescriptor.java
    var var0 = null;
    var var1 = 0;
    var0 = this;
    // line number 67
    var1 = (arg0) | 0;
    var0.fd = var1;
    // line number 68
    return;
  }

  static V$$clinit$$$() {
    // source file is FileDescriptor.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    // line number 28
    java$io$FileDescriptor.$i;
    var0 = new java$io$FileDescriptor();
    var1 = (0) | 0;
    java$io$FileDescriptor.prototype.V$$init$$I.call(var0,var1);
    var2 = var0;
    java$io$FileDescriptor.in = var2;
    // line number 30
    var3 = new java$io$FileDescriptor();
    java$io$FileDescriptor.prototype.V$$init$$I.call(var3,1);
    var4 = var3;
    java$io$FileDescriptor.out = var4;
    // line number 32
    var5 = new java$io$FileDescriptor();
    java$io$FileDescriptor.prototype.V$$init$$I.call(var5,2);
    var6 = var5;
    java$io$FileDescriptor.err = var6;
    return;
  }

  V$$init$$I(arg0) {
    // source file is FileDescriptor.java
    var var0 = 0;
    var var1 = null;
    var0 = (arg0) | 0;
    // line number 40
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 41
    var1 = this;
    var1.fd = var0;
    // line number 42
    return;
  }

  V$$init$$$() {
    // source file is FileDescriptor.java
    var var0 = null;
    // line number 36
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 37
    var0 = this;
    var0.fd = -1;
    // line number 38
    return;
  }
}


class java$io$Serializable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$Serializable,[java$lang$Object,java$io$Serializable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$function$Supplier extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$function$Supplier,[java$lang$Object,java$util$function$Supplier]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$get$$ = impl;
  }
}


class jdk$internal$util$Preconditions$4 extends java$lang$Object {
  nativeObject = null;

  val$f = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$Preconditions$4,[java$util$function$BiFunction,java$lang$Object,jdk$internal$util$Preconditions$4]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$ = impl;
  }

  V$$init$$Ljava$util$function$Function$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var0 = this;
    // line number 210
    var1 = arg0;
    var0.val$f = var1;
    java$lang$Object.prototype.V$$init$$$.call(var0);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 210
    var1 = var0;
    var2 = var1;
    var3 = arg1;
    var4 = (jdk$internal$util$Preconditions$4.prototype.Ljava$lang$RuntimeException$$apply$Ljava$lang$String$$Ljava$util$List$.call(this,var2,var3));
    return var4;
  }

  Ljava$lang$RuntimeException$$apply$Ljava$lang$String$$Ljava$util$List$(arg0,arg1) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = arg0;
    // line number 213
    var1 = (this.val$f);
    var2 = arg1;
    jdk$internal$util$Preconditions.$i;
    var3 = (jdk$internal$util$Preconditions.Ljava$lang$String$$outOfBoundsMessage$Ljava$lang$String$$Ljava$util$List$(var0,var2));
    var4 = (var1.Ljava$lang$Object$$apply$Ljava$lang$Object$(var3));
    var5 = var4;
    return var5;
  }
}


class java$lang$Error extends java$lang$Throwable {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Error,[java$lang$Throwable,java$lang$Object,java$lang$Error]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is Error.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 67
    var1 = var0;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 68
    return;
  }

  V$$init$$$() {
    // source file is Error.java
    // line number 55
    java$lang$Throwable.prototype.V$$init$$$.call(this);
    // line number 56
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is Error.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 102
    var1 = var0;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 103
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder extends java$nio$charset$CharsetDecoder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder,[de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder,java$lang$Object,java$nio$charset$CharsetDecoder]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$charset$CharsetDecoder.$i;
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$ = impl;
  }

  V$$init$$Ljava$nio$charset$Charset$(arg0) {
    // source file is BytecoderCharsetDecoder.java
    var var0 = null;
    var var1 = null;
    var var2 = .0;
    var0 = arg0;
    // line number 27
    var1 = var0;
    var2 = 3.0;
    java$nio$charset$CharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F.call(this,var1,1.1,var2);
    // line number 28
    return;
  }

  Ljava$nio$charset$CoderResult$$decodeLoop$Ljava$nio$ByteBuffer$$Ljava$nio$CharBuffer$(arg0,arg1) {
    // source file is BytecoderCharsetDecoder.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = null;
    var phi16 = null;
    var phi17 = null;
    var var18 = null;
    var0 = arg0;
    // line number 32
    var1 = (this.Ljava$nio$charset$Charset$$charset$$());
    // line number 33
    var2 = (var0.Z$hasRemaining$$());
    If_16_0: {
     if (var2 == 0) {
      phi13 = this;
      phi14 = var0;
      phi15 = arg1;
      phi16 = var1;
      break If_16_0;
     } else {
      // line number 34
      var3 = ((var0.I$remaining$$())) | 0;
      // line number 35
      var4 = bytecoder.newarray((var3),0);
      // line number 36
      var5 = var4;
      var6 = (var3) | 0;
      var7 = (var0.Ljava$nio$ByteBuffer$$get$$B$I$I(var5,0,var6));
      // line number 38
      var8 = var1;
      var9 = (java$nio$charset$Charset.prototype.Ljava$lang$String$$name$$.call(var8));
      var10 = (de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.prototype.$C$decodeFromBytes$Ljava$lang$String$$$B.call(this,var9,var4));
      // line number 39
      var11 = var10;
      var12 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$put$$C.call(arg1,var11));
      phi13 = this;
      phi14 = var0;
      phi15 = arg1;
      phi16 = var1;
      phi17 = var4;
      break If_16_0;
     }
    }
    // line number 41
    java$nio$charset$CoderResult.$i;
    var18 = (java$nio$charset$CoderResult.UNDERFLOW);
    return var18;
  }

  $C$decodeFromBytes$Ljava$lang$String$$$B(arg0,arg1) {
    return bytecoder.imports['de.mirkosertic.bytecoder.classlib.BytecoderCharsetDecoder'].$C$decodeFromBytes$Ljava$lang$String$$$B(this, arg0, arg1);
  }
}


class de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder extends java$nio$charset$CharsetEncoder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder,[java$lang$Object,java$nio$charset$CharsetEncoder,de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$charset$CharsetEncoder.$i;
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.Ljava$nio$charset$CoderResult$$encodeLoop$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$ = impl;
  }

  V$$init$$Ljava$nio$charset$Charset$(arg0) {
    // source file is BytecoderCharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = .0;
    var0 = arg0;
    // line number 27
    var1 = var0;
    var2 = 3.0;
    java$nio$charset$CharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$$F$F.call(this,var1,1.1,var2);
    // line number 28
    return;
  }

  Ljava$nio$charset$CoderResult$$encodeLoop$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$(arg0,arg1) {
    // source file is BytecoderCharsetEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = null;
    var phi16 = null;
    var phi17 = null;
    var var18 = null;
    var0 = arg0;
    // line number 32
    var1 = (this.Ljava$nio$charset$Charset$$charset$$());
    // line number 33
    var2 = (var0.Z$hasRemaining$$());
    If_16_0: {
     if (var2 == 0) {
      phi13 = this;
      phi14 = var0;
      phi15 = arg1;
      phi16 = var1;
      break If_16_0;
     } else {
      // line number 34
      var3 = ((var0.I$remaining$$())) | 0;
      // line number 35
      var4 = bytecoder.newarray((var3),0);
      // line number 37
      var5 = var4;
      var6 = (var3) | 0;
      var7 = (var0.Ljava$nio$CharBuffer$$get$$C$I$I(var5,0,var6));
      // line number 39
      var8 = var1;
      var9 = (java$nio$charset$Charset.prototype.Ljava$lang$String$$name$$.call(var8));
      var10 = (de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder.prototype.$B$encodeToBytes$Ljava$lang$String$$$C.call(this,var9,var4));
      // line number 40
      var11 = var10;
      var12 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$put$$B.call(arg1,var11));
      phi13 = this;
      phi14 = var0;
      phi15 = arg1;
      phi16 = var1;
      phi17 = var4;
      break If_16_0;
     }
    }
    // line number 42
    java$nio$charset$CoderResult.$i;
    var18 = (java$nio$charset$CoderResult.UNDERFLOW);
    return var18;
  }

  $B$encodeToBytes$Ljava$lang$String$$$C(arg0,arg1) {
    return bytecoder.imports['de.mirkosertic.bytecoder.classlib.BytecoderCharsetEncoder'].$B$encodeToBytes$Ljava$lang$String$$$C(this, arg0, arg1);
  }
}


class java$nio$Buffer$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$Buffer$1,[java$nio$Buffer$1,java$lang$Object,jdk$internal$access$JavaNioAccess]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is Buffer.java
    // line number 782
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$Number extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Number,[java$lang$Object,java$lang$Number,java$io$Serializable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$intValue$$ = impl;
  }

  V$$init$$$() {
    // source file is Number.java
    // line number 59
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  B$byteValue$$() {
    // source file is Number.java
    var var0 = 0;
    var var1 = 0;
    // line number 105
    var0 = ((this.I$intValue$$())) | 0;
    var1 = var0;
    return var1;
  }

  S$shortValue$$() {
    // source file is Number.java
    var var0 = 0;
    var var1 = 0;
    // line number 120
    var0 = ((this.I$intValue$$())) | 0;
    var1 = var0;
    return var1;
  }
}


class jdk$internal$util$Preconditions$3 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$Preconditions$3,[java$lang$Object,java$util$function$Function,jdk$internal$util$Preconditions$3]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    // source file is Preconditions.java
    // line number 68
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 68
    var1 = var0;
    var2 = var1;
    var3 = (jdk$internal$util$Preconditions$3.prototype.Ljava$lang$IndexOutOfBoundsException$$apply$Ljava$lang$String$.call(this,var2));
    return var3;
  }

  Ljava$lang$IndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 71
    var1 = new java$lang$IndexOutOfBoundsException();
    var2 = var0;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
    return var1;
  }
}


class java$lang$reflect$ParameterizedType extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$reflect$ParameterizedType,[java$lang$reflect$ParameterizedType,java$lang$Object,java$lang$reflect$Type]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class jdk$internal$util$Preconditions$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$Preconditions$1,[jdk$internal$util$Preconditions$1,java$lang$Object,java$util$function$Function]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    // source file is Preconditions.java
    // line number 52
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 52
    var1 = var0;
    var2 = var1;
    var3 = (jdk$internal$util$Preconditions$1.prototype.Ljava$lang$StringIndexOutOfBoundsException$$apply$Ljava$lang$String$.call(this,var2));
    return var3;
  }

  Ljava$lang$StringIndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 55
    var1 = new java$lang$StringIndexOutOfBoundsException();
    var2 = var0;
    java$lang$StringIndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
    return var1;
  }
}


class java$lang$StringBuilder extends java$lang$AbstractStringBuilder {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$StringBuilder,[java$lang$Object,java$lang$CharSequence,java$lang$StringBuilder,java$lang$AbstractStringBuilder]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$length$$ = impl;
  }

  V$$init$$$() {
    // source file is StringBuilder.java
    var var0 = 0;
    // line number 9
    var0 = (10) | 0;
    java$lang$StringBuilder.prototype.V$$init$$I.call(this,var0);
    // line number 10
    return;
  }

  V$$init$$I(arg0) {
    // source file is StringBuilder.java
    var var0 = 0;
    var0 = (arg0) | 0;
    // line number 12
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 13
    java$lang$StringBuilder.prototype.V$initializeWith$I.call(this,var0);
    // line number 14
    return;
  }

  V$initializeWith$I(arg0) {
    bytecoder.imports['java.lang.StringBuilder'].V$initializeWith$I(this, arg0);
  }

  Ljava$lang$StringBuilder$$append$Ljava$lang$String$(arg0) {
    return bytecoder.imports['java.lang.StringBuilder'].Ljava$lang$StringBuilder$$append$Ljava$lang$String$(this, arg0);
  }

  Ljava$lang$StringBuilder$$append$I(arg0) {
    // source file is StringBuilder.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var0 = (arg0) | 0;
    // line number 38
    var1 = (var0) | 0;
    java$lang$Integer.$i;
    var2 = (java$lang$Integer.Ljava$lang$String$$toString$I(var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(this,var2));
    return var3;
  }

  Ljava$lang$String$$toString$$() {
    return bytecoder.imports['java.lang.StringBuilder'].Ljava$lang$String$$toString$$(this);
  }

  Ljava$lang$StringBuilder$$append$F(arg0) {
    // source file is StringBuilder.java
    var var0 = .0;
    var var1 = .0;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 46
    var1 = var0;
    java$lang$Float.$i;
    var2 = (java$lang$Float.Ljava$lang$String$$toString$F(var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(this,var2));
    return var3;
  }

  Ljava$lang$StringBuilder$$append$Ljava$lang$Object$(arg0) {
    // source file is StringBuilder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 58
    if (var0 == null) {
     // line number 61
     var3 = bytecoder.stringconstants[0];
     var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(this,var3));
     return var4;
    } else {
     // line number 59
     var1 = (var0.Ljava$lang$String$$toString$$());
     var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(this,var1));
     return var2;
    }
  }

  Ljava$lang$StringBuilder$$append$C(arg0) {
    // source file is StringBuilder.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 30
    var1 = var0;
    var2 = (java$lang$Character.Ljava$lang$String$$toString$C(var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(this,var2));
    return var3;
  }
}

java$lang$StringBuilder.prototype.Z$isEmpty$$ = java$lang$CharSequence.prototype.Z$isEmpty$$;

class java$util$Collections$EmptyIterator extends java$lang$Object {
  nativeObject = null;

  static EMPTY_ITERATOR = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$EmptyIterator,[java$util$Collections$EmptyIterator,java$lang$Object,java$util$Iterator]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4308
    java$util$Collections$EmptyIterator.$i;
    var0 = new java$util$Collections$EmptyIterator();
    java$util$Collections$EmptyIterator.prototype.V$$init$$$.call(var0);
    java$util$Collections$EmptyIterator.EMPTY_ITERATOR = var0;
    return;
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 4307
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  Z$hasNext$$() {
    // source file is Collections.java
    // line number 4311
    return 0;
  }

  Ljava$lang$Object$$next$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4312
    var0 = new java$util$NoSuchElementException();
    java$util$NoSuchElementException.prototype.V$$init$$$.call(var0);
    throw bytecoder.registerStack(var0, new Error().stack);
  }
}


class de$mirkosertic$bytecoder$classlib$VM$1 extends java$lang$ClassLoader {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$VM$1,[java$lang$ClassLoader,java$lang$Object,de$mirkosertic$bytecoder$classlib$VM$1]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is VM.java
    // line number 26
    java$lang$ClassLoader.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$util$concurrent$locks$ReentrantLock extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$concurrent$locks$ReentrantLock,[java$lang$Object,java$util$concurrent$locks$ReentrantLock,java$util$concurrent$locks$Lock]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ReentrantLock.java
    // line number 26
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  V$lock$$() {
    // source file is ReentrantLock.java
    // line number 30
    return;
  }

  V$unlock$$() {
    // source file is ReentrantLock.java
    // line number 49
    return;
  }
}


class java$util$AbstractMap extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractMap,[java$lang$Object,java$util$AbstractMap,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is AbstractMap.java
    // line number 72
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 73
    return;
  }

  Ljava$lang$String$$toString$$() {
    // source file is AbstractMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var phi16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = null;
    var phi20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var phi28 = null;
    var phi29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = null;
    var var39 = null;
    // line number 540
    var0 = (this.Ljava$util$Set$$entrySet$$());
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    // line number 541
    var2 = (var1.Z$hasNext$$());
    if (var2 != 0) {
     // line number 544
     var3 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var3);
     // line number 545
     var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var3,123));
     phi5 = this;
     phi6 = var1;
     phi7 = var3;
     L1047076420: while(true) {
      // line number 547
      var8 = phi6;
      var9 = (var8.Ljava$lang$Object$$next$$());
      var10 = var9;
      // line number 548
      var11 = (var10.Ljava$lang$Object$$getKey$$());
      // line number 549
      var12 = (var10.Ljava$lang$Object$$getValue$$());
      // line number 550
      var13 = phi7;
      var14 = phi5;
      If_67_0: {
       if (var11 != var14) {
        phi16 = var10;
        phi17 = var11;
        phi18 = var12;
        phi19 = var13;
        phi20 = var11;
        break If_67_0;
       } else {
        var15 = bytecoder.stringconstants[99];
        // Here was a goto statement
        phi16 = var10;
        phi17 = var11;
        phi18 = var12;
        phi19 = var13;
        phi20 = var15;
        break If_67_0;
       }
      }
      var21 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(phi19,phi20));
      // line number 551
      var22 = phi7;
      var23 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var22,61));
      // line number 552
      var24 = phi7;
      var25 = phi18;
      var26 = phi5;
      If_99_0: {
       if (var25 != var26) {
        var39 = phi18;
        phi28 = var24;
        phi29 = var39;
        break If_99_0;
       } else {
        var27 = bytecoder.stringconstants[99];
        // Here was a goto statement
        phi28 = var24;
        phi29 = var27;
        break If_99_0;
       }
      }
      var30 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(phi28,phi29));
      // line number 553
      var31 = phi6;
      var32 = (var31.Z$hasNext$$());
      if (var32 != 0) {
       // line number 555
       var36 = phi7;
       var37 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var36,44));
       var38 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var37,32));
       // line number 556
       // Here was a goto statement
       continue L1047076420;
      } else {
       // line number 554
       var33 = phi7;
       var34 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var33,125));
       var35 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var34));
       return var35;
      }
     }
    } else {
     // line number 542
     return bytecoder.stringconstants[98];
    }
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is AbstractMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var phi7 = null;
    var phi8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var phi12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = 0;
    var phi24 = null;
    var phi25 = null;
    var phi26 = null;
    var phi27 = null;
    var phi28 = null;
    var phi29 = null;
    var phi30 = null;
    var phi31 = null;
    var phi32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = 0;
    var0 = arg0;
    // line number 475
    var1 = this;
    if (var0 != var1) {
     // line number 478
     var2 = (bytecoder.instanceOf(var0,java$util$Map)) | 0;
     if (var2 == 0) {
      // line number 479
      return 0;
     } else {
      var3 = var0;
      var4 = var3;
      // Here was a goto statement
      // line number 480
      var5 = ((var4.I$size$$())) | 0;
      var6 = ((this.I$size$$())) | 0;
      if (var5 == var6) {
       phi7 = this;
       phi8 = var4;
       TryCatch_49_0: {
        TryCatch_49_1: {
         try {
          // line number 484
          var9 = phi7;
          var10 = (var9.Ljava$util$Set$$entrySet$$());
          var11 = (var10.Ljava$util$Iterator$$iterator$$());
          phi12 = var11;
          L345167245: while(true) {
           var13 = phi12;
           var14 = (var13.Z$hasNext$$());
           if (var14 == 0) {
            // line number 497
            // Here was a goto statement
            // line number 499
            return 1;
           } else {
            var15 = phi12;
            var16 = (var15.Ljava$lang$Object$$next$$());
            var17 = var16;
            // line number 485
            var18 = (var17.Ljava$lang$Object$$getKey$$());
            // line number 486
            var19 = (var17.Ljava$lang$Object$$getValue$$());
            // line number 487
            If_99_0: {
             if (var19 != null) {
              phi30 = var17;
              phi31 = var18;
              phi32 = var19;
              TryCatch_137_0: {
               try {
                // line number 491
                var33 = phi32;
                var34 = phi8;
                var35 = phi31;
                var36 = (var34.Ljava$lang$Object$$get$Ljava$lang$Object$(var35));
                var37 = (var33.Z$equals$Ljava$lang$Object$(var36));
                if (var37 != 0) {
                 phi27 = phi30;
                 phi28 = phi31;
                 phi29 = phi32;
                 break If_99_0;
                } else {
                 // line number 492
                 break TryCatch_137_0;
                }
               } catch (__ex) {
                if (__ex instanceof java$lang$ClassCastException) {
                 // line number 495
                 // line number 496
                 return 0;
                }
                if (__ex instanceof java$lang$NullPointerException) {
                 // line number 495
                 // line number 496
                 return 0;
                }
                throw __ex;
               }
              }
              return 0;
             } else {
              // line number 488
              var20 = phi8;
              var21 = (var20.Ljava$lang$Object$$get$Ljava$lang$Object$(var18));
              If_108_0: {
               if (var21 != null) {
                phi24 = var17;
                phi25 = var18;
                phi26 = var19;
                break If_108_0;
               } else {
                var22 = phi8;
                var23 = (var22.Z$containsKey$Ljava$lang$Object$(var18));
                if (var23 != 0) {
                 phi27 = var17;
                 phi28 = var18;
                 phi29 = var19;
                 break If_99_0;
                } else {
                 phi24 = var17;
                 phi25 = var18;
                 phi26 = var19;
                 break If_108_0;
                }
               }
              }
              // line number 489
              break TryCatch_49_1;
             }
            }
            try {
             // line number 494
             // Here was a goto statement
             continue L345167245;
            } catch (__ex) {
             if (__ex instanceof java$lang$ClassCastException) {
              // line number 495
              // line number 496
              return 0;
             }
             if (__ex instanceof java$lang$NullPointerException) {
              // line number 495
              // line number 496
              return 0;
             }
             throw __ex;
            }
           }
          }
         } catch (__ex) {
          if (__ex instanceof java$lang$ClassCastException) {
           // line number 495
           // line number 496
           return 0;
          }
          if (__ex instanceof java$lang$NullPointerException) {
           // line number 495
           // line number 496
           return 0;
          }
          throw __ex;
         }
        }
        return 0;
       }
       // line number 495
       // line number 496
       return 0;
      } else {
       // line number 481
       return 0;
      }
     }
    } else {
     // line number 476
     return 1;
    }
  }

  I$size$$() {
    // source file is AbstractMap.java
    var var0 = null;
    var var1 = 0;
    // line number 84
    var0 = (this.Ljava$util$Set$$entrySet$$());
    var1 = ((var0.I$size$$())) | 0;
    return var1;
  }

  I$hashCode$$() {
    // source file is AbstractMap.java
    var var0 = null;
    var var1 = null;
    var phi2 = 0;
    var phi3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    // line number 521
    // line number 522
    var0 = (this.Ljava$util$Set$$entrySet$$());
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    phi2 = (0) | 0;
    phi3 = var1;
    L1719351666: while(true) {
     var4 = phi3;
     var5 = (var4.Z$hasNext$$());
     if (var5 == 0) {
      // line number 524
      var12 = (phi2) | 0;
      return var12;
     } else {
      var6 = phi3;
      var7 = (var6.Ljava$lang$Object$$next$$());
      var8 = var7;
      // line number 523
      var9 = (phi2) | 0;
      var10 = ((var8.I$hashCode$$())) | 0;
      var11 = ((var9 + var10)) | 0;
      // Here was a goto statement
      phi2 = (var11) | 0;
      continue L1719351666;
     }
    }
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is AbstractMap.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 208
    var1 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var1);
    throw bytecoder.registerStack(var1, new Error().stack);
  }
}

java$util$AbstractMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class java$io$Closeable extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$Closeable,[java$lang$Object,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$nio$charset$Charset extends java$lang$Object {
  nativeObject = null;

  static defaultCharset = null;
  canonicalName = null;
  aliases = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$Charset,[java$lang$Object,java$nio$charset$Charset,java$lang$Comparable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$nio$charset$Charset$$defaultCharset$$() {
    // source file is Charset.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    // line number 35
    var0 = (java$nio$charset$Charset.defaultCharset);
    If_8_0: {
     if (var0 != null) {
      break If_8_0;
     } else {
      // line number 36
      var1 = new de$mirkosertic$bytecoder$classlib$BytecoderCharset();
      var2 = bytecoder.stringconstants[45];
      var3 = bytecoder.newarray((0),null);
      de$mirkosertic$bytecoder$classlib$BytecoderCharset.prototype.V$$init$$Ljava$lang$String$$$Ljava$lang$String$.call(var1,var2,var3);
      java$nio$charset$Charset.defaultCharset = var1;
      break If_8_0;
     }
    }
    // line number 38
    var4 = (java$nio$charset$Charset.defaultCharset);
    return var4;
  }

  V$$init$$Ljava$lang$String$$$Ljava$lang$String$(arg0,arg1) {
    // source file is Charset.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 45
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 46
    var1 = this;
    var1.canonicalName = var0;
    // line number 47
    var2 = this;
    var2.aliases = arg1;
    // line number 48
    return;
  }

  Ljava$lang$String$$name$$() {
    // source file is Charset.java
    var var0 = null;
    // line number 51
    var0 = (this.canonicalName);
    return var0;
  }
}


class java$util$HashMap$Node extends java$lang$Object {
  nativeObject = null;

  next = null;
  hash = 0;
  key = null;
  value = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap$Node,[java$util$HashMap$Node,java$util$Map$Entry,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 287
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 288
    var2 = this;
    var2.hash = var0;
    // line number 289
    var3 = this;
    var3.key = arg1;
    // line number 290
    var4 = this;
    var4.value = var1;
    // line number 291
    var5 = this;
    var5.next = arg3;
    // line number 292
    return;
  }

  Ljava$lang$String$$toString$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    // line number 296
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (this.key);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var0,var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[100]));
    var4 = (this.value);
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var3,var4));
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
    return var6;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = 0;
    var phi16 = null;
    var phi17 = null;
    var phi18 = null;
    var0 = arg0;
    // line number 309
    var1 = this;
    if (var0 != var1) {
     // line number 314
     var2 = (bytecoder.instanceOf(var0,java$util$Map$Entry)) | 0;
     If_22_0: {
      If_22_1: {
       if (var2 == 0) {
        phi16 = this;
        phi17 = var0;
        break If_22_1;
       } else {
        // line number 312
        var3 = var0;
        var4 = (this.key);
        // line number 313
        var5 = (var3.Ljava$lang$Object$$getKey$$());
        var6 = (java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var4,var5));
        if (var6 == 0) {
         phi16 = this;
         phi17 = var0;
         phi18 = var3;
         break If_22_1;
        } else {
         var7 = this;
         var8 = (var7.value);
         // line number 314
         var9 = (var3.Ljava$lang$Object$$getValue$$());
         var10 = (java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var8,var9));
         if (var10 == 0) {
          phi16 = this;
          phi17 = var0;
          phi18 = var3;
          break If_22_1;
         } else {
          var11 = (1) | 0;
          // Here was a goto statement
          phi12 = this;
          phi13 = var0;
          phi14 = var3;
          phi15 = (var11) | 0;
          break If_22_0;
         }
        }
       }
      }
      phi12 = phi16;
      phi13 = phi17;
      phi14 = phi18;
      phi15 = (0) | 0;
      break If_22_0;
     }
     // line number 312
     return phi15;
    } else {
     // line number 310
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    // line number 299
    var0 = (this.key);
    var1 = ((java$util$Objects.I$hashCode$Ljava$lang$Object$(var0))) | 0;
    var2 = (this.value);
    var3 = ((java$util$Objects.I$hashCode$Ljava$lang$Object$(var2))) | 0;
    var4 = ((var1 ^ var3)) | 0;
    return var4;
  }

  Ljava$lang$Object$$getKey$$() {
    // source file is HashMap.java
    var var0 = null;
    // line number 294
    var0 = (this.key);
    return var0;
  }

  Ljava$lang$Object$$getValue$$() {
    // source file is HashMap.java
    var var0 = null;
    // line number 295
    var0 = (this.value);
    return var0;
  }
}


class java$lang$Exception extends java$lang$Throwable {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Exception,[java$lang$Exception,java$lang$Throwable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is Exception.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 67
    var1 = var0;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 68
    return;
  }

  V$$init$$$() {
    // source file is Exception.java
    // line number 55
    java$lang$Throwable.prototype.V$$init$$$.call(this);
    // line number 56
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is Exception.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 103
    var1 = var0;
    java$lang$Throwable.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 104
    return;
  }
}


class java$util$ImmutableCollections$SetN$SetNIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  remaining = 0;
  idx = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$SetN$SetNIterator,[java$lang$Object,java$util$ImmutableCollections$SetN$SetNIterator,java$util$Iterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$SetN$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var0 = this;
    // line number 947
    var1 = arg0;
    var0.this$0 = var1;
    java$lang$Object.prototype.V$$init$$$.call(var0);
    // line number 948
    var2 = ((arg0.size)) | 0;
    var0.remaining = var2;
    // line number 951
    java$util$ImmutableCollections.$i;
    var3 = (java$util$ImmutableCollections.SALT32L);
    var4 = (arg0.elements);
    var5 = (var4.data.length) | 0;
    var6 = (var5 | 0);
    var7 = (var3 * var6);
    var8 = (var7 >>> 32);
    var9 = ((var8 | 0)) | 0;
    var0.idx = var9;
    // line number 952
    return;
  }

  Z$hasNext$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 956
    var0 = ((this.remaining)) | 0;
    If_7_0: {
     if (var0 <= 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  Ljava$lang$Object$$next$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    var var26 = null;
    // line number 961
    var0 = ((this.remaining)) | 0;
    if (var0 <= 0) {
     // line number 981
     var26 = new java$util$NoSuchElementException();
     java$util$NoSuchElementException.prototype.V$$init$$$.call(var26);
     throw bytecoder.registerStack(var26, new Error().stack);
    } else {
     // line number 963
     var1 = ((this.idx)) | 0;
     // line number 964
     var2 = (this.this$0);
     var3 = (var2.elements);
     var4 = (var3.data.length) | 0;
     phi5 = this;
     phi6 = (var1) | 0;
     phi7 = (var4) | 0;
     L482907452: while(true) {
      // line number 967
      java$util$ImmutableCollections.$i;
      var8 = (java$util$ImmutableCollections.REVERSE);
      If_37_0: {
       if (var8 == 0) {
        // line number 972
        phi6 = ((phi6 + -1)) | 0;
        var23 = (phi6) | 0;
        if (var23 >= 0) {
         phi11 = (phi6) | 0;
         break If_37_0;
        } else {
         // line number 973
         var24 = (phi7) | 0;
         var25 = ((var24 - 1)) | 0;
         phi11 = (var25) | 0;
         break If_37_0;
        }
       } else {
        // line number 968
        phi6 = ((phi6 + 1)) | 0;
        var9 = (phi6) | 0;
        var10 = (phi7) | 0;
        if (var9 < var10) {
         phi11 = (phi6) | 0;
         break If_37_0;
        } else {
         // line number 969
         // Here was a goto statement
         phi11 = (0) | 0;
         break If_37_0;
        }
       }
      }
      // line number 976
      var12 = phi5;
      var13 = (var12.this$0);
      var14 = (var13.elements);
      var15 = (phi11) | 0;
      var16 = (var14.data[var15]);
      var17 = var16;
      if (var16 == null) {
       phi6 = (phi11) | 0;
       continue L482907452;
      } else {
       // line number 977
       var18 = phi5;
       var19 = (phi11) | 0;
       var18.idx = var19;
       // line number 978
       var20 = phi5;
       var21 = ((var20.remaining)) | 0;
       var22 = ((var21 - 1)) | 0;
       var20.remaining = var22;
       // line number 979
       return var17;
      }
     }
    }
  }
}


class java$util$HashMap$EntryIterator extends java$util$HashMap$HashIterator {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap$EntryIterator,[java$lang$Object,java$util$HashMap$EntryIterator,java$util$Iterator,java$util$HashMap$HashIterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 1636
    var1 = var0;
    java$util$HashMap$HashIterator.prototype.V$$init$$Ljava$util$HashMap$.call(this,var1);
    return;
  }

  Ljava$lang$Object$$next$$() {
    // source file is HashMap.java
    var var0 = null;
    // line number 1636
    var0 = (java$util$HashMap$EntryIterator.prototype.Ljava$util$Map$Entry$$next$$.call(this));
    return var0;
  }

  Ljava$util$Map$Entry$$next$$() {
    // source file is HashMap.java
    var var0 = null;
    // line number 1638
    var0 = (this.Ljava$util$HashMap$Node$$nextNode$$());
    return var0;
  }
}


class java$util$Collection extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collection,[java$lang$Iterable,java$lang$Object,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$io$PrintStream$1 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$PrintStream$1,[java$lang$Object,java$io$PrintStream$1,jdk$internal$access$JavaIOPrintStreamAccess]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is PrintStream.java
    // line number 1541
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$CharBuffer extends java$nio$Buffer {
  nativeObject = null;

  static $assertionsDisabled = false;
  static ARRAY_BASE_OFFSET = 0;
  hb = null;
  offset = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$CharBuffer,[java$lang$Object,java$nio$Buffer,java$lang$CharSequence,java$lang$Readable,java$lang$Appendable,java$lang$Comparable,java$nio$CharBuffer]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$Buffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    // line number 268
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$CharBuffer.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$CharBuffer.$i;
    java$nio$CharBuffer.$assertionsDisabled = phi2;
    // line number 283
    var3 = (java$nio$CharBuffer.UNSAFE);
    var4 = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var3,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var5 = (var4 | 0);
    java$nio$CharBuffer.ARRAY_BASE_OFFSET = var5;
    return;
  }

  static Ljava$nio$CharBuffer$$allocate$I(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    // line number 372
    if (arg0 >= 0) {
     // line number 374
     java$nio$HeapCharBuffer.$i;
     var1 = new java$nio$HeapCharBuffer();
     var2 = (arg0) | 0;
     var3 = null;
     java$nio$HeapCharBuffer.prototype.V$$init$$I$I$Ljava$lang$foreign$MemorySegment$.call(var1,var2,arg0,var3);
     return var1;
    } else {
     // line number 373
     java$nio$CharBuffer.$i;
     var0 = (java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0));
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    var2 = arg4;
    var3 = arg6;
    // line number 299
    var4 = (var0) | 0;
    var5 = (var1) | 0;
    var6 = var3;
    java$nio$Buffer.prototype.V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$.call(this,var4,arg1,var5,arg3,var6);
    // line number 300
    var7 = this;
    var7.hb = var2;
    // line number 301
    var8 = this;
    var8.offset = arg5;
    // line number 302
    return;
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var0 = arg0;
    // line number 1438
    var1 = var0;
    var2 = ((java$lang$String.prototype.I$length$$.call(var0))) | 0;
    var3 = (this.Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(var1,0,var2));
    return var3;
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 1406
    var2 = (var1) | 0;
    var3 = ((var2 - arg1)) | 0;
    var4 = ((java$lang$String.prototype.I$length$$.call(var0))) | 0;
    var5 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var3,var4))) | 0;
    // line number 1407
    var6 = (this.Z$isReadOnly$$());
    if (var6 == 0) {
     // line number 1409
     var8 = ((var1 - arg1)) | 0;
     var9 = ((this.I$remaining$$())) | 0;
     if (var8 <= var9) {
      // line number 1411
      var11 = (arg1) | 0;
      phi12 = this;
      phi13 = var0;
      phi14 = (var1) | 0;
      phi15 = (var11) | 0;
      L1210205057: while(true) {
       var16 = (phi15) | 0;
       var17 = (phi14) | 0;
       if (var16 >= var17) {
        // line number 1413
        var23 = phi12;
        return var23;
       } else {
        // line number 1412
        var18 = phi12;
        var19 = phi13;
        var20 = (phi15) | 0;
        var21 = (java$lang$String.prototype.C$charAt$I.call(var19,var20));
        var22 = (var18.Ljava$nio$CharBuffer$$put$C(var21));
        // line number 1411
        phi15 = ((phi15 + 1)) | 0;
        // Here was a goto statement
        continue L1210205057;
       }
      }
     } else {
      // line number 1410
      var10 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var10);
      throw bytecoder.registerStack(var10, new Error().stack);
     }
    } else {
     // line number 1408
     var7 = new java$nio$ReadOnlyBufferException();
     java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var7);
     throw bytecoder.registerStack(var7, new Error().stack);
    }
  }

  Z$isEmpty$$() {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 1901
    var0 = ((this.I$remaining$$())) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  I$length$$() {
    // source file is CharBuffer.java
    var var0 = 0;
    // line number 1889
    var0 = ((this.I$remaining$$())) | 0;
    return var0;
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    var2 = arg4;
    // line number 307
    var3 = (var0) | 0;
    var4 = (var1) | 0;
    var5 = null;
    java$nio$CharBuffer.prototype.V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$.call(this,var3,arg1,var4,arg3,var5,0,var2);
    // line number 308
    return;
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 268
    var1 = (var0) | 0;
    var2 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$limit$I.call(this,var1));
    return var2;
  }

  Ljava$nio$CharBuffer$$limit$I(arg0) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 1540
    var1 = (var0) | 0;
    var2 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$limit$I.call(this,var1));
    // line number 1541
    return this;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 268
    var1 = (var0) | 0;
    var2 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(this,var1));
    return var2;
  }

  Ljava$nio$CharBuffer$$position$I(arg0) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 1527
    var1 = (var0) | 0;
    var2 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$position$I.call(this,var1));
    // line number 1528
    return this;
  }

  Ljava$nio$Buffer$$flip$$() {
    // source file is CharBuffer.java
    var var0 = null;
    // line number 268
    var0 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$flip$$.call(this));
    return var0;
  }

  Ljava$nio$CharBuffer$$flip$$() {
    // source file is CharBuffer.java
    var var0 = null;
    // line number 1592
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$flip$$.call(this));
    // line number 1593
    return this;
  }

  Ljava$nio$Buffer$$clear$$() {
    // source file is CharBuffer.java
    var var0 = null;
    // line number 268
    var0 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$clear$$.call(this));
    return var0;
  }

  Ljava$nio$CharBuffer$$clear$$() {
    // source file is CharBuffer.java
    var var0 = null;
    // line number 1579
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$clear$$.call(this));
    // line number 1580
    return this;
  }

  static Ljava$nio$CharBuffer$$wrap$$C$I$I(arg0,arg1,arg2) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var0 = (arg1) | 0;
    TryCatch_6_0: {
     try {
      // line number 419
      java$nio$HeapCharBuffer.$i;
      var2 = new java$nio$HeapCharBuffer();
      var3 = arg0;
      var4 = (arg2) | 0;
      java$nio$HeapCharBuffer.prototype.V$$init$$$C$I$I$Ljava$lang$foreign$MemorySegment$.call(var2,var3,var0,var4,null);
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IllegalArgumentException) {
       // line number 420
       // line number 421
       var1 = new java$lang$IndexOutOfBoundsException();
       java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var1);
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var2;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 268
    var1 = var0;
    var2 = var1;
    var3 = ((java$nio$CharBuffer.prototype.I$compareTo$Ljava$nio$CharBuffer$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$nio$CharBuffer$(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var0 = arg0;
    // line number 1790
    var1 = ((this.I$position$$())) | 0;
    // line number 1791
    var2 = ((this.I$limit$$())) | 0;
    var3 = ((var2 - var1)) | 0;
    // line number 1792
    var4 = ((var0.I$position$$())) | 0;
    // line number 1793
    var5 = ((var0.I$limit$$())) | 0;
    var6 = ((var5 - var4)) | 0;
    // line number 1794
    var7 = (var6) | 0;
    java$lang$Math.$i;
    var8 = ((java$lang$Math.I$min$I$I(var3,var7))) | 0;
    // line number 1795
    if (var8 >= 0) {
     // line number 1797
     var9 = (var1) | 0;
     var10 = (var4) | 0;
     java$nio$BufferMismatch.$i;
     var11 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(this,var9,var0,var10,var8))) | 0;
     // line number 1800
     if (var11 < 0) {
      // line number 1803
      var19 = (var6) | 0;
      var20 = ((var3 - var19)) | 0;
      return var20;
     } else {
      // line number 1801
      var12 = (var1) | 0;
      var13 = ((var12 + var11)) | 0;
      var14 = (this.C$get$I(var13));
      var15 = (var4) | 0;
      var16 = ((var15 + var11)) | 0;
      var17 = (var0.C$get$I(var16));
      java$nio$CharBuffer.$i;
      var18 = ((java$nio$CharBuffer.I$compare$C$C(var14,var17))) | 0;
      return var18;
     }
    } else {
     // line number 1796
     return -1;
    }
  }

  Ljava$lang$Object$$base$$() {
    // source file is CharBuffer.java
    var var0 = null;
    // line number 320
    var0 = (this.hb);
    return var0;
  }

  static I$compare$C$C(arg0,arg1) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = arg1;
    // line number 1813
    var1 = var0;
    var2 = ((java$lang$Character.I$compare$C$C(arg0,var1))) | 0;
    return var2;
  }

  Ljava$lang$String$$toString$$() {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    // line number 1870
    var0 = this;
    var1 = ((var0.I$position$$())) | 0;
    var2 = ((this.I$limit$$())) | 0;
    var3 = (this.Ljava$lang$String$$toString$I$I(var1,var2));
    return var3;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var phi22 = null;
    var phi23 = null;
    var phi24 = null;
    var phi25 = 0;
    var phi26 = 0;
    var phi27 = 0;
    var phi28 = 0;
    var phi29 = 0;
    var0 = arg0;
    // line number 1750
    var1 = var0;
    if (this != var1) {
     // line number 1752
     var2 = (bytecoder.instanceOf(var0,java$nio$CharBuffer)) | 0;
     if (var2 != 0) {
      // line number 1754
      var3 = var0;
      // line number 1755
      var4 = ((this.I$position$$())) | 0;
      // line number 1756
      var5 = ((this.I$limit$$())) | 0;
      var6 = ((var5 - var4)) | 0;
      // line number 1757
      var7 = ((var3.I$position$$())) | 0;
      // line number 1758
      var8 = ((var3.I$limit$$())) | 0;
      var9 = ((var8 - var7)) | 0;
      // line number 1759
      If_63_0: {
       if (var6 < 0) {
        phi11 = this;
        phi12 = var0;
        phi13 = var3;
        phi14 = (var4) | 0;
        phi15 = (var6) | 0;
        phi16 = (var7) | 0;
        phi17 = (var9) | 0;
        break If_63_0;
       } else {
        var10 = (var6) | 0;
        if (var10 == var9) {
         // line number 1761
         var18 = (var4) | 0;
         var19 = (var7) | 0;
         java$nio$BufferMismatch.$i;
         var20 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$CharBuffer$$I$Ljava$nio$CharBuffer$$I$I(this,var18,var3,var19,var6))) | 0;
         If_94_0: {
          if (var20 >= 0) {
           phi22 = this;
           phi23 = var0;
           phi24 = var3;
           phi25 = (var4) | 0;
           phi26 = (var6) | 0;
           phi27 = (var7) | 0;
           phi28 = (var9) | 0;
           phi29 = (0) | 0;
           break If_94_0;
          } else {
           var21 = (1) | 0;
           // Here was a goto statement
           phi22 = this;
           phi23 = var0;
           phi24 = var3;
           phi25 = (var4) | 0;
           phi26 = (var6) | 0;
           phi27 = (var7) | 0;
           phi28 = (var9) | 0;
           phi29 = (var21) | 0;
           break If_94_0;
          }
         }
         return phi29;
        } else {
         phi11 = this;
         phi12 = var0;
         phi13 = var3;
         phi14 = (var4) | 0;
         phi15 = (var6) | 0;
         phi16 = (var7) | 0;
         phi17 = (var9) | 0;
         break If_63_0;
        }
       }
      }
      // line number 1760
      return 0;
     } else {
      // line number 1753
      return 0;
     }
    } else {
     // line number 1751
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    // line number 1706
    // line number 1707
    var0 = ((this.I$position$$())) | 0;
    // line number 1708
    var1 = ((this.I$limit$$())) | 0;
    var2 = ((var1 - 1)) | 0;
    phi3 = this;
    phi4 = (1) | 0;
    phi5 = (var0) | 0;
    phi6 = (var2) | 0;
    L873636317: while(true) {
     var7 = (phi6) | 0;
     var8 = (phi5) | 0;
     if (var7 < var8) {
      // line number 1714
      var15 = (phi4) | 0;
      return var15;
     } else {
      // line number 1712
      var9 = (phi4) | 0;
      var10 = ((31 * var9)) | 0;
      var11 = phi3;
      var12 = (phi6) | 0;
      var13 = (var11.C$get$I(var12));
      var14 = ((var10 + var13)) | 0;
      // line number 1708
      phi6 = ((phi6 + -1)) | 0;
      // Here was a goto statement
      phi4 = (var14) | 0;
      continue L873636317;
     }
    }
  }

  Ljava$nio$CharBuffer$$put$$C(arg0) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var0 = arg0;
    // line number 1221
    var1 = var0;
    var2 = (var0.data.length) | 0;
    var3 = (this.Ljava$nio$CharBuffer$$put$$C$I$I(var1,0,var2));
    return var3;
  }

  Ljava$nio$CharBuffer$$put$$C$I$I(arg0,arg1,arg2) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    var var16 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 1185
    var2 = (this.Z$isReadOnly$$());
    if (var2 == 0) {
     // line number 1187
     var4 = var0;
     var5 = (var4.data.length) | 0;
     var6 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var1,var5))) | 0;
     // line number 1188
     var7 = ((this.I$position$$())) | 0;
     // line number 1189
     var8 = ((this.I$limit$$())) | 0;
     var9 = ((var8 - var7)) | 0;
     if (var1 <= var9) {
      // line number 1192
      var11 = (var7) | 0;
      var12 = (var1) | 0;
      var13 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$putArray$I$$C$I$I.call(this,var11,var0,arg1,var12));
      // line number 1194
      var14 = (var7) | 0;
      var15 = ((var14 + var1)) | 0;
      var16 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(this,var15));
      // line number 1195
      return this;
     } else {
      // line number 1190
      var10 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var10);
      throw bytecoder.registerStack(var10, new Error().stack);
     }
    } else {
     // line number 1186
     var3 = new java$nio$ReadOnlyBufferException();
     java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var3);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  Ljava$nio$CharBuffer$$putArray$I$$C$I$I(arg0,arg1,arg2,arg3) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = null;
    var phi20 = 0;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = 0;
    var phi24 = 0;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = 0;
    var var34 = null;
    var var35 = null;
    var var36 = 0;
    var var37 = 0;
    var var38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = null;
    var var44 = 0;
    var var45 = null;
    var var46 = null;
    var var47 = 0;
    var var48 = 0;
    var phi49 = null;
    var phi50 = 0;
    var phi51 = null;
    var phi52 = 0;
    var phi53 = 0;
    var var54 = 0;
    var var55 = 0;
    var var56 = 0;
    var var57 = 0;
    var var58 = 0;
    var phi59 = 0;
    var phi60 = 0;
    var phi61 = 0;
    var var62 = 0;
    var var63 = 0;
    var var64 = null;
    var var65 = 0;
    var var66 = null;
    var var67 = 0;
    var var68 = 0;
    var var69 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    // line number 1315
    // line number 1317
    var2 = (java$nio$CharBuffer.prototype.Z$isAddressable$$.call(this));
    If_17_0: {
     If_17_1: {
      if (var2 == 0) {
       phi49 = this;
       phi50 = (var0) | 0;
       phi51 = arg1;
       phi52 = (var1) | 0;
       phi53 = (arg3) | 0;
       break If_17_1;
      } else {
       var3 = (arg3) | 0;
       var4 = (var3 | 0);
       var5 = (var4 << 1);
       var6 = (bytecoder.cmp(var5,6)) | 0;
       if (var6 <= 0) {
        phi49 = this;
        phi50 = (var0) | 0;
        phi51 = arg1;
        phi52 = (var1) | 0;
        phi53 = (arg3) | 0;
        break If_17_1;
       } else {
        // line number 1320
        var7 = (this.address);
        var8 = (var0 | 0);
        var9 = (var8 << 1);
        var10 = (var7 + var9);
        // line number 1321
        java$nio$CharBuffer.$i;
        var11 = (java$nio$CharBuffer.ARRAY_BASE_OFFSET);
        var12 = (var1 | 0);
        var13 = (var12 << 1);
        var14 = (var11 + var13);
        // line number 1323
        var15 = (arg3 | 0);
        var16 = (var15 << 1);
        phi17 = this;
        phi18 = (var0) | 0;
        phi19 = arg1;
        phi20 = (var1) | 0;
        phi21 = (arg3) | 0;
        phi22 = var10;
        phi23 = var14;
        phi24 = var16;
        TryCatch_85_0: {
         try {
          // line number 1327
          var26 = phi17;
          var27 = (var26.Ljava$nio$ByteOrder$$order$$());
          java$nio$ByteOrder.$i;
          var28 = (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$());
          if (var27 == var28) {
           // line number 1333
           var40 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var41 = phi17;
           // line number 1334
           var42 = (var41.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var43 = phi19;
           var44 = phi23;
           var45 = phi17;
           // line number 1335
           var46 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(var45));
           var47 = phi22;
           var48 = phi24;
           // line number 1333
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var40,null,var42,var43,var44,var46,var47,var48);
           break TryCatch_85_0;
          } else {
           // line number 1328
           var29 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var30 = phi17;
           // line number 1329
           var31 = (var30.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var32 = phi19;
           var33 = phi23;
           var34 = phi17;
           // line number 1330
           var35 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(var34));
           var36 = phi22;
           var37 = phi24;
           // line number 1328
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copySwapMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(var29,null,var31,var32,var33,var35,var36,var37,2);
           // Here was a goto statement
           break TryCatch_85_0;
          }
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_86_0: {
            // line number 1337
            break TryCatch_86_0;
           }
           var25 = phi17;
           java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var25);
           // line number 1338
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 1337
        var38 = phi17;
        java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var38);
        // line number 1338
        // Here was a goto statement
        // line number 1339
        // Here was a goto statement
        break If_17_0;
       }
      }
     }
     // line number 1340
     var54 = (phi52) | 0;
     var55 = (phi53) | 0;
     var56 = ((var54 + var55)) | 0;
     // line number 1341
     var57 = (phi52) | 0;
     var58 = (phi50) | 0;
     phi59 = (var56) | 0;
     phi60 = (var57) | 0;
     phi61 = (var58) | 0;
     L1744942244: while(true) {
      var62 = (phi60) | 0;
      var63 = (phi59) | 0;
      if (var62 >= var63) {
       phi17 = phi49;
       phi18 = (phi50) | 0;
       phi19 = phi51;
       phi20 = (phi52) | 0;
       phi21 = (phi53) | 0;
       phi22 = phi59;
       phi23 = phi61;
       break If_17_0;
      } else {
       // line number 1342
       var64 = phi49;
       var65 = (phi61) | 0;
       var66 = phi51;
       var67 = (phi60) | 0;
       var68 = (var66.data[var67]);
       var69 = (var64.Ljava$nio$CharBuffer$$put$I$C(var65,var68));
       // line number 1341
       phi60 = ((phi60 + 1)) | 0;
       phi61 = ((phi61 + 1)) | 0;
       // Here was a goto statement
       continue L1744942244;
      }
     }
    }
    // line number 1344
    var39 = phi17;
    return var39;
  }

  Z$isAddressable$$() {
    // source file is CharBuffer.java
    // line number 1668
    return 1;
  }

  Ljava$nio$CharBuffer$$get$$C$I$I(arg0,arg1,arg2) {
    // source file is CharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 806
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 807
    var5 = ((this.I$position$$())) | 0;
    // line number 808
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 811
     var9 = (var5) | 0;
     var10 = (var1) | 0;
     var11 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$getArray$I$$C$I$I.call(this,var9,var0,arg1,var10));
     // line number 813
     var12 = (var5) | 0;
     var13 = ((var12 + var1)) | 0;
     var14 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$position$I.call(this,var13));
     // line number 814
     return this;
    } else {
     // line number 809
     var8 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }

  Ljava$nio$CharBuffer$$getArray$I$$C$I$I(arg0,arg1,arg2,arg3) {
    // source file is CharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = null;
    var phi20 = 0;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = 0;
    var phi24 = 0;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = 0;
    var var35 = null;
    var var36 = 0;
    var var37 = 0;
    var var38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = null;
    var var44 = null;
    var var45 = 0;
    var var46 = null;
    var var47 = 0;
    var var48 = 0;
    var phi49 = null;
    var phi50 = 0;
    var phi51 = null;
    var phi52 = 0;
    var phi53 = 0;
    var var54 = 0;
    var var55 = 0;
    var var56 = 0;
    var var57 = 0;
    var var58 = 0;
    var phi59 = 0;
    var phi60 = 0;
    var phi61 = 0;
    var var62 = 0;
    var var63 = 0;
    var var64 = null;
    var var65 = 0;
    var var66 = null;
    var var67 = 0;
    var var68 = 0;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    // line number 925
    // line number 927
    var2 = (java$nio$CharBuffer.prototype.Z$isAddressable$$.call(this));
    If_17_0: {
     If_17_1: {
      if (var2 == 0) {
       phi49 = this;
       phi50 = (var0) | 0;
       phi51 = arg1;
       phi52 = (var1) | 0;
       phi53 = (arg3) | 0;
       break If_17_1;
      } else {
       var3 = (arg3) | 0;
       var4 = (var3 | 0);
       var5 = (var4 << 1);
       var6 = (bytecoder.cmp(var5,6)) | 0;
       if (var6 <= 0) {
        phi49 = this;
        phi50 = (var0) | 0;
        phi51 = arg1;
        phi52 = (var1) | 0;
        phi53 = (arg3) | 0;
        break If_17_1;
       } else {
        // line number 930
        var7 = (this.address);
        var8 = (var0 | 0);
        var9 = (var8 << 1);
        var10 = (var7 + var9);
        // line number 931
        java$nio$CharBuffer.$i;
        var11 = (java$nio$CharBuffer.ARRAY_BASE_OFFSET);
        var12 = (var1 | 0);
        var13 = (var12 << 1);
        var14 = (var11 + var13);
        // line number 933
        var15 = (arg3 | 0);
        var16 = (var15 << 1);
        phi17 = this;
        phi18 = (var0) | 0;
        phi19 = arg1;
        phi20 = (var1) | 0;
        phi21 = (arg3) | 0;
        phi22 = var10;
        phi23 = var14;
        phi24 = var16;
        TryCatch_85_0: {
         try {
          // line number 937
          var26 = phi17;
          var27 = (var26.Ljava$nio$ByteOrder$$order$$());
          java$nio$ByteOrder.$i;
          var28 = (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$());
          if (var27 == var28) {
           // line number 943
           var40 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var41 = phi17;
           // line number 944
           var42 = (var41.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var43 = phi17;
           var44 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(var43));
           var45 = phi22;
           var46 = phi19;
           var47 = phi23;
           var48 = phi24;
           // line number 943
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var40,var42,null,var44,var45,var46,var47,var48);
           break TryCatch_85_0;
          } else {
           // line number 938
           var29 = (java$nio$CharBuffer.SCOPED_MEMORY_ACCESS);
           var30 = phi17;
           // line number 939
           var31 = (var30.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
           var32 = phi17;
           var33 = (java$nio$CharBuffer.prototype.Ljava$lang$Object$$base$$.call(var32));
           var34 = phi22;
           var35 = phi19;
           var36 = phi23;
           var37 = phi24;
           // line number 938
           jdk$internal$misc$ScopedMemoryAccess.prototype.V$copySwapMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J$J.call(var29,var31,null,var33,var34,var35,var36,var37,2);
           // Here was a goto statement
           break TryCatch_85_0;
          }
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_86_0: {
            // line number 947
            break TryCatch_86_0;
           }
           var25 = phi17;
           java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var25);
           // line number 948
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 947
        var38 = phi17;
        java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var38);
        // line number 948
        // Here was a goto statement
        // line number 949
        // Here was a goto statement
        break If_17_0;
       }
      }
     }
     // line number 950
     var54 = (phi52) | 0;
     var55 = (phi53) | 0;
     var56 = ((var54 + var55)) | 0;
     // line number 951
     var57 = (phi52) | 0;
     var58 = (phi50) | 0;
     phi59 = (var56) | 0;
     phi60 = (var57) | 0;
     phi61 = (var58) | 0;
     L1573509207: while(true) {
      var62 = (phi60) | 0;
      var63 = (phi59) | 0;
      if (var62 >= var63) {
       phi17 = phi49;
       phi18 = (phi50) | 0;
       phi19 = phi51;
       phi20 = (phi52) | 0;
       phi21 = (phi53) | 0;
       phi22 = phi59;
       phi23 = phi61;
       break If_17_0;
      } else {
       // line number 952
       var64 = phi51;
       var65 = (phi60) | 0;
       var66 = phi49;
       var67 = (phi61) | 0;
       var68 = (var66.C$get$I(var67));
       var64.data[var65] = var68;
       // line number 951
       phi60 = ((phi60 + 1)) | 0;
       phi61 = ((phi61 + 1)) | 0;
       // Here was a goto statement
       continue L1573509207;
      }
     }
    }
    // line number 955
    var39 = phi17;
    return var39;
  }
}


class java$nio$ByteBuffer extends java$nio$Buffer {
  nativeObject = null;

  static $assertionsDisabled = false;
  static ARRAY_BASE_OFFSET = 0;
  bigEndian = false;
  nativeByteOrder = false;
  hb = null;
  offset = 0;
  isReadOnly = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$ByteBuffer,[java$nio$ByteBuffer,java$lang$Object,java$nio$Buffer,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$Buffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    // line number 268
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$ByteBuffer.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$ByteBuffer.$i;
    java$nio$ByteBuffer.$assertionsDisabled = phi2;
    // line number 283
    var3 = (java$nio$ByteBuffer.UNSAFE);
    var4 = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var3,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var5 = (var4 | 0);
    java$nio$ByteBuffer.ARRAY_BASE_OFFSET = var5;
    return;
  }

  static Ljava$nio$ByteBuffer$$allocate$I(arg0) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    // line number 372
    if (arg0 >= 0) {
     // line number 374
     java$nio$HeapByteBuffer.$i;
     var1 = new java$nio$HeapByteBuffer();
     var2 = (arg0) | 0;
     var3 = null;
     java$nio$HeapByteBuffer.prototype.V$$init$$I$I$Ljava$lang$foreign$MemorySegment$.call(var1,var2,arg0,var3);
     return var1;
    } else {
     // line number 373
     java$nio$ByteBuffer.$i;
     var0 = (java$nio$Buffer.Ljava$lang$IllegalArgumentException$$createCapacityException$I(arg0));
     throw bytecoder.registerStack(var0, new Error().stack);
    }
  }

  V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4,arg5,arg6) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var phi14 = 0;
    var phi15 = 0;
    var phi16 = null;
    var phi17 = 0;
    var phi18 = null;
    var phi19 = null;
    var phi20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    var2 = arg4;
    var3 = arg6;
    // line number 299
    var4 = (var0) | 0;
    var5 = (var1) | 0;
    var6 = var3;
    java$nio$Buffer.prototype.V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$.call(this,var4,arg1,var5,arg3,var6);
    // line number 2091
    var7 = this;
    var7.bigEndian = 1;
    // line number 2093
    // line number 2094
    java$nio$ByteOrder.$i;
    var8 = (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$());
    var9 = (java$nio$ByteOrder.BIG_ENDIAN);
    If_45_0: {
     if (var8 != var9) {
      phi11 = this;
      phi12 = (var0) | 0;
      phi13 = (arg1) | 0;
      phi14 = (var1) | 0;
      phi15 = (arg3) | 0;
      phi16 = var2;
      phi17 = (arg5) | 0;
      phi18 = var3;
      phi19 = this;
      phi20 = (0) | 0;
      break If_45_0;
     } else {
      var10 = (1) | 0;
      // Here was a goto statement
      phi11 = this;
      phi12 = (var0) | 0;
      phi13 = (arg1) | 0;
      phi14 = (var1) | 0;
      phi15 = (arg3) | 0;
      phi16 = var2;
      phi17 = (arg5) | 0;
      phi18 = var3;
      phi19 = this;
      phi20 = (var10) | 0;
      break If_45_0;
     }
    }
    phi19.nativeByteOrder = phi20;
    // line number 300
    var21 = phi11;
    var22 = phi16;
    var21.hb = var22;
    // line number 301
    var23 = phi11;
    var24 = (phi17) | 0;
    var23.offset = var24;
    // line number 302
    return;
  }

  Ljava$nio$ByteBuffer$$flip$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    // line number 1592
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$flip$$.call(this));
    // line number 1593
    return this;
  }

  Ljava$nio$ByteBuffer$$clear$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    // line number 1579
    var0 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$clear$$.call(this));
    // line number 1580
    return this;
  }

  $B$array$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    // line number 1481
    var0 = (this.hb);
    if (var0 != null) {
     // line number 1483
     var2 = (this.isReadOnly);
     if (var2 == 0) {
      // line number 1485
      var4 = (this.hb);
      return var4;
     } else {
      // line number 1484
      var3 = new java$nio$ReadOnlyBufferException();
      java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var3);
      throw bytecoder.registerStack(var3, new Error().stack);
     }
    } else {
     // line number 1482
     var1 = new java$lang$UnsupportedOperationException();
     java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  I$arrayOffset$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    // line number 1509
    var0 = (this.hb);
    if (var0 != null) {
     // line number 1511
     var2 = (this.isReadOnly);
     if (var2 == 0) {
      // line number 1513
      var4 = ((this.offset)) | 0;
      return var4;
     } else {
      // line number 1512
      var3 = new java$nio$ReadOnlyBufferException();
      java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var3);
      throw bytecoder.registerStack(var3, new Error().stack);
     }
    } else {
     // line number 1510
     var1 = new java$lang$UnsupportedOperationException();
     java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  static Ljava$nio$ByteBuffer$$wrap$$B(arg0) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    // line number 448
    var0 = (0) | 0;
    var1 = (arg0.data.length) | 0;
    java$nio$ByteBuffer.$i;
    var2 = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$wrap$$B$I$I(arg0,var0,var1));
    return var2;
  }

  static Ljava$nio$ByteBuffer$$wrap$$B$I$I(arg0,arg1,arg2) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var0 = (arg1) | 0;
    TryCatch_6_0: {
     try {
      // line number 419
      java$nio$HeapByteBuffer.$i;
      var2 = new java$nio$HeapByteBuffer();
      var3 = arg0;
      var4 = (arg2) | 0;
      java$nio$HeapByteBuffer.prototype.V$$init$$$B$I$I$Ljava$lang$foreign$MemorySegment$.call(var2,var3,var0,var4,null);
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IllegalArgumentException) {
       // line number 420
       // line number 421
       var1 = new java$lang$IndexOutOfBoundsException();
       java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var1);
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var2;
  }

  Ljava$nio$ByteBuffer$$position$I(arg0) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 1527
    var1 = (var0) | 0;
    var2 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$position$I.call(this,var1));
    // line number 1528
    return this;
  }

  V$$init$$I$I$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3,arg4) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    var2 = arg4;
    // line number 307
    var3 = (var0) | 0;
    var4 = (var1) | 0;
    var5 = null;
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(this,var3,arg1,var4,arg3,var5,0,var2);
    // line number 308
    return;
  }

  Ljava$nio$Buffer$$limit$I(arg0) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 268
    var1 = (var0) | 0;
    var2 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$limit$I.call(this,var1));
    return var2;
  }

  Ljava$nio$ByteBuffer$$limit$I(arg0) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 1540
    var1 = (var0) | 0;
    var2 = (java$nio$Buffer.prototype.Ljava$nio$Buffer$$limit$I.call(this,var1));
    // line number 1541
    return this;
  }

  Ljava$nio$Buffer$$position$I(arg0) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 268
    var1 = (var0) | 0;
    var2 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(this,var1));
    return var2;
  }

  Ljava$nio$Buffer$$flip$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    // line number 268
    var0 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$flip$$.call(this));
    return var0;
  }

  Ljava$nio$Buffer$$clear$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    // line number 268
    var0 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$clear$$.call(this));
    return var0;
  }

  Ljava$nio$ByteBuffer$$put$$B(arg0) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var0 = arg0;
    // line number 1221
    var1 = var0;
    var2 = (var0.data.length) | 0;
    var3 = (this.Ljava$nio$ByteBuffer$$put$$B$I$I(var1,0,var2));
    return var3;
  }

  Ljava$nio$ByteBuffer$$put$$B$I$I(arg0,arg1,arg2) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    var var16 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 1185
    var2 = (this.Z$isReadOnly$$());
    if (var2 == 0) {
     // line number 1187
     var4 = var0;
     var5 = (var4.data.length) | 0;
     var6 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var1,var5))) | 0;
     // line number 1188
     var7 = ((this.I$position$$())) | 0;
     // line number 1189
     var8 = ((this.I$limit$$())) | 0;
     var9 = ((var8 - var7)) | 0;
     if (var1 <= var9) {
      // line number 1192
      var11 = (var7) | 0;
      var12 = (var1) | 0;
      var13 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$putArray$I$$B$I$I.call(this,var11,var0,arg1,var12));
      // line number 1194
      var14 = (var7) | 0;
      var15 = ((var14 + var1)) | 0;
      var16 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(this,var15));
      // line number 1195
      return this;
     } else {
      // line number 1190
      var10 = new java$nio$BufferOverflowException();
      java$nio$BufferOverflowException.prototype.V$$init$$$.call(var10);
      throw bytecoder.registerStack(var10, new Error().stack);
     }
    } else {
     // line number 1186
     var3 = new java$nio$ReadOnlyBufferException();
     java$nio$ReadOnlyBufferException.prototype.V$$init$$$.call(var3);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  Ljava$nio$ByteBuffer$$putArray$I$$B$I$I(arg0,arg1,arg2,arg3) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var phi15 = null;
    var phi16 = 0;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = 0;
    var phi20 = 0;
    var phi21 = 0;
    var phi22 = 0;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = null;
    var var30 = null;
    var var31 = 0;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = 0;
    var var36 = 0;
    var var37 = 0;
    var var38 = 0;
    var phi39 = null;
    var phi40 = 0;
    var phi41 = null;
    var phi42 = 0;
    var phi43 = 0;
    var phi44 = 0;
    var phi45 = 0;
    var phi46 = 0;
    var var47 = 0;
    var var48 = 0;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = 0;
    var var53 = 0;
    var var54 = null;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    // line number 1315
    var2 = (arg3 | 0);
    var3 = (var2 << 0);
    var4 = (bytecoder.cmp(var3,6)) | 0;
    If_23_0: {
     if (var4 <= 0) {
      // line number 1340
      var35 = (arg3) | 0;
      var36 = ((var1 + var35)) | 0;
      // line number 1341
      var37 = (var1) | 0;
      var38 = (var0) | 0;
      phi39 = this;
      phi40 = (var0) | 0;
      phi41 = arg1;
      phi42 = (var1) | 0;
      phi43 = (arg3) | 0;
      phi44 = (var36) | 0;
      phi45 = (var37) | 0;
      phi46 = (var38) | 0;
      L1874361203: while(true) {
       var47 = (phi45) | 0;
       var48 = (phi44) | 0;
       if (var47 >= var48) {
        phi15 = phi39;
        phi16 = (phi40) | 0;
        phi17 = phi41;
        phi18 = (phi42) | 0;
        phi19 = (phi43) | 0;
        phi20 = phi44;
        phi21 = phi46;
        break If_23_0;
       } else {
        // line number 1342
        var49 = phi39;
        var50 = (phi46) | 0;
        var51 = phi41;
        var52 = (phi45) | 0;
        var53 = (var51.data[var52]);
        var54 = (var49.Ljava$nio$ByteBuffer$$put$I$B(var50,var53));
        // line number 1341
        phi45 = ((phi45 + 1)) | 0;
        phi46 = ((phi46 + 1)) | 0;
        // Here was a goto statement
        continue L1874361203;
       }
      }
     } else {
      // line number 1320
      var5 = (this.address);
      var6 = (var0 | 0);
      var7 = (var6 << 0);
      var8 = (var5 + var7);
      // line number 1321
      java$nio$ByteBuffer.$i;
      var9 = (java$nio$ByteBuffer.ARRAY_BASE_OFFSET);
      var10 = (var1 | 0);
      var11 = (var10 << 0);
      var12 = (var9 + var11);
      // line number 1323
      var13 = (arg3 | 0);
      var14 = (var13 << 0);
      phi15 = this;
      phi16 = (var0) | 0;
      phi17 = arg1;
      phi18 = (var1) | 0;
      phi19 = (arg3) | 0;
      phi20 = var8;
      phi21 = var12;
      phi22 = var14;
      TryCatch_75_0: {
       try {
        // line number 1333
        var24 = (java$nio$ByteBuffer.SCOPED_MEMORY_ACCESS);
        var25 = phi15;
        // line number 1334
        var26 = (var25.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
        var27 = phi17;
        var28 = phi21;
        var29 = phi15;
        // line number 1335
        var30 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(var29));
        var31 = phi20;
        var32 = phi22;
        // line number 1333
        jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var24,null,var26,var27,var28,var30,var31,var32);
        break TryCatch_75_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_76_0: {
          // line number 1337
          break TryCatch_76_0;
         }
         var23 = phi15;
         java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var23);
         // line number 1338
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 1337
      var33 = phi15;
      java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var33);
      // line number 1338
      // Here was a goto statement
      // line number 1339
      // Here was a goto statement
      break If_23_0;
     }
    }
    // line number 1344
    var34 = phi15;
    return var34;
  }

  Ljava$lang$Object$$base$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    // line number 320
    var0 = (this.hb);
    return var0;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 268
    var1 = var0;
    var2 = var1;
    var3 = ((java$nio$ByteBuffer.prototype.I$compareTo$Ljava$nio$ByteBuffer$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$nio$ByteBuffer$(arg0) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var0 = arg0;
    // line number 1790
    var1 = ((this.I$position$$())) | 0;
    // line number 1791
    var2 = ((this.I$limit$$())) | 0;
    var3 = ((var2 - var1)) | 0;
    // line number 1792
    var4 = ((var0.I$position$$())) | 0;
    // line number 1793
    var5 = ((var0.I$limit$$())) | 0;
    var6 = ((var5 - var4)) | 0;
    // line number 1794
    var7 = (var6) | 0;
    java$lang$Math.$i;
    var8 = ((java$lang$Math.I$min$I$I(var3,var7))) | 0;
    // line number 1795
    if (var8 >= 0) {
     // line number 1797
     var9 = (var1) | 0;
     var10 = (var4) | 0;
     java$nio$BufferMismatch.$i;
     var11 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(this,var9,var0,var10,var8))) | 0;
     // line number 1800
     if (var11 < 0) {
      // line number 1803
      var19 = (var6) | 0;
      var20 = ((var3 - var19)) | 0;
      return var20;
     } else {
      // line number 1801
      var12 = (var1) | 0;
      var13 = ((var12 + var11)) | 0;
      var14 = (this.B$get$I(var13));
      var15 = (var4) | 0;
      var16 = ((var15 + var11)) | 0;
      var17 = (var0.B$get$I(var16));
      java$nio$ByteBuffer.$i;
      var18 = ((java$nio$ByteBuffer.I$compare$B$B(var14,var17))) | 0;
      return var18;
     }
    } else {
     // line number 1796
     return -1;
    }
  }

  static I$compare$B$B(arg0,arg1) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = arg1;
    // line number 1813
    var1 = var0;
    java$lang$Byte.$i;
    var2 = ((java$lang$Byte.I$compare$B$B(arg0,var1))) | 0;
    return var2;
  }

  Ljava$lang$String$$toString$$() {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    // line number 1680
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = ((this).constructor.$rt);
    var2 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,var2));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[94]));
    // line number 1681
    var5 = ((this.I$position$$())) | 0;
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var5));
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var6,bytecoder.stringconstants[95]));
    // line number 1682
    var8 = ((this.I$limit$$())) | 0;
    var9 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var7,var8));
    var10 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var9,bytecoder.stringconstants[96]));
    // line number 1683
    var11 = ((this.I$capacity$$())) | 0;
    var12 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var10,var11));
    var13 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var12,bytecoder.stringconstants[82]));
    var14 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var13));
    // line number 1680
    return var14;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var phi22 = null;
    var phi23 = null;
    var phi24 = null;
    var phi25 = 0;
    var phi26 = 0;
    var phi27 = 0;
    var phi28 = 0;
    var phi29 = 0;
    var0 = arg0;
    // line number 1750
    var1 = var0;
    if (this != var1) {
     // line number 1752
     var2 = (bytecoder.instanceOf(var0,java$nio$ByteBuffer)) | 0;
     if (var2 != 0) {
      // line number 1754
      var3 = var0;
      // line number 1755
      var4 = ((this.I$position$$())) | 0;
      // line number 1756
      var5 = ((this.I$limit$$())) | 0;
      var6 = ((var5 - var4)) | 0;
      // line number 1757
      var7 = ((var3.I$position$$())) | 0;
      // line number 1758
      var8 = ((var3.I$limit$$())) | 0;
      var9 = ((var8 - var7)) | 0;
      // line number 1759
      If_63_0: {
       if (var6 < 0) {
        phi11 = this;
        phi12 = var0;
        phi13 = var3;
        phi14 = (var4) | 0;
        phi15 = (var6) | 0;
        phi16 = (var7) | 0;
        phi17 = (var9) | 0;
        break If_63_0;
       } else {
        var10 = (var6) | 0;
        if (var10 == var9) {
         // line number 1761
         var18 = (var4) | 0;
         var19 = (var7) | 0;
         java$nio$BufferMismatch.$i;
         var20 = ((java$nio$BufferMismatch.I$mismatch$Ljava$nio$ByteBuffer$$I$Ljava$nio$ByteBuffer$$I$I(this,var18,var3,var19,var6))) | 0;
         If_94_0: {
          if (var20 >= 0) {
           phi22 = this;
           phi23 = var0;
           phi24 = var3;
           phi25 = (var4) | 0;
           phi26 = (var6) | 0;
           phi27 = (var7) | 0;
           phi28 = (var9) | 0;
           phi29 = (0) | 0;
           break If_94_0;
          } else {
           var21 = (1) | 0;
           // Here was a goto statement
           phi22 = this;
           phi23 = var0;
           phi24 = var3;
           phi25 = (var4) | 0;
           phi26 = (var6) | 0;
           phi27 = (var7) | 0;
           phi28 = (var9) | 0;
           phi29 = (var21) | 0;
           break If_94_0;
          }
         }
         return phi29;
        } else {
         phi11 = this;
         phi12 = var0;
         phi13 = var3;
         phi14 = (var4) | 0;
         phi15 = (var6) | 0;
         phi16 = (var7) | 0;
         phi17 = (var9) | 0;
         break If_63_0;
        }
       }
      }
      // line number 1760
      return 0;
     } else {
      // line number 1753
      return 0;
     }
    } else {
     // line number 1751
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    // line number 1706
    // line number 1707
    var0 = ((this.I$position$$())) | 0;
    // line number 1708
    var1 = ((this.I$limit$$())) | 0;
    var2 = ((var1 - 1)) | 0;
    phi3 = this;
    phi4 = (1) | 0;
    phi5 = (var0) | 0;
    phi6 = (var2) | 0;
    L1469304196: while(true) {
     var7 = (phi6) | 0;
     var8 = (phi5) | 0;
     if (var7 < var8) {
      // line number 1714
      var15 = (phi4) | 0;
      return var15;
     } else {
      // line number 1712
      var9 = (phi4) | 0;
      var10 = ((31 * var9)) | 0;
      var11 = phi3;
      var12 = (phi6) | 0;
      var13 = (var11.B$get$I(var12));
      var14 = ((var10 + var13)) | 0;
      // line number 1708
      phi6 = ((phi6 + -1)) | 0;
      // Here was a goto statement
      phi4 = (var14) | 0;
      continue L1469304196;
     }
    }
  }

  Ljava$nio$ByteBuffer$$get$$B$I$I(arg0,arg1,arg2) {
    // source file is ByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 806
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 807
    var5 = ((this.I$position$$())) | 0;
    // line number 808
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 811
     var9 = (var5) | 0;
     var10 = (var1) | 0;
     var11 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$getArray$I$$B$I$I.call(this,var9,var0,arg1,var10));
     // line number 813
     var12 = (var5) | 0;
     var13 = ((var12 + var1)) | 0;
     var14 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$position$I.call(this,var13));
     // line number 814
     return this;
    } else {
     // line number 809
     var8 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }

  Ljava$nio$ByteBuffer$$getArray$I$$B$I$I(arg0,arg1,arg2,arg3) {
    // source file is ByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var phi15 = null;
    var phi16 = 0;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = 0;
    var phi20 = 0;
    var phi21 = 0;
    var phi22 = 0;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var var30 = null;
    var var31 = 0;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = 0;
    var var36 = 0;
    var var37 = 0;
    var var38 = 0;
    var phi39 = null;
    var phi40 = 0;
    var phi41 = null;
    var phi42 = 0;
    var phi43 = 0;
    var phi44 = 0;
    var phi45 = 0;
    var phi46 = 0;
    var var47 = 0;
    var var48 = 0;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = 0;
    var var53 = 0;
    var0 = (arg0) | 0;
    var1 = (arg2) | 0;
    // line number 925
    var2 = (arg3 | 0);
    var3 = (var2 << 0);
    var4 = (bytecoder.cmp(var3,6)) | 0;
    If_23_0: {
     if (var4 <= 0) {
      // line number 950
      var35 = (arg3) | 0;
      var36 = ((var1 + var35)) | 0;
      // line number 951
      var37 = (var1) | 0;
      var38 = (var0) | 0;
      phi39 = this;
      phi40 = (var0) | 0;
      phi41 = arg1;
      phi42 = (var1) | 0;
      phi43 = (arg3) | 0;
      phi44 = (var36) | 0;
      phi45 = (var37) | 0;
      phi46 = (var38) | 0;
      L1314653507: while(true) {
       var47 = (phi45) | 0;
       var48 = (phi44) | 0;
       if (var47 >= var48) {
        phi15 = phi39;
        phi16 = (phi40) | 0;
        phi17 = phi41;
        phi18 = (phi42) | 0;
        phi19 = (phi43) | 0;
        phi20 = phi44;
        phi21 = phi46;
        break If_23_0;
       } else {
        // line number 952
        var49 = phi41;
        var50 = (phi45) | 0;
        var51 = phi39;
        var52 = (phi46) | 0;
        var53 = (var51.B$get$I(var52));
        var49.data[var50] = var53;
        // line number 951
        phi45 = ((phi45 + 1)) | 0;
        phi46 = ((phi46 + 1)) | 0;
        // Here was a goto statement
        continue L1314653507;
       }
      }
     } else {
      // line number 930
      var5 = (this.address);
      var6 = (var0 | 0);
      var7 = (var6 << 0);
      var8 = (var5 + var7);
      // line number 931
      java$nio$ByteBuffer.$i;
      var9 = (java$nio$ByteBuffer.ARRAY_BASE_OFFSET);
      var10 = (var1 | 0);
      var11 = (var10 << 0);
      var12 = (var9 + var11);
      // line number 933
      var13 = (arg3 | 0);
      var14 = (var13 << 0);
      phi15 = this;
      phi16 = (var0) | 0;
      phi17 = arg1;
      phi18 = (var1) | 0;
      phi19 = (arg3) | 0;
      phi20 = var8;
      phi21 = var12;
      phi22 = var14;
      TryCatch_75_0: {
       try {
        // line number 943
        var24 = (java$nio$ByteBuffer.SCOPED_MEMORY_ACCESS);
        var25 = phi15;
        // line number 944
        var26 = (var25.Ljdk$internal$foreign$MemorySessionImpl$$session$$());
        var27 = phi15;
        var28 = (java$nio$ByteBuffer.prototype.Ljava$lang$Object$$base$$.call(var27));
        var29 = phi20;
        var30 = phi17;
        var31 = phi21;
        var32 = phi22;
        // line number 943
        jdk$internal$misc$ScopedMemoryAccess.prototype.V$copyMemory$Ljdk$internal$foreign$MemorySessionImpl$$Ljdk$internal$foreign$MemorySessionImpl$$Ljava$lang$Object$$J$Ljava$lang$Object$$J$J.call(var24,var26,null,var28,var29,var30,var31,var32);
        break TryCatch_75_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_76_0: {
          // line number 947
          break TryCatch_76_0;
         }
         var23 = phi15;
         java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var23);
         // line number 948
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 947
      var33 = phi15;
      java$lang$ref$Reference.V$reachabilityFence$Ljava$lang$Object$(var33);
      // line number 948
      // Here was a goto statement
      // line number 949
      // Here was a goto statement
      break If_23_0;
     }
    }
    // line number 955
    var34 = phi15;
    return var34;
  }
}


class java$lang$ref$WeakReference extends java$lang$ref$Reference {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ref$WeakReference,[java$lang$ref$WeakReference,java$lang$ref$Reference,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    // source file is WeakReference.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 26
    var1 = var0;
    de$mirkosertic$bytecoder$classlib$java$lang$ref$TReference.prototype.V$$init$$Ljava$lang$Object$.call(this,var1);
    // line number 27
    return;
  }
}


class java$util$AbstractList$Itr extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  cursor = 0;
  lastRet = 0;
  expectedModCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractList$Itr,[java$lang$Object,java$util$AbstractList$Itr,java$util$Iterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$AbstractList$(arg0) {
    // source file is AbstractList.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var0 = this;
    // line number 345
    var1 = arg0;
    var0.this$0 = var1;
    java$lang$Object.prototype.V$$init$$$.call(var0);
    // line number 349
    var0.cursor = 0;
    // line number 356
    var0.lastRet = -1;
    // line number 363
    var2 = var0;
    var3 = (var2.this$0);
    var4 = ((var3.modCount)) | 0;
    var0.expectedModCount = var4;
    return;
  }

  Z$hasNext$$() {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = 0;
    // line number 366
    var0 = ((this.cursor)) | 0;
    var1 = (this.this$0);
    var2 = ((var1.I$size$$())) | 0;
    If_13_0: {
     if (var0 == var2) {
      phi4 = this;
      phi5 = (0) | 0;
      break If_13_0;
     } else {
      var3 = (1) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = (var3) | 0;
      break If_13_0;
     }
    }
    return phi5;
  }

  Ljava$lang$Object$$next$$() {
    // source file is AbstractList.java
    var phi0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    // line number 370
    java$util$AbstractList$Itr.prototype.V$checkForComodification$$.call(this);
    phi0 = this;
    TryCatch_6_0: {
     try {
      // line number 372
      var4 = phi0;
      var5 = ((var4.cursor)) | 0;
      // line number 373
      var6 = phi0;
      var7 = (var6.this$0);
      var8 = (var7.Ljava$lang$Object$$get$I(var5));
      // line number 374
      var9 = phi0;
      var9.lastRet = var5;
      // line number 375
      var10 = phi0;
      var11 = ((var5 + 1)) | 0;
      var10.cursor = var11;
      // line number 376
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IndexOutOfBoundsException) {
       // line number 377
       // line number 378
       var1 = phi0;
       java$util$AbstractList$Itr.prototype.V$checkForComodification$$.call(var1);
       // line number 379
       var2 = new java$util$NoSuchElementException();
       var3 = __ex;
       java$util$NoSuchElementException.prototype.V$$init$$Ljava$lang$Throwable$.call(var2,var3);
       throw bytecoder.registerStack(var2, new Error().stack);
      }
      throw __ex;
     }
    }
    return var8;
  }

  V$checkForComodification$$() {
    // source file is AbstractList.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    // line number 400
    var0 = (this.this$0);
    var1 = ((var0.modCount)) | 0;
    var2 = ((this.expectedModCount)) | 0;
    if (var1 == var2) {
     // line number 402
     return;
    } else {
     // line number 401
     var3 = new java$util$ConcurrentModificationException();
     java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var3);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }
}


class java$util$ListIterator extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ListIterator,[java$lang$Object,java$util$Iterator,java$util$ListIterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$util$ImmutableCollections$MapN$MapNIterator extends java$lang$Object {
  nativeObject = null;

  this$0 = null;
  remaining = 0;
  idx = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$MapN$MapNIterator,[java$lang$Object,java$util$ImmutableCollections$MapN$MapNIterator,java$util$Iterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$MapN$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var0 = this;
    // line number 1259
    var1 = arg0;
    var0.this$0 = var1;
    java$lang$Object.prototype.V$$init$$$.call(var0);
    // line number 1260
    var2 = ((arg0.size)) | 0;
    var0.remaining = var2;
    // line number 1263
    java$util$ImmutableCollections.$i;
    var3 = (java$util$ImmutableCollections.SALT32L);
    var4 = (arg0.table);
    var5 = (var4.data.length) | 0;
    var6 = ((var5 >> 1)) | 0;
    var7 = (var6 | 0);
    var8 = (var3 * var7);
    var9 = (var8 >>> 32);
    var10 = ((var9 | 0)) | 0;
    var11 = ((var10 << 1)) | 0;
    var0.idx = var11;
    // line number 1264
    return;
  }

  Z$hasNext$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 1268
    var0 = ((this.remaining)) | 0;
    If_7_0: {
     if (var0 <= 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  Ljava$lang$Object$$next$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    // line number 1253
    var0 = (java$util$ImmutableCollections$MapN$MapNIterator.prototype.Ljava$util$Map$Entry$$next$$.call(this));
    return var0;
  }

  Ljava$util$Map$Entry$$next$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var phi1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = 0;
    var var22 = null;
    // line number 1287
    var0 = ((this.remaining)) | 0;
    if (var0 <= 0) {
     // line number 1296
     var22 = new java$util$NoSuchElementException();
     java$util$NoSuchElementException.prototype.V$$init$$$.call(var22);
     throw bytecoder.registerStack(var22, new Error().stack);
    } else {
     phi1 = this;
     L1322631798: while(true) {
      // line number 1289
      var2 = phi1;
      var3 = (var2.this$0);
      var4 = (var3.table);
      var5 = phi1;
      var6 = ((java$util$ImmutableCollections$MapN$MapNIterator.prototype.I$nextIndex$$.call(var5))) | 0;
      var7 = (var6) | 0;
      var8 = (var4.data[var6]);
      if (var8 != null) {
       // line number 1291
       var9 = new java$util$KeyValueHolder();
       var10 = phi1;
       var11 = (var10.this$0);
       var12 = (var11.table);
       var13 = (var12.data[var7]);
       var14 = phi1;
       var15 = (var14.this$0);
       var16 = (var15.table);
       var17 = ((var7 + 1)) | 0;
       var18 = (var16.data[var17]);
       java$util$KeyValueHolder.prototype.V$$init$$Ljava$lang$Object$$Ljava$lang$Object$.call(var9,var13,var18);
       // line number 1293
       var19 = phi1;
       var20 = ((var19.remaining)) | 0;
       var21 = ((var20 - 1)) | 0;
       var19.remaining = var21;
       // line number 1294
       return var9;
      } else {
       // Here was a goto statement
       continue L1322631798;
      }
     }
    }
  }

  I$nextIndex$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var phi7 = null;
    var phi8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    // line number 1272
    var0 = ((this.idx)) | 0;
    // line number 1273
    java$util$ImmutableCollections.$i;
    var1 = (java$util$ImmutableCollections.REVERSE);
    If_14_0: {
     if (var1 == 0) {
      // line number 1278
      var11 = ((var0 + -2)) | 0;
      if (var11 >= 0) {
       phi7 = this;
       phi8 = (var11) | 0;
       break If_14_0;
      } else {
       // line number 1279
       var12 = (this.this$0);
       var13 = (var12.table);
       var14 = (var13.data.length) | 0;
       var15 = ((var14 - 2)) | 0;
       phi7 = this;
       phi8 = (var15) | 0;
       break If_14_0;
      }
     } else {
      // line number 1274
      var2 = ((var0 + 2)) | 0;
      var3 = (this.this$0);
      var4 = (var3.table);
      var5 = (var4.data.length) | 0;
      if (var2 < var5) {
       phi7 = this;
       phi8 = (var2) | 0;
       break If_14_0;
      } else {
       // line number 1275
       var6 = (0) | 0;
       // Here was a goto statement
       phi7 = this;
       phi8 = (var6) | 0;
       break If_14_0;
      }
     }
    }
    // line number 1282
    var9 = phi7;
    var10 = (phi8) | 0;
    var9.idx = var10;
    return var10;
  }
}


class jdk$internal$util$Preconditions$2 extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$util$Preconditions$2,[jdk$internal$util$Preconditions$2,java$lang$Object,java$util$function$Function]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.Ljava$lang$Object$$apply$Ljava$lang$Object$ = impl;
  }

  V$$init$$$() {
    // source file is Preconditions.java
    // line number 60
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$lang$Object$$apply$Ljava$lang$Object$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 60
    var1 = var0;
    var2 = var1;
    var3 = (jdk$internal$util$Preconditions$2.prototype.Ljava$lang$ArrayIndexOutOfBoundsException$$apply$Ljava$lang$String$.call(this,var2));
    return var3;
  }

  Ljava$lang$ArrayIndexOutOfBoundsException$$apply$Ljava$lang$String$(arg0) {
    // source file is Preconditions.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 63
    var1 = new java$lang$ArrayIndexOutOfBoundsException();
    var2 = var0;
    java$lang$ArrayIndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
    return var1;
  }
}


class java$util$KeyValueHolder extends java$lang$Object {
  nativeObject = null;

  key = null;
  value = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$KeyValueHolder,[java$util$Map$Entry,java$lang$Object,java$util$KeyValueHolder]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is KeyValueHolder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 60
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 61
    var1 = this;
    var2 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    var1.key = var2;
    // line number 62
    var3 = this;
    var4 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    var3.value = var4;
    // line number 63
    return;
  }

  Ljava$lang$String$$toString$$() {
    // source file is KeyValueHolder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    // line number 129
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (this.key);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var0,var1));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[100]));
    var4 = (this.value);
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var3,var4));
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var5));
    return var6;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is KeyValueHolder.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = null;
    var phi16 = null;
    var phi17 = null;
    var0 = arg0;
    // line number 106
    var1 = (bytecoder.instanceOf(var0,java$util$Map$Entry)) | 0;
    If_11_0: {
     If_11_1: {
      if (var1 == 0) {
       phi15 = this;
       phi16 = var0;
       break If_11_1;
      } else {
       // line number 104
       var2 = var0;
       var3 = (this.key);
       // line number 105
       var4 = (var2.Ljava$lang$Object$$getKey$$());
       var5 = (var3.Z$equals$Ljava$lang$Object$(var4));
       if (var5 == 0) {
        phi15 = this;
        phi16 = var0;
        phi17 = var2;
        break If_11_1;
       } else {
        var6 = this;
        var7 = (var6.value);
        // line number 106
        var8 = (var2.Ljava$lang$Object$$getValue$$());
        var9 = (var7.Z$equals$Ljava$lang$Object$(var8));
        if (var9 == 0) {
         phi15 = this;
         phi16 = var0;
         phi17 = var2;
         break If_11_1;
        } else {
         var10 = (1) | 0;
         // Here was a goto statement
         phi11 = this;
         phi12 = var0;
         phi13 = var2;
         phi14 = (var10) | 0;
         break If_11_0;
        }
       }
      }
     }
     phi11 = phi15;
     phi12 = phi16;
     phi13 = phi17;
     phi14 = (0) | 0;
     break If_11_0;
    }
    // line number 104
    return phi14;
  }

  I$hashCode$$() {
    // source file is KeyValueHolder.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    // line number 116
    var0 = (this.key);
    var1 = ((var0.I$hashCode$$())) | 0;
    var2 = (this.value);
    var3 = ((var2.I$hashCode$$())) | 0;
    var4 = ((var1 ^ var3)) | 0;
    return var4;
  }

  Ljava$lang$Object$$getKey$$() {
    // source file is KeyValueHolder.java
    var var0 = null;
    // line number 72
    var0 = (this.key);
    return var0;
  }

  Ljava$lang$Object$$getValue$$() {
    // source file is KeyValueHolder.java
    var var0 = null;
    // line number 82
    var0 = (this.value);
    return var0;
  }
}


class java$lang$Thread extends java$lang$Object {
  nativeObject = null;

  static MAIN_THREAD = null;
  threadGroup = null;
  runnable = null;
  name = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Thread,[java$lang$Object,java$lang$Runnable,java$lang$Thread]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$lang$Thread$$currentThread$$() {
    // source file is Thread.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    // line number 26
    var0 = (java$lang$Thread.MAIN_THREAD);
    If_8_0: {
     if (var0 != null) {
      break If_8_0;
     } else {
      // line number 27
      java$lang$ThreadGroup.$i;
      var1 = new java$lang$ThreadGroup();
      de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
      var2 = (de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM);
      var3 = var2;
      java$lang$ThreadGroup.prototype.V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$.call(var1,var3,bytecoder.stringconstants[43]);
      // line number 28
      var4 = new java$lang$Thread();
      var5 = var1;
      java$lang$Thread.prototype.V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$.call(var4,var5,bytecoder.stringconstants[43]);
      java$lang$Thread.MAIN_THREAD = var4;
      break If_8_0;
     }
    }
    // line number 30
    var6 = (java$lang$Thread.MAIN_THREAD);
    return var6;
  }

  V$$init$$Ljava$lang$ThreadGroup$$Ljava$lang$String$(arg0,arg1) {
    // source file is Thread.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 62
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 63
    var1 = this;
    var1.threadGroup = var0;
    // line number 64
    var2 = this;
    var2.runnable = null;
    // line number 65
    var3 = this;
    var3.name = arg1;
    // line number 66
    return;
  }

  Z$isVirtual$$() {
    // source file is Thread.java
    // line number 153
    return 0;
  }

  V$interrupt$$() {
    // source file is Thread.java
    // line number 88
    return;
  }

  V$$init$$$() {
    // source file is Thread.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    // line number 38
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 39
    var0 = this;
    var0.runnable = null;
    // line number 40
    var1 = this;
    de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.$i;
    var2 = (de$mirkosertic$bytecoder$classlib$java$lang$TThreadGroup.SYSTEM);
    var3 = var2;
    var1.threadGroup = var3;
    // line number 41
    var4 = this;
    var4.name = bytecoder.stringconstants[97];
    // line number 42
    return;
  }
}


class java$util$Hashtable extends java$util$Dictionary {
  nativeObject = null;

  modCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Hashtable,[java$lang$Cloneable,java$util$Dictionary,java$lang$Object,java$util$Hashtable,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Void$(arg0) {
    // source file is Hashtable.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 240
    java$util$Dictionary.prototype.V$$init$$$.call(this);
    // line number 171
    var1 = this;
    var1.modCount = 0;
    // line number 240
    return;
  }
}

java$util$Hashtable.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class java$lang$String extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$String,[java$lang$String,java$lang$Object,java$lang$CharSequence,java$lang$Comparable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is String.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 123
    if (var0 != null) {
     // line number 126
     var1 = this;
     if (var0 != var1) {
      // line number 129
      var2 = (var0.Ljava$lang$String$$toString$$());
      var3 = (java$lang$String.prototype.Z$equals0$Ljava$lang$String$.call(this,var2));
      return var3;
     } else {
      // line number 127
      return 1;
     }
    } else {
     // line number 124
     return 0;
    }
  }

  Z$equals0$Ljava$lang$String$(arg0) {
    return bytecoder.imports['java.lang.String'].Z$equals0$Ljava$lang$String$(this, arg0);
  }

  static Ljava$lang$String$$valueOf$Ljava$lang$Object$(arg0) {
    // source file is String.java
    var var0 = null;
    // line number 76
    if (arg0 != null) {
     // line number 79
     var0 = (arg0.Ljava$lang$String$$toString$$());
     return var0;
    } else {
     // line number 77
     return bytecoder.stringconstants[0];
    }
  }

  I$length$$() {
    return bytecoder.imports['java.lang.String'].I$length$$(this);
  }

  V$getChars$I$I$$C$I(arg0,arg1,arg2,arg3) {
    bytecoder.imports['java.lang.String'].V$getChars$I$I$$C$I(this, arg0, arg1, arg2, arg3);
  }

  static Ljava$lang$String$$valueOf$I(arg0) {
    // source file is String.java
    var var0 = null;
    // line number 95
    java$lang$Integer.$i;
    var0 = (java$lang$Integer.Ljava$lang$String$$toString$I(arg0));
    return var0;
  }

  static Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(arg0,arg1) {
    return bytecoder.imports['java.lang.String'].Ljava$lang$String$$format$Ljava$lang$String$$$Ljava$lang$Object$(arg0, arg1);
  }

  I$hashCode$$() {
    // source file is String.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    var phi4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    // line number 194
    var0 = (java$lang$String.prototype.$B$getBytes$$.call(this));
    // line number 195
    var1 = (0) | 0;
    // line number 196
    phi2 = var0;
    phi3 = (var1) | 0;
    phi4 = (0) | 0;
    L1225768618: while(true) {
     var5 = (phi4) | 0;
     var6 = phi2;
     var7 = (var6.data.length) | 0;
     if (var5 >= var7) {
      // line number 199
      var14 = (phi3) | 0;
      return var14;
     } else {
      // line number 197
      var8 = (phi3) | 0;
      var9 = ((31 * var8)) | 0;
      var10 = phi2;
      var11 = (phi4) | 0;
      var12 = (var10.data[var11]);
      var13 = ((var9 + var12)) | 0;
      // line number 196
      phi4 = ((phi4 + 1)) | 0;
      // Here was a goto statement
      phi3 = (var13) | 0;
      continue L1225768618;
     }
    }
  }

  $B$getBytes$$() {
    return bytecoder.imports['java.lang.String'].$B$getBytes$$(this);
  }

  I$indexOf$I(arg0) {
    return bytecoder.imports['java.lang.String'].I$indexOf$I(this, arg0);
  }

  V$$init$$$() {
    // source file is String.java
    // line number 25
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 26
    return;
  }

  C$charAt$I(arg0) {
    return bytecoder.imports['java.lang.String'].C$charAt$I(this, arg0);
  }

  I$compareTo$Ljava$lang$String$(arg0) {
    // source file is String.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var phi14 = 0;
    var phi15 = null;
    var phi16 = null;
    var phi17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = null;
    var var24 = 0;
    var var25 = 0;
    var var26 = 0;
    var var27 = 0;
    var var28 = 0;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var0 = arg0;
    // line number 141
    var1 = (java$lang$String.prototype.$C$toCharArray$$.call(this));
    // line number 142
    var2 = (java$lang$String.prototype.$C$toCharArray$$.call(var0));
    // line number 144
    var3 = (var1.data.length) | 0;
    // line number 145
    var4 = (var2.data.length) | 0;
    // line number 146
    var5 = (var4) | 0;
    java$lang$Math.$i;
    var6 = ((java$lang$Math.I$min$I$I(var3,var5))) | 0;
    // line number 147
    var7 = var1;
    // line number 148
    var8 = var2;
    // line number 150
    var9 = (0) | 0;
    phi10 = var0;
    phi11 = var2;
    phi12 = (var3) | 0;
    phi13 = (var4) | 0;
    phi14 = (var6) | 0;
    phi15 = var7;
    phi16 = var8;
    phi17 = (var9) | 0;
    L1063891302: while(true) {
     // line number 151
     var18 = (phi17) | 0;
     var19 = (phi14) | 0;
     if (var18 >= var19) {
      // line number 159
      var29 = (phi12) | 0;
      var30 = (phi13) | 0;
      var31 = ((var29 - var30)) | 0;
      return var31;
     } else {
      // line number 152
      var20 = phi15;
      var21 = (phi17) | 0;
      var22 = (var20.data[var21]);
      // line number 153
      var23 = phi16;
      var24 = (phi17) | 0;
      var25 = (var23.data[var24]);
      // line number 154
      var26 = var25;
      if (var22 == var26) {
       // line number 157
       phi17 = ((phi17 + 1)) | 0;
       // line number 158
       // Here was a goto statement
       continue L1063891302;
      } else {
       // line number 155
       var27 = var25;
       var28 = ((var22 - var27)) | 0;
       return var28;
      }
     }
    }
  }

  $C$toCharArray$$() {
    return bytecoder.imports['java.lang.String'].$C$toCharArray$$(this);
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is String.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 22
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$String.prototype.I$compareTo$Ljava$lang$String$.call(this,var2))) | 0;
    return var3;
  }

  Ljava$lang$String$$toString$$() {
    // source file is String.java
    var var0 = null;
    // line number 72
    var0 = this;
    return var0;
  }

  V$$init$$$C$I$I(arg0,arg1,arg2) {
    // source file is String.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 49
    java$lang$String.prototype.V$$init$$$.call(this);
    // line number 50
    var2 = (arg1) | 0;
    java$lang$String.prototype.V$initializeWith$$C$I$I.call(this,var0,var2,var1);
    // line number 51
    return;
  }

  V$initializeWith$$C$I$I(arg0,arg1,arg2) {
    bytecoder.imports['java.lang.String'].V$initializeWith$$C$I$I(this, arg0, arg1, arg2);
  }
}

java$lang$String.prototype.Z$isEmpty$$ = java$lang$CharSequence.prototype.Z$isEmpty$$;

class java$util$concurrent$ConcurrentMap extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$concurrent$ConcurrentMap,[java$lang$Object,java$util$Map,java$util$concurrent$ConcurrentMap]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}

java$util$concurrent$ConcurrentMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$ = java$util$Map.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$;

class java$util$Properties extends java$util$Hashtable {
  nativeObject = null;

  static UNSAFE = null;
  map = null;
  defaults = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Properties,[java$lang$Cloneable,java$util$Dictionary,java$util$Properties,java$lang$Object,java$util$Hashtable,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Properties.java
    var var0 = null;
    // line number 151
    jdk$internal$misc$Unsafe.$i;
    var0 = (jdk$internal$misc$Unsafe.Ljdk$internal$misc$Unsafe$$getUnsafe$$());
    java$util$Properties.$i;
    java$util$Properties.UNSAFE = var0;
    return;
  }

  V$$init$$$() {
    // source file is Properties.java
    var var0 = null;
    // line number 176
    var0 = null;
    java$util$Properties.prototype.V$$init$$Ljava$util$Properties$$I.call(this,var0,8);
    // line number 177
    return;
  }

  V$$init$$Ljava$util$Properties$$I(arg0,arg1) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var0 = arg0;
    // line number 208
    var1 = null;
    var2 = var1;
    java$util$Hashtable.prototype.V$$init$$Ljava$lang$Void$.call(this,var2);
    // line number 209
    var3 = this;
    var4 = new java$util$concurrent$ConcurrentHashMap();
    var5 = (arg1) | 0;
    java$util$concurrent$ConcurrentHashMap.prototype.V$$init$$I.call(var4,var5);
    var3.map = var4;
    // line number 210
    var6 = this;
    var6.defaults = var0;
    // line number 213
    java$util$Properties.$i;
    var7 = (java$util$Properties.UNSAFE);
    jdk$internal$misc$Unsafe.prototype.V$storeFence$$.call(var7);
    // line number 214
    return;
  }

  Ljava$lang$Object$$setProperty$Ljava$lang$String$$Ljava$lang$String$(arg0,arg1) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 230
    var1 = var0;
    var2 = (java$util$Properties.prototype.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$.call(this,var1,arg1));
    return var2;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 1340
    var1 = (this.map);
    var2 = arg1;
    var3 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$.call(var1,var0,var2));
    return var3;
  }

  Ljava$lang$String$$getProperty$Ljava$lang$String$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = null;
    var var22 = null;
    var0 = arg0;
    // line number 1141
    var1 = (this.map);
    var2 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$get$Ljava$lang$Object$.call(var1,var0));
    // line number 1142
    var3 = (bytecoder.instanceOf(var2,java$lang$String)) | 0;
    If_19_0: {
     if (var3 == 0) {
      phi6 = this;
      phi7 = var0;
      phi8 = var2;
      phi9 = null;
      break If_19_0;
     } else {
      var4 = var2;
      var5 = var4;
      // Here was a goto statement
      phi6 = this;
      phi7 = var0;
      phi8 = var2;
      phi9 = var5;
      break If_19_0;
     }
    }
    var10 = phi9;
    // line number 1144
    If_38_0: {
     If_38_1: {
      if (var10 != null) {
       phi20 = var10;
       break If_38_1;
      } else {
       var11 = phi6;
       var12 = (var11.defaults);
       var13 = var12;
       if (var12 == null) {
        phi20 = var10;
        phi21 = var13;
        break If_38_1;
       } else {
        var14 = var13;
        var15 = phi7;
        var16 = (java$util$Properties.prototype.Ljava$lang$String$$getProperty$Ljava$lang$String$.call(var14,var15));
        // Here was a goto statement
        phi17 = var10;
        phi18 = var13;
        phi19 = var16;
        break If_38_0;
       }
      }
     }
     var22 = phi20;
     phi17 = phi20;
     phi18 = phi21;
     phi19 = var22;
     break If_38_0;
    }
    return phi19;
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 1335
    var1 = (this.map);
    var2 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$get$Ljava$lang$Object$.call(var1,var0));
    return var2;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 1492
    var1 = (this.map);
    var2 = arg1;
    var3 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$.call(var1,var0,var2));
    return var3;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    // line number 1360
    var0 = (this.map);
    var1 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$lang$String$$toString$$.call(var0));
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 1446
    var1 = (this.map);
    var2 = (java$util$concurrent$ConcurrentHashMap.prototype.Z$equals$Ljava$lang$Object$.call(var1,var0));
    return var2;
  }

  I$hashCode$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1451
    var0 = (this.map);
    var1 = ((java$util$concurrent$ConcurrentHashMap.prototype.I$hashCode$$.call(var0))) | 0;
    return var1;
  }

  I$size$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1298
    var0 = (this.map);
    var1 = ((java$util$concurrent$ConcurrentHashMap.prototype.I$size$$.call(var0))) | 0;
    return var1;
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 1330
    var1 = (this.map);
    var2 = (java$util$concurrent$ConcurrentHashMap.prototype.Z$containsKey$Ljava$lang$Object$.call(var1,var0));
    return var2;
  }

  Ljava$util$Set$$entrySet$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    // line number 1375
    var0 = new java$util$Properties$EntrySet();
    var1 = this;
    var2 = (var1.map);
    var3 = (java$util$concurrent$ConcurrentHashMap.prototype.Ljava$util$Set$$entrySet$$.call(var2));
    java$util$Properties$EntrySet.prototype.V$$init$$Ljava$util$Set$.call(var0,var3);
    java$util$Collections.$i;
    var4 = (java$util$Collections.Ljava$util$Set$$synchronizedSet$Ljava$util$Set$$Ljava$lang$Object$(var0,this));
    return var4;
  }

  Z$isEmpty$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1303
    var0 = (this.map);
    var1 = (java$util$concurrent$ConcurrentHashMap.prototype.Z$isEmpty$$.call(var0));
    return var1;
  }
}


class java$nio$HeapCharBuffer extends java$nio$CharBuffer {
  nativeObject = null;

  static $assertionsDisabled = false;
  static ARRAY_BASE_OFFSET = 0;
  static ARRAY_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$HeapCharBuffer,[java$lang$Object,java$nio$Buffer,java$lang$CharSequence,java$lang$Readable,java$lang$Appendable,java$lang$Comparable,java$nio$HeapCharBuffer,java$nio$CharBuffer]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$CharBuffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    // line number 44
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$HeapCharBuffer.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$HeapCharBuffer.$i;
    java$nio$HeapCharBuffer.$assertionsDisabled = phi2;
    // line number 56
    var3 = (java$nio$HeapCharBuffer.UNSAFE);
    var4 = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var3,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var5 = (var4 | 0);
    java$nio$HeapCharBuffer.ARRAY_BASE_OFFSET = var5;
    // line number 59
    var6 = (java$nio$HeapCharBuffer.UNSAFE);
    var7 = ((jdk$internal$misc$Unsafe.prototype.I$arrayIndexScale$Ljava$lang$Class$.call(var6,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var8 = (var7 | 0);
    java$nio$HeapCharBuffer.ARRAY_INDEX_SCALE = var8;
    return;
  }

  V$$init$$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 71
    var2 = (-1) | 0;
    var3 = (var0) | 0;
    var4 = bytecoder.newarray((var0),0);
    java$nio$CharBuffer.prototype.V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$.call(this,var2,0,arg1,var3,var4,0,var1);
    // line number 76
    var5 = this;
    java$nio$HeapCharBuffer.$i;
    var6 = (java$nio$HeapCharBuffer.ARRAY_BASE_OFFSET);
    var5.address = var6;
    // line number 81
    return;
  }

  Z$isReadOnly$$() {
    // source file is HeapCharBuffer.java
    // line number 211
    return 0;
  }

  Ljava$nio$CharBuffer$$put$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is HeapCharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var phi18 = 0;
    var phi19 = 0;
    var var20 = 0;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var var30 = 0;
    var var31 = null;
    var var32 = 0;
    var var33 = 0;
    var var34 = 0;
    var var35 = null;
    var var36 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 283
    this.V$checkSession$$();
    // line number 284
    var2 = (arg1) | 0;
    var3 = ((var1 - var2)) | 0;
    // line number 285
    var4 = (var3) | 0;
    var5 = ((java$lang$String.prototype.I$length$$.call(var0))) | 0;
    var6 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var4,var5))) | 0;
    // line number 286
    var7 = ((this.I$position$$())) | 0;
    // line number 287
    var8 = ((this.I$limit$$())) | 0;
    // line number 288
    var9 = (var8) | 0;
    If_45_0: {
     if (var7 > var9) {
      phi12 = this;
      phi13 = var0;
      phi14 = (arg1) | 0;
      phi15 = (var1) | 0;
      phi16 = (var3) | 0;
      phi17 = (var7) | 0;
      phi18 = (var8) | 0;
      phi19 = (0) | 0;
      break If_45_0;
     } else {
      var10 = (var8) | 0;
      var11 = ((var10 - var7)) | 0;
      // Here was a goto statement
      phi12 = this;
      phi13 = var0;
      phi14 = (arg1) | 0;
      phi15 = (var1) | 0;
      phi16 = (var3) | 0;
      phi17 = (var7) | 0;
      phi18 = (var8) | 0;
      phi19 = (var11) | 0;
      break If_45_0;
     }
    }
    var20 = (phi19) | 0;
    // line number 289
    var21 = (phi16) | 0;
    if (var21 <= var20) {
     // line number 291
     var23 = phi13;
     var24 = (phi14) | 0;
     var25 = (phi15) | 0;
     var26 = phi12;
     var27 = (var26.hb);
     var28 = phi12;
     var29 = (phi17) | 0;
     var30 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(var28,var29))) | 0;
     java$lang$String.prototype.V$getChars$I$I$$C$I.call(var23,var24,var25,var27,var30);
     // line number 292
     var31 = phi12;
     var32 = (phi17) | 0;
     var33 = (phi16) | 0;
     var34 = ((var32 + var33)) | 0;
     var35 = (var31.Ljava$nio$CharBuffer$$position$I(var34));
     // line number 293
     var36 = phi12;
     return var36;
    } else {
     // line number 290
     var22 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var22);
     throw bytecoder.registerStack(var22, new Error().stack);
    }
  }

  I$ix$I(arg0) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var0 = (arg0) | 0;
    // line number 162
    var1 = this;
    var2 = ((var1.offset)) | 0;
    var3 = ((var0 + var2)) | 0;
    return var3;
  }

  Ljava$nio$CharBuffer$$put$C(arg0) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var0 = arg0;
    // line number 216
    var1 = (this.hb);
    var2 = this;
    var3 = ((var2.I$nextPutIndex$$())) | 0;
    var4 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var3))) | 0;
    var1.data[var4] = var0;
    // line number 217
    return this;
  }

  V$$init$$$C$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3) {
    // source file is HeapCharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 85
    var2 = (-1) | 0;
    var3 = (arg1) | 0;
    var4 = ((var3 + var1)) | 0;
    var5 = (var0.data.length) | 0;
    var6 = arg3;
    java$nio$CharBuffer.prototype.V$$init$$I$I$I$I$$C$I$Ljava$lang$foreign$MemorySegment$.call(this,var2,arg1,var4,var5,var0,0,var6);
    // line number 90
    var7 = this;
    java$nio$HeapCharBuffer.$i;
    var8 = (java$nio$HeapCharBuffer.ARRAY_BASE_OFFSET);
    var7.address = var8;
    // line number 95
    return;
  }

  C$get$$() {
    // source file is HeapCharBuffer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    // line number 172
    var0 = (this.hb);
    var1 = this;
    var2 = ((var1.I$nextGetIndex$$())) | 0;
    var3 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var2))) | 0;
    var4 = (var0.data[var3]);
    return var4;
  }

  Ljava$nio$ByteOrder$$charRegionOrder$$() {
    // source file is HeapCharBuffer.java
    var var0 = null;
    // line number 692
    var0 = (java$nio$HeapCharBuffer.prototype.Ljava$nio$ByteOrder$$order$$.call(this));
    return var0;
  }

  Ljava$nio$ByteOrder$$order$$() {
    // source file is HeapCharBuffer.java
    var var0 = null;
    // line number 686
    java$nio$ByteOrder.$i;
    var0 = (java$nio$ByteOrder.Ljava$nio$ByteOrder$$nativeOrder$$());
    return var0;
  }

  C$get$I(arg0) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var0 = (arg0) | 0;
    // line number 176
    var1 = (this.hb);
    var2 = this;
    var3 = ((var2.I$checkIndex$I(var0))) | 0;
    var4 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var3))) | 0;
    var5 = (var1.data[var4]);
    return var5;
  }

  Ljava$lang$String$$toString$I$I(arg0,arg1) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var0 = (arg0) | 0;
    TryCatch_6_0: {
     try {
      // line number 660
      var2 = new java$lang$String();
      var3 = this;
      var4 = (var3.hb);
      var5 = this;
      var6 = ((var5.offset)) | 0;
      var7 = ((var0 + var6)) | 0;
      var8 = ((arg1 - var0)) | 0;
      java$lang$String.prototype.V$$init$$$C$I$I.call(var2,var4,var7,var8);
      break TryCatch_6_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$StringIndexOutOfBoundsException) {
       // line number 661
       // line number 662
       var1 = new java$lang$IndexOutOfBoundsException();
       java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var1);
       throw bytecoder.registerStack(var1, new Error().stack);
      }
      throw __ex;
     }
    }
    return var2;
  }

  Ljava$nio$CharBuffer$$put$$C$I$I(arg0,arg1,arg2) {
    // source file is HeapCharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 234
    this.V$checkSession$$();
    // line number 235
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 236
    var5 = ((this.I$position$$())) | 0;
    // line number 237
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 239
     var9 = this;
     var10 = (var9.hb);
     var11 = (var5) | 0;
     var12 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var11))) | 0;
     java$lang$System.V$arraycopy$$C$I$$C$I$I(var0,arg1,var10,var12,var1);
     // line number 240
     var13 = (var5) | 0;
     var14 = ((var13 + var1)) | 0;
     var15 = (this.Ljava$nio$CharBuffer$$position$I(var14));
     // line number 241
     return this;
    } else {
     // line number 238
     var8 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }

  Ljava$nio$CharBuffer$$put$I$C(arg0,arg1) {
    // source file is HeapCharBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var0 = (arg0) | 0;
    // line number 225
    var1 = (this.hb);
    var2 = this;
    var3 = ((var2.I$checkIndex$I(var0))) | 0;
    var4 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var3))) | 0;
    var1.data[var4] = arg1;
    // line number 226
    return this;
  }

  Ljava$nio$CharBuffer$$get$$C$I$I(arg0,arg1,arg2) {
    // source file is HeapCharBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 186
    this.V$checkSession$$();
    // line number 187
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 188
    var5 = ((this.I$position$$())) | 0;
    // line number 189
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 191
     var9 = (this.hb);
     var10 = (var5) | 0;
     var11 = ((java$nio$HeapCharBuffer.prototype.I$ix$I.call(this,var10))) | 0;
     var12 = (var1) | 0;
     java$lang$System.V$arraycopy$$C$I$$C$I$I(var9,var11,var0,arg1,var12);
     // line number 192
     var13 = (var5) | 0;
     var14 = ((var13 + var1)) | 0;
     var15 = (this.Ljava$nio$CharBuffer$$position$I(var14));
     // line number 193
     return this;
    } else {
     // line number 190
     var8 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }
}


class java$nio$HeapByteBuffer extends java$nio$ByteBuffer {
  nativeObject = null;

  static $assertionsDisabled = false;
  static ARRAY_BASE_OFFSET = 0;
  static ARRAY_INDEX_SCALE = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$HeapByteBuffer,[java$nio$HeapByteBuffer,java$nio$ByteBuffer,java$lang$Object,java$nio$Buffer,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$nio$ByteBuffer.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is HeapByteBuffer.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    // line number 44
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$nio$HeapByteBuffer.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$nio$HeapByteBuffer.$i;
    java$nio$HeapByteBuffer.$assertionsDisabled = phi2;
    // line number 56
    var3 = (java$nio$HeapByteBuffer.UNSAFE);
    var4 = ((jdk$internal$misc$Unsafe.prototype.I$arrayBaseOffset$Ljava$lang$Class$.call(var3,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var5 = (var4 | 0);
    java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET = var5;
    // line number 59
    var6 = (java$nio$HeapByteBuffer.UNSAFE);
    var7 = ((jdk$internal$misc$Unsafe.prototype.I$arrayIndexScale$Ljava$lang$Class$.call(var6,de$mirkosertic$bytecoder$classlib$Array.$rt))) | 0;
    var8 = (var7 | 0);
    java$nio$HeapByteBuffer.ARRAY_INDEX_SCALE = var8;
    return;
  }

  V$$init$$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2) {
    // source file is HeapByteBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 71
    var2 = (-1) | 0;
    var3 = (var0) | 0;
    var4 = bytecoder.newarray((var0),0);
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(this,var2,0,arg1,var3,var4,0,var1);
    // line number 76
    var5 = this;
    java$nio$HeapByteBuffer.$i;
    var6 = (java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET);
    var5.address = var6;
    // line number 81
    return;
  }

  V$$init$$$B$I$I$Ljava$lang$foreign$MemorySegment$(arg0,arg1,arg2,arg3) {
    // source file is HeapByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 85
    var2 = (-1) | 0;
    var3 = (arg1) | 0;
    var4 = ((var3 + var1)) | 0;
    var5 = (var0.data.length) | 0;
    var6 = arg3;
    java$nio$ByteBuffer.prototype.V$$init$$I$I$I$I$$B$I$Ljava$lang$foreign$MemorySegment$.call(this,var2,arg1,var4,var5,var0,0,var6);
    // line number 90
    var7 = this;
    java$nio$HeapByteBuffer.$i;
    var8 = (java$nio$HeapByteBuffer.ARRAY_BASE_OFFSET);
    var7.address = var8;
    // line number 95
    return;
  }

  Z$isReadOnly$$() {
    // source file is HeapByteBuffer.java
    // line number 211
    return 0;
  }

  Ljava$nio$ByteBuffer$$put$$B$I$I(arg0,arg1,arg2) {
    // source file is HeapByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 234
    this.V$checkSession$$();
    // line number 235
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 236
    var5 = ((this.I$position$$())) | 0;
    // line number 237
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 239
     var9 = this;
     var10 = (var9.hb);
     var11 = (var5) | 0;
     var12 = ((java$nio$HeapByteBuffer.prototype.I$ix$I.call(this,var11))) | 0;
     java$lang$System.V$arraycopy$$B$I$$B$I$I(var0,arg1,var10,var12,var1);
     // line number 240
     var13 = (var5) | 0;
     var14 = ((var13 + var1)) | 0;
     var15 = (this.Ljava$nio$ByteBuffer$$position$I(var14));
     // line number 241
     return this;
    } else {
     // line number 238
     var8 = new java$nio$BufferOverflowException();
     java$nio$BufferOverflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }

  I$ix$I(arg0) {
    // source file is HeapByteBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var0 = (arg0) | 0;
    // line number 162
    var1 = this;
    var2 = ((var1.offset)) | 0;
    var3 = ((var0 + var2)) | 0;
    return var3;
  }

  Ljava$nio$ByteBuffer$$put$I$B(arg0,arg1) {
    // source file is HeapByteBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var0 = (arg0) | 0;
    // line number 225
    var1 = (this.hb);
    var2 = this;
    var3 = ((var2.I$checkIndex$I(var0))) | 0;
    var4 = ((java$nio$HeapByteBuffer.prototype.I$ix$I.call(this,var3))) | 0;
    var1.data[var4] = arg1;
    // line number 226
    return this;
  }

  B$get$I(arg0) {
    // source file is HeapByteBuffer.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var0 = (arg0) | 0;
    // line number 176
    var1 = (this.hb);
    var2 = this;
    var3 = ((var2.I$checkIndex$I(var0))) | 0;
    var4 = ((java$nio$HeapByteBuffer.prototype.I$ix$I.call(this,var3))) | 0;
    var5 = (var1.data[var4]);
    return var5;
  }

  Ljava$nio$ByteBuffer$$get$$B$I$I(arg0,arg1,arg2) {
    // source file is HeapByteBuffer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 186
    this.V$checkSession$$();
    // line number 187
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 188
    var5 = ((this.I$position$$())) | 0;
    // line number 189
    var6 = ((this.I$limit$$())) | 0;
    var7 = ((var6 - var5)) | 0;
    if (var1 <= var7) {
     // line number 191
     var9 = (this.hb);
     var10 = (var5) | 0;
     var11 = ((java$nio$HeapByteBuffer.prototype.I$ix$I.call(this,var10))) | 0;
     var12 = (var1) | 0;
     java$lang$System.V$arraycopy$$B$I$$B$I$I(var9,var11,var0,arg1,var12);
     // line number 192
     var13 = (var5) | 0;
     var14 = ((var13 + var1)) | 0;
     var15 = (this.Ljava$nio$ByteBuffer$$position$I(var14));
     // line number 193
     return this;
    } else {
     // line number 190
     var8 = new java$nio$BufferUnderflowException();
     java$nio$BufferUnderflowException.prototype.V$$init$$$.call(var8);
     throw bytecoder.registerStack(var8, new Error().stack);
    }
  }
}


class java$util$Collections$SynchronizedCollection extends java$lang$Object {
  nativeObject = null;

  c = null;
  mutex = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$SynchronizedCollection,[java$lang$Iterable,java$util$Collections$SynchronizedCollection,java$lang$Object,java$io$Serializable,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Collection$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = arg0;
    // line number 2076
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 2077
    var1 = this;
    var2 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    var3 = var2;
    var1.c = var3;
    // line number 2078
    var4 = this;
    var5 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    var4.mutex = var5;
    // line number 2079
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    // line number 2101
    var0 = (this.c);
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    return var1;
  }

  I$size$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    // line number 2082
    var0 = (this.mutex);
    var1 = var0;
    // Monitor enter on var0
    phi2 = this;
    phi3 = var1;
    TryCatch_12_0: {
     try {
      var5 = phi2;
      var6 = (var5.c);
      var7 = ((var6.I$size$$())) | 0;
      var8 = phi3;
      // Monitor exit on var8
      break TryCatch_12_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_13_0: {
        var4 = phi3;
        // Monitor exit on var4
        break TryCatch_13_0;
       }
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    return var7;
  }

  Z$isEmpty$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    // line number 2085
    var0 = (this.mutex);
    var1 = var0;
    // Monitor enter on var0
    phi2 = this;
    phi3 = var1;
    TryCatch_12_0: {
     try {
      var5 = phi2;
      var6 = (var5.c);
      var7 = (var6.Z$isEmpty$$());
      var8 = phi3;
      // Monitor exit on var8
      break TryCatch_12_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_13_0: {
        var4 = phi3;
        // Monitor exit on var4
        break TryCatch_13_0;
       }
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    return var7;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    // line number 2127
    var0 = (this.mutex);
    var1 = var0;
    // Monitor enter on var0
    phi2 = this;
    phi3 = var1;
    TryCatch_12_0: {
     try {
      var5 = phi2;
      var6 = (var5.c);
      var7 = (var6.Ljava$lang$String$$toString$$());
      var8 = phi3;
      // Monitor exit on var8
      break TryCatch_12_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_13_0: {
        var4 = phi3;
        // Monitor exit on var4
        break TryCatch_13_0;
       }
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    return var7;
  }
}


class java$util$AbstractList$ListItr extends java$util$AbstractList$Itr {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractList$ListItr,[java$util$AbstractList$ListItr,java$lang$Object,java$util$AbstractList$Itr,java$util$Iterator,java$util$ListIterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$AbstractList$$I(arg0,arg1) {
    // source file is AbstractList.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var0 = this;
    var1 = (arg1) | 0;
    // line number 406
    var2 = arg0;
    var0.this$0 = var2;
    var3 = arg0;
    java$util$AbstractList$Itr.prototype.V$$init$$Ljava$util$AbstractList$.call(var0,var3);
    // line number 407
    var4 = (var1) | 0;
    var0.cursor = var4;
    // line number 408
    return;
  }

  I$previousIndex$$() {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = 0;
    // line number 432
    var0 = ((this.cursor)) | 0;
    var1 = ((var0 - 1)) | 0;
    return var1;
  }
}


class java$util$concurrent$ConcurrentHashMap extends java$util$AbstractMap {
  nativeObject = null;

  delegate = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$concurrent$ConcurrentHashMap,[java$util$concurrent$ConcurrentHashMap,java$lang$Object,java$util$AbstractMap,java$io$Serializable,java$util$Map,java$util$concurrent$ConcurrentMap]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I(arg0) {
    // source file is ConcurrentHashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = (arg0) | 0;
    // line number 42
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    // line number 43
    var1 = this;
    var2 = new java$util$HashMap();
    var3 = (var0) | 0;
    java$util$HashMap.prototype.V$$init$$I.call(var2,var3);
    var1.delegate = var2;
    // line number 44
    return;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 141
    var1 = (this.delegate);
    var2 = arg1;
    var3 = (var1.Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(var0,var2));
    return var3;
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 136
    var1 = (this.delegate);
    var2 = (var1.Ljava$lang$Object$$get$Ljava$lang$Object$(var0));
    return var2;
  }

  V$$init$$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    // line number 38
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    // line number 39
    var0 = this;
    var1 = new java$util$HashMap();
    java$util$HashMap.prototype.V$$init$$$.call(var1);
    var0.delegate = var1;
    // line number 40
    return;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 96
    var1 = (this.delegate);
    var2 = arg1;
    var3 = (var1.Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(var0,var2));
    return var3;
  }

  Ljava$lang$String$$toString$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    // line number 181
    var0 = (this.delegate);
    var1 = (var0.Ljava$lang$String$$toString$$());
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 171
    var1 = (this.delegate);
    var2 = (var1.Z$equals$Ljava$lang$Object$(var0));
    return var2;
  }

  I$hashCode$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = 0;
    // line number 176
    var0 = (this.delegate);
    var1 = ((var0.I$hashCode$$())) | 0;
    return var1;
  }

  I$size$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = 0;
    // line number 116
    var0 = (this.delegate);
    var1 = ((var0.I$size$$())) | 0;
    return var1;
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 131
    var1 = (this.delegate);
    var2 = (var1.Z$containsKey$Ljava$lang$Object$(var0));
    return var2;
  }

  Ljava$util$Set$$entrySet$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = null;
    // line number 61
    var0 = (this.delegate);
    var1 = (var0.Ljava$util$Set$$entrySet$$());
    return var1;
  }

  Z$isEmpty$$() {
    // source file is ConcurrentHashMap.java
    var var0 = null;
    var var1 = 0;
    // line number 121
    var0 = (this.delegate);
    var1 = (var0.Z$isEmpty$$());
    return var1;
  }
}


class java$io$IOException extends java$lang$Exception {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$IOException,[java$io$IOException,java$lang$Exception,java$lang$Throwable,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is IOException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 57
    var1 = var0;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 58
    return;
  }

  V$$init$$$() {
    // source file is IOException.java
    // line number 46
    java$lang$Exception.prototype.V$$init$$$.call(this);
    // line number 47
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is IOException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 98
    var1 = var0;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 99
    return;
  }
}


class java$lang$Short extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Short,[java$lang$Object,java$lang$Number,java$lang$Short,java$io$Serializable,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Short.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.short;
    java$lang$Short.$i;
    java$lang$Short.TYPE = var0;
    return;
  }

  static Ljava$lang$Short$$valueOf$S(arg0) {
    // source file is Short.java
    var var0 = null;
    var var1 = 0;
    // line number 74
    java$lang$Short.$i;
    var0 = new java$lang$Short();
    var1 = arg0;
    java$lang$Short.prototype.V$$init$$S.call(var0,var1);
    return var0;
  }

  V$$init$$S(arg0) {
    // source file is Short.java
    var var0 = 0;
    var var1 = null;
    var0 = arg0;
    // line number 31
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 32
    var1 = this;
    var1.value = var0;
    // line number 33
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Short.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Short.prototype.I$compareTo$Ljava$lang$Short$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Short$(arg0) {
    // source file is Short.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = arg0;
    // line number 110
    var1 = (this.value);
    var2 = (var0.S$shortValue$$());
    java$lang$Short.$i;
    var3 = ((java$lang$Short.I$compare$S$S(var1,var2))) | 0;
    return var3;
  }

  static I$compare$S$S(arg0,arg1) {
    // source file is Short.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var phi5 = 0;
    var var6 = 0;
    var0 = arg1;
    // line number 114
    var1 = var0;
    If_9_0: {
     if (arg0 >= var1) {
      if (arg0 != var0) {
       phi3 = arg0;
       phi4 = var0;
       phi5 = (1) | 0;
       break If_9_0;
      } else {
       var6 = (0) | 0;
       // Here was a goto statement
       phi3 = arg0;
       phi4 = var0;
       phi5 = (var6) | 0;
       break If_9_0;
      }
     } else {
      var2 = (-1) | 0;
      // Here was a goto statement
      phi3 = arg0;
      phi4 = var0;
      phi5 = (var2) | 0;
      break If_9_0;
     }
    }
    return phi5;
  }

  I$intValue$$() {
    // source file is Short.java
    var var0 = 0;
    // line number 37
    var0 = (this.value);
    return var0;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Short.java
    var var0 = 0;
    var var1 = null;
    // line number 89
    var0 = (this.value);
    java$lang$Short.$i;
    var1 = (java$lang$Short.Ljava$lang$String$$toString$S$I(var0,10));
    return var1;
  }

  static Ljava$lang$String$$toString$S$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Short'].Ljava$lang$String$$toString$S$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Short.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var0 = arg0;
    // line number 57
    var1 = var0;
    if (this != var1) {
     // line number 60
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 63
        var7 = var0;
        // line number 65
        var8 = (this.value);
        var9 = (var7.S$shortValue$$());
        If_51_0: {
         if (var8 != var9) {
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (0) | 0;
          break If_51_0;
         } else {
          var10 = (1) | 0;
          // Here was a goto statement
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (var10) | 0;
          break If_51_0;
         }
        }
        return phi14;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 61
     return 0;
    } else {
     // line number 58
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Short.java
    var var0 = 0;
    // line number 70
    var0 = (this.value);
    return var0;
  }
}


class java$util$List extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$List,[java$util$List,java$lang$Iterable,java$lang$Object,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  static Ljava$util$List$$of$$Ljava$lang$Object$(arg0) {
    // source file is List.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    // line number 1037
    var0 = (arg0.data.length) | 0;
    if ((var0) >= 0 && (var0) <= 2) switch ((var0) - 0) {
     case 0: {
      // line number 1040
      java$util$ImmutableCollections.$i;
      var9 = (java$util$ImmutableCollections.EMPTY_LIST);
      // line number 1041
      return var9;
     }
     case 1: {
      // line number 1043
      var6 = new java$util$ImmutableCollections$List12();
      var7 = arg0;
      var8 = (var7.data[0]);
      java$util$ImmutableCollections$List12.prototype.V$$init$$Ljava$lang$Object$.call(var6,var8);
      return var6;
     }
     case 2: {
      // line number 1045
      var1 = new java$util$ImmutableCollections$List12();
      var2 = arg0;
      var3 = (var2.data[0]);
      var4 = (1) | 0;
      var5 = (arg0.data[var4]);
      java$util$ImmutableCollections$List12.prototype.V$$init$$Ljava$lang$Object$$Ljava$lang$Object$.call(var1,var3,var5);
      return var1;
     }
    } else {
     // line number 1047
     java$util$ImmutableCollections.$i;
     var10 = (java$util$ImmutableCollections.Ljava$util$List$$listFromArray$$Ljava$lang$Object$(arg0));
     return var10;
    }
  }
}


class java$io$OutputStream extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$OutputStream,[java$lang$Object,java$io$OutputStream,java$io$Flushable,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$I = impl;
  }

  V$$init$$$() {
    // source file is OutputStream.java
    // line number 52
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }

  V$write$$B$I$I(arg0,arg1,arg2) {
    // source file is OutputStream.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 164
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 166
    var5 = (0) | 0;
    phi6 = this;
    phi7 = var0;
    phi8 = (arg1) | 0;
    phi9 = (var1) | 0;
    phi10 = (var5) | 0;
    L1107370131: while(true) {
     var11 = (phi10) | 0;
     var12 = (phi9) | 0;
     if (var11 >= var12) {
      // line number 169
      return;
     } else {
      // line number 167
      var13 = phi6;
      var14 = phi7;
      var15 = (phi8) | 0;
      var16 = (phi10) | 0;
      var17 = ((var15 + var16)) | 0;
      var18 = (var14.data[var17]);
      var13.V$write$I(var18);
      // line number 166
      phi10 = ((phi10 + 1)) | 0;
      // Here was a goto statement
      continue L1107370131;
     }
    }
  }

  V$flush$$() {
    // source file is OutputStream.java
    // line number 191
    return;
  }
}


class java$lang$Double extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Double,[java$lang$Double,java$lang$Object,java$lang$Number,java$io$Serializable,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Double.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.double;
    java$lang$Double.$i;
    java$lang$Double.TYPE = var0;
    return;
  }

  static Ljava$lang$Double$$valueOf$D(arg0) {
    // source file is Double.java
    var var0 = null;
    var var1 = .0;
    // line number 85
    java$lang$Double.$i;
    var0 = new java$lang$Double();
    var1 = arg0;
    java$lang$Double.prototype.V$$init$$D.call(var0,var1);
    return var0;
  }

  V$$init$$D(arg0) {
    // source file is Double.java
    var var0 = .0;
    var var1 = null;
    var0 = arg0;
    // line number 31
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 32
    var1 = this;
    var1.value = var0;
    // line number 33
    return;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Double.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Double.prototype.I$compareTo$Ljava$lang$Double$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Double$(arg0) {
    // source file is Double.java
    var var0 = null;
    var var1 = .0;
    var var2 = .0;
    var var3 = 0;
    var0 = arg0;
    // line number 110
    var1 = (this.value);
    var2 = (java$lang$Double.prototype.D$doubleValue$$.call(var0));
    java$lang$Double.$i;
    var3 = ((java$lang$Double.I$compare$D$D(var1,var2))) | 0;
    return var3;
  }

  D$doubleValue$$() {
    // source file is Double.java
    var var0 = .0;
    // line number 52
    var0 = (this.value);
    return var0;
  }

  static I$compare$D$D(arg0,arg1) {
    // source file is Double.java
    var var0 = .0;
    var var1 = .0;
    var var2 = 0;
    var var3 = 0;
    var phi4 = .0;
    var phi5 = .0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var0 = arg1;
    // line number 114
    var1 = var0;
    var2 = (bytecoder.cmp(arg0,var1)) | 0;
    If_12_0: {
     if (var2 >= 0) {
      var7 = (bytecoder.cmp(arg0,var0)) | 0;
      if (var7 != 0) {
       phi4 = arg0;
       phi5 = var0;
       phi6 = (1) | 0;
       break If_12_0;
      } else {
       var8 = (0) | 0;
       // Here was a goto statement
       phi4 = arg0;
       phi5 = var0;
       phi6 = (var8) | 0;
       break If_12_0;
      }
     } else {
      var3 = (-1) | 0;
      // Here was a goto statement
      phi4 = arg0;
      phi5 = var0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    return phi6;
  }

  I$intValue$$() {
    // source file is Double.java
    var var0 = .0;
    var var1 = 0;
    // line number 37
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Double.java
    var var0 = .0;
    var var1 = null;
    // line number 77
    var0 = (this.value);
    java$lang$Double.$i;
    var1 = (java$lang$Double.Ljava$lang$String$$toString$D(var0));
    return var1;
  }

  static Ljava$lang$String$$toString$D(arg0) {
    return bytecoder.imports['java.lang.Double'].Ljava$lang$String$$toString$D(arg0);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Double.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = .0;
    var var9 = .0;
    var var10 = 0;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = 0;
    var0 = arg0;
    // line number 57
    var1 = var0;
    if (this != var1) {
     // line number 60
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 63
        var7 = var0;
        // line number 65
        var8 = (this.value);
        var9 = (java$lang$Double.prototype.D$doubleValue$$.call(var7));
        var10 = (bytecoder.cmp(var8,var9)) | 0;
        If_54_0: {
         if (var10 != 0) {
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (0) | 0;
          break If_54_0;
         } else {
          var11 = (1) | 0;
          // Here was a goto statement
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (var11) | 0;
          break If_54_0;
         }
        }
        return phi15;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 61
     return 0;
    } else {
     // line number 58
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Double.java
    var var0 = .0;
    var var1 = 0;
    // line number 70
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }
}


class java$lang$AssertionError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$AssertionError,[java$lang$AssertionError,java$lang$Throwable,java$lang$Object,java$lang$Error]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    // source file is AssertionError.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var phi8 = null;
    var0 = arg0;
    // line number 75
    var1 = var0;
    var2 = (java$lang$String.Ljava$lang$String$$valueOf$Ljava$lang$Object$(var1));
    java$lang$AssertionError.prototype.V$$init$$Ljava$lang$String$.call(this,var2);
    // line number 76
    var3 = (bytecoder.instanceOf(var0,java$lang$Throwable)) | 0;
    If_21_0: {
     if (var3 == 0) {
      phi7 = this;
      phi8 = var0;
      break If_21_0;
     } else {
      // line number 77
      var4 = var0;
      var5 = var4;
      var6 = (this.Ljava$lang$Throwable$$initCause$Ljava$lang$Throwable$(var5));
      phi7 = this;
      phi8 = var0;
      break If_21_0;
     }
    }
    // line number 78
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is AssertionError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 59
    var1 = var0;
    java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 60
    return;
  }

  V$$init$$$() {
    // source file is AssertionError.java
    // line number 50
    java$lang$Error.prototype.V$$init$$$.call(this);
    // line number 51
    return;
  }

  V$$init$$I(arg0) {
    // source file is AssertionError.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 113
    var1 = (var0) | 0;
    var2 = (java$lang$String.Ljava$lang$String$$valueOf$I(var1));
    java$lang$AssertionError.prototype.V$$init$$Ljava$lang$String$.call(this,var2);
    // line number 114
    return;
  }
}


class java$nio$channels$Channel extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$channels$Channel,[java$lang$Object,java$io$Closeable,java$lang$AutoCloseable,java$nio$channels$Channel]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$VirtualMachineError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$VirtualMachineError,[java$lang$VirtualMachineError,java$lang$Throwable,java$lang$Object,java$lang$Error]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is VirtualMachineError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 54
    var1 = var0;
    java$lang$Error.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 55
    return;
  }

  V$$init$$$() {
    // source file is VirtualMachineError.java
    // line number 44
    java$lang$Error.prototype.V$$init$$$.call(this);
    // line number 45
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is VirtualMachineError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 88
    var1 = var0;
    java$lang$Error.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 89
    return;
  }
}


class java$util$Collections$EmptyMap extends java$util$AbstractMap {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$EmptyMap,[java$util$Collections$EmptyMap,java$lang$Object,java$util$AbstractMap,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 4703
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$util$Set$$entrySet$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4718
    java$util$Collections.$i;
    var0 = (java$util$Collections.Ljava$util$Set$$emptySet$$());
    return var0;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = null;
    var0 = arg0;
    // line number 4721
    var1 = (bytecoder.instanceOf(var0,java$util$Map)) | 0;
    If_11_0: {
     If_11_1: {
      if (var1 == 0) {
       phi9 = this;
       phi10 = var0;
       break If_11_1;
      } else {
       var2 = var0;
       var3 = var2;
       var4 = (var3.Z$isEmpty$$());
       if (var4 == 0) {
        phi9 = this;
        phi10 = var0;
        break If_11_1;
       } else {
        var5 = (1) | 0;
        // Here was a goto statement
        phi6 = this;
        phi7 = var0;
        phi8 = (var5) | 0;
        break If_11_0;
       }
      }
     }
     phi6 = phi9;
     phi7 = phi10;
     phi8 = (0) | 0;
     break If_11_0;
    }
    return phi8;
  }

  I$size$$() {
    // source file is Collections.java
    // line number 4710
    return 0;
  }

  I$hashCode$$() {
    // source file is Collections.java
    // line number 4724
    return 0;
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var0 = arg0;
    // line number 4715
    return null;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 4766
    var1 = new java$lang$UnsupportedOperationException();
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(var1);
    throw bytecoder.registerStack(var1, new Error().stack);
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var0 = arg0;
    // line number 4713
    return 0;
  }

  Z$isEmpty$$() {
    // source file is Collections.java
    // line number 4711
    return 1;
  }
}


class java$util$ImmutableCollections$ListItr extends java$lang$Object {
  nativeObject = null;

  list = null;
  size = 0;
  cursor = 0;
  isListIterator = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$ListItr,[java$lang$Object,java$util$ImmutableCollections$ListItr,java$util$Iterator,java$util$ListIterator]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$List$$I(arg0,arg1) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 350
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 351
    var1 = this;
    var1.list = var0;
    // line number 352
    var2 = this;
    var2.size = arg1;
    // line number 353
    var3 = this;
    var3.cursor = 0;
    // line number 354
    var4 = this;
    var4.isListIterator = 0;
    // line number 355
    return;
  }

  Z$hasNext$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    // line number 365
    var0 = ((this.cursor)) | 0;
    var1 = ((this.size)) | 0;
    If_10_0: {
     if (var0 == var1) {
      phi3 = this;
      phi4 = (0) | 0;
      break If_10_0;
     } else {
      var2 = (1) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = (var2) | 0;
      break If_10_0;
     }
    }
    return phi4;
  }

  Ljava$lang$Object$$next$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    TryCatch_2_0: {
     try {
      // line number 370
      var1 = ((this.cursor)) | 0;
      // line number 371
      var2 = (this.list);
      var3 = (var2.Ljava$lang$Object$$get$I(var1));
      // line number 372
      var4 = this;
      var5 = (1) | 0;
      var6 = ((var1 + var5)) | 0;
      var4.cursor = var6;
      // line number 373
      break TryCatch_2_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$IndexOutOfBoundsException) {
       // line number 374
       // line number 375
       var0 = new java$util$NoSuchElementException();
       java$util$NoSuchElementException.prototype.V$$init$$$.call(var0);
       throw bytecoder.registerStack(var0, new Error().stack);
      }
      throw __ex;
     }
    }
    return var3;
  }

  I$previousIndex$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    // line number 412
    var0 = (this.isListIterator);
    if (var0 != 0) {
     // line number 415
     var2 = ((this.cursor)) | 0;
     var3 = ((var2 - 1)) | 0;
     return var3;
    } else {
     // line number 413
     java$util$ImmutableCollections.$i;
     var1 = (java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$());
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }
}


class java$util$LinkedHashMap$Entry extends java$util$HashMap$Node {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$LinkedHashMap$Entry,[java$util$LinkedHashMap$Entry,java$util$HashMap$Node,java$util$Map$Entry,java$lang$Object]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    // source file is LinkedHashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 195
    var2 = (var0) | 0;
    var3 = var1;
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(this,var2,arg1,var3,arg3);
    // line number 196
    return;
  }
}


class java$util$AbstractCollection extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractCollection,[java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is AbstractCollection.java
    // line number 70
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 71
    return;
  }

  Ljava$lang$String$$toString$$() {
    // source file is AbstractCollection.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    // line number 451
    var0 = (this.Ljava$util$Iterator$$iterator$$());
    // line number 452
    var1 = (var0.Z$hasNext$$());
    if (var1 != 0) {
     // line number 455
     var2 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
     // line number 456
     var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var2,91));
     phi4 = this;
     phi5 = var0;
     phi6 = var2;
     L300630516: while(true) {
      // line number 458
      var7 = phi5;
      var8 = (var7.Ljava$lang$Object$$next$$());
      // line number 459
      var9 = phi6;
      var10 = phi4;
      If_51_0: {
       if (var8 != var10) {
        phi12 = var8;
        phi13 = var9;
        phi14 = var8;
        break If_51_0;
       } else {
        var11 = bytecoder.stringconstants[93];
        // Here was a goto statement
        phi12 = var8;
        phi13 = var9;
        phi14 = var11;
        break If_51_0;
       }
      }
      var15 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(phi13,phi14));
      // line number 460
      var16 = phi5;
      var17 = (var16.Z$hasNext$$());
      if (var17 != 0) {
       // line number 462
       var21 = phi6;
       var22 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var21,44));
       var23 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var22,32));
       // line number 463
       // Here was a goto statement
       continue L300630516;
      } else {
       // line number 461
       var18 = phi6;
       var19 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$C.call(var18,93));
       var20 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var19));
       return var20;
      }
     }
    } else {
     // line number 453
     return bytecoder.stringconstants[92];
    }
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is AbstractCollection.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = 0;
    var0 = arg0;
    // line number 105
    var1 = (this.Ljava$util$Iterator$$iterator$$());
    // line number 106
    If_12_0: {
     if (var0 != null) {
      phi9 = this;
      phi10 = var0;
      phi11 = var1;
      L1201128418: while(true) {
       // line number 111
       var12 = phi11;
       var13 = (var12.Z$hasNext$$());
       if (var13 == 0) {
        phi2 = phi9;
        phi3 = phi10;
        phi4 = phi11;
        break If_12_0;
       } else {
        // line number 112
        var14 = phi10;
        var15 = phi11;
        var16 = (var15.Ljava$lang$Object$$next$$());
        var17 = (var14.Z$equals$Ljava$lang$Object$(var16));
        if (var17 == 0) {
         continue L1201128418;
        } else {
         // line number 113
         return 1;
        }
       }
      }
     } else {
      phi2 = this;
      phi3 = var0;
      phi4 = var1;
      L1041410699: while(true) {
       // line number 107
       var5 = phi4;
       var6 = (var5.Z$hasNext$$());
       if (var6 == 0) {
        break If_12_0;
       } else {
        // line number 108
        var7 = phi4;
        var8 = (var7.Ljava$lang$Object$$next$$());
        if (var8 != null) {
         continue L1041410699;
        } else {
         // line number 109
         return 1;
        }
       }
      }
     }
    }
    // line number 115
    return 0;
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    // source file is AbstractCollection.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var0 = arg0;
    // line number 310
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    phi2 = this;
    phi3 = var1;
    L2018614627: while(true) {
     var4 = phi3;
     var5 = (var4.Z$hasNext$$());
     if (var5 == 0) {
      // line number 313
      return 1;
     } else {
      var6 = phi3;
      var7 = (var6.Ljava$lang$Object$$next$$());
      // line number 311
      var8 = phi2;
      var9 = (var8.Z$contains$Ljava$lang$Object$(var7));
      if (var9 != 0) {
       // line number 311
       // Here was a goto statement
       continue L2018614627;
      } else {
       // line number 312
       return 0;
      }
     }
    }
  }

  Z$isEmpty$$() {
    // source file is AbstractCollection.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 91
    var0 = ((this.I$size$$())) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }
}


class java$util$Set extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Set,[java$lang$Iterable,java$lang$Object,java$util$Set,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }
}


class java$lang$RuntimeException extends java$lang$Exception {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$RuntimeException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is RuntimeException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 63
    var1 = var0;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 64
    return;
  }

  V$$init$$$() {
    // source file is RuntimeException.java
    // line number 52
    java$lang$Exception.prototype.V$$init$$$.call(this);
    // line number 53
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is RuntimeException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 97
    var1 = var0;
    java$lang$Exception.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 98
    return;
  }
}


class java$io$Writer extends java$lang$Object {
  nativeObject = null;

  lock = null;
  writeBuffer = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$Writer,[java$lang$Object,java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$$C$I$I = impl;
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    // source file is Writer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 187
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 188
    if (var0 != null) {
     // line number 191
     var2 = this;
     var2.lock = var0;
     // line number 192
     return;
    } else {
     // line number 189
     var1 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$$init$$Ljava$io$Writer$(arg0) {
    // source file is Writer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var0 = arg0;
    // line number 170
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 171
    var1 = ((var0).constructor.$rt);
    // line number 172
    var2 = ((this).constructor.$rt);
    If_20_0: {
     If_20_1: {
      if (var2 != java$io$BufferedWriter.$rt) {
       phi11 = this;
       phi12 = var0;
       phi13 = var1;
       break If_20_1;
      } else {
       var3 = var1;
       If_26_0: {
        if (var3 == java$io$OutputStreamWriter.$rt) {
         phi5 = this;
         phi6 = var0;
         phi7 = var1;
         break If_26_0;
        } else {
         var4 = var1;
         if (var4 != java$io$FileWriter.$rt) {
          phi11 = this;
          phi12 = var0;
          phi13 = var1;
          break If_20_1;
         } else {
          phi5 = this;
          phi6 = var0;
          phi7 = var1;
          break If_26_0;
         }
        }
       }
       // line number 174
       var8 = phi5;
       var9 = phi6;
       jdk$internal$misc$InternalLock.$i;
       var10 = (jdk$internal$misc$InternalLock.Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(var9));
       var8.lock = var10;
       // Here was a goto statement
       break If_20_0;
      }
     }
     // line number 176
     var14 = phi11;
     var15 = phi12;
     var14.lock = var15;
     phi5 = phi11;
     phi6 = phi12;
     phi7 = phi13;
     break If_20_0;
    }
    // line number 178
    return;
  }

  V$write$Ljava$lang$String$(arg0) {
    // source file is Writer.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 278
    var1 = var0;
    var2 = ((java$lang$String.prototype.I$length$$.call(var0))) | 0;
    this.V$write$Ljava$lang$String$$I$I(var1,0,var2);
    // line number 279
    return;
  }

  V$write$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is Writer.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = null;
    var phi24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 308
    var2 = (this.lock);
    // line number 309
    var3 = (bytecoder.instanceOf(var2,jdk$internal$misc$InternalLock)) | 0;
    If_20_0: {
     if (var3 == 0) {
      // line number 317
      var18 = var2;
      // Monitor enter on var2
      phi19 = this;
      phi20 = var0;
      phi21 = (arg1) | 0;
      phi22 = (var1) | 0;
      phi23 = var2;
      phi24 = var18;
      TryCatch_86_0: {
       try {
        // line number 318
        var26 = phi19;
        var27 = phi20;
        var28 = (phi21) | 0;
        var29 = (phi22) | 0;
        var26.V$implWrite$Ljava$lang$String$$I$I(var27,var28,var29);
        // line number 319
        var30 = phi24;
        // Monitor exit on var30
        break TryCatch_86_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_87_0: {
          var25 = phi24;
          // Monitor exit on var25
          break TryCatch_87_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi6 = phi19;
      phi7 = phi20;
      phi8 = (phi21) | 0;
      phi9 = (phi22) | 0;
      phi10 = phi23;
      break If_20_0;
     } else {
      var4 = var2;
      var5 = var4;
      // line number 310
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var5);
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      phi10 = var2;
      phi11 = var5;
      TryCatch_37_0: {
       try {
        // line number 312
        var13 = phi6;
        var14 = phi7;
        var15 = (phi8) | 0;
        var16 = (phi9) | 0;
        var13.V$implWrite$Ljava$lang$String$$I$I(var14,var15,var16);
        break TryCatch_37_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_38_0: {
          // line number 314
          break TryCatch_38_0;
         }
         var12 = phi11;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var12);
         // line number 315
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 314
      var17 = phi11;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var17);
      // line number 315
      // Here was a goto statement
      // Here was a goto statement
      break If_20_0;
     }
    }
    // line number 321
    return;
  }

  V$implWrite$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is Writer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var var10 = null;
    var var11 = null;
    var phi12 = null;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 325
    var2 = 1024;
    If_14_0: {
     if (var1 > var2) {
      // line number 331
      var22 = bytecoder.newarray((var1),0);
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      phi12 = var22;
      break If_14_0;
     } else {
      // line number 326
      var3 = (this.writeBuffer);
      If_21_0: {
       if (var3 != null) {
        phi6 = this;
        phi7 = var0;
        phi8 = (arg1) | 0;
        phi9 = (var1) | 0;
        break If_21_0;
       } else {
        // line number 327
        var4 = this;
        var5 = bytecoder.newarray((1024),0);
        var4.writeBuffer = var5;
        phi6 = this;
        phi7 = var0;
        phi8 = (arg1) | 0;
        phi9 = (var1) | 0;
        break If_21_0;
       }
      }
      // line number 329
      var10 = phi6;
      var11 = (var10.writeBuffer);
      // Here was a goto statement
      phi12 = var11;
      break If_14_0;
     }
    }
    // line number 333
    var13 = phi7;
    var14 = (phi8) | 0;
    var15 = (phi8) | 0;
    var16 = (phi9) | 0;
    var17 = ((var15 + var16)) | 0;
    var18 = phi12;
    java$lang$String.prototype.V$getChars$I$I$$C$I.call(var13,var14,var17,var18,0);
    // line number 334
    var19 = phi6;
    var20 = phi12;
    var21 = (phi9) | 0;
    var19.V$write$$C$I$I(var20,0,var21);
    // line number 335
    return;
  }

  V$$init$$$() {
    // source file is Writer.java
    var var0 = null;
    // line number 161
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 162
    var0 = this;
    var0.lock = this;
    // line number 163
    return;
  }
}


class de$mirkosertic$bytecoder$classlib$BytecoderCharset extends java$nio$charset$Charset {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(de$mirkosertic$bytecoder$classlib$BytecoderCharset,[java$lang$Object,java$nio$charset$Charset,de$mirkosertic$bytecoder$classlib$BytecoderCharset,java$lang$Comparable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$$$Ljava$lang$String$(arg0,arg1) {
    // source file is BytecoderCharset.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 25
    var1 = var0;
    java$nio$charset$Charset.prototype.V$$init$$Ljava$lang$String$$$Ljava$lang$String$.call(this,var1,arg1);
    // line number 26
    return;
  }

  Ljava$nio$charset$CharsetEncoder$$newEncoder$$() {
    // source file is BytecoderCharset.java
    var var0 = null;
    var var1 = null;
    // line number 43
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder();
    var1 = this;
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetEncoder.prototype.V$$init$$Ljava$nio$charset$Charset$.call(var0,var1);
    return var0;
  }

  Ljava$nio$charset$CharsetDecoder$$newDecoder$$() {
    // source file is BytecoderCharset.java
    var var0 = null;
    var var1 = null;
    // line number 38
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.$i;
    var0 = new de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder();
    var1 = this;
    de$mirkosertic$bytecoder$classlib$BytecoderCharsetDecoder.prototype.V$$init$$Ljava$nio$charset$Charset$.call(var0,var1);
    return var0;
  }
}


class jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError extends java$lang$Error {
  nativeObject = null;

  runtimeExceptionSupplier = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError,[jdk$internal$misc$ScopedMemoryAccess$ScopedAccessError,java$lang$Throwable,java$lang$Object,java$lang$Error]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  Ljava$lang$RuntimeException$$newRuntimeException$$() {
    // source file is ScopedMemoryAccess.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 113
    var0 = (this.runtimeExceptionSupplier);
    var1 = (var0.Ljava$lang$Object$$get$$());
    var2 = var1;
    return var2;
  }
}


class java$util$HashMap extends java$util$AbstractMap {
  nativeObject = null;

  loadFactor = 0.0;
  threshold = 0;
  table = null;
  modCount = 0;
  size = 0;
  entrySet = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap,[java$lang$Cloneable,java$util$HashMap,java$lang$Object,java$util$AbstractMap,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I(arg0) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = 0;
    var0 = (arg0) | 0;
    // line number 470
    var1 = (var0) | 0;
    java$util$HashMap.prototype.V$$init$$I$F.call(this,var1,0.75);
    // line number 471
    return;
  }

  V$$init$$I$F(arg0,arg1) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = .0;
    var var10 = .0;
    var var11 = 0;
    var var12 = .0;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = .0;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = .0;
    var var22 = null;
    var var23 = 0;
    var var24 = 0;
    var0 = (arg0) | 0;
    // line number 445
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    // line number 446
    if (var0 >= 0) {
     // line number 449
     If_43_0: {
      if (var0 <= 1073741824) {
       phi7 = this;
       phi8 = (var0) | 0;
       phi9 = arg1;
       break If_43_0;
      } else {
       // line number 450
       var6 = (1073741824) | 0;
       phi7 = this;
       phi8 = (var6) | 0;
       phi9 = arg1;
       break If_43_0;
      }
     }
     // line number 451
     var10 = phi9;
     var11 = (bytecoder.cmp(var10,0.0)) | 0;
     If_62_0: {
      if (var11 <= 0) {
       break If_62_0;
      } else {
       var12 = phi9;
       java$lang$Float.$i;
       var13 = (java$lang$Float.Z$isNaN$F(var12));
       if (var13 == 0) {
        // line number 454
        var20 = phi7;
        var21 = phi9;
        var20.loadFactor = var21;
        // line number 455
        var22 = phi7;
        var23 = (phi8) | 0;
        var24 = ((java$util$HashMap.I$tableSizeFor$I(var23))) | 0;
        var22.threshold = var24;
        // line number 456
        return;
       } else {
        break If_62_0;
       }
      }
     }
     // line number 452
     var14 = new java$lang$IllegalArgumentException();
     var15 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var15);
     var16 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var15,bytecoder.stringconstants[12]));
     var17 = phi9;
     var18 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$F.call(var16,var17));
     var19 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var18));
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var14,var19);
     throw bytecoder.registerStack(var14, new Error().stack);
    } else {
     // line number 447
     var1 = new java$lang$IllegalArgumentException();
     var2 = new java$lang$StringBuilder();
     java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
     var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[11]));
     var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var0));
     var5 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var4));
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var1,var5);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  static I$tableSizeFor$I(arg0) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    // line number 378
    var0 = (1) | 0;
    var1 = ((arg0 - var0)) | 0;
    java$lang$Integer.$i;
    var2 = ((java$lang$Integer.I$numberOfLeadingZeros$I(var1))) | 0;
    var3 = ((-1 >>> var2)) | 0;
    // line number 379
    If_21_0: {
     if (var3 >= 0) {
      if (var3 < 1073741824) {
       var9 = ((var3 + 1)) | 0;
       phi5 = (arg0) | 0;
       phi6 = (var3) | 0;
       phi7 = (var9) | 0;
       break If_21_0;
      } else {
       var8 = (1073741824) | 0;
       // Here was a goto statement
       phi5 = (arg0) | 0;
       phi6 = (var3) | 0;
       phi7 = (var8) | 0;
       break If_21_0;
      }
     } else {
      var4 = (1) | 0;
      // Here was a goto statement
      phi5 = (arg0) | 0;
      phi6 = (var3) | 0;
      phi7 = (var4) | 0;
      break If_21_0;
     }
    }
    return phi7;
  }

  V$$init$$$() {
    // source file is HashMap.java
    var var0 = null;
    // line number 477
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    // line number 478
    var0 = this;
    var0.loadFactor = 0.75;
    // line number 479
    return;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var0 = arg0;
    // line number 618
    var1 = var0;
    var2 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(var1))) | 0;
    var3 = arg1;
    var4 = (1) | 0;
    var5 = (java$util$HashMap.prototype.Ljava$lang$Object$$putVal$I$Ljava$lang$Object$$Ljava$lang$Object$$Z$Z.call(this,var2,var0,var3,0,var4));
    return var5;
  }

  static I$hash$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = 0;
    var phi1 = null;
    var phi2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    // line number 338
    If_4_0: {
     if (arg0 != null) {
      var3 = ((arg0.I$hashCode$$())) | 0;
      var4 = (var3) | 0;
      var5 = (16) | 0;
      var6 = ((var4 >>> var5)) | 0;
      var7 = ((var3 ^ var6)) | 0;
      phi1 = arg0;
      phi2 = (var7) | 0;
      break If_4_0;
     } else {
      var0 = (0) | 0;
      // Here was a goto statement
      phi1 = arg0;
      phi2 = (var0) | 0;
      break If_4_0;
     }
    }
    return phi2;
  }

  Ljava$lang$Object$$putVal$I$Ljava$lang$Object$$Ljava$lang$Object$$Z$Z(arg0,arg1,arg2,arg3,arg4) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var phi8 = null;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var phi14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = 0;
    var phi19 = null;
    var phi20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    var var26 = 0;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = 0;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var phi35 = null;
    var phi36 = 0;
    var var37 = null;
    var var38 = 0;
    var var39 = 0;
    var var40 = null;
    var var41 = 0;
    var var42 = 0;
    var var43 = null;
    var var44 = 0;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = 0;
    var var49 = 0;
    var var50 = 0;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = 0;
    var phi58 = null;
    var phi59 = 0;
    var phi60 = null;
    var var61 = null;
    var phi62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = 0;
    var var67 = null;
    var phi68 = null;
    var var69 = null;
    var var70 = null;
    var var71 = null;
    var var72 = null;
    var var73 = null;
    var phi74 = null;
    var phi75 = 0;
    var phi76 = null;
    var var77 = null;
    var var78 = 0;
    var var79 = null;
    var var80 = null;
    var var81 = null;
    var var82 = null;
    var var83 = 0;
    var var84 = null;
    var var85 = null;
    var var86 = null;
    var var87 = 0;
    var phi88 = 0;
    var var89 = null;
    var var90 = null;
    var var91 = null;
    var var92 = null;
    var var93 = null;
    var var94 = 0;
    var var95 = null;
    var var96 = null;
    var var97 = null;
    var var98 = 0;
    var var99 = null;
    var var100 = null;
    var var101 = 0;
    var var102 = 0;
    var var103 = 0;
    var var104 = null;
    var var105 = null;
    var var106 = null;
    var var107 = null;
    var var108 = null;
    var var109 = null;
    var var110 = 0;
    var phi111 = null;
    var phi112 = null;
    var var113 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    var2 = arg4;
    // line number 634
    var3 = (this.table);
    var4 = var3;
    If_21_0: {
     If_21_1: {
      if (var3 == null) {
       phi8 = this;
       phi9 = (var0) | 0;
       phi10 = arg1;
       phi11 = var1;
       phi12 = arg3;
       phi13 = var2;
       phi14 = var4;
       break If_21_1;
      } else {
       var5 = var4;
       var6 = (var5.data.length) | 0;
       var7 = (var6) | 0;
       if (var6 != 0) {
        phi8 = this;
        phi9 = (var0) | 0;
        phi10 = arg1;
        phi11 = var1;
        phi12 = arg3;
        phi13 = var2;
        phi19 = var4;
        phi20 = (var7) | 0;
        break If_21_0;
       } else {
        phi8 = this;
        phi9 = (var0) | 0;
        phi10 = arg1;
        phi11 = var1;
        phi12 = arg3;
        phi13 = var2;
        phi14 = var4;
        break If_21_1;
       }
      }
     }
     // line number 635
     var15 = phi8;
     var16 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(var15));
     var17 = var16;
     var18 = (var16.data.length) | 0;
     phi19 = var17;
     phi20 = (var18) | 0;
     break If_21_0;
    }
    // line number 636
    var21 = phi19;
    var22 = (phi20) | 0;
    var23 = ((var22 - 1)) | 0;
    var24 = (phi9) | 0;
    var25 = ((var23 & var24)) | 0;
    var26 = (var25) | 0;
    var27 = (var21.data[var25]);
    var28 = var27;
    If_81_0: {
     if (var27 != null) {
      // line number 640
      var49 = ((var28.hash)) | 0;
      var50 = (phi9) | 0;
      If_162_0: {
       If_162_1: {
        if (var49 != var50) {
         phi74 = var28;
         phi75 = (var26) | 0;
         break If_162_1;
        } else {
         var51 = var28;
         var52 = (var51.key);
         var53 = var52;
         var54 = phi10;
         If_174_0: {
          if (var52 == var54) {
           phi58 = var28;
           phi59 = (var26) | 0;
           phi60 = var53;
           break If_174_0;
          } else {
           var55 = phi10;
           if (var55 == null) {
            phi74 = var28;
            phi75 = (var26) | 0;
            phi76 = var53;
            break If_162_1;
           } else {
            var56 = phi10;
            // line number 641
            var57 = (var56.Z$equals$Ljava$lang$Object$(var53));
            if (var57 == 0) {
             phi74 = var28;
             phi75 = (var26) | 0;
             phi76 = var53;
             break If_162_1;
            } else {
             phi58 = var28;
             phi59 = (var26) | 0;
             phi60 = var53;
             break If_174_0;
            }
           }
          }
         }
         // line number 642
         var61 = phi58;
         // Here was a goto statement
         phi62 = var61;
         break If_162_0;
        }
       }
       // line number 643
       var77 = phi74;
       var78 = (bytecoder.instanceOf(var77,java$util$HashMap$TreeNode)) | 0;
       if (var78 == 0) {
        // line number 646
        var87 = (0) | 0;
        phi88 = (var87) | 0;
        L1082487729: while(true) {
         // line number 647
         var89 = phi74;
         var90 = (var89.next);
         var91 = var90;
         if (var90 != null) {
          // line number 653
          var102 = ((var91.hash)) | 0;
          var103 = (phi9) | 0;
          If_347_0: {
           if (var102 != var103) {
            phi111 = var91;
            phi112 = phi76;
            break If_347_0;
           } else {
            var104 = var91;
            var105 = (var104.key);
            var106 = var105;
            var107 = phi10;
            if (var105 == var107) {
             phi58 = phi74;
             phi59 = (phi75) | 0;
             phi62 = var91;
             phi60 = var106;
             break If_162_0;
            } else {
             var108 = phi10;
             if (var108 == null) {
              phi111 = var91;
              phi112 = var106;
              break If_347_0;
             } else {
              var109 = phi10;
              // line number 654
              var110 = (var109.Z$equals$Ljava$lang$Object$(var106));
              if (var110 == 0) {
               phi111 = var91;
               phi112 = var106;
               break If_347_0;
              } else {
               // line number 655
               // Here was a goto statement
               phi58 = phi74;
               phi59 = (phi75) | 0;
               phi62 = var91;
               phi60 = var106;
               break If_162_0;
              }
             }
            }
           }
          }
          // line number 656
          var113 = phi111;
          // line number 646
          phi88 = ((phi88 + 1)) | 0;
          // Here was a goto statement
          phi74 = var113;
          phi76 = phi112;
          continue L1082487729;
         } else {
          // line number 648
          var92 = phi74;
          var93 = phi8;
          var94 = (phi9) | 0;
          var95 = phi10;
          var96 = phi11;
          var97 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var93,var94,var95,var96,null));
          var92.next = var97;
          // line number 649
          var98 = (phi88) | 0;
          if (var98 < 7) {
           phi58 = phi74;
           phi59 = (phi75) | 0;
           phi62 = var91;
           phi60 = phi76;
           break If_162_0;
          } else {
           // line number 650
           var99 = phi8;
           var100 = phi19;
           var101 = (phi9) | 0;
           java$util$HashMap.prototype.V$treeifyBin$$Ljava$util$HashMap$Node$$I.call(var99,var100,var101);
           // Here was a goto statement
           phi58 = phi74;
           phi59 = (phi75) | 0;
           phi62 = var91;
           phi60 = phi76;
           break If_162_0;
          }
         }
        }
       } else {
        // line number 644
        var79 = phi74;
        var80 = var79;
        var81 = phi8;
        var82 = phi19;
        var83 = (phi9) | 0;
        var84 = phi10;
        var85 = phi11;
        var86 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$.call(var80,var81,var82,var83,var84,var85));
        // Here was a goto statement
        phi58 = phi74;
        phi59 = (phi75) | 0;
        phi62 = var86;
        phi60 = phi76;
        break If_162_0;
       }
      }
      // line number 659
      var63 = phi62;
      if (var63 == null) {
       phi35 = phi58;
       phi36 = (phi59) | 0;
       break If_81_0;
      } else {
       // line number 660
       var64 = phi62;
       var65 = (var64.value);
       // line number 661
       var66 = phi12;
       If_219_0: {
        If_219_1: {
         if (var66 == 0) {
          phi68 = var65;
          break If_219_1;
         } else {
          var67 = var65;
          if (var67 != null) {
           phi68 = var65;
           break If_219_0;
          } else {
           phi68 = var65;
           break If_219_1;
          }
         }
        }
        // line number 662
        var69 = phi62;
        var70 = phi11;
        var69.value = var70;
        break If_219_0;
       }
       // line number 663
       var71 = phi8;
       var72 = phi62;
       java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(var71,var72);
       // line number 664
       var73 = phi68;
       return var73;
      }
     } else {
      // line number 637
      var29 = phi19;
      var30 = phi8;
      var31 = (phi9) | 0;
      var32 = phi10;
      var33 = phi11;
      var34 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var30,var31,var32,var33,null));
      var29.data[var26] = var34;
      // Here was a goto statement
      phi35 = var28;
      phi36 = (var26) | 0;
      break If_81_0;
     }
    }
    // line number 667
    var37 = phi8;
    var38 = ((var37.modCount)) | 0;
    var39 = ((var38 + 1)) | 0;
    var37.modCount = var39;
    // line number 668
    var40 = phi8;
    var41 = ((var40.size)) | 0;
    var42 = ((var41 + 1)) | 0;
    var40.size = var42;
    var43 = phi8;
    var44 = ((var43.threshold)) | 0;
    If_133_0: {
     if (var42 <= var44) {
      break If_133_0;
     } else {
      // line number 669
      var45 = phi8;
      var46 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(var45));
      break If_133_0;
     }
    }
    // line number 670
    var47 = phi8;
    var48 = phi13;
    java$util$HashMap.prototype.V$afterNodeInsertion$Z.call(var47,var48);
    // line number 671
    return null;
  }

  $Ljava$util$HashMap$Node$$resize$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = null;
    var phi4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var phi18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = .0;
    var var22 = null;
    var var23 = .0;
    var var24 = .0;
    var var25 = 0;
    var var26 = .0;
    var var27 = 0;
    var var28 = 0;
    var phi29 = .0;
    var phi30 = 0;
    var var31 = 0;
    var phi32 = 0;
    var var33 = null;
    var var34 = 0;
    var var35 = 0;
    var var36 = null;
    var var37 = null;
    var var38 = null;
    var var39 = 0;
    var phi40 = null;
    var phi41 = 0;
    var var42 = 0;
    var var43 = 0;
    var var44 = null;
    var var45 = 0;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = 0;
    var var50 = null;
    var var51 = null;
    var var52 = 0;
    var var53 = 0;
    var var54 = 0;
    var var55 = 0;
    var phi56 = null;
    var var57 = 0;
    var var58 = null;
    var var59 = null;
    var var60 = null;
    var var61 = 0;
    var var62 = 0;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = null;
    var phi67 = null;
    var phi68 = null;
    var phi69 = null;
    var phi70 = null;
    var phi71 = null;
    var var72 = null;
    var var73 = null;
    var var74 = null;
    var var75 = 0;
    var var76 = 0;
    var var77 = 0;
    var var78 = null;
    var var79 = null;
    var phi80 = null;
    var phi81 = null;
    var var82 = null;
    var phi83 = null;
    var var84 = null;
    var var85 = null;
    var var86 = null;
    var var87 = null;
    var var88 = null;
    var var89 = 0;
    var var90 = null;
    var phi91 = null;
    var var92 = null;
    var var93 = null;
    var var94 = null;
    var var95 = 0;
    var var96 = 0;
    var var97 = 0;
    var var98 = null;
    var var99 = null;
    var var100 = null;
    var var101 = null;
    var var102 = null;
    var phi103 = null;
    var phi104 = null;
    var var105 = null;
    var var106 = null;
    var var107 = null;
    var var108 = null;
    var phi109 = .0;
    var var110 = 0;
    var var111 = 0;
    var var112 = 0;
    var var113 = 0;
    // line number 684
    var0 = (this.table);
    // line number 685
    If_9_0: {
     if (var0 != null) {
      var113 = (var0.data.length) | 0;
      phi2 = this;
      phi3 = var0;
      phi4 = (var113) | 0;
      break If_9_0;
     } else {
      var1 = (0) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = var0;
      phi4 = (var1) | 0;
      break If_9_0;
     }
    }
    var5 = (phi4) | 0;
    // line number 686
    var6 = phi2;
    var7 = ((var6.threshold)) | 0;
    // line number 687
    var8 = (0) | 0;
    // line number 688
    If_36_0: {
     if (var5 <= 0) {
      // line number 697
      if (var7 <= 0) {
       // line number 700
       var111 = (16) | 0;
       // line number 701
       var112 = (12) | 0;
       phi15 = (var5) | 0;
       phi16 = (var7) | 0;
       phi17 = (var111) | 0;
       phi18 = (var112) | 0;
       break If_36_0;
      } else {
       // line number 698
       var110 = (var7) | 0;
       // Here was a goto statement
       phi15 = (var5) | 0;
       phi16 = (var7) | 0;
       phi17 = (var110) | 0;
       phi18 = (var8) | 0;
       break If_36_0;
      }
     } else {
      // line number 689
      if (var5 < 1073741824) {
       // line number 693
       var11 = ((var5 << 1)) | 0;
       var12 = (var11) | 0;
       if (var11 >= 1073741824) {
        phi15 = (var5) | 0;
        phi16 = (var7) | 0;
        phi17 = (var12) | 0;
        phi18 = (var8) | 0;
        break If_36_0;
       } else {
        var13 = (var5) | 0;
        if (var13 < 16) {
         phi15 = (var5) | 0;
         phi16 = (var7) | 0;
         phi17 = (var12) | 0;
         phi18 = (var8) | 0;
         break If_36_0;
        } else {
         // line number 695
         var14 = ((var7 << 1)) | 0;
         // Here was a goto statement
         phi15 = (var5) | 0;
         phi16 = (var7) | 0;
         phi17 = (var12) | 0;
         phi18 = (var14) | 0;
         break If_36_0;
        }
       }
      } else {
       // line number 690
       var9 = phi2;
       var9.threshold = 2147483647;
       // line number 691
       var10 = phi3;
       return var10;
      }
     }
    }
    // line number 703
    var19 = (phi18) | 0;
    If_89_0: {
     if (var19 != 0) {
      phi32 = (phi18) | 0;
      break If_89_0;
     } else {
      // line number 704
      var20 = (phi17) | 0;
      var21 = var20;
      var22 = phi2;
      var23 = (var22.loadFactor);
      var24 = (var21 * var23);
      // line number 705
      var25 = (phi17) | 0;
      If_112_0: {
       If_112_1: {
        if (var25 >= 1073741824) {
         phi109 = var24;
         break If_112_1;
        } else {
         var26 = var24;
         var27 = (bytecoder.cmp(var26,1.0737418E9)) | 0;
         if (var27 >= 0) {
          phi109 = var24;
          break If_112_1;
         } else {
          // line number 706
          var28 = ((var24 | 0)) | 0;
          // Here was a goto statement
          phi29 = var24;
          phi30 = (var28) | 0;
          break If_112_0;
         }
        }
       }
       phi29 = phi109;
       phi30 = (2147483647) | 0;
       break If_112_0;
      }
      var31 = (phi30) | 0;
      phi32 = (var31) | 0;
      break If_89_0;
     }
    }
    // line number 708
    var33 = phi2;
    var34 = (phi32) | 0;
    var33.threshold = var34;
    // line number 710
    var35 = (phi17) | 0;
    var36 = bytecoder.newarray((var35),null);
    // line number 711
    var37 = phi2;
    var37.table = var36;
    // line number 712
    var38 = phi3;
    If_160_0: {
     if (var38 == null) {
      phi40 = var36;
      break If_160_0;
     } else {
      // line number 713
      var39 = (0) | 0;
      phi40 = var36;
      phi41 = (var39) | 0;
      L1779913058: while(true) {
       var42 = (phi41) | 0;
       var43 = (phi15) | 0;
       if (var42 >= var43) {
        break If_160_0;
       } else {
        // line number 715
        var44 = phi3;
        var45 = (phi41) | 0;
        var46 = (var44.data[var45]);
        var47 = var46;
        If_189_0: {
         if (var46 == null) {
          phi56 = var47;
          break If_189_0;
         } else {
          // line number 716
          var48 = phi3;
          var49 = (phi41) | 0;
          var48.data[var49] = null;
          // line number 717
          var50 = (var47.next);
          if (var50 != null) {
           // line number 719
           var57 = (bytecoder.instanceOf(var47,java$util$HashMap$TreeNode)) | 0;
           if (var57 == 0) {
            // line number 722
            var63 = null;
            var64 = null;
            // line number 723
            var65 = null;
            var66 = null;
            phi67 = var47;
            phi68 = var63;
            phi69 = var64;
            phi70 = var65;
            phi71 = var66;
            L1275203160: while(true) {
             // line number 726
             var72 = phi67;
             var73 = (var72.next);
             // line number 727
             var74 = phi67;
             var75 = ((var74.hash)) | 0;
             var76 = (phi15) | 0;
             var77 = ((var75 & var76)) | 0;
             If_301_0: {
              if (var77 != 0) {
               // line number 735
               var101 = phi71;
               If_395_0: {
                if (var101 != null) {
                 // line number 738
                 var106 = phi71;
                 var107 = phi67;
                 var106.next = var107;
                 phi103 = phi70;
                 phi104 = var73;
                 break If_395_0;
                } else {
                 // line number 736
                 var102 = phi67;
                 // Here was a goto statement
                 phi103 = var102;
                 phi104 = var73;
                 break If_395_0;
                }
               }
               // line number 739
               var105 = phi67;
               phi80 = phi68;
               phi83 = phi69;
               phi70 = phi103;
               phi71 = var105;
               phi81 = phi104;
               break If_301_0;
              } else {
               // line number 728
               var78 = phi69;
               If_308_0: {
                if (var78 != null) {
                 // line number 731
                 var99 = phi69;
                 var100 = phi67;
                 var99.next = var100;
                 phi80 = phi68;
                 phi81 = var73;
                 break If_308_0;
                } else {
                 // line number 729
                 var79 = phi67;
                 // Here was a goto statement
                 phi80 = var79;
                 phi81 = var73;
                 break If_308_0;
                }
               }
               // line number 732
               var82 = phi67;
               // Here was a goto statement
               phi83 = var82;
               break If_301_0;
              }
             }
             // line number 741
             var84 = phi81;
             var85 = var84;
             if (var84 != null) {
              phi67 = var85;
              phi68 = phi80;
              phi69 = phi83;
              continue L1275203160;
             } else {
              // line number 742
              var86 = phi83;
              If_337_0: {
               if (var86 == null) {
                phi91 = var85;
                break If_337_0;
               } else {
                // line number 743
                var87 = phi83;
                var87.next = null;
                // line number 744
                var88 = phi40;
                var89 = (phi41) | 0;
                var90 = phi80;
                var88.data[var89] = var90;
                phi91 = var85;
                break If_337_0;
               }
              }
              // line number 746
              var92 = phi71;
              if (var92 == null) {
               phi56 = phi91;
               break If_189_0;
              } else {
               // line number 747
               var93 = phi71;
               var93.next = null;
               // line number 748
               var94 = phi40;
               var95 = (phi41) | 0;
               var96 = (phi15) | 0;
               var97 = ((var95 + var96)) | 0;
               var98 = phi70;
               var94.data[var97] = var98;
               phi56 = phi91;
               break If_189_0;
              }
             }
            }
           } else {
            // line number 720
            var58 = var47;
            var59 = phi2;
            var60 = phi40;
            var61 = (phi41) | 0;
            var62 = (phi15) | 0;
            java$util$HashMap$TreeNode.prototype.V$split$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$I.call(var58,var59,var60,var61,var62);
            // Here was a goto statement
            phi56 = var47;
            break If_189_0;
           }
          } else {
           // line number 718
           var51 = phi40;
           var52 = ((var47.hash)) | 0;
           var53 = (phi17) | 0;
           var54 = ((var53 - 1)) | 0;
           var55 = ((var52 & var54)) | 0;
           var51.data[var55] = var47;
           // Here was a goto statement
           phi56 = var47;
           break If_189_0;
          }
         }
        }
        // line number 713
        phi41 = ((phi41 + 1)) | 0;
        // Here was a goto statement
        continue L1779913058;
       }
      }
     }
    }
    // line number 754
    var108 = phi40;
    return var108;
  }

  Ljava$util$HashMap$Node$$replacementNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var0 = arg0;
    // line number 1914
    var1 = new java$util$HashMap$Node();
    var2 = var0;
    var3 = ((var2.hash)) | 0;
    var4 = (var0.key);
    var5 = (var0.value);
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var1,var3,var4,var5,arg1);
    return var1;
  }

  static Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = null;
    var var17 = 0;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var phi33 = null;
    var phi34 = null;
    var phi35 = null;
    // line number 346
    var0 = (bytecoder.instanceOf(arg0,java$lang$Comparable)) | 0;
    If_8_0: {
     if (var0 == 0) {
      phi8 = arg0;
      break If_8_0;
     } else {
      // line number 348
      var1 = ((arg0).constructor.$rt);
      var2 = var1;
      if (var1 != java$lang$String.$rt) {
       // line number 350
       var3 = (java$lang$Class.prototype.$Ljava$lang$reflect$Type$$getGenericInterfaces$$.call(var2));
       var4 = var3;
       if (var3 == null) {
        phi8 = arg0;
        phi9 = var2;
        phi10 = var4;
        break If_8_0;
       } else {
        // line number 351
        var5 = var4;
        var6 = (var5.data.length) | 0;
        var7 = (0) | 0;
        phi8 = arg0;
        phi9 = var2;
        phi10 = var4;
        phi11 = var5;
        phi12 = (var6) | 0;
        phi13 = (var7) | 0;
        L1859945349: while(true) {
         var14 = (phi13) | 0;
         var15 = (phi12) | 0;
         if (var14 >= var15) {
          break If_8_0;
         } else {
          var16 = phi11;
          var17 = (phi13) | 0;
          var18 = (var16.data[var17]);
          // line number 352
          var19 = (bytecoder.instanceOf(var18,java$lang$reflect$ParameterizedType)) | 0;
          If_74_0: {
           if (var19 == 0) {
            phi35 = var18;
            break If_74_0;
           } else {
            var20 = var18;
            var21 = var20;
            var22 = var21;
            // line number 353
            var23 = (var21.Ljava$lang$reflect$Type$$getRawType$$());
            if (var23 != java$lang$Comparable.$rt) {
             phi34 = var22;
             phi35 = var18;
             break If_74_0;
            } else {
             var24 = var22;
             // line number 355
             var25 = (var24.$Ljava$lang$reflect$Type$$getActualTypeArguments$$());
             var26 = var25;
             if (var25 == null) {
              phi33 = var26;
              phi34 = var22;
              phi35 = var18;
              break If_74_0;
             } else {
              var27 = var26;
              var28 = (var27.data.length) | 0;
              if (var28 != 1) {
               phi33 = var26;
               phi34 = var22;
               phi35 = var18;
               break If_74_0;
              } else {
               var29 = var26;
               var30 = (var29.data[0]);
               var31 = phi9;
               if (var30 != var31) {
                phi33 = var26;
                phi34 = var22;
                phi35 = var18;
                break If_74_0;
               } else {
                // line number 357
                var32 = phi9;
                return var32;
               }
              }
             }
            }
           }
          }
          // line number 351
          phi13 = ((phi13 + 1)) | 0;
          // Here was a goto statement
          continue L1859945349;
         }
        }
       }
      } else {
       // line number 349
       return var2;
      }
     }
    }
    // line number 361
    return null;
  }

  static I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1,arg2) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var var7 = null;
    var var8 = 0;
    var0 = arg1;
    // line number 370
    If_8_0: {
     If_8_1: {
      if (arg2 == null) {
       phi3 = arg0;
       phi4 = var0;
       phi5 = arg2;
       break If_8_1;
      } else {
       var1 = arg2;
       var2 = ((var1).constructor.$rt);
       if (var2 == arg0) {
        // line number 371
        var7 = var0;
        var8 = ((var7.I$compareTo$Ljava$lang$Object$(arg2))) | 0;
        phi3 = arg0;
        phi4 = var0;
        phi5 = arg2;
        phi6 = (var8) | 0;
        break If_8_0;
       } else {
        phi3 = arg0;
        phi4 = var0;
        phi5 = arg2;
        break If_8_1;
       }
      }
     }
     // Here was a goto statement
     phi6 = (0) | 0;
     break If_8_0;
    }
    // line number 370
    return phi6;
  }

  Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 1909
    var2 = new java$util$HashMap$Node();
    var3 = (var0) | 0;
    var4 = var1;
    java$util$HashMap$Node.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var2,var3,arg1,var4,arg3);
    return var2;
  }

  V$afterNodeInsertion$Z(arg0) {
    // source file is HashMap.java
    var var0 = 0;
    var0 = arg0;
    // line number 1942
    return;
  }

  V$afterNodeAccess$Ljava$util$HashMap$Node$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var0 = arg0;
    // line number 1941
    return;
  }

  Ljava$util$HashMap$TreeNode$$newTreeNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 1919
    java$util$HashMap$TreeNode.$i;
    var2 = new java$util$HashMap$TreeNode();
    var3 = (var0) | 0;
    var4 = var1;
    java$util$HashMap$TreeNode.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var2,var3,arg1,var4,arg3);
    return var2;
  }

  V$treeifyBin$$Ljava$util$HashMap$Node$$I(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = 0;
    var phi20 = 0;
    var phi21 = 0;
    var phi22 = null;
    var phi23 = null;
    var phi24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var phi30 = null;
    var phi31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = 0;
    var var38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var0 = arg0;
    // line number 763
    If_8_0: {
     If_8_1: {
      if (var0 == null) {
       phi4 = this;
       phi5 = var0;
       phi6 = (arg1) | 0;
       break If_8_1;
      } else {
       var1 = var0;
       var2 = (var1.data.length) | 0;
       var3 = (var2) | 0;
       if (var2 >= 64) {
        // line number 765
        var10 = (var3) | 0;
        var11 = ((var10 - 1)) | 0;
        var12 = ((var11 & arg1)) | 0;
        var13 = (var12) | 0;
        var14 = (var0.data[var12]);
        var15 = var14;
        if (var14 == null) {
         phi4 = this;
         phi5 = var0;
         phi6 = (arg1) | 0;
         phi7 = (var3) | 0;
         break If_8_0;
        } else {
         // line number 766
         var16 = null;
         phi17 = this;
         phi18 = var0;
         phi19 = (arg1) | 0;
         phi20 = (var3) | 0;
         phi21 = (var13) | 0;
         phi22 = var15;
         phi23 = var16;
         phi24 = null;
         L835787160: while(true) {
          // line number 768
          var25 = phi17;
          var26 = phi22;
          var27 = (java$util$HashMap.prototype.Ljava$util$HashMap$TreeNode$$replacementTreeNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$.call(var25,var26,null));
          // line number 769
          var28 = phi24;
          If_91_0: {
           if (var28 != null) {
            // line number 772
            var41 = phi24;
            var27.prev = var41;
            // line number 773
            var42 = phi24;
            var42.next = var27;
            phi30 = phi23;
            phi31 = var27;
            break If_91_0;
           } else {
            // line number 770
            var29 = var27;
            // Here was a goto statement
            phi30 = var29;
            phi31 = var27;
            break If_91_0;
           }
          }
          // line number 775
          var32 = phi31;
          // line number 776
          var33 = phi22;
          var34 = (var33.next);
          var35 = var34;
          if (var34 != null) {
           phi22 = var35;
           phi23 = phi30;
           phi24 = var32;
           continue L835787160;
          } else {
           // line number 777
           var36 = phi18;
           var37 = (phi21) | 0;
           var38 = phi30;
           var36.data[var37] = var38;
           if (var38 == null) {
            phi4 = phi17;
            phi5 = phi18;
            phi6 = (phi19) | 0;
            phi7 = (phi20) | 0;
            break If_8_0;
           } else {
            // line number 778
            var39 = phi30;
            var40 = phi18;
            java$util$HashMap$TreeNode.prototype.V$treeify$$Ljava$util$HashMap$Node$.call(var39,var40);
            phi4 = phi17;
            phi5 = phi18;
            phi6 = (phi19) | 0;
            phi7 = (phi20) | 0;
            break If_8_0;
           }
          }
         }
        }
       } else {
        phi4 = this;
        phi5 = var0;
        phi6 = (arg1) | 0;
        phi7 = (var3) | 0;
        break If_8_1;
       }
      }
     }
     // line number 764
     var8 = phi4;
     var9 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(var8));
     // Here was a goto statement
     break If_8_0;
    }
    // line number 780
    return;
  }

  Ljava$util$HashMap$TreeNode$$replacementTreeNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var0 = arg0;
    // line number 1924
    java$util$HashMap$TreeNode.$i;
    var1 = new java$util$HashMap$TreeNode();
    var2 = var0;
    var3 = ((var2.hash)) | 0;
    var4 = (var0.key);
    var5 = (var0.value);
    java$util$HashMap$TreeNode.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var1,var3,var4,var5,arg1);
    return var1;
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = null;
    var var9 = null;
    var0 = arg0;
    // line number 564
    var1 = var0;
    var2 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(this,var1));
    var3 = var2;
    If_15_0: {
     if (var2 != null) {
      var9 = (var3.value);
      phi5 = this;
      phi6 = var0;
      phi7 = var3;
      phi8 = var9;
      break If_15_0;
     } else {
      var4 = null;
      // Here was a goto statement
      phi5 = this;
      phi6 = var0;
      phi7 = var3;
      phi8 = var4;
      break If_15_0;
     }
    }
    return phi8;
  }

  Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var phi20 = null;
    var phi21 = null;
    var phi22 = null;
    var phi23 = null;
    var phi24 = 0;
    var phi25 = 0;
    var phi26 = null;
    var var27 = null;
    var phi28 = null;
    var phi29 = null;
    var phi30 = null;
    var phi31 = null;
    var phi32 = 0;
    var phi33 = 0;
    var phi34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = null;
    var var39 = 0;
    var var40 = null;
    var var41 = null;
    var var42 = 0;
    var var43 = null;
    var var44 = null;
    var phi45 = null;
    var var46 = null;
    var var47 = 0;
    var var48 = 0;
    var var49 = null;
    var var50 = null;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = 0;
    var phi56 = null;
    var var57 = null;
    var phi58 = null;
    var var59 = null;
    var var60 = null;
    var var61 = null;
    var phi62 = null;
    var0 = arg0;
    // line number 575
    var1 = (this.table);
    var2 = var1;
    If_13_0: {
     if (var1 == null) {
      phi28 = this;
      phi29 = var0;
      phi30 = var2;
      break If_13_0;
     } else {
      var3 = var2;
      var4 = (var3.data.length) | 0;
      var5 = (var4) | 0;
      if (var4 <= 0) {
       phi28 = this;
       phi29 = var0;
       phi30 = var2;
       phi32 = (var5) | 0;
       break If_13_0;
      } else {
       var6 = var2;
       var7 = ((var5 - 1)) | 0;
       // line number 576
       var8 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(var0))) | 0;
       var9 = (var8) | 0;
       var10 = ((var7 & var8)) | 0;
       var11 = (var6.data[var10]);
       var12 = var11;
       if (var11 == null) {
        phi28 = this;
        phi29 = var0;
        phi30 = var2;
        phi31 = var12;
        phi32 = (var5) | 0;
        phi33 = (var9) | 0;
        break If_13_0;
       } else {
        // line number 577
        var13 = ((var12.hash)) | 0;
        If_58_0: {
         if (var13 != var9) {
          phi28 = this;
          phi29 = var0;
          phi30 = var2;
          phi31 = var12;
          phi32 = (var5) | 0;
          phi33 = (var9) | 0;
          break If_58_0;
         } else {
          var14 = var12;
          var15 = (var14.key);
          var16 = var15;
          If_68_0: {
           if (var15 == var0) {
            phi20 = this;
            phi21 = var0;
            phi22 = var2;
            phi23 = var12;
            phi24 = (var5) | 0;
            phi25 = (var9) | 0;
            phi26 = var16;
            break If_68_0;
           } else {
            var17 = var0;
            if (var17 == null) {
             phi28 = this;
             phi29 = var0;
             phi30 = var2;
             phi31 = var12;
             phi32 = (var5) | 0;
             phi33 = (var9) | 0;
             phi34 = var16;
             break If_58_0;
            } else {
             var18 = var0;
             // line number 578
             var19 = (var18.Z$equals$Ljava$lang$Object$(var16));
             if (var19 == 0) {
              phi28 = this;
              phi29 = var0;
              phi30 = var2;
              phi31 = var12;
              phi32 = (var5) | 0;
              phi33 = (var9) | 0;
              phi34 = var16;
              break If_58_0;
             } else {
              phi20 = this;
              phi21 = var0;
              phi22 = var2;
              phi23 = var12;
              phi24 = (var5) | 0;
              phi25 = (var9) | 0;
              phi26 = var16;
              break If_68_0;
             }
            }
           }
          }
          // line number 579
          var27 = phi23;
          return var27;
         }
        }
        // line number 580
        var35 = phi31;
        var36 = (var35.next);
        var37 = var36;
        if (var36 == null) {
         phi62 = var37;
         phi58 = phi34;
         break If_13_0;
        } else {
         // line number 581
         var38 = phi31;
         var39 = (bytecoder.instanceOf(var38,java$util$HashMap$TreeNode)) | 0;
         if (var39 == 0) {
          phi45 = var37;
          L999361099: while(true) {
           // line number 584
           var46 = phi45;
           var47 = ((var46.hash)) | 0;
           var48 = (phi33) | 0;
           If_154_0: {
            if (var47 != var48) {
             phi58 = phi34;
             break If_154_0;
            } else {
             var49 = phi45;
             var50 = (var49.key);
             var51 = var50;
             var52 = phi29;
             If_166_0: {
              if (var50 == var52) {
               phi56 = var51;
               break If_166_0;
              } else {
               var53 = phi29;
               if (var53 == null) {
                phi58 = var51;
                break If_154_0;
               } else {
                var54 = phi29;
                // line number 585
                var55 = (var54.Z$equals$Ljava$lang$Object$(var51));
                if (var55 == 0) {
                 phi58 = var51;
                 break If_154_0;
                } else {
                 phi56 = var51;
                 break If_166_0;
                }
               }
              }
             }
             // line number 586
             var57 = phi45;
             return var57;
            }
           }
           // line number 587
           var59 = phi45;
           var60 = (var59.next);
           var61 = var60;
           if (var60 != null) {
            phi45 = var61;
            phi34 = phi58;
            continue L999361099;
           } else {
            phi62 = var61;
            break If_13_0;
           }
          }
         } else {
          // line number 582
          var40 = phi31;
          var41 = var40;
          var42 = (phi33) | 0;
          var43 = phi29;
          var44 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$.call(var41,var42,var43));
          return var44;
         }
        }
       }
      }
     }
    }
    // line number 590
    return null;
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var phi13 = null;
    var phi14 = null;
    var phi15 = null;
    var phi16 = 0;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = null;
    var phi20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = 0;
    var phi25 = null;
    var phi26 = 0;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = 0;
    var var36 = null;
    var var37 = null;
    var var38 = 0;
    var var39 = null;
    var var40 = null;
    var phi41 = null;
    var phi42 = 0;
    var phi43 = null;
    var phi44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = null;
    var phi51 = null;
    var var52 = null;
    var var53 = 0;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = 0;
    var var59 = null;
    var var60 = null;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = null;
    var var67 = null;
    var var68 = 0;
    var var69 = null;
    var var70 = null;
    var phi71 = 0;
    var phi72 = null;
    var var73 = null;
    var var74 = 0;
    var var75 = 0;
    var var76 = null;
    var var77 = 0;
    var var78 = 0;
    var var79 = null;
    var var80 = null;
    var var81 = null;
    var var82 = 0;
    var var83 = null;
    var var84 = 0;
    var var85 = null;
    var var86 = null;
    var var87 = null;
    var var88 = 0;
    var var89 = null;
    var var90 = null;
    var var91 = 0;
    var var92 = null;
    var phi93 = null;
    var phi94 = 0;
    var phi95 = null;
    var var96 = null;
    var var97 = 0;
    var var98 = 0;
    var var99 = null;
    var var100 = null;
    var var101 = null;
    var var102 = null;
    var var103 = null;
    var var104 = null;
    var var105 = 0;
    var phi106 = null;
    var var107 = null;
    var phi108 = null;
    var var109 = null;
    var var110 = null;
    var var111 = null;
    var0 = arg0;
    // line number 1197
    if (arg1 != null) {
     // line number 1199
     var2 = ((java$util$HashMap.I$hash$Ljava$lang$Object$(var0))) | 0;
     // line number 1201
     var3 = (0) | 0;
     // line number 1202
     var4 = null;
     // line number 1203
     // line number 1204
     var5 = ((this.size)) | 0;
     var6 = ((this.threshold)) | 0;
     If_48_0: {
      If_48_1: {
       if (var5 > var6) {
        phi13 = this;
        phi14 = var0;
        phi15 = arg1;
        phi16 = (var2) | 0;
        phi18 = (var3) | 0;
        phi19 = var4;
        phi20 = null;
        break If_48_1;
       } else {
        var7 = this;
        var8 = (var7.table);
        var9 = var8;
        if (var8 == null) {
         phi13 = this;
         phi14 = var0;
         phi15 = arg1;
         phi16 = (var2) | 0;
         phi17 = var9;
         phi18 = (var3) | 0;
         phi19 = var4;
         phi20 = null;
         break If_48_1;
        } else {
         var10 = var9;
         var11 = (var10.data.length) | 0;
         var12 = (var11) | 0;
         if (var11 != 0) {
          phi13 = this;
          phi14 = var0;
          phi15 = arg1;
          phi16 = (var2) | 0;
          phi25 = var9;
          phi26 = (var12) | 0;
          phi18 = (var3) | 0;
          phi19 = var4;
          phi20 = null;
          break If_48_0;
         } else {
          phi13 = this;
          phi14 = var0;
          phi15 = arg1;
          phi16 = (var2) | 0;
          phi17 = var9;
          phi18 = (var3) | 0;
          phi19 = var4;
          phi20 = null;
          break If_48_1;
         }
        }
       }
      }
      // line number 1206
      var21 = phi13;
      var22 = (java$util$HashMap.prototype.$Ljava$util$HashMap$Node$$resize$$.call(var21));
      var23 = var22;
      var24 = (var22.data.length) | 0;
      phi25 = var23;
      phi26 = (var24) | 0;
      break If_48_0;
     }
     // line number 1207
     var27 = phi25;
     var28 = (phi26) | 0;
     var29 = ((var28 - 1)) | 0;
     var30 = (phi16) | 0;
     var31 = ((var29 & var30)) | 0;
     var32 = (var31) | 0;
     var33 = (var27.data[var31]);
     var34 = var33;
     If_120_0: {
      if (var33 == null) {
       phi41 = var34;
       phi42 = (var32) | 0;
       phi43 = phi19;
       phi44 = phi20;
       break If_120_0;
      } else {
       // line number 1208
       var35 = (bytecoder.instanceOf(var34,java$util$HashMap$TreeNode)) | 0;
       If_128_0: {
        if (var35 == 0) {
         // line number 1211
         var92 = var34;
         phi93 = var34;
         phi94 = (var32) | 0;
         phi95 = var92;
         L2051973428: while(true) {
          // line number 1213
          var96 = phi95;
          var97 = ((var96.hash)) | 0;
          var98 = (phi16) | 0;
          If_355_0: {
           if (var97 != var98) {
            break If_355_0;
           } else {
            var99 = phi95;
            var100 = (var99.key);
            var101 = var100;
            var102 = phi14;
            If_367_0: {
             if (var100 == var102) {
              phi106 = var101;
              break If_367_0;
             } else {
              var103 = phi14;
              if (var103 == null) {
               phi108 = var101;
               break If_355_0;
              } else {
               var104 = phi14;
               // line number 1214
               var105 = (var104.Z$equals$Ljava$lang$Object$(var101));
               if (var105 == 0) {
                phi108 = var101;
                break If_355_0;
               } else {
                phi106 = var101;
                break If_367_0;
               }
              }
             }
            }
            // line number 1215
            var107 = phi95;
            // line number 1216
            // Here was a goto statement
            phi41 = phi93;
            phi42 = (phi94) | 0;
            phi43 = phi19;
            phi44 = var107;
            break If_128_0;
           }
          }
          // line number 1218
          phi18 = ((phi18 + 1)) | 0;
          // line number 1219
          var109 = phi95;
          var110 = (var109.next);
          var111 = var110;
          if (var110 != null) {
           phi95 = var111;
           continue L2051973428;
          } else {
           phi41 = phi93;
           phi42 = (phi94) | 0;
           phi43 = phi19;
           phi44 = phi20;
           break If_128_0;
          }
         }
        } else {
         // line number 1209
         var36 = var34;
         var37 = var36;
         var38 = (phi16) | 0;
         var39 = phi14;
         var40 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$.call(var36,var38,var39));
         // Here was a goto statement
         phi41 = var34;
         phi42 = (var32) | 0;
         phi43 = var37;
         phi44 = var40;
         break If_128_0;
        }
       }
       // line number 1222
       var45 = phi44;
       if (var45 == null) {
        break If_120_0;
       } else {
        var46 = phi44;
        var47 = (var46.value);
        var48 = var47;
        if (var47 == null) {
         phi51 = var48;
         break If_120_0;
        } else {
         // line number 1223
         var49 = phi13;
         var50 = phi44;
         java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(var49,var50);
         // line number 1224
         return var48;
        }
       }
      }
     }
     // line number 1227
     var52 = phi13;
     var53 = ((var52.modCount)) | 0;
     // line number 1228
     var54 = phi15;
     var55 = phi14;
     var56 = (var54.Ljava$lang$Object$$apply$Ljava$lang$Object$(var55));
     // line number 1229
     var57 = phi13;
     var58 = ((var57.modCount)) | 0;
     if (var53 == var58) {
      // line number 1230
      if (var56 != null) {
       // line number 1232
       var60 = phi44;
       if (var60 == null) {
        // line number 1237
        var64 = phi43;
        If_247_0: {
         if (var64 == null) {
          // line number 1240
          var81 = phi25;
          var82 = (phi42) | 0;
          var83 = phi13;
          var84 = (phi16) | 0;
          var85 = phi14;
          var86 = phi41;
          var87 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$newNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var83,var84,var85,var56,var86));
          var81.data[var82] = var87;
          // line number 1241
          var88 = (phi18) | 0;
          if (var88 < 7) {
           phi71 = (var53) | 0;
           phi72 = var56;
           break If_247_0;
          } else {
           // line number 1242
           var89 = phi13;
           var90 = phi25;
           var91 = (phi16) | 0;
           java$util$HashMap.prototype.V$treeifyBin$$Ljava$util$HashMap$Node$$I.call(var89,var90,var91);
           phi71 = (var53) | 0;
           phi72 = var56;
           break If_247_0;
          }
         } else {
          // line number 1238
          var65 = phi43;
          var66 = phi13;
          var67 = phi25;
          var68 = (phi16) | 0;
          var69 = phi14;
          var70 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$.call(var65,var66,var67,var68,var69,var56));
          // Here was a goto statement
          phi71 = (var53) | 0;
          phi72 = var56;
          break If_247_0;
         }
        }
        // line number 1244
        var73 = phi13;
        var74 = (phi71) | 0;
        var75 = ((var74 + 1)) | 0;
        var73.modCount = var75;
        // line number 1245
        var76 = phi13;
        var77 = ((var76.size)) | 0;
        var78 = ((var77 + 1)) | 0;
        var76.size = var78;
        // line number 1246
        var79 = phi13;
        java$util$HashMap.prototype.V$afterNodeInsertion$Z.call(var79,1);
        // line number 1247
        var80 = phi72;
        return var80;
       } else {
        // line number 1233
        var61 = phi44;
        var61.value = var56;
        // line number 1234
        var62 = phi13;
        var63 = phi44;
        java$util$HashMap.prototype.V$afterNodeAccess$Ljava$util$HashMap$Node$.call(var62,var63);
        // line number 1235
        return var56;
       }
      } else {
       // line number 1231
       return null;
      }
     } else {
      var59 = new java$util$ConcurrentModificationException();
      java$util$ConcurrentModificationException.prototype.V$$init$$$.call(var59);
      throw bytecoder.registerStack(var59, new Error().stack);
     }
    } else {
     // line number 1198
     var1 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  I$size$$() {
    // source file is HashMap.java
    var var0 = 0;
    // line number 533
    var0 = ((this.size)) | 0;
    return var0;
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var0 = arg0;
    // line number 602
    var1 = var0;
    var2 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(this,var1));
    If_12_0: {
     if (var2 == null) {
      phi4 = this;
      phi5 = var0;
      phi6 = (0) | 0;
      break If_12_0;
     } else {
      var3 = (1) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = var0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    return phi6;
  }

  Ljava$util$Set$$entrySet$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    // line number 1099
    var0 = (this.entrySet);
    var1 = var0;
    If_10_0: {
     if (var0 != null) {
      phi4 = this;
      phi5 = var1;
      phi6 = var1;
      break If_10_0;
     } else {
      var2 = this;
      var3 = new java$util$HashMap$EntrySet();
      java$util$HashMap$EntrySet.prototype.V$$init$$Ljava$util$HashMap$.call(var3,this);
      var2.entrySet = var3;
      // Here was a goto statement
      phi4 = this;
      phi5 = var1;
      phi6 = var3;
      break If_10_0;
     }
    }
    return phi6;
  }

  Z$isEmpty$$() {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 542
    var0 = ((this.size)) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }
}


class java$nio$charset$CoderMalfunctionError extends java$lang$Error {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CoderMalfunctionError,[java$nio$charset$CoderMalfunctionError,java$lang$Throwable,java$lang$Object,java$lang$Error]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Exception$(arg0) {
    // source file is CoderMalfunctionError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 52
    var1 = var0;
    java$lang$Error.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 53
    return;
  }
}


class java$io$InputStream extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$InputStream,[java$lang$Object,java$io$Closeable,java$lang$AutoCloseable,java$io$InputStream]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is InputStream.java
    // line number 61
    java$lang$Object.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$Long extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Long,[java$lang$Object,java$lang$Long,java$lang$Number,java$io$Serializable,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Long.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.long;
    java$lang$Long.$i;
    java$lang$Long.TYPE = var0;
    return;
  }

  static Ljava$lang$Long$$valueOf$J(arg0) {
    // source file is Long.java
    var var0 = null;
    var var1 = 0;
    // line number 79
    java$lang$Long.$i;
    var0 = new java$lang$Long();
    var1 = arg0;
    java$lang$Long.prototype.V$$init$$J.call(var0,var1);
    return var0;
  }

  V$$init$$J(arg0) {
    // source file is Long.java
    var var0 = 0;
    var var1 = null;
    var0 = arg0;
    // line number 31
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 32
    var1 = this;
    var1.value = var0;
    // line number 33
    return;
  }

  static I$numberOfLeadingZeros$J(arg0) {
    // source file is Long.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    var phi8 = 0;
    var phi9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    // line number 105
    var0 = (32) | 0;
    var1 = (arg0 >>> var0);
    var2 = ((var1 | 0)) | 0;
    // line number 106
    If_15_0: {
     if (var2 != 0) {
      var10 = (var2) | 0;
      java$lang$Integer.$i;
      var11 = ((java$lang$Integer.I$numberOfLeadingZeros$I(var10))) | 0;
      var12 = ((32 + var11)) | 0;
      phi7 = arg0;
      phi8 = (var2) | 0;
      phi9 = (var12) | 0;
      break If_15_0;
     } else {
      var3 = (32) | 0;
      var4 = ((arg0 | 0)) | 0;
      java$lang$Integer.$i;
      var5 = ((java$lang$Integer.I$numberOfLeadingZeros$I(var4))) | 0;
      var6 = ((var3 + var5)) | 0;
      // Here was a goto statement
      phi7 = arg0;
      phi8 = (var2) | 0;
      phi9 = (var6) | 0;
      break If_15_0;
     }
    }
    return phi9;
  }

  static I$numberOfTrailingZeros$J(arg0) {
    // source file is Long.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = 0;
    var phi8 = 0;
    var phi9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    // line number 110
    var0 = ((arg0 | 0)) | 0;
    // line number 111
    If_9_0: {
     if (var0 != 0) {
      var10 = (var0) | 0;
      java$lang$Integer.$i;
      var11 = ((java$lang$Integer.I$numberOfTrailingZeros$I(var10))) | 0;
      var12 = ((32 + var11)) | 0;
      phi7 = arg0;
      phi8 = (var0) | 0;
      phi9 = (var12) | 0;
      break If_9_0;
     } else {
      var1 = (32) | 0;
      var2 = (32) | 0;
      var3 = (arg0 >>> var2);
      var4 = ((var3 | 0)) | 0;
      java$lang$Integer.$i;
      var5 = ((java$lang$Integer.I$numberOfTrailingZeros$I(var4))) | 0;
      var6 = ((var1 + var5)) | 0;
      // Here was a goto statement
      phi7 = arg0;
      phi8 = (var0) | 0;
      phi9 = (var6) | 0;
      break If_9_0;
     }
    }
    return phi9;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Long.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Long.prototype.I$compareTo$Ljava$lang$Long$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Long$(arg0) {
    // source file is Long.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = arg0;
    // line number 137
    var1 = (this.value);
    var2 = (java$lang$Long.prototype.J$longValue$$.call(var0));
    java$lang$Long.$i;
    var3 = ((java$lang$Long.I$compare$J$J(var1,var2))) | 0;
    return var3;
  }

  J$longValue$$() {
    // source file is Long.java
    var var0 = 0;
    // line number 52
    var0 = (this.value);
    return var0;
  }

  static I$compare$J$J(arg0,arg1) {
    // source file is Long.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var phi4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var0 = arg1;
    // line number 141
    var1 = var0;
    var2 = (bytecoder.cmp(arg0,var1)) | 0;
    If_12_0: {
     if (var2 >= 0) {
      var7 = (bytecoder.cmp(arg0,var0)) | 0;
      if (var7 != 0) {
       phi4 = arg0;
       phi5 = var0;
       phi6 = (1) | 0;
       break If_12_0;
      } else {
       var8 = (0) | 0;
       // Here was a goto statement
       phi4 = arg0;
       phi5 = var0;
       phi6 = (var8) | 0;
       break If_12_0;
      }
     } else {
      var3 = (-1) | 0;
      // Here was a goto statement
      phi4 = arg0;
      phi5 = var0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    return phi6;
  }

  I$intValue$$() {
    // source file is Long.java
    var var0 = 0;
    var var1 = 0;
    // line number 42
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Long.java
    var var0 = 0;
    var var1 = null;
    // line number 75
    var0 = (this.value);
    java$lang$Long.$i;
    var1 = (java$lang$Long.Ljava$lang$String$$toString$J$I(var0,10));
    return var1;
  }

  static Ljava$lang$String$$toString$J$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Long'].Ljava$lang$String$$toString$J$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Long.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = 0;
    var0 = arg0;
    // line number 62
    var1 = var0;
    if (this != var1) {
     // line number 65
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 68
        var7 = var0;
        // line number 70
        var8 = (this.value);
        var9 = (java$lang$Long.prototype.J$longValue$$.call(var7));
        var10 = (bytecoder.cmp(var8,var9)) | 0;
        If_54_0: {
         if (var10 != 0) {
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (0) | 0;
          break If_54_0;
         } else {
          var11 = (1) | 0;
          // Here was a goto statement
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (var11) | 0;
          break If_54_0;
         }
        }
        return phi15;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 66
     return 0;
    } else {
     // line number 63
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Long.java
    var var0 = 0;
    var var1 = 0;
    // line number 37
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }
}


class java$lang$Float extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0.0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Float,[java$lang$Object,java$lang$Number,java$lang$Float,java$io$Serializable,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Float.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.float;
    java$lang$Float.$i;
    java$lang$Float.TYPE = var0;
    return;
  }

  static Ljava$lang$Float$$valueOf$F(arg0) {
    // source file is Float.java
    var var0 = null;
    var var1 = .0;
    // line number 94
    java$lang$Float.$i;
    var0 = new java$lang$Float();
    var1 = arg0;
    java$lang$Float.prototype.V$$init$$F.call(var0,var1);
    return var0;
  }

  V$$init$$F(arg0) {
    // source file is Float.java
    var var0 = .0;
    var var1 = null;
    var0 = arg0;
    // line number 35
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 36
    var1 = this;
    var1.value = var0;
    // line number 37
    return;
  }

  static Z$isNaN$F(arg0) {
    return bytecoder.imports['java.lang.Float'].Z$isNaN$F(arg0);
  }

  static Ljava$lang$String$$toString$F(arg0) {
    return bytecoder.imports['java.lang.Float'].Ljava$lang$String$$toString$F(arg0);
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Float.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Float.prototype.I$compareTo$Ljava$lang$Float$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Float$(arg0) {
    // source file is Float.java
    var var0 = null;
    var var1 = .0;
    var var2 = .0;
    var var3 = 0;
    var0 = arg0;
    // line number 191
    var1 = (this.value);
    var2 = (java$lang$Float.prototype.F$floatValue$$.call(var0));
    java$lang$Float.$i;
    var3 = ((java$lang$Float.I$compare$F$F(var1,var2))) | 0;
    return var3;
  }

  F$floatValue$$() {
    // source file is Float.java
    var var0 = .0;
    // line number 55
    var0 = (this.value);
    return var0;
  }

  static I$compare$F$F(arg0,arg1) {
    // source file is Float.java
    var var0 = .0;
    var var1 = .0;
    var var2 = 0;
    var var3 = 0;
    var phi4 = .0;
    var phi5 = .0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var0 = arg1;
    // line number 195
    var1 = var0;
    var2 = (bytecoder.cmp(arg0,var1)) | 0;
    If_12_0: {
     if (var2 >= 0) {
      var7 = (bytecoder.cmp(arg0,var0)) | 0;
      if (var7 != 0) {
       phi4 = arg0;
       phi5 = var0;
       phi6 = (1) | 0;
       break If_12_0;
      } else {
       var8 = (0) | 0;
       // Here was a goto statement
       phi4 = arg0;
       phi5 = var0;
       phi6 = (var8) | 0;
       break If_12_0;
      }
     } else {
      var3 = (-1) | 0;
      // Here was a goto statement
      phi4 = arg0;
      phi5 = var0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    return phi6;
  }

  I$intValue$$() {
    // source file is Float.java
    var var0 = .0;
    var var1 = 0;
    // line number 45
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Float.java
    var var0 = .0;
    var var1 = null;
    // line number 65
    var0 = (this.value);
    java$lang$Float.$i;
    var1 = (java$lang$Float.Ljava$lang$String$$toString$F(var0));
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Float.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = .0;
    var var9 = .0;
    var var10 = 0;
    var var11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = 0;
    var0 = arg0;
    // line number 70
    var1 = var0;
    if (this != var1) {
     // line number 73
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 76
        var7 = var0;
        // line number 78
        var8 = (this.value);
        var9 = (java$lang$Float.prototype.F$floatValue$$.call(var7));
        var10 = (bytecoder.cmp(var8,var9)) | 0;
        If_54_0: {
         if (var10 != 0) {
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (0) | 0;
          break If_54_0;
         } else {
          var11 = (1) | 0;
          // Here was a goto statement
          phi12 = this;
          phi13 = var0;
          phi14 = var7;
          phi15 = (var11) | 0;
          break If_54_0;
         }
        }
        return phi15;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 74
     return 0;
    } else {
     // line number 71
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Float.java
    var var0 = .0;
    var var1 = 0;
    // line number 83
    var0 = (this.value);
    var1 = ((var0 | 0)) | 0;
    return var1;
  }
}


class java$lang$Integer extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Integer,[java$lang$Object,java$lang$Number,java$io$Serializable,java$lang$Integer,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Integer.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.int;
    java$lang$Integer.$i;
    java$lang$Integer.TYPE = var0;
    return;
  }

  static Ljava$lang$Integer$$valueOf$I(arg0) {
    // source file is Integer.java
    var var0 = null;
    var var1 = 0;
    // line number 118
    java$lang$Integer.$i;
    var0 = new java$lang$Integer();
    var1 = (arg0) | 0;
    java$lang$Integer.prototype.V$$init$$I.call(var0,var1);
    return var0;
  }

  V$$init$$I(arg0) {
    // source file is Integer.java
    var var0 = 0;
    var var1 = null;
    var0 = (arg0) | 0;
    // line number 31
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 32
    var1 = this;
    var1.value = var0;
    // line number 33
    return;
  }

  static Ljava$lang$String$$toString$I(arg0) {
    // source file is Integer.java
    var var0 = 0;
    var var1 = null;
    // line number 126
    var0 = (10) | 0;
    java$lang$Integer.$i;
    var1 = (java$lang$Integer.Ljava$lang$String$$toString$I$I(arg0,var0));
    return var1;
  }

  static Ljava$lang$String$$toString$I$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Integer'].Ljava$lang$String$$toString$I$I(arg0, arg1);
  }

  static I$numberOfLeadingZeros$I(arg0) {
    // source file is Integer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = 0;
    var phi6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var phi16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var phi21 = 0;
    var var22 = 0;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    // line number 84
    if (arg0 != 0) {
     // line number 86
     // line number 87
     var0 = (16) | 0;
     var1 = ((arg0 >>> var0)) | 0;
     If_23_0: {
      if (var1 != 0) {
       phi5 = (arg0) | 0;
       phi6 = (1) | 0;
       break If_23_0;
      } else {
       var2 = ((1 + 16)) | 0;
       var3 = (16) | 0;
       var4 = ((arg0 << var3)) | 0;
       phi5 = (var4) | 0;
       phi6 = (var2) | 0;
       break If_23_0;
      }
     }
     // line number 88
     var7 = (phi5) | 0;
     var8 = ((var7 >>> 24)) | 0;
     If_47_0: {
      if (var8 != 0) {
       phi11 = (phi5) | 0;
       break If_47_0;
      } else {
       phi6 = ((phi6 + 8)) | 0;
       var9 = (phi5) | 0;
       var10 = ((var9 << 8)) | 0;
       phi11 = (var10) | 0;
       break If_47_0;
      }
     }
     // line number 89
     var12 = (phi11) | 0;
     var13 = ((var12 >>> 28)) | 0;
     If_69_0: {
      if (var13 != 0) {
       phi16 = (phi11) | 0;
       break If_69_0;
      } else {
       phi6 = ((phi6 + 4)) | 0;
       var14 = (phi11) | 0;
       var15 = ((var14 << 4)) | 0;
       phi16 = (var15) | 0;
       break If_69_0;
      }
     }
     // line number 90
     var17 = (phi16) | 0;
     var18 = ((var17 >>> 30)) | 0;
     If_91_0: {
      if (var18 != 0) {
       phi21 = (phi16) | 0;
       break If_91_0;
      } else {
       phi6 = ((phi6 + 2)) | 0;
       var19 = (phi16) | 0;
       var20 = ((var19 << 2)) | 0;
       phi21 = (var20) | 0;
       break If_91_0;
      }
     }
     // line number 91
     var22 = (phi6) | 0;
     var23 = (phi21) | 0;
     var24 = ((var23 >>> 31)) | 0;
     var25 = ((var22 - var24)) | 0;
     // line number 92
     return var25;
    } else {
     // line number 85
     return 32;
    }
  }

  static I$signum$I(arg0) {
    // source file is Integer.java
    // line number 140
    if (arg0 >= 0) {
     // line number 143
     if (arg0 <= 0) {
      // line number 146
      return 0;
     } else {
      // line number 144
      return 1;
     }
    } else {
     // line number 141
     return -1;
    }
  }

  I$intValue$$() {
    // source file is Integer.java
    var var0 = 0;
    // line number 37
    var0 = ((this.value)) | 0;
    return var0;
  }

  static I$numberOfTrailingZeros$I(arg0) {
    // source file is Integer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    var phi8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = 0;
    var var22 = 0;
    var var23 = 0;
    var phi24 = 0;
    var phi25 = 0;
    var phi26 = 0;
    var var27 = 0;
    var var28 = 0;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = 0;
    var phi33 = 0;
    var phi34 = 0;
    var phi35 = 0;
    var var36 = 0;
    var var37 = 0;
    var var38 = 0;
    var var39 = 0;
    var var40 = 0;
    // line number 98
    if (arg0 != 0) {
     // line number 99
     // line number 100
     var1 = (16) | 0;
     var2 = ((arg0 << var1)) | 0;
     If_24_0: {
      if (var2 == 0) {
       phi6 = (arg0) | 0;
       phi7 = (var2) | 0;
       phi8 = (31) | 0;
       break If_24_0;
      } else {
       var3 = (31) | 0;
       var4 = ((var3 - 16)) | 0;
       var5 = (var2) | 0;
       phi6 = (var5) | 0;
       phi7 = (var2) | 0;
       phi8 = (var4) | 0;
       break If_24_0;
      }
     }
     // line number 101
     var9 = (phi6) | 0;
     var10 = ((var9 << 8)) | 0;
     var11 = (var10) | 0;
     If_49_0: {
      if (var11 == 0) {
       phi15 = (phi6) | 0;
       phi16 = (var10) | 0;
       phi17 = (phi8) | 0;
       break If_49_0;
      } else {
       var12 = (phi8) | 0;
       var13 = ((var12 - 8)) | 0;
       var14 = (var10) | 0;
       phi15 = (var14) | 0;
       phi16 = (var10) | 0;
       phi17 = (var13) | 0;
       break If_49_0;
      }
     }
     // line number 102
     var18 = (phi15) | 0;
     var19 = ((var18 << 4)) | 0;
     var20 = (var19) | 0;
     If_74_0: {
      if (var20 == 0) {
       phi24 = (phi15) | 0;
       phi25 = (var19) | 0;
       phi26 = (phi17) | 0;
       break If_74_0;
      } else {
       var21 = (phi17) | 0;
       var22 = ((var21 - 4)) | 0;
       var23 = (var19) | 0;
       phi24 = (var23) | 0;
       phi25 = (var19) | 0;
       phi26 = (var22) | 0;
       break If_74_0;
      }
     }
     // line number 103
     var27 = (phi24) | 0;
     var28 = ((var27 << 2)) | 0;
     var29 = (var28) | 0;
     If_99_0: {
      if (var29 == 0) {
       phi33 = (phi24) | 0;
       phi34 = (var28) | 0;
       phi35 = (phi26) | 0;
       break If_99_0;
      } else {
       var30 = (phi26) | 0;
       var31 = ((var30 - 2)) | 0;
       var32 = (var28) | 0;
       phi33 = (var32) | 0;
       phi34 = (var28) | 0;
       phi35 = (var31) | 0;
       break If_99_0;
      }
     }
     // line number 104
     var36 = (phi35) | 0;
     var37 = (phi33) | 0;
     var38 = ((var37 << 1)) | 0;
     var39 = ((var38 >>> 31)) | 0;
     var40 = ((var36 - var39)) | 0;
     return var40;
    } else {
     var0 = (32) | 0;
     return var0;
    }
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Integer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Integer.prototype.I$compareTo$Ljava$lang$Integer$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Integer$(arg0) {
    // source file is Integer.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = arg0;
    // line number 151
    var1 = ((this.value)) | 0;
    var2 = ((java$lang$Integer.prototype.I$intValue$$.call(var0))) | 0;
    java$lang$Integer.$i;
    var3 = ((java$lang$Integer.I$compare$I$I(var1,var2))) | 0;
    return var3;
  }

  static I$compare$I$I(arg0,arg1) {
    // source file is Integer.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var phi5 = 0;
    var var6 = 0;
    var0 = (arg1) | 0;
    // line number 155
    var1 = (var0) | 0;
    If_9_0: {
     if (arg0 >= var1) {
      if (arg0 != var0) {
       phi3 = (arg0) | 0;
       phi4 = (var0) | 0;
       phi5 = (1) | 0;
       break If_9_0;
      } else {
       var6 = (0) | 0;
       // Here was a goto statement
       phi3 = (arg0) | 0;
       phi4 = (var0) | 0;
       phi5 = (var6) | 0;
       break If_9_0;
      }
     } else {
      var2 = (-1) | 0;
      // Here was a goto statement
      phi3 = (arg0) | 0;
      phi4 = (var0) | 0;
      phi5 = (var2) | 0;
      break If_9_0;
     }
    }
    return phi5;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Integer.java
    var var0 = 0;
    var var1 = null;
    // line number 79
    var0 = ((this.value)) | 0;
    java$lang$Integer.$i;
    var1 = (java$lang$Integer.Ljava$lang$String$$toString$I$I(var0,10));
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Integer.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var0 = arg0;
    // line number 66
    var1 = var0;
    if (this != var1) {
     // line number 69
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 72
        var7 = var0;
        // line number 74
        var8 = ((this.value)) | 0;
        var9 = ((java$lang$Integer.prototype.I$intValue$$.call(var7))) | 0;
        If_51_0: {
         if (var8 != var9) {
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (0) | 0;
          break If_51_0;
         } else {
          var10 = (1) | 0;
          // Here was a goto statement
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (var10) | 0;
          break If_51_0;
         }
        }
        return phi14;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 70
     return 0;
    } else {
     // line number 67
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Integer.java
    var var0 = 0;
    // line number 57
    var0 = ((this.value)) | 0;
    return var0;
  }
}


class java$lang$Byte extends java$lang$Number {
  nativeObject = null;

  static TYPE = null;
  value = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$Byte,[java$lang$Byte,java$lang$Object,java$lang$Number,java$io$Serializable,java$lang$Comparable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Byte.java
    var var0 = null;
    // line number 26
    var0 = bytecoder.primitives.byte;
    java$lang$Byte.$i;
    java$lang$Byte.TYPE = var0;
    return;
  }

  static Ljava$lang$Byte$$valueOf$B(arg0) {
    // source file is Byte.java
    var var0 = null;
    var var1 = 0;
    // line number 79
    java$lang$Byte.$i;
    var0 = new java$lang$Byte();
    var1 = arg0;
    java$lang$Byte.prototype.V$$init$$B.call(var0,var1);
    return var0;
  }

  V$$init$$B(arg0) {
    // source file is Byte.java
    var var0 = 0;
    var var1 = null;
    var0 = arg0;
    // line number 31
    java$lang$Number.prototype.V$$init$$$.call(this);
    // line number 32
    var1 = this;
    var1.value = var0;
    // line number 33
    return;
  }

  static I$compare$B$B(arg0,arg1) {
    // source file is Byte.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var phi5 = 0;
    var var6 = 0;
    var0 = arg1;
    // line number 110
    var1 = var0;
    If_9_0: {
     if (arg0 >= var1) {
      if (arg0 != var0) {
       phi3 = arg0;
       phi4 = var0;
       phi5 = (1) | 0;
       break If_9_0;
      } else {
       var6 = (0) | 0;
       // Here was a goto statement
       phi3 = arg0;
       phi4 = var0;
       phi5 = (var6) | 0;
       break If_9_0;
      }
     } else {
      var2 = (-1) | 0;
      // Here was a goto statement
      phi3 = arg0;
      phi4 = var0;
      phi5 = (var2) | 0;
      break If_9_0;
     }
    }
    return phi5;
  }

  I$compareTo$Ljava$lang$Object$(arg0) {
    // source file is Byte.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    // line number 23
    var1 = var0;
    var2 = var1;
    var3 = ((java$lang$Byte.prototype.I$compareTo$Ljava$lang$Byte$.call(this,var2))) | 0;
    return var3;
  }

  I$compareTo$Ljava$lang$Byte$(arg0) {
    // source file is Byte.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var0 = arg0;
    // line number 106
    var1 = (this.value);
    var2 = (var0.B$byteValue$$());
    java$lang$Byte.$i;
    var3 = ((java$lang$Byte.I$compare$B$B(var1,var2))) | 0;
    return var3;
  }

  I$intValue$$() {
    // source file is Byte.java
    var var0 = 0;
    // line number 37
    var0 = (this.value);
    return var0;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Byte.java
    var var0 = 0;
    var var1 = null;
    // line number 75
    var0 = (this.value);
    java$lang$Byte.$i;
    var1 = (java$lang$Byte.Ljava$lang$String$$toString$B$I(var0,10));
    return var1;
  }

  static Ljava$lang$String$$toString$B$I(arg0,arg1) {
    return bytecoder.imports['java.lang.Byte'].Ljava$lang$String$$toString$B$I(arg0, arg1);
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Byte.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = 0;
    var0 = arg0;
    // line number 57
    var1 = var0;
    if (this != var1) {
     // line number 60
     If_18_0: {
      if (var0 == null) {
       phi5 = this;
       phi6 = var0;
       break If_18_0;
      } else {
       var2 = this;
       var3 = ((var2).constructor.$rt);
       var4 = ((var0).constructor.$rt);
       if (var3 == var4) {
        // line number 63
        var7 = var0;
        // line number 65
        var8 = (this.value);
        var9 = (var7.B$byteValue$$());
        If_51_0: {
         if (var8 != var9) {
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (0) | 0;
          break If_51_0;
         } else {
          var10 = (1) | 0;
          // Here was a goto statement
          phi11 = this;
          phi12 = var0;
          phi13 = var7;
          phi14 = (var10) | 0;
          break If_51_0;
         }
        }
        return phi14;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_18_0;
       }
      }
     }
     // line number 61
     return 0;
    } else {
     // line number 58
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Byte.java
    var var0 = 0;
    // line number 70
    var0 = (this.value);
    return var0;
  }
}


class java$util$ImmutableCollections$AbstractImmutableMap extends java$util$AbstractMap {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$AbstractImmutableMap,[java$util$ImmutableCollections$AbstractImmutableMap,java$lang$Object,java$util$AbstractMap,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ImmutableCollections.java
    // line number 1066
    java$util$AbstractMap.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$lang$Object$$put$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 1072
    java$util$ImmutableCollections.$i;
    var1 = (java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$());
    throw bytecoder.registerStack(var1, new Error().stack);
  }

  Ljava$lang$Object$$computeIfAbsent$Ljava$lang$Object$$Ljava$util$function$Function$(arg0,arg1) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 1069
    java$util$ImmutableCollections.$i;
    var1 = (java$util$ImmutableCollections.Ljava$lang$UnsupportedOperationException$$uoe$$());
    throw bytecoder.registerStack(var1, new Error().stack);
  }
}


class java$util$Collections$EmptyListIterator extends java$util$Collections$EmptyIterator {
  nativeObject = null;

  static EMPTY_ITERATOR = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$EmptyListIterator,[java$util$Collections$EmptyIterator,java$util$Collections$EmptyListIterator,java$lang$Object,java$util$Iterator,java$util$ListIterator]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      java$util$Collections$EmptyIterator.$i;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4355
    java$util$Collections$EmptyListIterator.$i;
    var0 = new java$util$Collections$EmptyListIterator();
    java$util$Collections$EmptyListIterator.prototype.V$$init$$$.call(var0);
    java$util$Collections$EmptyListIterator.EMPTY_ITERATOR = var0;
    return;
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 4351
    java$util$Collections$EmptyIterator.prototype.V$$init$$$.call(this);
    return;
  }

  I$previousIndex$$() {
    // source file is Collections.java
    // line number 4361
    return -1;
  }
}


class java$lang$ClassCastException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ClassCastException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException,java$lang$ClassCastException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is ClassCastException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 57
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 58
    return;
  }

  V$$init$$$() {
    // source file is ClassCastException.java
    // line number 47
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 48
    return;
  }
}


class java$lang$IllegalStateException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$IllegalStateException,[java$lang$Exception,java$lang$IllegalStateException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is IllegalStateException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 54
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 55
    return;
  }

  V$$init$$$() {
    // source file is IllegalStateException.java
    // line number 43
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 44
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is IllegalStateException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 92
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 93
    return;
  }
}


class sun$nio$cs$StreamEncoder extends java$io$Writer {
  nativeObject = null;

  static $assertionsDisabled = false;
  haveLeftoverChar = false;
  lcb = null;
  out = null;
  ch = null;
  cs = null;
  encoder = null;
  bb = null;
  maxBufferCapacity = 0;
  closed = false;
  leftoverChar = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(sun$nio$cs$StreamEncoder,[sun$nio$cs$StreamEncoder,java$lang$Object,java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.V$write$$C$I$I = impl;
  }

  static V$$clinit$$$() {
    // source file is StreamEncoder.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 43
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(sun$nio$cs$StreamEncoder.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    sun$nio$cs$StreamEncoder.$i;
    sun$nio$cs$StreamEncoder.$assertionsDisabled = phi2;
    return;
  }

  static Lsun$nio$cs$StreamEncoder$$forOutputStreamWriter$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg1;
    // line number 76
    sun$nio$cs$StreamEncoder.$i;
    var1 = new sun$nio$cs$StreamEncoder();
    var2 = arg0;
    var3 = arg2;
    sun$nio$cs$StreamEncoder.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$.call(var1,var2,var0,var3);
    return var1;
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 269
    var2 = var0;
    var3 = var1;
    // line number 270
    var4 = (var3.Ljava$nio$charset$CharsetEncoder$$newEncoder$$());
    java$nio$charset$CodingErrorAction.$i;
    var5 = (java$nio$charset$CodingErrorAction.REPLACE);
    // line number 271
    var6 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$onMalformedInput$Ljava$nio$charset$CodingErrorAction$.call(var4,var5));
    var7 = (java$nio$charset$CodingErrorAction.REPLACE);
    // line number 272
    var8 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CharsetEncoder$$onUnmappableCharacter$Ljava$nio$charset$CodingErrorAction$.call(var6,var7));
    // line number 269
    sun$nio$cs$StreamEncoder.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$CharsetEncoder$.call(this,var2,arg1,var8);
    // line number 273
    return;
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$CharsetEncoder$(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var0 = arg0;
    var1 = arg2;
    // line number 276
    var2 = arg1;
    java$io$Writer.prototype.V$$init$$Ljava$lang$Object$.call(this,var2);
    // line number 264
    var3 = this;
    var3.haveLeftoverChar = 0;
    // line number 266
    var4 = this;
    var4.lcb = null;
    // line number 277
    var5 = this;
    var5.out = var0;
    // line number 278
    var6 = this;
    var6.ch = null;
    // line number 279
    var7 = this;
    var8 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$Charset$$charset$$.call(var1));
    var7.cs = var8;
    // line number 280
    var9 = this;
    var9.encoder = var1;
    // line number 282
    var10 = this;
    java$nio$ByteBuffer.$i;
    var11 = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$allocate$I(512));
    var10.bb = var11;
    // line number 283
    var12 = this;
    var12.maxBufferCapacity = 8192;
    // line number 284
    return;
  }

  V$flushBuffer$$() {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    // line number 110
    var0 = (this.lock);
    // line number 111
    var1 = (bytecoder.instanceOf(var0,jdk$internal$misc$InternalLock)) | 0;
    If_13_0: {
     if (var1 == 0) {
      // line number 119
      var10 = var0;
      // Monitor enter on var0
      phi11 = this;
      phi12 = var0;
      phi13 = var10;
      TryCatch_66_0: {
       try {
        // line number 120
        var15 = phi11;
        sun$nio$cs$StreamEncoder.prototype.V$lockedFlushBuffer$$.call(var15);
        // line number 121
        var16 = phi13;
        // Monitor exit on var16
        break TryCatch_66_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_67_0: {
          var14 = phi13;
          // Monitor exit on var14
          break TryCatch_67_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi4 = phi11;
      phi5 = phi12;
      break If_13_0;
     } else {
      var2 = var0;
      var3 = var2;
      // line number 112
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var3);
      phi4 = this;
      phi5 = var0;
      phi6 = var3;
      TryCatch_27_0: {
       try {
        // line number 114
        var8 = phi4;
        sun$nio$cs$StreamEncoder.prototype.V$lockedFlushBuffer$$.call(var8);
        break TryCatch_27_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         // line number 116
         var7 = phi6;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var7);
         // line number 117
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 116
      var9 = phi6;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var9);
      // line number 117
      // Here was a goto statement
      // Here was a goto statement
      break If_13_0;
     }
    }
    // line number 123
    return;
  }

  V$lockedFlushBuffer$$() {
    // source file is StreamEncoder.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    // line number 126
    var0 = (sun$nio$cs$StreamEncoder.prototype.Z$isOpen$$.call(this));
    if (var0 == 0) {
     // line number 129
     var1 = new java$io$IOException();
     var2 = bytecoder.stringconstants[47];
     java$io$IOException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    } else {
     // line number 127
     sun$nio$cs$StreamEncoder.prototype.V$implFlushBuffer$$.call(this);
     // Here was a goto statement
     // line number 130
     return;
    }
  }

  Z$isOpen$$() {
    // source file is StreamEncoder.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 248
    var0 = (this.closed);
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }

  V$implFlushBuffer$$() {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    // line number 408
    var0 = (this.bb);
    var1 = ((var0.I$position$$())) | 0;
    If_10_0: {
     if (var1 <= 0) {
      phi2 = this;
      break If_10_0;
     } else {
      // line number 409
      sun$nio$cs$StreamEncoder.prototype.V$writeBytes$$.call(this);
      phi2 = this;
      break If_10_0;
     }
    }
    // line number 411
    return;
  }

  V$writeBytes$$() {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var phi9 = null;
    var phi10 = 0;
    var phi11 = 0;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var phi17 = 0;
    var var18 = 0;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = 0;
    var var26 = 0;
    var var27 = 0;
    var var28 = null;
    var var29 = 0;
    var phi30 = 0;
    var phi31 = 0;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = 0;
    var var43 = 0;
    var var44 = 0;
    // line number 302
    var0 = (this.bb);
    var1 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$flip$$.call(var0));
    // line number 303
    var2 = (this.bb);
    var3 = ((var2.I$limit$$())) | 0;
    // line number 304
    var4 = (this.bb);
    var5 = ((var4.I$position$$())) | 0;
    // line number 305
    sun$nio$cs$StreamEncoder.$i;
    var6 = (sun$nio$cs$StreamEncoder.$assertionsDisabled);
    If_33_0: {
     if (var6 != 0) {
      phi9 = this;
      phi10 = (var3) | 0;
      phi11 = (var5) | 0;
      break If_33_0;
     } else {
      var7 = (var5) | 0;
      if (var7 <= var3) {
       phi9 = this;
       phi10 = (var3) | 0;
       phi11 = (var5) | 0;
       break If_33_0;
      } else {
       var8 = new java$lang$AssertionError();
       java$lang$AssertionError.prototype.V$$init$$$.call(var8);
       throw bytecoder.registerStack(var8, new Error().stack);
      }
     }
    }
    // line number 306
    var12 = (phi11) | 0;
    var13 = (phi10) | 0;
    If_57_0: {
     if (var12 > var13) {
      phi17 = (0) | 0;
      break If_57_0;
     } else {
      var14 = (phi10) | 0;
      var15 = (phi11) | 0;
      var16 = ((var14 - var15)) | 0;
      // Here was a goto statement
      phi17 = (var16) | 0;
      break If_57_0;
     }
    }
    var18 = (phi17) | 0;
    // line number 308
    If_74_0: {
     if (var18 <= 0) {
      phi30 = (var18) | 0;
      break If_74_0;
     } else {
      // line number 309
      var19 = phi9;
      var20 = (var19.ch);
      if (var20 == null) {
       // line number 313
       var35 = phi9;
       var36 = (var35.out);
       var37 = phi9;
       var38 = (var37.bb);
       var39 = (java$nio$ByteBuffer.prototype.$B$array$$.call(var38));
       var40 = phi9;
       var41 = (var40.bb);
       var42 = ((java$nio$ByteBuffer.prototype.I$arrayOffset$$.call(var41))) | 0;
       var43 = (phi11) | 0;
       var44 = ((var42 + var43)) | 0;
       var36.V$write$$B$I$I(var39,var44,var18);
       phi30 = (var18) | 0;
       break If_74_0;
      } else {
       // line number 310
       var21 = phi9;
       var22 = (var21.ch);
       var23 = phi9;
       var24 = (var23.bb);
       var25 = ((var22.I$write$Ljava$nio$ByteBuffer$(var24))) | 0;
       // line number 311
       var26 = (sun$nio$cs$StreamEncoder.$assertionsDisabled);
       If_107_0: {
        if (var26 != 0) {
         phi30 = (var18) | 0;
         phi31 = (var25) | 0;
         break If_107_0;
        } else {
         var27 = (var25) | 0;
         if (var27 == var18) {
          phi30 = (var18) | 0;
          phi31 = (var25) | 0;
          break If_107_0;
         } else {
          var28 = new java$lang$AssertionError();
          var29 = (var18) | 0;
          java$lang$AssertionError.prototype.V$$init$$I.call(var28,var29);
          throw bytecoder.registerStack(var28, new Error().stack);
         }
        }
       }
       // line number 312
       // Here was a goto statement
       break If_74_0;
      }
     }
    }
    // line number 316
    var32 = phi9;
    var33 = (var32.bb);
    var34 = (java$nio$ByteBuffer.prototype.Ljava$nio$ByteBuffer$$clear$$.call(var33));
    // line number 317
    return;
  }

  V$write$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 167
    if (var1 >= 0) {
     // line number 169
     var3 = bytecoder.newarray((var1),0);
     // line number 170
     var4 = (arg1) | 0;
     var5 = ((var4 + var1)) | 0;
     java$lang$String.prototype.V$getChars$I$I$$C$I.call(var0,arg1,var5,var3,0);
     // line number 171
     var6 = var3;
     var7 = (var1) | 0;
     sun$nio$cs$StreamEncoder.prototype.V$write$$C$I$I.call(this,var6,0,var7);
     // line number 172
     return;
    } else {
     // line number 168
     var2 = new java$lang$IndexOutOfBoundsException();
     java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var2);
     throw bytecoder.registerStack(var2, new Error().stack);
    }
  }

  V$write$$C$I$I(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = null;
    var phi24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 139
    var2 = (this.lock);
    // line number 140
    var3 = (bytecoder.instanceOf(var2,jdk$internal$misc$InternalLock)) | 0;
    If_20_0: {
     if (var3 == 0) {
      // line number 148
      var18 = var2;
      // Monitor enter on var2
      phi19 = this;
      phi20 = var0;
      phi21 = (arg1) | 0;
      phi22 = (var1) | 0;
      phi23 = var2;
      phi24 = var18;
      TryCatch_86_0: {
       try {
        // line number 149
        var26 = phi19;
        var27 = phi20;
        var28 = (phi21) | 0;
        var29 = (phi22) | 0;
        sun$nio$cs$StreamEncoder.prototype.V$lockedWrite$$C$I$I.call(var26,var27,var28,var29);
        // line number 150
        var30 = phi24;
        // Monitor exit on var30
        break TryCatch_86_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_87_0: {
          var25 = phi24;
          // Monitor exit on var25
          break TryCatch_87_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi6 = phi19;
      phi7 = phi20;
      phi8 = (phi21) | 0;
      phi9 = (phi22) | 0;
      phi10 = phi23;
      break If_20_0;
     } else {
      var4 = var2;
      var5 = var4;
      // line number 141
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var5);
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      phi10 = var2;
      phi11 = var5;
      TryCatch_37_0: {
       try {
        // line number 143
        var13 = phi6;
        var14 = phi7;
        var15 = (phi8) | 0;
        var16 = (phi9) | 0;
        sun$nio$cs$StreamEncoder.prototype.V$lockedWrite$$C$I$I.call(var13,var14,var15,var16);
        break TryCatch_37_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_38_0: {
          // line number 145
          break TryCatch_38_0;
         }
         var12 = phi11;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var12);
         // line number 146
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 145
      var17 = phi11;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var17);
      // line number 146
      // Here was a goto statement
      // Here was a goto statement
      break If_20_0;
     }
    }
    // line number 152
    return;
  }

  V$lockedWrite$$C$I$I(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 155
    sun$nio$cs$StreamEncoder.prototype.V$ensureOpen$$.call(this);
    // line number 156
    If_14_0: {
     if (arg1 < 0) {
      phi10 = this;
      phi11 = var0;
      phi12 = (arg1) | 0;
      phi13 = (var1) | 0;
      break If_14_0;
     } else {
      var2 = (arg1) | 0;
      var3 = (var0.data.length) | 0;
      if (var2 > var3) {
       phi10 = this;
       phi11 = var0;
       phi12 = (arg1) | 0;
       phi13 = (var1) | 0;
       break If_14_0;
      } else {
       var4 = (var1) | 0;
       if (var4 < 0) {
        phi10 = this;
        phi11 = var0;
        phi12 = (arg1) | 0;
        phi13 = (var1) | 0;
        break If_14_0;
       } else {
        var5 = (arg1) | 0;
        var6 = ((var5 + var1)) | 0;
        var7 = (var0.data.length) | 0;
        if (var6 > var7) {
         phi10 = this;
         phi11 = var0;
         phi12 = (arg1) | 0;
         phi13 = (var1) | 0;
         break If_14_0;
        } else {
         var8 = (arg1) | 0;
         var9 = ((var8 + var1)) | 0;
         if (var9 >= 0) {
          // line number 159
          if (var1 != 0) {
           // line number 162
           var15 = var0;
           var16 = (var1) | 0;
           sun$nio$cs$StreamEncoder.prototype.V$implWrite$$C$I$I.call(this,var15,arg1,var16);
           // line number 163
           return;
          } else {
           // line number 160
           return;
          }
         } else {
          phi10 = this;
          phi11 = var0;
          phi12 = (arg1) | 0;
          phi13 = (var1) | 0;
          break If_14_0;
         }
        }
       }
      }
     }
    }
    // line number 158
    var14 = new java$lang$IndexOutOfBoundsException();
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(var14);
    throw bytecoder.registerStack(var14, new Error().stack);
  }

  V$ensureOpen$$() {
    // source file is StreamEncoder.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    // line number 51
    var0 = (this.closed);
    if (var0 == 0) {
     // line number 53
     return;
    } else {
     // line number 52
     var1 = new java$io$IOException();
     var2 = bytecoder.stringconstants[47];
     java$io$IOException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$implWrite$$C$I$I(arg0,arg1,arg2) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 360
    var2 = (arg1) | 0;
    java$nio$CharBuffer.$i;
    var3 = (java$nio$CharBuffer.Ljava$nio$CharBuffer$$wrap$$C$I$I(var0,var2,var1));
    // line number 361
    var4 = var3;
    sun$nio$cs$StreamEncoder.prototype.V$implWrite$Ljava$nio$CharBuffer$.call(this,var4);
    // line number 362
    return;
  }

  V$implWrite$Ljava$nio$CharBuffer$(arg0) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = 0;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var var22 = 0;
    var phi23 = null;
    var var24 = null;
    var var25 = 0;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var var30 = 0;
    var var31 = 0;
    var var32 = null;
    var var33 = null;
    var var34 = 0;
    var var35 = null;
    var phi36 = null;
    var var37 = null;
    var0 = arg0;
    // line number 367
    var1 = (this.haveLeftoverChar);
    If_10_0: {
     if (var1 == 0) {
      phi3 = this;
      phi4 = var0;
      break If_10_0;
     } else {
      // line number 368
      var2 = (0) | 0;
      sun$nio$cs$StreamEncoder.prototype.V$flushLeftoverChar$Ljava$nio$CharBuffer$$Z.call(this,var0,var2);
      phi3 = this;
      phi4 = var0;
      break If_10_0;
     }
    }
    // line number 371
    var5 = phi3;
    var6 = phi4;
    var7 = ((var6.I$remaining$$())) | 0;
    sun$nio$cs$StreamEncoder.prototype.V$growByteBufferIfNeeded$I.call(var5,var7);
    L30600223: while(true) {
     // line number 373
     var8 = phi4;
     var9 = (var8.Z$hasRemaining$$());
     If_40_0: {
      if (var9 == 0) {
       break If_40_0;
      } else {
       // line number 374
       var10 = phi3;
       var11 = (var10.encoder);
       var12 = phi4;
       var13 = phi3;
       var14 = (var13.bb);
       var15 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CoderResult$$encode$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$$Z.call(var11,var12,var14,0));
       // line number 375
       var16 = (java$nio$charset$CoderResult.prototype.Z$isUnderflow$$.call(var15));
       if (var16 == 0) {
        // line number 383
        var30 = (java$nio$charset$CoderResult.prototype.Z$isOverflow$$.call(var15));
        if (var30 == 0) {
         // line number 388
         java$nio$charset$CoderResult.prototype.V$throwException$$.call(var15);
         // line number 389
         // Here was a goto statement
         continue L30600223;
        } else {
         // line number 384
         sun$nio$cs$StreamEncoder.$i;
         var31 = (sun$nio$cs$StreamEncoder.$assertionsDisabled);
         If_147_0: {
          if (var31 != 0) {
           phi36 = var15;
           break If_147_0;
          } else {
           var32 = phi3;
           var33 = (var32.bb);
           var34 = ((var33.I$position$$())) | 0;
           if (var34 > 0) {
            phi36 = var15;
            break If_147_0;
           } else {
            var35 = new java$lang$AssertionError();
            java$lang$AssertionError.prototype.V$$init$$$.call(var35);
            throw bytecoder.registerStack(var35, new Error().stack);
           }
          }
         }
         // line number 385
         var37 = phi3;
         sun$nio$cs$StreamEncoder.prototype.V$writeBytes$$.call(var37);
         // line number 386
         // Here was a goto statement
         continue L30600223;
        }
       } else {
        // line number 376
        sun$nio$cs$StreamEncoder.$i;
        var17 = (sun$nio$cs$StreamEncoder.$assertionsDisabled);
        If_76_0: {
         if (var17 != 0) {
          phi23 = var15;
          break If_76_0;
         } else {
          var18 = phi4;
          var19 = ((var18.I$remaining$$())) | 0;
          if (var19 <= 1) {
           phi23 = var15;
           break If_76_0;
          } else {
           var20 = new java$lang$AssertionError();
           var21 = phi4;
           var22 = ((var21.I$remaining$$())) | 0;
           java$lang$AssertionError.prototype.V$$init$$I.call(var20,var22);
           throw bytecoder.registerStack(var20, new Error().stack);
          }
         }
        }
        // line number 377
        var24 = phi4;
        var25 = ((var24.I$remaining$$())) | 0;
        if (var25 != 1) {
         break If_40_0;
        } else {
         // line number 378
         var26 = phi3;
         var26.haveLeftoverChar = 1;
         // line number 379
         var27 = phi3;
         var28 = phi4;
         var29 = (var28.C$get$$());
         var27.leftoverChar = var29;
         // Here was a goto statement
         break If_40_0;
        }
       }
      }
     }
     // line number 390
     return;
    }
  }

  V$flushLeftoverChar$Ljava$nio$CharBuffer$$Z(arg0,arg1) {
    // source file is StreamEncoder.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = 0;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = 0;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = 0;
    var var31 = 0;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = 0;
    var var39 = null;
    var var40 = 0;
    var var41 = null;
    var var42 = null;
    var var43 = 0;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = 0;
    var var48 = null;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = 0;
    var var58 = null;
    var var59 = null;
    var var60 = 0;
    var var61 = null;
    var var62 = null;
    var phi63 = null;
    var phi64 = null;
    var var65 = null;
    var var66 = 0;
    var var67 = 0;
    var var68 = null;
    var var69 = null;
    var var70 = 0;
    var var71 = null;
    var phi72 = null;
    var var73 = null;
    var var74 = null;
    var var75 = null;
    var var76 = null;
    var0 = arg0;
    // line number 322
    var1 = (this.haveLeftoverChar);
    If_11_0: {
     if (var1 != 0) {
      phi3 = this;
      phi4 = var0;
      phi5 = arg1;
      break If_11_0;
     } else {
      var2 = arg1;
      if (var2 != 0) {
       phi3 = this;
       phi4 = var0;
       phi5 = arg1;
       break If_11_0;
      } else {
       // line number 323
       return;
      }
     }
    }
    // line number 324
    var6 = phi3;
    var7 = (var6.lcb);
    If_33_0: {
     if (var7 != null) {
      // line number 327
      var74 = phi3;
      var75 = (var74.lcb);
      var76 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$clear$$.call(var75));
      break If_33_0;
     } else {
      // line number 325
      var8 = phi3;
      java$nio$CharBuffer.$i;
      var9 = (java$nio$CharBuffer.Ljava$nio$CharBuffer$$allocate$I(2));
      var8.lcb = var9;
      // Here was a goto statement
      break If_33_0;
     }
    }
    // line number 328
    var10 = phi3;
    var11 = (var10.haveLeftoverChar);
    If_55_0: {
     if (var11 == 0) {
      break If_55_0;
     } else {
      // line number 329
      var12 = phi3;
      var13 = (var12.lcb);
      var14 = phi3;
      var15 = (var14.leftoverChar);
      var16 = (var13.Ljava$nio$CharBuffer$$put$C(var15));
      break If_55_0;
     }
    }
    // line number 330
    var17 = phi4;
    If_78_0: {
     if (var17 == null) {
      break If_78_0;
     } else {
      var18 = phi4;
      var19 = (var18.Z$hasRemaining$$());
      if (var19 == 0) {
       break If_78_0;
      } else {
       // line number 331
       var20 = phi3;
       var21 = (var20.lcb);
       var22 = phi4;
       var23 = (var22.C$get$$());
       var24 = (var21.Ljava$nio$CharBuffer$$put$C(var23));
       break If_78_0;
      }
     }
    }
    // line number 332
    var25 = phi3;
    var26 = (var25.lcb);
    var27 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$flip$$.call(var26));
    L372034841: while(true) {
     // line number 333
     var28 = phi3;
     var29 = (var28.lcb);
     var30 = (var29.Z$hasRemaining$$());
     If_125_0: {
      If_125_1: {
       if (var30 != 0) {
        break If_125_1;
       } else {
        var31 = phi5;
        if (var31 == 0) {
         break If_125_0;
        } else {
         break If_125_1;
        }
       }
      }
      // line number 334
      var32 = phi3;
      var33 = (var32.encoder);
      var34 = phi3;
      var35 = (var34.lcb);
      var36 = phi3;
      var37 = (var36.bb);
      var38 = phi5;
      var39 = (java$nio$charset$CharsetEncoder.prototype.Ljava$nio$charset$CoderResult$$encode$Ljava$nio$CharBuffer$$Ljava$nio$ByteBuffer$$Z.call(var33,var35,var37,var38));
      // line number 335
      var40 = (java$nio$charset$CoderResult.prototype.Z$isUnderflow$$.call(var39));
      if (var40 == 0) {
       // line number 347
       var66 = (java$nio$charset$CoderResult.prototype.Z$isOverflow$$.call(var39));
       if (var66 == 0) {
        // line number 352
        java$nio$charset$CoderResult.prototype.V$throwException$$.call(var39);
        // line number 353
        // Here was a goto statement
        continue L372034841;
       } else {
        // line number 348
        sun$nio$cs$StreamEncoder.$i;
        var67 = (sun$nio$cs$StreamEncoder.$assertionsDisabled);
        If_275_0: {
         if (var67 != 0) {
          phi72 = var39;
          break If_275_0;
         } else {
          var68 = phi3;
          var69 = (var68.bb);
          var70 = ((var69.I$position$$())) | 0;
          if (var70 > 0) {
           phi72 = var39;
           break If_275_0;
          } else {
           var71 = new java$lang$AssertionError();
           java$lang$AssertionError.prototype.V$$init$$$.call(var71);
           throw bytecoder.registerStack(var71, new Error().stack);
          }
         }
        }
        // line number 349
        var73 = phi3;
        sun$nio$cs$StreamEncoder.prototype.V$writeBytes$$.call(var73);
        // line number 350
        // Here was a goto statement
        continue L372034841;
       }
      } else {
       // line number 336
       var41 = phi3;
       var42 = (var41.lcb);
       var43 = (var42.Z$hasRemaining$$());
       if (var43 == 0) {
        phi64 = var39;
        break If_125_0;
       } else {
        // line number 337
        var44 = phi3;
        var45 = phi3;
        var46 = (var45.lcb);
        var47 = (var46.C$get$$());
        var44.leftoverChar = var47;
        // line number 338
        var48 = phi4;
        If_194_0: {
         if (var48 == null) {
          phi63 = var39;
          break If_194_0;
         } else {
          var49 = phi4;
          var50 = (var49.Z$hasRemaining$$());
          if (var50 == 0) {
           phi63 = var39;
           break If_194_0;
          } else {
           // line number 339
           var51 = phi3;
           var52 = (var51.lcb);
           var53 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$clear$$.call(var52));
           // line number 340
           var54 = phi3;
           var55 = (var54.lcb);
           var56 = phi3;
           var57 = (var56.leftoverChar);
           var58 = (var55.Ljava$nio$CharBuffer$$put$C(var57));
           var59 = phi4;
           var60 = (var59.C$get$$());
           var61 = (var58.Ljava$nio$CharBuffer$$put$C(var60));
           var62 = (java$nio$CharBuffer.prototype.Ljava$nio$CharBuffer$$flip$$.call(var61));
           // line number 341
           // Here was a goto statement
           continue L372034841;
          }
         }
        }
        // line number 343
        return;
       }
      }
     }
     // line number 354
     var65 = phi3;
     var65.haveLeftoverChar = 0;
     // line number 355
     return;
    }
  }

  V$growByteBufferIfNeeded$I(arg0) {
    // source file is StreamEncoder.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = .0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = 0;
    var var11 = null;
    var var12 = null;
    var phi13 = null;
    var phi14 = 0;
    var phi15 = 0;
    var phi16 = 0;
    var phi17 = 0;
    var0 = (arg0) | 0;
    // line number 396
    var1 = (this.bb);
    var2 = ((var1.I$capacity$$())) | 0;
    // line number 397
    var3 = ((this.maxBufferCapacity)) | 0;
    If_18_0: {
     if (var2 >= var3) {
      phi13 = this;
      phi14 = (var0) | 0;
      phi15 = (var2) | 0;
      break If_18_0;
     } else {
      // line number 398
      var4 = (this.encoder);
      var5 = (java$nio$charset$CharsetEncoder.prototype.F$maxBytesPerChar$$.call(var4));
      java$lang$Math.$i;
      var6 = ((java$lang$Math.I$round$F(var5))) | 0;
      var7 = ((var0 * var6)) | 0;
      // line number 399
      var8 = ((this.maxBufferCapacity)) | 0;
      var9 = ((java$lang$Math.I$min$I$I(var7,var8))) | 0;
      // line number 400
      var10 = (var2) | 0;
      if (var9 <= var10) {
       phi13 = this;
       phi14 = (var0) | 0;
       phi15 = (var2) | 0;
       phi16 = (var7) | 0;
       phi17 = (var9) | 0;
       break If_18_0;
      } else {
       // line number 401
       sun$nio$cs$StreamEncoder.prototype.V$implFlushBuffer$$.call(this);
       // line number 402
       var11 = this;
       java$nio$ByteBuffer.$i;
       var12 = (java$nio$ByteBuffer.Ljava$nio$ByteBuffer$$allocate$I(var9));
       var11.bb = var12;
       phi13 = this;
       phi14 = (var0) | 0;
       phi15 = (var2) | 0;
       phi16 = (var7) | 0;
       phi17 = (var9) | 0;
       break If_18_0;
      }
     }
    }
    // line number 405
    return;
  }
}


class java$io$InterruptedIOException extends java$io$IOException {
  nativeObject = null;

  bytesTransferred = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$InterruptedIOException,[java$io$IOException,java$lang$Exception,java$lang$Throwable,java$lang$Object,java$io$InterruptedIOException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is InterruptedIOException.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 63
    var1 = var0;
    java$io$IOException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 72
    var2 = this;
    var2.bytesTransferred = 0;
    // line number 64
    return;
  }

  V$$init$$$() {
    // source file is InterruptedIOException.java
    var var0 = null;
    // line number 50
    java$io$IOException.prototype.V$$init$$$.call(this);
    // line number 72
    var0 = this;
    var0.bytesTransferred = 0;
    // line number 51
    return;
  }
}


class java$util$Collections$SynchronizedSet extends java$util$Collections$SynchronizedCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$SynchronizedSet,[java$util$Collections$SynchronizedSet,java$lang$Iterable,java$util$Collections$SynchronizedCollection,java$lang$Object,java$util$Set,java$io$Serializable,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Set$$Ljava$lang$Object$(arg0,arg1) {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 2204
    var1 = var0;
    java$util$Collections$SynchronizedCollection.prototype.V$$init$$Ljava$util$Collection$$Ljava$lang$Object$.call(this,var1,arg1);
    // line number 2205
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var0 = arg0;
    // line number 2208
    var1 = var0;
    if (this != var1) {
     // line number 2210
     var2 = (this.mutex);
     var3 = var2;
     // Monitor enter on var2
     phi4 = this;
     phi5 = var0;
     phi6 = var3;
     TryCatch_27_0: {
      try {
       var8 = phi4;
       var9 = (var8.c);
       var10 = phi5;
       var11 = (var9.Z$equals$Ljava$lang$Object$(var10));
       var12 = phi6;
       // Monitor exit on var12
       break TryCatch_27_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$Throwable) {
        TryCatch_28_0: {
         var7 = phi6;
         // Monitor exit on var7
         break TryCatch_28_0;
        }
        throw bytecoder.registerStack(__ex, new Error().stack);
       }
       throw __ex;
      }
     }
     return var11;
    } else {
     // line number 2209
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is Collections.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    // line number 2213
    var0 = (this.mutex);
    var1 = var0;
    // Monitor enter on var0
    phi2 = this;
    phi3 = var1;
    TryCatch_12_0: {
     try {
      var5 = phi2;
      var6 = (var5.c);
      var7 = ((var6.I$hashCode$$())) | 0;
      var8 = phi3;
      // Monitor exit on var8
      break TryCatch_12_0;
     } catch (__ex) {
      if (__ex instanceof java$lang$Throwable) {
       TryCatch_13_0: {
        var4 = phi3;
        // Monitor exit on var4
        break TryCatch_13_0;
       }
       throw bytecoder.registerStack(__ex, new Error().stack);
      }
      throw __ex;
     }
    }
    return var7;
  }
}


class java$io$FilterOutputStream extends java$io$OutputStream {
  nativeObject = null;

  closeLock = null;
  out = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$FilterOutputStream,[java$lang$Object,java$io$OutputStream,java$io$Flushable,java$io$Closeable,java$lang$AutoCloseable,java$io$FilterOutputStream]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$I = impl;
  }

  V$$init$$Ljava$io$OutputStream$(arg0) {
    // source file is FilterOutputStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 69
    java$io$OutputStream.prototype.V$$init$$$.call(this);
    // line number 58
    var1 = this;
    var2 = new java$lang$Object();
    java$lang$Object.prototype.V$$init$$$.call(var2);
    var1.closeLock = var2;
    // line number 70
    var3 = this;
    var3.out = var0;
    // line number 71
    return;
  }
}


class java$util$Properties$EntrySet extends java$lang$Object {
  nativeObject = null;

  entrySet = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Properties$EntrySet,[java$lang$Iterable,java$util$Properties$EntrySet,java$lang$Object,java$util$Set,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$Set$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 1386
    java$lang$Object.prototype.V$$init$$$.call(this);
    // line number 1387
    var1 = this;
    var1.entrySet = var0;
    // line number 1388
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    // line number 1440
    var0 = (this.entrySet);
    var1 = (var0.Ljava$util$Iterator$$iterator$$());
    return var1;
  }

  I$size$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1390
    var0 = (this.entrySet);
    var1 = ((var0.I$size$$())) | 0;
    return var1;
  }

  Z$isEmpty$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1391
    var0 = (this.entrySet);
    var1 = (var0.Z$isEmpty$$());
    return var1;
  }

  Ljava$lang$String$$toString$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    // line number 1425
    var0 = (this.entrySet);
    var1 = (var0.Ljava$lang$String$$toString$$());
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Properties.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var phi5 = null;
    var phi6 = null;
    var phi7 = 0;
    var0 = arg0;
    // line number 1415
    var1 = this;
    If_9_0: {
     If_9_1: {
      if (var0 == var1) {
       phi5 = this;
       phi6 = var0;
       break If_9_1;
      } else {
       var2 = this;
       var3 = (var2.entrySet);
       var4 = (var3.Z$equals$Ljava$lang$Object$(var0));
       if (var4 == 0) {
        phi5 = this;
        phi6 = var0;
        phi7 = (0) | 0;
        break If_9_0;
       } else {
        phi5 = this;
        phi6 = var0;
        break If_9_1;
       }
      }
     }
     // Here was a goto statement
     phi7 = (1) | 0;
     break If_9_0;
    }
    return phi7;
  }

  I$hashCode$$() {
    // source file is Properties.java
    var var0 = null;
    var var1 = 0;
    // line number 1420
    var0 = (this.entrySet);
    var1 = ((var0.I$hashCode$$())) | 0;
    return var1;
  }
}


class java$lang$IndexOutOfBoundsException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$IndexOutOfBoundsException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException,java$lang$IndexOutOfBoundsException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is IndexOutOfBoundsException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 55
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 56
    return;
  }

  V$$init$$$() {
    // source file is IndexOutOfBoundsException.java
    // line number 45
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 46
    return;
  }
}


class java$util$NoSuchElementException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$NoSuchElementException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException,java$util$NoSuchElementException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is NoSuchElementException.java
    // line number 45
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 46
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is NoSuchElementException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 83
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 84
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is NoSuchElementException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 72
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 73
    return;
  }
}


class java$io$FileInputStream extends java$io$InputStream {
  nativeObject = null;

  fd = null;
  path = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$FileInputStream,[java$lang$Object,java$io$Closeable,java$lang$AutoCloseable,java$io$InputStream,java$io$FileInputStream]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$io$FileDescriptor$(arg0) {
    // source file is FileInputStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var0 = arg0;
    // line number 54
    java$io$InputStream.prototype.V$$init$$$.call(this);
    // line number 55
    if (var0 != null) {
     // line number 58
     var2 = this;
     var2.fd = var0;
     // line number 59
     var3 = this;
     var3.path = null;
     // line number 60
     return;
    } else {
     // line number 56
     var1 = new java$lang$NullPointerException();
     java$lang$NullPointerException.prototype.V$$init$$$.call(var1);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }
}


class java$lang$UnsupportedOperationException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$UnsupportedOperationException,[java$lang$Exception,java$lang$UnsupportedOperationException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is UnsupportedOperationException.java
    // line number 42
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 43
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is UnsupportedOperationException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 52
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 53
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is UnsupportedOperationException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 90
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 91
    return;
  }
}


class java$nio$channels$WritableByteChannel extends java$lang$Object {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$channels$WritableByteChannel,[java$nio$channels$WritableByteChannel,java$lang$Object,java$io$Closeable,java$lang$AutoCloseable,java$nio$channels$Channel]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.I$write$Ljava$nio$ByteBuffer$ = impl;
  }
}


class java$util$HashMap$TreeNode extends java$util$LinkedHashMap$Entry {
  nativeObject = null;

  static $assertionsDisabled = false;
  prev = null;
  right = null;
  left = null;
  parent = null;
  red = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap$TreeNode,[java$util$LinkedHashMap$Entry,java$util$HashMap$Node,java$util$Map$Entry,java$lang$Object,java$util$HashMap$TreeNode]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
  }

  static V$$clinit$$$() {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = 0;
    // line number 1966
    var0 = (java$lang$Class.prototype.Z$desiredAssertionStatus$$.call(java$util$HashMap.$rt));
    If_8_0: {
     if (var0 != 0) {
      phi2 = (0) | 0;
      break If_8_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = (var1) | 0;
      break If_8_0;
     }
    }
    java$util$HashMap$TreeNode.$i;
    java$util$HashMap$TreeNode.$assertionsDisabled = phi2;
    return;
  }

  V$split$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$I(arg0,arg1,arg2,arg3) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var phi14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = 0;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var phi27 = null;
    var phi28 = null;
    var var29 = null;
    var phi30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var phi37 = null;
    var phi38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = 0;
    var var44 = null;
    var var45 = 0;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = 0;
    var var51 = null;
    var var52 = 0;
    var var53 = 0;
    var var54 = 0;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = null;
    var var59 = 0;
    var var60 = 0;
    var var61 = 0;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = null;
    var var67 = 0;
    var var68 = null;
    var var69 = null;
    var var70 = null;
    var var71 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 2298
    var2 = this;
    // line number 2300
    // line number 2301
    // line number 2302
    // line number 2303
    var3 = var2;
    phi4 = var0;
    phi5 = arg1;
    phi6 = (var1) | 0;
    phi7 = (arg3) | 0;
    phi8 = null;
    phi9 = null;
    phi10 = null;
    phi11 = null;
    phi12 = (0) | 0;
    phi13 = (0) | 0;
    phi14 = var3;
    L61921754: while(true) {
     var15 = phi14;
     if (var15 == null) {
      // line number 2324
      var42 = phi8;
      If_163_0: {
       if (var42 == null) {
        break If_163_0;
       } else {
        // line number 2325
        var43 = (phi12) | 0;
        if (var43 > 6) {
         // line number 2328
         var66 = phi5;
         var67 = (phi6) | 0;
         var68 = phi8;
         var66.data[var67] = var68;
         // line number 2329
         var69 = phi10;
         if (var69 == null) {
          break If_163_0;
         } else {
          // line number 2330
          var70 = phi8;
          var71 = phi5;
          var70.V$treeify$$Ljava$util$HashMap$Node$(var71);
          break If_163_0;
         }
        } else {
         // line number 2326
         var44 = phi5;
         var45 = (phi6) | 0;
         var46 = phi8;
         var47 = phi4;
         var48 = (var46.Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(var47));
         var44.data[var45] = var48;
         // Here was a goto statement
         break If_163_0;
        }
       }
      }
      // line number 2333
      var49 = phi10;
      If_192_0: {
       if (var49 == null) {
        break If_192_0;
       } else {
        // line number 2334
        var50 = (phi13) | 0;
        if (var50 > 6) {
         // line number 2337
         var58 = phi5;
         var59 = (phi6) | 0;
         var60 = (phi7) | 0;
         var61 = ((var59 + var60)) | 0;
         var62 = phi10;
         var58.data[var61] = var62;
         // line number 2338
         var63 = phi8;
         if (var63 == null) {
          break If_192_0;
         } else {
          // line number 2339
          var64 = phi10;
          var65 = phi5;
          var64.V$treeify$$Ljava$util$HashMap$Node$(var65);
          break If_192_0;
         }
        } else {
         // line number 2335
         var51 = phi5;
         var52 = (phi6) | 0;
         var53 = (phi7) | 0;
         var54 = ((var52 + var53)) | 0;
         var55 = phi10;
         var56 = phi4;
         var57 = (var55.Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(var56));
         var51.data[var54] = var57;
         // Here was a goto statement
         break If_192_0;
        }
       }
      }
      // line number 2342
      return;
     } else {
      // line number 2304
      var16 = phi14;
      var17 = (var16.next);
      var18 = var17;
      // line number 2305
      var19 = phi14;
      var19.next = null;
      // line number 2306
      var20 = phi14;
      var21 = ((var20.hash)) | 0;
      var22 = (phi7) | 0;
      var23 = ((var21 & var22)) | 0;
      If_78_0: {
       if (var23 != 0) {
        // line number 2315
        var34 = phi14;
        var35 = phi11;
        var34.prev = var35;
        If_131_0: {
         if (var35 != null) {
          // line number 2318
          var40 = phi11;
          var41 = phi14;
          var40.next = var41;
          phi37 = phi10;
          phi38 = var18;
          break If_131_0;
         } else {
          // line number 2316
          var36 = phi14;
          // Here was a goto statement
          phi37 = var36;
          phi38 = var18;
          break If_131_0;
         }
        }
        // line number 2319
        var39 = phi14;
        // line number 2320
        phi13 = ((phi13 + 1)) | 0;
        phi27 = phi8;
        phi30 = phi9;
        phi10 = phi37;
        phi11 = var39;
        phi28 = phi38;
        break If_78_0;
       } else {
        // line number 2307
        var24 = phi14;
        var25 = phi9;
        var24.prev = var25;
        If_88_0: {
         if (var25 != null) {
          // line number 2310
          var32 = phi9;
          var33 = phi14;
          var32.next = var33;
          phi27 = phi8;
          phi28 = var18;
          break If_88_0;
         } else {
          // line number 2308
          var26 = phi14;
          // Here was a goto statement
          phi27 = var26;
          phi28 = var18;
          break If_88_0;
         }
        }
        // line number 2311
        var29 = phi14;
        // line number 2312
        phi12 = ((phi12 + 1)) | 0;
        // Here was a goto statement
        phi30 = var29;
        break If_78_0;
       }
      }
      // line number 2303
      var31 = phi28;
      // Here was a goto statement
      phi8 = phi27;
      phi9 = phi30;
      phi14 = var31;
      continue L61921754;
     }
    }
  }

  Ljava$util$HashMap$Node$$untreeify$Ljava$util$HashMap$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var phi1 = null;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var0 = arg0;
    // line number 2118
    // line number 2119
    phi1 = var0;
    phi2 = null;
    phi3 = null;
    phi4 = this;
    L2142138179: while(true) {
     var5 = phi4;
     if (var5 == null) {
      // line number 2127
      var17 = phi2;
      return var17;
     } else {
      // line number 2120
      var6 = phi1;
      var7 = phi4;
      var8 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$replacementNode$Ljava$util$HashMap$Node$$Ljava$util$HashMap$Node$.call(var6,var7,null));
      // line number 2121
      var9 = phi3;
      If_36_0: {
       if (var9 != null) {
        // line number 2124
        var16 = phi3;
        var16.next = var8;
        phi11 = phi2;
        phi12 = var8;
        break If_36_0;
       } else {
        // line number 2122
        var10 = var8;
        // Here was a goto statement
        phi11 = var10;
        phi12 = var8;
        break If_36_0;
       }
      }
      // line number 2125
      var13 = phi12;
      // line number 2119
      var14 = phi4;
      var15 = (var14.next);
      // Here was a goto statement
      phi2 = phi11;
      phi3 = var13;
      phi4 = var15;
      continue L2142138179;
     }
    }
  }

  V$treeify$$Ljava$util$HashMap$Node$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var phi1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var phi14 = null;
    var phi15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = null;
    var var22 = null;
    var phi23 = null;
    var phi24 = null;
    var phi25 = 0;
    var phi26 = null;
    var phi27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = 0;
    var var32 = 0;
    var var33 = 0;
    var var34 = 0;
    var phi35 = 0;
    var phi36 = 0;
    var phi37 = null;
    var var38 = null;
    var var39 = 0;
    var var40 = null;
    var var41 = null;
    var phi42 = null;
    var phi43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = 0;
    var var48 = null;
    var var49 = null;
    var phi50 = null;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = 0;
    var var59 = 0;
    var var60 = null;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var phi64 = null;
    var phi65 = 0;
    var phi66 = null;
    var var67 = null;
    var var68 = null;
    var var69 = null;
    var var70 = 0;
    var var71 = 0;
    var phi72 = 0;
    var var73 = null;
    var var74 = null;
    var var75 = 0;
    var var76 = null;
    var var77 = null;
    var0 = arg0;
    // line number 2072
    // line number 2073
    phi1 = var0;
    phi2 = null;
    phi3 = this;
    L1458115183: while(true) {
     var4 = phi3;
     if (var4 == null) {
      // line number 2110
      var76 = phi1;
      var77 = phi2;
      java$util$HashMap$TreeNode.$i;
      java$util$HashMap$TreeNode.V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(var76,var77);
      // line number 2111
      return;
     } else {
      // line number 2074
      var5 = phi3;
      var6 = (var5.next);
      var7 = var6;
      // line number 2075
      var8 = phi3;
      var9 = phi3;
      var9.right = null;
      var8.left = null;
      // line number 2076
      var10 = phi2;
      If_42_0: {
       if (var10 != null) {
        // line number 2082
        var17 = phi3;
        var18 = (var17.key);
        // line number 2083
        var19 = phi3;
        var20 = ((var19.hash)) | 0;
        // line number 2084
        var21 = null;
        // line number 2085
        var22 = phi2;
        phi23 = var7;
        phi24 = var18;
        phi25 = (var20) | 0;
        phi26 = var21;
        phi27 = var22;
        L1962475596: while(true) {
         // line number 2087
         var28 = phi27;
         var29 = (var28.key);
         // line number 2088
         var30 = phi27;
         var31 = ((var30.hash)) | 0;
         var32 = (var31) | 0;
         var33 = (phi25) | 0;
         If_118_0: {
          if (var31 <= var33) {
           // line number 2090
           var58 = (phi25) | 0;
           if (var32 >= var58) {
            // line number 2092
            var60 = phi26;
            If_232_0: {
             If_232_1: {
              if (var60 != null) {
               phi64 = phi26;
               phi65 = (var32) | 0;
               phi66 = var29;
               break If_232_1;
              } else {
               var61 = phi24;
               // line number 2093
               var62 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(var61));
               var63 = var62;
               if (var62 == null) {
                phi64 = var63;
                phi65 = (var32) | 0;
                phi66 = var29;
                break If_232_0;
               } else {
                phi64 = var63;
                phi65 = (var32) | 0;
                phi66 = var29;
                break If_232_1;
               }
              }
             }
             var67 = phi64;
             var68 = phi24;
             var69 = phi66;
             // line number 2094
             var70 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var67,var68,var69))) | 0;
             var71 = (var70) | 0;
             if (var70 != 0) {
              phi26 = phi64;
              phi35 = (var71) | 0;
              phi36 = (phi65) | 0;
              phi37 = phi66;
              break If_118_0;
             } else {
              phi72 = (var71) | 0;
              break If_232_0;
             }
            }
            // line number 2095
            var73 = phi24;
            var74 = phi66;
            java$util$HashMap$TreeNode.$i;
            var75 = ((java$util$HashMap$TreeNode.I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(var73,var74))) | 0;
            phi26 = phi64;
            phi35 = (var75) | 0;
            phi36 = (phi65) | 0;
            phi37 = phi66;
            break If_118_0;
           } else {
            // line number 2091
            var59 = (1) | 0;
            // Here was a goto statement
            phi35 = (var59) | 0;
            phi36 = (var32) | 0;
            phi37 = var29;
            break If_118_0;
           }
          } else {
           // line number 2089
           var34 = (-1) | 0;
           // Here was a goto statement
           phi35 = (var34) | 0;
           phi36 = (var32) | 0;
           phi37 = var29;
           break If_118_0;
          }
         }
         // line number 2097
         var38 = phi27;
         // line number 2098
         var39 = (phi35) | 0;
         If_139_0: {
          if (var39 > 0) {
           var56 = phi27;
           var57 = (var56.right);
           phi42 = var38;
           phi43 = var57;
           break If_139_0;
          } else {
           var40 = phi27;
           var41 = (var40.left);
           // Here was a goto statement
           phi42 = var38;
           phi43 = var41;
           break If_139_0;
          }
         }
         var44 = phi43;
         if (phi43 != null) {
          // line number 2107
          // Here was a goto statement
          phi27 = var44;
          continue L1962475596;
         } else {
          // line number 2099
          var45 = phi3;
          var46 = phi42;
          var45.parent = var46;
          // line number 2100
          var47 = (phi35) | 0;
          If_167_0: {
           if (var47 > 0) {
            // line number 2103
            var54 = phi42;
            var55 = phi3;
            var54.right = var55;
            phi50 = var44;
            break If_167_0;
           } else {
            // line number 2101
            var48 = phi42;
            var49 = phi3;
            var48.left = var49;
            // Here was a goto statement
            phi50 = var44;
            break If_167_0;
           }
          }
          // line number 2104
          var51 = phi2;
          var52 = phi3;
          java$util$HashMap$TreeNode.$i;
          var53 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var51,var52));
          // line number 2105
          // Here was a goto statement
          phi14 = var53;
          phi15 = phi23;
          break If_42_0;
         }
        }
       } else {
        // line number 2077
        var11 = phi3;
        var11.parent = null;
        // line number 2078
        var12 = phi3;
        var12.red = 0;
        // line number 2079
        var13 = phi3;
        // Here was a goto statement
        phi14 = var13;
        phi15 = var7;
        break If_42_0;
       }
      }
      // line number 2073
      var16 = phi15;
      // Here was a goto statement
      phi2 = phi14;
      phi3 = var16;
      continue L1458115183;
     }
    }
  }

  static Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    var phi23 = null;
    var phi24 = null;
    var phi25 = null;
    var phi26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var phi37 = null;
    var phi38 = null;
    var phi39 = null;
    var phi40 = null;
    var var41 = null;
    var phi42 = null;
    var var43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = null;
    var var51 = null;
    var var52 = 0;
    var var53 = null;
    var phi54 = null;
    var phi55 = null;
    var phi56 = null;
    var var57 = null;
    var var58 = null;
    var var59 = null;
    var var60 = null;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = null;
    var phi67 = null;
    var phi68 = null;
    var phi69 = null;
    var phi70 = null;
    var var71 = null;
    var phi72 = null;
    var var73 = null;
    var var74 = null;
    var var75 = null;
    var var76 = null;
    var var77 = null;
    var var78 = null;
    var var79 = null;
    var var80 = null;
    var0 = arg1;
    // line number 2385
    var1 = (1) | 0;
    var0.red = var1;
    phi2 = arg0;
    phi3 = var0;
    L1802302401: while(true) {
     // line number 2387
     var4 = phi3;
     var5 = (var4.parent);
     var6 = var5;
     if (var5 != null) {
      // line number 2391
      var9 = (var6.red);
      If_43_0: {
       if (var9 == 0) {
        phi13 = var6;
        break If_43_0;
       } else {
        var10 = var6;
        var11 = (var10.parent);
        var12 = var11;
        if (var11 != null) {
         // line number 2393
         var15 = var12;
         var16 = (var15.left);
         var17 = var16;
         if (var6 != var16) {
          // line number 2415
          If_206_0: {
           if (var17 == null) {
            phi54 = var6;
            phi55 = var12;
            phi56 = var17;
            break If_206_0;
           } else {
            var51 = var17;
            var52 = (var51.red);
            if (var52 == 0) {
             phi54 = var6;
             phi55 = var12;
             phi56 = var17;
             break If_206_0;
            } else {
             // line number 2416
             var17.red = 0;
             // line number 2417
             var6.red = 0;
             // line number 2418
             var12.red = 1;
             // line number 2419
             var53 = var12;
             // Here was a goto statement
             phi3 = var53;
             continue L1802302401;
            }
           }
          }
          // line number 2422
          var57 = phi3;
          var58 = phi54;
          var59 = (var58.left);
          If_246_0: {
           if (var57 != var59) {
            phi67 = phi2;
            phi68 = phi3;
            phi69 = phi54;
            phi72 = phi55;
            break If_246_0;
           } else {
            // line number 2423
            var60 = phi2;
            var61 = phi54;
            var62 = var61;
            java$util$HashMap$TreeNode.$i;
            var63 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var60,var61));
            // line number 2424
            var64 = (var62.parent);
            var65 = var64;
            If_267_0: {
             if (var64 != null) {
              var80 = (var65.parent);
              phi67 = var63;
              phi68 = var62;
              phi69 = var65;
              phi70 = var80;
              break If_267_0;
             } else {
              var66 = null;
              // Here was a goto statement
              phi67 = var63;
              phi68 = var62;
              phi69 = var65;
              phi70 = var66;
              break If_267_0;
             }
            }
            var71 = phi70;
            phi72 = var71;
            break If_246_0;
           }
          }
          // line number 2426
          var73 = phi69;
          if (var73 == null) {
           phi2 = phi67;
           phi3 = phi68;
           continue L1802302401;
          } else {
           // line number 2427
           var74 = phi69;
           var74.red = 0;
           // line number 2428
           var75 = phi72;
           if (var75 == null) {
            phi2 = phi67;
            phi3 = phi68;
            continue L1802302401;
           } else {
            // line number 2429
            var76 = phi72;
            var76.red = 1;
            // line number 2430
            var77 = phi67;
            var78 = phi72;
            java$util$HashMap$TreeNode.$i;
            var79 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var77,var78));
            // Here was a goto statement
            phi2 = var79;
            phi3 = phi68;
            continue L1802302401;
           }
          }
         } else {
          // line number 2394
          var18 = (var12.right);
          var19 = var18;
          If_84_0: {
           if (var18 == null) {
            phi23 = var6;
            phi24 = var12;
            phi25 = var17;
            phi26 = var19;
            break If_84_0;
           } else {
            var20 = var19;
            var21 = (var20.red);
            if (var21 == 0) {
             phi23 = var6;
             phi24 = var12;
             phi25 = var17;
             phi26 = var19;
             break If_84_0;
            } else {
             // line number 2395
             var19.red = 0;
             // line number 2396
             var6.red = 0;
             // line number 2397
             var12.red = 1;
             // line number 2398
             var22 = var12;
             // Here was a goto statement
             phi3 = var22;
             continue L1802302401;
            }
           }
          }
          // line number 2401
          var27 = phi3;
          var28 = phi23;
          var29 = (var28.right);
          If_125_0: {
           if (var27 != var29) {
            phi37 = phi2;
            phi38 = phi3;
            phi39 = phi23;
            phi42 = phi24;
            break If_125_0;
           } else {
            // line number 2402
            var30 = phi2;
            var31 = phi23;
            var32 = var31;
            java$util$HashMap$TreeNode.$i;
            var33 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var30,var31));
            // line number 2403
            var34 = (var32.parent);
            var35 = var34;
            If_147_0: {
             if (var34 != null) {
              var50 = (var35.parent);
              phi37 = var33;
              phi38 = var32;
              phi39 = var35;
              phi40 = var50;
              break If_147_0;
             } else {
              var36 = null;
              // Here was a goto statement
              phi37 = var33;
              phi38 = var32;
              phi39 = var35;
              phi40 = var36;
              break If_147_0;
             }
            }
            var41 = phi40;
            phi42 = var41;
            break If_125_0;
           }
          }
          // line number 2405
          var43 = phi39;
          if (var43 == null) {
           phi2 = phi37;
           phi3 = phi38;
           continue L1802302401;
          } else {
           // line number 2406
           var44 = phi39;
           var44.red = 0;
           // line number 2407
           var45 = phi42;
           if (var45 == null) {
            phi2 = phi37;
            phi3 = phi38;
            continue L1802302401;
           } else {
            // line number 2408
            var46 = phi42;
            var46.red = 1;
            // line number 2409
            var47 = phi37;
            var48 = phi42;
            java$util$HashMap$TreeNode.$i;
            var49 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var47,var48));
            // Here was a goto statement
            phi2 = var49;
            phi3 = phi38;
            continue L1802302401;
           }
          }
         }
        } else {
         phi13 = var6;
         break If_43_0;
        }
       }
      }
      // line number 2392
      var14 = phi2;
      return var14;
     } else {
      // line number 2388
      var7 = phi3;
      var7.red = 0;
      // line number 2389
      var8 = phi3;
      return var8;
     }
    }
  }

  static Ljava$util$HashMap$TreeNode$$rotateLeft$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var phi18 = null;
    var phi19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var0 = arg1;
    // line number 2350
    If_7_0: {
     if (var0 == null) {
      phi18 = arg0;
      phi9 = var0;
      break If_7_0;
     } else {
      var1 = var0;
      var2 = (var1.right);
      var3 = var2;
      if (var2 == null) {
       phi18 = arg0;
       phi9 = var0;
       phi10 = var3;
       break If_7_0;
      } else {
       // line number 2351
       var4 = var3;
       var5 = (var4.left);
       var0.right = var5;
       var6 = var5;
       If_30_0: {
        if (var5 == null) {
         phi8 = arg0;
         phi9 = var0;
         phi10 = var3;
         phi11 = var6;
         break If_30_0;
        } else {
         // line number 2352
         var7 = var0;
         var6.parent = var7;
         phi8 = arg0;
         phi9 = var0;
         phi10 = var3;
         phi11 = var6;
         break If_30_0;
        }
       }
       // line number 2353
       var12 = phi10;
       var13 = phi9;
       var14 = (var13.parent);
       var12.parent = var14;
       var15 = var14;
       If_55_0: {
        if (var14 != null) {
         // line number 2355
         var25 = (var15.left);
         var26 = phi9;
         if (var25 != var26) {
          // line number 2358
          var28 = phi10;
          var15.right = var28;
          phi18 = phi8;
          phi19 = var15;
          break If_55_0;
         } else {
          // line number 2356
          var27 = phi10;
          var15.left = var27;
          // Here was a goto statement
          phi18 = phi8;
          phi19 = var15;
          break If_55_0;
         }
        } else {
         // line number 2354
         var16 = phi10;
         var17 = var16;
         var16.red = 0;
         // Here was a goto statement
         phi18 = var17;
         phi19 = var15;
         break If_55_0;
        }
       }
       // line number 2359
       var20 = phi10;
       var21 = phi9;
       var20.left = var21;
       // line number 2360
       var22 = phi9;
       var23 = phi10;
       var22.parent = var23;
       break If_7_0;
      }
     }
    }
    // line number 2362
    var24 = phi18;
    return var24;
  }

  static Ljava$util$HashMap$TreeNode$$rotateRight$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var phi18 = null;
    var phi19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var0 = arg1;
    // line number 2368
    If_7_0: {
     if (var0 == null) {
      phi18 = arg0;
      phi9 = var0;
      break If_7_0;
     } else {
      var1 = var0;
      var2 = (var1.left);
      var3 = var2;
      if (var2 == null) {
       phi18 = arg0;
       phi9 = var0;
       phi10 = var3;
       break If_7_0;
      } else {
       // line number 2369
       var4 = var3;
       var5 = (var4.right);
       var0.left = var5;
       var6 = var5;
       If_30_0: {
        if (var5 == null) {
         phi8 = arg0;
         phi9 = var0;
         phi10 = var3;
         phi11 = var6;
         break If_30_0;
        } else {
         // line number 2370
         var7 = var0;
         var6.parent = var7;
         phi8 = arg0;
         phi9 = var0;
         phi10 = var3;
         phi11 = var6;
         break If_30_0;
        }
       }
       // line number 2371
       var12 = phi10;
       var13 = phi9;
       var14 = (var13.parent);
       var12.parent = var14;
       var15 = var14;
       If_55_0: {
        if (var14 != null) {
         // line number 2373
         var25 = (var15.right);
         var26 = phi9;
         if (var25 != var26) {
          // line number 2376
          var28 = phi10;
          var15.left = var28;
          phi18 = phi8;
          phi19 = var15;
          break If_55_0;
         } else {
          // line number 2374
          var27 = phi10;
          var15.right = var27;
          // Here was a goto statement
          phi18 = phi8;
          phi19 = var15;
          break If_55_0;
         }
        } else {
         // line number 2372
         var16 = phi10;
         var17 = var16;
         var16.red = 0;
         // Here was a goto statement
         phi18 = var17;
         phi19 = var15;
         break If_55_0;
        }
       }
       // line number 2377
       var20 = phi10;
       var21 = phi9;
       var20.right = var21;
       // line number 2378
       var22 = phi9;
       var23 = phi10;
       var22.parent = var23;
       break If_7_0;
      }
     }
    }
    // line number 2380
    var24 = phi18;
    return var24;
  }

  static I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var phi9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var phi15 = 0;
    var var16 = 0;
    var phi17 = 0;
    var var18 = 0;
    var0 = arg1;
    // line number 2060
    If_7_0: {
     If_7_1: {
      if (arg0 == null) {
       phi9 = arg0;
       phi10 = var0;
       break If_7_1;
      } else {
       var1 = var0;
       if (var1 == null) {
        phi9 = arg0;
        phi10 = var0;
        break If_7_1;
       } else {
        var2 = arg0;
        // line number 2061
        var3 = ((var2).constructor.$rt);
        var4 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var3));
        // line number 2062
        var5 = ((var0).constructor.$rt);
        var6 = (java$lang$Class.prototype.Ljava$lang$String$$getName$$.call(var5));
        var7 = ((java$lang$String.prototype.I$compareTo$Ljava$lang$String$.call(var4,var6))) | 0;
        var8 = (var7) | 0;
        if (var7 != 0) {
         phi9 = arg0;
         phi10 = var0;
         phi17 = (var8) | 0;
         break If_7_0;
        } else {
         phi9 = arg0;
         phi10 = var0;
         break If_7_1;
        }
       }
      }
     }
     // line number 2063
     var11 = phi9;
     java$lang$System.$i;
     var12 = ((java$lang$System.I$identityHashCode$Ljava$lang$Object$(var11))) | 0;
     var13 = phi10;
     var14 = ((java$lang$System.I$identityHashCode$Ljava$lang$Object$(var13))) | 0;
     If_58_0: {
      if (var12 > var14) {
       phi15 = (1) | 0;
       break If_58_0;
      } else {
       // line number 2064
       // Here was a goto statement
       phi15 = (-1) | 0;
       break If_58_0;
      }
     }
     var16 = (phi15) | 0;
     phi17 = (var16) | 0;
     break If_7_0;
    }
    // line number 2065
    var18 = (phi17) | 0;
    return var18;
  }

  static V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = 0;
    var phi20 = 0;
    var phi21 = null;
    var phi22 = null;
    var phi23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = 0;
    var var34 = null;
    var var35 = 0;
    var var36 = null;
    var0 = arg1;
    // line number 1992
    If_7_0: {
     if (var0 == null) {
      phi17 = arg0;
      phi18 = var0;
      break If_7_0;
     } else {
      var1 = arg0;
      if (var1 == null) {
       phi17 = arg0;
       phi18 = var0;
       break If_7_0;
      } else {
       var2 = arg0;
       var3 = (var2.data.length) | 0;
       var4 = (var3) | 0;
       if (var3 <= 0) {
        phi17 = arg0;
        phi18 = var0;
        phi19 = (var4) | 0;
        break If_7_0;
       } else {
        // line number 1993
        var5 = ((var4 - 1)) | 0;
        var6 = ((var0.hash)) | 0;
        var7 = ((var5 & var6)) | 0;
        // line number 1994
        var8 = (var7) | 0;
        var9 = (arg0.data[var8]);
        var10 = var9;
        // line number 1995
        var11 = var10;
        If_50_0: {
         if (var0 == var11) {
          phi17 = arg0;
          phi18 = var0;
          phi19 = (var4) | 0;
          phi20 = (var7) | 0;
          phi21 = var10;
          break If_50_0;
         } else {
          // line number 1997
          var12 = (var7) | 0;
          arg0.data[var12] = var0;
          // line number 1998
          var13 = (var0.prev);
          // line number 1999
          var14 = (var0.next);
          var15 = var14;
          If_70_0: {
           if (var14 == null) {
            phi17 = arg0;
            phi18 = var0;
            phi19 = (var4) | 0;
            phi20 = (var7) | 0;
            phi21 = var10;
            phi22 = var15;
            phi23 = var13;
            break If_70_0;
           } else {
            // line number 2000
            var16 = var15;
            var16.prev = var13;
            phi17 = arg0;
            phi18 = var0;
            phi19 = (var4) | 0;
            phi20 = (var7) | 0;
            phi21 = var10;
            phi22 = var15;
            phi23 = var13;
            break If_70_0;
           }
          }
          // line number 2001
          var24 = phi23;
          If_90_0: {
           if (var24 == null) {
            break If_90_0;
           } else {
            // line number 2002
            var25 = phi23;
            var26 = phi22;
            var25.next = var26;
            break If_90_0;
           }
          }
          // line number 2003
          var27 = phi21;
          If_104_0: {
           if (var27 == null) {
            break If_104_0;
           } else {
            // line number 2004
            var28 = phi21;
            var29 = phi18;
            var28.prev = var29;
            break If_104_0;
           }
          }
          // line number 2005
          var30 = phi18;
          var31 = phi21;
          var30.next = var31;
          // line number 2006
          var32 = phi18;
          var32.prev = null;
          break If_50_0;
         }
        }
        // line number 2008
        java$util$HashMap$TreeNode.$i;
        var33 = (java$util$HashMap$TreeNode.$assertionsDisabled);
        if (var33 != 0) {
         break If_7_0;
        } else {
         var34 = phi18;
         var35 = (java$util$HashMap$TreeNode.Z$checkInvariants$Ljava$util$HashMap$TreeNode$(var34));
         if (var35 != 0) {
          break If_7_0;
         } else {
          var36 = new java$lang$AssertionError();
          java$lang$AssertionError.prototype.V$$init$$$.call(var36);
          throw bytecoder.registerStack(var36, new Error().stack);
         }
        }
       }
      }
     }
    }
    // line number 2010
    return;
  }

  static Z$checkInvariants$Ljava$util$HashMap$TreeNode$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var phi10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var var30 = 0;
    var var31 = null;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = 0;
    var var39 = null;
    var var40 = 0;
    var var41 = null;
    var var42 = 0;
    var var43 = null;
    var var44 = null;
    var var45 = 0;
    var var46 = null;
    var var47 = null;
    var var48 = 0;
    var var49 = null;
    var var50 = null;
    var var51 = 0;
    var var52 = null;
    var var53 = null;
    var var54 = 0;
    // line number 2534
    var0 = (arg0.parent);
    var1 = (arg0.left);
    var2 = (arg0.right);
    // line number 2535
    var3 = (arg0.prev);
    var4 = (arg0.next);
    var5 = var4;
    // line number 2536
    If_29_0: {
     if (var3 == null) {
      phi8 = arg0;
      phi9 = var0;
      phi10 = var1;
      phi11 = var2;
      phi12 = var3;
      phi13 = var5;
      break If_29_0;
     } else {
      var6 = var3;
      var7 = (var6.next);
      if (var7 == arg0) {
       phi8 = arg0;
       phi9 = var0;
       phi10 = var1;
       phi11 = var2;
       phi12 = var3;
       phi13 = var5;
       break If_29_0;
      } else {
       // line number 2537
       return 0;
      }
     }
    }
    // line number 2538
    var14 = phi13;
    If_53_0: {
     if (var14 == null) {
      break If_53_0;
     } else {
      var15 = phi13;
      var16 = (var15.prev);
      var17 = phi8;
      if (var16 == var17) {
       break If_53_0;
      } else {
       // line number 2539
       return 0;
      }
     }
    }
    // line number 2540
    var18 = phi9;
    If_73_0: {
     if (var18 == null) {
      break If_73_0;
     } else {
      var19 = phi8;
      var20 = phi9;
      var21 = (var20.left);
      if (var19 == var21) {
       break If_73_0;
      } else {
       var22 = phi8;
       var23 = phi9;
       var24 = (var23.right);
       if (var22 == var24) {
        break If_73_0;
       } else {
        // line number 2541
        return 0;
       }
      }
     }
    }
    // line number 2542
    var25 = phi10;
    If_102_0: {
     if (var25 == null) {
      break If_102_0;
     } else {
      var26 = phi10;
      var27 = (var26.parent);
      var28 = phi8;
      If_111_0: {
       if (var27 != var28) {
        break If_111_0;
       } else {
        var29 = phi10;
        var30 = ((var29.hash)) | 0;
        var31 = phi8;
        var32 = ((var31.hash)) | 0;
        if (var30 <= var32) {
         break If_102_0;
        } else {
         break If_111_0;
        }
       }
      }
      // line number 2543
      return 0;
     }
    }
    // line number 2544
    var33 = phi11;
    If_135_0: {
     if (var33 == null) {
      break If_135_0;
     } else {
      var34 = phi11;
      var35 = (var34.parent);
      var36 = phi8;
      If_144_0: {
       if (var35 != var36) {
        break If_144_0;
       } else {
        var37 = phi11;
        var38 = ((var37.hash)) | 0;
        var39 = phi8;
        var40 = ((var39.hash)) | 0;
        if (var38 >= var40) {
         break If_135_0;
        } else {
         break If_144_0;
        }
       }
      }
      // line number 2545
      return 0;
     }
    }
    // line number 2546
    var41 = phi8;
    var42 = (var41.red);
    If_171_0: {
     if (var42 == 0) {
      break If_171_0;
     } else {
      var43 = phi10;
      if (var43 == null) {
       break If_171_0;
      } else {
       var44 = phi10;
       var45 = (var44.red);
       if (var45 == 0) {
        break If_171_0;
       } else {
        var46 = phi11;
        if (var46 == null) {
         break If_171_0;
        } else {
         var47 = phi11;
         var48 = (var47.red);
         if (var48 == 0) {
          break If_171_0;
         } else {
          // line number 2547
          return 0;
         }
        }
       }
      }
     }
    }
    // line number 2548
    var49 = phi10;
    If_207_0: {
     if (var49 == null) {
      break If_207_0;
     } else {
      var50 = phi10;
      java$util$HashMap$TreeNode.$i;
      var51 = (java$util$HashMap$TreeNode.Z$checkInvariants$Ljava$util$HashMap$TreeNode$(var50));
      if (var51 != 0) {
       break If_207_0;
      } else {
       // line number 2549
       return 0;
      }
     }
    }
    // line number 2550
    var52 = phi11;
    If_228_0: {
     if (var52 == null) {
      break If_228_0;
     } else {
      var53 = phi11;
      java$util$HashMap$TreeNode.$i;
      var54 = (java$util$HashMap$TreeNode.Z$checkInvariants$Ljava$util$HashMap$TreeNode$(var53));
      if (var54 != 0) {
       break If_228_0;
      } else {
       // line number 2551
       return 0;
      }
     }
    }
    // line number 2552
    return 1;
  }

  Ljava$util$HashMap$TreeNode$$putTreeVal$Ljava$util$HashMap$$$Ljava$util$HashMap$Node$$I$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1,arg2,arg3,arg4) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = null;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = 0;
    var phi14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = 0;
    var var22 = 0;
    var phi23 = 0;
    var phi24 = 0;
    var var25 = null;
    var var26 = 0;
    var var27 = null;
    var var28 = null;
    var phi29 = null;
    var phi30 = null;
    var var31 = null;
    var var32 = null;
    var var33 = null;
    var var34 = null;
    var var35 = 0;
    var var36 = null;
    var var37 = null;
    var var38 = null;
    var var39 = 0;
    var var40 = null;
    var phi41 = null;
    var phi42 = null;
    var phi43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var var47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = null;
    var var51 = null;
    var var52 = null;
    var var53 = null;
    var var54 = null;
    var var55 = null;
    var var56 = null;
    var var57 = null;
    var var58 = null;
    var var59 = null;
    var var60 = 0;
    var var61 = 0;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var var66 = null;
    var var67 = null;
    var var68 = 0;
    var phi69 = 0;
    var phi70 = null;
    var var71 = null;
    var phi72 = 0;
    var phi73 = null;
    var var74 = null;
    var var75 = null;
    var var76 = null;
    var var77 = null;
    var phi78 = null;
    var var79 = null;
    var var80 = null;
    var var81 = null;
    var var82 = 0;
    var var83 = 0;
    var phi84 = 0;
    var var85 = 0;
    var var86 = 0;
    var var87 = null;
    var var88 = null;
    var var89 = null;
    var var90 = null;
    var var91 = 0;
    var var92 = null;
    var var93 = null;
    var var94 = null;
    var var95 = null;
    var phi96 = 0;
    var phi97 = null;
    var phi98 = null;
    var var99 = null;
    var var100 = null;
    var var101 = null;
    var var102 = null;
    var var103 = 0;
    var var104 = null;
    var var105 = null;
    var var106 = null;
    var var107 = null;
    var phi108 = null;
    var phi109 = null;
    var var110 = null;
    var phi111 = null;
    var phi112 = null;
    var var113 = null;
    var var114 = null;
    var var115 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    var2 = arg4;
    // line number 2135
    // line number 2136
    // line number 2137
    var3 = (this.parent);
    If_24_0: {
     if (var3 == null) {
      phi6 = this;
      phi7 = var0;
      phi8 = arg1;
      phi9 = (var1) | 0;
      phi10 = arg3;
      phi11 = var2;
      phi12 = null;
      phi13 = (0) | 0;
      phi14 = this;
      break If_24_0;
     } else {
      var4 = this;
      var5 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$root$$.call(var4));
      // Here was a goto statement
      phi6 = this;
      phi7 = var0;
      phi8 = arg1;
      phi9 = (var1) | 0;
      phi10 = arg3;
      phi11 = var2;
      phi12 = null;
      phi13 = (0) | 0;
      phi14 = var5;
      break If_24_0;
     }
    }
    var15 = phi14;
    // line number 2138
    var16 = var15;
    phi17 = var15;
    phi18 = var16;
    L978218406: while(true) {
     // line number 2140
     var19 = phi18;
     var20 = ((var19.hash)) | 0;
     var21 = (var20) | 0;
     var22 = (phi9) | 0;
     If_64_0: {
      if (var20 <= var22) {
       // line number 2142
       var60 = (phi9) | 0;
       if (var21 >= var60) {
        // line number 2144
        var62 = phi18;
        var63 = (var62.key);
        var64 = var63;
        var65 = phi10;
        If_233_0: {
         if (var63 == var65) {
          phi69 = (var21) | 0;
          phi70 = var64;
          break If_233_0;
         } else {
          var66 = phi10;
          If_237_0: {
           if (var66 == null) {
            phi72 = (var21) | 0;
            phi73 = var64;
            break If_237_0;
           } else {
            var67 = phi10;
            var68 = (var67.Z$equals$Ljava$lang$Object$(var64));
            if (var68 == 0) {
             phi72 = (var21) | 0;
             phi73 = var64;
             break If_237_0;
            } else {
             phi69 = (var21) | 0;
             phi70 = var64;
             break If_233_0;
            }
           }
          }
          // line number 2146
          var74 = phi12;
          If_262_0: {
           If_262_1: {
            if (var74 != null) {
             phi78 = phi12;
             break If_262_1;
            } else {
             var75 = phi10;
             // line number 2147
             var76 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(var75));
             var77 = var76;
             if (var76 == null) {
              phi78 = var77;
              break If_262_0;
             } else {
              phi78 = var77;
              break If_262_1;
             }
            }
           }
           var79 = phi78;
           var80 = phi10;
           var81 = phi73;
           // line number 2148
           var82 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var79,var80,var81))) | 0;
           var83 = (var82) | 0;
           if (var82 != 0) {
            phi12 = phi78;
            phi23 = (var83) | 0;
            phi24 = (phi72) | 0;
            break If_64_0;
           } else {
            phi84 = (var83) | 0;
            break If_262_0;
           }
          }
          // line number 2149
          var85 = (phi13) | 0;
          If_304_0: {
           if (var85 != 0) {
            phi96 = (phi13) | 0;
            break If_304_0;
           } else {
            // line number 2151
            var86 = (1) | 0;
            // line number 2152
            var87 = phi18;
            var88 = (var87.left);
            var89 = var88;
            If_322_0: {
             If_322_1: {
              if (var88 == null) {
               phi96 = (var86) | 0;
               phi98 = var89;
               break If_322_1;
              } else {
               var90 = var89;
               var91 = (phi9) | 0;
               var92 = phi10;
               var93 = phi78;
               // line number 2153
               var94 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var90,var91,var92,var93));
               var95 = var94;
               if (var94 != null) {
                phi96 = (var86) | 0;
                phi108 = var95;
                phi109 = var89;
                break If_322_0;
               } else {
                phi96 = (var86) | 0;
                phi97 = var95;
                phi98 = var89;
                break If_322_1;
               }
              }
             }
             var99 = phi18;
             var100 = (var99.right);
             var101 = var100;
             if (var100 == null) {
              phi111 = phi97;
              phi112 = var101;
              break If_304_0;
             } else {
              var102 = var101;
              var103 = (phi9) | 0;
              var104 = phi10;
              var105 = phi78;
              // line number 2155
              var106 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var102,var103,var104,var105));
              var107 = var106;
              if (var106 == null) {
               phi111 = var107;
               phi112 = var101;
               break If_304_0;
              } else {
               phi108 = var107;
               phi109 = var101;
               break If_322_0;
              }
             }
            }
            // line number 2156
            var110 = phi108;
            return var110;
           }
          }
          // line number 2158
          var113 = phi10;
          var114 = phi73;
          java$util$HashMap$TreeNode.$i;
          var115 = ((java$util$HashMap$TreeNode.I$tieBreakOrder$Ljava$lang$Object$$Ljava$lang$Object$(var113,var114))) | 0;
          phi12 = phi78;
          phi13 = (phi96) | 0;
          phi23 = (var115) | 0;
          phi24 = (phi72) | 0;
          break If_64_0;
         }
        }
        // line number 2145
        var71 = phi18;
        return var71;
       } else {
        // line number 2143
        var61 = (1) | 0;
        // Here was a goto statement
        phi23 = (var61) | 0;
        phi24 = (var21) | 0;
        break If_64_0;
       }
      } else {
       // line number 2141
       // Here was a goto statement
       phi23 = (-1) | 0;
       phi24 = (var21) | 0;
       break If_64_0;
      }
     }
     // line number 2161
     var25 = phi18;
     // line number 2162
     var26 = (phi23) | 0;
     If_82_0: {
      if (var26 > 0) {
       var58 = phi18;
       var59 = (var58.right);
       phi29 = var25;
       phi30 = var59;
       break If_82_0;
      } else {
       var27 = phi18;
       var28 = (var27.left);
       // Here was a goto statement
       phi29 = var25;
       phi30 = var28;
       break If_82_0;
      }
     }
     var31 = phi30;
     if (phi30 != null) {
      // line number 2176
      // Here was a goto statement
      phi18 = var31;
      continue L978218406;
     } else {
      // line number 2163
      var32 = phi29;
      var33 = (var32.next);
      // line number 2164
      var34 = phi7;
      var35 = (phi9) | 0;
      var36 = phi10;
      var37 = phi11;
      var38 = (java$util$HashMap.prototype.Ljava$util$HashMap$TreeNode$$newTreeNode$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(var34,var35,var36,var37,var33));
      // line number 2165
      var39 = (phi23) | 0;
      If_123_0: {
       if (var39 > 0) {
        // line number 2168
        var57 = phi29;
        var57.right = var38;
        phi41 = var31;
        phi42 = var33;
        phi43 = var38;
        break If_123_0;
       } else {
        // line number 2166
        var40 = phi29;
        var40.left = var38;
        // Here was a goto statement
        phi41 = var31;
        phi42 = var33;
        phi43 = var38;
        break If_123_0;
       }
      }
      // line number 2169
      var44 = phi29;
      var45 = phi43;
      var44.next = var45;
      // line number 2170
      var46 = phi43;
      var47 = phi43;
      var48 = phi29;
      var47.prev = var48;
      var46.parent = var48;
      // line number 2171
      var49 = phi42;
      If_157_0: {
       if (var49 == null) {
        break If_157_0;
       } else {
        // line number 2172
        var50 = phi42;
        var51 = var50;
        var52 = phi43;
        var51.prev = var52;
        break If_157_0;
       }
      }
      // line number 2173
      var53 = phi8;
      var54 = phi17;
      var55 = phi43;
      java$util$HashMap$TreeNode.$i;
      var56 = (java$util$HashMap$TreeNode.Ljava$util$HashMap$TreeNode$$balanceInsertion$Ljava$util$HashMap$TreeNode$$Ljava$util$HashMap$TreeNode$(var54,var55));
      java$util$HashMap$TreeNode.V$moveRootToFront$$Ljava$util$HashMap$Node$$Ljava$util$HashMap$TreeNode$(var53,var56);
      // line number 2174
      return null;
     }
    }
  }

  Ljava$util$HashMap$TreeNode$$root$$() {
    // source file is HashMap.java
    var var0 = null;
    var phi1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    // line number 1980
    var0 = this;
    phi1 = var0;
    L1525626537: while(true) {
     // line number 1981
     var2 = phi1;
     var3 = (var2.parent);
     var4 = var3;
     if (var3 != null) {
      // line number 1983
      var6 = var4;
      // Here was a goto statement
      phi1 = var6;
      continue L1525626537;
     } else {
      // line number 1982
      var5 = phi1;
      return var5;
     }
    }
  }

  V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$(arg0,arg1,arg2,arg3) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 1973
    var2 = (var0) | 0;
    var3 = var1;
    java$util$LinkedHashMap$Entry.prototype.V$$init$$I$Ljava$lang$Object$$Ljava$lang$Object$$Ljava$util$HashMap$Node$.call(this,var2,arg1,var3,arg3);
    // line number 1974
    return;
  }

  Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$(arg0,arg1,arg2) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var phi3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var phi16 = null;
    var phi17 = 0;
    var phi18 = null;
    var phi19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = 0;
    var phi30 = 0;
    var phi31 = null;
    var phi32 = null;
    var phi33 = null;
    var var34 = null;
    var phi35 = 0;
    var phi36 = null;
    var phi37 = null;
    var phi38 = null;
    var var39 = null;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = null;
    var var44 = null;
    var var45 = null;
    var var46 = null;
    var phi47 = null;
    var var48 = null;
    var var49 = null;
    var var50 = null;
    var var51 = 0;
    var var52 = 0;
    var var53 = null;
    var phi54 = 0;
    var phi55 = null;
    var var56 = null;
    var var57 = null;
    var phi58 = 0;
    var var59 = null;
    var var60 = 0;
    var var61 = null;
    var var62 = null;
    var var63 = null;
    var var64 = null;
    var var65 = null;
    var0 = (arg0) | 0;
    var1 = arg2;
    // line number 2018
    var2 = this;
    phi3 = (var0) | 0;
    phi4 = arg1;
    phi5 = var1;
    phi6 = var2;
    L1569579349: while(true) {
     // line number 2021
     var7 = phi6;
     var8 = (var7.left);
     var9 = phi6;
     var10 = (var9.right);
     // line number 2022
     var11 = phi6;
     var12 = ((var11.hash)) | 0;
     var13 = (var12) | 0;
     var14 = (phi3) | 0;
     If_43_0: {
      if (var12 <= var14) {
       // line number 2024
       var21 = (phi3) | 0;
       if (var13 >= var21) {
        // line number 2026
        var23 = phi6;
        var24 = (var23.key);
        var25 = var24;
        var26 = phi4;
        If_90_0: {
         if (var24 == var26) {
          phi30 = (var13) | 0;
          phi31 = var25;
          phi32 = var8;
          phi33 = var10;
          break If_90_0;
         } else {
          var27 = phi4;
          If_94_0: {
           if (var27 == null) {
            phi35 = (var13) | 0;
            phi36 = var25;
            phi37 = var8;
            phi38 = var10;
            break If_94_0;
           } else {
            var28 = phi4;
            var29 = (var28.Z$equals$Ljava$lang$Object$(var25));
            if (var29 == 0) {
             phi35 = (var13) | 0;
             phi36 = var25;
             phi37 = var8;
             phi38 = var10;
             break If_94_0;
            } else {
             phi30 = (var13) | 0;
             phi31 = var25;
             phi32 = var8;
             phi33 = var10;
             break If_90_0;
            }
           }
          }
          // line number 2028
          var39 = phi37;
          if (var39 != null) {
           // line number 2030
           var41 = phi38;
           if (var41 != null) {
            // line number 2032
            var43 = phi5;
            If_147_0: {
             If_147_1: {
              if (var43 != null) {
               phi47 = phi5;
               break If_147_1;
              } else {
               var44 = phi4;
               // line number 2033
               var45 = (java$util$HashMap.Ljava$lang$Class$$comparableClassFor$Ljava$lang$Object$(var44));
               var46 = var45;
               if (var45 == null) {
                phi47 = var46;
                break If_147_0;
               } else {
                phi47 = var46;
                break If_147_1;
               }
              }
             }
             var48 = phi47;
             var49 = phi4;
             var50 = phi36;
             // line number 2034
             var51 = ((java$util$HashMap.I$compareComparables$Ljava$lang$Class$$Ljava$lang$Object$$Ljava$lang$Object$(var48,var49,var50))) | 0;
             var52 = (var51) | 0;
             if (var51 == 0) {
              phi58 = (var52) | 0;
              break If_147_0;
             } else {
              // line number 2035
              If_185_0: {
               if (var52 >= 0) {
                var57 = phi38;
                phi54 = (var52) | 0;
                phi55 = var57;
                break If_185_0;
               } else {
                var53 = phi37;
                // Here was a goto statement
                phi54 = (var52) | 0;
                phi55 = var53;
                break If_185_0;
               }
              }
              var56 = phi55;
              // Here was a goto statement
              phi5 = phi47;
              phi16 = var56;
              phi17 = (phi35) | 0;
              phi18 = phi37;
              phi19 = phi38;
              break If_43_0;
             }
            }
            // line number 2036
            var59 = phi38;
            var60 = (phi3) | 0;
            var61 = phi4;
            var62 = phi47;
            var63 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(var59,var60,var61,var62));
            var64 = var63;
            if (var63 == null) {
             // line number 2039
             var65 = phi37;
             phi5 = phi47;
             phi16 = var65;
             phi17 = (phi35) | 0;
             phi18 = phi37;
             phi19 = phi38;
             break If_43_0;
            } else {
             // line number 2037
             return var64;
            }
           } else {
            // line number 2031
            var42 = phi37;
            // Here was a goto statement
            phi16 = var42;
            phi17 = (phi35) | 0;
            phi18 = phi37;
            phi19 = phi38;
            break If_43_0;
           }
          } else {
           // line number 2029
           var40 = phi38;
           // Here was a goto statement
           phi16 = var40;
           phi17 = (phi35) | 0;
           phi18 = phi37;
           phi19 = phi38;
           break If_43_0;
          }
         }
        }
        // line number 2027
        var34 = phi6;
        return var34;
       } else {
        // line number 2025
        var22 = var10;
        // Here was a goto statement
        phi16 = var22;
        phi17 = (var13) | 0;
        phi18 = var8;
        phi19 = var10;
        break If_43_0;
       }
      } else {
       // line number 2023
       var15 = var8;
       // Here was a goto statement
       phi16 = var15;
       phi17 = (var13) | 0;
       phi18 = var8;
       phi19 = var10;
       break If_43_0;
      }
     }
     // line number 2040
     var20 = phi16;
     if (var20 != null) {
      phi6 = phi16;
      continue L1569579349;
     } else {
      // line number 2041
      return null;
     }
    }
  }

  Ljava$util$HashMap$TreeNode$$getTreeNode$I$Ljava$lang$Object$(arg0,arg1) {
    // source file is HashMap.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = null;
    var phi7 = null;
    var var8 = 0;
    var var9 = null;
    var var10 = null;
    var0 = (arg0) | 0;
    // line number 2048
    var1 = (this.parent);
    If_11_0: {
     if (var1 == null) {
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = arg1;
      phi7 = this;
      break If_11_0;
     } else {
      var2 = this;
      var3 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$root$$.call(var2));
      // Here was a goto statement
      phi4 = this;
      phi5 = (var0) | 0;
      phi6 = arg1;
      phi7 = var3;
      break If_11_0;
     }
    }
    var8 = (phi5) | 0;
    var9 = phi6;
    var10 = (java$util$HashMap$TreeNode.prototype.Ljava$util$HashMap$TreeNode$$find$I$Ljava$lang$Object$$Ljava$lang$Class$.call(phi7,var8,var9,null));
    return var10;
  }
}


class java$nio$charset$CharacterCodingException extends java$io$IOException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$CharacterCodingException,[java$io$IOException,java$lang$Exception,java$lang$Throwable,java$lang$Object,java$nio$charset$CharacterCodingException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is CharacterCodingException.java
    // line number 50
    java$io$IOException.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$io$FileOutputStream extends java$io$OutputStream {
  nativeObject = null;

  fd = null;
  path = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$FileOutputStream,[java$lang$Object,java$io$OutputStream,java$io$Flushable,java$io$Closeable,java$lang$AutoCloseable,java$io$FileOutputStream]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$I = impl;
  }

  V$$init$$Ljava$io$FileDescriptor$(arg0) {
    // source file is FileOutputStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 58
    java$io$OutputStream.prototype.V$$init$$$.call(this);
    // line number 59
    var1 = this;
    var1.fd = var0;
    // line number 60
    var2 = this;
    var2.path = null;
    // line number 61
    return;
  }

  V$write$$B$I$I(arg0,arg1,arg2) {
    // source file is FileOutputStream.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 84
    var2 = this;
    var3 = (var2.fd);
    var4 = (arg1) | 0;
    java$io$FileOutputStream.prototype.V$writeBytes$Ljava$io$FileDescriptor$$$B$I$I.call(this,var3,var0,var4,var1);
    // line number 85
    return;
  }

  V$writeBytes$Ljava$io$FileDescriptor$$$B$I$I(arg0,arg1,arg2,arg3) {
    bytecoder.imports['java.io.FileOutputStream'].V$writeBytes$Ljava$io$FileDescriptor$$$B$I$I(this, arg0, arg1, arg2, arg3);
  }

  V$write$I(arg0) {
    // source file is FileOutputStream.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 72
    var1 = this;
    var2 = (var1.fd);
    java$io$FileOutputStream.prototype.V$writeInt$Ljava$io$FileDescriptor$$I.call(this,var2,var0);
    // line number 73
    return;
  }

  V$writeInt$Ljava$io$FileDescriptor$$I(arg0,arg1) {
    bytecoder.imports['java.io.FileOutputStream'].V$writeInt$Ljava$io$FileDescriptor$$I(this, arg0, arg1);
  }
}


class java$nio$BufferOverflowException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$BufferOverflowException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException,java$nio$BufferOverflowException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is BufferOverflowException.java
    // line number 50
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$io$OutputStreamWriter extends java$io$Writer {
  nativeObject = null;

  se = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$OutputStreamWriter,[java$io$OutputStreamWriter,java$lang$Object,java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$$C$I$I = impl;
  }

  V$$init$$Ljava$io$OutputStream$$Ljava$nio$charset$Charset$(arg0,arg1) {
    // source file is OutputStreamWriter.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var0 = arg0;
    // line number 140
    var1 = var0;
    java$io$Writer.prototype.V$$init$$Ljava$lang$Object$.call(this,var1);
    // line number 141
    if (arg1 != null) {
     // line number 143
     var4 = this;
     var5 = (java$io$OutputStreamWriter.Ljava$lang$Object$$lockFor$Ljava$io$OutputStreamWriter$(this));
     sun$nio$cs$StreamEncoder.$i;
     var6 = (sun$nio$cs$StreamEncoder.Lsun$nio$cs$StreamEncoder$$forOutputStreamWriter$Ljava$io$OutputStream$$Ljava$lang$Object$$Ljava$nio$charset$Charset$(var0,var5,arg1));
     var4.se = var6;
     // line number 144
     return;
    } else {
     // line number 142
     var2 = new java$lang$NullPointerException();
     var3 = bytecoder.stringconstants[16];
     java$lang$NullPointerException.prototype.V$$init$$Ljava$lang$String$.call(var2,var3);
     throw bytecoder.registerStack(var2, new Error().stack);
    }
  }

  static Ljava$lang$Object$$lockFor$Ljava$io$OutputStreamWriter$(arg0) {
    // source file is OutputStreamWriter.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    // line number 85
    var0 = ((arg0).constructor.$rt);
    // line number 86
    If_11_0: {
     if (var0 == java$io$OutputStreamWriter.$rt) {
      phi2 = arg0;
      phi3 = var0;
      break If_11_0;
     } else {
      var1 = var0;
      if (var1 != java$io$FileWriter.$rt) {
       // line number 89
       return arg0;
      } else {
       phi2 = arg0;
       phi3 = var0;
       break If_11_0;
      }
     }
    }
    // line number 87
    var4 = phi2;
    jdk$internal$misc$InternalLock.$i;
    var5 = (jdk$internal$misc$InternalLock.Ljava$lang$Object$$newLockOr$Ljava$lang$Object$(var4));
    return var5;
  }

  V$flushBuffer$$() {
    // source file is OutputStreamWriter.java
    var var0 = null;
    // line number 193
    var0 = (this.se);
    sun$nio$cs$StreamEncoder.prototype.V$flushBuffer$$.call(var0);
    // line number 194
    return;
  }

  V$write$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is OutputStreamWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 238
    var2 = (this.se);
    var3 = (arg1) | 0;
    sun$nio$cs$StreamEncoder.prototype.V$write$Ljava$lang$String$$I$I.call(var2,var0,var3,var1);
    // line number 239
    return;
  }

  V$write$$C$I$I(arg0,arg1,arg2) {
    // source file is OutputStreamWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 220
    var2 = (this.se);
    var3 = (arg1) | 0;
    sun$nio$cs$StreamEncoder.prototype.V$write$$C$I$I.call(var2,var0,var3,var1);
    // line number 221
    return;
  }
}


class java$nio$BufferUnderflowException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$BufferUnderflowException,[java$lang$Exception,java$nio$BufferUnderflowException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is BufferUnderflowException.java
    // line number 50
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$util$ImmutableCollections$AbstractImmutableCollection extends java$util$AbstractCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$AbstractImmutableCollection,[java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ImmutableCollections.java
    // line number 145
    java$util$AbstractCollection.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$lang$NullPointerException extends java$lang$RuntimeException {
  nativeObject = null;

  extendedMessageState = 0;
  extendedMessage = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$NullPointerException,[java$lang$NullPointerException,java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is NullPointerException.java
    // line number 59
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 60
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is NullPointerException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 69
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 70
    return;
  }

  Ljava$lang$String$$getMessage$$() {
    // source file is NullPointerException.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    // line number 110
    var0 = (java$lang$RuntimeException.prototype.Ljava$lang$String$$getMessage$$.call(this));
    // line number 111
    if (var0 != null) {
     // line number 122
     return var0;
    } else {
     // line number 112
     var1 = this;
     // Monitor enter on this
     phi2 = this;
     phi3 = var1;
     TryCatch_18_0: {
      try {
       // line number 113
       var5 = phi2;
       var6 = ((var5.extendedMessageState)) | 0;
       If_35_0: {
        if (var6 != 1) {
         break If_35_0;
        } else {
         // line number 116
         var7 = phi2;
         var8 = phi2;
         var9 = (java$lang$NullPointerException.prototype.Ljava$lang$String$$getExtendedNPEMessage$$.call(var8));
         var7.extendedMessage = var9;
         // line number 117
         var10 = phi2;
         var10.extendedMessageState = 2;
         break If_35_0;
        }
       }
       // line number 119
       var11 = phi2;
       var12 = (var11.extendedMessage);
       var13 = phi3;
       // Monitor exit on var13
       break TryCatch_18_0;
      } catch (__ex) {
       if (__ex instanceof java$lang$Throwable) {
        TryCatch_19_0: {
         // line number 120
         var4 = phi3;
         // Monitor exit on var4
         break TryCatch_19_0;
        }
        throw bytecoder.registerStack(__ex, new Error().stack);
       }
       throw __ex;
      }
     }
     return var12;
    }
  }

  Ljava$lang$String$$getExtendedNPEMessage$$() {
    return bytecoder.imports['java.lang.NullPointerException'].Ljava$lang$String$$getExtendedNPEMessage$$(this);
  }
}


class java$lang$InternalError extends java$lang$VirtualMachineError {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$InternalError,[java$lang$VirtualMachineError,java$lang$Throwable,java$lang$Object,java$lang$Error,java$lang$InternalError]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is InternalError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 51
    var1 = var0;
    java$lang$VirtualMachineError.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 52
    return;
  }

  V$$init$$$() {
    // source file is InternalError.java
    // line number 41
    java$lang$VirtualMachineError.prototype.V$$init$$$.call(this);
    // line number 42
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is InternalError.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 86
    var1 = var0;
    java$lang$VirtualMachineError.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 87
    return;
  }
}


class java$util$AbstractSet extends java$util$AbstractCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractSet,[java$lang$Iterable,java$lang$Object,java$util$Set,java$util$AbstractCollection,java$util$Collection,java$util$AbstractSet]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is AbstractSet.java
    // line number 63
    java$util$AbstractCollection.prototype.V$$init$$$.call(this);
    // line number 64
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is AbstractSet.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var0 = arg0;
    // line number 86
    var1 = this;
    if (var0 != var1) {
     // line number 89
     var2 = (bytecoder.instanceOf(var0,java$util$Set)) | 0;
     if (var2 != 0) {
      // line number 91
      var3 = var0;
      // line number 92
      var4 = ((var3.I$size$$())) | 0;
      var5 = ((this.I$size$$())) | 0;
      if (var4 == var5) {
       phi6 = this;
       phi7 = var3;
       TryCatch_51_0: {
        try {
         // line number 95
         var8 = phi6;
         var9 = phi7;
         var10 = (var8.Z$containsAll$Ljava$util$Collection$(var9));
         break TryCatch_51_0;
        } catch (__ex) {
         if (__ex instanceof java$lang$ClassCastException) {
          // line number 96
          // line number 97
          return 0;
         }
         if (__ex instanceof java$lang$NullPointerException) {
          // line number 96
          // line number 97
          return 0;
         }
         throw __ex;
        }
       }
       return var10;
      } else {
       // line number 93
       return 0;
      }
     } else {
      // line number 90
      return 0;
     }
    } else {
     // line number 87
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is AbstractSet.java
    var var0 = null;
    var phi1 = 0;
    var phi2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var phi10 = 0;
    var phi11 = null;
    var var12 = 0;
    // line number 119
    // line number 120
    var0 = (this.Ljava$util$Iterator$$iterator$$());
    phi1 = (0) | 0;
    phi2 = var0;
    L881930: while(true) {
     // line number 121
     var3 = phi2;
     var4 = (var3.Z$hasNext$$());
     if (var4 == 0) {
      // line number 126
      var12 = (phi1) | 0;
      return var12;
     } else {
      // line number 122
      var5 = phi2;
      var6 = (var5.Ljava$lang$Object$$next$$());
      // line number 123
      If_32_0: {
       if (var6 == null) {
        phi10 = (phi1) | 0;
        phi11 = var6;
        break If_32_0;
       } else {
        // line number 124
        var7 = (phi1) | 0;
        var8 = ((var6.I$hashCode$$())) | 0;
        var9 = ((var7 + var8)) | 0;
        phi10 = (var9) | 0;
        phi11 = var6;
        break If_32_0;
       }
      }
      // line number 125
      // Here was a goto statement
      phi1 = (phi10) | 0;
      continue L881930;
     }
    }
  }
}


class java$lang$IllegalArgumentException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$IllegalArgumentException,[java$lang$Exception,java$lang$IllegalArgumentException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is IllegalArgumentException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 50
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 51
    return;
  }

  V$$init$$$() {
    // source file is IllegalArgumentException.java
    // line number 40
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 41
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is IllegalArgumentException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 88
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 89
    return;
  }
}


class java$io$BufferedWriter extends java$io$Writer {
  nativeObject = null;

  out = null;
  cb = null;
  nChars = 0;
  maxChars = 0;
  nextChar = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$BufferedWriter,[java$lang$Object,java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable,java$io$BufferedWriter]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$$C$I$I = impl;
  }

  V$$init$$Ljava$io$Writer$(arg0) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var0 = arg0;
    // line number 113
    var1 = var0;
    var2 = ((java$io$BufferedWriter.I$initialBufferSize$$())) | 0;
    java$io$BufferedWriter.prototype.V$$init$$Ljava$io$Writer$$I$I.call(this,var1,var2,8192);
    // line number 114
    return;
  }

  static I$initialBufferSize$$() {
    // source file is BufferedWriter.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    // line number 84
    jdk$internal$misc$VM.$i;
    var0 = (jdk$internal$misc$VM.Z$isBooted$$());
    If_8_0: {
     if (var0 == 0) {
      break If_8_0;
     } else {
      var1 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
      var2 = (java$lang$Thread.prototype.Z$isVirtual$$.call(var1));
      if (var2 == 0) {
       break If_8_0;
      } else {
       // line number 85
       return 512;
      }
     }
    }
    // line number 87
    return 8192;
  }

  V$$init$$Ljava$io$Writer$$I$I(arg0,arg1,arg2) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 95
    var2 = var0;
    java$io$Writer.prototype.V$$init$$Ljava$io$Writer$.call(this,var2);
    // line number 96
    if (arg1 > 0) {
     // line number 100
     var5 = this;
     var5.out = var0;
     // line number 101
     var6 = this;
     var7 = bytecoder.newarray((arg1),0);
     var6.cb = var7;
     // line number 102
     var8 = this;
     var8.nChars = arg1;
     // line number 103
     var9 = this;
     var9.maxChars = var1;
     // line number 104
     return;
    } else {
     // line number 97
     var3 = new java$lang$IllegalArgumentException();
     var4 = bytecoder.stringconstants[44];
     java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var3,var4);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  V$newLine$$() {
    // source file is BufferedWriter.java
    var var0 = null;
    // line number 346
    java$lang$System.$i;
    var0 = (java$lang$System.Ljava$lang$String$$lineSeparator$$());
    this.V$write$Ljava$lang$String$(var0);
    // line number 347
    return;
  }

  V$flushBuffer$$() {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var phi6 = null;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    // line number 159
    var0 = (this.lock);
    // line number 160
    var1 = (bytecoder.instanceOf(var0,jdk$internal$misc$InternalLock)) | 0;
    If_13_0: {
     if (var1 == 0) {
      // line number 168
      var10 = var0;
      // Monitor enter on var0
      phi11 = this;
      phi12 = var0;
      phi13 = var10;
      TryCatch_66_0: {
       try {
        // line number 169
        var15 = phi11;
        java$io$BufferedWriter.prototype.V$implFlushBuffer$$.call(var15);
        // line number 170
        var16 = phi13;
        // Monitor exit on var16
        break TryCatch_66_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_67_0: {
          var14 = phi13;
          // Monitor exit on var14
          break TryCatch_67_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi4 = phi11;
      phi5 = phi12;
      break If_13_0;
     } else {
      var2 = var0;
      var3 = var2;
      // line number 161
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var3);
      phi4 = this;
      phi5 = var0;
      phi6 = var3;
      TryCatch_27_0: {
       try {
        // line number 163
        var8 = phi4;
        java$io$BufferedWriter.prototype.V$implFlushBuffer$$.call(var8);
        break TryCatch_27_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         // line number 165
         var7 = phi6;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var7);
         // line number 166
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 165
      var9 = phi6;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var9);
      // line number 166
      // Here was a goto statement
      // Here was a goto statement
      break If_13_0;
     }
    }
    // line number 172
    return;
  }

  V$implFlushBuffer$$() {
    // source file is BufferedWriter.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    // line number 175
    java$io$BufferedWriter.prototype.V$ensureOpen$$.call(this);
    // line number 176
    var0 = ((this.nextChar)) | 0;
    if (var0 != 0) {
     // line number 178
     var1 = (this.out);
     var2 = (this.cb);
     var3 = this;
     var4 = ((var3.nextChar)) | 0;
     var1.V$write$$C$I$I(var2,0,var4);
     // line number 179
     var5 = this;
     var5.nextChar = 0;
     // line number 180
     return;
    } else {
     // line number 177
     return;
    }
  }

  V$ensureOpen$$() {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 131
    var0 = (this.out);
    if (var0 != null) {
     // line number 133
     return;
    } else {
     // line number 132
     var1 = new java$io$IOException();
     var2 = bytecoder.stringconstants[47];
     java$io$IOException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$write$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = null;
    var phi24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 309
    var2 = (this.lock);
    // line number 310
    var3 = (bytecoder.instanceOf(var2,jdk$internal$misc$InternalLock)) | 0;
    If_20_0: {
     if (var3 == 0) {
      // line number 318
      var18 = var2;
      // Monitor enter on var2
      phi19 = this;
      phi20 = var0;
      phi21 = (arg1) | 0;
      phi22 = (var1) | 0;
      phi23 = var2;
      phi24 = var18;
      TryCatch_86_0: {
       try {
        // line number 319
        var26 = phi19;
        var27 = phi20;
        var28 = (phi21) | 0;
        var29 = (phi22) | 0;
        java$io$BufferedWriter.prototype.V$implWrite$Ljava$lang$String$$I$I.call(var26,var27,var28,var29);
        // line number 320
        var30 = phi24;
        // Monitor exit on var30
        break TryCatch_86_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_87_0: {
          var25 = phi24;
          // Monitor exit on var25
          break TryCatch_87_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi6 = phi19;
      phi7 = phi20;
      phi8 = (phi21) | 0;
      phi9 = (phi22) | 0;
      phi10 = phi23;
      break If_20_0;
     } else {
      var4 = var2;
      var5 = var4;
      // line number 311
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var5);
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      phi10 = var2;
      phi11 = var5;
      TryCatch_37_0: {
       try {
        // line number 313
        var13 = phi6;
        var14 = phi7;
        var15 = (phi8) | 0;
        var16 = (phi9) | 0;
        java$io$BufferedWriter.prototype.V$implWrite$Ljava$lang$String$$I$I.call(var13,var14,var15,var16);
        break TryCatch_37_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_38_0: {
          // line number 315
          break TryCatch_38_0;
         }
         var12 = phi11;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var12);
         // line number 316
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 315
      var17 = phi11;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var17);
      // line number 316
      // Here was a goto statement
      // Here was a goto statement
      break If_20_0;
     }
    }
    // line number 322
    return;
  }

  V$implWrite$Ljava$lang$String$$I$I(arg0,arg1,arg2) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = 0;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = 0;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var var31 = 0;
    var var32 = 0;
    var var33 = null;
    var var34 = 0;
    var var35 = null;
    var var36 = 0;
    var var37 = null;
    var phi38 = 0;
    var phi39 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 325
    java$io$BufferedWriter.prototype.V$ensureOpen$$.call(this);
    // line number 326
    java$io$BufferedWriter.prototype.V$growIfNeeded$I.call(this,var1);
    // line number 327
    var2 = ((arg1 + var1)) | 0;
    phi3 = this;
    phi4 = var0;
    phi5 = (var1) | 0;
    phi6 = (arg1) | 0;
    phi7 = (var2) | 0;
    L1960700193: while(true) {
     // line number 328
     var8 = (phi6) | 0;
     var9 = (phi7) | 0;
     if (var8 >= var9) {
      // line number 336
      return;
     } else {
      // line number 329
      var10 = phi3;
      var11 = phi3;
      var12 = ((var11.nChars)) | 0;
      var13 = phi3;
      var14 = ((var13.nextChar)) | 0;
      var15 = ((var12 - var14)) | 0;
      var16 = (phi7) | 0;
      var17 = (phi6) | 0;
      var18 = ((var16 - var17)) | 0;
      var19 = ((java$io$BufferedWriter.prototype.I$min$I$I.call(var10,var15,var18))) | 0;
      // line number 330
      var20 = phi4;
      var21 = (phi6) | 0;
      var22 = (phi6) | 0;
      var23 = ((var22 + var19)) | 0;
      var24 = phi3;
      var25 = (var24.cb);
      var26 = phi3;
      var27 = ((var26.nextChar)) | 0;
      java$lang$String.prototype.V$getChars$I$I$$C$I.call(var20,var21,var23,var25,var27);
      // line number 331
      var28 = (phi6) | 0;
      var29 = ((var28 + var19)) | 0;
      // line number 332
      var30 = phi3;
      var31 = ((var30.nextChar)) | 0;
      var32 = ((var31 + var19)) | 0;
      var30.nextChar = var32;
      // line number 333
      var33 = phi3;
      var34 = ((var33.nextChar)) | 0;
      var35 = phi3;
      var36 = ((var35.nChars)) | 0;
      If_114_0: {
       if (var34 < var36) {
        phi38 = (var29) | 0;
        phi39 = (var19) | 0;
        break If_114_0;
       } else {
        // line number 334
        var37 = phi3;
        java$io$BufferedWriter.prototype.V$flushBuffer$$.call(var37);
        phi38 = (var29) | 0;
        phi39 = (var19) | 0;
        break If_114_0;
       }
      }
      // line number 335
      // Here was a goto statement
      phi6 = (phi38) | 0;
      continue L1960700193;
     }
    }
  }

  V$growIfNeeded$I(arg0) {
    // source file is BufferedWriter.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var0 = (arg0) | 0;
    // line number 143
    var1 = ((this.nextChar)) | 0;
    var2 = ((var1 + var0)) | 0;
    var3 = ((var2 + 1)) | 0;
    // line number 144
    If_19_0: {
     if (var3 >= 0) {
      phi5 = this;
      phi6 = (var0) | 0;
      phi7 = (var3) | 0;
      break If_19_0;
     } else {
      // line number 145
      var4 = (2147483647) | 0;
      phi5 = this;
      phi6 = (var0) | 0;
      phi7 = (var4) | 0;
      break If_19_0;
     }
    }
    // line number 146
    var8 = (phi7) | 0;
    var9 = phi5;
    var10 = ((var9.nChars)) | 0;
    If_40_0: {
     if (var8 <= var10) {
      break If_40_0;
     } else {
      var11 = phi5;
      var12 = ((var11.nChars)) | 0;
      var13 = phi5;
      var14 = ((var13.maxChars)) | 0;
      if (var12 >= var14) {
       break If_40_0;
      } else {
       // line number 147
       var15 = phi5;
       var16 = (phi7) | 0;
       var17 = phi5;
       var18 = ((var17.maxChars)) | 0;
       var19 = ((java$io$BufferedWriter.prototype.I$min$I$I.call(var15,var16,var18))) | 0;
       // line number 148
       var20 = phi5;
       var21 = phi5;
       var22 = (var21.cb);
       java$util$Arrays.$i;
       var23 = (java$util$Arrays.$C$copyOf$$C$I(var22,var19));
       var20.cb = var23;
       // line number 149
       var24 = phi5;
       var24.nChars = var19;
       break If_40_0;
      }
     }
    }
    // line number 151
    return;
  }

  I$min$I$I(arg0,arg1) {
    // source file is BufferedWriter.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var0 = (arg0) | 0;
    // line number 216
    var1 = (arg1) | 0;
    if (var0 >= var1) {
     // line number 217
     return arg1;
    } else {
     var2 = (var0) | 0;
     return var2;
    }
  }

  V$write$$C$I$I(arg0,arg1,arg2) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var phi10 = null;
    var phi11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var phi19 = null;
    var phi20 = null;
    var phi21 = 0;
    var phi22 = 0;
    var phi23 = null;
    var phi24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = 0;
    var var29 = 0;
    var var30 = null;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 242
    var2 = (this.lock);
    // line number 243
    var3 = (bytecoder.instanceOf(var2,jdk$internal$misc$InternalLock)) | 0;
    If_20_0: {
     if (var3 == 0) {
      // line number 251
      var18 = var2;
      // Monitor enter on var2
      phi19 = this;
      phi20 = var0;
      phi21 = (arg1) | 0;
      phi22 = (var1) | 0;
      phi23 = var2;
      phi24 = var18;
      TryCatch_86_0: {
       try {
        // line number 252
        var26 = phi19;
        var27 = phi20;
        var28 = (phi21) | 0;
        var29 = (phi22) | 0;
        java$io$BufferedWriter.prototype.V$implWrite$$C$I$I.call(var26,var27,var28,var29);
        // line number 253
        var30 = phi24;
        // Monitor exit on var30
        break TryCatch_86_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_87_0: {
          var25 = phi24;
          // Monitor exit on var25
          break TryCatch_87_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi6 = phi19;
      phi7 = phi20;
      phi8 = (phi21) | 0;
      phi9 = (phi22) | 0;
      phi10 = phi23;
      break If_20_0;
     } else {
      var4 = var2;
      var5 = var4;
      // line number 244
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var5);
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      phi10 = var2;
      phi11 = var5;
      TryCatch_37_0: {
       try {
        // line number 246
        var13 = phi6;
        var14 = phi7;
        var15 = (phi8) | 0;
        var16 = (phi9) | 0;
        java$io$BufferedWriter.prototype.V$implWrite$$C$I$I.call(var13,var14,var15,var16);
        break TryCatch_37_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_38_0: {
          // line number 248
          break TryCatch_38_0;
         }
         var12 = phi11;
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var12);
         // line number 249
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 248
      var17 = phi11;
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var17);
      // line number 249
      // Here was a goto statement
      // Here was a goto statement
      break If_20_0;
     }
    }
    // line number 255
    return;
  }

  V$implWrite$$C$I$I(arg0,arg1,arg2) {
    // source file is BufferedWriter.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var var7 = 0;
    var var8 = 0;
    var var9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = 0;
    var phi13 = 0;
    var phi14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var var23 = 0;
    var var24 = 0;
    var var25 = 0;
    var var26 = 0;
    var var27 = null;
    var var28 = 0;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = 0;
    var var33 = 0;
    var var34 = 0;
    var var35 = null;
    var var36 = 0;
    var var37 = 0;
    var var38 = null;
    var var39 = 0;
    var var40 = null;
    var var41 = 0;
    var var42 = null;
    var phi43 = 0;
    var phi44 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 258
    java$io$BufferedWriter.prototype.V$ensureOpen$$.call(this);
    // line number 259
    var2 = (var1) | 0;
    var3 = (var0.data.length) | 0;
    var4 = ((java$util$Objects.I$checkFromIndexSize$I$I$I(arg1,var2,var3))) | 0;
    // line number 260
    if (var1 != 0) {
     // line number 264
     var5 = ((this.maxChars)) | 0;
     if (var1 < var5) {
      // line number 273
      var8 = (var1) | 0;
      java$io$BufferedWriter.prototype.V$growIfNeeded$I.call(this,var8);
      // line number 274
      var9 = ((arg1 + var1)) | 0;
      phi10 = this;
      phi11 = var0;
      phi12 = (var1) | 0;
      phi13 = (arg1) | 0;
      phi14 = (var9) | 0;
      L701855966: while(true) {
       // line number 275
       var15 = (phi13) | 0;
       var16 = (phi14) | 0;
       if (var15 >= var16) {
        // line number 284
        return;
       } else {
        // line number 276
        var17 = phi10;
        var18 = phi10;
        var19 = ((var18.nChars)) | 0;
        var20 = phi10;
        var21 = ((var20.nextChar)) | 0;
        var22 = ((var19 - var21)) | 0;
        var23 = (phi14) | 0;
        var24 = (phi13) | 0;
        var25 = ((var23 - var24)) | 0;
        var26 = ((java$io$BufferedWriter.prototype.I$min$I$I.call(var17,var22,var25))) | 0;
        // line number 277
        var27 = phi11;
        var28 = (phi13) | 0;
        var29 = phi10;
        var30 = (var29.cb);
        var31 = phi10;
        var32 = ((var31.nextChar)) | 0;
        java$lang$System.V$arraycopy$$C$I$$C$I$I(var27,var28,var30,var32,var26);
        // line number 278
        var33 = (phi13) | 0;
        var34 = ((var33 + var26)) | 0;
        // line number 279
        var35 = phi10;
        var36 = ((var35.nextChar)) | 0;
        var37 = ((var36 + var26)) | 0;
        var35.nextChar = var37;
        // line number 280
        var38 = phi10;
        var39 = ((var38.nextChar)) | 0;
        var40 = phi10;
        var41 = ((var40.nChars)) | 0;
        If_155_0: {
         if (var39 < var41) {
          phi43 = (var34) | 0;
          phi44 = (var26) | 0;
          break If_155_0;
         } else {
          // line number 281
          var42 = phi10;
          java$io$BufferedWriter.prototype.V$flushBuffer$$.call(var42);
          phi43 = (var34) | 0;
          phi44 = (var26) | 0;
          break If_155_0;
         }
        }
        // line number 283
        // Here was a goto statement
        phi13 = (phi43) | 0;
        continue L701855966;
       }
      }
     } else {
      // line number 268
      java$io$BufferedWriter.prototype.V$flushBuffer$$.call(this);
      // line number 269
      var6 = (this.out);
      var7 = (var1) | 0;
      var6.V$write$$C$I$I(var0,arg1,var7);
      // line number 270
      return;
     }
    } else {
     // line number 261
     return;
    }
  }
}


class java$util$AbstractList extends java$util$AbstractCollection {
  nativeObject = null;

  modCount = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$AbstractList,[java$util$AbstractList,java$util$List,java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is AbstractList.java
    var var0 = null;
    // line number 80
    java$util$AbstractCollection.prototype.V$$init$$$.call(this);
    // line number 630
    var0 = this;
    var0.modCount = 0;
    // line number 81
    return;
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    // source file is AbstractList.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var0 = arg0;
    // line number 187
    var1 = (this.Ljava$util$ListIterator$$listIterator$$());
    // line number 188
    If_12_0: {
     if (var0 != null) {
      phi11 = this;
      phi12 = var0;
      phi13 = var1;
      L339059192: while(true) {
       // line number 193
       var14 = phi13;
       var15 = (var14.Z$hasNext$$());
       if (var15 == 0) {
        phi2 = phi11;
        phi3 = phi12;
        phi4 = phi13;
        break If_12_0;
       } else {
        // line number 194
        var16 = phi12;
        var17 = phi13;
        var18 = (var17.Ljava$lang$Object$$next$$());
        var19 = (var16.Z$equals$Ljava$lang$Object$(var18));
        if (var19 == 0) {
         continue L339059192;
        } else {
         // line number 195
         var20 = phi13;
         var21 = ((var20.I$previousIndex$$())) | 0;
         return var21;
        }
       }
      }
     } else {
      phi2 = this;
      phi3 = var0;
      phi4 = var1;
      L1874961761: while(true) {
       // line number 189
       var5 = phi4;
       var6 = (var5.Z$hasNext$$());
       if (var6 == 0) {
        break If_12_0;
       } else {
        // line number 190
        var7 = phi4;
        var8 = (var7.Ljava$lang$Object$$next$$());
        if (var8 != null) {
         continue L1874961761;
        } else {
         // line number 191
         var9 = phi4;
         var10 = ((var9.I$previousIndex$$())) | 0;
         return var10;
        }
       }
      }
     }
    }
    // line number 197
    return -1;
  }

  Ljava$util$ListIterator$$listIterator$$() {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = null;
    // line number 313
    var0 = (0) | 0;
    var1 = (java$util$AbstractList.prototype.Ljava$util$ListIterator$$listIterator$I.call(this,var0));
    return var1;
  }

  Ljava$util$ListIterator$$listIterator$I(arg0) {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var0 = (arg0) | 0;
    // line number 340
    var1 = (var0) | 0;
    java$util$AbstractList.prototype.V$rangeCheckForAdd$I.call(this,var1);
    // line number 342
    var2 = new java$util$AbstractList$ListItr();
    var3 = this;
    java$util$AbstractList$ListItr.prototype.V$$init$$Ljava$util$AbstractList$$I.call(var2,var3,var0);
    return var2;
  }

  V$rangeCheckForAdd$I(arg0) {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    var var5 = null;
    var var6 = null;
    var var7 = 0;
    var var8 = null;
    var0 = (arg0) | 0;
    // line number 633
    If_7_0: {
     if (var0 < 0) {
      phi3 = this;
      phi4 = (var0) | 0;
      break If_7_0;
     } else {
      var1 = (var0) | 0;
      var2 = ((this.I$size$$())) | 0;
      if (var1 <= var2) {
       // line number 635
       return;
      } else {
       phi3 = this;
       phi4 = (var0) | 0;
       break If_7_0;
      }
     }
    }
    // line number 634
    var5 = new java$lang$IndexOutOfBoundsException();
    var6 = phi3;
    var7 = (phi4) | 0;
    var8 = (java$util$AbstractList.prototype.Ljava$lang$String$$outOfBoundsMsg$I.call(var6,var7));
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var5,var8);
    throw bytecoder.registerStack(var5, new Error().stack);
  }

  Ljava$lang$String$$outOfBoundsMsg$I(arg0) {
    // source file is AbstractList.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var var7 = null;
    var0 = (arg0) | 0;
    // line number 638
    var1 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var1);
    var2 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var1,bytecoder.stringconstants[88]));
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var2,var0));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var3,bytecoder.stringconstants[102]));
    var5 = ((this.I$size$$())) | 0;
    var6 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var4,var5));
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var6));
    return var7;
  }
}


class java$util$ImmutableCollections$MapN extends java$util$ImmutableCollections$AbstractImmutableMap {
  nativeObject = null;

  size = 0;
  table = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$MapN,[java$util$ImmutableCollections$MapN,java$util$ImmutableCollections$AbstractImmutableMap,java$lang$Object,java$util$AbstractMap,java$io$Serializable,java$util$Map]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = 0;
    var var8 = null;
    var var9 = 0;
    var var10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var phi16 = null;
    var phi17 = null;
    var phi18 = 0;
    var var19 = 0;
    var var20 = null;
    var var21 = 0;
    var var22 = null;
    var var23 = 0;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = 0;
    var var28 = 0;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = 0;
    var var33 = null;
    var var34 = null;
    var var35 = null;
    var var36 = null;
    var var37 = null;
    var var38 = 0;
    var var39 = 0;
    var var40 = null;
    var var41 = null;
    var var42 = null;
    var var43 = null;
    var var44 = null;
    var var45 = 0;
    var0 = arg0;
    // line number 1172
    java$util$ImmutableCollections$AbstractImmutableMap.prototype.V$$init$$$.call(this);
    // line number 1173
    var1 = (var0.data.length) | 0;
    var2 = ((var1 & 1)) | 0;
    if (var2 == 0) {
     // line number 1176
     var5 = this;
     var6 = (var0.data.length) | 0;
     var7 = ((var6 >> 1)) | 0;
     var5.size = var7;
     // line number 1178
     var8 = var0;
     var9 = (var8.data.length) | 0;
     var10 = ((2 * var9)) | 0;
     // line number 1179
     var11 = ((var10 + 1)) | 0;
     var12 = ((var11 & -2)) | 0;
     // line number 1180
     var13 = this;
     var14 = bytecoder.newarray((var12),null);
     var13.table = var14;
     // line number 1182
     var15 = (0) | 0;
     phi16 = this;
     phi17 = var0;
     phi18 = (var15) | 0;
     L1730752455: while(true) {
      var19 = (phi18) | 0;
      var20 = phi17;
      var21 = (var20.data.length) | 0;
      if (var19 >= var21) {
       // line number 1196
       return;
      } else {
       // line number 1184
       var22 = phi17;
       var23 = (phi18) | 0;
       var24 = (var22.data[var23]);
       var25 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var24));
       // line number 1186
       var26 = phi17;
       var27 = (phi18) | 0;
       var28 = ((var27 + 1)) | 0;
       var29 = (var26.data[var28]);
       var30 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var29));
       // line number 1187
       var31 = phi16;
       var32 = ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(var31,var25))) | 0;
       // line number 1188
       if (var32 < 0) {
        // line number 1191
        var38 = ((var32 + 1)) | 0;
        var39 = ((0 - var38)) | 0;
        // line number 1192
        var40 = phi16;
        var41 = (var40.table);
        var42 = var25;
        var41.data[var39] = var42;
        // line number 1193
        var43 = phi16;
        var44 = (var43.table);
        var45 = ((var39 + 1)) | 0;
        var44.data[var45] = var30;
        // line number 1182
        phi18 = ((phi18 + 2)) | 0;
        // Here was a goto statement
        continue L1730752455;
       } else {
        // line number 1189
        var33 = new java$lang$IllegalArgumentException();
        var34 = new java$lang$StringBuilder();
        java$lang$StringBuilder.prototype.V$$init$$$.call(var34);
        var35 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var34,bytecoder.stringconstants[58]));
        var36 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var35,var25));
        var37 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var36));
        java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var33,var37);
        throw bytecoder.registerStack(var33, new Error().stack);
       }
      }
     }
    } else {
     // line number 1174
     var3 = new java$lang$InternalError();
     var4 = bytecoder.stringconstants[57];
     java$lang$InternalError.prototype.V$$init$$Ljava$lang$String$.call(var3,var4);
     throw bytecoder.registerStack(var3, new Error().stack);
    }
  }

  I$probe$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = 0;
    var var6 = 0;
    var phi7 = null;
    var phi8 = null;
    var phi9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = 0;
    var phi24 = 0;
    var phi25 = null;
    var0 = arg0;
    // line number 1321
    var1 = ((var0.I$hashCode$$())) | 0;
    var2 = (this.table);
    var3 = (var2.data.length) | 0;
    var4 = ((var3 >> 1)) | 0;
    java$lang$Math.$i;
    var5 = ((java$lang$Math.I$floorMod$I$I(var1,var4))) | 0;
    var6 = ((var5 << 1)) | 0;
    phi7 = this;
    phi8 = var0;
    phi9 = (var6) | 0;
    L1318272241: while(true) {
     // line number 1324
     var10 = phi7;
     var11 = (var10.table);
     var12 = (phi9) | 0;
     var13 = (var11.data[var12]);
     // line number 1325
     if (var13 != null) {
      // line number 1327
      var17 = phi8;
      var18 = (var17.Z$equals$Ljava$lang$Object$(var13));
      if (var18 == 0) {
       // line number 1329
       phi9 = ((phi9 + 2)) | 0;
       var20 = (phi9) | 0;
       var21 = phi7;
       var22 = (var21.table);
       var23 = (var22.data.length) | 0;
       If_93_0: {
        if (var20 != var23) {
         phi24 = (phi9) | 0;
         phi25 = var13;
         break If_93_0;
        } else {
         // line number 1330
         phi24 = (0) | 0;
         phi25 = var13;
         break If_93_0;
        }
       }
       // line number 1332
       // Here was a goto statement
       phi9 = (phi24) | 0;
       continue L1318272241;
      } else {
       // line number 1328
       var19 = (phi9) | 0;
       return var19;
      }
     } else {
      // line number 1326
      var14 = (phi9) | 0;
      var15 = ((0 - var14)) | 0;
      var16 = ((var15 - 1)) | 0;
      return var16;
     }
    }
  }

  Ljava$lang$Object$$get$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var0 = arg0;
    // line number 1231
    var1 = ((this.size)) | 0;
    if (var1 != 0) {
     // line number 1235
     var3 = var0;
     var4 = ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(this,var3))) | 0;
     // line number 1236
     if (var4 < 0) {
      // line number 1239
      return null;
     } else {
      // line number 1237
      var5 = (this.table);
      var6 = ((var4 + 1)) | 0;
      var7 = (var5.data[var6]);
      return var7;
     }
    } else {
     // line number 1232
     var2 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
     // line number 1233
     return null;
    }
  }

  I$hashCode$$() {
    // source file is ImmutableCollections.java
    var phi0 = null;
    var phi1 = 0;
    var phi2 = 0;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var var20 = 0;
    var phi21 = 0;
    var phi22 = null;
    var var23 = 0;
    // line number 1218
    // line number 1219
    phi0 = this;
    phi1 = (0) | 0;
    phi2 = (0) | 0;
    L1261182143: while(true) {
     var3 = (phi2) | 0;
     var4 = phi0;
     var5 = (var4.table);
     var6 = (var5.data.length) | 0;
     if (var3 >= var6) {
      // line number 1225
      var23 = (phi1) | 0;
      return var23;
     } else {
      // line number 1220
      var7 = phi0;
      var8 = (var7.table);
      var9 = (phi2) | 0;
      var10 = (var8.data[var9]);
      // line number 1221
      If_39_0: {
       if (var10 == null) {
        phi21 = (phi1) | 0;
        phi22 = var10;
        break If_39_0;
       } else {
        // line number 1222
        var11 = (phi1) | 0;
        var12 = ((var10.I$hashCode$$())) | 0;
        var13 = phi0;
        var14 = (var13.table);
        var15 = (phi2) | 0;
        var16 = ((var15 + 1)) | 0;
        var17 = (var14.data[var16]);
        var18 = ((var17.I$hashCode$$())) | 0;
        var19 = ((var12 ^ var18)) | 0;
        var20 = ((var11 + var19)) | 0;
        phi21 = (var20) | 0;
        phi22 = var10;
        break If_39_0;
       }
      }
      // line number 1219
      phi2 = ((phi2 + 2)) | 0;
      // Here was a goto statement
      phi1 = (phi21) | 0;
      continue L1261182143;
     }
    }
  }

  I$size$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    // line number 1245
    var0 = ((this.size)) | 0;
    return var0;
  }

  Z$containsKey$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = null;
    var0 = arg0;
    // line number 1200
    var1 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    // line number 1201
    var2 = ((this.size)) | 0;
    If_17_0: {
     If_17_1: {
      if (var2 <= 0) {
       phi9 = this;
       phi10 = var0;
       break If_17_1;
      } else {
       var3 = this;
       var4 = ((java$util$ImmutableCollections$MapN.prototype.I$probe$Ljava$lang$Object$.call(var3,var0))) | 0;
       if (var4 < 0) {
        phi9 = this;
        phi10 = var0;
        break If_17_1;
       } else {
        var5 = (1) | 0;
        // Here was a goto statement
        phi6 = this;
        phi7 = var0;
        phi8 = (var5) | 0;
        break If_17_0;
       }
      }
     }
     phi6 = phi9;
     phi7 = phi10;
     phi8 = (0) | 0;
     break If_17_0;
    }
    return phi8;
  }

  Ljava$util$Set$$entrySet$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    // line number 1303
    var0 = new java$util$ImmutableCollections$MapN$1();
    var1 = this;
    java$util$ImmutableCollections$MapN$1.prototype.V$$init$$Ljava$util$ImmutableCollections$MapN$.call(var0,var1);
    return var0;
  }

  Z$isEmpty$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 1250
    var0 = ((this.size)) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }
}


class java$util$ConcurrentModificationException extends java$lang$RuntimeException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ConcurrentModificationException,[java$lang$Exception,java$util$ConcurrentModificationException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ConcurrentModificationException.java
    // line number 78
    java$lang$RuntimeException.prototype.V$$init$$$.call(this);
    // line number 79
    return;
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is ConcurrentModificationException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 88
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 89
    return;
  }

  V$$init$$Ljava$lang$Throwable$(arg0) {
    // source file is ConcurrentModificationException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 103
    var1 = var0;
    java$lang$RuntimeException.prototype.V$$init$$Ljava$lang$Throwable$.call(this,var1);
    // line number 104
    return;
  }
}


class java$util$Collections$EmptySet extends java$util$AbstractSet {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$EmptySet,[java$lang$Iterable,java$util$Collections$EmptySet,java$lang$Object,java$util$Set,java$util$AbstractCollection,java$io$Serializable,java$util$Collection,java$util$AbstractSet]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 4432
    java$util$AbstractSet.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4439
    java$util$Collections.$i;
    var0 = (java$util$Collections.Ljava$util$Iterator$$emptyIterator$$());
    return var0;
  }

  I$size$$() {
    // source file is Collections.java
    // line number 4441
    return 0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var0 = arg0;
    // line number 4445
    return 0;
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var var1 = 0;
    var0 = arg0;
    // line number 4446
    var1 = (var0.Z$isEmpty$$());
    return var1;
  }

  Z$isEmpty$$() {
    // source file is Collections.java
    // line number 4442
    return 1;
  }

  I$hashCode$$() {
    // source file is Collections.java
    // line number 4477
    return 0;
  }
}


class java$lang$StringIndexOutOfBoundsException extends java$lang$IndexOutOfBoundsException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$StringIndexOutOfBoundsException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException,java$lang$IndexOutOfBoundsException,java$lang$StringIndexOutOfBoundsException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is StringIndexOutOfBoundsException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 56
    var1 = var0;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 57
    return;
  }

  V$$init$$$() {
    // source file is StringIndexOutOfBoundsException.java
    // line number 46
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(this);
    // line number 47
    return;
  }
}


class java$lang$ArrayIndexOutOfBoundsException extends java$lang$IndexOutOfBoundsException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$lang$ArrayIndexOutOfBoundsException,[java$lang$Exception,java$lang$Throwable,java$lang$Object,java$lang$ArrayIndexOutOfBoundsException,java$lang$RuntimeException,java$lang$IndexOutOfBoundsException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$String$(arg0) {
    // source file is ArrayIndexOutOfBoundsException.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 53
    var1 = var0;
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(this,var1);
    // line number 54
    return;
  }

  V$$init$$$() {
    // source file is ArrayIndexOutOfBoundsException.java
    // line number 43
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$$.call(this);
    // line number 44
    return;
  }
}


class java$util$ImmutableCollections$AbstractImmutableSet extends java$util$ImmutableCollections$AbstractImmutableCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$AbstractImmutableSet,[java$lang$Iterable,java$util$ImmutableCollections$AbstractImmutableSet,java$lang$Object,java$util$Set,java$util$AbstractCollection,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ImmutableCollections.java
    // line number 745
    java$util$ImmutableCollections$AbstractImmutableCollection.prototype.V$$init$$$.call(this);
    return;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var var6 = null;
    var phi7 = null;
    var phi8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = 0;
    var phi16 = null;
    var0 = arg0;
    // line number 750
    var1 = this;
    if (var0 != var1) {
     // line number 752
     var2 = (bytecoder.instanceOf(var0,java$util$Set)) | 0;
     if (var2 != 0) {
      // line number 756
      var3 = var0;
      // line number 757
      var4 = ((var3.I$size$$())) | 0;
      var5 = ((this.I$size$$())) | 0;
      if (var4 == var5) {
       // line number 760
       var6 = (var3.Ljava$util$Iterator$$iterator$$());
       phi7 = this;
       phi8 = var3;
       phi9 = var6;
       L2020576466: while(true) {
        var10 = phi9;
        var11 = (var10.Z$hasNext$$());
        if (var11 == 0) {
         // line number 765
         return 1;
        } else {
         var12 = phi9;
         var13 = (var12.Ljava$lang$Object$$next$$());
         // line number 761
         If_75_0: {
          if (var13 == null) {
           phi16 = var13;
           break If_75_0;
          } else {
           var14 = phi7;
           var15 = (var14.Z$contains$Ljava$lang$Object$(var13));
           if (var15 != 0) {
            // line number 764
            // Here was a goto statement
            continue L2020576466;
           } else {
            phi16 = var13;
            break If_75_0;
           }
          }
         }
         // line number 762
         return 0;
        }
       }
      } else {
       // line number 758
       return 0;
      }
     } else {
      // line number 753
      return 0;
     }
    } else {
     // line number 751
     return 1;
    }
  }
}


class java$util$ImmutableCollections$MapN$1 extends java$util$AbstractSet {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$MapN$1,[java$lang$Iterable,java$lang$Object,java$util$Set,java$util$ImmutableCollections$MapN$1,java$util$AbstractCollection,java$util$Collection,java$util$AbstractSet]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$ImmutableCollections$MapN$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var0 = this;
    // line number 1303
    var1 = arg0;
    var0.this$0 = var1;
    java$util$AbstractSet.prototype.V$$init$$$.call(var0);
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 1311
    var0 = new java$util$ImmutableCollections$MapN$MapNIterator();
    var1 = this;
    var2 = (var1.this$0);
    java$util$ImmutableCollections$MapN$MapNIterator.prototype.V$$init$$Ljava$util$ImmutableCollections$MapN$.call(var0,var2);
    return var0;
  }

  I$size$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    // line number 1306
    var0 = (this.this$0);
    var1 = ((var0.size)) | 0;
    return var1;
  }
}


class java$io$PrintStream extends java$io$FilterOutputStream {
  nativeObject = null;

  trouble = false;
  closing = false;
  autoFlush = false;
  charset = null;
  charOut = null;
  textOut = null;
  lock = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$PrintStream,[java$io$PrintStream,java$lang$Object,java$io$OutputStream,java$io$Flushable,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable,java$io$FilterOutputStream]);
    }
    return this.#rt;
  }

  static #iguard = false;
  static get $i() {
    if (!this.#iguard) {
      this.#iguard = true;
      this.V$$clinit$$$();
    }
    return this;
  }

  set $lambdaimpl(impl) {
    this.V$write$I = impl;
  }

  static V$$clinit$$$() {
    // source file is PrintStream.java
    var var0 = null;
    // line number 1541
    var0 = new java$io$PrintStream$1();
    java$io$PrintStream$1.prototype.V$$init$$$.call(var0);
    jdk$internal$access$SharedSecrets.V$setJavaIOCPrintStreamAccess$Ljdk$internal$access$JavaIOPrintStreamAccess$(var0);
    // line number 1547
    return;
  }

  V$$init$$Ljava$io$OutputStream$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var0 = arg0;
    // line number 151
    var1 = var0;
    java$io$PrintStream.prototype.V$$init$$Ljava$io$OutputStream$$Z.call(this,var1,0);
    // line number 152
    return;
  }

  V$$init$$Ljava$io$OutputStream$$Z(arg0,arg1) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 171
    var1 = arg1;
    var2 = bytecoder.stringconstants[15];
    java$io$PrintStream.$i;
    var3 = (java$io$PrintStream.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$$Ljava$lang$String$(var0,var2));
    var4 = var3;
    java$io$PrintStream.prototype.V$$init$$Z$Ljava$io$OutputStream$.call(this,var1,var4);
    // line number 172
    return;
  }

  static Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$$Ljava$lang$String$(arg0,arg1) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg1;
    // line number 91
    if (arg0 != null) {
     // line number 93
     return arg0;
    } else {
     // line number 92
     var1 = new java$lang$NullPointerException();
     var2 = var0;
     java$lang$NullPointerException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$$init$$Z$Ljava$io$OutputStream$(arg0,arg1) {
    // source file is PrintStream.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var var9 = null;
    var phi10 = null;
    var phi11 = 0;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = null;
    var var27 = null;
    var var28 = null;
    var var29 = null;
    var0 = arg0;
    // line number 115
    var1 = arg1;
    java$io$FilterOutputStream.prototype.V$$init$$Ljava$io$OutputStream$.call(this,var1);
    // line number 74
    var2 = this;
    var2.trouble = 0;
    // line number 471
    var3 = this;
    var3.closing = 0;
    // line number 116
    var4 = this;
    var4.autoFlush = var0;
    // line number 117
    var5 = arg1;
    var6 = (bytecoder.instanceOf(var5,java$io$PrintStream)) | 0;
    If_36_0: {
     if (var6 == 0) {
      var29 = (java$nio$charset$Charset.Ljava$nio$charset$Charset$$defaultCharset$$());
      phi10 = this;
      phi11 = var0;
      phi12 = arg1;
      phi13 = this;
      phi14 = var29;
      break If_36_0;
     } else {
      var7 = arg1;
      var8 = var7;
      var9 = (java$io$PrintStream.prototype.Ljava$nio$charset$Charset$$charset$$.call(var8));
      // Here was a goto statement
      phi10 = this;
      phi11 = var0;
      phi12 = arg1;
      phi13 = this;
      phi14 = var9;
      break If_36_0;
     }
    }
    phi13.charset = phi14;
    // line number 118
    var15 = phi10;
    var16 = new java$io$OutputStreamWriter();
    var17 = phi10;
    var18 = phi10;
    var19 = (var18.charset);
    java$io$OutputStreamWriter.prototype.V$$init$$Ljava$io$OutputStream$$Ljava$nio$charset$Charset$.call(var16,var17,var19);
    var15.charOut = var16;
    // line number 119
    var20 = phi10;
    var21 = new java$io$BufferedWriter();
    var22 = phi10;
    var23 = (var22.charOut);
    java$io$BufferedWriter.prototype.V$$init$$Ljava$io$Writer$.call(var21,var23);
    var20.textOut = var21;
    // line number 122
    var24 = phi10;
    var25 = ((var24).constructor.$rt);
    If_99_0: {
     if (var25 != java$io$PrintStream.$rt) {
      // line number 125
      var28 = phi10;
      var28.lock = null;
      break If_99_0;
     } else {
      // line number 123
      var26 = phi10;
      jdk$internal$misc$InternalLock.$i;
      var27 = (jdk$internal$misc$InternalLock.Ljdk$internal$misc$InternalLock$$newLockOrNull$$());
      var26.lock = var27;
      // Here was a goto statement
      break If_99_0;
     }
    }
    // line number 127
    return;
  }

  Ljava$nio$charset$Charset$$charset$$() {
    // source file is PrintStream.java
    var var0 = null;
    // line number 1537
    var0 = (this.charset);
    return var0;
  }

  V$println$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var0 = arg0;
    // line number 1167
    var1 = ((this).constructor.$rt);
    If_12_0: {
     if (var1 != java$io$PrintStream.$rt) {
      // line number 1170
      var5 = this;
      // Monitor enter on this
      phi6 = this;
      phi7 = var0;
      phi8 = var5;
      TryCatch_38_0: {
       try {
        // line number 1171
        var10 = phi6;
        var11 = phi7;
        java$io$PrintStream.prototype.V$print$Ljava$lang$String$.call(var10,var11);
        // line number 1172
        var12 = phi6;
        java$io$PrintStream.prototype.V$newLine$$.call(var12);
        // line number 1173
        var13 = phi8;
        // Monitor exit on var13
        break TryCatch_38_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_39_0: {
          var9 = phi8;
          // Monitor exit on var9
          break TryCatch_39_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi3 = phi6;
      phi4 = phi7;
      break If_12_0;
     } else {
      // line number 1168
      var2 = (java$lang$String.Ljava$lang$String$$valueOf$Ljava$lang$Object$(var0));
      java$io$PrintStream.prototype.V$writeln$Ljava$lang$String$.call(this,var2);
      // Here was a goto statement
      phi3 = this;
      phi4 = var0;
      break If_12_0;
     }
    }
    // line number 1175
    return;
  }

  V$writeln$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var0 = this;
    TryCatch_5_0: {
     TryCatch_5_1: {
      try {
       // line number 823
       var6 = (var0.lock);
       if (var6 == null) {
        // line number 831
        var16 = var0;
        // Monitor enter on var0
        phi17 = var0;
        phi18 = arg0;
        phi19 = var16;
        TryCatch_99_0: {
         try {
          // line number 832
          var21 = phi17;
          var22 = phi18;
          java$io$PrintStream.prototype.V$implWriteln$Ljava$lang$String$.call(var21,var22);
          // line number 833
          var23 = phi19;
          // Monitor exit on var23
          break TryCatch_99_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_100_0: {
            var20 = phi19;
            // Monitor exit on var20
            break TryCatch_100_0;
           }
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // Here was a goto statement
        phi8 = phi17;
        phi9 = phi18;
        break TryCatch_5_1;
       } else {
        // line number 824
        var7 = (var0.lock);
        jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var7);
        phi8 = var0;
        phi9 = arg0;
        TryCatch_52_0: {
         try {
          // line number 826
          var12 = phi8;
          var13 = phi9;
          java$io$PrintStream.prototype.V$implWriteln$Ljava$lang$String$.call(var12,var13);
          break TryCatch_52_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           // line number 828
           var10 = phi8;
           var11 = (var10.lock);
           jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var11);
           // line number 829
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 828
        var14 = phi8;
        var15 = (var14.lock);
        jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var15);
        // line number 829
        // Here was a goto statement
        // Here was a goto statement
        break TryCatch_5_1;
       }
      } catch (__ex) {
       if (__ex instanceof java$io$InterruptedIOException) {
        // line number 836
        // line number 837
        var5 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
        java$lang$Thread.prototype.V$interrupt$$.call(var5);
        // line number 841
        // Here was a goto statement
        phi2 = var0;
        phi3 = arg0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       if (__ex instanceof java$io$IOException) {
        // line number 839
        // line number 840
        var1 = (1) | 0;
        var0.trouble = var1;
        phi2 = var0;
        phi3 = arg0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       throw __ex;
      }
     }
     // line number 841
     // Here was a goto statement
     phi2 = phi8;
     phi3 = phi9;
     break TryCatch_5_0;
    }
    // line number 842
    return;
  }

  V$implWriteln$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = null;
    var phi7 = null;
    var phi8 = null;
    var0 = arg0;
    // line number 845
    java$io$PrintStream.prototype.V$ensureOpen$$.call(this);
    // line number 846
    var1 = (this.textOut);
    var1.V$write$Ljava$lang$String$(var0);
    // line number 847
    var2 = (this.textOut);
    java$io$BufferedWriter.prototype.V$newLine$$.call(var2);
    // line number 848
    var3 = (this.textOut);
    java$io$BufferedWriter.prototype.V$flushBuffer$$.call(var3);
    // line number 849
    var4 = (this.charOut);
    java$io$OutputStreamWriter.prototype.V$flushBuffer$$.call(var4);
    // line number 850
    var5 = (this.autoFlush);
    If_37_0: {
     if (var5 == 0) {
      phi7 = this;
      phi8 = var0;
      break If_37_0;
     } else {
      // line number 851
      var6 = (this.out);
      var6.V$flush$$();
      phi7 = this;
      phi8 = var0;
      break If_37_0;
     }
    }
    // line number 852
    return;
  }

  V$ensureOpen$$() {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 435
    var0 = (this.out);
    if (var0 != null) {
     // line number 437
     return;
    } else {
     // line number 436
     var1 = new java$io$IOException();
     var2 = bytecoder.stringconstants[47];
     java$io$IOException.prototype.V$$init$$Ljava$lang$String$.call(var1,var2);
     throw bytecoder.registerStack(var1, new Error().stack);
    }
  }

  V$print$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 1002
    var1 = var0;
    var2 = (java$lang$String.Ljava$lang$String$$valueOf$Ljava$lang$Object$(var1));
    java$io$PrintStream.prototype.V$write$Ljava$lang$String$.call(this,var2);
    // line number 1003
    return;
  }

  V$write$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = null;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var0 = this;
    TryCatch_5_0: {
     TryCatch_5_1: {
      try {
       // line number 787
       var6 = (var0.lock);
       if (var6 == null) {
        // line number 795
        var16 = var0;
        // Monitor enter on var0
        phi17 = var0;
        phi18 = arg0;
        phi19 = var16;
        TryCatch_99_0: {
         try {
          // line number 796
          var21 = phi17;
          var22 = phi18;
          java$io$PrintStream.prototype.V$implWrite$Ljava$lang$String$.call(var21,var22);
          // line number 797
          var23 = phi19;
          // Monitor exit on var23
          break TryCatch_99_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_100_0: {
            var20 = phi19;
            // Monitor exit on var20
            break TryCatch_100_0;
           }
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // Here was a goto statement
        phi8 = phi17;
        phi9 = phi18;
        break TryCatch_5_1;
       } else {
        // line number 788
        var7 = (var0.lock);
        jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var7);
        phi8 = var0;
        phi9 = arg0;
        TryCatch_52_0: {
         try {
          // line number 790
          var12 = phi8;
          var13 = phi9;
          java$io$PrintStream.prototype.V$implWrite$Ljava$lang$String$.call(var12,var13);
          break TryCatch_52_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           // line number 792
           var10 = phi8;
           var11 = (var10.lock);
           jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var11);
           // line number 793
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 792
        var14 = phi8;
        var15 = (var14.lock);
        jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var15);
        // line number 793
        // Here was a goto statement
        // Here was a goto statement
        break TryCatch_5_1;
       }
      } catch (__ex) {
       if (__ex instanceof java$io$InterruptedIOException) {
        // line number 800
        // line number 801
        var5 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
        java$lang$Thread.prototype.V$interrupt$$.call(var5);
        // line number 805
        // Here was a goto statement
        phi2 = var0;
        phi3 = arg0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       if (__ex instanceof java$io$IOException) {
        // line number 803
        // line number 804
        var1 = (1) | 0;
        var0.trouble = var1;
        phi2 = var0;
        phi3 = arg0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       throw __ex;
      }
     }
     // line number 805
     // Here was a goto statement
     phi2 = phi8;
     phi3 = phi9;
     break TryCatch_5_0;
    }
    // line number 806
    return;
  }

  V$implWrite$Ljava$lang$String$(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var0 = arg0;
    // line number 809
    java$io$PrintStream.prototype.V$ensureOpen$$.call(this);
    // line number 810
    var1 = (this.textOut);
    var1.V$write$Ljava$lang$String$(var0);
    // line number 811
    var2 = (this.textOut);
    java$io$BufferedWriter.prototype.V$flushBuffer$$.call(var2);
    // line number 812
    var3 = (this.charOut);
    java$io$OutputStreamWriter.prototype.V$flushBuffer$$.call(var3);
    // line number 813
    var4 = (this.autoFlush);
    If_31_0: {
     if (var4 == 0) {
      phi8 = this;
      phi9 = var0;
      break If_31_0;
     } else {
      var5 = var0;
      var6 = ((java$lang$String.prototype.I$indexOf$I.call(var5,10))) | 0;
      if (var6 < 0) {
       phi8 = this;
       phi9 = var0;
       break If_31_0;
      } else {
       // line number 814
       var7 = (this.out);
       var7.V$flush$$();
       phi8 = this;
       phi9 = var0;
       break If_31_0;
      }
     }
    }
    // line number 815
    return;
  }

  V$newLine$$() {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    var phi14 = null;
    var phi15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var0 = this;
    TryCatch_4_0: {
     TryCatch_4_1: {
      try {
       // line number 856
       var5 = (var0.lock);
       if (var5 == null) {
        // line number 864
        var13 = var0;
        // Monitor enter on var0
        phi14 = var0;
        phi15 = var13;
        TryCatch_93_0: {
         try {
          // line number 865
          var17 = phi14;
          java$io$PrintStream.prototype.V$implNewLine$$.call(var17);
          // line number 866
          var18 = phi15;
          // Monitor exit on var18
          break TryCatch_93_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_94_0: {
            var16 = phi15;
            // Monitor exit on var16
            break TryCatch_94_0;
           }
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // Here was a goto statement
        phi7 = phi14;
        break TryCatch_4_1;
       } else {
        // line number 857
        var6 = (var0.lock);
        jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var6);
        phi7 = var0;
        TryCatch_49_0: {
         try {
          // line number 859
          var10 = phi7;
          java$io$PrintStream.prototype.V$implNewLine$$.call(var10);
          break TryCatch_49_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           // line number 861
           var8 = phi7;
           var9 = (var8.lock);
           jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var9);
           // line number 862
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 861
        var11 = phi7;
        var12 = (var11.lock);
        jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var12);
        // line number 862
        // Here was a goto statement
        // Here was a goto statement
        break TryCatch_4_1;
       }
      } catch (__ex) {
       if (__ex instanceof java$io$InterruptedIOException) {
        // line number 869
        // line number 870
        var4 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
        java$lang$Thread.prototype.V$interrupt$$.call(var4);
        // line number 874
        // Here was a goto statement
        phi2 = var0;
        phi3 = __ex;
        break TryCatch_4_0;
       }
       if (__ex instanceof java$io$IOException) {
        // line number 872
        // line number 873
        var1 = (1) | 0;
        var0.trouble = var1;
        phi2 = var0;
        phi3 = __ex;
        break TryCatch_4_0;
       }
       throw __ex;
      }
     }
     // line number 874
     // Here was a goto statement
     phi2 = phi7;
     break TryCatch_4_0;
    }
    // line number 875
    return;
  }

  V$implNewLine$$() {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var phi5 = null;
    // line number 878
    java$io$PrintStream.prototype.V$ensureOpen$$.call(this);
    // line number 879
    var0 = (this.textOut);
    java$io$BufferedWriter.prototype.V$newLine$$.call(var0);
    // line number 880
    var1 = (this.textOut);
    java$io$BufferedWriter.prototype.V$flushBuffer$$.call(var1);
    // line number 881
    var2 = (this.charOut);
    java$io$OutputStreamWriter.prototype.V$flushBuffer$$.call(var2);
    // line number 882
    var3 = (this.autoFlush);
    If_28_0: {
     if (var3 == 0) {
      phi5 = this;
      break If_28_0;
     } else {
      // line number 883
      var4 = (this.out);
      var4.V$flush$$();
      phi5 = this;
      break If_28_0;
     }
    }
    // line number 884
    return;
  }

  V$write$$B$I$I(arg0,arg1,arg2) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = null;
    var phi5 = 0;
    var phi6 = 0;
    var phi7 = null;
    var var8 = null;
    var var9 = null;
    var var10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = 0;
    var phi14 = 0;
    var var15 = null;
    var var16 = null;
    var var17 = null;
    var var18 = null;
    var var19 = 0;
    var var20 = 0;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var phi24 = null;
    var phi25 = null;
    var phi26 = 0;
    var phi27 = 0;
    var phi28 = null;
    var var29 = null;
    var var30 = null;
    var var31 = null;
    var var32 = 0;
    var var33 = 0;
    var var34 = null;
    var0 = this;
    var1 = (arg1) | 0;
    TryCatch_9_0: {
     TryCatch_9_1: {
      try {
       // line number 620
       var9 = (var0.lock);
       if (var9 == null) {
        // line number 628
        var23 = var0;
        // Monitor enter on var0
        phi24 = var0;
        phi25 = arg0;
        phi26 = (var1) | 0;
        phi27 = (arg2) | 0;
        phi28 = var23;
        TryCatch_114_0: {
         try {
          // line number 629
          var30 = phi24;
          var31 = phi25;
          var32 = (phi26) | 0;
          var33 = (phi27) | 0;
          java$io$PrintStream.prototype.V$implWrite$$B$I$I.call(var30,var31,var32,var33);
          // line number 630
          var34 = phi28;
          // Monitor exit on var34
          break TryCatch_114_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_115_0: {
            var29 = phi28;
            // Monitor exit on var29
            break TryCatch_115_0;
           }
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // Here was a goto statement
        phi11 = phi24;
        phi12 = phi25;
        phi13 = (phi26) | 0;
        phi14 = (phi27) | 0;
        break TryCatch_9_1;
       } else {
        // line number 621
        var10 = (var0.lock);
        jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var10);
        phi11 = var0;
        phi12 = arg0;
        phi13 = (var1) | 0;
        phi14 = (arg2) | 0;
        TryCatch_60_0: {
         try {
          // line number 623
          var17 = phi11;
          var18 = phi12;
          var19 = (phi13) | 0;
          var20 = (phi14) | 0;
          java$io$PrintStream.prototype.V$implWrite$$B$I$I.call(var17,var18,var19,var20);
          break TryCatch_60_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_61_0: {
            // line number 625
            break TryCatch_61_0;
           }
           var15 = phi11;
           var16 = (var15.lock);
           jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var16);
           // line number 626
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 625
        var21 = phi11;
        var22 = (var21.lock);
        jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var22);
        // line number 626
        // Here was a goto statement
        // Here was a goto statement
        break TryCatch_9_1;
       }
      } catch (__ex) {
       if (__ex instanceof java$io$InterruptedIOException) {
        // line number 633
        // line number 634
        var8 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
        java$lang$Thread.prototype.V$interrupt$$.call(var8);
        // line number 638
        // Here was a goto statement
        phi3 = var0;
        phi4 = arg0;
        phi5 = (var1) | 0;
        phi6 = (arg2) | 0;
        phi7 = __ex;
        break TryCatch_9_0;
       }
       if (__ex instanceof java$io$IOException) {
        // line number 636
        // line number 637
        var2 = (1) | 0;
        var0.trouble = var2;
        phi3 = var0;
        phi4 = arg0;
        phi5 = (var1) | 0;
        phi6 = (arg2) | 0;
        phi7 = __ex;
        break TryCatch_9_0;
       }
       throw __ex;
      }
     }
     // line number 638
     // Here was a goto statement
     phi3 = phi11;
     phi4 = phi12;
     phi5 = (phi13) | 0;
     phi6 = (phi14) | 0;
     break TryCatch_9_0;
    }
    // line number 639
    return;
  }

  V$implWrite$$B$I$I(arg0,arg1,arg2) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var var5 = null;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = 0;
    var0 = arg0;
    var1 = (arg2) | 0;
    // line number 642
    java$io$PrintStream.prototype.V$ensureOpen$$.call(this);
    // line number 643
    var2 = (this.out);
    var3 = (arg1) | 0;
    var2.V$write$$B$I$I(var0,var3,var1);
    // line number 644
    var4 = (this.autoFlush);
    If_25_0: {
     if (var4 == 0) {
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      break If_25_0;
     } else {
      // line number 645
      var5 = (this.out);
      var5.V$flush$$();
      phi6 = this;
      phi7 = var0;
      phi8 = (arg1) | 0;
      phi9 = (var1) | 0;
      break If_25_0;
     }
    }
    // line number 646
    return;
  }

  V$write$I(arg0) {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    var phi4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var phi8 = null;
    var phi9 = 0;
    var var10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = null;
    var phi17 = null;
    var phi18 = 0;
    var phi19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = 0;
    var var23 = null;
    var0 = this;
    TryCatch_5_0: {
     TryCatch_5_1: {
      try {
       // line number 574
       var6 = (var0.lock);
       if (var6 == null) {
        // line number 582
        var16 = var0;
        // Monitor enter on var0
        phi17 = var0;
        phi18 = (arg0) | 0;
        phi19 = var16;
        TryCatch_99_0: {
         try {
          // line number 583
          var21 = phi17;
          var22 = (phi18) | 0;
          java$io$PrintStream.prototype.V$implWrite$I.call(var21,var22);
          // line number 584
          var23 = phi19;
          // Monitor exit on var23
          break TryCatch_99_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           TryCatch_100_0: {
            var20 = phi19;
            // Monitor exit on var20
            break TryCatch_100_0;
           }
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // Here was a goto statement
        phi8 = phi17;
        phi9 = (phi18) | 0;
        break TryCatch_5_1;
       } else {
        // line number 575
        var7 = (var0.lock);
        jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var7);
        phi8 = var0;
        phi9 = (arg0) | 0;
        TryCatch_52_0: {
         try {
          // line number 577
          var12 = phi8;
          var13 = (phi9) | 0;
          java$io$PrintStream.prototype.V$implWrite$I.call(var12,var13);
          break TryCatch_52_0;
         } catch (__ex) {
          if (__ex instanceof java$lang$Throwable) {
           // line number 579
           var10 = phi8;
           var11 = (var10.lock);
           jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var11);
           // line number 580
           throw bytecoder.registerStack(__ex, new Error().stack);
          }
          throw __ex;
         }
        }
        // line number 579
        var14 = phi8;
        var15 = (var14.lock);
        jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var15);
        // line number 580
        // Here was a goto statement
        // Here was a goto statement
        break TryCatch_5_1;
       }
      } catch (__ex) {
       if (__ex instanceof java$io$InterruptedIOException) {
        // line number 587
        // line number 588
        var5 = (java$lang$Thread.Ljava$lang$Thread$$currentThread$$());
        java$lang$Thread.prototype.V$interrupt$$.call(var5);
        // line number 592
        // Here was a goto statement
        phi2 = var0;
        phi3 = (arg0) | 0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       if (__ex instanceof java$io$IOException) {
        // line number 590
        // line number 591
        var1 = (1) | 0;
        var0.trouble = var1;
        phi2 = var0;
        phi3 = (arg0) | 0;
        phi4 = __ex;
        break TryCatch_5_0;
       }
       throw __ex;
      }
     }
     // line number 592
     // Here was a goto statement
     phi2 = phi8;
     phi3 = (phi9) | 0;
     break TryCatch_5_0;
    }
    // line number 593
    return;
  }

  V$implWrite$I(arg0) {
    // source file is PrintStream.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = null;
    var phi6 = null;
    var phi7 = 0;
    var0 = (arg0) | 0;
    // line number 596
    java$io$PrintStream.prototype.V$ensureOpen$$.call(this);
    // line number 597
    var1 = (this.out);
    var1.V$write$I(var0);
    // line number 598
    var2 = (10) | 0;
    If_19_0: {
     if (var0 != var2) {
      phi6 = this;
      phi7 = (var0) | 0;
      break If_19_0;
     } else {
      var3 = this;
      var4 = (var3.autoFlush);
      if (var4 == 0) {
       phi6 = this;
       phi7 = (var0) | 0;
       break If_19_0;
      } else {
       // line number 599
       var5 = (this.out);
       var5.V$flush$$();
       phi6 = this;
       phi7 = (var0) | 0;
       break If_19_0;
      }
     }
    }
    // line number 600
    return;
  }

  V$flush$$() {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = null;
    var phi2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = null;
    var phi9 = null;
    var phi10 = null;
    var var11 = null;
    var var12 = null;
    var var13 = null;
    // line number 447
    var0 = (this.lock);
    If_7_0: {
     if (var0 == null) {
      // line number 455
      var8 = this;
      // Monitor enter on this
      phi9 = this;
      phi10 = var8;
      TryCatch_60_0: {
       try {
        // line number 456
        var12 = phi9;
        java$io$PrintStream.prototype.V$implFlush$$.call(var12);
        // line number 457
        var13 = phi10;
        // Monitor exit on var13
        break TryCatch_60_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         TryCatch_61_0: {
          var11 = phi10;
          // Monitor exit on var11
          break TryCatch_61_0;
         }
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // Here was a goto statement
      phi2 = phi9;
      break If_7_0;
     } else {
      // line number 448
      var1 = (this.lock);
      jdk$internal$misc$InternalLock.prototype.V$lock$$.call(var1);
      phi2 = this;
      TryCatch_16_0: {
       try {
        // line number 450
        var5 = phi2;
        java$io$PrintStream.prototype.V$implFlush$$.call(var5);
        break TryCatch_16_0;
       } catch (__ex) {
        if (__ex instanceof java$lang$Throwable) {
         // line number 452
         var3 = phi2;
         var4 = (var3.lock);
         jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var4);
         // line number 453
         throw bytecoder.registerStack(__ex, new Error().stack);
        }
        throw __ex;
       }
      }
      // line number 452
      var6 = phi2;
      var7 = (var6.lock);
      jdk$internal$misc$InternalLock.prototype.V$unlock$$.call(var7);
      // line number 453
      // Here was a goto statement
      // Here was a goto statement
      break If_7_0;
     }
    }
    // line number 459
    return;
  }

  V$implFlush$$() {
    // source file is PrintStream.java
    var var0 = null;
    var var1 = 0;
    var phi2 = null;
    var var3 = null;
    var0 = this;
    TryCatch_4_0: {
     TryCatch_4_1: {
      try {
       // line number 463
       java$io$PrintStream.prototype.V$ensureOpen$$.call(var0);
       // line number 464
       var3 = (var0.out);
       var3.V$flush$$();
       break TryCatch_4_1;
      } catch (__ex) {
       if (__ex instanceof java$io$IOException) {
        // line number 466
        // line number 467
        var1 = (1) | 0;
        var0.trouble = var1;
        phi2 = var0;
        break TryCatch_4_0;
       }
       throw __ex;
      }
     }
     // line number 468
     // Here was a goto statement
     phi2 = var0;
     break TryCatch_4_0;
    }
    // line number 469
    return;
  }
}


class java$nio$ReadOnlyBufferException extends java$lang$UnsupportedOperationException {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$ReadOnlyBufferException,[java$lang$Exception,java$lang$UnsupportedOperationException,java$nio$ReadOnlyBufferException,java$lang$Throwable,java$lang$Object,java$lang$RuntimeException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ReadOnlyBufferException.java
    // line number 50
    java$lang$UnsupportedOperationException.prototype.V$$init$$$.call(this);
    return;
  }
}


class java$nio$charset$UnmappableCharacterException extends java$nio$charset$CharacterCodingException {
  nativeObject = null;

  inputLength = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$UnmappableCharacterException,[java$io$IOException,java$lang$Exception,java$lang$Throwable,java$lang$Object,java$nio$charset$CharacterCodingException,java$nio$charset$UnmappableCharacterException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I(arg0) {
    // source file is UnmappableCharacterException.java
    var var0 = 0;
    var var1 = null;
    var0 = (arg0) | 0;
    // line number 54
    java$nio$charset$CharacterCodingException.prototype.V$$init$$$.call(this);
    // line number 55
    var1 = this;
    var1.inputLength = var0;
    // line number 56
    return;
  }

  Ljava$lang$String$$getMessage$$() {
    // source file is UnmappableCharacterException.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    // line number 71
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[101]));
    var2 = ((this.inputLength)) | 0;
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,var2));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var3));
    return var4;
  }
}


class java$util$ImmutableCollections$AbstractImmutableList extends java$util$ImmutableCollections$AbstractImmutableCollection {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$AbstractImmutableList,[java$util$List,java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$RandomAccess,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableList]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is ImmutableCollections.java
    // line number 252
    java$util$ImmutableCollections$AbstractImmutableCollection.prototype.V$$init$$$.call(this);
    return;
  }

  Ljava$lang$IndexOutOfBoundsException$$outOfBounds$I(arg0) {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = 0;
    var var7 = null;
    var var8 = null;
    var0 = (arg0) | 0;
    // line number 333
    var1 = new java$lang$IndexOutOfBoundsException();
    var2 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[88]));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var0));
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var4,bytecoder.stringconstants[89]));
    var6 = ((this.I$size$$())) | 0;
    var7 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var5,var6));
    var8 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var7));
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var1,var8);
    return var1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var phi7 = null;
    var phi8 = null;
    var phi9 = 0;
    var phi10 = 0;
    var var11 = 0;
    var var12 = 0;
    var var13 = null;
    var var14 = 0;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = null;
    var var19 = null;
    var var20 = 0;
    var var21 = null;
    var var22 = 0;
    var var23 = 0;
    var phi24 = 0;
    var0 = arg0;
    // line number 301
    var1 = this;
    if (var0 != var1) {
     // line number 305
     var2 = (bytecoder.instanceOf(var0,java$util$List)) | 0;
     if (var2 != 0) {
      // line number 309
      var3 = var0;
      var4 = (var3.Ljava$util$Iterator$$iterator$$());
      // line number 310
      var5 = (0) | 0;
      var6 = ((this.I$size$$())) | 0;
      phi7 = this;
      phi8 = var4;
      phi9 = (var5) | 0;
      phi10 = (var6) | 0;
      L373379649: while(true) {
       var11 = (phi9) | 0;
       var12 = (phi10) | 0;
       if (var11 >= var12) {
        // line number 315
        var21 = phi8;
        var22 = (var21.Z$hasNext$$());
        If_109_0: {
         if (var22 != 0) {
          phi24 = (0) | 0;
          break If_109_0;
         } else {
          var23 = (1) | 0;
          // Here was a goto statement
          phi24 = (var23) | 0;
          break If_109_0;
         }
        }
        return phi24;
       } else {
        // line number 311
        var13 = phi8;
        var14 = (var13.Z$hasNext$$());
        If_66_0: {
         if (var14 == 0) {
          break If_66_0;
         } else {
          var15 = phi7;
          var16 = (phi9) | 0;
          var17 = (var15.Ljava$lang$Object$$get$I(var16));
          var18 = phi8;
          var19 = (var18.Ljava$lang$Object$$next$$());
          var20 = (java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var17,var19));
          if (var20 != 0) {
           // line number 310
           phi9 = ((phi9 + 1)) | 0;
           // Here was a goto statement
           continue L373379649;
          } else {
           break If_66_0;
          }
         }
        }
        // line number 312
        return 0;
       }
      }
     } else {
      // line number 306
      return 0;
     }
    } else {
     // line number 302
     return 1;
    }
  }

  I$hashCode$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var phi1 = null;
    var phi2 = 0;
    var phi3 = 0;
    var phi4 = 0;
    var var5 = 0;
    var var6 = 0;
    var var7 = 0;
    var var8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    // line number 320
    // line number 321
    var0 = ((this.I$size$$())) | 0;
    phi1 = this;
    phi2 = (1) | 0;
    phi3 = (0) | 0;
    phi4 = (var0) | 0;
    L2030379529: while(true) {
     var5 = (phi3) | 0;
     var6 = (phi4) | 0;
     if (var5 >= var6) {
      // line number 324
      var14 = (phi2) | 0;
      return var14;
     } else {
      // line number 322
      var7 = (phi2) | 0;
      var8 = ((31 * var7)) | 0;
      var9 = phi1;
      var10 = (phi3) | 0;
      var11 = (var9.Ljava$lang$Object$$get$I(var10));
      var12 = ((java$util$Objects.I$hashCode$Ljava$lang$Object$(var11))) | 0;
      var13 = ((var8 + var12)) | 0;
      // line number 321
      phi3 = ((phi3 + 1)) | 0;
      // Here was a goto statement
      phi2 = (var13) | 0;
      continue L2030379529;
     }
    }
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    // line number 282
    var0 = new java$util$ImmutableCollections$ListItr();
    var1 = this;
    var2 = ((this.I$size$$())) | 0;
    java$util$ImmutableCollections$ListItr.prototype.V$$init$$Ljava$util$List$$I.call(var0,var1,var2);
    return var0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = null;
    var phi5 = null;
    var phi6 = 0;
    var0 = arg0;
    // line number 329
    var1 = var0;
    var2 = ((this.I$indexOf$Ljava$lang$Object$(var1))) | 0;
    If_12_0: {
     if (var2 < 0) {
      phi4 = this;
      phi5 = var0;
      phi6 = (0) | 0;
      break If_12_0;
     } else {
      var3 = (1) | 0;
      // Here was a goto statement
      phi4 = this;
      phi5 = var0;
      phi6 = (var3) | 0;
      break If_12_0;
     }
    }
    return phi6;
  }
}


class java$nio$charset$MalformedInputException extends java$nio$charset$CharacterCodingException {
  nativeObject = null;

  inputLength = 0;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$nio$charset$MalformedInputException,[java$io$IOException,java$lang$Exception,java$nio$charset$MalformedInputException,java$lang$Throwable,java$lang$Object,java$nio$charset$CharacterCodingException]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$I(arg0) {
    // source file is MalformedInputException.java
    var var0 = 0;
    var var1 = null;
    var0 = (arg0) | 0;
    // line number 54
    java$nio$charset$CharacterCodingException.prototype.V$$init$$$.call(this);
    // line number 55
    var1 = this;
    var1.inputLength = var0;
    // line number 56
    return;
  }

  Ljava$lang$String$$getMessage$$() {
    // source file is MalformedInputException.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    // line number 71
    var0 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var0);
    var1 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var0,bytecoder.stringconstants[101]));
    var2 = ((this.inputLength)) | 0;
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var1,var2));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var3));
    return var4;
  }
}


class java$util$HashMap$EntrySet extends java$util$AbstractSet {
  nativeObject = null;

  this$0 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$HashMap$EntrySet,[java$lang$Iterable,java$util$HashMap$EntrySet,java$lang$Object,java$util$Set,java$util$AbstractCollection,java$util$Collection,java$util$AbstractSet]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$util$HashMap$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var0 = this;
    // line number 1102
    var1 = arg0;
    var0.this$0 = var1;
    java$util$AbstractSet.prototype.V$$init$$$.call(var0);
    return;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    // line number 1106
    var0 = new java$util$HashMap$EntryIterator();
    var1 = this;
    var2 = (var1.this$0);
    java$util$HashMap$EntryIterator.prototype.V$$init$$Ljava$util$HashMap$.call(var0,var2);
    return var0;
  }

  I$size$$() {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    // line number 1103
    var0 = (this.this$0);
    var1 = ((var0.size)) | 0;
    return var1;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is HashMap.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var var9 = 0;
    var phi10 = null;
    var phi11 = null;
    var phi12 = null;
    var phi13 = null;
    var phi14 = null;
    var phi15 = 0;
    var phi16 = null;
    var phi17 = null;
    var phi18 = null;
    var phi19 = null;
    var phi20 = null;
    var0 = arg0;
    // line number 1109
    var1 = (bytecoder.instanceOf(var0,java$util$Map$Entry)) | 0;
    if (var1 == 0) {
     // line number 1110
     return 0;
    } else {
     var2 = var0;
     var3 = var2;
     // Here was a goto statement
     // line number 1111
     var4 = (var3.Ljava$lang$Object$$getKey$$());
     // line number 1112
     var5 = (this.this$0);
     var6 = (java$util$HashMap.prototype.Ljava$util$HashMap$Node$$getNode$Ljava$lang$Object$.call(var5,var4));
     // line number 1113
     If_37_0: {
      If_37_1: {
       if (var6 == null) {
        phi16 = this;
        phi17 = var0;
        phi18 = var3;
        phi19 = var4;
        phi20 = var6;
        break If_37_1;
       } else {
        var7 = var6;
        var8 = (java$util$HashMap$Node.prototype.Z$equals$Ljava$lang$Object$.call(var7,var3));
        if (var8 == 0) {
         phi16 = this;
         phi17 = var0;
         phi18 = var3;
         phi19 = var4;
         phi20 = var6;
         break If_37_1;
        } else {
         var9 = (1) | 0;
         // Here was a goto statement
         phi10 = this;
         phi11 = var0;
         phi12 = var3;
         phi13 = var4;
         phi14 = var6;
         phi15 = (var9) | 0;
         break If_37_0;
        }
       }
      }
      phi10 = phi16;
      phi11 = phi17;
      phi12 = phi18;
      phi13 = phi19;
      phi14 = phi20;
      phi15 = (0) | 0;
      break If_37_0;
     }
     return phi15;
    }
  }
}


class java$util$Collections$EmptyList extends java$util$AbstractList {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$Collections$EmptyList,[java$util$AbstractList,java$util$List,java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$RandomAccess,java$util$Collections$EmptyList,java$io$Serializable,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$() {
    // source file is Collections.java
    // line number 4559
    java$util$AbstractList.prototype.V$$init$$$.call(this);
    return;
  }

  I$size$$() {
    // source file is Collections.java
    // line number 4572
    return 0;
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4566
    java$util$Collections.$i;
    var0 = (java$util$Collections.Ljava$util$Iterator$$emptyIterator$$());
    return var0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var0 = arg0;
    // line number 4576
    return 0;
  }

  Z$containsAll$Ljava$util$Collection$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var var1 = 0;
    var0 = arg0;
    // line number 4577
    var1 = (var0.Z$isEmpty$$());
    return var1;
  }

  Ljava$lang$Object$$get$I(arg0) {
    // source file is Collections.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var0 = (arg0) | 0;
    // line number 4588
    var1 = new java$lang$IndexOutOfBoundsException();
    var2 = new java$lang$StringBuilder();
    java$lang$StringBuilder.prototype.V$$init$$$.call(var2);
    var3 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var2,bytecoder.stringconstants[88]));
    var4 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$I.call(var3,var0));
    var5 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var4));
    java$lang$IndexOutOfBoundsException.prototype.V$$init$$Ljava$lang$String$.call(var1,var5);
    throw bytecoder.registerStack(var1, new Error().stack);
  }

  Z$isEmpty$$() {
    // source file is Collections.java
    // line number 4573
    return 1;
  }

  Z$equals$Ljava$lang$Object$(arg0) {
    // source file is Collections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = null;
    var0 = arg0;
    // line number 4592
    var1 = (bytecoder.instanceOf(var0,java$util$List)) | 0;
    If_11_0: {
     If_11_1: {
      if (var1 == 0) {
       phi9 = this;
       phi10 = var0;
       break If_11_1;
      } else {
       var2 = var0;
       var3 = var2;
       var4 = (var3.Z$isEmpty$$());
       if (var4 == 0) {
        phi9 = this;
        phi10 = var0;
        break If_11_1;
       } else {
        var5 = (1) | 0;
        // Here was a goto statement
        phi6 = this;
        phi7 = var0;
        phi8 = (var5) | 0;
        break If_11_0;
       }
      }
     }
     phi6 = phi9;
     phi7 = phi10;
     phi8 = (0) | 0;
     break If_11_0;
    }
    return phi8;
  }

  I$hashCode$$() {
    // source file is Collections.java
    // line number 4595
    return 1;
  }

  Ljava$util$ListIterator$$listIterator$$() {
    // source file is Collections.java
    var var0 = null;
    // line number 4569
    java$util$Collections.$i;
    var0 = (java$util$Collections.Ljava$util$ListIterator$$emptyListIterator$$());
    return var0;
  }
}


class java$io$FileWriter extends java$io$OutputStreamWriter {
  nativeObject = null;
  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$io$FileWriter,[java$io$OutputStreamWriter,java$io$FileWriter,java$lang$Object,java$io$Flushable,java$io$Writer,java$lang$Appendable,java$io$Closeable,java$lang$AutoCloseable]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
    this.V$write$$C$I$I = impl;
  }
}


class java$util$ImmutableCollections$List12 extends java$util$ImmutableCollections$AbstractImmutableList {
  nativeObject = null;

  e0 = null;
  e1 = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$List12,[java$util$List,java$lang$Iterable,java$lang$Object,java$util$AbstractCollection,java$util$RandomAccess,java$io$Serializable,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$Collection,java$util$ImmutableCollections$List12,java$util$ImmutableCollections$AbstractImmutableList]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$Ljava$lang$Object$$Ljava$lang$Object$(arg0,arg1) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 562
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(this);
    // line number 563
    var1 = this;
    var2 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    var1.e0 = var2;
    // line number 564
    var3 = this;
    var4 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(arg1));
    var3.e1 = var4;
    // line number 565
    return;
  }

  V$$init$$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = null;
    var var4 = null;
    var0 = arg0;
    // line number 555
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(this);
    // line number 556
    var1 = this;
    var2 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    var1.e0 = var2;
    // line number 559
    var3 = this;
    java$util$ImmutableCollections.$i;
    var4 = (java$util$ImmutableCollections.EMPTY);
    var3.e1 = var4;
    // line number 560
    return;
  }

  I$size$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    // line number 569
    var0 = (this.e1);
    java$util$ImmutableCollections.$i;
    var1 = (java$util$ImmutableCollections.EMPTY);
    If_12_0: {
     if (var0 == var1) {
      phi3 = this;
      phi4 = (1) | 0;
      break If_12_0;
     } else {
      var2 = (2) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = (var2) | 0;
      break If_12_0;
     }
    }
    return phi4;
  }

  Ljava$lang$Object$$get$I(arg0) {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var phi7 = null;
    var phi8 = 0;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var0 = (arg0) | 0;
    // line number 580
    if (var0 != 0) {
     // line number 582
     var2 = (1) | 0;
     If_22_0: {
      if (var0 != var2) {
       phi7 = this;
       phi8 = (var0) | 0;
       break If_22_0;
      } else {
       var3 = this;
       var4 = (var3.e1);
       java$util$ImmutableCollections.$i;
       var5 = (java$util$ImmutableCollections.EMPTY);
       if (var4 == var5) {
        phi7 = this;
        phi8 = (var0) | 0;
        break If_22_0;
       } else {
        // line number 583
        var6 = (this.e1);
        return var6;
       }
      }
     }
     // line number 585
     var9 = phi7;
     var10 = (phi8) | 0;
     var11 = (var9.Ljava$lang$IndexOutOfBoundsException$$outOfBounds$I(var10));
     throw bytecoder.registerStack(var11, new Error().stack);
    } else {
     // line number 581
     var1 = (this.e0);
     return var1;
    }
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var var3 = 0;
    var var4 = null;
    var var5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var phi9 = null;
    var phi10 = null;
    var0 = arg0;
    // line number 590
    var1 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    // line number 591
    var2 = (this.e0);
    var3 = (var0.Z$equals$Ljava$lang$Object$(var2));
    if (var3 == 0) {
     // line number 593
     var4 = (this.e1);
     java$util$ImmutableCollections.$i;
     var5 = (java$util$ImmutableCollections.EMPTY);
     If_38_0: {
      if (var4 == var5) {
       phi9 = this;
       phi10 = var0;
       break If_38_0;
      } else {
       var6 = var0;
       var7 = (this.e1);
       var8 = (var6.Z$equals$Ljava$lang$Object$(var7));
       if (var8 == 0) {
        phi9 = this;
        phi10 = var0;
        break If_38_0;
       } else {
        // line number 594
        return 1;
       }
      }
     }
     // line number 596
     return -1;
    } else {
     // line number 592
     return 0;
    }
  }

  Z$isEmpty$$() {
    // source file is ImmutableCollections.java
    // line number 574
    return 0;
  }
}


class java$util$ImmutableCollections$SetN extends java$util$ImmutableCollections$AbstractImmutableSet {
  nativeObject = null;

  size = 0;
  elements = null;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$SetN,[java$lang$Iterable,java$lang$Object,java$util$ImmutableCollections$AbstractImmutableSet,java$util$Set,java$util$AbstractCollection,java$io$Serializable,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$ImmutableCollections$SetN,java$util$Collection]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = null;
    var var5 = 0;
    var var6 = 0;
    var var7 = null;
    var phi8 = null;
    var phi9 = null;
    var phi10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = 0;
    var var16 = null;
    var var17 = null;
    var var18 = 0;
    var var19 = null;
    var var20 = null;
    var var21 = null;
    var var22 = null;
    var var23 = null;
    var var24 = null;
    var var25 = null;
    var var26 = 0;
    var var27 = 0;
    var0 = arg0;
    // line number 910
    java$util$ImmutableCollections$AbstractImmutableSet.prototype.V$$init$$$.call(this);
    // line number 911
    var1 = this;
    var2 = (var0.data.length) | 0;
    var1.size = var2;
    // line number 913
    var3 = this;
    var4 = var0;
    var5 = (var4.data.length) | 0;
    var6 = ((2 * var5)) | 0;
    var7 = bytecoder.newarray((var6),null);
    var3.elements = var7;
    // line number 914
    phi8 = this;
    phi9 = var0;
    phi10 = (0) | 0;
    L444983406: while(true) {
     var11 = (phi10) | 0;
     var12 = phi9;
     var13 = (var12.data.length) | 0;
     if (var11 >= var13) {
      // line number 923
      return;
     } else {
      // line number 915
      var14 = phi9;
      var15 = (phi10) | 0;
      var16 = (var14.data[var15]);
      // line number 916
      var17 = phi8;
      var18 = ((java$util$ImmutableCollections$SetN.prototype.I$probe$Ljava$lang$Object$.call(var17,var16))) | 0;
      // line number 917
      if (var18 < 0) {
       // line number 920
       var24 = phi8;
       var25 = (var24.elements);
       var26 = ((var18 + 1)) | 0;
       var27 = ((0 - var26)) | 0;
       var25.data[var27] = var16;
       // line number 914
       phi10 = ((phi10 + 1)) | 0;
       // Here was a goto statement
       continue L444983406;
      } else {
       // line number 918
       var19 = new java$lang$IllegalArgumentException();
       var20 = new java$lang$StringBuilder();
       java$lang$StringBuilder.prototype.V$$init$$$.call(var20);
       var21 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$String$.call(var20,bytecoder.stringconstants[56]));
       var22 = (java$lang$StringBuilder.prototype.Ljava$lang$StringBuilder$$append$Ljava$lang$Object$.call(var21,var16));
       var23 = (java$lang$StringBuilder.prototype.Ljava$lang$String$$toString$$.call(var22));
       java$lang$IllegalArgumentException.prototype.V$$init$$Ljava$lang$String$.call(var19,var23);
       throw bytecoder.registerStack(var19, new Error().stack);
      }
     }
    }
  }

  I$probe$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = 0;
    var var4 = 0;
    var phi5 = null;
    var phi6 = null;
    var phi7 = 0;
    var var8 = null;
    var var9 = null;
    var var10 = 0;
    var var11 = null;
    var var12 = 0;
    var var13 = 0;
    var var14 = 0;
    var var15 = null;
    var var16 = 0;
    var var17 = 0;
    var var18 = 0;
    var var19 = null;
    var var20 = null;
    var var21 = 0;
    var var22 = 0;
    var phi23 = 0;
    var phi24 = null;
    var0 = arg0;
    // line number 1007
    var1 = ((var0.I$hashCode$$())) | 0;
    var2 = (this.elements);
    var3 = (var2.data.length) | 0;
    java$lang$Math.$i;
    var4 = ((java$lang$Math.I$floorMod$I$I(var1,var3))) | 0;
    phi5 = this;
    phi6 = var0;
    phi7 = (var4) | 0;
    L949732051: while(true) {
     // line number 1009
     var8 = phi5;
     var9 = (var8.elements);
     var10 = (phi7) | 0;
     var11 = (var9.data[var10]);
     // line number 1010
     if (var11 != null) {
      // line number 1012
      var15 = phi6;
      var16 = (var15.Z$equals$Ljava$lang$Object$(var11));
      if (var16 == 0) {
       // line number 1014
       phi7 = ((phi7 + 1)) | 0;
       var18 = (phi7) | 0;
       var19 = phi5;
       var20 = (var19.elements);
       var21 = (var20.data.length) | 0;
       If_85_0: {
        if (var18 != var21) {
         phi23 = (phi7) | 0;
         phi24 = var11;
         break If_85_0;
        } else {
         // line number 1015
         var22 = (0) | 0;
         phi23 = (var22) | 0;
         phi24 = var11;
         break If_85_0;
        }
       }
       // line number 1017
       // Here was a goto statement
       phi7 = (phi23) | 0;
       continue L949732051;
      } else {
       // line number 1013
       var17 = (phi7) | 0;
       return var17;
      }
     } else {
      // line number 1011
      var12 = (phi7) | 0;
      var13 = ((0 - var12)) | 0;
      var14 = ((var13 - 1)) | 0;
      return var14;
     }
    }
  }

  I$hashCode$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = 0;
    var phi4 = 0;
    var phi5 = null;
    var phi6 = 0;
    var phi7 = 0;
    var var8 = 0;
    var var9 = 0;
    var var10 = null;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = 0;
    var var15 = 0;
    var phi16 = 0;
    var phi17 = null;
    var var18 = 0;
    // line number 993
    // line number 994
    var0 = (this.elements);
    var1 = var0;
    var2 = (var1.data.length) | 0;
    var3 = (0) | 0;
    phi4 = (0) | 0;
    phi5 = var0;
    phi6 = (var2) | 0;
    phi7 = (var3) | 0;
    L939990235: while(true) {
     var8 = (phi7) | 0;
     var9 = (phi6) | 0;
     if (var8 >= var9) {
      // line number 999
      var18 = (phi4) | 0;
      return var18;
     } else {
      var10 = phi5;
      var11 = (phi7) | 0;
      var12 = (var10.data[var11]);
      // line number 995
      If_39_0: {
       if (var12 == null) {
        phi16 = (phi4) | 0;
        phi17 = var12;
        break If_39_0;
       } else {
        // line number 996
        var13 = (phi4) | 0;
        var14 = ((var12.I$hashCode$$())) | 0;
        var15 = ((var13 + var14)) | 0;
        phi16 = (var15) | 0;
        phi17 = var12;
        break If_39_0;
       }
      }
      // line number 994
      phi7 = ((phi7 + 1)) | 0;
      // Here was a goto statement
      phi4 = (phi16) | 0;
      continue L939990235;
     }
    }
  }

  Ljava$util$Iterator$$iterator$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    // line number 988
    var0 = new java$util$ImmutableCollections$SetN$SetNIterator();
    var1 = this;
    java$util$ImmutableCollections$SetN$SetNIterator.prototype.V$$init$$Ljava$util$ImmutableCollections$SetN$.call(var0,var1);
    return var0;
  }

  I$size$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    // line number 927
    var0 = ((this.size)) | 0;
    return var0;
  }

  Z$contains$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = 0;
    var var3 = null;
    var var4 = 0;
    var var5 = 0;
    var phi6 = null;
    var phi7 = null;
    var phi8 = 0;
    var phi9 = null;
    var phi10 = null;
    var0 = arg0;
    // line number 937
    var1 = (java$util$Objects.Ljava$lang$Object$$requireNonNull$Ljava$lang$Object$(var0));
    // line number 938
    var2 = ((this.size)) | 0;
    If_17_0: {
     If_17_1: {
      if (var2 <= 0) {
       phi9 = this;
       phi10 = var0;
       break If_17_1;
      } else {
       var3 = this;
       var4 = ((java$util$ImmutableCollections$SetN.prototype.I$probe$Ljava$lang$Object$.call(var3,var0))) | 0;
       if (var4 < 0) {
        phi9 = this;
        phi10 = var0;
        break If_17_1;
       } else {
        var5 = (1) | 0;
        // Here was a goto statement
        phi6 = this;
        phi7 = var0;
        phi8 = (var5) | 0;
        break If_17_0;
       }
      }
     }
     phi6 = phi9;
     phi7 = phi10;
     phi8 = (0) | 0;
     break If_17_0;
    }
    return phi8;
  }

  Z$isEmpty$$() {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = 0;
    var phi2 = null;
    var phi3 = 0;
    // line number 932
    var0 = ((this.size)) | 0;
    If_7_0: {
     if (var0 != 0) {
      phi2 = this;
      phi3 = (0) | 0;
      break If_7_0;
     } else {
      var1 = (1) | 0;
      // Here was a goto statement
      phi2 = this;
      phi3 = (var1) | 0;
      break If_7_0;
     }
    }
    return phi3;
  }
}


class java$util$ImmutableCollections$ListN extends java$util$ImmutableCollections$AbstractImmutableList {
  nativeObject = null;

  elements = null;
  allowNulls = false;

  constructor() {
    super();
  }

  static #rt = undefined;
  static get $rt() {
    if (!this.#rt) {
      this.#rt = bytecoder.newRuntimeClassFor(java$util$ImmutableCollections$ListN,[java$util$List,java$lang$Iterable,java$util$ImmutableCollections$ListN,java$lang$Object,java$util$AbstractCollection,java$util$RandomAccess,java$io$Serializable,java$util$ImmutableCollections$AbstractImmutableCollection,java$util$Collection,java$util$ImmutableCollections$AbstractImmutableList]);
    }
    return this.#rt;
  }

  set $lambdaimpl(impl) {
  }

  V$$init$$$Ljava$lang$Object$$Z(arg0,arg1) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = null;
    var var2 = null;
    var0 = arg0;
    // line number 663
    java$util$ImmutableCollections$AbstractImmutableList.prototype.V$$init$$$.call(this);
    // line number 664
    var1 = this;
    var1.elements = var0;
    // line number 665
    var2 = this;
    var2.allowNulls = arg1;
    // line number 666
    return;
  }

  I$size$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    // line number 675
    var0 = (this.elements);
    var1 = (var0.data.length) | 0;
    return var1;
  }

  Ljava$lang$Object$$get$I(arg0) {
    // source file is ImmutableCollections.java
    var var0 = 0;
    var var1 = null;
    var var2 = null;
    var0 = (arg0) | 0;
    // line number 680
    var1 = (this.elements);
    var2 = (var1.data[var0]);
    return var2;
  }

  I$indexOf$Ljava$lang$Object$(arg0) {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = null;
    var var3 = null;
    var phi4 = null;
    var phi5 = null;
    var var6 = null;
    var var7 = null;
    var var8 = 0;
    var phi9 = null;
    var phi10 = 0;
    var var11 = 0;
    var var12 = null;
    var var13 = 0;
    var var14 = null;
    var var15 = null;
    var var16 = 0;
    var var17 = null;
    var var18 = 0;
    var var19 = 0;
    var0 = arg0;
    // line number 715
    var1 = (this.allowNulls);
    If_10_0: {
     if (var1 != 0) {
      phi4 = this;
      phi5 = var0;
      break If_10_0;
     } else {
      var2 = var0;
      if (var2 != null) {
       phi4 = this;
       phi5 = var0;
       break If_10_0;
      } else {
       // line number 716
       var3 = new java$lang$NullPointerException();
       java$lang$NullPointerException.prototype.V$$init$$$.call(var3);
       throw bytecoder.registerStack(var3, new Error().stack);
      }
     }
    }
    // line number 718
    var6 = phi4;
    var7 = (var6.elements);
    // line number 719
    var8 = (0) | 0;
    phi9 = var7;
    phi10 = (var8) | 0;
    L163221595: while(true) {
     var11 = (phi10) | 0;
     var12 = phi9;
     var13 = (var12.data.length) | 0;
     if (var11 >= var13) {
      // line number 724
      return -1;
     } else {
      // line number 720
      var14 = phi5;
      var15 = phi9;
      var16 = (phi10) | 0;
      var17 = (var15.data[var16]);
      var18 = (java$util$Objects.Z$equals$Ljava$lang$Object$$Ljava$lang$Object$(var14,var17));
      if (var18 == 0) {
       // line number 719
       phi10 = ((phi10 + 1)) | 0;
       // Here was a goto statement
       continue L163221595;
      } else {
       // line number 721
       var19 = (phi10) | 0;
       return var19;
      }
     }
    }
  }

  Z$isEmpty$$() {
    // source file is ImmutableCollections.java
    var var0 = null;
    var var1 = 0;
    var var2 = 0;
    var phi3 = null;
    var phi4 = 0;
    // line number 670
    var0 = (this.elements);
    var1 = (var0.data.length) | 0;
    If_10_0: {
     if (var1 != 0) {
      phi3 = this;
      phi4 = (0) | 0;
      break If_10_0;
     } else {
      var2 = (1) | 0;
      // Here was a goto statement
      phi3 = this;
      phi4 = (var2) | 0;
      break If_10_0;
     }
    }
    return phi4;
  }
}

bytecoder.stringconstants[0] = bytecoder.toBytecoderString('null');
bytecoder.stringconstants[1] = bytecoder.toBytecoderString('');
bytecoder.stringconstants[2] = bytecoder.toBytecoderString('void');
bytecoder.stringconstants[3] = bytecoder.toBytecoderString('byte');
bytecoder.stringconstants[4] = bytecoder.toBytecoderString('char');
bytecoder.stringconstants[5] = bytecoder.toBytecoderString('short');
bytecoder.stringconstants[6] = bytecoder.toBytecoderString('int');
bytecoder.stringconstants[7] = bytecoder.toBytecoderString('float');
bytecoder.stringconstants[8] = bytecoder.toBytecoderString('double');
bytecoder.stringconstants[9] = bytecoder.toBytecoderString('long');
bytecoder.stringconstants[10] = bytecoder.toBytecoderString('boolean');
bytecoder.stringconstants[11] = bytecoder.toBytecoderString('Illegal initial capacity: ');
bytecoder.stringconstants[12] = bytecoder.toBytecoderString('Illegal load factor: ');
bytecoder.stringconstants[13] = bytecoder.toBytecoderString('java.awt.graphicsenv');
bytecoder.stringconstants[14] = bytecoder.toBytecoderString('de.mirkosertic.bytecoder.classlib.BytecoderGraphicsEnvironment');
bytecoder.stringconstants[15] = bytecoder.toBytecoderString('Null output stream');
bytecoder.stringconstants[16] = bytecoder.toBytecoderString('charset');
bytecoder.stringconstants[17] = bytecoder.toBytecoderString('jdk.io.useMonitors');
bytecoder.stringconstants[18] = bytecoder.toBytecoderString('true');
bytecoder.stringconstants[19] = bytecoder.toBytecoderString('RESET');
bytecoder.stringconstants[20] = bytecoder.toBytecoderString('CODING');
bytecoder.stringconstants[21] = bytecoder.toBytecoderString('CODING_END');
bytecoder.stringconstants[22] = bytecoder.toBytecoderString('FLUSHED');
bytecoder.stringconstants[23] = bytecoder.toBytecoderString('IGNORE');
bytecoder.stringconstants[24] = bytecoder.toBytecoderString('REPLACE');
bytecoder.stringconstants[25] = bytecoder.toBytecoderString('REPORT');
bytecoder.stringconstants[26] = bytecoder.toBytecoderString('Null action');
bytecoder.stringconstants[27] = bytecoder.toBytecoderString('capacity expected to be negative');
bytecoder.stringconstants[28] = bytecoder.toBytecoderString('capacity < 0: (');
bytecoder.stringconstants[29] = bytecoder.toBytecoderString(' < 0)');
bytecoder.stringconstants[30] = bytecoder.toBytecoderString('newLimit > capacity: (');
bytecoder.stringconstants[31] = bytecoder.toBytecoderString(' > ');
bytecoder.stringconstants[32] = bytecoder.toBytecoderString(')');
bytecoder.stringconstants[33] = bytecoder.toBytecoderString('newLimit expected to be negative');
bytecoder.stringconstants[34] = bytecoder.toBytecoderString('newLimit < 0: (');
bytecoder.stringconstants[35] = bytecoder.toBytecoderString('newPosition > limit: (');
bytecoder.stringconstants[36] = bytecoder.toBytecoderString('newPosition expected to be negative');
bytecoder.stringconstants[37] = bytecoder.toBytecoderString('newPosition < 0: (');
bytecoder.stringconstants[38] = bytecoder.toBytecoderString('mark > position: (');
bytecoder.stringconstants[39] = bytecoder.toBytecoderString('BIG_ENDIAN');
bytecoder.stringconstants[40] = bytecoder.toBytecoderString('LITTLE_ENDIAN');
bytecoder.stringconstants[41] = bytecoder.toBytecoderString('Wrong init level');
bytecoder.stringconstants[42] = bytecoder.toBytecoderString('system');
bytecoder.stringconstants[43] = bytecoder.toBytecoderString('main');
bytecoder.stringconstants[44] = bytecoder.toBytecoderString('Buffer size <= 0');
bytecoder.stringconstants[45] = bytecoder.toBytecoderString('UTF-8');
bytecoder.stringconstants[46] = bytecoder.toBytecoderString('Hello world!');
bytecoder.stringconstants[47] = bytecoder.toBytecoderString('Stream closed');
bytecoder.stringconstants[48] = bytecoder.toBytecoderString('\n');
bytecoder.stringconstants[49] = bytecoder.toBytecoderString('checkFromIndexSize');
bytecoder.stringconstants[50] = bytecoder.toBytecoderString('-XX:DumpLoadedClassList=');
bytecoder.stringconstants[51] = bytecoder.toBytecoderString('-XX:+RecordDynamicDumpInfo');
bytecoder.stringconstants[52] = bytecoder.toBytecoderString('-Xshare:');
bytecoder.stringconstants[53] = bytecoder.toBytecoderString('-XX:SharedClassListFile=');
bytecoder.stringconstants[54] = bytecoder.toBytecoderString('-XX:SharedArchiveFile=');
bytecoder.stringconstants[55] = bytecoder.toBytecoderString('-XX:ArchiveClassesAtExit=');
bytecoder.stringconstants[56] = bytecoder.toBytecoderString('duplicate element: ');
bytecoder.stringconstants[57] = bytecoder.toBytecoderString('length is odd');
bytecoder.stringconstants[58] = bytecoder.toBytecoderString('duplicate key: ');
bytecoder.stringconstants[59] = bytecoder.toBytecoderString('Range check failed');
bytecoder.stringconstants[60] = bytecoder.toBytecoderString('Range check failed: %s');
bytecoder.stringconstants[61] = bytecoder.toBytecoderString('Range [%s, %<s + %s) out of bounds for length %s');
bytecoder.stringconstants[62] = bytecoder.toBytecoderString('Range [%s, %s) out of bounds for length %s');
bytecoder.stringconstants[63] = bytecoder.toBytecoderString('Index %s out of bounds for length %s');
bytecoder.stringconstants[64] = bytecoder.toBytecoderString('Range check failed: %s %s');
bytecoder.stringconstants[65] = bytecoder.toBytecoderString('checkFromToIndex');
bytecoder.stringconstants[66] = bytecoder.toBytecoderString('checkIndex');
bytecoder.stringconstants[67] = bytecoder.toBytecoderString('Non-positive averageBytesPerChar');
bytecoder.stringconstants[68] = bytecoder.toBytecoderString('Non-positive maxBytesPerChar');
bytecoder.stringconstants[69] = bytecoder.toBytecoderString('averageBytesPerChar exceeds maxBytesPerChar');
bytecoder.stringconstants[70] = bytecoder.toBytecoderString('Null replacement');
bytecoder.stringconstants[71] = bytecoder.toBytecoderString('Empty replacement');
bytecoder.stringconstants[72] = bytecoder.toBytecoderString('Replacement too long');
bytecoder.stringconstants[73] = bytecoder.toBytecoderString('UNDERFLOW');
bytecoder.stringconstants[74] = bytecoder.toBytecoderString('OVERFLOW');
bytecoder.stringconstants[75] = bytecoder.toBytecoderString('MALFORMED');
bytecoder.stringconstants[76] = bytecoder.toBytecoderString('UNMAPPABLE');
bytecoder.stringconstants[77] = bytecoder.toBytecoderString('Current state = ');
bytecoder.stringconstants[78] = bytecoder.toBytecoderString(', new state = ');
bytecoder.stringconstants[79] = bytecoder.toBytecoderString('Non-positive length');
bytecoder.stringconstants[80] = bytecoder.toBytecoderString('apply');
bytecoder.stringconstants[81] = bytecoder.toBytecoderString('[');
bytecoder.stringconstants[82] = bytecoder.toBytecoderString(']');
bytecoder.stringconstants[83] = bytecoder.toBytecoderString('Illegal replacement');
bytecoder.stringconstants[84] = bytecoder.toBytecoderString('\uFFFD');
bytecoder.stringconstants[85] = bytecoder.toBytecoderString('Non-positive averageCharsPerByte');
bytecoder.stringconstants[86] = bytecoder.toBytecoderString('Non-positive maxCharsPerByte');
bytecoder.stringconstants[87] = bytecoder.toBytecoderString('averageCharsPerByte exceeds maxCharsPerByte');
bytecoder.stringconstants[88] = bytecoder.toBytecoderString('Index: ');
bytecoder.stringconstants[89] = bytecoder.toBytecoderString(' Size: ');
bytecoder.stringconstants[90] = bytecoder.toBytecoderString('data type scale not a power of two');
bytecoder.stringconstants[91] = bytecoder.toBytecoderString('No java.util.Objects instances for you!');
bytecoder.stringconstants[92] = bytecoder.toBytecoderString('[]');
bytecoder.stringconstants[93] = bytecoder.toBytecoderString('(this Collection)');
bytecoder.stringconstants[94] = bytecoder.toBytecoderString('[pos=');
bytecoder.stringconstants[95] = bytecoder.toBytecoderString(' lim=');
bytecoder.stringconstants[96] = bytecoder.toBytecoderString(' cap=');
bytecoder.stringconstants[97] = bytecoder.toBytecoderString('UNKNOWN');
bytecoder.stringconstants[98] = bytecoder.toBytecoderString('{}');
bytecoder.stringconstants[99] = bytecoder.toBytecoderString('(this Map)');
bytecoder.stringconstants[100] = bytecoder.toBytecoderString('=');
bytecoder.stringconstants[101] = bytecoder.toBytecoderString('Input length = ');
bytecoder.stringconstants[102] = bytecoder.toBytecoderString(', Size: ');
bytecoder.exports['setCharArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.V$setCharArrayEntry$$C$I$C;
bytecoder.exports['charArrayLength'] = de$mirkosertic$bytecoder$classlib$Array.I$charArrayLength$$C;
bytecoder.exports['toLong'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Long$$toLong$J;
bytecoder.exports['newCharArray'] = de$mirkosertic$bytecoder$classlib$Array.$C$newCharArray$I;
bytecoder.exports['toFloat'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Float$$toFloat$F;
bytecoder.exports['newObjectArray'] = de$mirkosertic$bytecoder$classlib$Array.$Ljava$lang$Object$$newObjectArray$I;
bytecoder.exports['byteArrayLength'] = de$mirkosertic$bytecoder$classlib$Array.I$byteArrayLength$$B;
bytecoder.exports['newByteArray'] = de$mirkosertic$bytecoder$classlib$Array.$B$newByteArray$I;
bytecoder.exports['main'] = kowi$cse_utils$Main.V$main$$Ljava$lang$String$;
bytecoder.exports['toByte'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Byte$$toByte$B;
bytecoder.exports['nullsafeEquals'] = de$mirkosertic$bytecoder$classlib$VM.Z$nullsafeEquals$Ljava$lang$Object$$Ljava$lang$Object$;
bytecoder.exports['toInteger'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Integer$$toInteger$I;
bytecoder.exports['setFileDescriptorHandle'] = java$io$FileDescriptor.prototype.V$setFileDescriptorHandle$I;
bytecoder.exports['toDouble'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Double$$toDouble$F;
bytecoder.exports['getByteArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.B$getByteArrayEntry$$B$I;
bytecoder.exports['getFileDescriptorHandle'] = java$io$FileDescriptor.prototype.I$getFileDescriptorHandle$$;
bytecoder.exports['setByteArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.V$setByteArrayEntry$$B$I$B;
bytecoder.exports['getIntArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.I$getIntArrayEntry$$I$I;
bytecoder.exports['exceptionMessage'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$String$$exceptionMessage$Ljava$lang$Exception$;
bytecoder.exports['objectToString'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$String$$objectToString$Ljava$lang$Object$;
bytecoder.exports['toShort'] = de$mirkosertic$bytecoder$classlib$VM.Ljava$lang$Short$$toShort$S;
bytecoder.exports['getCharArrayEntry'] = de$mirkosertic$bytecoder$classlib$Array.C$getCharArrayEntry$$C$I;
