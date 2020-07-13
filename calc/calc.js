function instertNumber(num){
    document.form.textview.value = document.form.textview.value+num

}

function equalNumber(num){
    document.form.textview.value = eval(document.form.textview.value);
}

function cNumber(num)
{
    document.form.textview.value = null;
}

function backNumber(num){
    var num = document.form.textview.value;
    document.form.textview.value = num.substring(0, (num.lenght-1));
}