// props
  const Mensaje = (params:any) =>  {
    console.log(params)

  return <h1>Datos personales: {params.name} Edad: {params.age}</h1>
  }

  export default Mensaje;