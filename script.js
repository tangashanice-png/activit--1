document.getElementById('validateBtn').addEventListener('click', function() {
    const answer = document.getElementById('answer').value.trim().toLowerCase();
    const message = document.getElementById('message');
    
    if (answer === 'besançon') {
        // Ouvrir la page de succès
        window.open('success.html', '_blank');
    } else {
        message.textContent = 'La réponse est erronée. Écoute bien l\'énigme et sois attentif !';
        message.style.color = 'red';
        message.style.display = 'block';
    }
});