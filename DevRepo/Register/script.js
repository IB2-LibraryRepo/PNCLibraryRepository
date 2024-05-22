const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

// Check local storage for remembered email
window.onload = () => {
    if (localStorage.getItem('rememberMe') === 'true') {
        formCheck.checked = true;
        user.value = localStorage.getItem('userEmail');
    }
};

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
});