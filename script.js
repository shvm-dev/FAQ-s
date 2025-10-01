const accordian = document.querySelectorAll(".accordian");
// console.log("accordian",accordian)
accordian.forEach(accordian=> {
  const ans = accordian.querySelector(".ans");  
  const ques = accordian.querySelector(".ques");  
  const icon = accordian.querySelector(".icon");  
  
  accordian.addEventListener('click',()=>{
  //  console.log("btn click") 
  //  icon.classList.toggle("active")
  //   ans.classList.toggle("active")
  
if(icon.classList.contains('active')){
  icon.classList.remove('active');
  ques.classList.remove('active');
  ans.style.maxHeight = null ;
}else{
  icon.classList.add('active');
  ques.classList.add('active');
  ans.style.maxHeight = ans.scrollHeight + 'px';
}

})
});