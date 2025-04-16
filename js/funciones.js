function togglePassword(id) {
    const campo = document.getElementById(id);
    campo.type = campo.type === 'password' ? 'text' : 'password';
}

function simularRegistro(event) {
    event.preventDefault();

    const correo = document.getElementById("correo").value;
    const pass = document.getElementById("registroContrasena").value;
    const confirm = document.getElementById("confirmarContrasena").value;

    if (!correo.includes("@")) {
        alert("⚠️ El correo debe contener '@'");
        return;
    }

    if (pass !== confirm) {
        alert("⚠️ Las contraseñas no coinciden");
        return;
    }

    alert("✅ Registro exitoso. Serás redirigido al login.");
    setTimeout(() => {
        window.location.href = "login.html";
    }, 1000);
}

function simularLogin(event) {
    event.preventDefault();
    alert("✅ Autenticado correctamente. Serás redirigido...");
    setTimeout(() => {
        window.location.href = "panel.html";
    }, 1000);
}
