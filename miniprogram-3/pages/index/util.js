const labelMap = {
  "0": "\u53ef\u56de\u6536\u7269_\u91d1\u5c5e\u98df\u54c1\u7f50",
  "1": "\u5176\u4ed6\u5783\u573e_PE\u5851\u6599\u888b",
  "2": "\u5176\u4ed6\u5783\u573e_\u6c61\u635f\u5851\u6599",
  "3": "\u5176\u4ed6\u5783\u573e_\u6e7f\u7eb8\u5dfe",
  "4": "\u5176\u4ed6\u5783\u573e_\u521b\u53ef\u8d34",
  "5": "\u53ef\u56de\u6536\u7269_\u5439\u98ce\u673a",
  "6": "\u5176\u4ed6\u5783\u573e_\u4fbf\u5229\u8d34",
  "7": "\u5176\u4ed6\u5783\u573e_\u773c\u955c",
  "8": "\u53a8\u4f59\u5783\u573e_\u86cb\u7cd5",
  "9": "\u53ef\u56de\u6536\u7269_\u53cc\u80a9\u5305",
  "10": "\u53ef\u56de\u6536\u7269_\u5e03\u6761",
  "11": "\u53a8\u4f59\u5783\u573e_\u8c46\u8150",
  "12": "\u5176\u4ed6\u5783\u573e_\u9910\u76d2",
  "13": "\u53a8\u4f59\u5783\u573e_\u85af\u7247",
  "14": "\u6709\u5bb3\u5783\u573e_\u73bb\u7483\u706f\u7ba1",
  "15": "\u53ef\u56de\u6536\u7269_\u70df\u7070\u7f38",
  "16": "\u53ef\u56de\u6536\u7269_\u52fa\u5b50",
  "17": "\u5176\u4ed6\u5783\u573e_\u70df\u8482",
  "18": "\u53a8\u4f59\u5783\u573e_\u51b0\u7cd6\u846b\u82a6",
  "19": "\u53a8\u4f59\u5783\u573e_\u897f\u74dc\u76ae",
  "20": "\u53ef\u56de\u6536\u7269_\u6bdb\u7ed2\u73a9\u5177",
  "21": "\u53ef\u56de\u6536\u7269_\u88ab\u5b50",
  "22": "\u53ef\u56de\u6536\u7269_\u7827\u677f",
  "23": "\u53ef\u56de\u6536\u7269_\u5feb\u9012\u7eb8\u888b",
  "24": "\u53ef\u56de\u6536\u7269_\u6905\u5b50",
  "25": "\u53ef\u56de\u6536\u7269_\u7eb8\u888b",
  "26": "\u53a8\u4f59\u5783\u573e_\u82f9\u679c",
  "27": "\u53ef\u56de\u6536\u7269_\u952e\u76d8",
  "28": "\u53a8\u4f59\u5783\u573e_\u85af\u6761",
  "29": "\u53ef\u56de\u6536\u7269_\u954a\u5b50",
  "30": "\u53ef\u56de\u6536\u7269_\u53f0\u706f",
  "31": "\u53ef\u56de\u6536\u7269_\u7535\u71a8\u6597",
  "32": "\u53ef\u56de\u6536\u7269_\u684c\u5b50",
  "33": "\u53ef\u56de\u6536\u7269_\u73bb\u7483\u58f6",
  "34": "\u5176\u4ed6\u5783\u573e_\u767e\u6d01\u5e03",
  "35": "\u53a8\u4f59\u5783\u573e_\u7c89\u6761",
  "36": "\u53ef\u56de\u6536\u7269_\u7eb8\u724c",
  "37": "\u53a8\u4f59\u5783\u573e_\u8695\u8c46",
  "38": "\u53ef\u56de\u6536\u7269_\u5316\u5986\u54c1\u74f6",
  "39": "\u5176\u4ed6\u5783\u573e_\u8349\u5e3d",
  "40": "\u53a8\u4f59\u5783\u573e_\u9999\u8549\u76ae",
  "41": "\u53ef\u56de\u6536\u7269_\u7eb8\u5f20",
  "42": "\u53ef\u56de\u6536\u7269_\u71c3\u6c14\u74f6",
  "43": "\u53ef\u56de\u6536\u7269_\u949f\u8868",
  "44": "\u53ef\u56de\u6536\u7269_\u70ed\u6c34\u74f6",
  "45": "\u53ef\u56de\u6536\u7269_\u6728\u8d28\u9505\u94f2",
  "46": "\u53ef\u56de\u6536\u7269_\u526a\u5200",
  "47": "\u53a8\u4f59\u5783\u573e_\u5927\u9aa8\u5934",
  "48": "\u53ef\u56de\u6536\u7269_\u7535\u52a8\u5377\u53d1\u68d2",
  "49": "\u53ef\u56de\u6536\u7269_\u4fdd\u6e29\u676f",
  "50": "\u53a8\u4f59\u5783\u573e_\u9762\u5305",
  "51": "\u53a8\u4f59\u5783\u573e_\u516b\u5b9d\u7ca5",
  "52": "\u53ef\u56de\u6536\u7269_\u9f20\u6807",
  "53": "\u53a8\u4f59\u5783\u573e_\u9e21\u7fc5",
  "54": "\u53ef\u56de\u6536\u7269_\u5305",
  "55": "\u53ef\u56de\u6536\u7269_\u6728\u8d28\u68b3\u5b50",
  "56": "\u53ef\u56de\u6536\u7269_\u5c3a\u5b50",
  "57": "\u5176\u4ed6\u5783\u573e_\u6bdb\u5dfe",
  "58": "\u53a8\u4f59\u5783\u573e_\u8349\u8393",
  "59": "\u53ef\u56de\u6536\u7269_\u5976\u76d2",
  "60": "\u53ef\u56de\u6536\u5783\u573e_\u5e3d\u5b50",
  "61": "\u53ef\u56de\u6536\u7269_\u5361",
  "62": "\u53a8\u4f59\u5783\u573e_\u756a\u8304",
  "63": "\u53ef\u56de\u6536\u7269_\u6c34\u58f6",
  "64": "\u53a8\u4f59\u5783\u573e_\u9c7c\u9aa8",
  "65": "\u53ef\u56de\u6536\u7269_\u7eb8\u7bb1",
  "66": "\u53ef\u56de\u6536\u7269_\u8def\u7531\u5668",
  "67": "\u5176\u4ed6\u5783\u573e_\u53e3\u7f69",
  "68": "\u53ef\u56de\u6536\u7269_\u624b\u673a",
  "69": "\u6709\u5bb3\u5783\u573e_\u5e72\u7535\u6c60",
  "70": "\u53ef\u56de\u6536\u7269_\u6795\u5934",
  "71": "\u5176\u4ed6\u5783\u573e_\u5e72\u71e5\u5242",
  "72": "\u53a8\u4f59\u5783\u573e_\u80a0",
  "73": "\u53ef\u56de\u6536\u7269_\u71c3\u6c14\u7076",
  "74": "\u53ef\u56de\u6536\u7269_\u8033\u673a",
  "75": "\u53ef\u56de\u6536\u7269_\u86cb\u7cd5\u76d2",
  "76": "\u53ef\u56de\u6536\u7269_\u96e8\u4f1e",
  "77": "\u5176\u4ed6\u5783\u573e_\u7af9\u7b77",
  "78": "\u53ef\u56de\u6536\u7269_\u5355\u80a9\u5305",
  "79": "\u53ef\u56de\u6536\u7269_\u8ba2\u4e66\u673a",
  "80": "\u53ef\u56de\u6536\u7269_\u9065\u63a7\u5668",
  "81": "\u53a8\u4f59\u5783\u573e_\u80e1\u841d\u535c",
  "82": "\u53ef\u56de\u6536\u7269_\u9489\u5b50",
  "83": "\u53a8\u4f59\u5783\u573e_\u54c8\u5bc6\u74dc",
  "84": "\u53ef\u56de\u6536\u7269_\u7b3c\u5b50",
  "85": "\u6709\u5bb3\u5783\u573e_\u706f\u6ce1",
  "86": "\u5176\u4ed6\u5783\u573e_\u9e21\u6bdb\u63b8",
  "87": "\u5176\u4ed6\u5783\u573e_\u53a8\u623f\u624b\u5957",
  "88": "\u53a8\u4f59\u5783\u573e_\u7518\u8517",
  "89": "\u5176\u4ed6\u5783\u573e_\u4e00\u6b21\u6027\u676f\u5b50",
  "90": "\u53ef\u56de\u6536\u7269_\u63d2\u7ebf\u677f",
  "91": "\u53ef\u56de\u6536\u7269_\u5851\u6599\u73a9\u5177",
  "92": "\u53ef\u56de\u6536\u7269_\u94c1\u4e1d\u7403",
  "93": "\u6709\u5bb3\u5783\u573e_\u8fc7\u671f\u836f\u7269",
  "94": "\u53ef\u56de\u6536\u7269_\u5145\u7535\u5b9d",
  "95": "\u53ef\u56de\u6536\u7269_\u8f6e\u80ce",
  "96": "\u6709\u5bb3\u5783\u573e_\u80f6\u6c34",
  "97": "\u5176\u4ed6\u5783\u573e_\u82cd\u8747\u62cd",
  "98": "\u53a8\u4f59\u5783\u573e_\u8336\u53f6",
  "99": "\u5176\u4ed6\u5783\u573e_\u6253\u706b\u673a",
  "100": "\u53ef\u56de\u6536\u7269_\u6ce1\u6cab\u76d2\u5b50",
  "101": "\u53a8\u4f59\u5783\u573e_\u8089\u7c7b",
  "102": "\u53ef\u56de\u6536\u7269_\u98df\u7528\u6cb9\u6876",
  "103": "\u53ef\u56de\u6536\u7269_\u624b\u94fe",
  "104": "\u53ef\u56de\u6536\u7269_\u6d17\u53d1\u6c34\u74f6",
  "105": "\u53a8\u4f59\u5783\u573e_\u83dc\u6839\u83dc\u53f6",
  "106": "\u53ef\u56de\u6536\u7269_\u7535\u98ce\u6247",
  "107": "\u6709\u5bb3\u5783\u573e_\u6740\u866b\u5242",
  "108": "\u53ef\u56de\u6536\u7269_\u706d\u706b\u5668",
  "109": "\u53ef\u56de\u6536\u7269_\u4e52\u4e53\u7403\u62cd",
  "110": "\u6709\u5bb3\u5783\u573e_\u7ebd\u6263\u7535\u6c60",
  "111": "\u53a8\u4f59\u5783\u573e_\u5496\u5561",
  "112": "\u6709\u5bb3\u5783\u573e_\u836f\u74f6",
  "113": "\u5176\u4ed6\u5783\u573e_\u9a8c\u5b55\u68d2",
  "114": "\u53ef\u56de\u6536\u7269_\u996e\u6599\u74f6",
  "115": "\u53ef\u56de\u6536\u7269_\u978b\u5b50",
  "116": "\u53ef\u56de\u6536\u7269_\u5851\u6599\u76d2",
  "117": "\u53ef\u56de\u6536\u7269_\u6613\u62c9\u7f50",
  "118": "\u53a8\u4f59\u5783\u573e_\u6c49\u5821",
  "119": "\u53ef\u56de\u6536\u7269_\u9152\u74f6",
  "120": "\u53ef\u56de\u6536\u7269_\u63d2\u5934\u7535\u7ebf",
  "121": "\u53a8\u4f59\u5783\u573e_\u6b8b\u6e23\u5269\u996d",
  "122": "\u5176\u4ed6\u5783\u573e_\u7834\u788e\u82b1\u76c6\u53ca\u789f\u7897",
  "123": "\u53ef\u56de\u6536\u7269_\u5851\u6599\u7897\u76c6",
  "124": "\u53ef\u56de\u6536\u7269_\u8ba1\u7b97\u5668",
  "125": "\u53ef\u56de\u6536\u7269_\u4f53\u91cd\u79e4",
  "126": "\u53ef\u56de\u6536\u7269_\u6728\u6876",
  "127": "\u53ef\u56de\u6536\u7269_\u6863\u6848\u888b",
  "128": "\u5176\u4ed6\u5783\u573e_\u7b14",
  "129": "\u5176\u4ed6\u5783\u573e_\u7259\u7b7e",
  "130": "\u53ef\u56de\u6536\u7269_\u5851\u6599\u8863\u67b6",
  "131": "\u53a8\u4f59\u5783\u573e_\u74dc\u5b50",
  "132": "\u53ef\u56de\u6536\u7269_\u8c03\u6599\u74f6",
  "133": "\u53ef\u56de\u6536\u7269_\u7535\u52a8\u5243\u987b\u5200",
  "134": "\u53ef\u56de\u6536\u7269_\u7535\u8def\u677f",
  "135": "\u53a8\u4f59\u5783\u573e_\u6a59\u5b50",
  "136": "\u53ef\u56de\u6536\u7269_\u6253\u6c14\u7b52",
  "137": "\u53a8\u4f59\u5783\u573e_\u86cb\u631e",
  "138": "\u53a8\u4f59\u5783\u573e_\u70e4\u9e21",
  "139": "\u5176\u4ed6\u5783\u573e_\u80f6\u5e26",
  "140": "\u6709\u5bb3\u5783\u573e_\u6e29\u5ea6\u8ba1",
  "141": "\u5176\u4ed6\u5783\u573e_\u7259\u5237",
  "142": "\u53ef\u56de\u6536\u7269_\u889c\u5b50",
  "143": "\u53ef\u56de\u6536\u7269_\u9505",
  "144": "\u53a8\u4f59\u5783\u573e_\u706b\u9f99\u679c",
  "145": "\u53a8\u4f59\u5783\u573e_\u86cb",
  "146": "\u5176\u4ed6\u5783\u573e_\u6413\u6fa1\u5dfe",
  "147": "\u6709\u5bb3\u5783\u573e_\u84c4\u7535\u6c60",
  "148": "\u53ef\u56de\u6536\u7269_\u62c9\u6746\u7bb1",
  "149": "\u5176\u4ed6\u5783\u573e_\u4e00\u6b21\u6027\u68c9\u7b7e",
  "150": "\u53a8\u4f59\u5783\u573e_\u997c\u5e72",
  "151": "\u5176\u4ed6\u5783\u573e_\u6d82\u6539\u5e26",
  "152": "\u53a8\u4f59\u5783\u573e_\u83e0\u841d",
  "153": "\u53a8\u4f59\u5783\u573e_\u5df4\u65e6\u6728",
  "154": "\u53ef\u56de\u6536\u7269_\u73bb\u7483\u676f",
  "155": "\u53ef\u56de\u6536\u7269_\u7535\u78c1\u7089",
  "156": "\u53ef\u56de\u6536\u7269_\u65e7\u8863\u670d",
  "157": "\u53a8\u4f59\u5783\u573e_\u51b0\u6fc0\u51cc"
}

module.exports = {
  labelMap
}
