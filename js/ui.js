const agencies = document.querySelector('.agencies');

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});

// render recipe data
const renderAgency = (data, id) => {

  const html = `
  <li>
  <div class="collapsible-header" data-id="${id}"><i class="material-icons">home</i>${data.agencyName}</div>
  <div class="collapsible-body">
    <ul class="collection">
      <a href="#!" class="collection-header name">${data.name}</a>
      <a href="#!" class="collection-item title">${data.title}</a>
      <a href="mailto: ${data.email}" class="collection-item email"><i class=" tiny material-icons">email</i> ${data.email}</a>
      <a href="tel:+1-${data.cell}" class="collection-item cell"><i class="tiny material-icons">phone_android</i> Cell: ${data.cell}</a>
      <a href="tel:+1-${data.office}" class="collection-item office"><i class="tiny material-icons">local_phone</i> Office: ${data.office}</a>
      <iframe
        src="${data.map}"
        width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" class="map"></iframe>
    </ul>
  </div>
  </li>
  `;
  agencies.innerHTML += html;

};
