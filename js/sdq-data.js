/* 長處和困難調查表（家長版，4–17 歲）
 * 資料來源：sdqinfo.org 官方中文版（香港中文大學等翻譯及驗證）
 * 下載頁：https://www.sdqinfo.org/py/sdqinfo/b3.py?language=Chinese
 * 計分說明（英文）：https://www.sdqinfo.org/c1.html
 * © Robert Goodman, 2005。非商業用途可免費使用。
 */
window.SDQ_DATA = {
  title: "長處和困難調查表（家長版）",
  ageRange: "4 至 17 歲",
  reference: "請根據你的孩子過去六個月的行為來回答。",
  // 答案：不真實=0、有點真實=1、完全真實=2
  options: ["不真實", "有點真實", "完全真實"],
  // 25 題原文照錄官方中文版；reverse=true 的題目反向計分（2→0, 1→1, 0→2）
  items: [
    { text: "能體諒到別人的感受", scale: "prosocial" },
    { text: "不安定、過分活躍、不能長久靜止", scale: "hyper" },
    { text: "經常抱怨頭痛、肚子痛或噁心", scale: "emotion" },
    { text: "很樂意與別的小孩分享東西(糖果、玩具、筆、等等)", scale: "prosocial" },
    { text: "經常發脾氣或易怒", scale: "conduct" },
    { text: "頗孤獨，比較多自己玩", scale: "peer" },
    { text: "一般來說比較順從，通常是成年人要求要做的都肯做", scale: "conduct", reverse: true },
    { text: "有很多擔憂，經常表現出憂慮", scale: "emotion" },
    { text: "如果有人受傷、沮喪 或是生病，都很樂意提供幫助", scale: "prosocial" },
    { text: "當坐著時，會持續不斷地擺弄手腳或扭動身子", scale: "hyper" },
    { text: "至少有一個好朋友", scale: "peer", reverse: true },
    { text: "經常與別的小孩吵架或欺負他們", scale: "conduct" },
    { text: "經常不高興、情緒低落或哭泣", scale: "emotion" },
    { text: "一般來說，受別的小孩所喜歡", scale: "peer", reverse: true },
    { text: "容易分心，不能全神貫注", scale: "hyper" },
    { text: "在新的情況下，會緊張或愛黏人，容易失去信心", scale: "emotion" },
    { text: "對年紀小的小孩和善", scale: "prosocial" },
    { text: "經常撒謊或欺騙", scale: "conduct" },
    { text: "受別的小孩作弄或欺負", scale: "peer" },
    { text: "經常自願地幫助別人(父母、老師或其他小孩)", scale: "prosocial" },
    { text: "做事前會思考", scale: "hyper", reverse: true },
    { text: "從家裡、學校或其他地方偷東西", scale: "conduct" },
    { text: "跟成年人相處比跟小孩相處融洽", scale: "peer" },
    { text: "對很多事物感到害怕，容易受驚嚇", scale: "emotion" },
    { text: "做事情能做到底，注意力持久", scale: "hyper", reverse: true }
  ],
  scales: {
    emotion: {
      name: "情緒症狀",
      desc: "例如身體不適的投訴、擔憂、不開心、黏人、害怕。",
      bands: [[0, 3], [4, 4], [5, 6], [7, 10]]
    },
    conduct: {
      name: "品行問題",
      desc: "例如發脾氣、不順從、吵架欺負人、撒謊、偷東西。",
      bands: [[0, 2], [3, 3], [4, 5], [6, 10]]
    },
    hyper: {
      name: "專注力不足／過度活躍",
      desc: "例如坐不住、手腳動不停、容易分心、做事欠思考、注意力不持久。",
      bands: [[0, 5], [6, 7], [8, 8], [9, 10]]
    },
    peer: {
      name: "朋輩相處問題",
      desc: "例如孤獨、沒有好朋友、不受同輩喜歡、被作弄或欺負。",
      bands: [[0, 2], [3, 3], [4, 4], [5, 10]]
    },
    prosocial: {
      name: "親社會行為（長處）",
      desc: "例如體諒、分享、幫助別人。這一項分數越低才越需要留意。",
      bands: [[8, 10], [7, 7], [6, 6], [0, 5]], // 由好到差；分數越低代表長處越少
      lowerIsWorse: true
    },
    total: {
      name: "困難總分",
      desc: "上面四個困難範疇（情緒、品行、專注力、朋輩）的總和，0–40 分。",
      bands: [[0, 13], [14, 16], [17, 19], [20, 40]]
    }
  },
  // 四級劃分（家長版，英國較新的分層）：接近平均 / 略高 / 高 / 非常高
  bandLabels: ["接近平均", "略高", "高", "非常高"],
  prosocialBandLabels: ["接近平均", "略低", "低", "非常低"]
};
