function verificaCodice() {
    const codiceInserito = document.getElementById("codice").value.trim();
    const codiceCorretto = "16032025";

    if (codiceInserito === codiceCorretto) {
        window.location.href = "./home.html";
    } else {
        document.getElementById("error").textContent = "Codice errato, riprova.";
    }
}
