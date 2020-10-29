const MANIFEST_URL = 'manifest.json';
const localhost = ['127.0.0.1', 'localhost'];

async function main() {
    const isLocal = !!~localhost.indexOf(window.location.hostname);
    const manifestJSON = await (await fetch(MANIFEST_URL)).json();

    const host = isLocal ? manifestJSON.localHost : manifestJSON.productionHost;

    const videoComponent = new VideoComponent();
    const videoPlayer = new VideoMediaPlayer({
        manifestJSON
    });

    videoPlayer.initializeCodec();
    videoComponent.initializePlayer();

}

window.onload = main