function encodeAndDecodeMessages() {
    const buttonsRef = document.querySelectorAll('button');
    const textAreas = document.querySelectorAll('textarea');

    const encodeButton = buttonsRef[0];
    const decodeButton = buttonsRef[1];

    const encodeTextArea = textAreas[0];
    const decodeTextArea = textAreas[1];

    encodeButton.addEventListener('click', encodeAndSendMsgHandler);
    decodeButton.addEventListener('click', decodeAndReadMsgHandler);

    function encodeAndSendMsgHandler(event) {
        let currentText = encodeTextArea.value;
        let encodeMsg = '';

        for (const ch of currentText) {
            let numValue = ch.charCodeAt();
            numValue += 1;
            encodeMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = encodeMsg;
        encodeTextArea.value = '';
    }

    function decodeAndReadMsgHandler(event) {
        let currentValue = decodeTextArea.value;
        let decodeMsg = '';
        for (const ch of currentValue) {
            let numValue = ch.charCodeAt();
            numValue--;
            decodeMsg += String.fromCharCode(numValue);
        }
        decodeTextArea.value = decodeMsg;
    }

}