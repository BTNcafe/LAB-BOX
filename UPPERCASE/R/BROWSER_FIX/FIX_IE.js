RUN(function(){"use strict";var n=function(n){document.write('<script src="/UPPERCASE/R/BROWSER_FIX/IE/'+n+'.js"></script>')};global.IE={},/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent),IE.version=parseInt(RegExp.$1,10),n("INFO"),RUN(function(){var n=document.createElement("canvas");return void 0===n.getContext||void 0===n.getContext("2d")})===!0&&(n("LIB/fxcanvas/jooscript"),n("LIB/fxcanvas/fxcanvas"),n("LIB/fxcanvas/flash_backend"),n("DOM/CANVAS"),n("CONTEXT"),n("INFO_NO_CANVAS")),IE.version<=6&&n("LIB/iepngfix/iepngfix_tilebg"),n("E"),n("EVENT_LOW"),void 0===global.innerWidth&&n("WIN_WIDTH"),void 0===global.innerHeight&&n("WIN_HEIGHT"),n("ADD_STYLE"),IE.version<=8&&n("DOM/IMG"),IE.version<=7&&n("DOM/IFRAME"),IE.version<=7&&n("CLEAR_BOTH"),IE.version<=8&&(n("COPY/COPY_DATA"),n("COPY/COPY_ARRAY"),n("PACK_DATA"),n("UNPACK_DATA")),IE.version<=7&&n("DOM/TABLE"),IE.version<=8&&n("DOM/TD"),IE.version<=8&&(n("ANIMATE"),n("KEYFRAME")),IE.version<=7&&n("CLOSE_WIN")});