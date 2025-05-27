const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2021-09-21', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.tangly1024.com' },
    { title: '访问文档中心获取更多帮助', url: 'https://docs.tangly1024.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '愿我如同虚空和大地',
  HEO_HERO_TITLE_2: '永远支持一切无边众生的生命',
  HEO_HERO_TITLE_1: '永远支持',
  HEO_HERO_TITLE_2: '一切无边众生的生命',
  HEO_HERO_TITLE_3: 'Dudjom Online.TOP',
  HEO_HERO_TITLE_4: '嘉贡',
  HEO_HERO_TITLE_5: '旦巴确吉坚措仁波切',
  
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '敦珠血传',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    'Dudjom Online',
    '文殊师利勇猛智',
    '普贤慧行亦复然',
    '我今回向诸善根',
    '随彼一切常修学',
    '三世诸佛所称叹',
    '如是最胜诸大愿',
    '我今回向诸善根',
    '为得普贤殊圣行'
  ],

  // 个人资料底部按钮
  HEO_INFO_CARD_URL1: 'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU3NzY4NTQ0Nw==&scene=124#wechat_redirect',
  HEO_INFO_CARD_ICON1: 'fa-brands fa-weixin',
  HEO_INFO_CARD_ICON2: 'fa-brands fa-youtube',
  HEO_INFO_CARD_URL3: '/about',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'CHAKRA',
      img_1: '/images/heo/CHAKRA.png',
      color_1: '#ffffff',
      title_2: 'CHATTRA',
      img_2: '/images/heo/CHATTRA.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'DHVAJA',
      img_1: '/images/heo/DHVAJA.png',
      color_1: '#ffffff',
      title_2: 'KALASHA',
      img_2: '/images/heo/KALASHA.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'PADMA',
      img_1: '/images/heo/PADMA.png',
      color_1: '#ffffff',
      title_2: 'SHANKHA',
      img_2: '/images/heo/SHANKHA.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'SHRIVATSA',
      img_1: '/images/heo/SHRIVATSA.png',
      color_1: '#ffffff',
      title_2: 'SURVANA MATSYA',
      img_2: '/images/heo/SURVANA MATSYA.png',
      color_2: '#ffffff'
    },
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '敦珠血传',
  HEO_SOCIAL_CARD_TITLE_2: '微信公众平台',
  HEO_SOCIAL_CARD_TITLE_3: '微信打开网址后，点击关注公众号',
  HEO_SOCIAL_CARD_URL: 'https://docs.tangly1024.com/article/how-to-question',

  // 底部统计面板文案
  HEO_POST_COUNT_TITLE: '文章数:',
  HEO_SITE_TIME_TITLE: '建站天数:',
  HEO_SITE_VISIT_TITLE: '访问量:',
  HEO_SITE_VISITOR_TITLE: '访客数:',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
