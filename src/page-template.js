const generateTeam = teamArray => {

  return `
    <section class ="w3-card-4">
    ${teamArray.manager
      .map(({ name, id, email, phone }) => {
      return `
        <div class="w3-container w3-blue">
        <h2>${name}</h2>
        <h3>Manager</h3>
        <p>ID: ${id}</p>
        <p>Email: <a href="mailto:${email}">${email}</a></p>
        <p>Office Number: ${phone}</p>
        </div>
        `;
  })
  .join('')}

    ${teamArray.engineer
      .map(({ name, id, email, git }) => {
      return `
      <div class="card">
      <h2>${name}</h2>
      <h3>Engineer</h3>
      <p>ID: ${id}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      <p>Github: <a href="https://github.com/${git}>${git}</a></p>
    </div>
    `;
  })
  .join('')}

  ${teamArray.intern
  .map(({ name, id, email, school }) => {
    return `
    <div class="card">
      <h2>${name}</h2>
      <h3>Engineer</h3>
      <p>ID: ${id}</p>
      <p>Email: <a href="mailto:${email}">${email}</a></p>
      <p>School: ${school}</p>
      </div>
    `
  })
  .join('')}
  </section>
`
}

module.exports = templateData => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
  </head>
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateTeam(templateData)}
    </main>
  </body>
  </html>
  `
};