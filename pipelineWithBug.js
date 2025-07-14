// clean module functions that were used in the processing of the text
function splitLines(text) {
    return text.split('\n');
};

function filterAssistantLines(lines) {
    return lines.filter(line => line.trim().startsWith('Assistant:'));
};

function stripAssistantPrefix(lines) {
    return lines.map(line => line.replace(/^Assistant:\s*/, '').trim());
};

function filterNonEmpty(lines) {
    return lines.filter(line => line.trim().length > 0);
};

// the main pipeline that was focused on cleaning the text before sending to TTS
function cleanTextPipeline(exampleText) {

    console.log('-----------------------------------');
    console.log('[cleanTextPipeline] exampleText: ', exampleText);

    const separatedLines = splitLines(exampleText.text);
    console.log('-----------------------------------');
    console.log('[cleanTextPipeline] separatedLines: ', separatedLines);

    const assistantLines = filterAssistantLines(separatedLines)
    console.log('-----------------------------------');
    console.log('[cleanTextPipeline] assistantLines: ', assistantLines);

    const rawAssistantLines = stripAssistantPrefix(assistantLines)
    console.log('-----------------------------------');
    console.log('[rawAssistantLines] rawAssistantLines: ', rawAssistantLines);

    const nonEmptyAssistantLines = filterNonEmpty(rawAssistantLines)
    console.log('-----------------------------------');
    console.log('[cleanTextPipeline] nonEmptyAssistantLines: ', nonEmptyAssistantLines);

    const cleanedText = nonEmptyAssistantLines.join('\n');
    console.log('-----------------------------------');
    console.log('[cleanTextPipeline] cleanedText: ', cleanedText);

    return { text: cleanedText };
};

// pipeline that had to process the text a specific way first 
// but included the clean module functions not the pipeline at the end 
function priorPipelineProcessing(exampleText) {
    console.log('-----------------------------------');
    console.log('PROCESSING THE TEXT WITH OTHER FUNCTIONS HERE THEN BELOW');

    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] exampleText: ', exampleText);

    const separatedLines = splitLines(exampleText.text);
    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] separatedLines: ', separatedLines);

    const assistantLines = filterAssistantLines(separatedLines)
    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] assistantLines: ', assistantLines);

    const rawAssistantLines = stripAssistantPrefix(assistantLines)
    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] rawAssistantLines: ', rawAssistantLines);

    const nonEmptyAssistantLines = filterNonEmpty(rawAssistantLines)
    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] nonEmptyAssistantLines: ', nonEmptyAssistantLines);

    const cleanedText = nonEmptyAssistantLines.join('\n');
    console.log('-----------------------------------');
    console.log('[priorPipelineProcessing] cleanedText: ', cleanedText);

    return { text: cleanedText };
};

function sendToTTSFunction(cleanedText) {
    console.log(`The data ${cleanedText.text} has been sent to TTS.`);
};

function pipelineWithBug(exampleText) {

    const processedText = priorPipelineProcessing(exampleText);
    console.log('-----------------------------------');
    console.log('[pipelineWithBug] processedText: ', processedText);

    // This causes the text to be double cleaned — it's already cleaned once in priorPipelineProcessing
    const cleanedText = cleanTextPipeline(processedText);
    console.log('-----------------------------------');
    console.log('[pipelineWithBug] cleanedText: ', cleanedText);

    sendToTTSFunction(cleanedText);
};

const exampleText = { text: "Assistant: example text"} ;
const output = pipelineWithBug(exampleText);

console.log('Final output: ', output);