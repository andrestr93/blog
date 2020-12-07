$(document).ready(function () {


    // slider

    // condicion que cuando este en el index (Pagina principal se ejecute el slider)

    if (window.location.href.indexOf('index') > -1) {
        $(function () {
            $('.galeria').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                speed: 500,
                auto: true
            });
        });

    }

    $(function () {


        var date = new Date();

        var anio = date.getFullYear();


        $('#pie').append(anio);


    })


    // Condicion que cuando este en el index (Pagina principal se ejecute los posts)
    if (window.location.href.indexOf('index') > -1) {


        // POST 

        //tenemos que hacer un array de jssons


        var post = [


            {
                tittle: 'Prueba de titulo',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industrys standard dummy text ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
                    'the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' +
                    ' of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
                    ' but also the leap into electronic typesetting, remaining essentially unchanged. It was' +
                    'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
                    ' and more recently with desktop publishing software like Aldus PageMaker including versions of'

            },


            {
                tittle: 'Prueba de titulo2',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industrys standard dummy text ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
                    'the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' +
                    ' of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
                    ' but also the leap into electronic typesetting, remaining essentially unchanged. It was' +
                    'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
                    ' and more recently with desktop publishing software like Aldus PageMaker including versions of'

            },


            {
                tittle: 'Prueba de titulo3',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industrys standard dummy text ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
                    'the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' +
                    ' of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
                    ' but also the leap into electronic typesetting, remaining essentially unchanged. It was' +
                    'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
                    ' and more recently with desktop publishing software like Aldus PageMaker including versions of'

            },


            {
                tittle: 'Prueba de titulo4',
                date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format('MMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has beenthe industrys standard dummy text ever since the 1500s, when an unknown printer took a galleyof type and scrambled it to make a type specimen book. It has survived not only five centuries Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been' +
                    'the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley' +
                    ' of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
                    ' but also the leap into electronic typesetting, remaining essentially unchanged. It was' +
                    'popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,' +
                    ' and more recently with desktop publishing software like Aldus PageMaker including versions of'

            }




        ];

        post.forEach((item, index) => {

            var post = ` <article class="post">
        <h2>${item.tittle}</h2>
        <p id="date">Fecha de publicacion: ${item.date}</p>
        <p>
            ${item.content}
        </p>
        <a href="" id="btn-more">Leer mas</a>
    </article>
        `;



            $('#posts').append(post);


        });


    }


    $('#mod-oscure').click(function () {


        $('#tema').attr('href', 'css/modooscuro.css');



    })



    $('#mod-normal').click(function () {


        $('#tema').attr('href', 'css/style.css');



    })


    $('#subirarriba').click(function (e) {

        e.preventDefault();
        $('html , body').animate({

            scrollTop: 0
        }, 1000);

        return false;


    });


    // Guardar datos en el local storage


    $('#login form').submit(function () {

        var email = $('#email').val();


        localStorage.setItem("email", email);

    })


    var correo = localStorage.getItem("email");


    if (correo != null && correo != "undefined") {
        $('#about p').html('Bienvenido: ' + correo);
        $('#about p ').append('<br/>');
        $('#about p').append("<a href='#' id = 'logout'>Cerrar Sesión<a/>");
        $('#login').hide();

    }


    // evento on click en el boton de cerrar sesion que cuando pulses borra los datos del localstorage y haces un location .reload 
    // para actualizar la pagina

    $('#logout').click(function () {
        localStorage.clear();
        location.reload();
    })





    if (window.location.href.indexOf('about') > -1) {

        $("#acordeon").accordion({

            animate:200,
            collapsible: true // parametro que sirve para que se queden las tres pestañas cerradasg


        });


    }


});