console.log("hello");

/**
 * デモインターフェース
 *
 * @interface Demo
 */
interface Demo {
  /** 番号 */
  no: number;
  /** 区分 */
  div: string | number;
  /** 文字列 */
  text: string;
  /** 個数 */
  qty: number;
}

/**
 * 指定した範囲の乱数を生成する
 *
 * @param range 範囲
 * @returns 指定した範囲の乱数(重複あり)
 */
const random = (range: number | undefined = 3) => {
  return Math.floor(Math.random() * (range + 1));
};

/**
 * デモリストを動的作成する
 *
 * @param n 要素数
 * @returns デモリスト
 */
const createList = (n: number | undefined = 10): Demo[] => {
  let list: Demo[] = [];
  for (let i = 0; i < n; i++) {
    const demo: Demo = {
      no: i,
      div: Math.floor(i / 2),
      text: `テキスト${i}`,
      qty: random(10),
    };
    list.push(demo);
  }
  return list;
};

let list: Demo[] = createList(5);
console.log("デモリスト:", list);

const divList = Array.from(new Set(list.map((e) => e.div)));
console.debug("区分リスト:", divList);

interface Filter {
  /** 区分 */
  div: string | number;
  /** 個数 */
  qty: number;
}

const filtering = (list: Demo[], divList: (string | number)[]): Filter[] => {
  let result: Filter[] = [];

  divList.forEach((div) => {
    const qty = list
      .filter((e) => e.div === div)
      .map((e) => e.qty)
      .reduce((s, e) => s + e, 0);
    result.push({ div, qty });
  });
  return result;
};

const filter = filtering(list, divList);
console.debug("区分の個数合計:", filter);
