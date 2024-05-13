import"./faceplate-switch-input-2dded8eb.js";import{_ as e,n as t,e as s,s as o,ck as i,fP as n,x as a,ab as r,ac as d,fQ as c,cl as l,fR as h,fS as p,fT as y,fU as u}from"./shell-e94b58e1.js";import{u as m}from"./community-colors-d52d99a3.js";import{D as b}from"./display-theme-7e251d41.js";import"./checked-input-element-53a61642.js";let k=class extends o{constructor(){super(...arguments),this.enabled=!1,this.country=""}handler(e){e.preventDefault(),i({country:this.country,name:n,value:this.enabled?"false":"true"}),window.location.reload()}render(){return a`<div @click="${this.handler}" @keypress="${this.handler}">\n <slot></slot>\n </div>`}};e([t({type:Boolean})],k.prototype,"enabled",void 0),e([t({type:String})],k.prototype,"country",void 0),k=e([s("shreddit-modmode-setter")],k);let f=class extends o{constructor(){super(...arguments),this.enabled=!1,this.country="",this.cookieDomain="",this.sync=!1}async connectedCallback(){super.connectedCallback(),this.sync&&this.syncCookieToUserPreference()}async syncCookieToUserPreference(){try{const{data:e}=await r({operation:d.IdentityUserPreferences,variables:{includeNightMode:!0}}),t=e.identity?.preferences?.isNightModeEnabled;if(null==t)return;t!==this.enabled&&(this.enabled=t,this.updateClientStyles(),this.setCookie(),this.reportMismatch())}catch{}}setCookie(){i({country:this.country,name:c,value:this.enabled?b.Darkmode:b.Lightmode,options:{...l,domain:this.cookieDomain||void 0}})}async setUserPreference(){await r({operation:d.UpdateAccountPreferences,variables:{input:{isNightModeEnabled:this.enabled}}})}updateClientStyles(){m({isDarkMode:this.enabled});const e=this.querySelector("faceplate-switch-input");e&&(e.checked=this.enabled)}reportMismatch(){const e=h(this.country)&&!p(),t={cookies_enabled:navigator.cookieEnabled&&!e?"true":"false"};y({type:u.Counter,name:"shreddit_darkmode_preference_mismatches",value:1,labels:t})}async handler(e){e.preventDefault(),this.enabled=!this.enabled,this.updateClientStyles(),this.setCookie(),await this.setUserPreference()}handleKeypress(e){"Enter"!==e.key&&"Space"!==e.key||this.handler(e)}render(){return a`<div @click="${this.handler}" @keypress="${this.handleKeypress}">\n <community-colors></community-colors>\n <slot></slot>\n </div>`}};e([t({type:Boolean,reflect:!0})],f.prototype,"enabled",void 0),e([t({type:String})],f.prototype,"country",void 0),e([t({type:String,attribute:"cookie-domain"})],f.prototype,"cookieDomain",void 0),e([t({type:Boolean})],f.prototype,"sync",void 0),f=e([s("shreddit-darkmode-setter")],f);
//# sourceMappingURL=user-drawer-client-js-1ddde300.js.map
