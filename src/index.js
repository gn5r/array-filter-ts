/**
 * 指定した範囲の乱数を生成する
 *
 * @param range 範囲
 * @returns 指定した範囲の乱数(重複あり)
 */
const random = (range = 3) => {
  return Math.floor(Math.random() * (range + 1));
};

/**
 * デモリストを動的作成する
 *
 * @param n 要素数
 * @returns デモリスト
 */
const createList = (n = 10) => {
  let list = [];
  for (let i = 0; i < n; i++) {
    const demo = {
      no: i,
      div: Math.floor(i / 2),
      text: `テキスト${i}`,
      qty: random(10),
    };
    list.push(demo);
  }
  return list;
};

const list = createList();
console.log("デモリスト:", list);

const divList = Array.from(new Set(list.map((e) => e.div)));
console.debug("区分リスト:", divList);

const filtering = (list = [], divList = []) => {
  let result = [];
  divList.forEach((div) => {
    const qty = list
      .filter((e) => e.div == div)
      .map((e) => e.qty)
      .reduce((s, e) => s + e, 0);
    result.push({ div: div, qty: qty });
  });
  return result;
};

const sum = filtering(list, divList);
console.debug("絞り込み:", sum);
