document.getElementById("bookingForm").addEventListener("submit", function(event){
    event.preventDefault();

    var isValid = true;
    var resultHTML = "";

    // Nama Pelanggan
    var nama = document.getElementById("namaPelanggan").value;
    if (!nama || nama.length > 30) {
        setError("namaPelanggan", "Nama harus diisi dan maksimal 30 karakter");
        isValid = false;
    } else {
        setError("namaPelanggan", "");
        resultHTML += "<p>Nama Pelanggan: " + nama + "</p>";
    }

    // Email
    var email = document.getElementById("email").value;
    if (!email || !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
        setError("email", "Format email tidak valid");
        isValid = false;
    } else {
        setError("email", "");
        resultHTML += "<p>Email: " + email + "</p>";
    }

    // Jam Keberangkatan
    var jam = document.getElementById("jamKeberangkatan").value;
    if (!jam || !jam.match(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/)) {
        setError("jamKeberangkatan", "Jam harus dalam format HH:MM (00:00 - 23:59)");
        isValid = false;
    } else {
        setError("jamKeberangkatan", "");
        resultHTML += "<p>Jam Keberangkatan: " + jam + "</p>";
    }

    // Tujuan Keberangkatan
    var tujuan = document.getElementById("tujuanKeberangkatan").value;
    if (!tujuan) {
        setError("tujuanKeberangkatan", "Tujuan keberangkatan harus diisi");
        isValid = false;
    } else {
        setError("tujuanKeberangkatan", "");
        resultHTML += "<p>Tujuan Keberangkatan: " + tujuan + "</p>";
    }

    // Jumlah Tiket
    var jumlahTiket = document.getElementById("jumlahTiket").value;
    if (!jumlahTiket || jumlahTiket < 1 || jumlahTiket > 10) {
        setError("jumlahTiket", "Jumlah tiket harus antara 1-10");
        isValid = false;
    } else {
        setError("jumlahTiket", "");
        resultHTML += "<p>Jumlah Tiket: " + jumlahTiket + "</p>";
    }

    // Tampilkan hasil jika valid
    if (isValid) {
        document.getElementById("result").innerHTML = resultHTML;
    }
});

function setError(id, message) {
    var element = document.getElementById(id);
    if (element) {
        var errorSpan = element.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains("error")) {
            errorSpan.textContent = message;
        }
    }
}
