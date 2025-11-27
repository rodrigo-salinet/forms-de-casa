const btn_colar_data = document.getElementById('btn_colar_data');
const txt_data = document.getElementById('txt_data');
const btn_limpar_data = document.getElementById('btn_limpar_data');

const mes_referencia = document.getElementsByName('mes_referencia');
const data = new Date();
const mes_atual = data.getMonth();
mes_referencia[mes_atual].checked = true;

const ano_referencia = document.getElementsByName('ano_referencia');
const ano_atual = data.getFullYear();
document.getElementById("rdg_" + ano_atual).checked = true;

const btn_colar_valor = document.getElementById('btn_colar_valor');
const txt_valor = document.getElementById('txt_valor');
const btn_limpar_valor = document.getElementById('btn_limpar_valor');

[
    btn_colar_data,
    btn_colar_valor
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_colar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        pasteFromClipboard(elementoTemp);
        elementoTemp.focus();
    });
});

[
    btn_limpar_data,
    btn_limpar_valor
].forEach(function (el) {
    el.addEventListener('click', () => {
        let idElemento = el.id.replace('btn_limpar_', 'txt_');
        let elementoTemp = document.getElementById(idElemento);
        elementoTemp.value = '';
        elementoTemp.focus();
    });
});

async function pasteFromClipboard(input) {
  const text = await navigator.clipboard.readText();
  input.value = text;
}
