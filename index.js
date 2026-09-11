//una veterinaria necesita desarrolla un sistema para la atención de mascotas 
//animal ,propietario ,atención 

class Animal{
nombre
raza 
especie 
edad

constructor(nombre,raza,especie,edad){
    this.nombre=nombre
    this.raza=raza
    this.especie=especie
    this.edad=edad
}
//modificar
registrarNombre(nuevonombre){
    this.nombre=nuevonombre
}

//modificar
registrarRaza(nuevaRaza){
    this.raza=nuevaRaza

}
//modificar
registrarEspecie(nuevaEspecie){
    this.especie=nuevaEspecie

}
//modificar
registrarEdad(nuevaEdad){
    this.edad=nuevaEdad

}

mostrarInformación(){
    console.log(this.nombre+" "+this.raza)
    console.log(this.edad+" "+this.especie)

}



}

class Propietario{
nombrePropietario
dirección
telefono
constructor(nombre,dirección,telefono){
    this.nombrePropietario=nombre
    this.dirección=dirección
    this.telefono=telefono
    this.mascota=[]
}
registrarNombre(nuevonombre){
this.nombrePropietario=nuevonombre

}
registrarDirección(nuevaDirección){
this.dirección=nuevaDirección
}
registrarTelefono(nuevoTelefono){
    this.telefono=nuevoTelefono
}
registrarMascota(nuevamascotas){
    //pop , unshift, shift,push
    this.mascota.push(nuevamascotas)

}
mostrarInformación(){

    console.log("mascota :"+this.mascota[0].nombre+"propietario:"+this.nombrePropietario)
    console.log(this.nombrePropietario+" "+this.dirección)
}


}
let Colmillo =new Animal ("colmillo","pitbull","perro",12)
Colmillo.mostrarInformación()
let Alexa=new Propietario("Alexa","123","111") 
Alexa.registrarMascota(Colmillo)
Alexa.mostrarInformación()