const displayInfo = team => {
  if (team.role === "Manager") {
      console.log(employee.phone);
      return `office number: ${employee.phone}`;
  }

  if (team.title === "Engineer") {
    return `gitHub: ${employee.git}`;
  }

  if (team.title === "Intern") {
      return `school: ${employee.school}`;
  }

}

const generateTeam = teamArray => {
  return `
    <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">
      ${teamArray
        .map(({ name, id, email, ...header }) => {
          return `
          <div class="member-card">
            <div class="card-top">
                <h2>${teamArray[i].name}</h2>
                <h2>${teamArray[i].role}</h2>
            </div>
            <ul class="list-group list-group-flush text">
            <li class="list-group-item">ID: ${teamArray[j].id}</li>
            <li class="list-group-item">Email: ${teamArray[j].email}</li>
            <li class="list-group-item"> ${displayInfo(teamArray[i])}</li>
        </ul>
        `
        })
        .join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
console.log(templateData);

const { employee } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">Team Profile</h1>
      </div>
    </header>
    <main class="container my-5">
      ${generateTeam(employee)}
    </main>
  </body>
  </html>
  `
};