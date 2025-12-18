const div_titulo = document.getElementById('div_titulo');

const frm_prestacao_conta = document.getElementById('frm_prestacao_conta');

const btn_colar_data = document.getElementById('btn_colar_data');
const txt_data = document.getElementById('txt_data');
const btn_limpar_data = document.getElementById('btn_limpar_data');

const btn_colar_horario = document.getElementById('btn_colar_horario');
const txt_horario = document.getElementById('txt_horario');
const btn_limpar_horario = document.getElementById('btn_limpar_horario');

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
const rdg_categoria_receita_outros = document.getElementById('rdg_categoria_receita_outros');

const div_categoria_outros = document.getElementById('div_categoria_outros');

const btn_colar_categoria_outros = document.getElementById('btn_colar_categoria_outros');
const txt_categoria_outros = document.getElementById('txt_categoria_outros');
const btn_limpar_categoria_outros = document.getElementById('btn_limpar_categoria_outros');

const btn_enviar = document.getElementById('btn_enviar');

btn_enviar.addEventListener('click', () => {
    event.preventDefault();

    let data = txt_data.value.trim();
    if (data.length === 0) {
        notificarNok('Por favor, preencha a Data');
        txt_data.focus();
        return false;
    }

    let horario = txt_horario.value.trim();
    if (horario.length === 0) {
        notificarNok('Por favor, preencha o Horário');
        txt_horario.focus();
        return false;
    }

    let mes_orcamento = rdg_mes_referencia[getCheckedRadioIndex(rdg_mes_referencia)].value;
    if (mes_orcamento.length === 0) {
        notificarNok('Por favor, selecione o Mês do Orçamento');
        rdg_mes_referencia.focus();
        return false;
    }

    let ano_orcamento = rdg_ano_referencia[getCheckedRadioIndex(rdg_ano_referencia)].value;
    if (ano_orcamento.length === 0) {
        notificarNok('Por favor, selecione o Ano do Orçamento');
        rdg_ano_referencia.focus();
        return false;
    }

    let valor = txt_valor.value.trim();
    if (valor.length === 0) {
        notificarNok('Por favor, digite o Valor');
        txt_valor.focus();
        return false;
    }

    if (getCheckedRadioIndex(rdg_titular) < 0) {
        notificarNok('Por favor, selecione o Titular');
        rdg_titular.focus();
        return false;
    }

    if (getCheckedRadioIndex(rdg_especie) < 0) {
        notificarNok('Por favor, selecione a Espécie');
        rdg_especie.focus();
        return false;
    }

    if (getCheckedRadioIndex(rdg_receita_despesa) < 0) {
        notificarNok('Por favor, selecione a Categoria');
        rdg_receita_despesa.focus();
        return false;
    }

    if (getCheckedRadioIndex(rdg_categoria_receita) < 0 && getCheckedRadioIndex(rdg_categoria_despesa) < 0) {
        notificarNok('Por favor, selecione uma Categoria (Receita ou Despesa)');
        rdg_categoria_receita.focus();
        return false;
    }

    let msg = "Valor: R$" + txt_valor.value + " - ";
    if (rdg_receita.checked) {
        msg += `Receita: ${rdg_categoria_receita[getCheckedRadioIndex(rdg_categoria_receita)].value}`;
    }
    if (rdg_despesa.checked) {
        msg += `Despesa: ${rdg_categoria_despesa[getCheckedRadioIndex(rdg_categoria_despesa)].value}`;
    }

    enviarFormulario(msg);
});

async function enviarFormulario(msg) {
    const SUBMIT_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-7SooMHFSmDEtFLfUSZMkgrnXFX4vxoKqAxatlxsNYZ3PGg/formResponse";

    const formData = new URLSearchParams();

    formData.append('entry.1582996369', txt_data.value.trim()); // Data Lançamento
    formData.append('entry.2017736934', txt_horario.value.trim()); // Horário Lançamento
    formData.append('entry.1787866131', rdg_mes_referencia[getCheckedRadioIndex(rdg_mes_referencia)].value); // Mês Orçamento
    formData.append('entry.17633339', rdg_ano_referencia[getCheckedRadioIndex(rdg_ano_referencia)].value); // Ano Orçamento
    formData.append('entry.923522987', txt_valor.value.trim()); // Valor
    formData.append('entry.1932979606', rdg_titular[getCheckedRadioIndex(rdg_titular)].value); // Titular
    formData.append('entry.1773520531', rdg_especie[getCheckedRadioIndex(rdg_especie)].value); // Espécie
    formData.append('entry.1003291364', rdg_receita_despesa[getCheckedRadioIndex(rdg_receita_despesa)].value); // Categoria

    if (getCheckedRadioIndex(rdg_categoria_despesa) >= 0) {
        formData.append('entry.1112124299', rdg_categoria_despesa[getCheckedRadioIndex(rdg_categoria_despesa)].value); // Descrição Categoria
    } else if (getCheckedRadioIndex(rdg_categoria_receita) >= 0) {
        formData.append('entry.1112124299', rdg_categoria_receita[getCheckedRadioIndex(rdg_categoria_receita)].value); // Descrição Categoria
    }
    formData.append('entry.360468464', txt_categoria_outros.value.trim()); // Outros

    try {
        await fetch(SUBMIT_URL, {
            method: 'POST',
            mode: 'no-cors', // Essencial para evitar erros de CORS
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formData.toString()
        });

        // Como usamos 'no-cors', o fetch não retorna erro mesmo que falhe.
        // Se chegou aqui, a requisição foi enviada.
        limparCampos();
        notificarOk(msg);
    } catch (error) {
        notificarNok("Erro ao enviar:", error);
    }
}

function limparCampos() {
    txt_data.value = '';
    preencherData();

    txt_horario.value = '';
    preencherHorario();

    rdg_mes_referencia.forEach(radio => radio.checked = false);
    rdg_mes_referencia[mes_atual].checked = true;

    rdg_ano_referencia.forEach(radio => radio.checked = false);
    document.getElementById("rdg_" + ano_atual).checked = true;

    txt_valor.value = '';
    rdg_titular.forEach(radio => radio.checked = false);
    rdg_especie.forEach(radio => radio.checked = false);
    rdg_receita_despesa.forEach(radio => radio.checked = false);
    rdg_categoria_receita.forEach(radio => radio.checked = false);
    rdg_categoria_despesa.forEach(radio => radio.checked = false);
    txt_categoria_outros.value = '';

    txt_valor.focus();
}

[
    btn_colar_data,
    btn_colar_horario,
    btn_colar_valor,
    btn_colar_categoria_outros
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
    btn_limpar_horario,
    btn_limpar_valor,
    btn_limpar_categoria_outros
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

function preencherHorario() {
    const dataAtual = new Date();
    const hora = String(dataAtual.getHours()).padStart(2, '0');
    const minuto = String(dataAtual.getMinutes()).padStart(2, '0');
    txt_horario.value = `${hora}:${minuto}`;
}

preencherHorario();

txt_valor.focus();

rdg_receita_despesa.forEach(function(el) {
    el.addEventListener('click', () => {
        let collapse_receita = new bootstrap.Collapse(div_receita, { toggle: false });
        if (rdg_receita.checked) {
            collapse_receita.show();
        } else {
            collapse_receita.hide();
        }

        let collapse_despesa = new bootstrap.Collapse(div_despesa, { toggle: false });
        if (rdg_despesa.checked) {
            collapse_despesa.show();
        } else {
            collapse_despesa.hide();
        }

        let collapse_categoria_outros = new bootstrap.Collapse(div_categoria_outros, { toggle: false });
        collapse_categoria_outros.hide();

        rdg_categoria_receita_outros.checked = false;
        rdg_categoria_despesa_outros.checked = false;
    });
});

rdg_despesa.addEventListener('click', () => {
    let myCollapse = new bootstrap.Collapse(div_receita, { toggle: false });
    myCollapse.hide();
});

rdg_categoria_receita.forEach(function(el) {
    el.addEventListener('click', () => {
        let myCollapse = new bootstrap.Collapse(div_categoria_outros, { toggle: false });
        if (rdg_categoria_receita_outros.checked) {
            myCollapse.show();
        } else {
            myCollapse.hide();
            txt_categoria_outros.value = '';
        }
    });
});

rdg_categoria_despesa.forEach(function(el) {
    el.addEventListener('click', () => {
        let myCollapse = new bootstrap.Collapse(div_categoria_outros, { toggle: false });
        if (rdg_categoria_despesa_outros.checked) {
            myCollapse.show();
        } else {
            myCollapse.hide();
            txt_categoria_outros.value = '';
        }
    });
});

function getCheckedRadioIndex(radioGroupElement) {
    let index = -1;
    for (let i = 0; i < radioGroupElement.length; i++) {
        if (radioGroupElement[i].checked) {
            index = i; // Return the index of the checked radio button
        }
    }
    return index; // Return -1 if no radio button is checked
}
