(self.webpackChunkcar_heal_quote=self.webpackChunkcar_heal_quote||[]).push([[592],{11145:(D,m,c)=>{"use strict";c.d(m,{g:()=>d});var o=c(94650),e=c(92340),h=c(80529);let d=(()=>{class _{constructor(r){this.http=r,this.isRepairChange=new o.vpe(!1),this.isJobTasksEnabled=new o.vpe(!1),this.apiUrl="setting"}getEmployeeOffTimeType(){return this.http.get(`${e.N.bookingMgmtUrl}/api/lookup?type=employeeOffTimeType`)}getEmployeeDetails(r){return this.http.get(`${e.N.bookingMgmtUrl}/api/employee/${r}`)}updateEmployeeDetails(r,a){return this.http.put(`${e.N.bookingMgmtUrl}/api/employee/${r}`,a)}addNewWorkHours(r,a){return this.http.post(`${e.N.bookingMgmtUrl}/api/employee/${r}/workschedule`,a)}addNewOffTime(r,a){return this.http.post(`${e.N.bookingMgmtUrl}/api/employee/${r}/offtime`,a)}addNewWorkHoursForTeam(r,a){return this.http.post(`${e.N.bookingMgmtUrl}/api/employee/${r}/employees/workschedule`,{workSchedule:a})}addNewOffTimeForTeam(r,a){return this.http.post(`${e.N.bookingMgmtUrl}/api/employee/${r}/employees/offtime`,{offtime:a})}deleteWorkHours(r,a){return this.http.delete(`${e.N.bookingMgmtUrl}/api/employee/${r}/workschedule/${a}`)}deleteOffTime(r,a){return this.http.delete(`${e.N.bookingMgmtUrl}/api/employee/${r}/offtime/${a}`)}getEmployeeCalendar(r,a){return this.http.get(`${e.N.bookingMgmtUrl}/api/employee/${r}/${a}`)}getCompetencies(){return this.http.get(`${e.N.autoCoreApi}/api/Competencies`)}updateCompetencies({competenciesIDs:r,userID:a}){return this.http.post(`${e.N.autoCoreApi}/api/Employees/user-competencies`,{competenciesIDs:r,userID:a})}getEmployees(r,a){let s="";return s=r?`${e.N.autoCoreApi}/odata/Employees?$top=${r.pageSize}&$skip=${(r.currentPage-1)*r.pageSize}${a=a?`&$filter=(${a})`:""}${r.orderBy?`&$orderby=${r.orderBy} ${r.sortDirection}`:""}&$count=true`:`${e.N.autoCoreApi}/odata/Employees`,this.http.get(s)}saveNewBookingType(r){return this.http.post(`${e.N.caseMgmtUrl}/api/${this.apiUrl}/bookingtype`,r)}saveNewRepairType(r){return this.http.post(`${e.N.caseMgmtUrl}/api/${this.apiUrl}/repairtype`,r)}getSettings(){return this.http.get(`${e.N.caseMgmtUrl}/api/${this.apiUrl}`)}getAllSettings(){return this.http.get(`${e.N.caseMgmtUrl}/api/${this.apiUrl}/get-all`)}getBookingRepairType(){return this.http.get(`${e.N.caseMgmtUrl}/api/${this.apiUrl}/booking-repair-type`)}getBookingTypeColors(){return this.http.get(`${e.N.caseMgmtUrl}/api/lookup?type=BookingTypeColor`)}}return _.\u0275fac=function(r){return new(r||_)(o.LFG(h.eN))},_.\u0275prov=o.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},77782:(D,m,c)=>{"use strict";c.d(m,{K:()=>s});var o=c(94650),e=c(12484),h=c(81390),d=c(36895),_=c(89383);function u(i,n){if(1&i&&o._UZ(0,"img"),2&i){const t=o.oxw().$implicit;o.uIk("src",t.image,o.LSH)}}const r=function(i){return{active:i}};function a(i,n){if(1&i){const t=o.EpF();o.TgZ(0,"button",3),o.NdJ("click",function(){const p=o.CHM(t).$implicit,b=o.oxw();return o.KtG(b.triggerMenuItemClick(p))}),o.YNc(1,u,1,1,"img",4),o._uU(2),o.ALo(3,"translate"),o.qZA()}if(2&i){const t=n.$implicit;o.Q6J("ngClass",o.VKq(6,r,t.active))("disabled",t.disabled),o.xp6(1),o.Q6J("ngIf",t.image),o.xp6(1),o.hij(" ",o.lcZ(3,4,t.displayName||t.name)," ")}}let s=(()=>{class i{constructor(t,l){this.monitorService=t,this.router=l,this.mode="default",this.menuItemClick=new o.vpe,this.router.events.subscribe(()=>{this.setCurrentActiveMenu()})}splitter(t){const l=t?.split("/");if(l?.length>0){const g=l[l.length-1];return g.includes("?")?g.split("?")[0]:g}return""}setCurrentActiveMenu(){this.menuItems?.map(g=>g.active=!1);const t=this.splitter(location.href),l=this.menuItems?.filter(g=>this.splitter(g.url)===t||g.childMenuLinks&&g.childMenuLinks?.includes(t));l&&l.length>0?l[0].active=!0:this.menuItems&&(this.menuItems[0].active=!0)}setActiveMenu(t){this.menuItems.map(g=>g.active=!1);const l=this.menuItems.filter(g=>g.url===t.url);l&&l.length>0&&(l[0].active=!0)}triggerMenuItemClick(t){this.menuItemClick.emit(t)}ngOnInit(){this.monitorService.logEvent("ngOnInit",["ChqTabsComponent","addenda-quote"]),this.setCurrentActiveMenu()}}return i.\u0275fac=function(t){return new(t||i)(o.Y36(e.M),o.Y36(h.F0))},i.\u0275cmp=o.Xpm({type:i,selectors:[["chq-tabs"]],inputs:{mode:"mode",menuItems:"menuItems"},outputs:{menuItemClick:"menuItemClick"},decls:3,vars:2,consts:[[1,"button-wrapper"],[1,"button-toggle"],["class","button-toggle-button",3,"ngClass","disabled","click",4,"ngFor","ngForOf"],[1,"button-toggle-button",3,"ngClass","disabled","click"],[4,"ngIf"]],template:function(t,l){1&t&&(o.TgZ(0,"div",0)(1,"div",1),o.YNc(2,a,4,8,"button",2),o.qZA()()),2&t&&(o.uIk("mode",l.mode),o.xp6(2),o.Q6J("ngForOf",l.menuItems))},dependencies:[d.mk,d.sg,d.O5,_.X$],styles:[".button-wrapper[_ngcontent-%COMP%]   .button-toggle[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;padding:0}.button-wrapper[_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:10px 12px;gap:10px;flex:none;flex-grow:0;width:auto;height:40px;border-radius:0}.button-wrapper[_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px}.button-wrapper[mode=default][_ngcontent-%COMP%]   .button-toggle[_ngcontent-%COMP%]{gap:6px}.button-wrapper[mode=default][_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]{background:transparent;border-top-right-radius:8px;border-top-left-radius:8px;padding:10px 2vw;height:36px}.button-wrapper[mode=default][_ngcontent-%COMP%]   .button-toggle-button.active[_ngcontent-%COMP%]{background:var(--xa-tab-background);color:var(--xa-primary)}.button-wrapper[mode=button][_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]{border:1px solid var(--xa-light-gray);filter:drop-shadow(0px 1px 3px rgba(96,108,128,.05));background:transparent;border-radius:0}.button-wrapper[mode=button][_ngcontent-%COMP%]   .button-toggle-button.active[_ngcontent-%COMP%]{background:var(--xa-secondary);color:var(--xa-white)}.button-wrapper[mode=button][_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]:first-child{border-radius:8px 0 0 8px}.button-wrapper[mode=button][_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]:last-child{border-radius:0 8px 8px 0}.button-wrapper[mode=underline][_ngcontent-%COMP%]   .button-toggle-button[_ngcontent-%COMP%]{background:transparent;padding:10px 2vw;font-weight:600;color:var(--xa-gray)}.button-wrapper[mode=underline][_ngcontent-%COMP%]   .button-toggle-button.active[_ngcontent-%COMP%]{font-weight:700;color:var(--xa-black);border-bottom:4px solid var(--xa-primary)}"]}),i})()},65513:(D,m,c)=>{"use strict";c.d(m,{f:()=>e});var o=c(94650);let e=(()=>{class h{constructor(_){this.cd=_,this.ToggleChange=new o.vpe}statusChange(_){this.ToggleChange.emit({name:_.target.name,checked:_.target.checked})}ngOnChanges(_){this.cd.detectChanges()}}return h.\u0275fac=function(_){return new(_||h)(o.Y36(o.sBO))},h.\u0275cmp=o.Xpm({type:h,selectors:[["chq-toggle"]],inputs:{name:"name",checked:"checked",disabled:"disabled"},outputs:{ToggleChange:"ToggleChange"},features:[o.TTD],decls:3,vars:3,consts:[[1,"switch"],["type","checkbox",3,"name","checked","disabled","change"],[1,"slider","round"]],template:function(_,u){1&_&&(o.TgZ(0,"label",0)(1,"input",1),o.NdJ("change",function(a){return u.statusChange(a)}),o.qZA(),o._UZ(2,"span",2),o.qZA()),2&_&&(o.xp6(1),o.Q6J("name",u.name)("checked",u.checked)("disabled",u.disabled))},styles:['.switch[_ngcontent-%COMP%]{position:relative;display:inline-block;width:50px;height:24px}.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;width:0;height:0}.slider[_ngcontent-%COMP%]{position:absolute;cursor:pointer;inset:0;background-color:#ccc;transition:.4s}.slider[_ngcontent-%COMP%]:before{position:absolute;content:"";height:16px;width:16px;left:4px;bottom:4px;background-color:#fff;transition:.4s}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]{background-color:#76d672}input[_ngcontent-%COMP%]:focus + .slider[_ngcontent-%COMP%]{box-shadow:0 0 1px #76d672}input[_ngcontent-%COMP%]:checked + .slider[_ngcontent-%COMP%]:before{transform:translate(26px)}.slider.round[_ngcontent-%COMP%]{border-radius:34px}.slider.round[_ngcontent-%COMP%]:before{border-radius:50%}']}),h})()},90274:function(D){D.exports=function(){"use strict";var m={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},c=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,o=/\d\d/,e=/\d\d?/,h=/\d*[^-_:/,()\s\d]+/,d={},_=function(t){return(t=+t)+(t>68?1900:2e3)},u=function(t){return function(l){this[t]=+l}},r=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(l){if(!l||"Z"===l)return 0;var g=l.match(/([+-]|\d\d)/g),p=60*g[1]+(+g[2]||0);return 0===p?0:"+"===g[0]?-p:p}(t)}],a=function(t){var l=d[t];return l&&(l.indexOf?l:l.s.concat(l.f))},s=function(t,l){var g,p=d.meridiem;if(p){for(var b=1;b<=24;b+=1)if(t.indexOf(p(b,0,l))>-1){g=b>12;break}}else g=t===(l?"pm":"PM");return g},i={A:[h,function(t){this.afternoon=s(t,!1)}],a:[h,function(t){this.afternoon=s(t,!0)}],S:[/\d/,function(t){this.milliseconds=100*+t}],SS:[o,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[e,u("seconds")],ss:[e,u("seconds")],m:[e,u("minutes")],mm:[e,u("minutes")],H:[e,u("hours")],h:[e,u("hours")],HH:[e,u("hours")],hh:[e,u("hours")],D:[e,u("day")],DD:[o,u("day")],Do:[h,function(t){var l=d.ordinal,g=t.match(/\d+/);if(this.day=g[0],l)for(var p=1;p<=31;p+=1)l(p).replace(/\[|\]/g,"")===t&&(this.day=p)}],M:[e,u("month")],MM:[o,u("month")],MMM:[h,function(t){var l=a("months"),g=(a("monthsShort")||l.map(function(p){return p.slice(0,3)})).indexOf(t)+1;if(g<1)throw new Error;this.month=g%12||g}],MMMM:[h,function(t){var l=a("months").indexOf(t)+1;if(l<1)throw new Error;this.month=l%12||l}],Y:[/[+-]?\d+/,u("year")],YY:[o,function(t){this.year=_(t)}],YYYY:[/\d{4}/,u("year")],Z:r,ZZ:r};return function(t,l,g){g.p.customParseFormat=!0,t&&t.parseTwoDigitYear&&(_=t.parseTwoDigitYear);var p=l.prototype,b=p.parse;p.parse=function(C){var L=C.date,w=C.utc,v=C.args;this.$u=w;var E=v[1];if("string"==typeof E){var P=!0===v[2],x=!0===v[3],O=P||x,f=v[2];x&&(f=v[2]),d=this.$locale(),!P&&f&&(d=g.Ls[f]),this.$d=function($,S,A){try{if(["x","X"].indexOf(S)>-1)return new Date(("X"===S?1e3:1)*$);var M=function n(t){var g;g=d&&d.formats;for(var p=(t=t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(P,x,O){var f=O&&O.toUpperCase();return x||g[O]||m[O]||g[f].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(T,y,B){return y||B.slice(1)})})).match(c),b=p.length,C=0;C<b;C+=1){var L=p[C],w=i[L],E=w&&w[1];p[C]=E?{regex:w&&w[0],parser:E}:L.replace(/^\[|\]$/g,"")}return function(P){for(var x={},O=0,f=0;O<b;O+=1){var T=p[O];if("string"==typeof T)f+=T.length;else{var y=T.regex,B=T.parser,$=P.slice(f),S=y.exec($)[0];B.call(x,S),P=P.replace(S,"")}}return function(A){var M=A.afternoon;if(void 0!==M){var I=A.hours;M?I<12&&(A.hours+=12):12===I&&(A.hours=0),delete A.afternoon}}(x),x}}(S)($),I=M.year,U=M.month,H=M.day,J=M.hours,j=M.minutes,V=M.seconds,X=M.milliseconds,F=M.zone,R=new Date,k=H||(I||U?1:R.getDate()),Y=I||R.getFullYear(),N=0;I&&!U||(N=U>0?U-1:R.getMonth());var W=J||0,K=j||0,z=V||0,Z=X||0;return F?new Date(Date.UTC(Y,N,k,W,K,z,Z+60*F.offset*1e3)):A?new Date(Date.UTC(Y,N,k,W,K,z,Z)):new Date(Y,N,k,W,K,z,Z)}catch{return new Date("")}}(L,E,w),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),O&&L!=this.format(E)&&(this.$d=new Date("")),d={}}else if(E instanceof Array)for(var T=E.length,y=1;y<=T;y+=1){v[1]=E[y-1];var B=g.apply(this,v);if(B.isValid()){this.$d=B.$d,this.$L=B.$L,this.init();break}y===T&&(this.$d=new Date(""))}else b.call(this,C)}}}()},78773:function(D){D.exports=function(){"use strict";return function(m,c){c.prototype.weekday=function(o){var e=this.$locale().weekStart||0,h=this.$W,d=(h<e?h+7:h)-e;return this.$utils().u(o)?d:this.subtract(d,"day").add(o,"day")}}}()},17595:(D,m,c)=>{"use strict";c.d(m,{u:()=>a,x:()=>r});var o=c(11481),e=c(94650),h=c(328),d=c(99106),_=c(84943);const u=["*"];let r=(()=>{class s extends d.Ay{constructor(n,t,l,g,p,b,C){super(n,t,l,g,b,C),this._createEventEmitters([{subscribe:"disposing",emit:"onDisposing"},{subscribe:"dragEnd",emit:"onDragEnd"},{subscribe:"dragMove",emit:"onDragMove"},{subscribe:"dragStart",emit:"onDragStart"},{subscribe:"initialized",emit:"onInitialized"},{subscribe:"optionChanged",emit:"onOptionChanged"},{emit:"autoScrollChange"},{emit:"boundaryChange"},{emit:"cloneChange"},{emit:"containerChange"},{emit:"cursorOffsetChange"},{emit:"dataChange"},{emit:"dragDirectionChange"},{emit:"dragTemplateChange"},{emit:"elementAttrChange"},{emit:"groupChange"},{emit:"handleChange"},{emit:"heightChange"},{emit:"rtlEnabledChange"},{emit:"scrollSensitivityChange"},{emit:"scrollSpeedChange"},{emit:"widthChange"}]),p.setHost(this)}get autoScroll(){return this._getOption("autoScroll")}set autoScroll(n){this._setOption("autoScroll",n)}get boundary(){return this._getOption("boundary")}set boundary(n){this._setOption("boundary",n)}get clone(){return this._getOption("clone")}set clone(n){this._setOption("clone",n)}get container(){return this._getOption("container")}set container(n){this._setOption("container",n)}get cursorOffset(){return this._getOption("cursorOffset")}set cursorOffset(n){this._setOption("cursorOffset",n)}get data(){return this._getOption("data")}set data(n){this._setOption("data",n)}get dragDirection(){return this._getOption("dragDirection")}set dragDirection(n){this._setOption("dragDirection",n)}get dragTemplate(){return this._getOption("dragTemplate")}set dragTemplate(n){this._setOption("dragTemplate",n)}get elementAttr(){return this._getOption("elementAttr")}set elementAttr(n){this._setOption("elementAttr",n)}get group(){return this._getOption("group")}set group(n){this._setOption("group",n)}get handle(){return this._getOption("handle")}set handle(n){this._setOption("handle",n)}get height(){return this._getOption("height")}set height(n){this._setOption("height",n)}get rtlEnabled(){return this._getOption("rtlEnabled")}set rtlEnabled(n){this._setOption("rtlEnabled",n)}get scrollSensitivity(){return this._getOption("scrollSensitivity")}set scrollSensitivity(n){this._setOption("scrollSensitivity",n)}get scrollSpeed(){return this._getOption("scrollSpeed")}set scrollSpeed(n){this._setOption("scrollSpeed",n)}get width(){return this._getOption("width")}set width(n){this._setOption("width",n)}_createInstance(n,t){return new h.Z(n,t)}ngOnDestroy(){this._destroyWidget()}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(d._5),e.Y36(d._h),e.Y36(d.al),e.Y36(o.ki),e.Y36(e.Lbi))},s.\u0275cmp=e.Xpm({type:s,selectors:[["dx-draggable"]],inputs:{autoScroll:"autoScroll",boundary:"boundary",clone:"clone",container:"container",cursorOffset:"cursorOffset",data:"data",dragDirection:"dragDirection",dragTemplate:"dragTemplate",elementAttr:"elementAttr",group:"group",handle:"handle",height:"height",rtlEnabled:"rtlEnabled",scrollSensitivity:"scrollSensitivity",scrollSpeed:"scrollSpeed",width:"width"},outputs:{onDisposing:"onDisposing",onDragEnd:"onDragEnd",onDragMove:"onDragMove",onDragStart:"onDragStart",onInitialized:"onInitialized",onOptionChanged:"onOptionChanged",autoScrollChange:"autoScrollChange",boundaryChange:"boundaryChange",cloneChange:"cloneChange",containerChange:"containerChange",cursorOffsetChange:"cursorOffsetChange",dataChange:"dataChange",dragDirectionChange:"dragDirectionChange",dragTemplateChange:"dragTemplateChange",elementAttrChange:"elementAttrChange",groupChange:"groupChange",handleChange:"handleChange",heightChange:"heightChange",rtlEnabledChange:"rtlEnabledChange",scrollSensitivityChange:"scrollSensitivityChange",scrollSpeedChange:"scrollSpeedChange",widthChange:"widthChange"},features:[e._Bn([d._5,d._h,d.al]),e.qOj],ngContentSelectors:u,decls:1,vars:0,template:function(n,t){1&n&&(e.F$t(),e.Hsn(0))},encapsulation:2}),s})(),a=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[_.ywL,d.Lz,d.ie,o.Cu],_.ywL,d.ie]}),s})()},87074:(D,m,c)=>{"use strict";c.d(m,{r:()=>r});var o=c(11481),e=c(94650),d=(c(18170),c(99106));let r=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[d.Lz,d.ie,o.Cu],d.ie]}),a})()},91009:(D,m,c)=>{"use strict";c.d(m,{SP:()=>u,p6:()=>n,uf:()=>s});var o=c(36948),e=c(40911),h=c(12384),d=c(56821),u=(c(97987),o.Z.locale.bind(o.Z)),s=(e.Z.load.bind(e.Z),e.Z.format.bind(e.Z),h.Z.format.bind(h.Z)),n=(h.Z.parse.bind(h.Z),d.Z.format.bind(d.Z));d.Z.parse.bind(d.Z)},42673:(D,m,c)=>{"use strict";c.d(m,{g:()=>a});var o=c(94650),e=c(3238),h=c(12687);let a=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=o.oAB({type:s}),s.\u0275inj=o.cJS({imports:[h.rt,e.BQ,e.BQ]}),s})()}}]);