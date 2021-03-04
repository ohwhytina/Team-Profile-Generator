const generateTeam = teamArray => {

  return `
    <section class="row">
    ${teamArray.manager
      .map(({ name, id, email, phone }) => {
      return `
      <section class="card mb-3" style="width: 18rem">
        <div class="card-header bg-info text-center text-white">
          <h4 class="card-title">${name}</h4>
          <h5 class="card-subtitle mb-2">Manager</h5>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${id}</li>
            <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
            <li class="list-group-item">Office Number: ${phone}</li>
        </ul>
      </section>  
        `;
  })
  .join('')}
    ${teamArray.engineer
      .map(({ name, id, email, git }) => {
      return `
      <section class="card mb-3" style="width: 18rem">
        <div class="card-header bg-info text-center text-white">
          <h4>${name}</h4>
          <h5>Engineer</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Github: <a href="https://github.com/${git}">${git}</a></li>
        </ul>
      </section>
    `;
  })
  .join('')}

  ${teamArray.intern
  .map(({ name, id, email, school }) => {
    return `
    <section class="card mb-3" style="width: 18rem">
      <div class="card-header bg-info text-center text-white">
        <h4>${name}</h2>
        <h5>Intern</h3>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a></p>
        <li class="list-group-item">School: ${school}</li>
      </div>
    </section>
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
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
  <body>
    <header class="bg-danger">
        <h1 class="text-center text-white p-3">Team Profile</h1>
    </header>
    <main class="container p-5">
      ${generateTeam(templateData)}
    </main>
  </body>
  </html>
  `
};