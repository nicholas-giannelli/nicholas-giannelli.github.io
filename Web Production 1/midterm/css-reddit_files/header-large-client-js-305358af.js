import"./icon-search-0cf260a1.js";import{q as e,_ as t,s,n as i,e as n,E as a,aN as r,aO as o,aJ as l,aK as h,bq as c,u as d,S as u,aI as g,c as p,x as m,cp as v}from"./shell-e94b58e1.js";import{S as w}from"./scroll-blocker-59f37f51.js";import{l as D}from"./load-lazy-script-with-nonce-39f6ea07.js";import{G as E}from"./index-d142f15a.js";import{l as k}from"./index-8ab0123a.js";import"./faceplate-search-input-902a4e97.js";import"./faceplate-text-input-8d5dd4c4.js";import"./icon-search-outline-b008fc5a.js";const y=e(s),S=e=>{e.preventDefault()};let b=class extends y{constructor(){super(...arguments),this.isHamburgerMenuIncluded=!1,this.showAccountManagerModal=!1,this.hamburgerMenuButton=null,this.menuDialog=null,this.loginButton=void 0,this.shredditInteractableElement=null,this.getAppBtn=null,this.closeDialogBtn=null,this.getAppDialog=null,this.search=null,this.userDrawerButton=null,this.userDrawerMenu=null,this.userDrawerContent=null,this.userDrawerLoginButton=null,this.advertiseButton=null,this.recapCampaignLink=void 0,this.mScreenMediaQueryList=window.matchMedia?.("(min-width: 1200px)"),this.cachedIsHamburgerMenuShown=!(this.mScreenMediaQueryList?.matches??1),this.scrollBlocker=new w(this),this.events=new a(this),this._track=this.events.define("faceplate-track",(e=>{const{source:t,action:s,noun:i}=e.detail;"nav"===t&&"click"===s&&"create_community"===i&&this._closeDialog()})),this.handleMScreenMediaQueryListChange=({matches:e})=>{e&&this.cachedIsHamburgerMenuShown&&this._closeDialog(),this.cachedIsHamburgerMenuShown=!e},this.handleOpenUserDrawer=e=>{e.stopPropagation(),this._closeDialog(),this.trackEvent(r())},this.handleCloseUserDrawer=e=>{e?.stopPropagation(),this.trackEvent(o())},this.setupUserDrawer=async()=>{this.userDrawerButton=this.querySelector("#expand-user-drawer-button"),this.userDrawerMenu=this.userDrawerButton?.closest("faceplate-dropdown-menu")??null,this.userDrawerContent=this.querySelector("#user-drawer-content")??null},this.focusSearchInput=()=>{this.search?.shadowRoot?.querySelector("faceplate-search-input")?.focus()},this.togglePointerEvents=()=>{document.querySelector("header")?.classList.toggle("pointer-events-auto")},this.handleCloseDialog=()=>{this.getAppDialog?.close()},this.handleGetAppClick=()=>{this.getAppDialog&&(this.togglePointerEvents(),this.getAppDialog?.showModal())},this.handleClickHamburgerMenu=async()=>{await this.initializeHamburgerMenuSlottedElements(),this.menuDialog&&(this.menuDialog.open?this._closeDialog():(this._closeUserDrawer(),this.menuDialog.show(),this.trackEvent(l()),this.scrollBlocker.blockPageScrolling()),this.trackEvent(h()))},this.handleSearchDropdownOpen=()=>{this._closeUserDrawer(),this._closeDialog()},this.handleAdvertiseButtonClick=async e=>{const{isAdblockEnabled:t}=await c();if(t){const t=d("faceplate-alert",{level:u.notice,message:"To advertise, disable your ad blocker or add reddit.com as an exception."});e.target?.dispatchEvent(t)}},this.unblockPageScrolling=()=>{this.scrollBlocker.unblockPageScrolling()}}get logoutButton(){return this.querySelector("#logout-list-item")}_closeDialog(){this.menuDialog?.open&&(this.menuDialog.close(),this.reset(),this.trackEvent(g()))}_closeUserDrawer(){this.userDrawerMenu?.hidden||this.userDrawerMenu?.close()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListenersFromSlottedElements()}addEventListenersToSlottedElements(){this.mScreenMediaQueryList?.addEventListener("change",this.handleMScreenMediaQueryListChange),this.getAppBtn?.addEventListener("click",this.handleGetAppClick),this.closeDialogBtn?.addEventListener("click",this.handleCloseDialog),this.getAppDialog?.addEventListener("faceplate-close",this.togglePointerEvents),this.userDrawerMenu?.addEventListener("faceplate-dropdown-menu:open",this.handleOpenUserDrawer),this.userDrawerMenu?.addEventListener("faceplate-dropdown-menu:close",this.handleCloseUserDrawer),this.advertiseButton?.addEventListener("click",this.handleAdvertiseButtonClick)}removeEventListenersFromSlottedElements(){this.mScreenMediaQueryList?.removeEventListener("change",this.handleMScreenMediaQueryListChange),this.getAppBtn?.removeEventListener("click",this.handleGetAppClick),this.closeDialogBtn?.removeEventListener("click",this.handleCloseDialog),this.getAppDialog?.removeEventListener("faceplate-close",this.togglePointerEvents),this.userDrawerMenu?.removeEventListener("faceplate-dropdown-menu:open",this.handleOpenUserDrawer),this.userDrawerMenu?.removeEventListener("faceplate-dropdown-menu:close",this.handleCloseUserDrawer)}async initializeHamburgerMenuSlottedElements(){this.isHamburgerMenuIncluded&&(this.menuDialog||(this.menuDialog=this.shadowRoot?.querySelector("slot[name=reddit-header-hamburger-menu]")?.assignedElements({flatten:!0})?.find((e=>e.matches("faceplate-dialog#menu")))??null),this.menuDialog&&(this.shredditInteractableElement||(this.shredditInteractableElement=this.menuDialog?.querySelector("shreddit-interactable-element"),this.shredditInteractableElement?.addEventListener("interactionEvent",(()=>this._closeDialog())))))}initializeSlottedElements(){!this.loginButton&&this.showAccountManagerModal&&(this.loginButton=this.querySelector("a#login-button"),this.loginButton?.addEventListener("click",S)),!this.userDrawerLoginButton&&this.showAccountManagerModal&&(this.userDrawerLoginButton=this.querySelector("#login-list-item"),this.userDrawerLoginButton?.addEventListener("click",(e=>{e.preventDefault(),this._closeUserDrawer()}))),this.getAppBtn||(this.getAppBtn=this.querySelector("#get-app")),this.getAppDialog||(this.getAppDialog=this.querySelector("#get-app-dialog")),this.closeDialogBtn||(this.closeDialogBtn=this.querySelector("#close-dialog")),this.search||(this.search=this.querySelector("reddit-search-large"),this.search?.addEventListener("reddit-search:open",this.handleSearchDropdownOpen)),this.userDrawerButton||this.setupUserDrawer(),this.advertiseButton||(this.advertiseButton=this.querySelector("#advertise-button")),!this.recapCampaignLink&&this.loginButton&&(this.recapCampaignLink=this.querySelector("a#recap-entrypoint"),this.recapCampaignLink?.addEventListener("click",S))}reset(){this.unblockPageScrolling(),this.menuDialog?.scrollTo(0,0)}static get styles(){return[p]}firstUpdated(){this.initialize()}async initialize(){this.hamburgerMenuButton||(this.hamburgerMenuButton=this.querySelector("#navbar-menu-button"),this.hamburgerMenuButton?.addEventListener("click",this.handleClickHamburgerMenu)),this.initializeSlottedElements(),this.addEventListenersToSlottedElements(),this.logoutButton?.addEventListener("click",k),this.logoutButton&&D(`script#${E}`)}render(){return m`\n <shreddit-async-loader bundleName="reddit_search_large"></shreddit-async-loader>\n ${this.isHamburgerMenuIncluded?m`<slot class="v2" name="reddit-header-hamburger-menu"></slot>`:""}\n <slot class="v2" name="reddit-search-dialog"></slot>\n <slot></slot>\n `}};t([i({type:Boolean,attribute:"is-hamburger-menu-included"})],b.prototype,"isHamburgerMenuIncluded",void 0),t([i({type:Boolean,attribute:"show-accountmanager-modal"})],b.prototype,"showAccountManagerModal",void 0),b=t([n("reddit-header-large")],b);class B extends HTMLElement{constructor(){super(...arguments),this.onChatButtonClick=()=>{this.toggleUIState()},this.onChatButtonKeyDown=e=>{"Enter"!==e.key&&" "!==e.key||this.toggleUIState()}}getChatClientHost(){return document.querySelector("reddit-chat-host")}async activateFeature(){try{await v({name:"reddit-chat"})}catch(e){if(!e.message?.endsWith("reddit-chat not found"))throw e}}async setUIState(){const e=this.getAttribute("initial-view");if(!e)return;await this.activateFeature();const t=this.getChatClientHost();t&&t.setUIState?.(e)}async toggleUIState(){await this.activateFeature();const e=this.getChatClientHost();e&&e.toggleUIState?.()}connectedCallback(){this.addEventListener("click",this.onChatButtonClick),this.addEventListener("keydown",this.onChatButtonKeyDown),this.setUIState()}disconnectedCallback(){this.removeEventListener("click",this.onChatButtonClick),this.removeEventListener("keydown",this.onChatButtonKeyDown)}}window.customElements.define("reddit-chat-header-button",B);
//# sourceMappingURL=header-large-client-js-305358af.js.map
