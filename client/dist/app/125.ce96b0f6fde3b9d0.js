"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[125],{3125:(y,f,o)=>{o.r(f),o.d(f,{SignModule:()=>b});var p=o(8470),r=o(4780),d=o(9095),m=o(297),e=o(8256),s=o(4367),g=o(2887),u=o(6136);const x=[{path:"",component:(()=>{class n{constructor(t,i,h,l,v,w){this.alert=t,this.http=i,this.hash=h,this.us=l,this.router=v,this.ui=w,this.formConfig={title:"Sign In / Sign Up",components:[{set:"ceo@webart.work",module:r.xG.INPUT,type:d.o.EMAIL,placeholder:"fill your email",label:"E-mail",input:"email",focused:!0},{set:"asdasdasdasd",module:r.xG.INPUT,type:d.o.PASSWORD,placeholder:"fill your password",label:"Password",input:"password"},{module:r.xG.INPUT,placeholder:"fill code from email",hidden:!0,label:"Code",input:"code"},{module:r.xG.BUTTON,type:m.q.PRIMARY,label:"Let's go"}]},this._set=c=>{if(!c)return this.alert.error({text:"Something went wrong"});localStorage.setItem("waw_user",JSON.stringify(c)),this.http.set("token",c.token),this.us.user=c,this.router.navigate(["/profile"])}}submit(t){if(!this.formConfig.components[2].hidden&&t.code)return this.save();t.email?(this.hash.set("email",t.email),t.password?this.http.post("/api/user/status",t,i=>{i.email&&i.pass?this.login(t):i.email?this.reset(t):this.sign(t)}):this.alert.error({text:"Enter your password"})):this.alert.error({text:"Enter your email"})}login(t){this.http.post("/api/user/login",t,this._set.bind(this))}sign(t){this.http.post("/api/user/sign",t,this._set.bind(this))}reset(t){this.http.post("/api/user/request",t,()=>{this.formConfig.components[2].hidden=!1}),this.alert.info({text:"Mail will sent to your email"})}save(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(s.c9),e.Y36(s.OE),e.Y36(s.ol),e.Y36(p.KD),e.Y36(g.F0),e.Y36(s.Fz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:3,vars:1,consts:[[1,"auth-wrapper"],[1,"auth"],[3,"config","wSubmit"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"wform",2),e.NdJ("wSubmit",function(l){return i.submit(l)}),e.qZA()()()),2&t&&(e.xp6(2),e.Q6J("config",i.formConfig))},dependencies:[u.U],styles:['[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}[_nghost-%COMP%]{position:fixed;width:100%;height:100%;overflow-y:auto;display:flex;flex-direction:column}.auth-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background:var(--c-bg-primary);flex-grow:1;padding:20px}.auth[_ngcontent-%COMP%]{max-width:500px;width:100%;padding:40px;border-radius:var(--b-radius-card);box-shadow:0 0 6px var(--c-shadow);background:var(--c-bg-secondary)}.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)8px;font-weight:var(--ff-bold);color:var(--c-text-primary);text-align:center;margin-bottom:15px}@media (max-width: 767.9px){.auth__title[_ngcontent-%COMP%]{font-size:var(--fs)2px}}.auth__btn[_ngcontent-%COMP%]{text-align:center;margin-top:30px}.auth__btn[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:0;width:100%}@media (max-width: 767.9px){.auth[_ngcontent-%COMP%]   .form__title[_ngcontent-%COMP%]{font-size:var(--fs)-2px}}.w-forms[_ngcontent-%COMP%]{position:relative}.w-forms__level[_ngcontent-%COMP%]{top:5px;right:5px;position:absolute;display:inline-block;color:var(--c-text-secondary);font-size:calc(var(--fs) - 6px);line-height:calc(var(--fs) + 4px);letter-spacing:var(--letter-spacing);transition:var(--transition)}.w-forms__level._sky[_ngcontent-%COMP%]{color:var(--c-info)}.w-forms__level._orange[_ngcontent-%COMP%]{color:var(--c-warn)}.w-forms__level._green[_ngcontent-%COMP%]{color:var(--c-success)}.w-forms__input[_ngcontent-%COMP%]{padding-right:35px}.w-forms__input-block[_ngcontent-%COMP%]{position:relative}.w-forms__toggle[_ngcontent-%COMP%]{display:flex;position:absolute;right:10px;top:50%;color:var(--c-placeholder);transform:translateY(-50%);cursor:pointer}.w-forms__toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:21px}.w-forms[_ngcontent-%COMP%]   .icon-visibility[_ngcontent-%COMP%]{color:var(--c-primary)}']}),n})()}];let b=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[g.Bz.forChild(x),p.IR]}),n})()}}]);