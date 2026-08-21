@echo off
title Syntrel Global Server
echo Starting Syntrel Global Web Server...
echo Please wait a moment for the server to compile.
start http://localhost:3000
npm run dev
pause