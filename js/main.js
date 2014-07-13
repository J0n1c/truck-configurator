
$(function ()
{
    jQuery.extend(jQuery.validator.messages, {
        required: "Обязательное поле",
        email: "Введите корректный e-mail адрес"
    });
    $("#lefthand-nav").affix({
        offset: {
            top: function ()
            {
                return $("#topbar").outerHeight() + $("#banner").outerHeight();
            }
        }
    });


    function errorPlacement(error, element)
    {
        element.before(error);

        //element.popover({
        //    content: error.text(),
        //    placement: function ()
        //    {
        //        return (element.parents(".content").width() >= 550) ? "right" : "top";
        //    },
        //    trigger: "focus hover"
        //});
        //$(".popover-content", element.next(".popover")).empty().prepend(error);
    }
    $("#form-2").validate({
        errorPlacement: errorPlacement,
        rules: {
            typeId: {
                required: true,
                min: 1,
                minlength: 5
            }        
        },
        messages: {
            typeId: "Пожалуста, выберете тип грузовика"
        }        
    });
    $("#wizard").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            if(currentIndex==0){
                return parseInt( $("#iTypeId").val() ) > 0;
            }else if(currentIndex==1){
                return $("#iSeriaVarId").val().length > 0;
            }
            return true;
        },
        onFinishing: function (event, currentIndex)
        {
            $("#form-2").validate().settings.ignore = ":disabled";
            return $("#form-2").valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert("Отправляем заказ менеджеру по почте");
        },
        labels: {
            cancel: "Отменить",
            current: "Текущий шаг:",
            pagination: "Страницы",
            finish: "Заказать расчет",
            next: "Вперед",
            previous: "Назад",
            loading: "Загрузка ..."
        }

    });
});

