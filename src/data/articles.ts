import One from '../assets/one.jpg';
import Two from '../assets/two.jpg';
import Three from '../assets/three.jpg';
import Four from '../assets/four.jpg';
import Five from '../assets/five.jpg';
import Six from '../assets/six.jpg';
import Seven from '../assets/seven.jpg';
import Eight from '../assets/eight.jpg';
import Nine from '../assets/nine.jpg';
import Ten from '../assets/ten.jpg';
import Eleven from '../assets/eleven.jpg';
import Twelve from '../assets/twelve.jpg';
import mT1 from '../assets/mt1.jpg';
import mT2 from '../assets/mt2.jpg';
import mT3 from '../assets/mt3.jpg';
import mT4 from '../assets/mt4.jpg';
import mT5 from '../assets/mt5.jpg';
import mT6 from '../assets/mt6.jpg';
import langMan from '../assets/langman.jpg';
import langMan1 from '../assets/langman1.jpg';
import langMan2 from '../assets/langman2.jpg';
import langMan3 from '../assets/langman3.jpg';
import langMan4 from '../assets/langman4.jpg';
import langMan5 from '../assets/langman5.jpg';
import langMan6 from '../assets/langman6.jpg';
import langMan7 from '../assets/langman7.jpg';
import langMan8 from '../assets/langman8.jpg';
import lingYang1 from '../assets/lingyang1.jpg';
import lingYang2 from '../assets/lingyang2.jpg';
import sanYang from '../assets/sanyang.jpg';
import sanYang1 from '../assets/sy1.jpg';
import sanYang2 from '../assets/sy2.jpg';
import xueBeng from '../assets/xuebeng.jpg';
import xueBeng1 from '../assets/xb1.jpg';
import xueBeng2 from '../assets/xb2.jpg';
import yingLi1 from '../assets/yl1.jpg';
import yingLi2 from '../assets/yl2.jpg';
import yingLi3 from '../assets/yl3.jpg';
import yingLi4 from '../assets/yl4.jpg';
import yingLi5 from '../assets/yl5.jpg';
import yingLi6 from '../assets/yl6.jpg';
import huiJia from '../assets/huijia.jpg';
import hJ1 from '../assets/huijia1.jpg';
import hJ2 from '../assets/huijia2.jpg';

export interface Article {
  id: number;
  title: string;
  date: string;
  author: string;
  images?: string[]; 
  summary?: string;
  contentSections: { title: string; text: string; code?: string }[];
  tags: string[];
}

const articlesData: Article[] = [
  {
    id: 1,
    title: "💌 十二封信",
    date: "2025-07-01",
    author: "WYZS",
    images: [One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Eleven, Twelve],
    summary: "王源出道12周年自白式创作，以十二封信为载体，写给过往、自我与陪伴者，藏着十二年成长的挣扎与坚定。",
    contentSections: [
      {
        title: "创作灵感",
        text: `　　《十二封信》源于王源出道十二周年的成长复盘，从13岁初登舞台到25岁站上鸟巢，十二年时光里的迷茫、坚持、感恩与和解，化作十二封“时光书信”。创作时，他以自我对话的视角，将每一段人生阶段的心境落笔，既有对过往的回望，也有对自我的审视，更有对陪伴者的致谢，把十二年的故事藏进旋律与文字里。`
      },
      {
        title: "歌曲内核",
        text: `　　《十二封信》是一封跨越十二年的成长自白书。它以“书信”为意象，逐封诉说从青涩少年到成熟歌手的蜕变，藏着自我怀疑的挣扎、未曾放弃的坚定，以及与粉丝双向奔赴的温情。歌曲的核心，是与过去的自己和解，与当下的自己同行，与陪伴的人相守，告诉每一个听者：那些奋力前行的时光、跌倒又爬起的瞬间，都值得被铭记与珍惜。`
      }
    ],
    tags: ["王源", "十二封信", "成长自白", "情书", "在星穹下狂奔"]
  },

  {
    id: 2,
    title: "✨ 牧童",
    date: "2025-07-02",
    author: "WYZS",
    images: [mT1, mT2, mT3, mT4, mT5, mT6], 
    summary: "一曲献给所有生命和生命联结的温暖之歌，愿世界上最好的我和你，永远为彼此闪烁。",
    contentSections: [
      {
        title: "歌曲内核",
        text: `　　星穹见过这世界上所有美丽的生命，无论是飞鸟还是蜉蝣，是远古的巨兽还是渺小的我们，所有的生灵都曾放牧星群，也都被星穹照耀着。所有的生命都活着或者活过，不论在什么样的世纪和时空，万物都平等地享受星空。当浩瀚的宇宙浓缩入最微小的对视之中，渺小如我们个体，只要有爱存在，依旧能容纳整个星穹的壮丽。“一起一起存在”的反复强调，是生灵与星群相互照料的寓言，唤醒和实现生命本真的联结。而爱的核心是看到并珍视每一个生命个体独特的、不可替代的内在光芒，并愿意“为彼此闪烁”，相互支持、相互照亮。`
      },
      {
        title: "歌曲总结",
        text: "　　《牧童》是一曲献给所有生命和生命联结的温暖之歌，愿世界上最好的我和你，永远为彼此闪烁。"
      }
    ],
    tags: ["王源", "牧童", "温暖治愈", "在星穹下狂奔"]
  },

  {
    id: 3,
    title: "🌃 别回家了",
    date: "2025-07-03",
    author: "WYZS",
    images: [huiJia, hJ1, hJ2], 
    summary: "每个人都拥有一处属于自己的精神安全港，安全港中栖息着热爱和月光，创造着狂欢与快乐。",
    contentSections: [
      {
        title: "歌曲意象",
        text: `　　当城市沉入午夜，灯海照亮星穹，狂奔的目的地通往脑海，渴望快乐的人用对视建造了一个属于自己的乌托邦。这里是秩序之外的快乐领地，是用音符组成的欢欣迷宫，勇敢的冒险者在这里找到方向。`
      },
      {
        title: "歌曲内核",
        text: `　　《别回家了》是一次对灵魂的深刻暗示，告诉我们除了“家”之外，每个人都拥有一处属于自己的精神安全港，安全港中栖息着热爱和月光，创造着狂欢与快乐。它的存在告诉我们：当我们一起向着星穹下的快乐领地狂奔，才算真正踏上了自己的归途。`
      }
    ],
    tags: ["王源", "别回家了", "精神乌托邦", "在星穹下狂奔"]
  },

  {
    id: 4,
    title: "🪐 浪漫星球",
    date: "2025-07-04",
    author: "WYZS",
    images: [langMan, langMan1, langMan2, langMan3, langMan4, langMan5, langMan6, langMan7, langMan8], 
    summary: "A Planet Called Us —— 在这颗星球上，尽情奔跑，尽兴活着，已是浪漫!",
    contentSections: [
      {
        title: "宇宙意象",
        text: `　　每过一个水星日，地球要公转58.6圈；而金星上每过一天，地球要经历225个昼夜。宇宙中如果有一颗浪漫星球，那先会是一双会爱的眼睛。交换一次眼神的默契，足以抵抗时间的洪流，而爱之所在，便是亲手点亮的宇宙中心。此时此刻，地平线变得清晰，宇宙重建了秩序。`
      },
      {
        title: "歌曲内核",
        text: `　　这是勇敢表达爱的狂奔歌曲，狂奔的目的地并不执着于抵达某个物理终点，而在于这永不停歇的“环游”本身。我们，就是一整颗星球。A Planet Called Us —— 在这颗星球上，尽情奔跑，尽兴活着，已是浪漫!`
      }
    ],
    tags: ["王源", "浪漫星球", "爱意表达", "在星穹下狂奔"]
  },

  {
    id: 5,
    title: "❄️ 雪崩",
    date: "2025-07-05",
    author: "WYZS",
    images: [xueBeng, xueBeng1, xueBeng2], 
    summary: "灵魂穿越冰寒风暴后，对生命热度最倔强的确认，在窒息中重新识别呼吸的重量。",
    contentSections: [
      {
        title: "歌曲意象",
        text: `　　每个人的心里都有一座雪山。我们心中寂静的雪山下酝酿着什么？虚构的重逢在暗夜里生长，会不会最终在某个瞬息轰然崩塌？一场若有似无的痛，一个悬而未决的梦，梦越真切，剥离时的创口便越深彻。而崩塌后的废墟，是我们勇敢表达的“痛”，这时，在星穹之下狂奔的意义，才悄然浮现。`
      },
      {
        title: "歌曲内核",
        text: `　　因为“越难得，越波折，越深刻”的咏叹，并非沉沦的哀歌，而是灵魂穿越冰寒风暴后，对生命热度最倔强的确认，在窒息中重新识别呼吸的重量。也许，有些雪崩是大地剧烈脉动后，为孕育新的峰峦所做的深沉准备。《雪崩》用痛彻的歌词与旋律袒露未愈的冻伤，任由最汹涌的失去与最寂静的忍耐共同镌刻，从而继续挣扎着、跌撞着狂奔向内心真正的坐标。`
      },

    ],
    tags: ["王源", "雪崩", "内心独白", "在星穹下狂奔"]
  },

  {
    id: 6,
    title: "🦌 羚羊",
    date: "2025-07-06",
    author: "WYZS",
    images: [lingYang1, lingYang2], 
    summary: "“每个人都有自己的远方和羚羊”，当我们唱起《羚羊》，也正是努力和那个没有被“长大”吞噬的自己对话。",
    contentSections: [
      {
        title: "歌曲内核",
        text: `　　遗失的回声在时间的旷野里微弱，但却始终不会消泯。长大是一种收获，也是无可挽回的流散，所以《羚羊》是反方向的狂奔，它既是来路，也是某种意义上的归途。它是我们踏入时间之河前留在岸边的倒影，我们无法两次拥抱同一个自己，于是站在河岸的两边，隔空辨认，自我对话。`
      },
      {
        title: "创作灵感",
        text: `　　《羚羊》源于王源内心深处的一点回忆，小时候父亲的羚羊车，曾带他去往很多远方，在泥泞中穿越，在冰面上漂移，天南海北，四处驰骋。而现在，掌握了人生方向盘的他，在到达曾经的目的地之后，羚羊却也成了远方。
　　所以属于《羚羊》的符号，是一辆带我们驶向“过去”的车。它是对逝去的岁月的呼唤，也是对曾经的自己的呼唤；它是生命中永恒的缺失感；它不仅唱给成功者，也唱给失落者；唱给渴望理解的人，也唱给成为理解的那个人。
　　`
      }
    ],
    tags: ["王源", "羚羊", "童年回忆", "在星穹下狂奔"]
  },

  {
    id: 7,
    title: "🌌 全宇宙的引力",
    date: "2025-07-07",
    author: "WYZS",
    images: [yingLi1, yingLi2, yingLi3, yingLi4, yingLi5, yingLi6], 
    summary: "爱让我们选择彼此，在茫茫人海中相互守望，成为对方生命里永不偏移、永恒闪耀的坐标，相伴奔赴每一段征程。",
    contentSections: [
      {
        title: "歌曲主题",
        text: `　　看见渺小，然后去获得辽阔；直面瞬间，然后去缔造永恒。宇宙中每一颗星辰都有自己的轨迹，却又被同一份引力维系成璀璨的星穹，我们用“具体”对抗着虚无，找到自己的形状。而引力是一种浪漫力量，在这个信息和人类逐渐粒子化的时代，重新确立人与人之间的羁绊，用爱与陪伴在宇宙中镌刻闪亮的诗行。那些看似微不足道的连结——一个眼神、一句「我在」、一次并肩——构成了我们最坚实的引力场，狂奔不息，却不孤独。`
      }
    ],
    tags: ["王源", "全宇宙的引力", "羁绊与爱", "在星穹下狂奔"]
  },

  {
    id: 8,
    title: "📱 散养",
    date: "2025-07-08",
    author: "WYZS",
    images: [sanYang, sanYang1, sanYang2], 
    summary: "在数字洪流裹挟的时代里，重新审视工具与自我的边界，挣脱无形束缚，唤醒内心专注，夺回对自我精神世界的主导与掌控。",
    contentSections: [
      {
        title: "创作灵感",
        text: `　　《散养》的灵感来源于在一次聊天中同时拿起手机的动作，他们就此讨论——手机像一个更高维度的物种俯瞰一切，而我们则是被散养在这数字宇宙中的人类。信息时代吊诡的悖论，是人类发明了工具，最终却成了工具的寄生体，我们不再记忆事实，而是记忆如何检索事实。在这个巨大的信号塔下，我们既是受害者，也是共谋者。`
      },
      {
        title: "歌曲内核",
        text: `　　然而，《散养》并非是要我们砸碎手机、拒绝使用手机，而是唤醒一种数字时代的自觉，以及重获关注力的主导权——意识觉醒是改变的开始，手机黑屏的瞬间，也是专注力满格的时刻。我们或许无法完全逃离数字宇宙，但至少可以做一个裁夺自我专注、时而在真实的星穹下奔跑的人。`
      }
    ],
    tags: ["王源", "散养", "数字时代", "自我觉醒", "在星穹下狂奔"]
  },

  
];

export function getArticles(): Article[] {
  return articlesData;
}

export function getArticleById(id: number): Article | undefined {
  return articlesData.find(article => article.id === id);
}