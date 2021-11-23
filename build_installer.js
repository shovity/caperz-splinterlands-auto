const { MSICreator } = require('electron-wix-msi')
const path = require('path')
// Step 1: Instantiate the MSICreator
const APP_DIR = path.resolve(__dirname, './dist/NFTauto Desktop v.2.1.0-win32-x64')
const OUT_DIR = path.resolve(__dirname, './installer')
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    description: 'SPS NFTAuto Desktop v.2.1.0',
    exe: 'NFTauto Desktop v.2.1.0',
    name: 'SPS NFTAuto Desktop v.2.1.0',
    manufacturer: 'Caper Team',
    version: '2.0.1',
    outputDirectory: OUT_DIR,
    ui: {
        chooseDirectory: true,
    },
})

// Step 2: Create a .wxs template file
msiCreator.create().then(function () {
    msiCreator.compile()
})
