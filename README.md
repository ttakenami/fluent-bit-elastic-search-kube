# fluent-bit-elastic-search-kube
fluent-bit-elastic-search-kube は収集したログデータをoutput先をElasticsearchに設定するマイクロサービスです。
本リポジトリには、必要なマニフェストファイル等が入っています。

## 動作環境
- Elasticsearch: >=8

## 設定
```
k apply -f fluent-bit-configmap.yaml
k apply -f fluent-bit-ds.yaml
```

## コンテナ名が一致するものだけ抽出する
[FILTER] Name grep に以下のように記述。例、countを含むまたはnginxを含むものを抽出
regex $kubernetes['container_name'] ^(?=.*count|.*nginx).*$
