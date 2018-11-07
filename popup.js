$(document).ready(() => {
    const result = chrome.extension.getBackgroundPage().result;
    if(result.hasQuiz){
        let text = "";
        let rows = 0;
        let q_count = 1;
        for(const q of result.questions){
            text += q_count + ". " +q.question + "\n";
            let o_count = 0;
            for (const o of q.options){
                text += toA(o_count) + ". "+ o + "\n";
                rows++;
                o_count++;
            }
            text += "\n";
            q_count++;
            rows++;
        }
        text = text.slice(0,-2);
        $('#questions').val(text);
        $('#questions').attr('rows', rows);
    } else {
        $('#questions').val('This page doesn\'t have quiz.');
    }
});

$('#copy').on('click', () => {
    $("textarea").select();
    document.execCommand('copy');
    $("textarea").blur();
});

const toA = (index) => {
    const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const result = str.charAt(index);
    return result;
}