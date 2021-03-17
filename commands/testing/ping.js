module.exports = {
    name: 'ping',
    description: 'Prueba de que todo está funcionando!',
    execute(message, args) {
        message.channel.send('Todo correcto');
    }
}