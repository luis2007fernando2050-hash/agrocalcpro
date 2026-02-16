import { loginGoogle, logoutGoogle } from './firebase.js';

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authArea = document.getElementById('authArea');
const appArea = document.getElementById('appArea');
const userName = document.getElementById('userName');

loginBtn.addEventListener('click', async () => {
  const user = await loginGoogle();
  if(user){
    authArea.classList.add('hidden');
    appArea.classList.remove('hidden');
    userName.textContent = `Olá, ${user.displayName}`;
  }
});

logoutBtn.addEventListener('click', async () => {
  await logoutGoogle();
  authArea.classList.remove('hidden');
  appArea.classList.add('hidden');
});