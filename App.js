var { exec } = require('child_process');
function power() {
console.warn('Use Power Module Carefully !!')
}
power.sleep = () => {
if (process.platform === 'darwin') run('pmset sleepnow')
else if (process.platform === 'linux') run('sudo systemctl suspend')
else if (process.platform === 'win32') run('rundll32.exe powrprof.dll,SetSuspendState 0,1,0')
else throw Error('Unkown OS')
}
power.off = () => {
if (process.platform === 'darwin' || 'linux') run('sudo shutdown -h now') 
else if (process.platform === 'win32') run('shutdown -s -t ')
else throw Error('Unkown OS')
}
power.reboot = () => {
if (process.platform === 'darwin' || 'linux') run('reboot') 
else if (process.platform === 'win32') run('shutdown /r')
else throw Error('Unkown OS')    
}

function run(cmd) {
    exec(cmd, (err) => {
    if(err) throw err
});}
module.exports = power