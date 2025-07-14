# TTS Debug Tool Demo

This repository simulates a simplified version of a text processing pipeline with a bug caused by "double cleaning" the text input. The pipeline aimed to clean the assistant output and leave only the raw text to be converted in the TTS module.

The logging in the `cleanTextPipeline` and eventually the `priorPipelineProcessing` helped trace the input and intermediate steps to identify specifically why the raw text was being removed into an empty string ''.

The demo highlights the debugging approach that was used to find this bug, displaying the detailed logging of data flow can help find problems inside of pipelines.


