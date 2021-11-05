(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7022:function(e,n,t){"use strict";var i,r=t(2209),a=t(5232),s=t(4421).Z.button(i||(i=(0,r.Z)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n\n  padding: 0.5rem 1rem;\n  margin: 1rem "," 1rem 0;\n\n  cursor: pointer;\n\n  &:disabled {\n    background-color: ",";\n    cursor: not-allowed;\n  }\n"])),a.O9.primary,a.O9.primaryContrast,(function(e){return e.marginRight?"1rem":"0"}),a.O9.disabled);n.Z=s},3555:function(e,n,t){"use strict";var i,r=t(2209),a=t(5232),s=t(4421).Z.input(i||(i=(0,r.Z)(["\n  border: #000 1px solid;\n  width: 100%;\n\n  padding: 0.25rem 0.5rem;\n  margin: 0.5rem 0;\n\n  &:read-only {\n    background-color: ",";\n    cursor: not-allowed;\n  }\n"])),a.O9.readOnly);n.Z=s},9853:function(e,n,t){"use strict";var i,r=t(2209),a=t(4421).Z.label(i||(i=(0,r.Z)(["\n  display: block;\n"])));n.Z=a},60:function(e,n,t){"use strict";t.d(n,{rS:function(){return i},Yu:function(){return r},UO:function(){return a}});var i="\n  mutation GenerateCertificate($name: String!) {\n    generateCertificate(name: $name) {\n      certificate {\n        id\n        name\n        certificateFile\n        is_revoked\n      }\n      privateKey\n    }\n  }\n",r="\n  mutation RevokeCertificate($id: ID!) {\n    revokeCertificate(id: $id) {\n      ... on NotFoundException {\n        message\n      }\n\n      ... on RevokeCertificateSuccess {\n        success\n      }\n    }\n  }\n",a="\n  query {\n    crl\n  }\n"},7236:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return S}});var i,r,a=t(5878),s=t(374),o=t(4651),l=t(7294),c=t(60),d=t(8715),u=t(5073),h=t(7022),f=t(7692),m=t(3555),v=t(9853),x=t(2209),g=t(4421),j=g.Z.table(i||(i=(0,x.Z)(["\n  width: 100%;\n\n  th {\n    text-align: left;\n  }\n\n  th,\n  td {\n    padding: 0.25rem 0;\n\n    &:first-of-type {\n      width: 2rem;\n    }\n    &:nth-of-type(3) {\n      width: 6rem;\n    }\n    &:last-of-type {\n      width: 6rem;\n    }\n  }\n\n  button {\n    margin: 0;\n  }\n"]))),p=t(1549),Z=t(2503),C=t(5893),k=function(e){e.token;var n=e.hasChanges,t=(0,l.useContext)(a.Il).user,i=(0,l.useState)(""),r=i[0],s=i[1],o=(0,l.useState)(null),x=(o[0],o[1]);return(0,C.jsxs)(f.Z,{children:[(0,C.jsxs)(u.Z,{widths:[1,1,.5,.5,.5],marginRight:.5,children:[(0,C.jsx)("h1",{children:"Issue a new certificate"}),(0,C.jsx)("p",{children:"Before you issue a new certificate, please check the user information above and save the changes if necessary."}),(0,C.jsx)(v.Z,{children:"Certificate Name"}),(0,C.jsx)(m.Z,{type:"text",value:r,onChange:function(e){return s(e.target.value)}}),(0,C.jsx)(h.Z,{disabled:n||0===r.length,onClick:function(e){if(!n)return(0,p.ZP)(c.rS,{name:r}).then((function(e){x(e.generateCertificate.certificate);var n=e.generateCertificate.privateKey,t=document.createElement("a");t.href="data:application/octet-stream;base64,"+n,t.download="".concat(e.generateCertificate.certificate.name,".key"),t.click(),s(""),(0,Z.JG)(d.PB)}))},children:"Generate certificate"})]}),(0,C.jsxs)(u.Z,{widths:[1,1,.5,.5,.5],marginLeft:.5,children:[(0,C.jsx)("h1",{children:"List of issued certificates"}),(0,C.jsxs)(j,{children:[(0,C.jsx)("thead",{children:(0,C.jsxs)("tr",{children:[(0,C.jsx)("th",{children:"ID"}),(0,C.jsx)("th",{children:"Name"}),(0,C.jsx)("th",{children:"Issued at"}),(0,C.jsx)("th",{children:"Revoke(-d)"})]})}),(0,C.jsx)("tbody",{children:t&&t.certificates.map((function(e,n){return(0,C.jsxs)("tr",{children:[(0,C.jsx)("td",{children:e.id}),(0,C.jsx)("td",{children:(0,C.jsx)("a",{href:"#",onClick:function(){return function(e){var n=document.createElement("a");n.href="data:application/octet-stream;base64,"+e.certificateFile,n.download="".concat(e.name,".pem"),n.click()}(e)},children:e.name})}),(0,C.jsx)("td",{children:new Date(e.created_at).toLocaleDateString()}),(0,C.jsx)("td",{children:e.is_revoked?"Revoked":(0,C.jsx)(h.Z,{onClick:(t=e.id,function(e){return(0,p.ZP)(c.Yu,{id:t}).then((function(e){"success"in e.revokeCertificate&&(0,Z.JG)(d.PB)}))}),children:"Revoke"})})]},n);var t}))})]})]})]})},w=g.Z.small(r||(r=(0,x.Z)(["\n  display: block;\n"]))),y=function(e){var n=e.user,t=(e.token,e.hasChanges),i=e.setHasChanges,r=(0,l.useState)(null),a=r[0],s=r[1],o=(0,l.useState)(null),c=o[0],x=o[1],g=(0,l.useState)(null===n||void 0===n?void 0:n.firstname),j=g[0],k=g[1],y=(0,l.useState)(null===n||void 0===n?void 0:n.lastname),b=y[0],S=y[1],_=(0,l.useState)(null===n||void 0===n?void 0:n.email),P=_[0],E=_[1];(0,l.useEffect)((function(){var e=null!==a&&""!==a||j!==(null===n||void 0===n?void 0:n.firstname)||b!==(null===n||void 0===n?void 0:n.lastname)||P!==(null===n||void 0===n?void 0:n.email);e!==t&&i(e)}),[n,a,j,b,P]);return(0,l.useEffect)((function(){j||k(null===n||void 0===n?void 0:n.firstname),b||S(null===n||void 0===n?void 0:n.lastname),P||E(null===n||void 0===n?void 0:n.email)}),[n]),n?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("h1",{children:"User information"}),(0,C.jsxs)(f.Z,{children:[(0,C.jsxs)(u.Z,{widths:[1,1,.5,.5,.5],marginRight:.5,children:[(0,C.jsx)(v.Z,{children:"User ID"}),(0,C.jsx)(m.Z,{type:"text",value:n.username||"",readOnly:!0}),(0,C.jsx)(v.Z,{children:"Password"}),(0,C.jsx)(m.Z,{type:"password",value:a||"",onChange:function(e){return s(e.target.value)}}),(0,C.jsx)(w,{children:"Note: If you leave this field empty, the password won't be changed."}),a&&a.length>0&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v.Z,{children:"Old Password"}),(0,C.jsx)(m.Z,{type:"password",value:c||"",onChange:function(e){return x(e.target.value)}})]}),(0,C.jsx)(h.Z,{onClick:function(){(0,p.ZP)(d.LK,{firstname:j,lastname:b,email:P}).then((function(e){(0,Z.JG)(d.PB,{me:e.updateMe})})),a&&a.length>0&&(0,p.ZP)(d.D3,{oldPassword:c,newPassword:a}).then((function(e){"message"in e.updatePassword||(s(null),x(null))}))},disabled:!t,marginRight:!0,children:"Save Changes"}),(0,C.jsx)(h.Z,{onClick:function(){s(null),k(null===n||void 0===n?void 0:n.firstname),S(null===n||void 0===n?void 0:n.lastname),E(null===n||void 0===n?void 0:n.email)},disabled:!t,children:"Reset"})]}),(0,C.jsxs)(u.Z,{widths:[1,1,.5,.5,.5],marginLeft:.5,children:[(0,C.jsx)(v.Z,{children:"Firstname"}),(0,C.jsx)(m.Z,{type:"text",value:j||"",onChange:function(e){return k(e.target.value)}}),(0,C.jsx)(v.Z,{children:"Lastname"}),(0,C.jsx)(m.Z,{type:"text",value:b||"",onChange:function(e){return S(e.target.value)}}),(0,C.jsx)(v.Z,{children:"E-Mail"}),(0,C.jsx)(m.Z,{type:"text",value:P||"",onChange:function(e){return E(e.target.value)}})]})]})]}):null},b=t(3552),S=(0,a.t_)((function(){var e=(0,l.useContext)(a.Il),n=e.user,t=e.token,i=(0,o.useRouter)(),r=(0,s.W)(),c=(0,l.useState)(!1),d=c[0],u=c[1];return(0,l.useEffect)((function(){r||i.push("/login")}),[r]),r&&n?(0,C.jsxs)(b.Z,{children:[(0,C.jsx)(y,{user:n,token:t,hasChanges:d,setHasChanges:u}),(0,C.jsx)("hr",{}),(0,C.jsx)(k,{token:t,hasChanges:d})]}):(JSON.stringify(r),JSON.stringify(n),null)}))},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7236)}])}},function(e){e.O(0,[481,552,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);