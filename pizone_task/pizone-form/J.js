
  // Maintain lists for unique emails and phone numbers
  const uniqueEmails = [];
  const uniquePhoneNumbers = [];

  function showPopup() {
    document.getElementById('userPopup').style.display = 'flex';
  }

  function hidePopup() {
    document.getElementById('userPopup').style.display = 'none';
  }

  function showSubcategory() {
    const category = document.getElementById('category').value;
    const subcategoryContainer = document.getElementById('subcategoryContainer');

    if (category === 'student') {
      subcategoryContainer.style.display = 'block';
      const subcategorySelect = document.getElementById('subcategory');
      subcategorySelect.innerHTML = '<option value="10th">10th</option><option value="12th">12th</option><option value="graduation">Graduation</option><option value="postgraduation">Post Graduation</option>';
    } else if (category === 'job') {
      subcategoryContainer.style.display = 'block';
      const subcategorySelect = document.getElementById('subcategory');
      subcategorySelect.innerHTML = '<option value="it">IT</option><option value="govt">Government</option><option value="others">Others</option>';
    } else {
      subcategoryContainer.style.display = 'none';
    }
  }

  function addUser(event) {
    event.preventDefault();

    const fname = document.getElementById('fname').value;
    const mname = document.getElementById('mname').value;
    const lname = document.getElementById('lname').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const mno = document.getElementById('mno').value;
    const email = document.getElementById('email').value;
    const category = document.getElementById('category').value;
    const subcategory = document.getElementById('subcategory').value;

    // Check if email and phone number already exist
    if (uniqueEmails.includes(email) || uniquePhoneNumbers.includes(mno)) {
      alert('Email or phone number already exists. Please provide unique details.');
      return;
    }

    // If not, add the new user and update the unique lists
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    cell1.innerHTML = fname;

    const cell2 = newRow.insertCell(1);
    cell2.innerHTML = mname;

    const cell3 = newRow.insertCell(2);
    cell3.innerHTML = lname;

    const cell4 = newRow.insertCell(3);
    cell4.innerHTML = gender;

    const cell5 = newRow.insertCell(4);
    cell5.innerHTML = mno;

    const cell6 = newRow.insertCell(5);
    cell6.innerHTML = email;

    const cell7 = newRow.insertCell(6);
    cell7.innerHTML = category;

    const cell8 = newRow.insertCell(7);
    cell8.innerHTML = subcategory || '';

    const cellAction = newRow.insertCell(-1);
    cellAction.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

    // Update unique email and phone number lists
    uniqueEmails.push(email);
    uniquePhoneNumbers.push(mno);

    hidePopup();
  }

  function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
