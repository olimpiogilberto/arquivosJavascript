<!--
  // Animação em círculos

  var ob, incr, an, se, pX, pY, dX, dY, ti;

  function circulo(obj, inc, ang, sen, poX, poY, diX, diY, tim){
    ob = obj;
    incr = inc;
    an = ang;
    se = sen;
    pX = poX;
    pY = poY;
    dX = diX;
    dY = diY;
    ti = tim;
    circulo2(an);
  }

  function circulo2(ang){
    if(se == 1){
	  ang = ang - incr;
	}
	if(se == 2){
	  ang = ang + incr;
	}  
	var x = pX + dX * Math.cos(ang * Math.PI / 180);
	var y = pY - dY * Math.sin(ang * Math.PI / 180);
	
	moverPara(ob, x, y);
	
	setTimeout("circulo2(" + ang + ")", ti);
  }
  
  // Função moverPara
  
  function moverPara(obj, posX, posY){
    obj.style.left = posX;
    obj.style.top = posY;
  }
  
  // função andarPara
  
  function andarPara(obj, iX, iY, fX, fY){
    var pX = parseInt(obj.style.left);
    var pY = parseInt(obj.style.top);
    
    pX += iX;
    pY += iY;
    
    if((pX <= fX)||(pX <= fX)){
      obj.style.left = pX;
      obj.style.top = pY;
    }
  }
  
  // Função para mover elementos em determinados angulos
  
  function angulo(obj, inc, ang, fX, fY){
    var pX = parseInt(obj.style.left);
    var pY = parseInt(obj.style.top);
    
    pX += inc * Math.cos(ang * Math.PI / 180);
    pY += inc * Math.sin(ang * Math.PI / 180);
    
    if((pX <= fX)||(pX <= fX)){
      obj.style.left = pX;
      obj.style.top = pY;
    }
  }
//-->
