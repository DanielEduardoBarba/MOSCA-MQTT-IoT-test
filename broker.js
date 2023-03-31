import mosca from "mosca"


const settings=  {port: 4041}

let broker  = new mosca.Server(settings)

broker.on("ready", ()=>{
    console.log("Running BROKER!")
})