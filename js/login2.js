$(function () {
    var login_window = $("#login-dialog").dialog({autoOpen: false,
        height: 280,
        width: 520,
        modal: true,
        closeText: '',
        close: function () {
            register_window.dialog("close");
        }

    });

    $("#btn-login").button().on("click", function () {
        login_window.dialog("open");
    });

    var register_window = $("#register-dialog").dialog({autoOpen: false,
        height: 530,
        width: 520,
        modal: true,
        closeText: '',
        close: function () {
            register_window.dialog("close");
        }

    });

    $("#btn-register").button().on("click", function () {
        register_window.dialog("open");
    });
});