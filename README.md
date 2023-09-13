# fluent-bit-elastic-search-kube
fluent-bit-elastic-search-kube は収集したログデータをoutput先をElasticsearchに設定するマイクロサービスです。
本リポジトリには、必要なマニフェストファイル等が入っています。

## 動作環境
- Elasticsearch: >=7.5

## 設定
```
k apply -f fluent-bit-configmap.yaml
k apply -f fluent-bit-ds.yaml
```
