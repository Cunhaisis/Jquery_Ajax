
function consultaCep(){
    var cep = document.getElementById("cep").nodeValue;
    var url = "https://viacep.com.br/ws" + cep + "/json/";
    console.log(cep);

    $.ajax({
        url:"https://viacep.com.br/ws/08625520/json",
        type: 'GET',
        success: function(response){
            console.log(response);
            $("#logradouro").html(response.logradouro)
            $("#uf").html(response.uf)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#titulo_cep").html("CEP " + response.cep)

            
        }
    })


}