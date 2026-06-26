/* ===================================================== // Module Library // module_library.js // ===================================================== */

console.log("Module Library V1 Loaded");

/* ====================================== // Module Registry // ====================================== */

const ModuleRegistry=[];

/* ====================================== // Register Module // ====================================== */

function registerModule(module){

ModuleRegistry.push(module);

console.log("Register :",module.id);

}

/* ====================================== // Read Module // ====================================== */

function readModule(id){

return ModuleRegistry.find(

m=>m.id===id

);

}

/* ====================================== // Update Module // ====================================== */

function updateModule(id,data){

const module=readModule(id);

if(module){

Object.assign(module,data);

console.log("Update :",id);

}

}

/* ====================================== // Remove Module // ====================================== */

function removeModule(id){

const index=

ModuleRegistry.findIndex(

m=>m.id===id

);

if(index>-1){

ModuleRegistry.splice(index,1);

console.log("Remove :",id);

}

}

/* ====================================== // Builder // ====================================== */

function buildSystem(){

console.log(

"System Build Ready"

);

console.table(

ModuleRegistry

);

}
