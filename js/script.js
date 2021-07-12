//Лампочка

let LightLamp = function (power,workTime) {

    let status = false;
        power = power || 40,
        workTime = workTime || 1000,
        costEnergy = 0.1778,
        result = power/1000 * costEnergy * workTime/60; 
    
    this.anable = function(){
        status = true;
    }
    this.disable = function(){
        workTime = 0;
        status = false;
    }
 
    this.getStatus = function () {
        return status;   
        
    };
 
    this.show = function () {
 
        if (workTime == 0 || workTime == undefined) {
            workTime = 0,
            console.log('Не включено');
        } else {
            console.log(`Стоимость потраченой электроэнергии составляет = ${result} бел. рублей`);
        }
    };
};

//прототип Тостера

let Toster = function(power, workTime, qTosters){
    LightLamp.apply(this, arguments);

    let tosterAmount = 0,
        status = false,
        startT = null,
        self = this;

    let parentGetStatus = this.getStatus,
        parentDisable = this.disable; 
    
    this.setToster= function(amount){
        if(amount == 1  && amount == 2)
        tosterAmount = amount;
        else (tosterAmount = 0);
    }
    this.getToster = function(){
        return tosterAmount;
    };
  
    this.on = function(){
        if (parentGetStatus() ==true && tosterAmount>0){
            status = true;

            starting()
        }
    };

    this.off = function(){
        status = false;

        clearTimeout(startT)
    }

    let starting = function(){
        startT = setTimeout(function(){
            alert("Tost is ready");
        }, 10000)

    };
    this.getStatus=function(){
    parentGetStatus.call(this);

    if (status == true && parentGetStatus() == true)
        return true;
        return false
    };
    this.disable = function(){
        parentDisable.call(this);
        parentDisable();
      
        if (parentGetStatus() == false) this.off();

    };
    this.show = function(){
        return `Стоимость потраченой электроэнергии на приготовление тоста составляет = ${result} бел. рублей (${this.getStatus()? 'Работает': 'Не работает'})`
    }
    
}



 
let lightLampK = new LightLamp(60, 60000);
lightLampK.getStatus();
 
let toster = new Toster(50, 20000)
toster.on()

console.log(toster.show())
toster.disable()
console.log(toster.show())

