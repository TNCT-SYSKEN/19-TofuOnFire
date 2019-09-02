# Recomy_FrontEnd
###### tags: HackU2019_Osaka

### 書きかけのコード(8/30)
- actions/index.js
    - リスト取得以外のActionの記述
- reducers/
    - リスト取得以外のReducer記述
    - index.jsにも忘れず追記
- utils/
    - リスト取得以外のActionTypes記述
- container/
    - Homeを書ききる
    - PostとPresentationを書く
- components
    - 今んとこリスト表示とラッパー以外書いてない問題の解決

- 諸注意
    - 困ったらAnimelのソースコードを参考にする
    - デザインはインターネッツつながるとこでやろうな

### VSCode環境構築
#### ライブラリ
- Cobalt2 Theme Official
- Debugger for Chrome
- ES7 React/Redux/GraphQL/React-Native snippets
- ESLint
- indent-rainbow
- Japanese Language Pack

### Component設計
- 投稿詳細
    - 画像四枚レスポンシブに表示
    - いいねのボタンは別コンポーネント？
    - 必要なのは画像表示部分といいねボタン
- 画像の投稿
    - 画像投稿ってどう処理してるのかわからん(サーバ側のコード読めハゲ)
        - まあ逆を考えるに画像は保存して相対パスをDBに投げてんだろうな…
            - 最悪か？？？？？
    - 投稿フォームはまとめて1つらしい
    - 必要なのは画像貼って表示するフォームとタイトルのフォームと投稿ボタン

### Containers設計
- 詳細
    - 画像コンポーネントといいねコンポーネント
- 投稿
    - 投稿ボタンでサーバ叩く