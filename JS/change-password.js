$(document).ready(function () {
    $(".edit-button").click(function () {
        const email = $(".Password");
        const phone = $(".confraim-Password-textarea");
        email.replaceWith('<input type="text" class="Password" value="' + email.text() + '">');
        phone.replaceWith('<input type="text" class="confraim-Password-textarea" value="' + phone.text() + '">');
        $(".edit-button").css('display', 'none');
        $(".sendButton").css('display', 'block');
    });

    $("#saveButton").click(function () {
        const emailInput = $(".Password");
        const phoneInput = $(".confraim-Password-textarea");
        const newEmail = emailInput.val();
        const newPhone = phoneInput.val();
        emailInput.replaceWith('<p class="Password">' + newEmail + '</p>');
        phoneInput.replaceWith('<p class="confraim-Password-textarea">' + newPhone + '</p>');
        $(".edit-button").css('display', 'block');
        $(".sendButton").css('display', 'none');
    });
});