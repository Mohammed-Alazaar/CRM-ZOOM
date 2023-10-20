$(document).ready(function () {
    $(".edit-button2").click(function () {
        const password = $(".Password");
        password.replaceWith('<input type="password" class="Password" value="' + password.text() + '">');
        $(".edit-button2").css('display', 'none');
        $("#saveButton2").css('display', 'block');
    });

    $("#saveButton2").click(function () {
        const passwordInput = $(".Password");
        passwordInput.replaceWith('<p class="Password">' + passwordInput.val() + '</p>');
        $(".edit-button2").css('display', 'block');
        $("#saveButton2").css('display', 'none');
    });
});
