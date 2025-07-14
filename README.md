# TTS Debug Tool Demo

This repository simulates a simplified version of a text processing pipeline with a bug caused by **"double cleaning"** the text input. 

The intended flow was:
1. Clean the assistant output once.
2. Send the cleaned text to the TTS module.

However, the system unintentionally applied the same cleaning logic twice — once during an earlier processing stage, and again right before sending to TTS. This led to the cleaned text being reduced to an empty string or malformed format.

Detailed logging in both `priorPipelineProcessing` and `cleanTextPipeline` helped trace the intermediate data transformations and isolate the cause of the failure.

### Functions

- `priorPipelineProcessing()`: Simulates the original processing that mistakenly already includes cleaning.
- `cleanTextPipeline()`: The main cleaning logic
- `pipelineWithBug()`: Combines both, showing how the bug manifested.
- `sendToTTSFunction()`: Placeholder for sending to TTS, logs what text was sent

The demo highlights the debugging approach that was used to find this bug, displaying the detailed logging of data flow can help find problems inside of pipelines.


