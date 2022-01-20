## 環境構築手順
#### 1. リポジトリをクローン
```shell
$ git clone -b second https://github.com/takeuchimaru/memoapp.git
```

#### 2. リポジトリに移動
```shell
$  cd memoapp
```

#### 3. コンテナをビルド
```shell
$  docker-compose build
```

#### 4. コンテナを一時的に起動 (--rmで停止後削除する。コンテナ起動後、bashに入る）
```shell
$  docker-compose run --rm app /bin/bash
```

#### 5. appライブラリをインストール
```shell
$  npm install
```

#### 6. コンテナを抜ける　（この仮コンテナは削除される)
```shell
$  exit
```

#### ※コマンドプロンプトのウィンドウ（もしくはターミナルのタブ）をもう一つ立ち上げる
#### 7. リポジトリに移動
```shell
$  cd memoapp
```

#### 8. コンテナ情報を出力して、mysql:5.7のCONTAINER IDを確認
```shell
$  docker ps

↓以下例
CONTAINER ID   IMAGE         COMMAND                  CREATED         STATUS         PORTS                                                            NAMES
7b5d66c47efb   memoapp_app   "docker-entrypoint.s…"   2 minutes ago   Up 2 minutes   0.0.0.0:3200->3200/tcp, :::3200->3200/tcp                        node_docker_app_container
44c6578e7453   mysql:5.7     "docker-entrypoint.s…"   4 minutes ago   Up 4 minutes   3306/tcp, 33060/tcp, 0.0.0.0:3334->3334/tcp, :::3334->3334/tcp   node_docker_db_container
```

#### 9. MYSQL(DB)コンテナにアクセス
IDは'8'で確認したmysql:5.7のCONTAINER ID
```shell
$  docker exec -it 44c6578e7453 bash
```

#### 10. MYSQLにログインできるか確認し、ログインできたらMYSQLとコンテナをそれぞれ抜ける
パスワード：`root`
```shell
$  mysql -u root -p
Enter password: 
$  exit
$  exit
```

#### 11. appコンテナにアクセス
IDは'8'で確認したmemoapp_appのCONTAINER ID
```shell
$  cd docker exec -it 7b5d66c47efb bash 
```

#### 12. DBマイグレーション実行
```shell
$ npx sequelize-cli db:migrate
```

#### 13. app動作確認
http://localhost:3200


## 作品で参考にしたサイト
[【Node.js express Docker】Dockerを用いてNode.js Express MySQLの環境を構築する](https://qiita.com/sho_U/items/52e221877a271146ce84)<br>
[ExpressでCRUDアプリ（メモアプリ）を作る](https://qiita.com/yuikoAkiyoshi/items/8e557e3d8b2701d7a2f3)<br>
[保存版！「sequelize」モデルの使い方実例・全59件](https://blog.capilano-fw.com/?p=5582)<br>
