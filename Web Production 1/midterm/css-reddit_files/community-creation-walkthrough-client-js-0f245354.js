import{q as e,i as a,c as t,_ as s,s as n,ag as l,E as o,x as c,ah as i,d,ad as r,$ as m,f as h,e as u}from"./shell-e94b58e1.js";import"./icon-close-b3555bea.js";var f;!function(e){e.NameAndStyle="community_creation_walkthrough_name_style"}(f||(f={}));const p=e(n);let k=class extends p{constructor(){super(...arguments),this.modalRef=l(),this.events=new o(this),this.onFaceplateTrack=this.events.define("faceplate-track",(e=>{const{source:a,noun:t}=e.detail;switch(t){case"back":this.goBack(a);break;case"next":this.goNext(a)}}))}closeModal(){this.modalRef.value.close()}closeButtonHandler(e){this.closeModal(),e.preventDefault()}closeButtonImgKeyDownHandler(e){e.preventDefault(),"Enter"!==e.key&&" "!==e.key||this.closeModal()}async connectedCallback(){super.connectedCallback()}goBack(e){switch(e){case f.NameAndStyle:this.closeModal()}}goNext(e){}render(){return c` <faceplate-modal ${i(this.modalRef)} class="max-w-[640px] xs:max-w-[640px]">\n <div \n class="flex items-center" \n slot="closeButton" \n tabindex="0" \n @click="${this.closeButtonHandler}" \n @keydown="${this.closeButtonImgKeyDownHandler}" \n>\n ${d({appearance:"secondary",leadingIcon:r({size:m.Small}),size:h.Small,attributes:{title:"Close Form and Cancel creating a community"}})}\n </div>\n <div class="flex flex-col w-full gap-sm">\n <slot name="modal-content">\n <slot name="buttons-bar"></slot>\n </slot>\n </div>\n </faceplate-modal>`}};k.styles=[a`:host{display:block}`,t],k=s([u("community-creation-walkthrough")],k);
//# sourceMappingURL=community-creation-walkthrough-client-js-0f245354.js.map
