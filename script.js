const form = document.getElementById("registerForm");
const tableBody = document.querySelector("#dataTable tbody");
let editRow = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;
  const gender = form.gender.value;
  const city = form.city.value;

  const hobbies = Array.from(form.querySelectorAll('input[name="hobby"]:checked'))
    .map(cb => cb.value).join(", ");

  if (editRow) {
    editRow.cells[0].innerText = name;
    editRow.cells[1].innerText = email;
    editRow.cells[2].innerText = gender;
    editRow.cells[3].innerText = hobbies;
    editRow.cells[4].innerText = city;
    editRow = null;
  } else {
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${gender}</td>
      <td>${hobbies}</td>
      <td>${city}</td>
      <td>
        <button onclick="editEntry(this)">Edit</button>
        <button onclick="deleteEntry(this)">Delete</button>
      </td>
    `;
  }

  form.reset();
});

function editEntry(btn) {
  editRow = btn.parentElement.parentElement;

  form.name.value = editRow.cells[0].innerText;
  form.email.value = editRow.cells[1].innerText;
  form.gender.value = editRow.cells[2].innerText;

  const hobbies = editRow.cells[3].innerText.split(", ").map(h => h.trim());
  form.querySelectorAll('input[name="hobby"]').forEach(cb => {
    cb.checked = hobbies.includes(cb.value);
  });

  form.city.value = editRow.cells[4].innerText;
}

function deleteEntry(btn) {
  const row = btn.parentElement.parentElement;
  row.remove();
  if (editRow === row) {
    editRow = null;
    form.reset();
  }
}
