(window.webpackJsonp=window.webpackJsonp||[]).push([[7,10],{315:function(e,t,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(97).default)("3ae6d34c",content,!0,{sourceMap:!1})},316:function(e,t,r){"use strict";r.r(t);r(15);var n={name:"NewsletterForm",props:["id"],data:function(){return{email:"",emailErrorMessages:[],isEmailSent:!1}},methods:{isValidEmail:function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},resetMessages:function(){this.emailErrorMessages=[],this.isEmailSent=!1},sendMessage:function(){var e=this;this.resetMessages(),this.email.length<=0?this.emailErrorMessages.push(this.$t("newsletter_form.email_errors.valid_email")):this.isValidEmail(this.email)?fetch("https://formspree.io/f/xjvpbrrk",{method:"POST",body:JSON.stringify({email:this.email}),headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){e.isEmailSent=t.ok})).catch((function(t){e.emailErrorMessages.push(e.$t("newsletter_form.email_errors.something_went_wrong")),console.error(t)})):this.emailErrorMessages.push(this.$t("newsletter_form.email_errors.valid_email"))}}},o=(r(317),r(66)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"newsletter-form"},[r("h2",{staticClass:"fw-bold header-24 header-lg-40-2 mb-5",domProps:{innerHTML:e._s(e.$t("newsletter_form.title"))}}),e._v(" "),r("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"pr",void 0,t.key,void 0)?null:(t.preventDefault(),e.sendMessage.apply(null,arguments))}}},[r("div",{staticClass:"form-floating mb-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control border-top-0 border-start-0 border-end-0",attrs:{type:"email",id:e.id+"email",placeholder:e.$t("newsletter_form.email_placeholder"),name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),r("label",{staticClass:"newsletter-form__floating-label",attrs:{for:e.id+"email"}},[e._v(e._s(e.$t("newsletter_form.email_placeholder")))]),e._v(" "),e._l(e.emailErrorMessages,(function(t){return e.emailErrorMessages.length>0?r("div",{staticClass:"newsletter-form__error-message"},[e._v("\n        "+e._s(t)+"\n      ")]):e._e()}))],2),e._v(" "),r("button",{staticClass:"btn btn-primary newsletter-form__submit-btn w-auto",attrs:{type:"submit"}},[e._v("\n      "+e._s(e.$t("newsletter_form.sing_up"))+"\n    ")]),e._v(" "),e.isEmailSent?r("div",{staticClass:"newsletter-form__message-sent"},[e._v("\n      "+e._s(e.$t("newsletter_form.thanks_for_subscribing"))+"\n    ")]):e._e()])])}),[],!1,null,null,null);t.default=component.exports},317:function(e,t,r){"use strict";r(315)},318:function(e,t,r){var n=r(96)((function(i){return i[1]}));n.push([e.i,".newsletter-form .underline-image:after{background-image:url(/images/newsletter_line.jpg);height:.875rem}@media(min-width:992px){.newsletter-form .underline-image:after{background-image:url(/images/newsletter_line-desktop.jpg);transform:translate(-50%,40%)}}.newsletter-form__floating-label{color:#a3a5a4;line-height:1.625rem;font-size:1.25rem}.newsletter-form input[type=email]{font-size:1.25rem}.newsletter-form__error-message{color:#d91414}.newsletter-form__submit-btn{padding-left:3.5rem;padding-right:3.5rem}.newsletter-form__message-sent{margin-top:1rem;color:#a0ed23}",""]),n.locals={},e.exports=n},322:function(e,t,r){var content=r(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(97).default)("5a1fb680",content,!0,{sourceMap:!1})},337:function(e,t,r){"use strict";r(322)},338:function(e,t,r){var n=r(96)((function(i){return i[1]}));n.push([e.i,".contact-us{margin-bottom:13.6875rem}.contact-us__questions-wrapper{padding-bottom:4rem;margin-bottom:4rem;border-bottom:.0625rem solid #e8e9e8}@media(min-width:768px){.contact-us__questions-wrapper{display:flex;padding-left:.65625rem;flex-direction:column;justify-content:center;align-items:baseline;padding-right:4rem;padding-bottom:unset;margin-bottom:unset;border-bottom:unset}}.contact-us__questions-wrapper .underline-image:after{background-image:url(/images/newsletter_question_line.jpg);height:.875rem}@media(min-width:992px){.contact-us__questions-wrapper .underline-image:after{background-image:url(/images/newsletter_question_line-desktop.jpg);transform:translate(-50%,40%)}}.contact-us__questions-wrapper a[target=_blank]{font-size:.75rem;line-height:1.25rem}@media(min-width:768px){.contact-us__questions-wrapper a[target=_blank]{font-size:1rem;line-height:1.625rem}}.contact-us__questions-wrapper a[target=_blank]:hover{opacity:.5}.contact-us__line{width:4rem;height:.0625rem;background-color:#e8e9e8;margin-bottom:2.5rem}@media(min-width:768px){.contact-us__newsletter-wrapper{border-left:.0625rem solid #e8e9e8;padding-left:5.25rem}}",""]),n.locals={},e.exports=n},352:function(e,t,r){"use strict";r.r(t);var n={name:"ContactUs",components:{NewsletterForm:r(316).default}},o=(r(337),r(66)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"wrapper contact-us"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"contact-us__questions-wrapper col-12 col-md-6"},[r("h2",{staticClass:"fw-bold header-24 header-lg-40-2 mb-5",domProps:{innerHTML:e._s(e.$t("contact_us.title"))}}),e._v(" "),r("a",{staticClass:"btn btn-link mb-6 header-md-24",attrs:{href:"mailto:info@cityecoview.com"}},[e._v("\n        info@cityecoview.com\n      ")]),e._v(" "),r("div",{staticClass:"contact-us__line"}),e._v(" "),e._m(0)]),e._v(" "),r("div",{staticClass:"contact-us__newsletter-wrapper col-12 col-md-6"},[r("NewsletterForm",{attrs:{id:"contact_us"}})],1)])])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a",{staticClass:"btn btn-link text-dark me-4 me-md-2 me-lg-4",attrs:{href:"https://www.facebook.com/ecocityview",target:"_blank",rel:"noopener"}},[e._v("\n          Facebook\n        ")]),e._v(" "),r("a",{staticClass:"btn btn-link text-dark me-4 me-md-2 me-lg-4",attrs:{href:"https://www.instagram.com/cityecoview/",target:"_blank",rel:"noopener"}},[e._v("\n          Instagram\n        ")]),e._v(" "),r("a",{staticClass:"btn btn-link text-dark",attrs:{href:"https://twitter.com/CityEcoView1",target:"_blank",rel:"noopener"}},[e._v("\n          Twitter\n        ")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{NewsletterForm:r(316).default})}}]);