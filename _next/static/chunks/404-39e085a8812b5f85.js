"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{356:(e,t,r)=>{r.d(t,{I:()=>s});let a=r(4988).p,s={getProductos:async()=>{try{let e=await fetch(a+"/productos.html"),t=[],r=(await e.text()).match(/<pre>([\s\S]*?)<\/pre>/);if(r&&r[1])try{t=JSON.parse(r[1]).data}catch(e){console.error("Error al parsear JSON:",e),t=[]}else console.error("No se encontr\xf3 contenido JSON v\xe1lido en el <pre>"),alert("Error"),t=[];return t}catch(e){return alert("Error"+JSON.stringify(e)),console.error("Error al obtener los datos:",e),[]}},getProductoById:async e=>{try{let t=await fetch(a+"/productos.html"),r=null,s=(await t.text()).match(/<pre>([\s\S]*?)<\/pre>/);if(s&&s[1])try{r=JSON.parse(s[1]).data.find(t=>t.id===e)||null}catch(e){console.error("Error al parsear JSON:",e),r=null}else console.error("No se encontr\xf3 contenido JSON v\xe1lido en el <pre>"),alert("Error"),r=null;return r}catch(e){return alert("Error"+JSON.stringify(e)),console.error("Error al obtener los datos:",e),null}},getCategories:async()=>{try{let e=await fetch(a+"/productos.html"),t=[],r=(await e.text()).match(/<pre>([\s\S]*?)<\/pre>/);if(r&&r[1])try{t=JSON.parse(r[1]).data}catch(e){console.error("Error al parsear JSON:",e),t=[]}else console.error("No se encontr\xf3 contenido JSON v\xe1lido en el <pre>"),alert("Error"),t=[];let s=[...new Set(t.map(e=>e.categoria))].filter(e=>void 0!==e);return Promise.resolve(s)}catch(e){return alert("Error"+JSON.stringify(e)),console.error("Error al obtener los datos:",e),[]}}}},3999:(e,t,r)=>{r.d(t,{cn:()=>n});var a=r(2596),s=r(9688);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.QP)((0,a.$)(t))}},4988:(e,t,r)=>{r.d(t,{K:()=>s,p:()=>a});let a=r(9509).env.NEXT_PUBLIC_URL_SERVER||"",s={nombreEmpresa:"Muebleria Luxe",logo:"/logo.png",slogan:"La mejor calidad en muebles",telefono:"+56912345678",email:"sinemail@gmail.com",baseUrl:"muebleria-luxe"}},6037:(e,t,r)=>{r.d(t,{w:()=>o});var a=r(5155);r(2115);var s=r(7489),n=r(3999);function o(e){let{className:t,orientation:r="horizontal",decorative:o=!0,...i}=e;return(0,a.jsx)(s.b,{"data-slot":"separator-root",decorative:o,orientation:r,className:(0,n.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",t),...i})}},6191:(e,t,r)=>{r.d(t,{K:()=>k,U:()=>w});var a=r(5155),s=r(2115),n=r(7809),o=r(4416),i=r(6766),l=r(6874),c=r.n(l),d=r(7168),u=r(5452),h=r(3999);function m(e){let{...t}=e;return(0,a.jsx)(u.bL,{"data-slot":"sheet",...t})}function x(e){let{...t}=e;return(0,a.jsx)(u.l9,{"data-slot":"sheet-trigger",...t})}function p(e){let{...t}=e;return(0,a.jsx)(u.ZL,{"data-slot":"sheet-portal",...t})}function f(e){let{className:t,...r}=e;return(0,a.jsx)(u.hJ,{"data-slot":"sheet-overlay",className:(0,h.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...r})}function g(e){let{className:t,children:r,side:s="right",...n}=e;return(0,a.jsxs)(p,{children:[(0,a.jsx)(f,{}),(0,a.jsxs)(u.UC,{"data-slot":"sheet-content",className:(0,h.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500","right"===s&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm","left"===s&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm","top"===s&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b","bottom"===s&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",t),...n,children:[r,(0,a.jsxs)(u.bm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[(0,a.jsx)(o.A,{className:"size-4"}),(0,a.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}function v(e){let{className:t,...r}=e;return(0,a.jsx)("div",{"data-slot":"sheet-header",className:(0,h.cn)("flex flex-col gap-1.5 p-4",t),...r})}function j(e){let{className:t,...r}=e;return(0,a.jsx)(u.hE,{"data-slot":"sheet-title",className:(0,h.cn)("text-foreground font-semibold",t),...r})}var b=r(6037);function N(){let{isOpen:e,closeCart:t,cartItems:r,cartQuantity:s,addToCart:l,removeFromCart:u}=w(),h=r.reduce((e,t)=>e+t.product.precio*t.quantity,0);return(0,a.jsxs)(m,{open:e,onOpenChange:t,children:[(0,a.jsx)(x,{asChild:!0,children:(0,a.jsx)(d.$,{variant:"outline",size:"icon",className:"fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg md:bottom-8 md:right-8 z-50",children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(n.A,{className:"h-5 w-5"}),s>0&&(0,a.jsx)("span",{className:"absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground",children:s})]})})}),(0,a.jsxs)(g,{className:"flex w-full flex-col sm:max-w-lg",children:[(0,a.jsx)(v,{className:"px-1",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)(j,{children:"Carrito de compras"}),(0,a.jsx)(d.$,{variant:"ghost",size:"icon",onClick:t,children:(0,a.jsx)(o.A,{className:"h-4 w-4"})})]})}),0===s?(0,a.jsxs)("div",{className:"flex h-full flex-col items-center justify-center space-y-4",children:[(0,a.jsx)(n.A,{className:"h-12 w-12 text-muted-foreground"}),(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("h3",{className:"text-lg font-medium",children:"Tu carrito est\xe1 vac\xedo"}),(0,a.jsx)("p",{className:"text-muted-foreground",children:"Parece que no has a\xf1adido ning\xfan producto a tu carrito todav\xeda."})]}),(0,a.jsx)(d.$,{onClick:t,asChild:!0,children:(0,a.jsx)(c(),{href:"/",children:"Explorar productos"})})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"flex-1 overflow-y-auto py-6",children:(0,a.jsx)("div",{className:"space-y-6",children:r.map(e=>(0,a.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,a.jsx)("div",{className:"relative h-16 w-16 overflow-hidden rounded-md bg-muted",children:e.product.imagenUrl?(0,a.jsx)(i.default,{src:e.product.imagenUrl||"/placeholder.svg",alt:e.product.nombre,fill:!0,className:"object-cover"}):(0,a.jsx)(i.default,{src:"/placeholder.svg?height=64&width=64",alt:"Imagen no disponible",fill:!0,className:"object-cover"})}),(0,a.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,a.jsx)(c(),{href:"/productos/".concat(e.product.id),className:"font-medium hover:underline",onClick:t,children:e.product.nombre}),(0,a.jsxs)("div",{className:"text-sm text-muted-foreground",children:["$",e.product.precio.toFixed(2)," x ",e.quantity]})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsxs)(d.$,{variant:"outline",size:"icon",className:"h-7 w-7",onClick:()=>u(e.product.id),children:[(0,a.jsx)("span",{className:"sr-only",children:"Eliminar uno"}),(0,a.jsx)("span",{children:"-"})]}),(0,a.jsx)("span",{className:"w-4 text-center",children:e.quantity}),(0,a.jsxs)(d.$,{variant:"outline",size:"icon",className:"h-7 w-7",onClick:()=>l(e.product),disabled:e.quantity>=e.product.stock,children:[(0,a.jsx)("span",{className:"sr-only",children:"A\xf1adir uno"}),(0,a.jsx)("span",{children:"+"})]})]})]},e.product.id))})}),(0,a.jsxs)("div",{className:"space-y-4 pt-4",children:[(0,a.jsx)(b.w,{}),(0,a.jsxs)("div",{className:"space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:"Subtotal"}),(0,a.jsxs)("span",{children:["$",h.toFixed(2)]})]}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("span",{className:"text-muted-foreground",children:"Env\xedo"}),(0,a.jsx)("span",{children:"Calculado al finalizar"})]}),(0,a.jsx)(b.w,{}),(0,a.jsxs)("div",{className:"flex items-center justify-between font-medium",children:[(0,a.jsx)("span",{children:"Total"}),(0,a.jsxs)("span",{children:["$",h.toFixed(2)]})]})]}),(0,a.jsx)(d.$,{className:"w-full",size:"lg",children:"Finalizar compra"}),(0,a.jsx)(d.$,{variant:"outline",className:"w-full",onClick:t,children:"Continuar comprando"})]})]})]})]})}let y=(0,s.createContext)(null);function w(){let e=(0,s.useContext)(y);if(!e)throw Error("useShoppingCart must be used within a ShoppingCartProvider");return e}function k(e){let{children:t}=e,[r,n]=(0,s.useState)(!1),[o,i]=(0,s.useState)([]);(0,s.useEffect)(()=>{try{let e=localStorage.getItem("shopping-cart");e&&i(JSON.parse(e))}catch(e){console.error("Error loading cart from localStorage:",e)}},[]),(0,s.useEffect)(()=>{localStorage.setItem("shopping-cart",JSON.stringify(o))},[o]);let l=o.reduce((e,t)=>e+t.quantity,0);function c(){n(!0)}function d(e){var t;return(null===(t=o.find(t=>t.product.id===e))||void 0===t?void 0:t.quantity)||0}return(0,a.jsxs)(y.Provider,{value:{isOpen:r,openCart:c,closeCart:function(){n(!1)},getItemQuantity:d,addToCart:function(e){i(t=>t.find(t=>t.product.id===e.id)?t.map(t=>t.product.id===e.id?{...t,quantity:t.quantity+1}:t):[...t,{product:e,quantity:1}]),0===d(e.id)&&c()},removeFromCart:function(e){i(t=>{let r=t.find(t=>t.product.id===e);return(null==r?void 0:r.quantity)===1?t.filter(t=>t.product.id!==e):r?t.map(t=>t.product.id===e?{...t,quantity:t.quantity-1}:t):t})},cartQuantity:l,cartItems:o},children:[t,(0,a.jsx)(N,{})]})}},7168:(e,t,r)=>{r.d(t,{$:()=>l});var a=r(5155);r(2115);var s=r(9708),n=r(2085),o=r(3999);let i=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function l(e){let{className:t,variant:r,size:n,asChild:l=!1,...c}=e,d=l?s.DX:"button";return(0,a.jsx)(d,{"data-slot":"button",className:(0,o.cn)(i({variant:r,size:n,className:t})),...c})}},8057:(e,t,r)=>{r.d(t,{h:()=>u});var a=r(5155),s=r(2115),n=r(5196),o=r(7809),i=r(7712),l=r(4616),c=r(7168),d=r(6191);function u(e){let{product:t,compact:r=!1}=e,{addToCart:u,removeFromCart:h,getItemQuantity:m}=(0,d.U)(),[x,p]=(0,s.useState)(!1),f=m(t.id),g=f>0,v=()=>{t.stock<=0||(p(!0),u(t),setTimeout(()=>{p(!1)},1500))};return r?(0,a.jsx)(c.$,{className:"w-full",size:"sm",disabled:t.stock<=0,variant:g?"outline":"default",onClick:v,children:t.stock<=0?"Agotado":x?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.A,{className:"mr-2 h-4 w-4"}),"A\xf1adido"]}):g?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"En carrito (",f,")"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{className:"mr-2 h-4 w-4"}),"A\xf1adir"]})}):(0,a.jsxs)("div",{className:"space-y-4",children:[g?(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(c.$,{variant:"outline",size:"icon",onClick:()=>h(t.id),children:(0,a.jsx)(i.A,{className:"h-4 w-4"})}),(0,a.jsx)("span",{className:"w-10 text-center font-medium",children:f}),(0,a.jsx)(c.$,{variant:"outline",size:"icon",onClick:v,disabled:t.stock<=f,children:(0,a.jsx)(l.A,{className:"h-4 w-4"})})]}):(0,a.jsx)(c.$,{className:"w-full",size:"lg",disabled:t.stock<=0,onClick:v,children:t.stock<=0?"Agotado":x?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.A,{className:"mr-2 h-5 w-5"}),"A\xf1adido al carrito"]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{className:"mr-2 h-5 w-5"}),"A\xf1adir al carrito"]})}),t.stock>0&&t.stock<=5&&(0,a.jsxs)("p",{className:"text-sm text-amber-600",children:["\xa1Solo quedan ",t.stock," unidades!"]})]})}}}]);