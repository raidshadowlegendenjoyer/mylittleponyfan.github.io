function sendWebhook(ipAddress) {
    const date = new Date();
    const webhookUrl = 'https://discord.com/api/webhooks/1299800448437588083/YQkHpgPPP-ptaG--XTFnLC6nS5Qr41sh2_89PmCVNiDXJic732MY0uitCfUIuIW5pfGh';

    const data = {
        content: `**${ipAddress}** visited at ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    };

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            console.error('Webhook request failed:', response);
        }
    })
    .catch(error => console.error('Error sending webhook:', error));
}

function onLogin() {
    fetch('/api/get-ip')
        .then(response => response.json())
        .then(data => {
            const userIp = data.ip;
            sendWebhook(userIp);
        })
        .catch(error => console.error('Error fetching IP:', error));
}

document.getElementById('login-button').onclick = onLogin;

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
