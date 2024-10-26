document.getElementById('discord-button').onclick = function() {
    window.open('https://discord.com/users/1280196446460706998', '_blank');
};

document.getElementById('github-button').onclick = function() {
    window.open('https://github.com/raidshadowlegendenjoyer', '_blank');
};

document.getElementById('paypal-button').onclick = function() {
    document.getElementById('error-modal').style.display = 'block';
};

document.querySelector('.close-button').onclick = function() {
    document.getElementById('error-modal').style.display = 'none';
};

window.onclick = function(event) {
    if (event.target === document.getElementById('error-modal')) {
        document.getElementById('error-modal').style.display = 'none';
    }
};
