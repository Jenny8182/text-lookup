const data = {
    "1": "你的答案是：选择比努力重要，去寻求更多的选择",
    "2": "你的答案是：相信自己，不要动摇",
    "3": "你的答案是：别忽视显而易见的东西，答案已经明朗，用心留意",
    "4": "你的答案是：草率行事可能会让你付出代价，想好再做决定",
    "5": "你的答案是：谋事在人，成事在天，结果可能让人意外",
    "6": "你的答案是：有决心就能成功，加油！",
    "7": "你的答案是：行动起来就能破局，加油！",
    "8": "你的答案是：不破不立，勇于改变，加油！",
    "9": "你的答案是：当局者迷，多参考信任的人的建议会有帮助",
    "10": "你的答案是：不能保证是否成功",
    "11": "你的答案是：答案就在前方，会以另一种形式让你知道",
    "12": "你的答案是：毫无疑问，心中所想即为答案",
    "13": "你的答案是：前方有惊喜在等着你",
    "14": "你的答案是：不用怀疑，这是肯定的",
    "15": "你的答案是：这有可能会伤害到别人，但更重要的是忠于自己",
    "16": "你的答案是：孤注一掷，会有好结果",
    "17": "你的答案是：大可不必，那只会浪费钱",
    "18": "你的答案是：值得冒险一试，或许会柳暗花明",
    "19": "你的答案是：目前最好观望等待",
    "20": "你的答案是：大可不必，那只会浪费钱",
    "21": "你的答案是：事情没那么简单，它超出了你的控制，但行好事，莫问前程",
    "22": "你的答案是：可能会惹上麻烦，谨慎处理",
    "23": "你的答案是：主动出击会对你有利，加油！",
    "24": "你的答案是：基本没问题",
    "25": "你的答案是：无需过度在意，把它交给时间",
    "26": "你的答案是：尽早做好它，不要拖",
    "27": "你的答案是：你终会发现你想知道的一切，答案已经在路上，耐心等待即可",
    "28": "你的答案是：发挥你的潜力，从心而行",
    "29": "你的答案是：是，但别强求",
    "30": "你的答案是：你需要时间去适应",
    "31": "你的答案是：今日时机不对，明天再来问问看",
    "32": "你的答案是：放平心态，轻松面对",
    "33": "你的答案是：试着换条路，考虑其他方法",
    "34": "你的答案是：学会适应和接受一些改变",
    "35": "你的答案是：要知道选择太多和太少一样很难，无法做抉择的时候，不妨先放一放",
    "36": "你的答案是：别再浪费时间了，现在就行动起来",
    "37": "你的答案是：答案是肯定的，这是你当下内心深处最坦诚的想法",
    "38": "你的答案是：三思而后行，多花些时间再决定",
    "39": "你的答案是：当然",
    "40": "你的答案是：灵活应对，见机行事，这件事没有标准答案",
    "41": "你的答案是：似乎已成事实",
    "42": "你的答案是：看开一点，允许意外发生",
    "43": "你的答案是：试着问问你的异性好友",
    "44": "你的答案是：道路曲折但美好的事物正在靠近，加油！",
    "45": "你的答案是：你会后悔的，谨慎处理",
    "46": "你的答案是：先冷静下来，尝试想想别的对策",
    "47": "你的答案是：随它去吧，对你来说没那么重要",
    "48": "你的答案是：更美好的在后面，往前看",
    "49": "你的答案是：时间会给出答案",
    "50": "你的答案是：相信直觉，保持初心",
    "51": "你的答案是：请不要抗拒，去接受",
    "52": "你的答案是：好运和爱将会降临，尽情享受吧",
    "53": "你的答案是：那一定很棒 ",
    "54": "你的答案是：先把问题记下来，专注当下",
    "55": "你的答案是：不要迫于压力草率行事",
    "56": "你的答案是：好事多磨，中途可能会出现小插曲，重要的是不要放弃",
    "57": "你的答案是：面对并享受它",
    "58": "你的答案是：这具有重要意义，谨慎对待",
    "59": "你的答案是：做两手准备，以免出现意外",
    "60": "你的答案是：一切都依赖于你的选择，不同的选择将让你走向完全不同的人生方向",
    "61": "你的答案是：转移注意力",
    "62": "你的答案是：离开是当下最好的选择",
    "63": "你的答案是：试试寻求其他人的帮助",
    "64": "你的答案是：事情将会变得很有趣，值得期待",
    "65": "你的答案是：不要犹豫，大胆冲",
    "66": "你的答案是：这件事时机未到，先完成其他事",
    "67": "你的答案是：不急，给自己一点时间",
    "68": "你的答案是：你比你想象中更厉害，现在的你完全有能力去做",
    "69": "你的答案是：拿出勇气，追随内心，那不值得纠结",
    "70": "你的答案是：那将影响别人对你的看法，如果你不在乎，那就继续",
    "71": "你的答案是：你会失望的，但喜怒哀乐都是人生课题，学会享受一切",
    "72": "你的答案是：你必须现在就行动",
    "73": "你的答案是：聚焦自身",
    "74": "你的答案是：目前来看，形势并不明朗",
    "75": "你的答案是：不要抱有成见",
    "76": "你的答案是：你必须现在就行动",
    "77": "你的答案是：那可能很难，但一定值得，加油！",
    "78": "你的答案是：走过的路，每一步路都算数，付出就会有回报，加油！",
    "79": "你的答案是：做最坏的打算，对意外要有思想准备",
    "80": "你的答案是：用心聆听，你会有答案",
    "81": "你的答案是：且行且思，你能得到你想要的",
    "82": "你的答案是：相信自己，你有能力应对加油！",
    "83": "你的答案是：尝试放下执念，聚焦自身",
    "84": "你的答案是：去做你应该做的事",
    "85": "你的答案是：快刀斩乱麻，当机立断是现在最好的方法",
    "86": "你的答案是：别在这上面下赌注",
    "87": "你的答案是：也许吧，存在一定可能性",
    "88": "你的答案是：去家人那里寻找能量",
    "89": "你的答案是：绝对不",
    "90": "你的答案是：别再犯傻和自欺欺人了",
    "91": "你的答案是：表示怀疑",
    "92": "你的答案是：这对你来说意义非凡",
    "93": "你的答案是：不可能失败",
    "94": "你的答案是：你需要掌握更多信息",
    "95": "你的答案是：用不了多久，情况就会有转机",
    "96": "你的答案是：试着问问你最好的朋友",
    "97": "你的答案是：万物有它运行的规律，顺其自然",
    "98": "你的答案是：试着问问你最好的朋友",
    "99": "你的答案是：这时不要再自找麻烦",
    "100": "你的答案是：先做别的事，这件事可以晚一点处理",
    "101": "你的答案是：尝试一种更可能的解决方案",
    "102": "你的答案是：先做别的事，这件事可以晚一点处理",
    "103": "你的答案是：先绕开难题去做更重要的事儿，这可能会让状况变得更容易",
    "104": "你的答案是：投硬币来做决定吧，硬币抛弃的那一刻，你希望是什么那就是答案",
    "105": "你的答案是：影响结果的因素是多样的，你须要全面思考",
    "106": "你的答案是：风雨已过，你终将如愿",
    "107": "你的答案是：只要你想就可行",
    "108": "你的答案是：走出去看看更广阔的世界",
    "109": "你的答案是：现在的你比以往任何时候都清楚状况，跟随内心，忠于自己",
    "110": "你的答案是：心怀感恩",
    "111": "你的答案是：或许等你再年长些就明白了，到时你的心境会完全不一样",
    "112": "你的答案是：这将引起轰动，去享受掌声和欢乐吧！",
    "113": "你的答案是：放下顾虑，放手一搏，你没什么可失去的",
    "114": "你的答案是：一切都很顺利，事情会朝目标发展",
    "115": "你的答案是：需要做更多的努力，就能达到胜利的彼岸，加油！",
    "116": "你的答案是：时机总会到来，请耐心等待",
    "117": "你的答案是：这次不算，默念5秒钟，再试一次",
    "118": "你的答案是：你不得不妥协",
    "119": "你的答案是：现在的担忧是暂时的，这件事很快就能解决，你会得到满意的答案",
    "120": "你的答案是：十分确定",
    "121": "你的答案是：十分确定",
    "122": "你的答案是：这还不确定，再多多努力，加油！",
    "123": "你的答案是：谨慎处理",
    "124": "你的答案是：不留退路，全力以赴",
    "125": "你的答案是：当前这不可行，重新考虑下",
    "126": "你的答案是：试试寻求母亲的帮助",
    "127": "你的答案是：如果你独自一人就不要做",
    "128": "你的答案是：无须担忧",
    "129": "你的答案是：保持开放的心态，包容一切可能会出现的结果",
    "130": "你的答案是：你会为自己的努力感到高兴，加油！",
    "131": "你的答案是：发挥你的长处，使用你的想象力",
    "132": "你的答案是：但行好事，莫问前程，结果终能如愿！",
    "133": "你的答案是：忠于内心，顺从你的意愿",
    "134": "你的答案是：聚焦自身，先做好自己的事",
    "135": "你的答案是：不要怀疑",
    "136": "你的答案是：是时候做新打算了",
    "137": "你的答案是：别再挣扎，放下吧",
    "138": "你的答案是：合作将是关键",
    "139": "你的答案是：现在不是合适的时机，再等等",
    "140": "你的答案是：莫等待，内心会指引你到达",
    "141": "你的答案是：事情会变得复杂，相关问题可能会出现",
    "142": "你的答案是：有舍才有得，你可能不得不放弃一些东西",
    "143": "你的答案是：遵守规则，将会更顺利",
    "144": "你的答案是：有舍才有得，你可能不得不放弃一些东西",
    "145": "你的答案是：事情将遂你心意",
    "146": "你的答案是：赌一把运气",
    "147": "你的答案是：结果是乐观的",
    "148": "你的答案是：你需要自己想办法解决这件事",
    "149": "你的答案是：注意细节",
    "150": "你的答案是：走去户外，打开内心，大自然会给你灵感",
    "151": "你的答案是：抛开枷锁，你可以应对的，加油！",
    "152": "你的答案是：这是不明智的",
    "153": "你的答案是：这需要大量的努力，加油！",
    "154": "你的答案是：遵从内心，不要勉强自己",
    "155": "你的答案是：享受这次体验",
    "156": "你的答案是：要付出坚持不懈的努力，加油！",
    "157": "你的答案是：那仍旧无法预测",
    "158": "你的答案是：值得冒险一次",
    "159": "你的答案是：做些改变",
    "160": "你的答案是：不要陷人到情绪之中，尽快跳出来",
    "161": "你的答案是：试试询问身边有智慧的人的建议",
    "162": "你的答案是：列出否定的理由，如果你经过思考后，列出否定的理由仍然肯定时，那就证明它真的该被肯定",
    "163": "你的答案是：要有耐心",
    "164": "你的答案是：随他去吧，不那么重要",
    "165": "你的答案是：现在所做的事是正确的，相信自己的判断，继续吧",
    "166": "你的答案是：别忘记享受乐趣",
    "167": "你的答案是：为了做出最好的决定，务必保持冷静，考虑周全再行动",
    "168": "你的答案是：可以尝试一个更没把握的方法，剑走偏锋也许会有出其不意的效果",
    "169": "你的答案是：不要妄下赌注",
    "170": "你的答案是：那可能已无法改变",
    "171": "你的答案是：寻求一些帮助能确保你成功",
    "172": "你的答案是：你肯定会获得支持",
    "173": "你的答案是：当局者迷，身处漩涡中心是看不到事情样貌的，试着跳脱出来再看看",
    "174": "你的答案是：决定权不在你这",
    "175": "你的答案是：先主后次，先处理首要的事，再处理其它",
    "176": "你的答案是：这还不确定，极可能再发生变故",
    "177": "你的答案是：你会收获惊喜",
    "178": "你的答案是：你会收获惊喜",
    "179": "你的答案是：列出理由，如果连理由都没有，那将毫无意义",
    "180": "你的答案是：马上停下来",
    "181": "你的答案是：不要告诉别人",
    "182": "你的答案是：那将是一件乐事，你生活将开启新篇章",
    "183": "你的答案是：列出理由，看看是否能先说服自己",
    "184": "你的答案是：放弃之前的想法",
    "185": "你的答案是：你短期不会忘记这些，和问题共存，与自己和解",
    "186": "你的答案是：放弃你现在的想法",
    "187": "你的答案是：有理由保持乐观",
    "188": "你的答案是：你会发现自己难以妥协",
    "189": "你的答案是：改变不会很快发生",
    "190": "你的答案是：有些障碍需要克服",
    "191": "你的答案是：果断放弃",
    "192": "你的答案是：要做就做好，否则就不要去做",
    "193": "你的答案是：没有看上去那么简单，深表怀疑",
    "194": "你的答案是：最好的解决方法可能不太明显，但用心总能发现",
    "195": "你的答案是：去做，看看会发生什么",
    "196": "你的答案是：你需要更多信息才有胜算",
    "197": "你的答案是：开阔视野",
    "198": "你的答案是：站在多个角度看看会更清楚些",
    "199": "你的答案是：结果可能会令人震惊",
    "200": "你的答案是：节省你的精力，把它用在更有意义的事情上吧",
    "201": "你的答案是：管它呢",
    "202": "你的答案是：那将引起一些纷争",
    "203": "你的答案是：相关问题可能会浮出水面，答案很快会揭晓",
    "204": "你的答案是：试着寻求其他人的建议",
    "205": "你的答案是：值得付出努力，加油！",
    "206": "你的答案是：对自己负起责任来",
    "207": "你的答案是：不值得",
    "208": "你的答案是：试着寻求爸爸的建议或帮助",
    "209": "你的答案是：把心中的困惑和别人倾诉",
    "210": "你的答案是：看来还行",
    "211": "你的答案是：心急吃不了热豆腐，等待转机",
    "212": "你的答案是：你可能会遭遇反对",
    "213": "你的答案是：勇敢地表达自己的真实想法",
    "214": "你的答案是：聪明的人会把这看作一个时机并抓住它",
    "215": "你的答案是：你一定得这么做",
    "216": "你的答案是：享受这个过程",
    "217": "你的答案是：不识庐山真面目，只缘身在此山中，跳脱出来再看看",
    "218": "你的答案是：不要勉强自己",
    "219": "你的答案是：等待",
    "220": "你的答案是：不识庐山真面目，只缘身在此山中，跳脱出来再看看",
    "221": "你的答案是：大风起于青萍之末，不在意的小细节，往往蕴藏着巨大的能量",
    "222": "你的答案是：试着寻求爸爸的建议或帮助",
    "223": "你的答案是：那一定很棒",
    "224": "你的答案是：你可能不得不放弃一些东西",
    "225": "你的答案是：你不会失望的",
    "226": "你的答案是：是该走的时候了",
    "227": "你的答案是：先做好自己的事，你期望的结果就会出现",
    "228": "你的答案是：列出否定的理由",
    "229": "你的答案是：你需要考虑其他方法",
    "230": "你的答案是：值得付出努力",
    "231": "你的答案是：这将变得有趣，值得期待！",
    "232": "你的答案是：不用纠结太多，欣然接受",
    "233": "你的答案是：试着寻求其他人的建议",
    "234": "你的答案是：做一次改变",
    "235": "你的答案是：说出来吧",
    "236": "你的答案是：投硬币来做决定吧，硬币抛弃的那一刻，你希望是什么那就是答案",
    "237": "你的答案是：梳理清楚先后顺序，按照先后顺序去做就好了",
    "238": "你的答案是：慷慨大度些",
    "239": "你的答案是：心怀感恩",
    "240": "你的答案是：有些想当然，重新考虑下",
    "241": "你的答案是：你必须随机应变",
    "242": "你的答案是：采取冒险的态度，是时候更进一步了",
    "243": "你的答案是：你可能遭到反对，但请忠于内心",
    "244": "你的答案是：不要抗拒，去接受",
    "245": "你的答案是：放弃之前的打算",
    "246": "你的答案是：有障碍需要克服",
    "247": "你的答案是：做出改变",
    "248": "你的答案是：无法保证",
    "249": "你的答案是：算了吧",
    "250": "你的答案是：合作是关键",
    "251": "你的答案是：把这看作你的机会，全力以赴",
    "252": "你的答案是：你可能遭到反对，但请忠于内心",
    "253": "你的答案是：保守秘密，直到实现"
};