"use strict";var inputsList=document.querySelectorAll("form input");inputsList.forEach(function(e){var t=document.createElement("label");t.className="field-label",t.textContent=e.name,t.htmlFor=e.id,e.parentNode.insertBefore(t,e);var a=e.name[0].toUpperCase();e.placeholder="".concat(a).concat(e.name.slice(1))});
//# sourceMappingURL=js_task_fix_form_DOM.f7105e73.js.map
