function validateForm() {
  // Validasi First Name dan Last Name
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementById("lname").value;
  var namePattern = /^[A-Za-z\s]{2,50}$/;

  if (!namePattern.test(firstName) || !namePattern.test(lastName)) {
    alert("Nama tidak valid. Pastikan nama tidak mengandung karakter khusus atau angka dan memiliki panjang antara 2-50 karakter.");
    return false;
  }

  // Validasi Email
  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailPattern.test(email)) {
    alert("Alamat email tidak valid.");
    return false;
  }

  // Validasi Password
  var password = document.getElementById("password").value;
  var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!])[A-Za-z\d@#$%^&!]{8,}$/;

  if (!passwordPattern.test(password)) {
    alert("Password tidak valid. Pastikan panjang minimal 8 karakter, mengandung setidaknya satu huruf besar, satu huruf kecil, satu angka, dan satu karakter khusus.");
    return false;
  }

  // Validasi checkbox "I agree to the Terms of Service"
  var agreeCheckbox = document.querySelector("input[type='checkbox']");

  if (!agreeCheckbox.checked) {
    alert("Anda harus menyetujui Syarat dan Ketentuan.");
    return false;
  }

  // Jika semua validasi berhasil, tampilkan pesan keberhasilan
  alert("Success Validation");
  return true;
}
