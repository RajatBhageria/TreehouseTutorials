$("form span").hide();

$password = $("#password");
$confirmPassword = $("#confirm_password");
$username = $("#username");

var userNamePresent = function(){
	return $username.val().length > 0;
}

var isPasswordValid = function(){
	return $password.val().length > 8
}

var arePasswordsMatching = function(){
	return $password.val() === $confirmPassword.val()
}


var canSubmit = function(){
	return isPasswordValid() && arePasswordsMatching() && userNamePresent();
}

var passwordEvent = function(){
	if (isPasswordValid()){
		$password.next().hide();
	}
	else{
		$password.next().show();
	}
}

var confirmPasswordEvent = function(){
	if (arePasswordsMatching()){
		$confirmPassword.next().hide();
	}
	else{
		$confirmPassword.next().show();
	}
}

var enableSubmitEvent = function(){
	$("#submit").prop("disabled",!canSubmit());
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();