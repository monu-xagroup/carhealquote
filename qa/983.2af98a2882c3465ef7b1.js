"use strict";(self.webpackChunkcar_heal_quote=self.webpackChunkcar_heal_quote||[]).push([[983],{83983:(C,c,t)=>{t.r(c),t.d(c,{SettingsModule:()=>f});var d=t(38583),i=t(55278),l=t(38588),o=t(37716),h=t(11145),g=t(77782);let a=(()=>{class n{constructor(e,s){this.router=e,this.settingsService=s,this.menuItems=l.og}ngOnInit(){this.settingsService.isRepairChange.subscribe(e=>{this.menuItems=l.og.map(s=>("/settings/repair-type"===s.url&&(s.disabled=!e),s))}),this.settingsService.isJobTasksEnabled.subscribe(e=>{this.menuItems=l.og.map(s=>("/settings/jobs-tasks"===s.url&&(s.disabled=!e),s))})}navigate(e){this.router.navigate([e.url])}}return n.\u0275fac=function(e){return new(e||n)(o.Y36(i.F0),o.Y36(h.g))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-operations-layout"]],decls:5,vars:1,consts:[[1,"layout-container"],[1,"tab-header","fx-0"],[1,"tabs",3,"menuItems","menuItemClick"],[1,"tab-content","mh-0","fx-1"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"chq-tabs",2),o.NdJ("menuItemClick",function(y){return s.navigate(y)}),o.qZA(),o.qZA(),o.TgZ(3,"div",3),o._UZ(4,"router-outlet"),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("menuItems",s.menuItems))},directives:[g.K,i.lC],styles:[".layout-container[_ngcontent-%COMP%]{height:calc(100vh - calc(5px + 1.5vw + 58px + 1.6vw) - 76px);display:flex;flex-flow:column}.layout-container[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]{background:var(--xa-tab-background);overflow:auto}"]}),n})();var p=t(44466),r=t(74743),v=t(29790);const m=[{path:"",component:a,loadChildren:()=>Promise.all([t.e(592),t.e(631)]).then(t.bind(t,87631)).then(n=>n.OperationsModule)},{path:"employees",resolve:{version:r.n},loadChildren:()=>Promise.all([t.e(977),t.e(592),t.e(295)]).then(t.bind(t,73295)).then(n=>n.EmployeeModule)}];let f=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[d.ez,p.m,i.Bz.forChild(m),v.aw]]}),n})()},74743:(C,c,t)=>{t.d(c,{n:()=>g});var d=t(27969),i=t(84945),l=t(33568),o=t(37716),h=t(4893);let g=(()=>{class a{constructor(r){this.commonService=r}resolve(){return this.commonService.showLoading(),this.commonService.checkVersion().pipe((0,d.U)(r=>{this.commonService.hideLoading();const v=localStorage.getItem("appVersion"),m=r.buildRevision;return v&&v!=m?(localStorage.setItem("appVersion",m),setTimeout(()=>{location.reload()},10),(0,i.of)("new version available")):(localStorage.setItem("appVersion",m),(0,i.of)("new version is not available"))}),(0,l.K)(()=>(this.commonService.hideLoading(),(0,i.of)("data not available at this time"))))}}return a.\u0275fac=function(r){return new(r||a)(o.LFG(h.v))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);