# 5xruby-vue-202312-quiz-2
Vue.js 課程 HW2

## 練習 1 - uBike 表格的元件拆分
  修改 `views/uBikeTable/uBikeTable.vue` 檔案，並完成以下功能：  
  
  1. 將搜尋的部分拆出來變成子元件 `views/uBikeTable/components/search.vue`
  2. 將表格的部分拆出來變成子元件 `views/uBikeTable/components/uBikeTable.vue`
  3. 將分頁的部分拆出來變成子元件 `views/uBikeTable/components/pagination.vue`
  4. 再將它們組合起來

## 練習 2 - 五倍對對碰

  - 修改 `views/MatchGame/MatchGame.vue`
  - 點擊卡片，卡片會翻開
  - 點擊兩張不同的卡片，卡片會翻回去
  - 點擊兩張相同的卡片，卡片會消失
  - 當所有卡片都消失時，顯示「恭喜破關，再來一局？」的對話框，按下確定後重置遊戲
  - 將卡片部分獨立抽出為 Card.vue 元件
  - 成品參考： https://kuro.tw/vue-card-match-game/ 


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
