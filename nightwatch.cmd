@echo off
rem set PATH=%PATH%;%~dp0selenium\IEDriverServer.exe

node node_modules/nightwatch/bin/runner.js %1 %*