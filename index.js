function checkInputs() {
	/*validasi huruf*/
	/*var huruf berisi regex(regular expression) Huruf atau letter */
	var huruf = /^[a-zA-Z]+$/;
	/*jika inputan username kosong*/
	if (document.getElementById('username').value === ""){
		/*muncul peringatan salah*/
		setErrorFor(username, "Bidang Tidak Boleh Kosong")
		return false;
	}
	/*jika isian berisi huruf*/
	if (document.getElementById('username').value.match(huruf)){
		/*muncul peringatan benar*/
		setSuccessFor(username);
	/*jika isian bukan huruf*/
	} else {
		/*muncul peringatan salah*/
		setErrorFor(username, "Isian Harus Huruf")
		return false;
	}
	/*validasi nama ketua*/
	/*jika inputan username kosong*/
	if (document.getElementById('username1').value === ""){
		/*muncul peringatan salah*/
		setErrorFor(username1, "Bidang Tidak Boleh Kosong")
		return false;
	}
	/*jika isian berisi huruf*/
	if (document.getElementById('username1').value.match(huruf)){
		/*muncul peringatan benar*/
		setSuccessFor(username1);
	/*jika isian bukan huruf*/
	} else {
		/*muncul peringatan salah*/
		setErrorFor(username1, "Isian Harus Huruf")
		return false;
	}
	/*validasi isian tari*/
	if (document.getElementById('tari').value === ""){
		setErrorFor(tari, "Bidang Tidak Boleh Kosong")
		return false;
	}
	if (document.getElementById('tari').value.match(huruf)){
		setSuccessFor(tari);
	} else {
		setErrorFor(tari, "Isian Harus Huruf")
		return false;
	}
	/*validasi kode email*/
	/*var rs,berisi value dari element input email*/
	var rs = document.getElementById("email").value;
	/*var atps, berisi metode indexOf untuk mecari sebuah karakter "@"pada element input email*/
	var atps=rs.indexOf("@");
	/*var dots, berisi metode lastindexof untuk mencari sebuah karater "." pada element input dari kanan ke kiri*/
	var dots=rs.lastIndexOf(".");
	/*pengkodisian jika alamat email tidak diisi*/
	if (email.value === ""){
		/*muncul pesan halaman harus diisi*/
		setErrorFor(email, "Bidang Tidak Boleh Kosong")
		return false;
	}
	/*mulai kondisi dengan formula validasi: jika atps kurang dari 1 atau jika dots kurang dari atps atau dots ditambah 2 lebih besar sama dengan dari jumlah panjang karakter rs*/
	if(atps<1 || dots<atps+2 || dots+2>= rs.length) {
		/*jika sesuai dengan formula kondisi maka muncul pesan salah*/
		setErrorFor(email, 'Email Kurang Tepat');
		return false;
		/*jika tdak sesuai formula maka muncul pesan benar*/
	} else {
		setSuccessFor(email);
	}
	/*validasi kode nomor*/
	/*var nomor berisi regex(regular expression) angka */
	var nomor = /^[0-9]+$/;
	if (document.getElementById('telpon').value === ""){
		setErrorFor(telpon, "Bidang Tidak Boleh Kosong")
		return false;
	} else {
		setSuccessFor(telpon);
	}
	/*jika isian bukan angka*/
	if (!document.getElementById('telpon').value.match(nomor)){
		setErrorFor(telpon, "Isian Harus Angka")
		return false;
	}
	/*jika isian angka berupa 12 digit*/
	if (document.getElementById('telpon').length!=12){
		setSuccessFor(telpon);
	} else {
		setErrorFor(telpon, "Nomor Handphone Harus 12 Digit")
		return false;
	}
	/*validasi tanggal*/
	/*var validformat berisi regex(regular expression) untuk penulisan tanggal */
	var validformat = /^\d{2}\/\d{2}\/\d{4}$/;
	if (document.getElementById('tanggal').value === ""){
		setErrorFor(tanggal, "Bidang Tidak Boleh Kosong")
		return false;
	} else {
		setSuccessFor(tanggal);
	}
	if (document.getElementById('tanggal').value.match(validformat)){
		setSuccessFor(tanggal);
	} else {
		setErrorFor(tanggal, "Format Tidak Valid")
		return false;
	}
}
/*membuat fungsi untuk eror message*/
function setErrorFor(input, message) {
	var formControl = input.parentElement;
	var small = formControl.querySelector('small');
	/*membuat format eror message di css*/
	formControl.className = 'form-control error';
	small.innerText = message;
}
/*membuat fungsi untuk success message*/
function setSuccessFor(input) {
	var formControl = input.parentElement;
	/*membuat format success message di css*/
	formControl.className = 'form-control success';
}