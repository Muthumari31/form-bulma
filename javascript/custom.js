x=document.getElementsByTagName("input");
function check()
{
    alpha=/^[A-Za-z]+$/
    if(x[0].value=="")
    {
        alert("Please fill the name");
        return false;
    }
    if(!alpha.test(x[0].value))
    {
        alert("Use Only Alphabets in Name Field");
        return false;
    }
}