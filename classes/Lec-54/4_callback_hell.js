function downloadFile(url, download) {
    // url file: downloading process

    console.log("Started Download");
    setTimeout(() => {
       let path = url.split('/').pop();
       download(path); 
    }, 2000);
    
};
function compressFile(path, compress) {
    // compress: path : zip convert  
    console.log("File ready for compress, Compress started");
    setTimeout(() => {
        const comp = path.split('.')[0] + 'Zip';
        compress(comp);
    }, 2000);
};

function uploadFile(comp, upload) {
    console.log("File started Uploading");
    setTimeout(() => {
        const upl = "https://LocalStorage" + comp;
        upload(upl);
    }, 2000);
};
// downloadFile
downloadFile("https://www.facebook/abc.mp3", function(upload) {
    console.log(`File downloaded successfully ${path}`);
});