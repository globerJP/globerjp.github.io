/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{910:function(e,t,n){"use strict";n.r(t);var r=n(585),o=n(588),c=n(558),l=n(561);const h="firebasestorage.googleapis.com";class d extends c.c{constructor(code,e){super(_(code),`Firebase Storage: ${e} (${_(code)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}_codeEquals(code){return _(code)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function _(code){return"storage/"+code}function f(){return new d("unknown","An unknown error occurred, please check the error payload for server response.")}function m(){return new d("canceled","User canceled the upload/download.")}function w(){return new d("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function R(e){return new d("invalid-argument",e)}function v(){return new d("app-deleted","The Firebase app was deleted.")}function k(e){return new d("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function y(e,t){return new d("invalid-format","String does not match format '"+e+"': "+t)}function T(e){throw new d("internal-error","Internal error: "+e)}class x{constructor(e,path){this.bucket=e,this.path_=path}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=x.makeFromUrl(e,t)}catch(t){return new x(e,"")}if(""===n.path)return n;throw new d("invalid-default-bucket","Invalid default bucket '"+e+"'.")}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";const o=new RegExp("^gs://"+r+"(/(.*))?$","i");function c(e){e.path_=decodeURIComponent(e.path)}const l=t.replace(/[.]/g,"\\."),_=[{regex:o,indices:{bucket:1,path:3},postModify:function(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${l}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:c},{regex:new RegExp(`^https?://${t===h?"(?:storage.googleapis.com|storage.cloud.google.com)":t}/${r}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:c}];for(let i=0;i<_.length;i++){const t=_[i],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let o=r[t.indices.path];o||(o=""),n=new x(e,o),t.postModify(n);break}}if(null==n)throw function(e){return new d("invalid-url","Invalid URL '"+e+"'.")}(e);return n}}class U{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}function O(p){return"string"==typeof p||p instanceof String}function S(p){return C()&&p instanceof Blob}function C(){return"undefined"!=typeof Blob}function P(e,t,n,r){if(r<t)throw R(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw R(`Invalid value for '${e}'. Expected ${n} or less.`)}function E(e,t,n){let r=t;return null==n&&(r=`https://${t}`),`${n}://${r}/v0${e}`}function A(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){n=n+(t(r)+"="+t(e[r]))+"&"}return n=n.slice(0,-1),n}var I;!function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"}(I||(I={}));class L{constructor(e,t,n,r,o,c,l,h,d,_,f){this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=o,this.additionalRetryCodes_=c,this.callback_=l,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=_,this.connectionFactory_=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new B(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const t=n.getErrorCode()===I.NO_ERROR,o=n.getStatus();if(!t||this.isRetryStatusCode_(o)){const t=n.getErrorCode()===I.ABORT;return void e(!1,new B(!1,null,t))}const c=-1!==this.successCodes_.indexOf(o);e(!0,new B(c,n))}))},t=(e,t)=>{const n=this.resolve_,r=this.reject_,o=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(o,o.getResponse());void 0!==e?n(e):n()}catch(e){r(e)}else if(null!==o){const e=f();e.serverResponse=o.getErrorText(),this.errorCallback_?r(this.errorCallback_(o,e)):r(e)}else if(t.canceled){r(this.appDelete_?v():m())}else{r(new d("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}};this.canceled_?t(0,new B(!1,null,!0)):this.backoffId_=function(e,t,n){let r=1,o=null,c=null,l=!1,h=0;function d(){return 2===h}let _=!1;function f(...e){_||(_=!0,t.apply(null,e))}function m(t){o=setTimeout((()=>{o=null,e(R,d())}),t)}function w(){c&&clearTimeout(c)}function R(e,...t){if(_)return void w();if(e)return w(),void f.call(null,e,...t);if(d()||l)return w(),void f.call(null,e,...t);let n;r<64&&(r*=2),1===h?(h=2,n=0):n=1e3*(r+Math.random()),m(n)}let v=!1;function k(e){v||(v=!0,w(),_||(null!==o?(e||(h=2),clearTimeout(o),m(0)):e||(h=1)))}return m(0),c=setTimeout((()=>{l=!0,k(!0)}),n),k}(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=-1!==[408,429].indexOf(e),r=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||r}}class B{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function M(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function N(...e){const t=M();if(void 0!==t){const n=new t;for(let i=0;i<e.length;i++)n.append(e[i]);return n.getBlob()}if(C())return new Blob(e);throw new d("unsupported-environment","This browser doesn't seem to support creating Blobs")}const j={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class F{constructor(data,e){this.data=data,this.contentType=e||null}}function z(e,t){switch(e){case j.RAW:return new F(D(t));case j.BASE64:case j.BASE64URL:return new F(H(e,t));case j.DATA_URL:return new F(function(e){const t=new $(e);return t.base64?H(j.BASE64,t.rest):function(e){let t;try{t=decodeURIComponent(e)}catch(e){throw y(j.DATA_URL,"Malformed data URL.")}return D(t)}(t.rest)}(t),new $(t).contentType)}throw f()}function D(e){const b=[];for(let i=0;i<e.length;i++){let t=e.charCodeAt(i);if(t<=127)b.push(t);else if(t<=2047)b.push(192|t>>6,128|63&t);else if(55296==(64512&t)){if(i<e.length-1&&56320==(64512&e.charCodeAt(i+1))){t=65536|(1023&t)<<10|1023&e.charCodeAt(++i),b.push(240|t>>18,128|t>>12&63,128|t>>6&63,128|63&t)}else b.push(239,191,189)}else 56320==(64512&t)?b.push(239,191,189):b.push(224|t>>12,128|t>>6&63,128|63&t)}return new Uint8Array(b)}function H(e,t){switch(e){case j.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){throw y(e,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case j.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){throw y(e,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(t)}catch(t){throw y(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class ${constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw y(j.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=function(s,e){if(!(s.length>=e.length))return!1;return s.substring(s.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}class G{constructor(data,e){let t=0,n="";S(data)?(this.data_=data,t=data.size,n=data.type):data instanceof ArrayBuffer?(e?this.data_=new Uint8Array(data):(this.data_=new Uint8Array(data.byteLength),this.data_.set(new Uint8Array(data))),t=this.data_.length):data instanceof Uint8Array&&(e?this.data_=data:(this.data_=new Uint8Array(data.length),this.data_.set(data)),t=data.length),this.size_=t,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(S(this.data_)){const n=function(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}(this.data_,e,t);return null===n?null:new G(n)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new G(n,!0)}}static getBlob(...e){if(C()){const t=e.map((e=>e instanceof G?e.data_:e));return new G(N.apply(null,t))}{const t=e.map((e=>O(e)?z(j.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const r=new Uint8Array(n);let o=0;return t.forEach((e=>{for(let i=0;i<e.length;i++)r[o++]=e[i]})),new G(r,!0)}}uploadData(){return this.data_}}function X(s){let e;try{e=JSON.parse(s)}catch(e){return null}return"object"!=typeof(p=e)||Array.isArray(p)?null:e;var p}function W(path){const e=path.lastIndexOf("/",path.length-2);return-1===e?path:path.slice(e+1)}function V(e,t){return t}class K{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||V}}let J=null;function Z(){if(J)return J;const e=[];e.push(new K("bucket")),e.push(new K("generation")),e.push(new K("metageneration")),e.push(new K("name","fullPath",!0));const t=new K("name");t.xform=function(e,t){return function(e){return!O(e)||e.length<2?e:W(e)}(t)},e.push(t);const n=new K("size");return n.xform=function(e,t){return void 0!==t?Number(t):t},e.push(n),e.push(new K("timeCreated")),e.push(new K("updated")),e.push(new K("md5Hash",null,!0)),e.push(new K("cacheControl",null,!0)),e.push(new K("contentDisposition",null,!0)),e.push(new K("contentEncoding",null,!0)),e.push(new K("contentLanguage",null,!0)),e.push(new K("contentType",null,!0)),e.push(new K("metadata","customMetadata",!0)),J=e,J}function Y(e,t,n){const r={type:"file"},o=n.length;for(let i=0;i<o;i++){const e=n[i];r[e.local]=e.xform(r,t[e.server])}return function(e,t){Object.defineProperty(e,"ref",{get:function(){const n=e.bucket,path=e.fullPath,r=new x(n,path);return t._makeStorageReference(r)}})}(r,e),r}function Q(e,t,n){const r=X(t);if(null===r)return null;return Y(e,r,n)}function ee(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}function te(e,t,n){const r=X(n);if(null===r)return null;return function(e,t,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n.prefixes)for(const path of n.prefixes){const n=path.replace(/\/$/,""),o=e._makeStorageReference(new x(t,n));r.prefixes.push(o)}if(n.items)for(const o of n.items){const n=e._makeStorageReference(new x(t,o.name));r.items.push(n)}return r}(e,t,r)}class ne{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}function re(e){if(!e)throw f()}function se(e,t){return function(n,text){const r=Q(e,text,t);return re(null!==r),r}}function oe(e,t){return function(n,text){const r=Q(e,text,t);return re(null!==r),function(e,t,n,r){const o=X(t);if(null===o)return null;if(!O(o.downloadTokens))return null;const c=o.downloadTokens;if(0===c.length)return null;const l=encodeURIComponent;return c.split(",").map((t=>{const o=e.bucket,path=e.fullPath;return E("/b/"+l(o)+"/o/"+l(path),n,r)+A({alt:"media",token:t})}))[0]}(r,text,e.host,e._protocol)}}function ie(e){return function(t,n){let r;var path,o;return 401===t.getStatus()?r=t.getErrorText().includes("Firebase App Check token is invalid")?new d("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new d("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===t.getStatus()?(o=e.bucket,r=new d("quota-exceeded","Quota for bucket '"+o+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===t.getStatus()?(path=e.path,r=new d("unauthorized","User does not have permission to access '"+path+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function ae(e){const t=ie(e);return function(n,r){let o=t(n,r);var path;return 404===n.getStatus()&&(path=e.path,o=new d("object-not-found","Object '"+path+"' does not exist.")),o.serverResponse=r.serverResponse,o}}function ce(e,t,n){const r=E(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new ne(r,"GET",se(e,n),o);return c.errorHandler=ae(t),c}function le(e,t,n,r,o){const c={};t.isRoot?c.prefix="":c.prefix=t.path+"/",n&&n.length>0&&(c.delimiter=n),r&&(c.pageToken=r),o&&(c.maxResults=o);const l=E(t.bucketOnlyServerUrl(),e.host,e._protocol),h=e.maxOperationRetryTime,d=new ne(l,"GET",function(e,t){return function(n,text){const r=te(e,t,text);return re(null!==r),r}}(e,t.bucket),h);return d.urlParams=c,d.errorHandler=ie(t),d}function he(e,t,n){const r=Object.assign({},n);return r.fullPath=e.path,r.size=t.size(),r.contentType||(r.contentType=function(e,t){return e&&e.contentType||t&&t.type()||"application/octet-stream"}(null,t)),r}function ue(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l={"X-Goog-Upload-Protocol":"multipart"};const h=function(){let e="";for(let i=0;i<2;i++)e+=Math.random().toString().slice(2);return e}();l["Content-Type"]="multipart/related; boundary="+h;const d=he(t,r,o),_="--"+h+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+ee(d,n)+"\r\n--"+h+"\r\nContent-Type: "+d.contentType+"\r\n\r\n",f="\r\n--"+h+"--",body=G.getBlob(_,r,f);if(null===body)throw w();const m={name:d.fullPath},R=E(c,e.host,e._protocol),v=e.maxUploadRetryTime,k=new ne(R,"POST",se(e,n),v);return k.urlParams=m,k.headers=l,k.body=body.uploadData(),k.errorHandler=ie(t),k}class de{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function _e(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(e){re(!1)}return re(!!n&&-1!==(t||["active"]).indexOf(n)),n}const pe=262144;function fe(e,t,n,r,o,c,l,h){const _=new de(0,0);if(l?(_.current=l.current,_.total=l.total):(_.current=0,_.total=r.size()),r.size()!==_.total)throw new d("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.");const f=_.total-_.current;let m=f;o>0&&(m=Math.min(m,o));const R=_.current,v=R+m,k={"X-Goog-Upload-Command":m===f?"upload, finalize":"upload","X-Goog-Upload-Offset":`${_.current}`},body=r.slice(R,v);if(null===body)throw w();const y=t.maxUploadRetryTime,T=new ne(n,"POST",(function(e,text){const n=_e(e,["active","final"]),o=_.current+m,l=r.size();let h;return h="final"===n?se(t,c)(e,text):null,new de(o,l,"final"===n,h)}),y);return T.headers=k,T.body=body.uploadData(),T.progressCallback=h||null,T.errorHandler=ie(e),T}const ge={STATE_CHANGED:"state_changed"},me={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function be(e){switch(e){case"running":case"pausing":case"canceling":return me.RUNNING;case"paused":return me.PAUSED;case"success":return me.SUCCESS;case"canceled":return me.CANCELED;default:return me.ERROR}}class we{constructor(e,t,n){if("function"==typeof e||null!=t||null!=n)this.next=e,this.error=null!=t?t:void 0,this.complete=null!=n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}function Re(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}class ve{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=I.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=I.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=I.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,body,n){if(this.sent_)throw T("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==n)for(const e in n)n.hasOwnProperty(e)&&this.xhr_.setRequestHeader(e,n[e].toString());return void 0!==body?this.xhr_.send(body):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw T("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw T("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw T("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw T("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(header){return this.xhr_.getResponseHeader(header)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class ke extends ve{initXhr(){this.xhr_.responseType="text"}}function ye(){return new ke}class Te{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=Z(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused")}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=function(e,t,n,r,o){const c=t.bucketOnlyServerUrl(),l=he(t,r,o),h={name:l.fullPath},d=E(c,e.host,e._protocol),_={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":l.contentType,"Content-Type":"application/json; charset=utf-8"},body=ee(l,n),f=e.maxUploadRetryTime,m=new ne(d,"POST",(function(e){let t;_e(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(e){re(!1)}return re(O(t)),t}),f);return m.urlParams=h,m.headers=_,m.body=body,m.errorHandler=ie(t),m}(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ye,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const r=function(e,t,n,r){const o=e.maxUploadRetryTime,c=new ne(n,"POST",(function(e){const t=_e(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(e){re(!1)}n||re(!1);const o=Number(n);return re(!isNaN(o)),new de(o,r.size(),"final"===t)}),o);return c.headers={"X-Goog-Upload-Command":"query"},c.errorHandler=ie(t),c}(this._ref.storage,this._ref._location,e,this._blob),o=this._ref.storage._makeRequest(r,ye,t,n);this._request=o,o.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=pe*this._chunkMultiplier,t=new de(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((r,o)=>{let c;try{c=fe(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(e){return this._error=e,void this._transition("error")}const l=this._ref.storage._makeRequest(c,ye,r,o);this._request=l,l.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){pe*this._chunkMultiplier<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ce(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,ye,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=ue(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,ye,e,t);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":case"error":case"success":this._state=e,this._notifyObservers();break;case"canceled":this._error=m(),this._state=e,this._notifyObservers()}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start()}}get snapshot(){const e=be(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const o=new we(t||void 0,n||void 0,r||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const i=this._observers.indexOf(e);-1!==i&&this._observers.splice(i,1)}_notifyObservers(){this._finishPromise();this._observers.slice().forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(be(this._state)){case me.SUCCESS:Re(this._resolve.bind(null,this.snapshot))();break;case me.CANCELED:case me.ERROR:Re(this._reject.bind(null,this._error))();break;default:e=!1}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(be(this._state)){case me.RUNNING:case me.PAUSED:e.next&&Re(e.next.bind(e,this.snapshot))();break;case me.SUCCESS:e.complete&&Re(e.complete.bind(e))();break;default:e.error&&Re(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}class xe{constructor(e,t){this._service=e,this._location=t instanceof x?t:x.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new xe(e,t)}get root(){const e=new x(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return W(this._location.path)}get storage(){return this._service}get parent(){const e=function(path){if(0===path.length)return null;const e=path.lastIndexOf("/");return-1===e?"":path.slice(0,e)}(this._location.path);if(null===e)return null;const t=new x(this._location.bucket,e);return new xe(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw k(e)}}function Ue(e){const t={prefixes:[],items:[]};return Oe(e,t).then((()=>t))}async function Oe(e,t,n){const r={pageToken:n},o=await Se(e,r);t.prefixes.push(...o.prefixes),t.items.push(...o.items),null!=o.nextPageToken&&await Oe(e,t,o.nextPageToken)}function Se(e,t){null!=t&&"number"==typeof t.maxResults&&P("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=le(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(r,ye)}function Ce(e,t){e._throwIfRoot("updateMetadata");const n=function(e,t,n,r){const o=E(t.fullServerUrl(),e.host,e._protocol),body=ee(n,r),c=e.maxOperationRetryTime,l=new ne(o,"PATCH",se(e,r),c);return l.headers={"Content-Type":"application/json; charset=utf-8"},l.body=body,l.errorHandler=ae(t),l}(e.storage,e._location,t,Z());return e.storage.makeRequestWithTokens(n,ye)}function Pe(e){e._throwIfRoot("getDownloadURL");const t=function(e,t,n){const r=E(t.fullServerUrl(),e.host,e._protocol),o=e.maxOperationRetryTime,c=new ne(r,"GET",oe(e,n),o);return c.errorHandler=ae(t),c}(e.storage,e._location,Z());return e.storage.makeRequestWithTokens(t,ye).then((e=>{if(null===e)throw new d("no-download-url","The given file does not have any download URLs.");return e}))}function Ee(e){e._throwIfRoot("deleteObject");const t=function(e,t){const n=E(t.fullServerUrl(),e.host,e._protocol),r=e.maxOperationRetryTime,o=new ne(n,"DELETE",(function(e,t){}),r);return o.successCodes=[200,204],o.errorHandler=ae(t),o}(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ye)}function Ae(e,t){const n=function(path,e){const t=e.split("/").filter((component=>component.length>0)).join("/");return 0===path.length?t:path+"/"+t}(e._location.path,t),r=new x(e._location.bucket,n);return new xe(e.storage,r)}function Ie(e,path){if(e instanceof Be){const t=e;if(null==t._bucket)throw new d("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const n=new xe(t,t._bucket);return null!=path?Ie(n,path):n}return void 0!==path?Ae(e,path):e}function qe(e,t){if(t&&/^[A-Za-z]+:\/\//.test(t)){if(e instanceof Be)return new xe(e,t);throw R("To use ref(service, url), the first argument must be a Storage instance.")}return Ie(e,t)}function Le(e,t){const n=null==t?void 0:t.storageBucket;return null==n?null:x.makeFromBucketSpec(n,e)}class Be{constructor(e,t,n,r,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=r,this._firebaseVersion=o,this._bucket=null,this._host=h,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=r?x.makeFromBucketSpec(r,this._host):Le(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=x.makeFromBucketSpec(this._url,e):this._bucket=Le(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxUploadRetryTime=time}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(time){P("time",0,Number.POSITIVE_INFINITY,time),this._maxOperationRetryTime=time}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){return(await e.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xe(this,e)}_makeRequest(e,t,n,r){if(this._deleted)return new U(v());{const o=function(e,t,n,r,o,c){const l=A(e.urlParams),h=e.url+l,d=Object.assign({},e.headers);return function(e,t){t&&(e["X-Firebase-GMPID"]=t)}(d,t),function(e,t){null!==t&&t.length>0&&(e.Authorization="Firebase "+t)}(d,n),function(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!=t?t:"AppManager")}(d,c),function(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}(d,r),new L(h,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,o)}(e,this._appId,n,r,t,this._firebaseVersion);return this._requests.add(o),o.getPromise().then((()=>this._requests.delete(o)),(()=>this._requests.delete(o))),o}}async makeRequestWithTokens(e,t){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,r).getPromise()}}const Me="@firebase/storage",Ne="0.9.9",je="storage";function Fe(e,data,t){return function(e,data,t){return e._throwIfRoot("uploadBytesResumable"),new Te(e,new G(data),t)}(e=Object(c.l)(e),data,t)}function ze(e){return function(e){e._throwIfRoot("getMetadata");const t=ce(e.storage,e._location,Z());return e.storage.makeRequestWithTokens(t,ye)}(e=Object(c.l)(e))}function De(e,t){return qe(e=Object(c.l)(e),t)}function He(e,t,n,r={}){!function(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:o}=r;o&&(e._overrideAuthToken="string"==typeof o?o:Object(c.g)(o,e.app.options.projectId))}(e,t,n,r)}function $e(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),c=e.getProvider("app-check-internal");return new Be(n,r,c,t,o.SDK_VERSION)}Object(o._registerComponent)(new l.a(je,$e,"PUBLIC").setMultipleInstances(!0)),Object(o.registerVersion)(Me,Ne,""),Object(o.registerVersion)(Me,Ne,"esm2017");class Ge{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}class Xe{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ge(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Ge(t,this,this._ref))}),t)}on(e,t,n,r){let o;return t&&(o="function"==typeof t?e=>t(new Ge(e,this,this._ref)):{next:t.next?e=>t.next(new Ge(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,o,n||void 0,r||void 0)}}class We{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new Ve(e,this._service)))}get items(){return this._delegate.items.map((e=>new Ve(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}class Ve{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=function(e,t){return Ae(e,t)}(this._delegate,e);return new Ve(t,this.storage)}get root(){return new Ve(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Ve(e,this.storage)}put(data,e){return this._throwIfRoot("put"),new Xe(Fe(this._delegate,data,e),this)}putString(e,t=j.RAW,n){this._throwIfRoot("putString");const data=z(t,e),r=Object.assign({},n);return null==r.contentType&&null!=data.contentType&&(r.contentType=data.contentType),new Xe(new Te(this._delegate,new G(data.data,!0),r),this)}listAll(){return(e=this._delegate,Ue(e=Object(c.l)(e))).then((e=>new We(e,this.storage)));var e}list(e){return function(e,t){return Se(e=Object(c.l)(e),t)}(this._delegate,e||void 0).then((e=>new We(e,this.storage)))}getMetadata(){return ze(this._delegate)}updateMetadata(e){return function(e,t){return Ce(e=Object(c.l)(e),t)}(this._delegate,e)}getDownloadURL(){return e=this._delegate,Pe(e=Object(c.l)(e));var e}delete(){return this._throwIfRoot("delete"),e=this._delegate,Ee(e=Object(c.l)(e));var e}_throwIfRoot(e){if(""===this._delegate._location.path)throw k(e)}}class Ke{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(path){if(Je(path))throw R("ref() expected a child path but got a URL, use refFromURL instead.");return new Ve(De(this._delegate,path),this)}refFromURL(e){if(!Je(e))throw R("refFromURL() expected a full URL but got a child path, use ref() instead.");try{x.makeFromUrl(e,this._delegate.host)}catch(e){throw R("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ve(De(this._delegate,e),this)}setMaxUploadRetryTime(time){this._delegate.maxUploadRetryTime=time}setMaxOperationRetryTime(time){this._delegate.maxOperationRetryTime=time}useEmulator(e,t,n={}){He(this._delegate,e,t,n)}}function Je(path){return/^[A-Za-z]+:\/\//.test(path)}function Ze(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t});return new Ke(n,r)}!function(e){const t={TaskState:me,TaskEvent:ge,StringFormat:j,Storage:Ke,Reference:Ve};e.INTERNAL.registerComponent(new l.a("storage-compat",Ze,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion("@firebase/storage-compat","0.1.17")}(r.a)}}]);