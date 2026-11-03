const assert=require('node:assert/strict');const Model=require('./dist/solver.js');
let m=new Model();assert.equal(m.sensors.length,10);assert(m.sensors.every(s=>m.kind[s.index]===3));assert(m.profileIndices.every(i=>m.kind[i]===1));assert(m.addSource(0,.3,'pulse',1));assert(Math.abs(m.mass()-1)<1e-12);assert(!m.addSource(3,1,'pulse',1));
// Seal the remote boundary for a conservative-system check.
m.fixed.fill(0);for(let i=0;i<1000;i++)m.step();assert(Math.abs(m.mass()-1)<1e-10);assert(m.c.every(c=>c>=0&&Number.isFinite(c)));assert(m.c.every((c,i)=>m.kind[i]!==0||c===0));assert(m.sensors.some(s=>m.c[s.index]>0));
m=new Model();m.addSource(0,.8,'continuous',2);for(let i=0;i<100;i++)m.step();assert(Math.abs(m.mass()-2*m.time)<1e-9);m.reset();assert.equal(m.time,0);assert.equal(m.mass(),0);m.step();assert(m.mass()>0);
// Diffusion crosses the curved interface without an impermeable layer.
m=new Model();m.addSource(0,1.96,'pulse',1);for(let i=0;i<80;i++)m.step();assert(m.c.some((c,i)=>m.kind[i]===2&&c>0));
console.log('PASS: sensor geometry, positivity, sealed mass conservation, impermeable wall, sensor response, continuous injection, reset, permeable curved interface.');
