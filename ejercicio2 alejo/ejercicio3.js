:root{
  --bg:#0b0b1f;
  --card:#131333;
  --accent:#ff4d4d;
  --muted:#ffd27f;
  --text:#ffffff;
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;font-family:Inter, system-ui, -apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial}
body{
  background:linear-gradient(180deg,var(--bg), #050515);
  color:var(--text);
  display:flex;
  flex-direction:column;
}

.topbar{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:18px 28px;
  background:linear-gradient(90deg, rgba(255,77,77,0.12), rgba(0,0,0,0.06));
  border-bottom:1px solid rgba(255,255,255,0.03);
  box-shadow:0 0 14px rgba(255,77,77,0.3);
  animation:headerGlow 4s infinite alternate;
}

@keyframes headerGlow{
  from{box-shadow:0 0 10px rgba(255,77,77,0.2)}
  to{box-shadow:0 0 24px rgba(255,77,77,0.45)}
}

.brand{
  font-weight:700;
  letter-spacing:2px;
  font-size:20px;
  color:var(--accent);
}

.nav a{
  color:var(--muted);
  text-decoration:none;
  margin:0 10px;
  padding:6px 10px;
  border-radius:6px;
  transition:all .25s ease;
}

.nav a:hover{
  background:rgba(255,77,77,0.22);
  color:var(--text);
  transform:scale(1.08);
  transition:all .25s ease;
}

.status{
  display:flex;
  gap:14px;
  color:var(--muted);
  font-weight:600;
}

.container{
  display:flex;
  gap:24px;
  padding:32px;
  flex:1;
  align-items:flex-start;
}

.panel{
  background:linear-gradient(180deg,var(--card), rgba(19,19,51,0.9));
  padding:22px;
  border-radius:12px;
  box-shadow:0 6px 18px rgba(10,10,20,0.6);
  min-width:280px;
  transition:transform .3s ease, box-shadow .3s ease;
}

.panel:hover{
  transform:translateY(-6px);
  box-shadow:0 10px 26px rgba(255,77,77,0.35);
}

.panel h2{
  margin:0 0 12px 0;
  color:var(--accent);
}

.levels{
  list-style:none;
  padding:0;
  margin:0;
  display:flex;
  flex-direction:column;
  gap:10px;
}

.levels li{
  padding:12px 14px;
  border-radius:8px;
  background:rgba(255,255,255,0.05);
  border:1px solid rgba(255,255,255,0.08);
  transition:background .25s ease, transform .25s ease;
}

.levels li:hover{
  transform:scale(1.05);
  background:rgba(255,255,255,0.08);
}

.levels li.boss{
  background:linear-gradient(90deg, rgba(255,77,77,0.18), rgba(0,0,0,0.04));
  border-color:rgba(255,77,77,0.2);
}

.energy .energy-bar{
  background:rgba(255,255,255,0.08);
  height:18px;
  border-radius:10px;
  overflow:hidden;
  border:1px solid rgba(255,255,255,0.12);
  box-shadow:0 0 12px rgba(255,77,77,0.3);
  animation:pulseGlow 2.8s infinite ease-in-out;
}

@keyframes pulseGlow{
  0%{box-shadow:0 0 6px rgba(255,77,77,0.2)}
  50%{box-shadow:0 0 16px rgba(255,77,77,0.5)}
  100%{box-shadow:0 0 6px rgba(255,77,77,0.2)}
}

.energy .energy-bar .fill{
  height:100%;
  background:linear-gradient(90deg,var(--accent), #ffb37f);
  transition:width .5s ease;
}

.energy-text{
  margin-top:8px;
  color:var(--muted);
  font-weight:600;
}

.footer{
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:14px 28px;
  border-top:1px solid rgba(255,255,255,0.02);
}

.footer .links a{
  color:var(--muted);
  text-decoration:none;
  margin-left:12px;
}

@media(max-width:800px){
  .container{flex-direction:column;padding:18px}
  .topbar{flex-direction:column;align-items:flex-start;gap:12px}
}
