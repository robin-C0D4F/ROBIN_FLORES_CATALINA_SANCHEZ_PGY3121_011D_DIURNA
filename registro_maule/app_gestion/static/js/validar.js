function validar()

{

    var rut=            document.formulario.txt_rut.value
    var nombre=         document.formulario.txt_nombre.value
    var apellidop=      document.formulario.txt_appaterno.value
    var apellidom=      document.formulario.txt_apmaterno.value
    var edad=           document.formulario.txt_edad.value
    var nomvac=         document.formulario.txt_nom_vacuna.value
    var fecha=          document.formulario.txt_fecha.value
    

    if (rut.length < 9)
    {
        alert("El RUT ingresado no es válido, debe contener mínimo 9 carácteres")
        document.formulario.txt_rut.focus();
        document.formulario.txt_rut.reset();
        return false
    }

    if (rut.length > 10)
    {
        alert("El RUT ingresado no es válido, debe contener máximo de 10 carácteres")
        document.formulario.txt_rut.focus();
        document.formulario.txt_rut.reset();
        return false
    }

    if (nombre.length>15)
    {
        alert("El nombre no debe exceder los 15 carácteres")
        document.formulario.txt_nombre.focus();
        document.formulario.txt_nombre.reset();
        return false
    }

    if (nombre.length<2)
    {
        alert("El nombre no debe poseer menos de 2 carácteres")
        document.formulario.txt_nombre.focus();
        document.formulario.txt_nombre.reset();
        return false
    }
    
    if (apellidop.length>20)
    {
        alert("El apellido paterno no debe exceder los 20 carácteres")
        document.formulario.txt_appaterno.focus();
        document.formulario.txt_appaterno.reset();
        return false
    }

    if (apellidop.length<2)
    {
        alert("El apellido paterno no debe poseer menos de 2 carácteres")
        document.formulario.txt_appaterno.focus();
        document.formulario.txt_appaterno.reset();
        return false
    }

    if (apellidom.length>20)
    {
        alert("El apellido paterno no debe exceder los 20 carácteres")
        document.formulario.txt_apmaterno.focus();
        document.formulario.txt_apmaterno.reset();
        return false
    }

    if (apellidom.length<2)
    {
        alert("El apellido materno no debe poseer menos de 2 carácteres")
        document.formulario.txt_apmaterno.focus();
        document.formulario.txt_apmaterno.reset();
        return false
    }

    if (edad.length >2)
    {
        alert("La edad debe ser entre 12 y 99 años")
        document.formulario.txt_edad.focus();
        document.formulario.txt_edad.reset();
        return false
    }

    if (edad < 12)
    {
        alert("La edad no debe ser menor a 12 años")
        document.formulario.txt_edad.focus();
        document.formulario.txt_edad.reset();
        return false
    }

    if (edad.length > 2)
    {
        alert("La edad no debe ser mayor a 99 años")
        document.formulario.txt_edad.focus();
        document.formulario.txt_edad.reset();
        return false
    }

    if (toUpperCase(nomvac) != 'PFIZER', 'CORONAVAC', 'ASTRAZENECA', 'MODERNA')
    {
        alert("La vacuna ingresada no existe. Debe ingresar Pfizer, CoronaVac, AstraZeneca o Moderna")
        document.formulario.txt_nom_vacuna.focus();
        document.formulario.txt_nom_vacuna.reset();
        return false
    }

    if (fecha.charAt(0,1) > 31)
    {
        alert("El día debe ser entre 01 y 31")
        document.formulario.txt_fecha.focus();
        document.formulario.txt_fecha.reset();
        return false
    }

    if (fecha.charAt(3,4) > 12)
    {
        alert("El mes no debe ser mayor a 12")
        document.formulario.txt_fecha.focus();
        document.formulario.txt_fecha.reset();
        return false
    }

    if (fecha.charAt(6,7) > 2022)
    {
        alert("El año no debe superar al actual")
        document.formulario.txt_fecha.focus();
        document.formulario.txt_fecha.reset();
        return false
    }

    document.formulario.action = "/ingreso_vacunado/"
    document.formulario.submit() = true 
    alert("El registro de usuario ha sido realizado exitosamente");
}


