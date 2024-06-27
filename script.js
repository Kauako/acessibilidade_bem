    $(document).ready(function() {
        $('#exibir').click(function(){
            $('p').hide('slow');

        });
        $('#esconder').click(function(){
            $('p').show('slow');

        });
        $("#direita").click(function(){
            $('.caixa').animate({left: '1000px'});
        });
        $("#esquerda").click(function(){
            $('.caixa').animate({right: '10px'});
        });




    });
