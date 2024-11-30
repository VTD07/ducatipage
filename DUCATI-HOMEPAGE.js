// alert("Trang web này sử dụng cookie để cải thiện trải nghiệm sử dụng web của bạn");
let slidepos=1;
showslide(slidepos);
function nextslide(n)
{
    console.log("abc");
    showslide(slidepos+=n);
}
function display(n)
{
    showslide(slidepos=n);
}
function showslide (n)
{
    let cham=document.getElementsByClassName('dot');
    let slide=document.getElementsByClassName('hide');
    if(n>slide.length) slidepos=1;
    if(n<1) slidepos=slide.length;
    for(let i=0;i<slide.length;i++)
    {
        slide[i].style.display="none";
    }
    for(let i=0;i<cham.length;i++)
    {
        cham[i].className=cham[i].className.replace("active", "");
    }
    slide[slidepos-1].style.display="block";
    cham[slidepos-1].className+=" active";
}