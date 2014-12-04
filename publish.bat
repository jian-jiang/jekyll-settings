@echo off
if "%1"==""  goto end

git add .
git commit -m "%1"

xcopy c:\Users\85497_000\Desktop\jianan.github.io\_site C:\Users\85497_000\Documents\jian-jiang.github.io

cd C:\Users\85497_000\Documents\jian-jiang.github.io

git add .
git commit -m "%1"

git push origin
