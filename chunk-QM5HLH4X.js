import{a as x,b as A,e as E,g as l}from"./chunk-45A5QAGT.js";import{L as p,N as h,O as s,X as k,_ as C,ia as S,j as m,m as b,o as g,s as v,t as f,v as y}from"./chunk-YOZ53QDN.js";import"./chunk-PYI5D3D4.js";import{l as u}from"./chunk-LM3PONRF.js";var O=x`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
    transition: opacity 0.2s var(--wui-ease-out-power-2);
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
  }

  wui-card {
    max-width: var(--w3m-modal-width);
    width: 100%;
    position: relative;
    animation: zoom-in 0.2s var(--wui-ease-out-power-2);
    animation-fill-mode: backwards;
    outline: none;
  }

  wui-card[shake='true'] {
    animation:
      zoom-in 0.2s var(--wui-ease-out-power-2),
      w3m-shake 0.5s var(--wui-ease-out-power-2);
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation: slide-in 0.2s var(--wui-ease-out-power-2);
    }

    wui-card[shake='true'] {
      animation:
        slide-in 0.2s var(--wui-ease-out-power-2),
        w3m-shake 0.5s var(--wui-ease-out-power-2);
    }
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes w3m-view-height {
    from {
      height: var(--prev-height);
    }
    to {
      height: var(--new-height);
    }
  }
`;var d=function(w,e,t,o){var r=arguments.length,i=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(w,e,t,o);else for(var c=w.length-1;c>=0;c--)(n=w[c])&&(i=(r<3?n(i):r>3?n(e,t,i):n(e,t))||i);return r>3&&i&&Object.defineProperty(e,t,i),i},L="scroll-lock",a=class extends E{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=s.state.open,this.caipAddress=h.state.caipAddress,this.isSiweEnabled=f.state.isSiweEnabled,this.connected=h.state.isConnected,this.loading=s.state.loading,this.shake=s.state.shake,this.initializeTheming(),v.prefetch(),this.unsubscribe.push(s.subscribeKey("open",e=>e?this.onOpen():this.onClose()),s.subscribeKey("shake",e=>this.shake=e),s.subscribeKey("loading",e=>{this.loading=e,this.onNewAddress(h.state.caipAddress)}),h.subscribeKey("isConnected",e=>this.connected=e),h.subscribeKey("caipAddress",e=>this.onNewAddress(e)),f.subscribeKey("isSiweEnabled",e=>this.isSiweEnabled=e)),g.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?A`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            <wui-card
              shake="${this.shake}"
              role="alertdialog"
              aria-modal="true"
              tabindex="0"
              data-testid="w3m-modal-card"
            >
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}onOverlayClick(e){return u(this,null,function*(){e.target===e.currentTarget&&(yield this.handleClose())})}handleClose(){return u(this,null,function*(){let e=p.state.view==="ConnectingSiwe",t=p.state.view==="ApproveTransaction";if(this.isSiweEnabled){let{SIWEController:o}=yield import("./chunk-TTOZ4F23.js");o.state.status!=="success"&&(e||t)?s.shake():s.close()}else s.close()})}initializeTheming(){let{themeVariables:e,themeMode:t}=b.state,o=S.getColorTheme(t);k(e,o)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),y.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=L,e.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${L}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if(t.key==="Escape")this.handleClose();else if(t.key==="Tab"){let{tagName:o}=t.target;o&&!o.includes("W3M-")&&!o.includes("WUI-")&&e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}onNewAddress(e){return u(this,null,function*(){if(!this.connected||this.loading)return;let t=m.getPlainAddress(this.caipAddress),o=m.getPlainAddress(e),r=m.getNetworkId(this.caipAddress),i=m.getNetworkId(e);if(this.caipAddress=e,this.isSiweEnabled){let{SIWEController:n}=yield import("./chunk-TTOZ4F23.js"),c=yield n.getSession();if(c&&t&&o&&t!==o){n.state._client?.options.signOutOnAccountChange&&(yield n.signOut(),this.onSiweNavigation());return}if(c&&r&&i&&r!==i){n.state._client?.options.signOutOnNetworkChange&&(yield n.signOut(),this.onSiweNavigation());return}this.onSiweNavigation()}})}onSiweNavigation(){this.open?p.push("ConnectingSiwe"):s.open({view:"ConnectingSiwe"})}};a.styles=O;d([l()],a.prototype,"open",void 0);d([l()],a.prototype,"caipAddress",void 0);d([l()],a.prototype,"isSiweEnabled",void 0);d([l()],a.prototype,"connected",void 0);d([l()],a.prototype,"loading",void 0);d([l()],a.prototype,"shake",void 0);a=d([C("w3m-modal")],a);export{a as W3mModal};
