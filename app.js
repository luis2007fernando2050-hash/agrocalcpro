import { auth, provider, db } from './firebase.js';
import { calcularIrrigacao } from './utils/calculos.js';

const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const authArea = document.getElementById('authArea');
const appArea = document.getElementById('appArea');
const calcularBtn = document.getElementById('calcularBtn');
const resultadoCard = document.getElementById('resultadoCard');
const resultado = document.getElementById('resultado');

loginBtn.addEventListener('click', async () => { alert('Login simulado'); });
logoutBtn.addEventListener('click', () => { alert('Logout simulado'); });

calcularBtn.addEventListener('click', () => {
  const form = document.getElementById('formIrrigacao');
  const dados = Object.fromEntries(new FormData(form).entries());
  const projeto = calcularIrrigacao(dados);
  resultado.textContent = JSON.stringify(projeto, null, 2);
  resultadoCard.classList.remove('hidden');
});