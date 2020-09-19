let calculator = {
  read(var1, var2){
    this.var1 = var1;
    this.var2 = var2;
  },
  sum(){
    if(typeof(this.var1 === 'number') && typeof(this.var2 === 'number')){
      return this.var1 + this.var2;
    }else{
      console.log('Not appropriate parameters');
    }
  },
  mul(){
    if(typeof(this.var1 === 'number') && typeof(this.var2 === 'number')){
      return this.var1 * this.var2;
    }else{
      console.log('Not appropriate parameters');
    }
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
