var Whenever=function(){var n,e=[],t=!1;return{get state(){return{ready:t,args:n,pendingCallbacks:e.length}},ready:function(){n=arguments,e.forEach(function(e){e.apply(this,n)}),e=[],t=!0},whenReady:function(a){t?a.apply(this,n):e.push(a)}}};