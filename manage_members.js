function loadMembers() {
    const memberTableBody = document.getElementById("memberTableBody");
    memberTableBody.innerHTML = "";
  
    members.forEach(member => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${member.name}</td>
        <td>${member.email}</td>
        <td>${member.status}</td>
        <td>
          <button onclick="openEditModal(${member.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button onclick="confirmDelete(${member.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
        </td>
      `;
      memberTableBody.appendChild(row);
    });
  }
  