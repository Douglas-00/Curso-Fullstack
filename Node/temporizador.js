const schedule = require('node-schedule')

const tarefa1 = schedule.schedulejob('*/5 * 12 * * 2', function(){
    console.log('Executandoo tarefa 1!', new Date().getSeconds())
})
