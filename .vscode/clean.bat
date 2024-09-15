cd CSEUtils.Interface.Electron/bin/Release/net8.0/publish

call npm cache clean --force
rmdir /s /q "dist"
rmdir /s /q "node_modules"
pause