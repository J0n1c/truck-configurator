$(function ()
{
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
            confirm: {
                equalTo: "#password"
            }
        }
    });
    $("#wizard").steps({
        headerTag: "h3",
        bodyTag: "section",
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex)
        {
            $("#form-2").validate().settings.ignore = ":disabled,:hidden";
            return $("#form-2").valid();
        },
        onFinishing: function (event, currentIndex)
        {
            $("#form-2").validate().settings.ignore = ":disabled";
            return $("#form-2").valid();
        },
        onFinished: function (event, currentIndex)
        {
            alert("Submitted!");
        },
        labels: {
            cancel: "Отменить",
            current: "Текущий шаг:",
            pagination: "Страницы",
            finish: "Закончить",
            next: "Вперед",
            previous: "Назад",
            loading: "Загрузка ..."
        }

    });
});
