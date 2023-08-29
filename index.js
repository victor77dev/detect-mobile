window.onload = async () => {
    const result = await detectMobile();
    document.getElementById('result').innerHTML = result ? 'This is a mobile' : 'This is not a mobile';
};

const addLog = (log) => {
    document.getElementById('log').innerHTML += log.toString() + '<br>';
};

const detectMobile = async () => {
    if (navigator.userAgentData) {
        const highEntropyValues = await navigator.userAgentData.getHighEntropyValues(['mobile']);

        addLog(highEntropyValues.mobile)

        return highEntropyValues.mobile;
    } else {
        addLog(navigator.userAgent)
        addLog(navigator.platform)

        return /Mobi/.test(navigator.userAgent) || /Android/i.test(navigator.userAgent) || /iPhone|iPad|iPod/i.test(navigator.userAgent);
    }
};