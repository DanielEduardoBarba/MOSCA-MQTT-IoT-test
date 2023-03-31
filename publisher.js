import mqtt from 'mqtt'

const client = mqtt.connect("mqtt://localhost:4041")
const topic = 'testingInfo'

let message=""

client.on('connect', ()=>{
    setInterval(()=>{
        let message='Current Time:'+Date.now()
        client.publish(topic,message)
        console.log(message)
    },3000)
})