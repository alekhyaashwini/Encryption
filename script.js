document.getElementById('encryptButton').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
    if (isNaN(key)) {
        alert('Please enter a valid number for the key.');
        return;
    }
    const encryptedText = caesarCipher(text, key);
    document.getElementById('resultText').innerText = `Encrypted: ${encryptedText}`;
});

document.getElementById('decryptButton').addEventListener('click', function () {
    const text = document.getElementById('inputText').value;
    const key = parseInt(document.getElementById('key').value, 10);
    if (isNaN(key)) {
        alert('Please enter a valid number for the key.');
        return;
    }
    const decryptedText = caesarCipher(text, -key);
    document.getElementById('resultText').innerText = `Decrypted: ${decryptedText}`;
});

function caesarCipher(str, shift) {
    const shiftAmount = shift % 26; // To handle shifts larger than the alphabet length
    return str
        .split('')
        .map((char) => {
            if (/[a-zA-Z]/.test(char)) {
                const charCode = char.charCodeAt(0);
                const base = charCode >= 97 ? 97 : 65; // Lowercase or uppercase
                return String.fromCharCode(((charCode - base + shiftAmount + 26) % 26) + base);
            }
            return char; // Non-alphabetical characters remain the same
        })
        .join('');
}
