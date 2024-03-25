
// JS COPIADO DO PAULO

// $(document).ready(() => {
//     $(window).resize(() => {
//         if ($(window).width() >= 768) {
//             $('#bt-menu').css('display', 'none');
//             $('#bt-fechar').css('display', 'none');
//             $('.menu-principal').css('display', 'flex');
//         } else {
//             $('#bt-menu').css('display', 'inline');
//             $('#bt-fechar').css('display', 'none');
//             $('.menu-principal').css('display', 'none');
//         }
//     }); 

//     $('#bt-menu').click(() => {
//         $('#bt-menu').css('display', 'none');
//         $('#bt-fechar').css('display', 'inline');
//         $('.menu-principal').css('display', 'flex');
//     });

//     $('#bt-fechar').click(() => {
//         $('#bt-fechar').css('display', 'none');
//         $('#bt-menu').css('display', 'inline');
//         $('.menu-principal').css('display', 'none');
//     });
// });





// E ESSE ABAIXO DO PROFESSOR


// [A linha abaixo garante que o JS só será executado depois da página terminar de carregar]
$(document).ready(() => {

    // [A linha abaixo garante que menu seja reajustado caso o usuário redimensione a tela alternando entre mobile e desktop]
    $(window).resize(() => {
        if ($(window).width() >= 768) {
            //Colocar o seletor (igual no css usando . para classes e # para id) da imagem do menu hamburguer 
            $('#bt_menu').css('display', 'none');

            //Colocar o seletor da imagem do X 
            $('#bt_fechar').css('display', 'none');

            //Colocar o seletor do menu, neste caso a UL tinha uma classe menu-principal
            $('#menu_principal ul').css('display', 'flex');
        } else {
            //Colocar o seletor da imagem do menu hamburguer
            $('#bt_menu').css('display', 'inline');

            //Colocar o seletor da imagem do X 
            $('#bt_fechar').css('display', 'none');

            //Colocar o seletor do menu, neste caso a UL tinha uma classe menu-principal
            $('#menu_principal ul').css('display', 'none');
        }
    });

    // [Os códigos abaixo exibe e oculta o menu em caso de clique no hamburguer ou no X]
    $('#bt_menu').click(() => {
        //Colocar o seletor da imagem do menu hamburguer
        $('#bt_menu').css('display', 'none');

        //Colocar o seletor da imagem do X
        $('#bt_fechar').css('display', 'inline');

        //Colocar o seletor do menu, neste caso a UL tinha uma classe menu-principal
        $('#menu_principal ul').css('display', 'block');
    });

    $('#bt_fechar').click(() => {
        //Colocar o seletor da imagem do menu hamburguer
        $('#bt_menu').css('display', 'inline');

        //Colocar o seletor da imagem do X
        $('#bt_fechar').css('display', 'none');

        //Colocar o seletor do menu, neste caso a UL tinha uma classe menu-principal
        $('#menu_principal ul').css('display', 'none');
    });
});

// Carrossel

// window.addEventListener('load', function(){
//     new Glider(document.querySelector('.glider'), {
//       setting-name: setting-value
//     })
//   })





  new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });