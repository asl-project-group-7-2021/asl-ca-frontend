(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[221],{7022:function(n,e,r){"use strict";var t,i=r(2209),o=r(5232),c=r(4421).Z.button(t||(t=(0,i.Z)(["\n  background-color: ",";\n  color: ",";\n  border: none;\n\n  padding: 0.5rem 1rem;\n  margin: 1rem "," 1rem 0;\n\n  cursor: pointer;\n\n  &:disabled {\n    background-color: ",";\n    cursor: not-allowed;\n  }\n"])),o.O9.primary,o.O9.primaryContrast,(function(n){return n.marginRight?"1rem":"0"}),o.O9.disabled);e.Z=c},60:function(n,e,r){"use strict";r.d(e,{rS:function(){return t},Yu:function(){return i},UO:function(){return o}});var t="\n  mutation GenerateCertificate($name: String!) {\n    generateCertificate(name: $name) {\n      certificate {\n        id\n        name\n        certificateFile\n        is_revoked\n      }\n      privateKey\n    }\n  }\n",i="\n  mutation RevokeCertificate($id: ID!) {\n    revokeCertificate(id: $id) {\n      ... on NotFoundException {\n        message\n      }\n\n      ... on RevokeCertificateSuccess {\n        success\n      }\n    }\n  }\n",o="\n  query {\n    crl\n  }\n"},2795:function(n,e,r){"use strict";r.r(e);var t,i=r(2209),o=r(60),c=r(5878),a=r(5073),s=r(7022),u=r(7692),d=(r(7294),r(3552)),l=r(1549),f=r(4421),m=r(2503),h=r(5893),v=f.Z.textarea(t||(t=(0,i.Z)(["\n  width: 100%;\n  font-family: monospace;\n  padding: 1rem;\n"])));e.default=(0,c.t_)((function(){var n=(0,m.ZP)(o.UO,(function(n){return(0,l.ZP)(n)})),e=n.data,r=n.error;return!e||"error"in e?(0,h.jsx)(d.Z,{children:(0,h.jsxs)(u.Z,{children:[(0,h.jsxs)(a.Z,{widths:[1,1,.5,.5,.5],marginRight:.5,children:[(0,h.jsx)("h1",{children:"Certificate Revocation List"}),"Error when loading: ",JSON.stringify(e||r)]}),(0,h.jsx)(a.Z,{widths:[1,1,.5,.5,.5],marginLeft:.5})]})}):(0,h.jsx)(d.Z,{children:(0,h.jsx)(u.Z,{children:(0,h.jsxs)(a.Z,{widths:[1,1,1,1,1],children:[(0,h.jsx)("h1",{children:"Certificate Revocation List"}),(0,h.jsx)(s.Z,{onClick:function(){return function(n){var e=document.createElement("a");e.href="data:application/octet-stream;base64,"+n,e.download="crl.pem",e.click()}(e.crl)},children:"Download List"}),(0,h.jsx)(v,{readOnly:!0,rows:100,value:atob(e.crl)})]})})})}))},3996:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/revocation-list",function(){return r(2795)}])}},function(n){n.O(0,[481,552,774,888,179],(function(){return e=3996,n(n.s=e);var e}));var e=n.O();_N_E=e}]);