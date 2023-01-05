# ゲーム「セット」

## ゲーム内容

[wikipedia](https://ja.wikipedia.org/wiki/%E3%82%BB%E3%83%83%E3%83%88_(%E3%82%AB%E3%83%BC%E3%83%89%E3%82%B2%E3%83%BC%E3%83%A0))を参照してください  

## 開発環境の起動方法

### 前提

Windows11  
wsl2  
wsl2にはdockerがインストールされていること  

### 初回

1. このリポジトリをwsl2の領域にクローンする

1. wsl2が起動していなければ起動する

1. dockerが起動していなければ起動する

wsl2で以下コマンドを実行する

```shell
service docker start
```

4. docker image のビルド

クローンしたディレクトリの`Dockerfile`と同じ階層に移動する(規定では`the-set-of-the-game`のはず)  

wsl2で以下コマンドを実行する

```shell
docker build . -t the-set-of-the-game-image
```

5. docker container を起動

wsl2で以下コマンドを実行する

```shell
docker run -it --rm --name the-set-of-the-game -p 3000:3000 -v クローンしたディレクトリ/the-set-of-the-game/app:/app the-set-of-the-game-image
```

docker containerの中に入る

6. 開発環境起動

docker container で以下コマンドを実行する

```shell
cd the-set-of-the-game
npm start
```

起動・ポートバインドの確認をする  
wsl2で以下コマンドを実行する

```shell
curl http://localhost:3000/
```

htmlが返ってくれば成功

7. webページの確認

ここまでの手順だとwsl2とdocker containerからしかページが表示できないため、ホスト(windows)からアクセスできるようにする

[参考](https://arubeh.com/archives/1749)

windows powershell にて管理者モードで以下コマンドを実行する

```shell
netsh interface portproxy add v4tov4 listenaddress=* listenport=3000 connectaddress=wsl2のIP connectport=3000
```

windows powershell にて以下コマンドを実行し、設定できたことを確認する

```shell
netsh interface portproxy show all
```

windows のブラウザから`http://localhost:3000/`にアクセスすると、画面が見れるようになる  

補足 ポートフォワーディング設定の削除  
windows powershell にて管理者モードで以下コマンドを実行する

```shell
netsh interface portproxy delete v4tov4 listenport=3000 listenaddress=*
```
