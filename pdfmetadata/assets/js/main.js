let pdfInputFile = document.getElementById('pdfInput');
let pdf;
let fileReader = new FileReader();

function inputButtonInit() {
    return pdfInputFile.click();
};

function resetBoxMessage() {
    messageColorReset = document.getElementById('outputMessage').classList[1];
    document.getElementById('outputMessage').classList.remove(messageColorReset);
    document.getElementById('outputMessage').style.opacity = '0%';
}

function boxMessage(boxElementId, colorClass, boxMessageId, message) {
    document.getElementById(boxElementId).style.opacity = '100%';
    document.getElementById(boxElementId).classList.add(colorClass)
    document.getElementById(boxMessageId).textContent = message;
};

function setDisplayValue(elementId, value) {
    return document.getElementById(elementId).style.display = value;
}

function chooseScreen(screenIdEnable, screenIdDisable) {
    this.setDisplayValue(screenIdEnable, 'initial');
    this.setDisplayValue(screenIdDisable, 'none');
}

function copyToClipboard() {
    /* Get the text field */
    var copyText = document.getElementById("payload");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    alert("Payload copiada para o clipboard!");
}

pdfInputFile.onchange = function (event) {
    let fileList = event.target.files;
    resetBoxMessage();

    fileReader.onload = function () {
        let pdf = fileReader.result;

        pdfjsLib.getDocument(pdf).promise.then(function (pdfDoc_) {
            pdfDoc = pdfDoc_;

            pdfDoc.getMetadata().then(function (stuff) {
                let payload = stuff.metadata._data.replace(`<?xml version="1.0" encoding="UTF-8"?><metapayload><data type="json"><![CDATA[`, "").replace(`]]></data></metapayload>`, "");
                chooseScreen('outputPayloadArea', 'inputArchiveArea');
                boxMessage('outputMessage', 'is-success', 'outputMessageText', "Payload obtida com sucesso!");
                document.getElementById('payload').value = payload;

            }).catch(function (err) {
                boxMessage('outputMessage', 'is-danger', 'outputMessageText', "Erro ao obter o metadata do PDF!");
                throw err.message;
            });

        }).catch(function (err) {
            boxMessage('outputMessage', 'is-danger', 'outputMessageText', "Erro ao fazer o upload do PDF!");
            throw err.message;
        });
    }

    fileReader.readAsDataURL(fileList[0]);
}