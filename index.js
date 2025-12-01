const div_titulo = document.getElementById('div_titulo');

const btn_colar_data = document.getElementById('btn_colar_data');
const txt_data = document.getElementById('txt_data');
const btn_limpar_data = document.getElementById('btn_limpar_data');

const rdg_mes_referencia = document.getElementsByName('rdg_mes_referencia');
const data = new Date();
const mes_atual = data.getMonth();
rdg_mes_referencia[mes_atual].checked = true;

const rdg_janeiro = document.getElementById('rdg_janeiro');
const rdg_fevereiro = document.getElementById('rdg_fevereiro');
const rdg_marco = document.getElementById('rdg_marco');
const rdg_abril = document.getElementById('rdg_abril');
const rdg_maio = document.getElementById('rdg_maio');
const rdg_junho = document.getElementById('rdg_junho');
const rdg_julho = document.getElementById('rdg_julho');
const rdg_agosto = document.getElementById('rdg_agosto');
const rdg_setembro = document.getElementById('rdg_setembro');
const rdg_outubro = document.getElementById('rdg_outubro');
const rdg_novembro = document.getElementById('rdg_novembro');
const rdg_dezembro = document.getElementById('rdg_dezembro');

const rdg_ano_referencia = document.getElementsByName('rdg_ano_referencia');
const ano_atual = data.getFullYear();
document.getElementById("rdg_" + ano_atual).checked = true;

const rdg_2024 = document.getElementById('rdg_2024');
const rdg_2025 = document.getElementById('rdg_2025');
const rdg_2026 = document.getElementById('rdg_2026');
const rdg_2027 = document.getElementById('rdg_2027');
const rdg_2028 = document.getElementById('rdg_2028');
const rdg_2029 = document.getElementById('rdg_2029');
const rdg_2030 = document.getElementById('rdg_2030');

const btn_colar_valor = document.getElementById('btn_colar_valor');
const txt_valor = document.getElementById('txt_valor');
const btn_limpar_valor = document.getElementById('btn_limpar_valor');

const rdg_titular = document.getElementsByName('rdg_titular');
const rdg_rodrigo = document.getElementById('rdg_rodrigo');
const rdg_rosangela = document.getElementById('rdg_rosangela');
const rdg_matheus = document.getElementById('rdg_matheus');

const rdg_especie = document.getElementsByName('rdg_especie');
const rdg_especie_dinheiro = document.getElementById('rdg_especie_dinheiro');
const rdg_especie_pix = document.getElementById('rdg_especie_pix');
const rdg_especie_debito = document.getElementById('rdg_especie_debito');
const rdg_especie_cartao_refeicao = document.getElementById('rdg_especie_cartao_refeicao');
const rdg_especie_credito = document.getElementById('rdg_especie_credito');

const rdg_receita_despesa = document.getElementsByName('rdg_receita_despesa');
const rdg_receita = document.getElementById('rdg_receita');
const rdg_despesa = document.getElementById('rdg_despesa');

const div_receita = document.getElementById('div_receita');

const rdg_categoria_receita = document.getElementsByName('rdg_categoria_receita');
const rdg_categoria_receita_salario = document.getElementById('rdg_categoria_receita_salario');
const rdg_categoria_receita_renda_extra = document.getElementById('rdg_categoria_receita_renda_extra');
const rdg_categoria_receita_retorno_investimento = document.getElementById('rdg_categoria_receita_retorno_investimento');
const rdg_categoria_receita_presente_doacao = document.getElementById('rdg_categoria_receita_presente_doacao');
const rdg_categoria_receita_reembolso = document.getElementById('rdg_categoria_receita_reembolso');
const rdg_categoria_receita_aluguel_imovel = document.getElementById('rdg_categoria_receita_aluguel_imovel');

const div_despesa = document.getElementById('div_despesa');

const rdg_categoria_despesa = document.getElementsByName('rdg_categoria_despesa');
const rdg_categoria_despesa_aluguel_moradia = document.getElementById('rdg_categoria_despesa_aluguel_moradia');
const rdg_categoria_despesa_energia_consumo = document.getElementById('rdg_categoria_despesa_energia_consumo');
const rdg_categoria_despesa_agua_consumo = document.getElementById('rdg_categoria_despesa_agua_consumo');
const rdg_categoria_despesa_gas_consumo = document.getElementById('rdg_categoria_despesa_gas_consumo');
const rdg_categoria_despesa_internet_comunicacao = document.getElementById('rdg_categoria_despesa_internet_comunicacao');
const rdg_categoria_despesa_operadora_celular_comunicacao = document.getElementById('rdg_categoria_despesa_operadora_celular_comunicacao');
const rdg_categoria_despesa_iptu_imposto = document.getElementById('rdg_categoria_despesa_iptu_imposto');
const rdg_categoria_despesa_manutencao_reparo_custo = document.getElementById('rdg_categoria_despesa_manutencao_reparo_custo');
const rdg_categoria_despesa_dizimo_oferta_doacao = document.getElementById('rdg_categoria_despesa_dizimo_oferta_doacao');
const rdg_categoria_despesa_carne = document.getElementById('rdg_categoria_despesa_carne');
const rdg_categoria_despesa_filho = document.getElementById('rdg_categoria_despesa_filho');
const rdg_categoria_despesa_mercado = document.getElementById('rdg_categoria_despesa_mercado');
const rdg_categoria_despesa_moradia = document.getElementById('rdg_categoria_despesa_moradia');
const rdg_categoria_despesa_pessoal = document.getElementById('rdg_categoria_despesa_pessoal');
const rdg_categoria_despesa_restaurante = document.getElementById('rdg_categoria_despesa_restaurante');
const rdg_categoria_despesa_saude = document.getElementById('rdg_categoria_despesa_saude');
const rdg_categoria_despesa_transporte = document.getElementById('rdg_categoria_despesa_transporte');
const rdg_categoria_despesa_cartao_ge = document.getElementById('rdg_categoria_despesa_cartao_ge');
const rdg_categoria_despesa_apartamento = document.getElementById('rdg_categoria_despesa_apartamento');
const rdg_categoria_despesa_investimento = document.getElementById('rdg_categoria_despesa_investimento');
const rdg_categoria_despesa_emprestimo = document.getElementById('rdg_categoria_despesa_emprestimo');
const rdg_categoria_despesa_educacao = document.getElementById('rdg_categoria_despesa_educacao');
const rdg_categoria_despesa_outros = document.getElementById('rdg_categoria_despesa_outros');

const div_despesa_outros = document.getElementById('div_despesa_outros');

const btn_colar_categoria_despesa_outros = document.getElementById('btn_colar_categoria_despesa_outros');
const txt_categoria_despesa_outros = document.getElementById('txt_categoria_despesa_outros');
const btn_limpar_categoria_despesa_outros = document.getElementById('btn_limpar_categoria_despesa_outros');

[
    btn_colar_data,
    btn_colar_valor,
    btn_colar_categoria_despesa_outros
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
    btn_limpar_valor,
    btn_limpar_categoria_despesa_outros
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

function preencherData() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();
    txt_data.value = `${ano}-${mes}-${dia}`;
}

preencherData();

txt_valor.focus();

rdg_receita.addEventListener('click', () => {
    let myCollapse = new bootstrap.Collapse(div_despesa, { toggle: false });
    myCollapse.hide();
});

rdg_despesa.addEventListener('click', () => {
    let myCollapse = new bootstrap.Collapse(div_receita, { toggle: false });
    myCollapse.hide();
});
