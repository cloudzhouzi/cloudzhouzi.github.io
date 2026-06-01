# 个人主页

这是一个可直接部署到 GitHub Pages 的纯静态个人主页，支持：

- 个人信息、学校经历、论文区域
- 中英文切换
- 日间 / 夜间模式切换
- 无需安装依赖、无需构建

## 修改个人信息

当前所有个人信息都先显示为 `Coming soon`。之后要补充真实内容时，打开 `index.html` 和 `script.js` 修改对应文案即可。

中英文内容都在 `script.js` 的 `translations` 对象里。你只需要分别改 `zh` 和 `en` 两部分。

## 本地预览

直接双击打开 `index.html` 即可预览。

也可以在当前目录启动一个简单服务器：

```powershell
python -m http.server 55000
```

然后浏览器打开：

```text
http://localhost:55000
```

## 部署到 GitHub Pages

1. 登录 GitHub。
2. 新建一个仓库，仓库名必须是：

```text
你的GitHub用户名.github.io
```

例如用户名是 `alice`，仓库名就是：

```text
alice.github.io
```

3. 在本地当前文件夹初始化 Git，并提交代码：

```powershell
git init
git add .
git commit -m "Create personal homepage"
```

4. 连接远程仓库。把下面的 `YOUR_USERNAME` 换成你的 GitHub 用户名：

```powershell
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

5. 打开仓库页面，进入 `Settings` -> `Pages`。
6. 在 `Build and deployment` 中选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

7. 保存后等待几分钟。如果还没看到页面，可以等到 10 分钟左右再刷新，访问：

```text
https://YOUR_USERNAME.github.io
```

## 之后如何更新

每次修改页面后运行：

```powershell
git add .
git commit -m "Update homepage"
git push
```

GitHub Pages 会自动更新线上页面。
