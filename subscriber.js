import mqtt from 'mqtt'

const client = mqtt.connect("mqtt://localhost:4041")

const topic = "testingInfo"

client.on('message', (topic, message)=>{
   const  strMessage=message.toString()
    console.log(strMessage)
})
client.on('connect', ()=>{
    client.subscribe(topic)
    console.log("Client subbed: ",topic)
})