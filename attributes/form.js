const form = document.getElementById("registerForm");
const tableBody = document.querySelector("#dataTable tbody");
let editIndex = null;

let users = JSON.parse(localStorage.getItem("users")) || [];
renderTable();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.name.value;
  const email = form.email.value;
  const gender = form.gender.value;
  const city = form.city.value;

  const hobbies = Array.from(form.querySelectorAll('input[name="hobby"]:checked'))
    .map(cb => cb.value).join(", ");

  const user = { name, email, gender, hobbies, city };

  if (editIndex !== null) {
    users[editIndex] = user;
    editIndex = null;
  } else {
    users.push(user);
  }

  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
  form.reset();
});

function renderTable() {
  tableBody.innerHTML = "";

  users.forEach((user, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.gender}</td>
      <td>${user.hobbies}</td>
      <td>${user.city}</td>
      <td>
        <button onclick="editEntry(${index})">Edit</button>
        <button onclick="deleteEntry(${index})">Delete</button>
      </td>
    `;
  });
}

window.editEntry = function (index) {
  const user = users[index];
  form.name.value = user.name;
  form.email.value = user.email;
  form.gender.value = user.gender;
  form.city.value = user.city;

  const hobbies = user.hobbies.split(", ");
  form.querySelectorAll('input[name="hobby"]').forEach(cb => {
    cb.checked = hobbies.includes(cb.value);
  });

  editIndex = index;
};

window.deleteEntry = function (index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
};
