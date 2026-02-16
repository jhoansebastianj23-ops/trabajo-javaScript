<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Retro Dash — Clon</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header class="topbar">
    <div class="brand">RETRO DASH</div>
    <nav class="nav">
      <a href="#">Inicio</a>
      <a href="#missions">Misiones</a>
      <a href="#inventory">Inventario</a>
      <a href="#">Salir</a>
    </nav>
    <div class="status">
      <div>Puntuación: <span id="score">12450</span></div>
      <div>Nivel: <span id="level">5</span></div>
    </div>
  </header>

  <main class="container">
    <section class="panel" id="levels">
      <h2>Mis Niveles</h2>
      <ul class="levels">
        <li>Nivel 1</li>
        <li>Nivel 2</li>
        <li>Nivel 3</li>
        <li class="boss">Jefe Final</li>
      </ul>
    </section>

    <section class="panel energy" id="energy">
      <h2>Energía</h2>
      <div class="energy-bar">
        <div class="fill" style="width: 72%"></div>
      </div>
      <p class="energy-text">72% restante</p>
    </section>
  </main>

  <footer class="footer">
    <div>© 2025 RetroDash</div>
    <div class="links">
      <a href="#">Contacto</a>
      <a href="#">Créditos</a>
    </div>
  </footer>
</body>
</html>
