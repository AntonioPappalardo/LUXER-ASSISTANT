const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
    const {
        resolver: { assetExts },
    } = await getDefaultConfig()
    return {
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: false,
                },
            }),
        },
        

        resolver: {
            assetExts: [...assetExts,'obj', 'mtl', 'db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'gltf', 'dae', 'bin','glb'],
        },
    }
})()