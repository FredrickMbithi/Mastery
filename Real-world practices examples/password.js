function validatePassword(password) {
    if (password.length < 8) {
        return "Password too short! Must be at least 8 characters.";
    } else if (password.length > 20) {
        return "Password too long! Maximum 20 characters.";
    } else {
        return "Password accepted!";
    }
}

console.log(validatePassword("abc"));      // Too short
console.log(validatePassword("secure123")); // Accepted!