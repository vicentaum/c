setTimeout(function(){
  // 1. Replace video (works on main project page)
  var f=document.querySelector('iframe');
  if(f)f.src='//youtube.com/embed/rfTG4R775Dw';
  
  // 2. Fill bolsa CNPq section (works on main project page)
  var h=document.querySelectorAll('h4');
  for(var i=0;i<h.length;i++){
    if(h[i].textContent.indexOf('modalidade de bolsa')>-1){
      var p=h[i];
      while(p=p.nextElementSibling){if(p.tagName==='P')break;}
      if(p)p.innerHTML='<strong>Bolsista DTI-C</strong><br>'+
        'Graduação ou formação recente em Computação, Sistemas ou área correlata.<br>'+
        'Desenvolvimento de funcionalidades web/PWA, homologação, testes e apoio a releases estáveis.<br>'+
        'Bolsa CNPq DTI-C<br>20h<br><br>'+
        '<strong>Bolsista SET-H</strong><br>'+
        'Perfil técnico-operacional com experiência em implantação, suporte ou acompanhamento de PMEs.<br>'+
        'Onboarding assistido, suporte orientado por dados, coleta de feedback e métricas de ativação.<br>'+
        'Bolsa CNPq SET-H<br>20h<br><br>'+
        '<strong>Bolsista SET-I</strong><br>'+
        'Perfil organizado para documentação, testes operacionais e base de conhecimento.<br>'+
        'Documentação, checklists, testes operacionais, evidências e consolidação da base de conhecimento.<br>'+
        'Bolsa CNPq SET-I<br>20h';
      break;
    }
  }
},1500);
