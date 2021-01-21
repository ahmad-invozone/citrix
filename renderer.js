// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// const { ipcRenderer, remote } = require('electron');

document.getElementById('login').addEventListener('click', () => {
    // ipcRenderer.send('auth-pass', { /* data */ });
    // TODO : Perform any AUTH VALIDATION HERE
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-app').style.display = 'block';
});

document.getElementById('logout').addEventListener('click', () => {
    // TODO : Destroy the session
    document.getElementById('login-screen').style.display = 'block';
    document.getElementById('main-app').style.display = 'none';
});
