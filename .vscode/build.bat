cd CSEUtils.Interface.Electron/bin/Release/net8.0/publish

call npx electron-packager . CSE_Utils --platform=win32 --arch=x64 --out=dist
call npx electron-packager . CSE_Utils --platform=win32 --arch=ia32 --out=dist
call npx electron-packager . CSE_Utils --platform=win32 --arch=arm64 --out=dist
call npx electron-packager . CSE_Utils --platform=linux --arch=arm64 --out=dist
call npx electron-packager . CSE_Utils --platform=mas --arch=arm64 --out=dist

cd dist
start .