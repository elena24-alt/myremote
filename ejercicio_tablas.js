const usuarios = [
    { id: 1, nombre: "Carlos", apellido: "López", correo: "carlos.lopez@example.com", telefono: "555-123-4567", comentario: "Este es un gran sistema." },
    { id: 2, nombre: "María", apellido: "García", correo: "maria.garcia@example.com", telefono: "555-987-6543", comentario: "Me encanta esta plataforma." },
    { id: 3, nombre: "José", apellido: "Martínez", correo: "jose.martinez@example.com", telefono: "555-456-7890", comentario: "Muy útil y práctico." },
    { id: 4, nombre: "Ana", apellido: "Pérez", correo: "ana.perez@example.com", telefono: "555-654-3210", comentario: "Fácil de usar, gracias." },
    { id: 5, nombre: "Luis", apellido: "Hernández", correo: "luis.hernandez@example.com", telefono: "555-789-0123", comentario: "Todo funciona perfectamente." },
    { id: 6, nombre: "Laura", apellido: "Torres", correo: "laura.torres@example.com", telefono: "555-321-0987", comentario: "Muy satisfecho con el servicio." },
    { id: 7, nombre: "Pedro", apellido: "Ramírez", correo: "pedro.ramirez@example.com", telefono: "555-456-1230", comentario: "Gran experiencia hasta ahora." },
    { id: 8, nombre: "Sofía", apellido: "Flores", correo: "sofia.flores@example.com", telefono: "555-654-9876", comentario: "Gracias por la ayuda rápida." },
    { id: 9, nombre: "Miguel", apellido: "Cruz", correo: "miguel.cruz@example.com", telefono: "555-789-4561", comentario: "Excelente sistema, lo recomendaré." },
    { id: 10, nombre: "Lucía", apellido: "Morales", correo: "lucia.morales@example.com", telefono: "555-321-7654", comentario: "Muy buen diseño, fácil de entender." }
  ];

  
  tabla=document.querySelector("#tabla")

  function crearTabla(){
    var cadena= "<table><thead>";
    cadena = cadena+"<tr><th>ID</th>";
    cadena=cadena+"<th>Nombre</th>";
    cadena=cadena+"<th>Apellido</th>"
    cadena=cadena+"<th>Correo</th>"
    cadena=cadena+"<th>Telefono</th>"
    cadena=cadena+"<th>Comentario</th></tr></thead>";
    cadena=cadena+"<tbody>";

    for(const usuario of usuarios){
        cadena=cadena+"<tr>";
        cadena=cadena+"<td>"+usuario.id+"</td>";
        cadena=cadena+"<td>"+usuario.nombre+"</td>";
        cadena=cadena+"<td>"+usuario.apellido+"</td>";
        cadena=cadena+"<td>"+usuario.correo+"</td>";
        cadena=cadena+"<td>"+usuario.telefono+"</td>";
        cadena=cadena+"<td>"+usuario.comentario+"</td>";
        cadena=cadena+"</tr>"
    }
    
    cadena=cadena+"</tbody>";
    cadena=cadena+"</table>";
    tabla.innerHTML=cadena; 
  }

  function agregarFila(){
    const id=document.getElementById("id").value;
    const nombre=document.getElementById("nombre").value;
    const apellido=document.getElementById("apellido").value;
    const correo=document.getElementById("correo").value;
    const telefono=document.getElementById("telefono").value;
    const comentario=document.getElementById("comentario").value;

    if(id && nombre && apellido && correo && telefono && comentario){
        let contenedor=document.querySelector('#tabla').getElementsByTagName("tbody")[0];
        const nuevaFila = contenedor.insertRow();

         nuevaFila.innerHTML=`
         <td>${id}</td>
         <td>${nombre}</td>
         <td>${apellido}</td>
         <td>${correo}</td>
         <td>${telefono}</td>
         <td>${comentario}</td>

         `;

         document.getElementById("formulario").reset();

    }
    else{
        alert("Los datos no estan completos");
    }

    
  }
  crearTabla();