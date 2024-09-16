// -------------------------------------  ENVIO AÉREO ------------------------------------- //
$(document).ready(function () {
    $('#formLojaEst').hide();
    $('#formHotel').hide();
    $('#formEuEntrego').hide();
    $('#formDadosCarga').hide();
    $('#FormContato').hide();
    $('#formDestino').hide();
    $('#receberAeroportoProximo').hide();
    $('#receberEntrega').hide();
    $('#msg_retorno').hide();
    $('#ddContatos').hide();
    $('#AguardeConfirmacaoDeFardo').hide();
    $('#ddCliente').hide();
    $('#ddLoja').hide();
    $('#fardoHotel').hide();
    $('#tc_qtd_fardos').hide();
    $('#tc_media_peso_fardo').hide();
    $('#NotasFiscais').hide();
    $('#mo_ddOnibus').hide();
    $('#mo_ddContato').hide();
    $('#mo_ddCliente').hide();
    $('#mo_ddLocal').hide();
    $('#aguardeContatoMeuOnibus').hide();
    $('#tc_valorCarga').hide();
    $('#CNPJ-CADASTRO').hide();
    $('#dados-cadastrante').hide();
    $('#lojista-comprador-vendedor').hide();
    $('#carregador-carreto-fazedorFardo').hide();
    $('#assessoria').hide();
    $('#tax-fiorino-moto-carro').hide();
    $('#foca').hide();
    $('#rep-entrega').hide();
    $('#digitador').hide();
    $('#retira-entrega-pf').hide();
    $('#CNPJenvioRapido').hide();


});

function selecionaForm() {
    var formSelect = $('#Retirada').val();

    if (formSelect == "") {

        $('#formHotel').hide();
        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();
        limpar();

    }

    if (formSelect == "hotel") {

        $('#formHotel').fadeIn('slow');
        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();
        limpar();
    }

    if (formSelect == "lojaEst") {

        $('#formLojaEst').fadeIn('slow');
        $('#formHotel').hide();
        $('#formEuEntrego').hide();
        limpar();
    }

    if (formSelect == "aeroporto") {

        $('#formEuEntrego').fadeIn('slow');
        $('#formLojaEst').hide();
        $('#formHotel').hide();
        limpar();
    }

    if (formSelect == "acessoria") {

        $('#formLojaEst').fadeIn('slow');
        $('#formHotel').hide();
        $('#formEuEntrego').hide();
        limpar();
    }

}

function selecionaBase() {
    var base = $('#Base').val();


    if (base == "galpao") {

        $('#end_base').val("");
        $('#end_base').val("Rua Eupidia Gomes de Oliveira, N° 52, Pq Savoy City - 035.70-350");

        $('#hr_base').val("");
        $('#hr_base').val("Seg a Sex - 08h as 17h");
    }

    if (base == "sede") {

        $('#end_base').val("");
        $('#end_base').val("Rua Astrogildo Pereira, N° 195, Pq Savoy City - 035.71-120");

        $('#hr_base').val("");
        $('#hr_base').val("Seg a Sex - 08h as 17h");
    }

    if (base == "aeroporto") {

        $('#end_base').val("");
        $('#end_base').val("Aéroporto Internacional de Guarulhos - SP - Terminal 01 de carga DOCA 14 - 071.90-100");

        $('#hr_base').val("");
        $('#hr_base').val("24 horas");
    }
}

function validaPeso() {
    if ($('#n_peso').is(':checked')) {
        $('#Peso').val("");
        $('#Peso').prop('disabled', true);
        exibeMsgRetorno("Conferimos o peso dimensão da carga em nosso galpão, antes do embarque!", "sucesso");
    } else {
        $('#Peso').val("");
        $('#Peso').prop('disabled', false);
    }
}

function limpar() {

    $('#Hotel').val("");
    $('#n_hotel').val("");
    $('#n_andar').val("");

    $('#CEP').val("");
    $('#Endereco').val("");
    $('#Logradouro').val("");
    $('#Funcionamento').val("");
    $('#Referencia').val("");

    $('#Base').val("");
    $('#nome_entregador').val("");
    $('#end_base').val("");
    $('#hr_base').val("");


    $('#Largura').val("");
    $('#Altura').val("");
    $('#Diametro').val("");
    $('#Volume').val("");
    $('#Peso').val("");
    $('#TipoCarga').val("");
    $('#valorCarga').val("");
    $('#Descricao').val("");

    $('#Email').val("");
    $('#Telefone').val("");
    $('#obs').val("");


}

function apenasNumeros(event) {
    const key = event.key;
    if (!/[\d\b]/.test(key)) {
        event.preventDefault();
    }
}

function mascaraCPF() {
    var cnpj = $('#CPF').val();
    if (validarCNPJ(cnpj)) {
        var cnpj_formatado = cnpj.replace(/\D/g, "");
        cnpj_formatado = cnpj_formatado.replace(/^(\d{2})(\d)/, "$1.$2");
        cnpj_formatado = cnpj_formatado.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        cnpj_formatado = cnpj_formatado.replace(/\.(\d{3})(\d)/, ".$1/$2");
        cnpj_formatado = cnpj_formatado.replace(/(\d{4})(\d)/, "$1-$2");

        $('#CPF').val(cnpj_formatado);
    }
}

function mascaraCEP() {
    var cep = $('#CEP').val();
    var cepFormat = $('#CEP').val();

    cep = cep.replace(/\D/g, "")
    cep = cep.replace(/^(\d{3})(\d)/, "$1.$2");
    cep = cep.replace(/^(\d{3}\.\d{2})(\d)/, "$1-$2");
    $('#CEP').val(cep);

    cepFormat = cepFormat.replace(/\D/g, "")
    viaCep(cepFormat);
}

function mascaraTEL() {
    var telefone = $('#Telefone').val();
    var telefone_formatado = '';
    telefone = telefone.replace(/\D/g, "");
    telefone_formatado = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
    telefone_formatado = telefone_formatado.replace(/(\d{5})(\d)/, "$1-$2");
    $('#Telefone').val(telefone_formatado);
}

function mascCpf(cpf) {
    var cpf_formatado = cpf.replace(/\D/g, "");
    cpf_formatado = cpf_formatado.replace(/^(\d{3})(\d)/, "$1.$2");
    cpf_formatado = cpf_formatado.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    cpf_formatado = cpf_formatado.replace(/\.(\d{3})(\d)/, ".$1-$2");
    $('#CPF').val(cpf_formatado);
}

function validaCPF() {
    var cpf = $('#CPF').val();
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF não esta vazio
    if (cpf == '' || cpf == null) {
        exibeMsgRetorno("CPF é obrigatório!");
        $('#CPF').focus();
        return false;
    }

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Verifica se todos os dígitos são iguais
    const digits = cpf.split('').map(Number);
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        $('#CPF').val("");
        exibeMsgRetorno("CPF Invalido!");
        return false;
    }

    mascCpf(cpf);
    // CPF válido
    return true;
}

function validarCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    debugger
    // Verifica se o CNPJ não está vazio
    if (cnpj === '' || cnpj == null) {
        exibeMsgRetorno("CNPJ é obrigatório!");
        $('#CPF').focus();
        return false;
    }

    // Verifica se o CNPJ possui 14 dígitos
    if (cnpj.length !== 14) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Verifica se todos os dígitos são iguais
    const digits = cnpj.split('').map(Number);
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    // Verifica o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cnpj.charAt(12))) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CPF').val("");
        $('#CPF').focus();
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    // Verifica o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cnpj.charAt(13))) {
        $('#CPF').val("");
        exibeMsgRetorno("CNPJ Inválido!");
        return false;
    }

    // CNPJ válido
    return true;
}

function validarCNPJenvioRapido(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/\D/g, '');

    // Verifica se o CNPJ não está vazio
    if (cnpj === '' || cnpj == null) {
        exibeMsgRetorno("CNPJ é obrigatório!");
        $('#CNPJ').focus();
        return false;
    }

    // Verifica se o CNPJ possui 14 dígitos
    if (cnpj.length !== 14) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CNPJ').val("");
        $('#CNPJ').focus();
        return false;
    }

    // Verifica se todos os dígitos são iguais
    const digits = cnpj.split('').map(Number);
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CNPJ').val("");
        $('#CNPJ').focus();
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    let pesos = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 12; i++) {
        soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    let resto = soma % 11;
    let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

    // Verifica o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cnpj.charAt(12))) {
        exibeMsgRetorno("CNPJ Inválido!");
        $('#CNPJ').val("");
        $('#CNPJ').focus();
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    pesos = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < 13; i++) {
        soma += parseInt(cnpj.charAt(i)) * pesos[i];
    }
    resto = soma % 11;
    let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

    // Verifica o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cnpj.charAt(13))) {
        $('#CNPJ').val("");
        exibeMsgRetorno("CNPJ Inválido!");
        return false;
    }

    // CNPJ válido
    return true;
}

function validaCPFRetirar() {
    var cpf = $('#CPFParaRetirar').val();

    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica se o CPF não esta vazio
    if (cpf == '' || cpf == null) {
        exibeMsgRetorno("CPF é obrigatório!");
        $('#CPFParaRetirar').focus();
        return false;
    }

    // Verifica se o CPF possui 11 dígitos
    if (cpf.length !== 11) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPFParaRetirar').val("");
        $('#CPFParaRetirar').focus();
        return false;
    }

    // Verifica se todos os dígitos são iguais
    const digits = cpf.split('').map(Number);
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPFParaRetirar').val("");
        $('#CPFParaRetirar').focus();
        return false;
    }

    // Calcula o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o primeiro dígito verificador
    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
        exibeMsgRetorno("CPF Invalido!");
        $('#CPFParaRetirar').val("");
        $('#CPFParaRetirar').focus();
        return false;
    }

    // Calcula o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    // Verifica o segundo dígito verificador
    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
        $('#CPFParaRetirar').val("");
        exibeMsgRetorno("CPF Invalido!");
        return false;
    }

    // CPF válido
    return true;
}

function validaFormNull() {

    var formSelect = $('#Retirada').val();

    if (formSelect == "") {
        exibeMsgRetorno("Selecione uma opção de retirada.");
        $('#Retirada').focus();
    }

    //Razão social vazio
    var razaoSocial = $('#RazaoSocial').val();
    if (razaoSocial == null || razaoSocial == "") {
        $('#RazaoSocial').focus();
        exibeMsgRetorno("Razao Social é obrigatorio!");
        return false;
    }

    if (formSelect == "hotel") {

        var nome = $('#Nome').val();
        var cpf = $('#CPF').val();
        var tipoRetirada = $('#Retirada').val();
        var hotel = $('#Hotel').val();
        var n_hotel = $('#n_hotel').val();
        var n_andar = $('#n_andar').val();

        //Nome Vazio
        if (nome == null || nome == "") {
            $('#Nome').focus();
            exibeMsgRetorno("Nome é obrigatorio!");
            return false;
        }
        //CPF Vazio
        if (cpf == null || cpf == "") {
            $('#CPF').focus();
            exibeMsgRetorno("CPF é obrigatorio!");
            return false;
        }
        //Retirada Vazio
        if (tipoRetirada == null || tipoRetirada == "") {
            $('#Retirada').focus();
            exibeMsgRetorno("Retirada é obrigatorio!");
            return false;
        }
        //Hotel vazio
        if (hotel == null || hotel == "") {
            $('#Hotel').focus();
            exibeMsgRetorno("Hotel é obrigatorio!", "sucesso");
            return false;
        }
        //Numero do quarto vazip
        if (n_hotel == null || n_hotel == "") {
            $('#n_hotel').focus();
            exibeMsgRetorno("Numero do quarto é obrigatorio!");
            return false;
        }
        //Numero do andar vazio
        if (n_andar == null || n_andar == "") {
            $('#n_andar').focus();
            exibeMsgRetorno("Numero do andar é obrigatorio!");
            return false;
        }

    }

    if (formSelect == "lojaEst") {

        var nome = $('#Nome').val();
        var cpf = $('#CPF').val();
        var tipoRetirada = $('#Retirada').val();
        var cep = $('#CEP').val();
        var endereco = $('#Endereco').val();
        var logradouro = $('#Logradouro').val();
        var funcionamento = $('#Funcionamento').val();
        var vendedorAtendente = $('#vendedor_responsavel').val();
        var referencia = $('#Referencia').val();

        //Nome Vazio
        if (nome == null || nome == "") {
            $('#Nome').focus();
            exibeMsgRetorno("Nome é obrigatorio!");
            return false;
        }
        //CPF Vazio
        if (cpf == null || cpf == "") {
            $('#CPF').focus();
            exibeMsgRetorno("CPF é obrigatorio!");
            return false;
        }
        //Retirada Vazio
        if (tipoRetirada == null || tipoRetirada == "") {
            $('#Retirada').focus();
            exibeMsgRetorno("Retirada é obrigatorio!");
            return false;
        }
        //CEP Vazio
        if (cep == null || cep == "") {
            $('#CEP').focus();
            exibeMsgRetorno("CEP é obrigatorio!");
            return false;
        }
        //Endereco Vazio
        if (endereco == null || endereco == "") {
            $('#Endereco').focus();
            exibeMsgRetorno("Endereço é obrigatorio!");
            return false;
        }
        //Logradouro Vazio
        if (logradouro == null || logradouro == "") {
            $('#Logradouro').focus();
            exibeMsgRetorno("Logradouro é obrigatorio!");
            return false;
        }
        //Funcionamento Vazio
        if (funcionamento == null || funcionamento == "") {
            $('#Funcionamento').focus();
            exibeMsgRetorno("Funcionamento é obrigatorio!");
            return false;
        }

        //Nome do vendedor/atendente Vazio
        if (vendedorAtendente == null || vendedorAtendente == "") {
            $('#vendedor_responsavel').focus();
            exibeMsgRetorno("Preencha o Vendedor / Atendente!");
            return false;
        }

        //Referencia Vazio
        if (referencia == null || referencia == "") {
            $('#Referencia').focus();
            exibeMsgRetorno("Referencia é obrigatorio!");
            return false;
        }
    }

    if (formSelect == "aeroporto") {

        var nome = $('#Nome').val();
        var cpf = $('#CPF').val();
        var tipoRetirada = $('#Retirada').val();
        var base = $('#Base').val();
        var nome_entregador = $('#nome_entregador').val();
        var endereco_base = $('#end_base').val();
        var hora_base = $('#hr_base').val();

        //Nome Vazio
        if (nome == null || nome == "") {
            $('#Nome').focus();
            exibeMsgRetorno("Nome é obrigatorio!");
            return false;
        }
        //CPF Vazio
        if (cpf == null || cpf == "") {
            $('#CPF').focus();
            exibeMsgRetorno("CPF é obrigatorio!");
            return false;
        }
        //Retirada Vazio
        if (tipoRetirada == null || tipoRetirada == "") {
            $('#Retirada').focus();
            exibeMsgRetorno("Retirada é obrigatorio!");
            return false;
        }
        //Base Vazio
        if (base == null || base == "") {
            $('#Base').focus();
            exibeMsgRetorno("Selecione uma base!");
            return false;
        }
        //Nome do entregador Vazio
        if (nome_entregador == null || nome_entregador == "") {
            $('#nome_entregador').focus();
            exibeMsgRetorno("Nome do entregador é obrigatorio!");
            return false;
        }
    }

    if (formSelect == "acessoria") {
        var nome = $('#Nome').val();
        var cpf = $('#CPF').val();
        var tipoRetirada = $('#Retirada').val();
        var cep = $('#CEP').val();
        var endereco = $('#Endereco').val();
        var logradouro = $('#Logradouro').val();
        var funcionamento = $('#Funcionamento').val();
        var referencia = $('#Referencia').val();

        //Nome Vazio
        if (nome == null || nome == "") {
            $('#Nome').focus();
            exibeMsgRetorno("Nome é obrigatorio!");
            return false;
        }
        //CPF Vazio
        if (cpf == null || cpf == "") {
            $('#CPF').focus();
            exibeMsgRetorno("CPF é obrigatorio!");
            return false;
        }
        //Retirada Vazio
        if (tipoRetirada == null || tipoRetirada == "") {
            $('#Retirada').focus();
            exibeMsgRetorno("Retirada é obrigatorio!");
            return false;
        }
        //CEP Vazio
        if (cep == null || cep == "") {
            $('#CEP').focus();
            exibeMsgRetorno("CEP é obrigatorio!");
            return false;
        }
        //Endereco Vazio
        if (endereco == null || endereco == "") {
            $('#Endereco').focus();
            exibeMsgRetorno("Endereço é obrigatorio!");
            return false;
        }
        //Logradouro Vazio
        if (logradouro == null || logradouro == "") {
            $('#Logradouro').focus();
            exibeMsgRetorno("Logradouro é obrigatorio!");
            return false;
        }
        //Funcionamento Vazio
        if (funcionamento == null || funcionamento == "") {
            $('#Funcionamento').focus();
            exibeMsgRetorno("Funcionamento é obrigatorio!");
            return false;
        }
        //Referencia Vazio
        if (referencia == null || referencia == "") {
            $('#Referencia').focus();
            exibeMsgRetorno("Referencia é obrigatorio!");
            return false;
        }
    }

    return true;
}

function continuarDadosCarga() {

    if (validaFormNull()) {

        $('#ddColeta').hide();
        $('#formHotel').hide();
        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();

        $('#formDadosCarga').fadeIn('slow');
    }
}

function voltarDadosColeta() {
    var formSelect = $('#Retirada').val();

    $('#ddColeta').hide();
    $('#formHotel').hide();
    $('#formLojaEst').hide();
    $('#formEuEntrego').hide();
    $('#formDadosCarga').hide();

    if (formSelect == "") {
        exibeMsgRetorno("Selecione uma opção de retirada.");
        $('#Retirada').focus();
    }

    if (formSelect == "hotel") {
        $('#ddColeta').fadeIn('slow');
        $('#formHotel').fadeIn('slow');

        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();
    }

    if (formSelect == "lojaEst") {
        $('#ddColeta').fadeIn('slow');
        $('#formLojaEst').fadeIn('slow');

        $('#formHotel').hide();
        $('#formEuEntrego').hide();
    }

    if (formSelect == "aeroporto") {
        $('#ddColeta').fadeIn('slow');
        $('#formEuEntrego').fadeIn('slow');

        $('#formHotel').hide();
        $('#formLojaEst').hide();
    }

    if (formSelect == "acessoria") {
        $('#ddColeta').fadeIn('slow');
        $('#formLojaEst').fadeIn('slow');

        $('#formHotel').hide();
        $('#formEuEntrego').hide();
    }
}

function validaFormDestino() {
    var formSelect = $('#Entrega').val();

    if (formSelect == "") {
        $('#receberAeroportoProximo').hide();
        $('#receberEntrega').hide();
    }

    if (formSelect == "aeroportoProximo") {
        $('#receberAeroportoProximo').fadeIn('slow');
        $('#receberEntrega').hide();
    }

    if (formSelect == "minhaCasaEntrega") {
        $('#receberEntrega').fadeIn('slow');
        $('#receberAeroportoProximo').hide();
    }

    if (formSelect == "estabelecimentoLojaEntrega") {
        $('#receberEntrega').fadeIn('slow');
        $('#receberAeroportoProximo').hide();
    }

}

function continuarDadosDestino() {

    if (validaDadosCarga()) {

        $('#ddColeta').hide();
        $('#formHotel').hide();
        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();
        $('#formDadosCarga').hide();

        $('#formDestino').fadeIn('slow');

        var TipoEntrega = $('#Entrega').val();

        if (TipoEntrega == "") {
            $('#receberAeroportoProximo').hide();
            $('#receberEntrega').hide();
        }

        if (TipoEntrega == "aeroportoProximo") {
            $('#receberAeroportoProximo').fadeIn('slow');
            $('#receberEntrega').hide();
        }

        if (TipoEntrega == "minhaCasaEntrega") {
            $('#receberEntrega').fadeIn('slow');
            $('#receberAeroportoProximo').hide();
        }

        if (TipoEntrega == "estabelecimentoLojaEntrega") {
            $('#receberEntrega').fadeIn('slow');
            $('#receberAeroportoProximo').hide();
        }
    }
}

function voltarDadosCarga() {

    if (validaFormNull()) {
        $('#ddColeta').hide();
        $('#formHotel').hide();
        $('#formLojaEst').hide();
        $('#formEuEntrego').hide();
        $('#formDestino').hide();
        $('#receberAeroportoProximo').hide();
        $('#receberEntrega').hide();

        $('#formDadosCarga').fadeIn('show');
    }
}

function validaDadosCarga() {
    var altura = $('#Altura').val();
    var largura = $('#Largura').val();
    var diametro = $('#Diametro').val();
    var volume = $('#Volume').val();
    var peso = $('#Peso').val();
    var n_peso = $('#n_peso').prop('checked');
    var tipoDeCarga = $('#TipoCarga').val();
    var valorCarga = $('#valorCarga').val();
    var descricaoCarga = $('#Descricao').val();
    var qtdFardos = $('#qtd_fardos').val();
    var mediaKgFardo = $('#media_peso_fardo').val();

    if (tipoDeCarga == "confeccoes") {
        if (qtdFardos == "" || qtdFardos == null) {
            exibeMsgRetorno("Preencha a quantidade de fardos!");
            $('#qtd_fardos').focus();
            return false;
        }

        if (mediaKgFardo == "" || mediaKgFardo == null) {
            exibeMsgRetorno("Preencha a media de peso por fardo!");
            $('#media_peso_fardo').focus();
            return false;
        }
    } else {
        if (altura == "" || altura == null) {
            exibeMsgRetorno("Preencha a Altura!");
            $('#Altura').focus();
            return false;
        }

        if (largura == "" || largura == null) {
            exibeMsgRetorno("Preencha a Largura!");
            $('#Largura').focus();
            return false;
        }

        if (diametro == "" || diametro == null) {
            exibeMsgRetorno("Preencha o Diametro!");
            $('#Diametro').focus();
            return false;
        }
    }

    if (n_peso != true) {
        if (peso == "" || peso == null) {
            exibeMsgRetorno("Preencha o Peso ou marque a opção 'Não sei meu peso'. ");
            $('#Peso').focus();
            return false;
        }
    }

    if (tipoDeCarga == "" || tipoDeCarga == null) {
        exibeMsgRetorno("Preencha a categoria da carga. ", "sucesso");
        $('#TipoCarga').focus();
        return false;
    }

    if (valorCarga == "" || valorCarga == null) {
        exibeMsgRetorno("Valor da Carga/Nota é obrigatorio!");
        $('#valorCarga').focus();
        return false;
    }

    if (descricaoCarga == "" && tipoDeCarga == "outros") {
        exibeMsgRetorno("Descricao é obrigatorio quando a categoria 'Outros' é selecionada!");
        $('#Descricao').focus();
        return false;
    }

    return true;

}

function mascaraCepEntrega() {
    var cep = $('#CEP_Entrega').val();
    cep = cep.replace(/\D/g, "");
    cep = cep.replace(/^(\d{3})(\d)/, "$1.$2");
    cep = cep.replace(/^(\d{3}\.\d{2})(\d)/, "$1-$2");
    $('#CEP_Entrega').val(cep);
    cep = cep.replace(/\D/g, "");
    viaCepEntrega(cep);
}

function validaDadosDestino() {
    var entrega = $('#Entrega').val();
    var cidade = $('#Cidade').val();
    var estado = $('#Estado').val();

    if (cidade == "" || cidade == null) {
        exibeMsgRetorno("Preencha a cidade de destino!");
        $('#Cidade').focus();
        return false;
    }

    if (estado == "" || estado == null) {
        exibeMsgRetorno("Selecione um estado de destino!");
        $('#Estado').focus();
        return false;
    }

    if (entrega == "") {
        exibeMsgRetorno("Selecione uma opção de entrega!");
        $('#Entrega').focus();
        return false;
    }

    if (entrega == "aeroportoProximo") {
        var nomeDeQuemIraRetirar = $('#NomeParaRetirar').val();
        var cpfDeQuemIraRetirar = $('#CPFParaRetirar').val();
        var rgDeQuemIraRetirar = $('#RGParaRetirar').val();

        if (nomeDeQuemIraRetirar == "" || nomeDeQuemIraRetirar == null) {
            exibeMsgRetorno("Nome de quem irá retira é obrigatório");
            $('#NomeParaRetirar').focus();
            return false;
        }
        if (cpfDeQuemIraRetirar == "" || cpfDeQuemIraRetirar == null) {
            exibeMsgRetorno("CPF de quem irá retira é obrigatório");
            $('#CPFParaRetirar').focus();
            return false;
        }
        if (rgDeQuemIraRetirar == "" || rgDeQuemIraRetirar == null) {
            exibeMsgRetorno("RG de quem irá retira é obrigatório");
            $('#RGParaRetirar').focus();
            return false;
        }

    }

    if (entrega == "minhaCasaEntrega" || entrega == "estabelecimentoLojaEntrega") {

        var cep_entrega = $('#CEP_Entrega').val();
        var endereco_entrega = $('#Endereco_entrega').val();
        var numero_entrega = $('#num_entrega').val();
        var referecia_entrega = $('#ref_entrega').val();

        if (cep_entrega == "" || cep_entrega == null) {
            exibeMsgRetorno("Preencha o cep de destino");
            $('#CEP_Entrega').focus();
            return false;
        }

        if (endereco_entrega == "" || endereco_entrega == null) {
            exibeMsgRetorno("Preencha o endereço de destino");
            $('#Endereco_entrega').focus();
            return false;
        }

        if (numero_entrega == "" || numero_entrega == null) {
            exibeMsgRetorno("Preencha o numero do seu estabelecimento / residência");
            $('#num_entrega').focus();
            return false;
        }

        if (referecia_entrega == "" || referecia_entrega == null) {
            exibeMsgRetorno("Inclua uma referecia ou caracteristica do local");
            $('#ref_entrega').focus();
            return false;
        }
    }

    return true;

}

function solicitaServiço(servico) {
    var msg = "";
    var codPedido = "";

    const now = new Date();


    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);


    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');



    var nome = $('#Nome').val();
    var cpf = $('#CPF').val();
    var tipoRetirada = $('#Retirada').val();
    var tipoRetiradaView = $('#Retirada').val();
    var razaoSocial = $('#RazaoSocial').val();
    var email = $('#Email').val();
    var telefone = $('#Telefone').val();
    var observacao = $('#obs').val();

    switch (tipoRetiradaView) {
        case "hotel":
            tipoRetiradaView = "Quero que retire no Hotel";
            break;
        case "lojaEst":
            tipoRetiradaView = "Quero que retire em Loja / Estabelecimento";
            break;
        case "aeroporto":
            tipoRetiradaView = "Quero levar até você";
            break;
        case "acessoria":
            tipoRetiradaView = "Retirar com minha acessoria";
            break;
        default:
            tipoRetiradaView = "Selecione";
            break;
    }

    msg = msg + "*TIPO DE SERVIÇO:* " + servico + "\n\n";

    msg = msg + "*DADOS DO CLIENTE*" + "\n";
    msg = msg + "*Nome Cliente:* " + nome + " \n";
    msg = msg + "*CPF Cliente:* " + cpf + " \n";
    msg = msg + "*Data:* " + day + "/" + month + "/" + year + " \n";
    msg = msg + "*Retirada:* " + tipoRetiradaView + " \n";
    msg = msg + "*Razão Social:* " + razaoSocial + " \n";
    msg = msg + "*Email de contato:* " + email + " \n";
    msg = msg + "*Telefone WhatsApp:* " + telefone + " \n";
    msg = msg + "*Observação de envio:* " + observacao + " \n\n";


    msg = msg + "*DADOS DA COLETA*" + "\n";
    if (tipoRetirada == "hotel") {

        var hotel = $('#Hotel').val();
        var n_hotel = $('#n_hotel').val();
        var n_andar = $('#n_andar').val();

        switch (hotel) {
            case "bras-palace":
                hotel = "Brás Palace Hotel";
                break;
            case "luz-plaza":
                hotel = "Luz Plaza São Paulo";
                break;
            case "hotel-makuxis":
                hotel = "Hotel Makuxis";
                break;
            case "hotel-nacional-inn":
                hotel = "Hotel Nacional Inn São Paulo";
                break;
            case "pousada-recanto-bras":
                hotel = "Pousada Recanto do Brás";
                break;
            case "hotel-victoria":
                hotel = "Hotel Victoria";
                break;
            case "pousada-bras-feira-madrugada":
                hotel = "Pousada HazBrás - Feira da Madrugada";
                break;
            case "hotel-normandie":
                hotel = "Hotel Normandie";
                break;
            case "hotel-family":
                hotel = "Hotel Family";
                break;
            case "hotel-travel-inn-bras":
                hotel = "Hotel Travel Inn Brás";
                break;
            case "shopping-tupan":
                hotel = "Shopping Tupan";
                break;
            default:
                // Opcional: lidar com valores não previstos
                hotel = "Hotel desconhecido";
                break;
        }

        msg = msg + "*Tipo de Coleta:* Quero que retire no Hotel" + "\n";
        msg = msg + "*Hotel:* " + hotel + " \n";
        msg = msg + "*Andar do hotel:* " + n_andar + " \n";
        msg = msg + "*Numero do quarto:* " + n_hotel + " \n\n";
    }

    if (tipoRetirada == "lojaEst") {
        var cep = $('#CEP').val();
        var endereco = $('#Endereco').val();
        var logradouro = $('#Logradouro').val();
        var funcionamento = $('#Funcionamento').val();
        var referencia = $('#Referencia').val();
        var vendedor_responsavel = $('#vendedor_responsavel').val();

        msg = msg + "*Tipo de Coleta:* Coletar no meu estabelecimento" + "\n";
        msg = msg + "*Vendedor Responsavel:* " + vendedor_responsavel + " \n";
        msg = msg + "*Endereço de coleta:* " + endereco + ", N° " + logradouro + " - " + cep + " \n";
        msg = msg + "*Horario para a coleta:* " + funcionamento + " \n";
        msg = msg + "*Referencia:* " + referencia + " \n\n";

    }

    if (tipoRetirada == "aeroporto") {

        var base = $('#Base').val();
        var nome_entregador = $('#nome_entregador').val();
        var endereco_base = $('#end_base').val();
        var hora_base = $('#hr_base').val();

        switch (base) {
            case "galpao":
                base = "Galpão 01";
                break;
            case "sede":
                base = "Sede da vegas";
                break;
            case "aeroporto":
                base = "Cargas de Emergências";
                break;
            default:
                base = "Local desconhecido";
                break;
        }

        msg = msg + "*Tipo de Coleta:* Eu mesmo entrego" + "\n";
        msg = msg + "*Base:* " + base + " \n";
        msg = msg + "*Endereço:* " + endereco_base + " \n";
        msg = msg + "*Horario:* " + hora_base + " \n";
        msg = msg + "*Nome do entregador:* " + nome_entregador + " \n\n";

    }

    if (tipoRetirada == "acessoria") {
        var cep = $('#CEP').val();
        var endereco = $('#Endereco').val();
        var logradouro = $('#Logradouro').val();
        var funcionamento = $('#Funcionamento').val();
        var referencia = $('#Referencia').val();

        msg = msg + "*Tipo de Coleta:* Coletar com minha acessoria" + "\n";
        msg = msg + "*Endereço de coleta:* " + endereco + ", N° " + logradouro + " - " + cep + " \n";
        msg = msg + "*Horario para a coleta:* " + funcionamento + " \n";
        msg = msg + "*Referencia:* " + referencia + " \n\n";
    }

    var altura = $('#Altura').val();
    var largura = $('#Largura').val();
    var diametro = $('#Diametro').val();
    var volume = $('#Volume').val();
    var tipoDeCarga = $('#TipoCarga').val();
    var valorCarga = $('#valorCarga').val();
    var descricaoCarga = $('#Descricao').val();
    var entrega = $('#Entrega').val();
    var cidade = $('#Cidade').val();
    var estado = $('#Estado').val();
    var dest = $('#Estado').val();
    var peso = $('#Peso').val();
    var precoCotacao = $('#valorMedioCotacao').val();

    var qtdFardos = $('#qtd_fardos').val();
    var mediaKgFardo = $('#media_peso_fardo').val();

    if (peso == "" || peso == null) {
        peso = "Não sei meu peso (Pesar na recpção da carga)"
    }

    if (descricaoCarga == "" || descricaoCarga == null) {
        descricaoCarga = "Sem Descrição";
    }

    switch (tipoDeCarga) {
        case "confeccoes":
            tipoDeCarga = "Confecções";
            break;
        case "eletronicos":
            tipoDeCarga = "Eletronicos";
            break;
        case "Pereciveis":
            tipoDeCarga = "Perecíveis";
            break;
        case "naoPereciveis":
            tipoDeCarga = "Não Perecíveis";
            break;
        case "pecas":
            tipoDeCarga = "Peças";
            break;
        case "vidro":
            tipoDeCarga = "Vidro(s)";
            break;
        case "cargaPerigosa":
            tipoDeCarga = "Carga Perigosa";
            break;
        case "outros":
            tipoDeCarga = "Outros";
            break;
        default:
            tipoDeCarga = "Tipo de carga desconhecida.";
            break;
    }

    switch (estado) {
        case "ac":
            estado = "Acre";
            break;
        case "al":
            estado = "Alagoas";
            break;
        case "ap":
            estado = "Amapá";
            break;
        case "am":
            estado = "Amazonas";
            break;
        case "ba":
            estado = "Bahia";
            break;
        case "ce":
            estado = "Ceará";
            break;
        case "df":
            estado = "Distrito Federal";
            break;
        case "es":
            estado = "Espírito Santo";
            break;
        case "go":
            estado = "Goiás";
            break;
        case "ma":
            estado = "Maranhão";
            break;
        case "mt":
            estado = "Mato Grosso";
            break;
        case "ms":
            estado = "Mato Grosso do Sul";
            break;
        case "mg":
            estado = "Minas Gerais";
            break;
        case "pa":
            estado = "Pará";
            break;
        case "pb":
            estado = "Paraíba";
            break;
        case "pr":
            estado = "Paraná";
            break;
        case "pe":
            estado = "Pernambuco";
            break;
        case "pi":
            estado = "Piauí";
            break;
        case "rj":
            estado = "Rio de Janeiro";
            break;
        case "rn":
            estado = "Rio Grande do Norte";
            break;
        case "rs":
            estado = "Rio Grande do Sul";
            break;
        case "ro":
            estado = "Rondônia";
            break;
        case "rr":
            estado = "Roraima";
            break;
        case "sc":
            estado = "Santa Catarina";
            break;
        case "sp":
            estado = "São Paulo";
            break;
        case "se":
            estado = "Sergipe";
            break;
        case "to":
            estado = "Tocantins";
            break;
        default:
            // Opcional: lidar com valores não previstos
            estado = "UF desconhecida";
            break;
    }

    msg = msg + "*DADOS DA CARGA* " + " \n";
    if (tipoDeCarga == "Confecções") {
        msg = msg + "*Quantidade de fardos:* " + qtdFardos + " \n";
        msg = msg + "*Media de peso (fardo):* " + mediaKgFardo + " \n";
        msg = msg + "*Peso:* " + peso + "kg" + " \n";
        msg = msg + "*Categoria da carga:* " + tipoDeCarga + " \n";
        msg = msg + "*Valor da carga:* " + "R$ " + valorCarga + " \n";
        msg = msg + "*Descrição de carga:* " + descricaoCarga + " \n\n";
    } else {
        msg = msg + "*Altura:* " + altura + "cm" + " \n";
        msg = msg + "*Largura:* " + largura + "cm" + " \n";
        msg = msg + "*Diâmetro:* " + diametro + "cm" + " \n";
        msg = msg + "*Volume:* " + volume + " \n";
        msg = msg + "*Peso:* " + peso + "kg" + " \n";
        msg = msg + "*Categoria da carga:* " + tipoDeCarga + " \n";
        msg = msg + "*Valor da carga:* " + "R$ " + valorCarga + " \n";
        msg = msg + "*Descrição de carga:* " + descricaoCarga + " \n\n";
    }



    msg = msg + "*DADOS DO DESTINO*" + "\n";
    msg = msg + "*Estado de destino:* " + estado + " \n";
    msg = msg + "*Cidade de destino:* " + cidade + " \n";


    if (entrega == "aeroportoProximo") {
        var nomeDeQuemIraRetirar = $('#NomeParaRetirar').val();
        var cpfDeQuemIraRetirar = $('#CPFParaRetirar').val();
        var rgParaRetirar = $('#RGParaRetirar').val();

        msg = msg + "*Tipo de Destino:* Aéroporto mais proximo" + " \n";
        msg = msg + "*Nome de quem irá retirar:* " + nomeDeQuemIraRetirar + " \n";
        msg = msg + "*RG de quem irá retirar:* " + rgParaRetirar + " \n";
        msg = msg + "*CPF de quem irá retirar:* " + cpfDeQuemIraRetirar + " \n\n";
    }

    if (entrega == "minhaCasaEntrega" || entrega == "estabelecimentoLojaEntrega") {

        var cep_entrega = $('#CEP_Entrega').val();
        var endereco_entrega = $('#Endereco_entrega').val();
        var numero_entrega = $('#num_entrega').val();
        var referecia_entrega = $('#ref_entrega').val();

        msg = msg + "*Tipo de Destino:* Entrega" + " \n";
        msg = msg + "*Endereço:* " + endereco_entrega + ", N° " + numero_entrega + " - " + cep_entrega + " \n";
        msg = msg + "*Ponto de referencia:* " + referecia_entrega + " \n\n";

        msg = msg + "*Preço de cotação:* " + precoCotacao + " \n\n";

    }

    codPedido = nome.substring(0, 3).toUpperCase() + day + month + year + hours + minutes + seconds + "SPX" + dest.toUpperCase();

    msg = msg + "*CODIGO DO PEDIDO:* " + "*" + codPedido + "*" + "\n\n";

    closeModalResumoPedido();
    enviarWhatsApp(msg, codPedido);

}

function mascaraRgEntrega() {
    var rg = $('#RGParaRetirar').val();
    var rg_formatado = '';
    rg_formatado = rg.replace(/\D/g, "");
    rg_formatado = rg_formatado.replace(/(\d{2})(\d)/, "$1.$2");
    rg_formatado = rg_formatado.replace(/(\d{3})(\d)/, "$1.$2");
    rg_formatado = rg_formatado.replace(/(\d{3})(\d{1})$/, "$1-$2");

    $('#RGParaRetirar').val(rg_formatado);
}

function mascaraCPFEntrega() {
    if (validaCPFRetirar()) {
        var cpf_formatado = $('#CPFParaRetirar').val();
        cpf_formatado = cpf_formatado.replace(/\D/g, "")
        cpf_formatado = cpf_formatado.replace(/(\d{3})(\d)/, "$1.$2")
        cpf_formatado = cpf_formatado.replace(/(\d{3})(\d)/, "$1.$2")
        cpf_formatado = cpf_formatado.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        $('#CPFParaRetirar').val(cpf_formatado);
    }

}

function validaFormContato() {
    var email = $('#Email').val();
    var telefone = $('#Telefone').val();
    var obs = $('#obs').val();

    if (email == "" || email == null) {
        exibeMsgRetorno("Email é obrigatorio");
        $('#Email').focus();
        return false;
    }
    if (telefone == "" || telefone == null) {
        exibeMsgRetorno("Telefone é obrigatorio");
        $('#Telefone').focus();
        return false;
    }
    if (obs == "" || obs == null) {
        obs = "Sem nenhuma observação";

    }

    return true;
}

function enviarWhatsApp(msg, codPedido) {
    $('#FormContato').hide();
    $('#receberAeroportoProximo').hide();
    $('#receberEntrega').hide();
    $('#formDestino').hide();
    $('#contatoEquipe').fadeIn();

    var telefone = $('#Telefone').val();
    var nome = $('#Nome').val();

    sendMessage(msg);
    exibeMsgRetorno("Solicitação gerada com sucesso", "sucesso");

    var telClient = "55" + telefone.replace(/\D/g, '');
    var msgClient = "";

    var linkRastreio = "https://wa.me/5511945362630";
    var linkDuvida = "https://grupovegas.azurewebsites.net";
    msgClient = msgClient + "_Oi, como vai?_ \n_Informamos que sua nota foi recebida e está sendo processada!_" + "\n\n";
    msgClient = msgClient + "Segue código de rastreio caso deseje fazer consultas sobre seu pedido." + "\n";
    msgClient = msgClient + "_*Código:*_ " + "*" + codPedido + "*" + "\n";
    msgClient = msgClient + "*Link para rastreio:* " + "*" + linkRastreio + "*" + "\n\n";
    msgClient = msgClient + "Caso tenha outras duvidas 👇 " + "*" + linkDuvida + "*" + "\n\n";
    msgClient = msgClient + "Nós da Vegas Transportes agradecemos a preferência e nos colocamos á disposição.";


    if (telClient.length == 13) {
        sendMessageClient(msgClient, telClient);
        console.log(msgClient);
    }

    console.log(msg);
}

function continuarParaContato() {
    if (validaDadosDestino()) {
        $('#formDestino').hide();
        $('#receberAeroportoProximo').hide();
        $('#receberEntrega').hide();
        $('#FormContato').fadeIn('slow');
    }
}

function voltarParaDadosDestino() {

    $('#formDestino').hide();
    $('#receberAeroportoProximo').hide();
    $('#receberEntrega').hide();
    $('#FormContato').hide();
    $('#formDestino').fadeIn('slow');

    var formSelectEntrega = $('#Entrega').val();

    if (formSelectEntrega == "aeroportoProximo") {
        $('#receberEntrega').hide();
        $('#receberAeroportoProximo').fadeIn('slow');
    }

    if (formSelectEntrega == "minhaCasaEntrega" || formSelectEntrega == "estabelecimentoLojaEntrega") {
        $('#receberEntrega').fadeIn('slow');
        $('#receberAeroportoProximo').hide();
    }
}

function exibeMsgRetorno(msg_exibicao, status) {

    $("#msg_retorno").modal('hide');
    $('#msg_exibicao').html("");

    var svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-diamond-fill" viewBox="0 0 16 16">' +
        '<path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>' +
        '</svg>';

    $('#msg_exibicao').html(svgIcon + "&nbsp;" + msg_exibicao);

    if (status == "sucesso") {
        var msg_retorno = document.getElementById('msg_retorno');
        msg_retorno.style.backgroundColor = '#225ec3';

        $('html, body').animate({
            scrollTop: $('#msg_exibicao').offset().top
        }, 1000);

        $("#msg_retorno").fadeIn('slow');

        setTimeout(function () {
            $("#msg_retorno").fadeOut('slow');
        }, 3500);

    } else {
        var msg_retorno = document.getElementById('msg_retorno');
        msg_retorno.style.backgroundColor = '#931010';

        $('html, body').animate({
            scrollTop: $('#msg_exibicao').offset().top
        }, 1000);

        $("#msg_retorno").fadeIn('slow');

        setTimeout(function () {
            $("#msg_retorno").fadeOut('slow');
        }, 3500);
    }


}

function openModalResumoPedido() {
    if (validaFormContato()) {
        resumePedidoCotacao();
        $('#cofirmResumoPedido').modal('show');
    }
}

function closeModalResumoPedido() {
    $('#cofirmResumoPedido').modal('hide');
}

function resumePedidoCotacao() {

    var nome = $('#Nome').val();
    var documento = $('#CPF').val();
    var estado = $('#Estado').val();
    var tipoDeCarga = $('#TipoCarga').val();
    var pesoCarga = $('#Peso').val();
    var valorCarga = $('#valorCarga').val();
    var descricao = $('#Descricao').val();
    var precoMedio = 0;

    //Precos por KG dos Estados
    var acre_pesoMinimo = 4;
    var acre_precoFixo = 127.80;
    var acre_precoKG = 22.35;

    var alagoas_pesoMinimo = 9;
    var alagoas_precoFixo = 127.80;
    var alagoas_precoKG = 11.66;

    var amapa_pesoMinimo = 3;
    var amapa_precoFixo = 127.80;
    var amapa_precoKG = 30.12;

    var amazonas_pesoMinimo = 7;
    var amazonas_precoFixo = 127.80;
    var amazonas_precoKG = 14.23;

    var bahia_pesoMinimo = 9;
    var bahia_precoFixo = 127.80;
    var bahia_precoKG = 11.66;

    var ceara_pesoMinimo = 12;
    var ceara_precoFixo = 127.80;
    var ceara_precoKG = 8.58;

    var distritoFederal_pesoMinimo = 11;
    var distritoFederal_precoFixo = 127.80;
    var distritoFederal_precoKG = 7.09;

    var espiritoSanto_pesoMinimo = 12;
    var espiritoSanto_precoFixo = 127.80;
    var espiritoSanto_precoKG = 9.21;

    var goias_pesoMinimo = 12;
    var goias_precoFixo = 127.80;
    var goias_precoKG = 8.31;

    var maranhao_pesoMinimo = 8;
    var maranhao_precoFixo = 127.80;
    var maranhao_precoKG = 12.56;

    var matoGrosso_pesoMinimo = 9;
    var matoGrosso_precoFixo = 127.80;
    var matoGrosso_precoKG = 11.66;

    var matoGrossoDoSul_pesoMinimo = 10;
    var matoGrossoDoSul_precoFixo = 127.80;
    var matoGrossoDoSul_precoKG = 10.64;

    var minasGerais_pesoMinimo = 13;
    var minasGerais_precoFixo = 127.80;
    var minasGerais_precoKG = 8.36;

    var para_pesoMinimo = 13;
    var para_precoFixo = 127.80;
    var para_precoKG = 7.83;

    var paraiba_pesoMinimo = 11;
    var paraiba_precoFixo = 127.80;
    var paraiba_precoKG = 9.71;

    var parana_pesoMinimo = 13;
    var parana_precoFixo = 127.80;
    var parana_precoKG = 7.83;

    var pernambuco_pesoMinimo = 8;
    var pernambuco_precoFixo = 127.80;
    var pernambuco_precoKG = 13.60;

    var piaui_pesoMinimo = 7;
    var piaui_precoFixo = 127.80;
    var piaui_precoKG = 14.39;

    var rioDeJaneiro_pesoMinimo = 13;
    var rioDeJaneiro_precoFixo = 127.80;
    var rioDeJaneiro_precoKG = 7.55;

    var rioGrandeDoNorte_pesoMinimo = 14;
    var rioGrandeDoNorte_precoFixo = 127.80;
    var rioGrandeDoNorte_precoKG = 7.77;

    var rioGrandeDoSul_pesoMinimo = 19;
    var rioGrandeDoSul_precoFixo = 127.80;
    var rioGrandeDoSul_precoKG = 5.83;

    var rondonia_pesoMinimo = 3;
    var rondonia_precoFixo = 127.80;
    var rondonia_precoKG = 31.25;

    var roraima_pesoMinimo = 3;
    var roraima_precoFixo = 127.80;
    var roraima_precoKG = 34.67;

    var santaCatarina_pesoMinimo = 13;
    var santaCatarina_precoFixo = 127.80;
    var santaCatarina_precoKG = 7.83;

    var saoPaulo_pesoMinimo = 8;
    var saoPaulo_precoFixo = 127.80;
    var saoPaulo_precoKG = 12.56;

    var sergipe_pesoMinimo = 3;
    var sergipe_precoFixo = 127.80;
    var sergipe_precoKG = 31.45;

    var tocantins_pesoMinimo = 7;
    var tocantins_precoFixo = 127.80;
    var tocantins_precoKG = 15.58;

    if (pesoCarga != 0 && pesoCarga != "" && pesoCarga != null) {
        switch (estado) {
            case "ac":
                estado = "Acre";
                if (pesoCarga <= acre_pesoMinimo) {
                    precoMedio = acre_precoFixo;
                } else {
                    precoMedio = acre_precoFixo + (acre_precoKG * (pesoCarga - acre_pesoMinimo));
                }
                break;
            case "al":
                estado = "Alagoas";
                if (pesoCarga <= alagoas_pesoMinimo) {
                    precoMedio = alagoas_precoFixo;
                } else {
                    precoMedio = alagoas_precoFixo + (alagoas_precoKG * (pesoCarga - alagoas_pesoMinimo));
                }
                break;
            case "ap":
                estado = "Amapá";
                if (pesoCarga <= amapa_pesoMinimo) {
                    precoMedio = amapa_precoFixo;
                } else {
                    precoMedio = amapa_precoFixo + (amapa_precoKG * (pesoCarga - amapa_pesoMinimo));
                }
                break;
            case "am":
                estado = "Amazonas";
                if (pesoCarga <= amazonas_pesoMinimo) {
                    precoMedio = amazonas_precoFixo;
                } else {
                    precoMedio = amazonas_precoFixo + (amazonas_precoKG * (pesoCarga - amazonas_pesoMinimo));
                }
                break;
            case "ba":
                estado = "Bahia";
                if (pesoCarga <= bahia_pesoMinimo) {
                    precoMedio = bahia_precoFixo;
                } else {
                    precoMedio = bahia_precoFixo + (bahia_precoKG * (pesoCarga - bahia_pesoMinimo));
                }
                break;
            case "ce":
                estado = "Ceará";
                if (pesoCarga <= ceara_pesoMinimo) {
                    precoMedio = ceara_precoFixo;
                } else {
                    precoMedio = ceara_precoFixo + (ceara_precoKG * (pesoCarga - ceara_pesoMinimo));
                }
                break;
            case "df":
                estado = "Distrito Federal";
                if (pesoCarga <= distritoFederal_pesoMinimo) {
                    precoMedio = distritoFederal_precoFixo;
                } else {
                    precoMedio = distritoFederal_precoFixo + (distritoFederal_precoKG * (pesoCarga - distritoFederal_pesoMinimo));
                }
                break;
            case "es":
                estado = "Espírito Santo";
                if (pesoCarga <= espiritoSanto_pesoMinimo) {
                    precoMedio = espiritoSanto_precoFixo;
                } else {
                    precoMedio = espiritoSanto_precoFixo + (espiritoSanto_precoKG * (pesoCarga - espiritoSanto_pesoMinimo));
                }
                break;
            case "go":
                estado = "Goiás";
                if (pesoCarga <= goias_pesoMinimo) {
                    precoMedio = goias_precoFixo;
                } else {
                    precoMedio = goias_precoFixo + (goias_precoKG * (pesoCarga - goias_pesoMinimo));
                }
                break;
            case "ma":
                estado = "Maranhão";
                if (pesoCarga <= maranhao_pesoMinimo) {
                    precoMedio = maranhao_precoFixo;
                } else {
                    precoMedio = maranhao_precoFixo + (maranhao_precoKG * (pesoCarga - maranhao_pesoMinimo));
                }
                break;
            case "mt":
                estado = "Mato Grosso";
                if (pesoCarga <= matoGrosso_pesoMinimo) {
                    precoMedio = matoGrosso_precoFixo;
                } else {
                    precoMedio = matoGrosso_precoFixo + (matoGrosso_precoKG * (pesoCarga - matoGrosso_pesoMinimo));
                }
                break;
            case "ms":
                estado = "Mato Grosso do Sul";
                if (pesoCarga <= matoGrossoDoSul_pesoMinimo) {
                    precoMedio = matoGrossoDoSul_precoFixo;
                } else {
                    precoMedio = matoGrossoDoSul_precoFixo + (matoGrossoDoSul_precoKG * (pesoCarga - matoGrossoDoSul_pesoMinimo));
                }
                break;
            case "mg":
                estado = "Minas Gerais";
                if (pesoCarga <= minasGerais_pesoMinimo) {
                    precoMedio = minasGerais_precoFixo;
                } else {
                    precoMedio = minasGerais_precoFixo + (minasGerais_precoKG * (pesoCarga - minasGerais_pesoMinimo));
                }
                break;
            case "pa":
                estado = "Pará";
                if (pesoCarga <= para_pesoMinimo) {
                    precoMedio = para_precoFixo;
                } else {
                    precoMedio = para_precoFixo + (para_precoKG * (pesoCarga - para_pesoMinimo));
                }
                break;
            case "pb":
                estado = "Paraíba";
                if (pesoCarga <= paraiba_pesoMinimo) {
                    precoMedio = paraiba_precoFixo;
                } else {
                    precoMedio = paraiba_precoFixo + (paraiba_precoKG * (pesoCarga - paraiba_pesoMinimo));
                }
                break;
            case "pr":
                estado = "Paraná";
                if (pesoCarga <= parana_pesoMinimo) {
                    precoMedio = parana_precoFixo;
                } else {
                    precoMedio = parana_precoFixo + (parana_precoKG * (pesoCarga - parana_pesoMinimo));
                }
                break;
            case "pe":
                estado = "Pernambuco";
                if (pesoCarga <= pernambuco_pesoMinimo) {
                    precoMedio = pernambuco_precoFixo;
                } else {
                    precoMedio = pernambuco_precoFixo + (pernambuco_precoKG * (pesoCarga - pernambuco_pesoMinimo));
                }
                break;
            case "pi":
                estado = "Piauí";
                if (pesoCarga <= piaui_pesoMinimo) {
                    precoMedio = piaui_precoFixo;
                } else {
                    precoMedio = piaui_precoFixo + (piaui_precoKG * (pesoCarga - piaui_pesoMinimo));
                }
                break;
            case "rj":
                estado = "Rio de Janeiro";
                if (pesoCarga <= rioDeJaneiro_pesoMinimo) {
                    precoMedio = rioDeJaneiro_precoFixo;
                } else {
                    precoMedio = rioDeJaneiro_precoFixo + (rioDeJaneiro_precoKG * (pesoCarga - rioDeJaneiro_pesoMinimo));
                }
                break;
            case "rn":
                estado = "Rio Grande do Norte";
                if (pesoCarga <= rioGrandeDoNorte_pesoMinimo) {
                    precoMedio = rioGrandeDoNorte_precoFixo;
                } else {
                    precoMedio = rioGrandeDoNorte_precoFixo + (rioGrandeDoNorte_precoKG * (pesoCarga - rioGrandeDoNorte_pesoMinimo));
                }
                break;
            case "rs":
                estado = "Rio Grande do Sul";
                if (pesoCarga <= rioGrandeDoSul_pesoMinimo) {
                    precoMedio = rioGrandeDoSul_precoFixo;
                } else {
                    precoMedio = rioGrandeDoSul_precoFixo + (rioGrandeDoSul_precoKG * (pesoCarga - rioGrandeDoSul_pesoMinimo));
                }
                break;
            case "ro":
                estado = "Rondônia";
                if (pesoCarga <= rondonia_pesoMinimo) {
                    precoMedio = rondonia_precoFixo;
                } else {
                    precoMedio = rondonia_precoFixo + (rondonia_precoKG * (pesoCarga - rondonia_pesoMinimo));
                }
                break;
            case "rr":
                estado = "Roraima";
                if (pesoCarga <= roraima_pesoMinimo) {
                    precoMedio = roraima_precoFixo;
                } else {
                    precoMedio = roraima_precoFixo + (roraima_precoKG * (pesoCarga - roraima_pesoMinimo));
                }
                break;
            case "sc":
                estado = "Santa Catarina";
                if (pesoCarga <= santaCatarina_pesoMinimo) {
                    precoMedio = santaCatarina_precoFixo;
                } else {
                    precoMedio = santaCatarina_precoFixo + (santaCatarina_precoKG * (pesoCarga - santaCatarina_pesoMinimo));
                }
                break;
            case "sp":
                estado = "São Paulo";
                if (pesoCarga <= saoPaulo_pesoMinimo) {
                    precoMedio = saoPaulo_precoFixo;
                } else {
                    precoMedio = saoPaulo_precoFixo + (saoPaulo_precoKG * (pesoCarga - saoPaulo_pesoMinimo));
                }
                break;
            case "se":
                estado = "Sergipe";
                if (pesoCarga <= sergipe_pesoMinimo) {
                    precoMedio = sergipe_precoFixo;
                } else {
                    precoMedio = sergipe_precoFixo + (sergipe_precoKG * (pesoCarga - sergipe_pesoMinimo));
                }
                break;
            case "to":
                estado = "Tocantins";
                if (pesoCarga <= tocantins_pesoMinimo) {
                    precoMedio = tocantins_precoFixo;
                } else {
                    precoMedio = tocantins_precoFixo + (tocantins_precoKG * (pesoCarga - tocantins_pesoMinimo));
                }
                break;
            default:
                console.log("Estado não encontrado");
        }
    } else {
        switch (estado) {
            case "ac":
                estado = "Acre";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + acre_pesoMinimo + " Kg - Valor: " + acre_precoFixo + ". " +
                    "Valor excedente de " + acre_precoKG + " por Kg.";
                break;
            case "al":
                estado = "Alagoas";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + alagoas_pesoMinimo + " Kg - Valor: " + alagoas_precoFixo + ". " +
                    "Valor excedente de " + alagoas_precoKG + " por Kg.";
                break;
            case "ap":
                estado = "Amapá";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + amapa_pesoMinimo + " Kg - Valor: " + amapa_precoFixo + ". " +
                    "Valor excedente de " + amapa_precoKG + " por Kg.";
                break;
            case "am":
                estado = "Amazonas";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + amazonas_pesoMinimo + " Kg - Valor: " + amazonas_precoFixo + ". " +
                    "Valor excedente de " + amazonas_precoKG + " por Kg.";
                break;
            case "ba":
                estado = "Bahia";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + bahia_pesoMinimo + " Kg - Valor: " + bahia_precoFixo + ". " +
                    "Valor excedente de " + bahia_precoKG + " por Kg.";
                break;
            case "ce":
                estado = "Ceará";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + ceara_pesoMinimo + " Kg - Valor: " + ceara_precoFixo + ". " +
                    "Valor excedente de " + ceara_precoKG + " por Kg.";
                break;
            case "df":
                estado = "Distrito Federal";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + distritoFederal_pesoMinimo + " Kg - Valor: " + distritoFederal_precoFixo + ". " +
                    "Valor excedente de " + distritoFederal_precoKG + " por Kg.";
                break;
            case "es":
                estado = "Espírito Santo";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + espiritoSanto_pesoMinimo + " Kg - Valor: " + espiritoSanto_precoFixo + ". " +
                    "Valor excedente de " + espiritoSanto_precoKG + " por Kg.";
                break;
            case "go":
                estado = "Goiás";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + goias_pesoMinimo + " Kg - Valor: " + goias_precoFixo + ". " +
                    "Valor excedente de " + goias_precoKG + " por Kg.";
                break;
            case "ma":
                estado = "Maranhão";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + maranhao_pesoMinimo + " Kg - Valor: " + maranhao_precoFixo + ". " +
                    "Valor excedente de " + maranhao_precoKG + " por Kg.";
                break;
            case "mt":
                estado = "Mato Grosso";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + matoGrosso_pesoMinimo + " Kg - Valor: " + matoGrosso_precoFixo + ". " +
                    "Valor excedente de " + matoGrosso_precoKG + " por Kg.";
                break;
            case "ms":
                estado = "Mato Grosso do Sul";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + matoGrossoDoSul_pesoMinimo + " Kg - Valor: " + matoGrossoDoSul_precoFixo + ". " +
                    "Valor excedente de " + matoGrossoDoSul_precoKG + " por Kg.";
                break;
            case "mg":
                estado = "Minas Gerais";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + minasGerais_pesoMinimo + " Kg - Valor: " + minasGerais_precoFixo + ". " +
                    "Valor excedente de " + minasGerais_precoKG + " por Kg.";
                break;
            case "pa":
                estado = "Pará";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + para_pesoMinimo + " Kg - Valor: " + para_precoFixo + ". " +
                    "Valor excedente de " + para_precoKG + " por Kg.";
                break;
            case "pb":
                estado = "Paraíba";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + paraiba_pesoMinimo + " Kg - Valor: " + paraiba_precoFixo + ". " +
                    "Valor excedente de " + paraiba_precoKG + " por Kg.";
                break;
            case "pr":
                estado = "Paraná";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + parana_pesoMinimo + " Kg - Valor: " + parana_precoFixo + ". " +
                    "Valor excedente de " + parana_precoKG + " por Kg.";
                break;
            case "pe":
                estado = "Pernambuco";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + pernambuco_pesoMinimo + " Kg - Valor: " + pernambuco_precoFixo + ". " +
                    "Valor excedente de " + pernambuco_precoKG + " por Kg.";
                break;
            case "pi":
                estado = "Piauí";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + piaui_pesoMinimo + " Kg - Valor: " + piaui_precoFixo + ". " +
                    "Valor excedente de " + piaui_precoKG + " por Kg.";
                break;
            case "rj":
                estado = "Rio de Janeiro";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + rioDeJaneiro_pesoMinimo + " Kg - Valor: " + rioDeJaneiro_precoFixo + ". " +
                    "Valor excedente de " + rioDeJaneiro_precoKG + " por Kg.";
                break;
            case "rn":
                estado = "Rio Grande do Norte";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + rioGrandeDoNorte_pesoMinimo + " Kg - Valor: " + rioGrandeDoNorte_precoFixo + ". " +
                    "Valor excedente de " + rioGrandeDoNorte_precoKG + " por Kg.";
                break;
            case "rs":
                estado = "Rio Grande do Sul";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + rioGrandeDoSul_pesoMinimo + " Kg - Valor: " + rioGrandeDoSul_precoFixo + ". " +
                    "Valor excedente de " + rioGrandeDoSul_precoKG + " por Kg.";
                break;
            case "ro":
                estado = "Rondônia";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + rondonia_pesoMinimo + " Kg - Valor: " + rondonia_precoFixo + ". " +
                    "Valor excedente de " + rondonia_precoKG + " por Kg.";
                break;
            case "rr":
                estado = "Roraima";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + roraima_pesoMinimo + " Kg - Valor: " + roraima_precoFixo + ". " +
                    "Valor excedente de " + roraima_precoKG + " por Kg.";
                break;
            case "sc":
                estado = "Santa Catarina";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + santaCatarina_pesoMinimo + " Kg - Valor: " + santaCatarina_precoFixo + ". " +
                    "Valor excedente de " + santaCatarina_precoKG + " por Kg.";
                break;
            case "sp":
                estado = "São Paulo";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + saoPaulo_pesoMinimo + " Kg - Valor: " + saoPaulo_precoFixo + ". " +
                    "Valor excedente de " + saoPaulo_precoKG + " por Kg.";
                break;
            case "se":
                estado = "Sergipe";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + sergipe_pesoMinimo + " Kg - Valor: " + sergipe_precoFixo + ". " +
                    "Valor excedente de " + sergipe_precoKG + " por Kg.";
                break;
            case "to":
                estado = "Tocantins";
                precoMedio = "Peso não informado, " +
                    "Preço fixo para cargas de até " + tocantins_pesoMinimo + " Kg - Valor: " + tocantins_precoFixo + ". " +
                    "Valor excedente de " + tocantins_precoKG + " por Kg.";
                break;
            default:
                precoMedio = "Estado não encontrado";
        }
        precoMedio = "Peso não informado";
    }

    switch (tipoDeCarga) {
        case "confeccoes":
            tipoDeCarga = "Confecções";
            break;
        case "eletronicos":
            tipoDeCarga = "Eletronicos";
            break;
        case "Pereciveis":
            tipoDeCarga = "Perecíveis";
            break;
        case "naoPereciveis":
            tipoDeCarga = "Não Perecíveis";
            break;
        case "pecas":
            tipoDeCarga = "Peças";
            break;
        case "vidro":
            tipoDeCarga = "Vidro(s)";
            break;
        case "cargaPerigosa":
            tipoDeCarga = "Carga Perigosa";
            break;
        case "outros":
            tipoDeCarga = "Outros";
            break;
        default:
            tipoDeCarga = "Tipo de carga desconhecida.";
            break;
    }

    var categoria = tipoDeCarga;
    switch (categoria) {
        case "Pereciveis":
            precoMedio += precoMedio * 0.20;
            break;
        case "eletronicos":
            precoMedio = precoMedio + (valorCarga * 0.0054);
            break;
        default:
            var nd = "nada a se fazer";
    }

    $('#resumoNome').text(nome);
    $('#resumoDocumento').text(documento);
    $('#resumoDestino').text("São Paulo X " + estado);
    $('#resumoTipoCarga').text(tipoDeCarga);
    $('#resumoPesoCarga').text(pesoCarga + " Kg");
    $('#resumoValorMercadoria').text("R$ " + valorCarga);
    $('#resumoDescricao').text(descricao);
    if (precoMedio == "Peso não informado") {
        $('#resumoCotacao').text(precoMedio);
        $('#valorMedioCotacao').val(precoMedio);
    } else {

        var roundedPrice = precoMedio.toFixed(2);
        var formattedPrice = roundedPrice.replace('.', ',');
        precoMedio = formattedPrice;

        $('#resumoCotacao').text("R$ " + precoMedio);
        $('#valorMedioCotacao').val("R$ " + precoMedio);

    }

}

function viaCep(cep) {
    var urlCep = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: urlCep,
        type: "GET",
        dataType: "json",
        success: function (data) {

            var endereco = data.logradouro;
            var bairro = data.bairro;
            if (endereco == "" || endereco == null || endereco == undefined) {
                $("#Endereco").val("");
                exibeMsgRetorno("Cep não encontrado ou não existente");
            } else {
                $("#Endereco").val(endereco + " - " + bairro);
                $("#Logradouro").focus();
            }

        },
        error: function (error) {
            $("#Endereco").val("");
            console.error("Error fetching data", error);
        }
    });
}

function viaCepEntrega(cep) {
    var urlCep = "https://viacep.com.br/ws/" + cep + "/json/";
    $.ajax({
        url: urlCep,
        type: "GET",
        dataType: "json",
        success: function (data) {

            var endereco = data.logradouro;
            var bairro = data.bairro;
            if (endereco == "" || endereco == null || endereco == undefined) {
                $("#Endereco_entrega").val("");
                exibeMsgRetorno("Cep não encontrado ou não existente");
            } else {
                $("#Endereco_entrega").val(endereco + " - " + bairro);
                $("#num_entrega").focus();
            }

        },
        error: function (error) {
            $("#Endereco_entrega").val("");
            console.error("Error fetching data", error);
        }
    });
}

function selecionaCategoriaCarga() {

    var tipoCarga = $('#TipoCarga').val();

    switch (tipoCarga) {
        case "confeccoes":
            $('#tc_qtd_fardos').fadeIn('slow');
            $('#tc_media_peso_fardo').fadeIn('slow');
            $('#tc_largura').hide();
            $('#tc_altura').hide();
            $('#tc_diametro').hide();
            $('#tc_volume').hide();
            $('#tc_valorCarga').hide();
            break;

        case "eletronicos":
            $('#tc_qtd_fardos').hide();
            $('#tc_media_peso_fardo').hide();
            $('#tc_largura').fadeIn('slow');
            $('#tc_altura').fadeIn('slow');
            $('#tc_diametro').fadeIn('slow');
            $('#tc_valorCarga').fadeIn('slow');
            $('#tc_volume').hide();
            break;

        default:
            $('#tc_qtd_fardos').hide();
            $('#tc_valorCarga').hide();
            $('#tc_media_peso_fardo').hide();
            $('#tc_largura').fadeIn('slow');
            $('#tc_altura').fadeIn('slow');
            $('#tc_diametro').fadeIn('slow');
            $('#tc_volume').fadeIn('slow');
            break;
    }


}

async function sendMessage(msg) {

    var telDestinatario = '5511913188606';

    const url = 'https://api.gzappy.com/v1/message/send-message';
    const token = await validaToken();
    const instanceId = await validaInstanceId();
    const phoneNumber = telDestinatario;

    const data = {
        instance_id: instanceId,
        message: [msg],
        phone: [phoneNumber]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }

        const jsonResponse = await response.json();
        console.log('Resposta da API:', jsonResponse);
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.message);
    }
}

async function sendMessageClient(msg, telClient) {

    const url = 'https://api.gzappy.com/v1/message/send-message';
    const token = await validaToken();
    const instanceId = await validaInstanceId();
    const phoneNumber = telClient;

    const data = {
        instance_id: instanceId,
        message: [msg],
        phone: [phoneNumber]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Erro ao enviar mensagem');
        }

        const jsonResponse = await response.json();
        console.log('Resposta da API:', jsonResponse);

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.message);
    }
}

function validaToken() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "/Home/ValidaToken",
            type: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data.token);
            },
            error: function (error) {
                console.error("Error fetching data", error);
                reject(error);
            }
        });
    });
}

function validaInstanceId() {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "/Home/ValidaInstanceId",
            type: "GET",
            dataType: "json",
            success: function (data) {
                resolve(data.instanceId);
            },
            error: function (error) {
                $("#Endereco").val("");
                console.error("Error fetching data", error);
                reject(error);
            }
        });
    });
}

// ---------------------------------------------------------------------------------------------- //


// -------------------------------------  SIMULAR COTAÇÃO ------------------------------------- //
function calcularSimularCotacao() {

    var estado = $('#Estado').val();
    var categoria = $('#TipoCarga').val();

    var pesoCarga = $('#Peso').val();
    var alturaCarga = $('#Altura').val();
    var larguraCarga = $('#Largura').val();
    var diametroCarga = $('#Diametro').val();
    var volumeCarga = $('#Volume').val();

    var qtd_fardos = $('#qtd_fardos').val();
    var media_peso_fardo = $('#media_peso_fardo').val();

    var valorCarga = $('#valor_carga').val();


    if (estado == null || estado == "") {
        exibeMsgRetorno("Destino é obrigatório", "sucesso");
        $('#Peso').focus();
        return false;
    }

    if (categoria == null || categoria == "") {
        exibeMsgRetorno("Categoria da Carga é obrigatório", "sucesso");
        $('#TipoCarga').focus();
        return false;
    }

    if (pesoCarga == "" || pesoCarga == null || pesoCarga == 0) {
        exibeMsgRetorno("Insira um peso para realizar uma cotação", "sucesso");
        return false;
    }
    /*
    switch (categoria) {
        case "confeccoes":
            if (qtd_fardos == null || qtd_fardos == "") {
                exibeMsgRetorno("Insira a quantidade de fardos", "sucesso");
                $('#qtd_fardos').focus();
                return false;
            }
            if (media_peso_fardo == null || media_peso_fardo == "") {
                exibeMsgRetorno("Insira a media de peso", "sucesso");
                $('#media_peso_fardo').focus();
                return false;
            }
            break;

        case "eletronicos":
            if (alturaCarga == null || alturaCarga == "") {
                exibeMsgRetorno("Altura é obrigatório", "sucesso");
                $('#Altura').focus();
                return false;
            }

            if (larguraCarga == null || larguraCarga == "") {
                exibeMsgRetorno("Largura é obrigatório", "sucesso");
                $('#Largura').focus();
                return false;
            }

            if (diametroCarga == null || diametroCarga == "") {
                exibeMsgRetorno("Diâmetro é obrigatório", "sucesso");
                $('#Diametro').focus();
                return false;
            }

            if (valorCarga == null || valorCarga == "") {
                exibeMsgRetorno("Valor da carga é obrigatório", "sucesso");
                $('#valor_carga').focus();
                return false;
            }

            break;

        default:
            if (alturaCarga == null || alturaCarga == "") {
                exibeMsgRetorno("Altura é obrigatório", "sucesso");
                $('#Altura').focus();
                return false;
            }

            if (larguraCarga == null || larguraCarga == "") {
                exibeMsgRetorno("Largura é obrigatório", "sucesso");
                $('#Largura').focus();
                return false;
            }

            if (diametroCarga == null || diametroCarga == "") {
                exibeMsgRetorno("Diâmetro é obrigatório", "sucesso");
                $('#Diametro').focus();
                return false;
            }

            if (volumeCarga == null || volumeCarga == "") {
                exibeMsgRetorno("Volume da carga é obrigatório", "sucesso");
                $('#Volume').focus();
                return false;
            }
            break;
    }
     */


    //Precos por KG dos Estados
    var acre_pesoMinimo = 4;
    var acre_precoFixo = 127.80;
    var acre_precoKG = 22.35;

    var alagoas_pesoMinimo = 9;
    var alagoas_precoFixo = 127.80;
    var alagoas_precoKG = 11.66;

    var amapa_pesoMinimo = 3;
    var amapa_precoFixo = 127.80;
    var amapa_precoKG = 30.12;

    var amazonas_pesoMinimo = 7;
    var amazonas_precoFixo = 127.80;
    var amazonas_precoKG = 14.23;

    var bahia_pesoMinimo = 9;
    var bahia_precoFixo = 127.80;
    var bahia_precoKG = 11.66;

    var ceara_pesoMinimo = 12;
    var ceara_precoFixo = 127.80;
    var ceara_precoKG = 8.58;

    var distritoFederal_pesoMinimo = 11;
    var distritoFederal_precoFixo = 127.80;
    var distritoFederal_precoKG = 7.09;

    var espiritoSanto_pesoMinimo = 12;
    var espiritoSanto_precoFixo = 127.80;
    var espiritoSanto_precoKG = 9.21;

    var goias_pesoMinimo = 12;
    var goias_precoFixo = 127.80;
    var goias_precoKG = 8.31;

    var maranhao_pesoMinimo = 8;
    var maranhao_precoFixo = 127.80;
    var maranhao_precoKG = 12.56;

    var matoGrosso_pesoMinimo = 9;
    var matoGrosso_precoFixo = 127.80;
    var matoGrosso_precoKG = 11.66;

    var matoGrossoDoSul_pesoMinimo = 10;
    var matoGrossoDoSul_precoFixo = 127.80;
    var matoGrossoDoSul_precoKG = 10.64;

    var minasGerais_pesoMinimo = 13;
    var minasGerais_precoFixo = 127.80;
    var minasGerais_precoKG = 8.36;

    var para_pesoMinimo = 13;
    var para_precoFixo = 127.80;
    var para_precoKG = 7.83;

    var paraiba_pesoMinimo = 11;
    var paraiba_precoFixo = 127.80;
    var paraiba_precoKG = 9.71;

    var parana_pesoMinimo = 13;
    var parana_precoFixo = 127.80;
    var parana_precoKG = 7.83;

    var pernambuco_pesoMinimo = 8;
    var pernambuco_precoFixo = 127.80;
    var pernambuco_precoKG = 13.60;

    var piaui_pesoMinimo = 7;
    var piaui_precoFixo = 127.80;
    var piaui_precoKG = 14.39;

    var rioDeJaneiro_pesoMinimo = 13;
    var rioDeJaneiro_precoFixo = 127.80;
    var rioDeJaneiro_precoKG = 7.55;

    var rioGrandeDoNorte_pesoMinimo = 14;
    var rioGrandeDoNorte_precoFixo = 127.80;
    var rioGrandeDoNorte_precoKG = 7.77;

    var rioGrandeDoSul_pesoMinimo = 19;
    var rioGrandeDoSul_precoFixo = 127.80;
    var rioGrandeDoSul_precoKG = 5.83;

    var rondonia_pesoMinimo = 3;
    var rondonia_precoFixo = 127.80;
    var rondonia_precoKG = 31.25;

    var roraima_pesoMinimo = 3;
    var roraima_precoFixo = 127.80;
    var roraima_precoKG = 34.67;

    var santaCatarina_pesoMinimo = 13;
    var santaCatarina_precoFixo = 127.80;
    var santaCatarina_precoKG = 7.83;

    var saoPaulo_pesoMinimo = 8;
    var saoPaulo_precoFixo = 127.80;
    var saoPaulo_precoKG = 12.56;

    var sergipe_pesoMinimo = 3;
    var sergipe_precoFixo = 127.80;
    var sergipe_precoKG = 31.45;

    var tocantins_pesoMinimo = 7;
    var tocantins_precoFixo = 127.80;
    var tocantins_precoKG = 15.58;



    if (pesoCarga != 0 && pesoCarga != "" && pesoCarga != null) {
        switch (estado) {
            case "ac":
                estado = "Acre";
                if (pesoCarga <= acre_pesoMinimo) {
                    precoMedio = acre_precoFixo;
                } else {
                    precoMedio = acre_precoFixo + (acre_precoKG * (pesoCarga - acre_pesoMinimo));
                }
                break;
            case "al":
                estado = "Alagoas";
                if (pesoCarga <= alagoas_pesoMinimo) {
                    precoMedio = alagoas_precoFixo;
                } else {
                    precoMedio = alagoas_precoFixo + (alagoas_precoKG * (pesoCarga - alagoas_pesoMinimo));
                }
                break;
            case "ap":
                estado = "Amapá";
                if (pesoCarga <= amapa_pesoMinimo) {
                    precoMedio = amapa_precoFixo;
                } else {
                    precoMedio = amapa_precoFixo + (amapa_precoKG * (pesoCarga - amapa_pesoMinimo));
                }
                break;
            case "am":
                estado = "Amazonas";
                if (pesoCarga <= amazonas_pesoMinimo) {
                    precoMedio = amazonas_precoFixo;
                } else {
                    precoMedio = amazonas_precoFixo + (amazonas_precoKG * (pesoCarga - amazonas_pesoMinimo));
                }
                break;
            case "ba":
                estado = "Bahia";
                if (pesoCarga <= bahia_pesoMinimo) {
                    precoMedio = bahia_precoFixo;
                } else {
                    precoMedio = bahia_precoFixo + (bahia_precoKG * (pesoCarga - bahia_pesoMinimo));
                }
                break;
            case "ce":
                estado = "Ceará";
                if (pesoCarga <= ceara_pesoMinimo) {
                    precoMedio = ceara_precoFixo;
                } else {
                    precoMedio = ceara_precoFixo + (ceara_precoKG * (pesoCarga - ceara_pesoMinimo));
                }
                break;
            case "df":
                estado = "Distrito Federal";
                if (pesoCarga <= distritoFederal_pesoMinimo) {
                    precoMedio = distritoFederal_precoFixo;
                } else {
                    precoMedio = distritoFederal_precoFixo + (distritoFederal_precoKG * (pesoCarga - distritoFederal_pesoMinimo));
                }
                break;
            case "es":
                estado = "Espírito Santo";
                if (pesoCarga <= espiritoSanto_pesoMinimo) {
                    precoMedio = espiritoSanto_precoFixo;
                } else {
                    precoMedio = espiritoSanto_precoFixo + (espiritoSanto_precoKG * (pesoCarga - espiritoSanto_pesoMinimo));
                }
                break;
            case "go":
                estado = "Goiás";
                if (pesoCarga <= goias_pesoMinimo) {
                    precoMedio = goias_precoFixo;
                } else {
                    precoMedio = goias_precoFixo + (goias_precoKG * (pesoCarga - goias_pesoMinimo));
                }
                break;
            case "ma":
                estado = "Maranhão";
                if (pesoCarga <= maranhao_pesoMinimo) {
                    precoMedio = maranhao_precoFixo;
                } else {
                    precoMedio = maranhao_precoFixo + (maranhao_precoKG * (pesoCarga - maranhao_pesoMinimo));
                }
                break;
            case "mt":
                estado = "Mato Grosso";
                if (pesoCarga <= matoGrosso_pesoMinimo) {
                    precoMedio = matoGrosso_precoFixo;
                } else {
                    precoMedio = matoGrosso_precoFixo + (matoGrosso_precoKG * (pesoCarga - matoGrosso_pesoMinimo));
                }
                break;
            case "ms":
                estado = "Mato Grosso do Sul";
                if (pesoCarga <= matoGrossoDoSul_pesoMinimo) {
                    precoMedio = matoGrossoDoSul_precoFixo;
                } else {
                    precoMedio = matoGrossoDoSul_precoFixo + (matoGrossoDoSul_precoKG * (pesoCarga - matoGrossoDoSul_pesoMinimo));
                }
                break;
            case "mg":
                estado = "Minas Gerais";
                if (pesoCarga <= minasGerais_pesoMinimo) {
                    precoMedio = minasGerais_precoFixo;
                } else {
                    precoMedio = minasGerais_precoFixo + (minasGerais_precoKG * (pesoCarga - minasGerais_pesoMinimo));
                }
                break;
            case "pa":
                estado = "Pará";
                if (pesoCarga <= para_pesoMinimo) {
                    precoMedio = para_precoFixo;
                } else {
                    precoMedio = para_precoFixo + (para_precoKG * (pesoCarga - para_pesoMinimo));
                }
                break;
            case "pb":
                estado = "Paraíba";
                if (pesoCarga <= paraiba_pesoMinimo) {
                    precoMedio = paraiba_precoFixo;
                } else {
                    precoMedio = paraiba_precoFixo + (paraiba_precoKG * (pesoCarga - paraiba_pesoMinimo));
                }
                break;
            case "pr":
                estado = "Paraná";
                if (pesoCarga <= parana_pesoMinimo) {
                    precoMedio = parana_precoFixo;
                } else {
                    precoMedio = parana_precoFixo + (parana_precoKG * (pesoCarga - parana_pesoMinimo));
                }
                break;
            case "pe":
                estado = "Pernambuco";
                if (pesoCarga <= pernambuco_pesoMinimo) {
                    precoMedio = pernambuco_precoFixo;
                } else {
                    precoMedio = pernambuco_precoFixo + (pernambuco_precoKG * (pesoCarga - pernambuco_pesoMinimo));
                }
                break;
            case "pi":
                estado = "Piauí";
                if (pesoCarga <= piaui_pesoMinimo) {
                    precoMedio = piaui_precoFixo;
                } else {
                    precoMedio = piaui_precoFixo + (piaui_precoKG * (pesoCarga - piaui_pesoMinimo));
                }
                break;
            case "rj":
                estado = "Rio de Janeiro";
                if (pesoCarga <= rioDeJaneiro_pesoMinimo) {
                    precoMedio = rioDeJaneiro_precoFixo;
                } else {
                    precoMedio = rioDeJaneiro_precoFixo + (rioDeJaneiro_precoKG * (pesoCarga - rioDeJaneiro_pesoMinimo));
                }
                break;
            case "rn":
                estado = "Rio Grande do Norte";
                if (pesoCarga <= rioGrandeDoNorte_pesoMinimo) {
                    precoMedio = rioGrandeDoNorte_precoFixo;
                } else {
                    precoMedio = rioGrandeDoNorte_precoFixo + (rioGrandeDoNorte_precoKG * (pesoCarga - rioGrandeDoNorte_pesoMinimo));
                }
                break;
            case "rs":
                estado = "Rio Grande do Sul";
                if (pesoCarga <= rioGrandeDoSul_pesoMinimo) {
                    precoMedio = rioGrandeDoSul_precoFixo;
                } else {
                    precoMedio = rioGrandeDoSul_precoFixo + (rioGrandeDoSul_precoKG * (pesoCarga - rioGrandeDoSul_pesoMinimo));
                }
                break;
            case "ro":
                estado = "Rondônia";
                if (pesoCarga <= rondonia_pesoMinimo) {
                    precoMedio = rondonia_precoFixo;
                } else {
                    precoMedio = rondonia_precoFixo + (rondonia_precoKG * (pesoCarga - rondonia_pesoMinimo));
                }
                break;
            case "rr":
                estado = "Roraima";
                if (pesoCarga <= roraima_pesoMinimo) {
                    precoMedio = roraima_precoFixo;
                } else {
                    precoMedio = roraima_precoFixo + (roraima_precoKG * (pesoCarga - roraima_pesoMinimo));
                }
                break;
            case "sc":
                estado = "Santa Catarina";
                if (pesoCarga <= santaCatarina_pesoMinimo) {
                    precoMedio = santaCatarina_precoFixo;
                } else {
                    precoMedio = santaCatarina_precoFixo + (santaCatarina_precoKG * (pesoCarga - santaCatarina_pesoMinimo));
                }
                break;
            case "sp":
                estado = "São Paulo";
                if (pesoCarga <= saoPaulo_pesoMinimo) {
                    precoMedio = saoPaulo_precoFixo;
                } else {
                    precoMedio = saoPaulo_precoFixo + (saoPaulo_precoKG * (pesoCarga - saoPaulo_pesoMinimo));
                }
                break;
            case "se":
                estado = "Sergipe";
                if (pesoCarga <= sergipe_pesoMinimo) {
                    precoMedio = sergipe_precoFixo;
                } else {
                    precoMedio = sergipe_precoFixo + (sergipe_precoKG * (pesoCarga - sergipe_pesoMinimo));
                }
                break;
            case "to":
                estado = "Tocantins";
                if (pesoCarga <= tocantins_pesoMinimo) {
                    precoMedio = tocantins_precoFixo;
                } else {
                    precoMedio = tocantins_precoFixo + (tocantins_precoKG * (pesoCarga - tocantins_pesoMinimo));
                }
                break;
            default:
                console.log("Estado não encontrado");
        }
    }

    switch (categoria) {
        case "Pereciveis":
            precoMedio += precoMedio * 0.20;
            break;
        case "eletronicos":
            precoMedio = precoMedio + (valorCarga * 0.0054);
            break;
        default:
            var nd = "nada a se fazer";
    }

    var roundedPrice = precoMedio.toFixed(2);
    var formattedPrice = roundedPrice.replace('.', ',');
    precoMedio = formattedPrice;

    $('#valorCotSimularCotacao').text("R$ " + precoMedio);
    $('#simularCotacao').fadeIn('slow');

}

function limparSimularCotacao() {
    $('#Estado').val("");
    $('#TipoCarga').val("");
    $('#Peso').val("");
    $('#Altura').val("");
    $('#Largura').val("");
    $('#Diametro').val("");
    $('#Volume').val("");
    $('#qtd_fardos').val("");
    $('#media_peso_fardo').val("");

    $('#simularCotacao').fadeOut(250);
}

function zerarCampos() {
    $('#Peso').val("");
    $('#Altura').val("");
    $('#Largura').val("");
    $('#Diametro').val("");
    $('#Volume').val("");
    $('#simularCotacao').fadeOut(250);
}
// ---------------------------------------------------------------------------------------------- //


// -------------------------------------  ENVIO RAPUDO ----------------------------------------- //

function escolheDocEnvioRapido() {

    $('#CPF').val("");
    $('#CNP').val("");

    var tipoDoc = $('#tipo-doc').val();

    if (tipoDoc == "cpf-pessoa-fisica") {
        $('#CPFenvioRapido').show();
        $('#CNPJenvioRapido').hide();
    } else {
        $('#CPFenvioRapido').hide();
        $('#CNPJenvioRapido').show();
    }
}

function validaEnvioRapido() {

    var ntValide = $('#fileUploadNotaFiscal').val();
    var telefone = $('#Telefone').val();
    var docCpfCnpj = "";
    var tipoDoc = $('#tipo-doc').val();

    telefone = telefone.replace(/\D/g, '');

    if (tipoDoc == "cpf-pessoa-fisica") {
        docCpfCnpj = $('#CPF').val();
    } else {
        docCpfCnpj = $('#CNPJ').val();
    }

    if (docCpfCnpj == "" || docCpfCnpj == null || docCpfCnpj == undefined) {
        exibeMsgRetorno("Documento é obrigatorio!");
        $('#CPF').focus();
        $('#CNPJ').focus();
        return false;
    }

    if (telefone == "" || telefone == null || telefone == undefined) {
        exibeMsgRetorno("Telefone é obrigatorio!");
        $('#Telefone').focus();
        return false;
    }

    if (telefone.length < 11) {
        exibeMsgRetorno("Telefone Invalido!");
        $('#Telefone').val("");
        $('#Telefone').focus();
        return false;
    }



    // Verifica se todos os dígitos são iguais
    const digits = telefone.split('').map(Number);
    if (new Set(digits).size === 1) {
        exibeMsgRetorno("Telefone Invalido!");
        $('#Telefone').val("");
        $('#Telefone').focus();
        return false;
    }

    if (ntValide == "" || ntValide == null || ntValide == undefined) {
        exibeMsgRetorno("Selecione um arquivo!");
        $('#fileUploadNotaFiscal').focus();
        return false;
    }

    return true;
}

async function baixaNtFiscal() {

    if (validaEnvioRapido()) {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = String(now.getFullYear()).slice(-2);
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        var doc = $('#CPF').val();
        var telefone = $('#Telefone').val();
        var descricao = $('#descNota').val();

        var codPedido = day + month + year + hours + minutes + seconds;
        var msg = "";

        msg = msg + "⬆️⬆️ *NOTA FISCAL:* ⬆️⬆️" + "\n\n";
        msg = msg + "*TIPO DE SERVIÇO:* Envio Rapido" + "\n";
        msg = msg + "*Documento CNPJ:* " + doc + " \n";
        if (descricao != "" && descricao != null) {
            msg = msg + "*Descrição:* " + descricao + " \n";
        }
        msg = msg + "*Data:* " + day + "/" + month + "/" + year + " \n\n";
        msg = msg + "*Codigo do pedido:* " + codPedido + " \n\n";

        var telClient = "55" + telefone.replace(/\D/g, '');
        var msgClient = "";

        var linkRastreio = "https://wa.me/5511945362630";
        var linkDuvida = "https://grupovegas.azurewebsites.net";
        msgClient = msgClient + "_Oi, como vai?_ \n_Informamos que sua nota foi recebida e está sendo processada!_" + "\n\n";
        msgClient = msgClient + "Segue código de rastreio caso deseje fazer consultas sobre seu pedido." + "\n";
        msgClient = msgClient + "_*Código:*_ " + "*" + codPedido + "*" + "\n";
        msgClient = msgClient + "*Link para rastreio:* " + "*" + linkRastreio + "*" + "\n\n";
        msgClient = msgClient + "Caso tenha outras duvidas 👇 " + "*" + linkDuvida + "*" + "\n\n";
        msgClient = msgClient + "Nós da Vegas Transportes agradecemos a preferência e nos colocamos á disposição.";

        var nt = document.getElementById('fileUploadNotaFiscal');
        var fileNotaFiscal = nt.files[0];

        const cloudName = null;
        const uploadPreset = null;

        const formData = new FormData();
        formData.append('file', fileNotaFiscal);
        formData.append('upload_preset', uploadPreset);

        $.ajax({
            url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (data) {
                const optimizeUrl = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto,q_auto/${data.public_id}`;
                var nota = optimizeUrl;
                sendNotaFiscal(msg, nota);
                sendMessageClient(msgClient, telClient);
                limparEnvioRapido();
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    }
}

async function sendNotaFiscal(msg, nota) {

    var telDestinatario = 'null';

    const url = 'https://api.gzappy.com/v1/message/send-media';
    const token = await validaToken();
    const instanceId = await validaInstanceId();
    const phoneNumber = telDestinatario;


    const data = {
        instance_id: instanceId,
        message: msg,
        mediaUrl: nota,
        phone: [phoneNumber]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(data)
        });

        const jsonResponse = await response.json();
        console.log('Resposta da API:', jsonResponse);
        exibeMsgRetorno("Serviço solicitado com sucesso", "sucesso");

    } catch (error) {
        console.error('Erro ao enviar mensagem:', error.message);
    }
}

function limparEnvioRapido() {

    $('#CPF').val("");
    $('#Telefone').val("");
    $('#descNota').val("");

    $('#nomeArquivo').text("");
    $('#nomeArquivo').text("Nenhum arquivo selecionado");

    $('#fileUploadNotaFiscal').val("");
}

function mascaraCpfEnvioRapido() {

    var cpf = $('#CPF').val();
    var cpf_formatado = cpf.replace(/\D/g, "");

    if (cpf_formatado.length !== 11) {
        exibeMsgRetorno("CPF inválido!");
        $('#CPF').val("");
    }
    else {

        cpf_formatado = cpf_formatado.replace(/^(\d{3})(\d)/, "$1.$2");
        cpf_formatado = cpf_formatado.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
        cpf_formatado = cpf_formatado.replace(/\.(\d{3})(\d)/, ".$1-$2");
        $('#CPF').val(cpf_formatado);
    }

    validaCPF();
}

function mascaraCnpjEnvioRapido() {
    var cnpj = $('#CNPJ').val();
    var cnpj_formatado = cnpj.replace(/\D/g, "");

    if (cnpj_formatado.length !== 14) {
        exibeMsgRetorno("CNPJ inválido!");
        $('#CNPJ').val("");
    }
    else {

        cnpj_formatado = cnpj_formatado.replace(/^(\d{2})(\d)/, "$1.$2");
        cnpj_formatado = cnpj_formatado.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
        cnpj_formatado = cnpj_formatado.replace(/\.(\d{3})(\d{4})(\d)/, ".$1/$2-$3");
        $('#CNPJ').val(cnpj_formatado);
    }

    validarCNPJenvioRapido(cnpj);
}


// ---------------------------------------------------------------------------------------------- //



// -------------------------------------  FAZER FARDO ----------------------------------------- //
function avancaddFardos() {
    if (validaDadosFardo()) {
        $('#ddFardos').hide();
        $('#ddCliente').fadeIn('slow');
        $('#ddLoja').fadeIn('slow');
    }
}

function avancaddLoja() {
    if (validaDadosLoja()) {
        $('#ddCliente').hide();
        $('#ddLoja').hide();
        $('#ddContatos').fadeIn('slow');
    }
}

function voltarddLoja() {
    $('#ddCliente').hide();
    $('#ddLoja').hide();
    $('#ddFardos').fadeIn('slow');
}

function avancaddContatos() {
    if (validaFormContato()) {
        resumeFazerFardo();
        $('#ddResumoFazerFardo').modal('show');
    }
}

function voltarddContatos() {
    $('#ddCliente').fadeIn('slow');
    $('#ddLoja').fadeIn('slow');
    $('#ddContatos').hide();
}

function fechaResumoFazerFardoModal() {
    $('#ddResumoFazerFardo').modal('hide');
}

function preencheHotel() {
    $('#Endereco').val("");
    var hotel = $('#Hotel').val();
    var name = "";
    var endereco = "";
    var num = "";

    switch (hotel) {
        case "bras-palace":
            name = "Brás Palace Hotel";
            endereco = "R. Dr. Ricardo Gonçalves, 37 - Brás, São Paulo - SP, 03012-040";
            num = "37";
            break;
        case "luz-plaza":
            name = "Luz Plaza São Paulo";
            endereco = "Rua Prates, 145 - Bom Retiro, São Paulo - SP, 01121-000";
            num = "145";
            break;
        case "hotel-makuxis":
            name = "Hotel Makuxis";
            endereco = "R. Pedroso, 495 - Bela Vista, São Paulo - SP, 01322-010";
            num = "495";
            break;
        case "hotel-nacional-inn":
            name = "Hotel Nacional Inn São Paulo";
            endereco = "Av. Cásper Líbero, 125 - Centro Histórico de São Paulo, São Paulo - SP, 01033-001";
            num = "125";
            break;
        case "pousada-recanto-bras":
            name = "Pousada Recanto do Brás";
            endereco = "Av. Celso Garcia, 1549 - Brás, São Paulo - SP, 03015-000";
            num = "1549";
            break;
        case "hotel-victoria":
            name = "Hotel Victoria";
            endereco = "R. Cavalheiro, 85 - Brás, São Paulo - SP, 03050-010";
            num = "85";
            break;
        case "pousada-bras-feira-madrugada":
            name = "Pousada HazBrás-Hospedagem na Feira da Madrugada";
            endereco = "R. Eliza Whitacker, 256 - Brás, São Paulo - SP, 03009-030";
            num = "256";
            break;
        case "hotel-normandie":
            name = "Hotel Normandie";
            endereco = "Av. Ipiranga, 1187 - Centro Histórico de São Paulo, São Paulo - SP, 01039-000";
            num = "1187";
            break;
        case "hotel-family":
            name = "Hotel Family";
            endereco = "R. da Juta, 301 - Brás, São Paulo - SP, 03010-010";
            num = "301";
            break;
        case "hotel-travel-inn-bras":
            name = "Hotel Travel Inn Brás";
            endereco = "R. Rodrigues dos Santos, 630 - Brás, São Paulo - SP, 03009-010";
            num = "630";
            break;
        case "shopping-tupan":
            name = "Shopping Tupan";
            endereco = "Av. Vautier, 28 - Canindé, São Paulo - SP, 03031-000";
            num = "28";
            break;
        default:
            name = "";
            endereco = "";
            num = "";
            break;
    }

    $('#Endereco').val(endereco);
    $('#Logradouro').val(num);

}

function validaDadosLoja() {

    var nome = $('#Nome').val();
    var cpf = $('#CPF').val();
    var cep = $('#CEP').val();
    var endereco = $('#Endereco').val();
    var logradouro = $('#Logradouro').val();
    var vendedor_responsavel = $('#vendedor_responsavel').val();
    var horario_servico = $('#horarioDeServico').val();
    var referencia = $('#Referencia').val();
    var tipoLocal = $('#tipoLocal').val();
    var hotel = $('#Hotel').val();

    //Nome Vazio
    if (nome == null || nome == "") {
        $('#Nome').focus();
        exibeMsgRetorno("Nome é obrigatorio!");
        return false;
    }

    //CPF Vazio
    if (cpf == null || cpf == "") {
        $('#CPF').focus();
        exibeMsgRetorno("CPF é obrigatorio!");
        return false;
    }

    if (tipoLocal == "meuHotel") {
        //Hotel Vazio
        if (hotel == null || hotel == "") {
            $('#Hotel').focus();
            exibeMsgRetorno("Hotel é obrigatorio!");
            return false;
        }
    }

    if (tipoLocal == "endPersonalizado") {
        //CEP Vazio
        if (cep == null || cep == "") {
            $('#CEP').focus();
            exibeMsgRetorno("CEP é obrigatorio!");
            return false;
        }
    }

    //Endereco Vazio
    if (endereco == null || endereco == "") {
        $('#Endereco').focus();
        exibeMsgRetorno("Endereco é obrigatorio!");
        return false;
    }

    //Logradouro Vazio
    if (logradouro == null || logradouro == "") {
        $('#Logradouro').focus();
        exibeMsgRetorno("Logradouro é obrigatorio!");
        return false;
    }

    //Vendedor Responsavel Vazio
    if (vendedor_responsavel == null || vendedor_responsavel == "") {
        $('#vendedor_responsavel').focus();
        exibeMsgRetorno("Vendedor Responsavel é obrigatorio!");
        return false;
    }

    //Horario Vazio
    if (horario_servico == null || horario_servico == "") {
        $('#horarioDeServico').focus();
        exibeMsgRetorno("Horario é obrigatorio!");
        return false;
    }

    //Logradouro Vazio
    if (referencia == null || referencia == "") {
        $('#Referencia').focus();
        exibeMsgRetorno("Referencia é obrigatorio!");
        return false;
    }

    return true;
}

function validaDadosFardo() {

    var qtdFardos = $('#qtd_fardos').val();
    var mediaKgFardo = $('#media_peso_fardo').val();
    var peso = $('#Peso').val();
    var n_peso = $('#n_peso').prop('checked');
    var tipoDeCarga = $('#TipoCarga').val();
    var descricaoCarga = $('#Descricao').val();
    var altura = $('#Altura').val();
    var largura = $('#Largura').val();
    var diametro = $('#Diametro').val();
    var volume = $('#Volume').val();

    if (tipoDeCarga == "confeccoes") {
        if (qtdFardos == "" || qtdFardos == null) {
            exibeMsgRetorno("Preencha a quantidade de fardos!");
            $('#qtd_fardos').focus();
            return false;
        }

        if (mediaKgFardo == "" || mediaKgFardo == null) {
            exibeMsgRetorno("Preencha a media de peso por fardos!");
            $('#media_peso_fardo').focus();
            return false;
        }
    } else {
        if (altura == "" || altura == null) {
            exibeMsgRetorno("Preencha a Altura!");
            $('#Altura').focus();
            return false;
        }

        if (largura == "" || largura == null) {
            exibeMsgRetorno("Preencha a Largura!");
            $('#Largura').focus();
            return false;
        }

        if (diametro == "" || diametro == null) {
            exibeMsgRetorno("Preencha o Diametro!");
            $('#Diametro').focus();
            return false;
        }

        if (volume == "" || volume == null) {
            exibeMsgRetorno("Preencha o Volume!");
            $('#Volume').focus();
            return false;
        }
    }


    if (peso == "" || peso == null) {
        exibeMsgRetorno("Preencha o peso ou preencha '0'! ");
        $('#Peso').focus();
        return false;
    }


    if (tipoDeCarga == "" || tipoDeCarga == null) {
        exibeMsgRetorno("Preencha a categoria da carga. ", "sucesso");
        $('#TipoCarga').focus();
        return false;
    }

    if (descricaoCarga == "" && tipoDeCarga == "outros") {
        exibeMsgRetorno("Descricao é obrigatorio quando a categoria 'Outros' é selecionada!");
        $('#Descricao').focus();
        return false;
    }

    return true;
}

function solicitaServiçoFazerFardo() {
    var msg = "";
    var codPedido = "";

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    var nome = $('#Nome').val();
    var documento = $('#CPF').val();
    var email = $('#Email').val();
    var telefone = $('#Telefone').val();
    var observacao = $('#obs').val();

    var cep = $('#CEP').val();
    var endereco = $('#Endereco').val();
    var logradouro = $('#Logradouro').val();
    var referencia = $('#Referencia').val();
    var vendedor_responsavel = $('#vendedor_responsavel').val();
    var horario = $('#horarioDeServico').val();

    var qtdFardos = $('#qtd_fardos').val();
    var mediaKgFardo = $('#media_peso_fardo').val();
    var tipoDeCarga = $('#TipoCarga').val();
    var descricaoCarga = $('#Descricao').val();
    var peso = $('#Peso').val();
    var hotel = $('#Hotel').val();
    var servico = "Fazer Fardo";

    var tipoLocal = $('#tipoLocal').val();

    if (peso == "" || peso == null) {
        peso = "Não sei meu peso"
    }

    if ($('#somenteComprar').is(':checked')) {
        servico = "Comprar Fardo";
    }

    switch (tipoDeCarga) {
        case "confeccoes":
            tipoDeCarga = "Confecções";
            break;
        case "eletronicos":
            tipoDeCarga = "Eletronicos";
            break;
        case "Pereciveis":
            tipoDeCarga = "Perecíveis";
            break;
        case "naoPereciveis":
            tipoDeCarga = "Não Perecíveis";
            break;
        case "pecas":
            tipoDeCarga = "Peças";
            break;
        case "vidro":
            tipoDeCarga = "Vidro(s)";
            break;
        case "cargaPerigosa":
            tipoDeCarga = "Carga Perigosa";
            break;
        case "outros":
            tipoDeCarga = "Outros";
            break;
        default:
            tipoDeCarga = "Tipo de carga desconhecida.";
            break;
    }

    if (descricaoCarga == null || descricaoCarga == "" || descricaoCarga == undefined) {
        descricaoCarga = "Sem descrição";
    }

    if (observacao == null || observacao == "" || observacao == undefined) {
        observacao = "Sem observação";
    }

    msg = msg + "*TIPO DE SERVIÇO:* " + servico + "\n\n";

    msg = msg + "*DADOS DO CLIENTE*" + "\n";
    msg = msg + "*Nome:* " + nome + "\n";
    msg = msg + "*Documento:* " + documento + "\n";
    msg = msg + "*Email:* " + email + "@gmail.com" + "\n";
    msg = msg + "*Telefone:* " + telefone + "\n";
    msg = msg + "*Data:* " + day + "/" + month + "/" + year + " \n\n";

    msg = msg + "*DADOS DO LOCAL*" + "\n";
    msg = msg + "*Endereço:* " + endereco + ", N°" + logradouro + "\n";
    msg = msg + "*Referencia:* " + referencia + "\n";

    if (tipoLocal == "meuHotel") {
        msg = msg + "*Hotel:* " + hotel + "\n";
    } else {
        msg = msg + "*CEP:* " + cep + "\n";
    }

    msg = msg + "*Falar com:* " + vendedor_responsavel + "\n";
    msg = msg + "*Horario:* " + horario + "\n\n";


    msg = msg + "*DADOS DO FARDO*" + "\n";
    msg = msg + "*Media de peso por fardo:* " + mediaKgFardo + "\n";
    msg = msg + "*Quantidade de fardos:* " + qtdFardos + "\n";
    msg = msg + "*Categoria:* " + tipoDeCarga + "\n";
    msg = msg + "*Descrição:* " + descricaoCarga + "\n";
    msg = msg + "*Peso total:* " + peso + "\n\n";

    msg = msg + "*Observação:* " + observacao + "\n\n";

    codPedido = nome.substring(0, 3).toUpperCase() + day + month + year + hours + minutes + seconds;

    msg = msg + "*CODIGO DO PEDIDO:* " + "*" + codPedido + "*" + "\n\n";

    $('#ddContatos').hide();
    fechaResumoFazerFardoModal();
    $('#AguardeConfirmacaoDeFardo').fadeIn('slow');

    exibeMsgRetorno("Serviço solicitado com sucesso!", "sucesso");

    sendMessage(msg);

    var telClient = "55" + telefone.replace(/\D/g, '');
    var msgClient = "";
    msgClient = msgClient + "Olá " + "*" + nome + "*" + ", Tudo bem? Espero que sim 😁" + "\n";
    msgClient = msgClient + "Passando aqui só para avisar que seu pedido já foi recebido e está sendo processado." + "\n\n";
    msgClient = msgClient + "Abaixo nós disponibilizamos um codigo para consultas futuras, Ex: Rastreamento, Pagamentos e etc." + "\n\n";
    msgClient = msgClient + "Desde de já a Vegas agradesçe a sua preferecia. 😊" + "\n\n";
    msgClient = msgClient + "*Código do pedido:* " + "*" + codPedido + "*" + "\n\n";

    if (telClient.length == 13) {
        sendMessageClient(msgClient, telClient);
    }
}

function resumeFazerFardo() {

    nome = $('#Nome').val();
    documento = $('#CPF').val();

    cep = $('#CEP').val();
    rua = $('#Endereco').val();
    num_rua = $('#Logradouro').val();
    local = rua + ", N° " + num_rua;

    tipoDeFardo = $('#TipoCarga').val();
    pesoFardo = $('#Peso').val();
    descricao = $('#Descricao').val();
    horario = $('#horarioDeServico').val();

    switch (tipoDeFardo) {
        case "confeccoes":
            tipoDeFardo = "Confecções";
            break;
        case "eletronicos":
            tipoDeFardo = "Eletronicos";
            break;
        case "Pereciveis":
            tipoDeFardo = "Perecíveis";
            break;
        case "naoPereciveis":
            tipoDeFardo = "Não Perecíveis";
            break;
        case "pecas":
            tipoDeFardo = "Peças";
            break;
        case "vidro":
            tipoDeFardo = "Vidro(s)";
            break;
        case "cargaPerigosa":
            tipoDeFardo = "Carga Perigosa";
            break;
        case "outros":
            tipoDeFardo = "Outros";
            break;
        default:
            tipoDeFardo = "Tipo de carga desconhecida.";
            break;
    }


    $('#resumoNome').text(nome);
    $('#resumoDocumento').text(documento);
    $('#resumoLocal').text(cep);
    $('#resumoHorario').text(horario);
    $('#resumoTipoFardo').text(tipoDeFardo);
    $('#resumoPesoFardo').text(pesoFardo + " Kg");
    $('#resumoDescricao').text(descricao);
}

function calculaMediaPeso() {
    var qtdFardos = $('#qtd_fardos').val();
    var mediaKgFardo = $('#media_peso_fardo').val();

    if (qtdFardos != "" && qtdFardos != null && mediaKgFardo != "" && mediaKgFardo != null) {
        var pesoMedio = parseFloat(qtdFardos) * parseFloat(mediaKgFardo);
        $('#Peso').val(pesoMedio);
        $('#Peso').focus();
    }
}

function selecionaTipoLocalFardo() {
    $('#Endereco').val("");
    $('#Logradouro').val("");
    $('#Hotel').val("");
    var tipoLocal = $('#tipoLocal').val();

    if (tipoLocal == "meuHotel") {
        $('#fardoHotel').fadeIn('slow');
        $('#fardoCep').hide();
    }

    if (tipoLocal == "endPersonalizado") {
        $('#fardoHotel').hide();
        $('#fardoCep').fadeIn('slow');
    }

    if (tipoLocal == "") {
        $('#fardoHotel').hide();
        $('#fardoCep').fadeIn('slow');
    }
}

function clickArquivo() {
    document.getElementById('fileUploadNotaFiscal').click();
}

function nomeiaArquivo() {

    var nameFile = $('#fileUploadNotaFiscal').val().split('\\').pop();

    if (nameFile == "" || nameFile == null) {
        $('#nomeArquivo').text("");
        $('#nomeArquivo').text("Nenhum arquivo selecionado");
    } else {
        $('#nomeArquivo').text("");
        $('#nomeArquivo').text(nameFile);
    }

}
// ---------------------------------------------------------------------------------------------- //




// -------------------------------------  MEU ONIBUS ----------------------------------------- //
function irDadosDaBagagem() {
    $('#mo_ddOnibus').hide();
    $('#mo_ddContato').hide();
    $('#mo_ddCliente').hide();
    $('#mo_ddLocal').hide();

    $('#mo_ddBagagem').fadeIn('slow');
}

function irDadosDoCliente() {
    if (validaDadosDaBagagem()) {
        $('#mo_ddBagagem').hide();
        $('#mo_ddOnibus').hide();
        $('#mo_ddContato').hide();

        $('#mo_ddCliente').fadeIn('slow');
        $('#mo_ddLocal').fadeIn('slow');
    }
}

function irDadosDoOnibus() {
    if (validaDadosDoCliente()) {
        $('#mo_ddBagagem').hide();
        $('#mo_ddContato').hide();
        $('#mo_ddCliente').hide();
        $('#mo_ddLocal').hide();

        $('#mo_ddOnibus').fadeIn('slow');
    }
}

function irDadosContatos() {
    if (validaDadosdoOnibus()) {
        $('#mo_ddBagagem').hide();
        $('#mo_ddOnibus').hide();
        $('#mo_ddCliente').hide();
        $('#mo_ddLocal').hide();

        $('#mo_ddContato').fadeIn('slow');
    }
}

function irResumoMeuOnibus() {
    if (validaDadosContatos()) {
        resumeMeuOnibus();
        $('#modalResulmeMeuOnibus').modal('show');
    }
}

function resumeMeuOnibus() {
    var nome = $('#Nome').val();
    var documento = $('#CPF').val();

    var endereco = $('#Endereco').val();
    var rua = endereco.split('-')[0].trim();
    var peso = $('#Peso').val();

    var tipoLocal = $('#tipoLocal').val();

    var hotel = $('#Hotel').val();

    var descricao = $('#Descricao').val();
    var horarioDeEntrega = $('#horarioDeServico').val();

    var endereco_de_entrega = $('#Endereco_entrega').val();

    switch (hotel) {
        case "bras-palace":
            hotel = "Brás Palace Hotel";
            break;
        case "luz-plaza":
            hotel = "Luz Plaza São Paulo";
            break;
        case "hotel-makuxis":
            hotel = "Hotel Makuxis";
            break;
        case "hotel-nacional-inn":
            hotel = "Hotel Nacional Inn São Paulo";
            break;
        case "pousada-recanto-bras":
            hotel = "Pousada Recanto do Brás";
            break;
        case "hotel-victoria":
            hotel = "Hotel Victoria";
            break;
        case "pousada-bras-feira-madrugada":
            hotel = "Pousada HazBrás - Feira da Madrugada";
            break;
        case "hotel-normandie":
            hotel = "Hotel Normandie";
            break;
        case "hotel-family":
            hotel = "Hotel Family";
            break;
        case "hotel-travel-inn-bras":
            hotel = "Hotel Travel Inn Brás";
            break;
        case "shopping-tupan":
            hotel = "Shopping Tupan";
            break;
        default:
            hotel = "Hotel desconhecido";
            break;
    }

    switch (tipoLocal) {
        case "meuHotel":
            localOrigem = hotel;
            break;
        case "endPersonalizado":
            localOrigem = rua;
            break;
        default:
            localOrigem = "Local desconhecido.";
            break;
    }

    $('#resumoNome').text(nome);
    $('#resumoDocumento').text(documento);
    $('#resumoLocalOrigem').text(localOrigem);
    $('#resumoLocalDestino').text(endereco_de_entrega);
    $('#resumoHorario').text(horarioDeEntrega);
    $('#resumoPesoMala').text(peso);
    $('#resumoDescricao').text(descricao);
}

function fechaResumoMeuOnibus() {
    $('#modalResulmeMeuOnibus').modal('hide');
}

function validaDadosDaBagagem() {

    var qtd_mala = $('#qtd_mala').val();
    var media_peso_mala = $('#media_peso_mala').val();
    var tipo_mala = $('#TipoMala').val();

    //Quantidade de malas Vazio
    if (qtd_mala == null || qtd_mala == "") {
        $('#qtd_mala').focus();
        exibeMsgRetorno("Preencha a quantidade de malas!");
        return false;
    }

    //Media de peso Vazio
    if (media_peso_mala == null || media_peso_mala == "") {
        $('#media_peso_mala').focus();
        exibeMsgRetorno("Preencha a media de peso!");
        return false;
    }

    //Tipo de Mala Vazio
    if (tipo_mala == null || tipo_mala == "") {
        $('#TipoMala').focus();
        exibeMsgRetorno("Preencha a media de peso!");
        return false;
    }

    return true;
}

function validaDadosDoCliente() {

    var nome = $('#Nome').val();
    var documento = $('#CPF').val();
    var tipo_local = $('#tipoLocal').val();
    var hotel = $('#Hotel').val();
    var cep = $('#CEP').val();
    var endereco = $('#Endereco').val();
    var numero = $('#Logradouro').val();
    var horaDeColeta = $('#horarioDeServico').val();

    //Quantidade de malas Vazio
    if (nome == null || nome == "") {
        $('#Nome').focus();
        exibeMsgRetorno("Nome é obrigatorio!");
        return false;
    }

    //Documento Vazio
    if (documento == null || documento == "") {
        $('#CPF').focus();
        exibeMsgRetorno("CPF / CNPJ é obrigatorio!");
        return false;
    }

    //Local de coleta Vazio
    if (tipo_local == null || tipo_local == "") {
        $('#tipoLocal').focus();
        exibeMsgRetorno("Preencha o local de coleta!");
        return false;
    }

    //Hotel Vazio
    if (tipo_local == "meuHotel") {
        if (hotel == null || hotel == "") {
            $('#Hotel').focus();
            exibeMsgRetorno("Selecione um hotel!");
            return false;
        }
    }

    //Cep Vazio
    if (tipo_local == "endPersonalizado") {
        if (cep == null || cep == "") {
            $('#CEP').focus();
            exibeMsgRetorno("CEP é obrigatorio!");
            return false;
        }
    }

    //Endereco Vazio
    if (endereco == null || endereco == "") {
        $('#Endereco').focus();
        exibeMsgRetorno("Endereco é obrigatorio!");
        return false;
    }

    //Numero Vazio
    if (numero == null || numero == "") {
        $('#Logradouro').focus();
        exibeMsgRetorno("Numero é obrigatorio!");
        return false;
    }

    //Horario De Servico Vazio
    if (horaDeColeta == null || horaDeColeta == "") {
        $('#horarioDeServico').focus();
        exibeMsgRetorno("Selecione um horario para a coleta!");
        return false;
    }

    return true;
}

function validaDadosdoOnibus() {

    var cep_entrega = $('#CEP_Entrega').val();
    var endereco_entrega = $('#Endereco_entrega').val();
    var companhia_onibus = $('#companhiaOnibus').val();
    var horario_coleta = $('#horarioDeServico').val();

    //CEP de entrega Vazio
    if (cep_entrega == null || cep_entrega == "") {
        $('#CEP_Entrega').focus();
        exibeMsgRetorno("Preencha o CEP de entrega!");
        return false;
    }

    //Endereco de entrega Vazio
    if (endereco_entrega == null || endereco_entrega == "") {
        $('#Endereco_entrega').focus();
        exibeMsgRetorno("Endereco de entrega é obrigatorio!");
        return false;
    }

    //Companhia Vazio
    if (companhia_onibus == null || companhia_onibus == "") {
        $('#companhiaOnibus').focus();
        exibeMsgRetorno("Preencha a companhia do onibus!");
        return false;
    }

    //Horario coleta Vazio
    if (horario_coleta == null || horario_coleta == "") {
        $('#horarioDeServico').focus();
        exibeMsgRetorno("Preencha o horario de coleta!");
        return false;
    }

    return true;
}

function validaDadosContatos() {

    var telefone = $('#Telefone').val();
    var email = $('#Email').val();

    //Telefone Vazio
    if (telefone == null || telefone == "") {
        $('#Telefone').focus();
        exibeMsgRetorno("Telefone é obrigatorio!");
        return false;
    }

    //email Vazio
    if (email == null || email == "") {
        $('#Email').focus();
        exibeMsgRetorno("Email é obrigatorio!");
        return false;
    }

    return true;

}

function calculaPesoMala() {
    var qtd_mala = $('#qtd_mala').val();
    var media_peso_mala = $('#media_peso_mala').val();

    if (qtd_mala != "" && qtd_mala != null && media_peso_mala != "" && media_peso_mala != null) {
        var pesoMedio = parseFloat(qtd_mala) * parseFloat(media_peso_mala);
        $('#Peso').val(pesoMedio);
        $('#Peso').focus();
    }
}

function solicitarServiçoMeuOnibus() {
    var msg = "";
    var codPedido = "";

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    var nome = $('#Nome').val();
    var documento = $('#CPF').val();
    var email = $('#Email').val();
    var telefone = $('#Telefone').val();
    var observacao = $('#obs').val();

    var cep = $('#CEP').val();
    var endereco = $('#Endereco').val();
    var logradouro = $('#Logradouro').val();
    var referencia = $('#Referencia').val();
    var horarioDeEntrega = $('#horarioDeServico').val();

    var qtd_mala = $('#qtd_mala').val();
    var media_peso_mala = $('#media_peso_mala').val();
    var TipoMala = $('#TipoMala').val();

    var descricaoCarga = $('#Descricao').val();
    var peso = $('#Peso').val();
    var hotel = $('#Hotel').val();

    var num_onibus = $('#numOnibus').val();
    var companhia = $('#companhiaOnibus').val();

    var tipoLocal = $('#tipoLocal').val();

    if (TipoMala == "bagagem") {
        TipoMala = "Bagagem (Mala)";
    }
    if (TipoMala == "outros") {
        TipoMala = "Outros";
    }

    if (descricaoCarga == null || descricaoCarga == "" || descricaoCarga == undefined) {
        descricaoCarga = "Sem descrição";
    }

    if (observacao == null || observacao == "" || observacao == undefined) {
        observacao = "Sem observação";
    }

    msg = msg + "*TIPO DE SERVIÇO:* Meu Onibus" + "\n\n";

    msg = msg + "*DADOS DO CLIENTE*" + "\n";
    msg = msg + "*Nome:* " + nome + "\n";
    msg = msg + "*Documento:* " + documento + "\n";
    msg = msg + "*Email:* " + email + "@gmail.com" + "\n";
    msg = msg + "*Telefone:* " + telefone + "\n";
    msg = msg + "*Data:* " + day + "/" + month + "/" + year + " \n\n";

    msg = msg + "*DADOS DA COLETA*" + "\n";
    msg = msg + "*Endereço:* " + endereco + ", N°" + logradouro + "\n";
    msg = msg + "*Referencia:* " + referencia + "\n";

    if (tipoLocal == "meuHotel") {
        msg = msg + "*Hotel:* " + hotel + "\n\n";
    } else {
        msg = msg + "*CEP:* " + cep + "\n\n";
    }

    msg = msg + "*DADOS DO ONIBUS*" + "\n";
    msg = msg + "*Endereço:* " + endereco + "\n";
    msg = msg + "*Numero do Onibus:* " + num_onibus + "\n";
    msg = msg + "*Companhia:* " + companhia + "\n";
    msg = msg + "*Referencia:* " + referencia + "\n";
    msg = msg + "*Horario de entrega:* " + horarioDeEntrega + "\n\n";


    msg = msg + "*DADOS DO BAGAGEM*" + "\n";
    msg = msg + "*Media de peso por mala:* " + media_peso_mala + "\n";
    msg = msg + "*Quantidade de malas:* " + qtd_mala + "\n";
    msg = msg + "*Categoria:* " + TipoMala + "\n";
    msg = msg + "*Descrição:* " + descricaoCarga + "\n";
    msg = msg + "*Peso:* " + peso + "\n\n";

    msg = msg + "*Observação:* " + observacao + "\n\n";

    codPedido = nome.substring(0, 3).toUpperCase() + day + month + year + hours + minutes + seconds + "MYBUS";

    msg = msg + "*CODIGO DO PEDIDO:* " + "*" + codPedido + "*" + "\n\n";

    sendMessage(msg);

    fechaResumoMeuOnibus();
    $('#mo_ddContato').hide();
    $('#aguardeContatoMeuOnibus').fadeIn('slow');
    exibeMsgRetorno("Serviço solicitado com sucesso!", "sucesso");

    var telClient = "55" + telefone.replace(/\D/g, '');
    var msgClient = "";

    msgClient = msgClient + "Olá " + "*" + nome + "*" + ", Tudo bem? Espero que sim 😁" + "\n";
    msgClient = msgClient + "Passando aqui só para avisar que seu pedido já foi recebido e está sendo processado." + "\n\n";
    msgClient = msgClient + "Abaixo nós disponibilizamos um codigo para consultas futuras, Ex: Rastreamento, Pagamentos e etc." + "\n\n";
    msgClient = msgClient + "Desde de já a Vegas agradesçe a sua preferecia. 😊" + "\n\n";
    msgClient = msgClient + "*Código do pedido:* " + "*" + codPedido + "*" + "\n\n";

    if (telClient.length == 13) {
        sendMessageClient(msgClient, telClient);
    }


}

function identificaDoc() {
    var doc = $('#CPF').val();
    if (doc.length == 11) {
        //CPF
        validaCPF();
        return true;
    } if (doc.length == 14) {
        //CNPJ
        mascaraCPF(doc);
        return true;
    }
    $('#CPF').val("");
    exibeMsgRetorno("Documento inserido é invalido!");
}


// -------------------------------------------------------------------------------------------- //

function openMenuMobile() {
    $("#menu-mobile-id").css("display", "flex");
}

function closeMenuMobile() {
    $("#menu-mobile-id").css("display", "none");
}

function exibeDuvidaFrequente(duv) {

    for (i = 1; i < 6; i++) {
        if (i != duv) {
            ocutaDuvidaFrequente(i);
        }
    }

    var duvida = "#resp-" + duv;
    var duvIcon = "#duv-icon-" + duv;
    var duvEsc = "#duv-esc-icon-" + duv;

    $(duvida).css("display", "flex");
    $(duvIcon).css("display", "none");
    $(duvEsc).css("display", "flex");

    $(duvida)[0].scrollIntoView({ behavior: 'smooth', block: 'start' });

}

function ocutaDuvidaFrequente(duv) {
    var duvida = "#resp-" + duv;
    var duvIcon = "#duv-icon-" + duv;
    var duvEsc = "#duv-esc-icon-" + duv;

    $(duvida).css("display", "none");
    $(duvIcon).css("display", "flex");
    $(duvEsc).css("display", "none");

}

function lerMenosNossaHist() {
    $('#esc-nossa-hist').css("display", "none");
    $('#esc-ler-menos').css("display", "none");
    $('#esc-ler-mais').css("display", "block");
}

function lerMaisNossaHist() {
    $('#esc-nossa-hist').css("display", "block");
    $('#esc-ler-menos').css("display", "block");
    $('#esc-ler-mais').css("display", "none");
}

function lerMenosMvv() {
    $('#esc-mvv').css("display", "none");
    $('#esc-ler-menos-mvv').css("display", "none");
    $('#esc-ler-mais-mvv').css("display", "block");
}

function lerMaisMvv() {
    $('#esc-mvv').css("display", "block");
    $('#esc-ler-menos-mvv').css("display", "block");
    $('#esc-ler-mais-mvv').css("display", "none");
}


// -------------------------------------------------------------------------------------------- //
