const phone ={
    brand: 'huawei',
    SO: 'android 10',
    ram: '4GB',
    hdd: '260GB',
    screen: '5"',
    model: 'Y',
    functional: true,
    damage: false
};
console.log(phone);
console.log(phone.brand);
phone.damage=true;
phone.color = 'black';
phone['case color'] = 'grey';
console.log(phone);
console.log(phone['color']);

phone.start = function(){
    console.log('Mi'+ this.brand + '...');
    console.log('Encendido');
    console.log('LISTO');
}

phone.call = function(name){
    console.log('llamando a' + name);
    console.log('NO CONTESTA :/');
}

phone.start();
phone.call('SUPERMAN');
