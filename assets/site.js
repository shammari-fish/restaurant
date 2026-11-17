
document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-btn'),nav=document.querySelector('nav');
 if(btn&&nav)btn.addEventListener('click',()=>nav.classList.toggle('open'));
 document.querySelectorAll('[data-delete-form]').forEach(form=>{
  form.addEventListener('submit',e=>{
   e.preventDefault();
   const d=new FormData(form);
   const subject=encodeURIComponent('طلب حذف حساب وبيانات - تطبيق الشماري للأسماك');
   const body=encodeURIComponent(
`أرغب في تقديم طلب حذف حسابي والبيانات المرتبطة به من تطبيق الشماري للأسماك.\n\nالاسم: ${d.get('name')}\nرقم الهاتف المرتبط بالحساب: ${d.get('phone')}\nالبريد الإلكتروني (إن وجد): ${d.get('email')||'غير مذكور'}\nسبب/ملاحظات إضافية: ${d.get('details')||'لا يوجد'}\n\nأرجو مراجعة الطلب والتواصل معي عند الحاجة.`
   );
   document.getElementById('form-result').style.display='block';
   window.location.href=`mailto:shammarifish7857@gmail.com?subject=${subject}&body=${body}`;
  });
 });
});
