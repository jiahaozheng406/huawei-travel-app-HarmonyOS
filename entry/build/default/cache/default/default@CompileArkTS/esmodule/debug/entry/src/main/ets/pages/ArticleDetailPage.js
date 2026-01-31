import ArticleDetailViewModel from '@bundle:org.malred.TravelApplication/entry/ets/viewmodel/ArticleDetailViewModel';
class ArticleDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.swiper_controller = new SwiperController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.swiper_controller !== undefined) {
            this.swiper_controller = params.swiper_controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.width('100%');
            Scroll.height('100%');
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 轮播
            Swiper.create(this.swiper_controller);
            // 轮播
            Swiper.autoPlay(true);
            if (!isInitialRender) {
                // 轮播
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(img);
                    Image.height(160);
                    Image.width('100%');
                    Image.objectFit(ImageFit.Cover);
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, ArticleDetailViewModel.getSwiper(), forEachItemGenFunction, (img) => JSON.stringify(img.id), false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 轮播
        Swiper.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            Row.alignItems(VerticalAlign.Top);
            Row.height('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            RichText.create(`<!doctype html>
                <html lang="en">

                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>Document</title>
                </head>

                <!-- https://www.sohu.com/a/741462816_415724 -->
                <!-- 在这里插入css -->
                <link rel="preload"
                    href="https://g1.itc.cn/msfe-wapart-prod/300000000000/assets/css/default.main.main_article-d1cee2.css" as="style">

                <link href="https://g1.itc.cn/msfe-wapart-prod/300000000000/assets/css/default.main.main_article-d1cee2.css"
                    rel="stylesheet">

                <link rel="preload" href="https://g1.itc.cn/msfe-wapart-prod/300000000000/assets/css/main_article-2ebb87.css"
                    as="style">
                <link href="https://g1.itc.cn/msfe-wapart-prod/300000000000/assets/css/main_article-2ebb87.css" rel="stylesheet">

                <body>
                    <div class="left main">
                        <div data-spm="content">
                            <div class="text">
                                <div class="text-title">
                                    <h1>
                                        中国热门旅游城市推荐：厦门
                                        <span class="article-tag">
                                        </span>
                                    </h1>
                                    <div class="article-info">
                                        <span class="time" id="news-time" data-val="1701739813000">2025-10-19 09:30</span>
                                        <span data-role="original-link">
                                            来源:
                                            <a href="" target="_blank">NJUPT TRAVEL</a> </span>
                                        <div class="area"><span>发布于：</span><span>江苏省</span></div>
                                    </div>
                                </div>
                                <article class="article" id="mp-editor">
                                    <p data-role="original-title" style="display:none">原标题：中国热门旅游城市推荐：厦门</p>

                                    <p>厦门，位于福建省东南沿海的现代化国际港口风景旅游城市，是中国东南沿海重要的中心城市和著名侨乡。作为闽南金三角经济区的核心城市之一，厦门以其独特的地理位置和宜人的气候条件，成为国内外游客向往的旅游胜地。</p>

                                    <p>厦门拥有丰富的旅游资源，其中鼓浪屿作为世界文化遗产和首批国家5A级旅游景区，以其独特的万国建筑博览和音乐之岛的美誉吸引着无数游客。厦门大学被誉为"中国最美大学"，其独特的校园风光和浓厚的学术氛围令人流连忘返。南普陀寺的佛教文化、环岛路的滨海风光、曾厝垵的文创风情、集美学村的嘉庚建筑，共同构成了厦门多元的旅游景观。</p>

                                    <p>在美食方面，厦门以其地道的闽南特色小吃闻名遐迩：沙茶面的浓郁香醇、土笋冻的独特口感、海蛎煎的鲜美可口、花生汤的香甜绵密，还有姜母鸭、烧肉粽、鱼丸汤等特色美食，让游客在品味中感受厦门的饮食文化魅力。</p>

                                    <p>最新旅游资讯：厦门市政府近期推出"智慧旅游"服务平台，为游客提供一站式旅游服务。建议游客提前通过官方平台预约热门景点门票，避开旅游高峰时段。目前厦门正在举办国际海洋文化节，各大景区都推出了特色主题活动。</p>

                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="lrZM2CeEj0WTHFVM4IzFdozgt41VJtIq3Pn4n4Hj1hRxliQpxkfdlaROpWks2Y5e5+7vgyDxC4OGj4OV0AsbZSgViRC9Uxflx5Yk1AL/2IU=" />
                                    </p>
                                    <p>旅游贴士：最佳旅游时间为春秋季节，建议游玩3-5天。交通方面，厦门高崎国际机场和多个高铁站为游客提供便利的出行选择。住宿推荐选择思明区或湖里区，便于游览主要景点。</p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="2spwynf2q8FQc6HpYWnAe4zgt41VJtIq3Pn4n4Hj1hQm2SFvupBjDfak8YB14dOTo0wnz3me9Brh/QltU8tzWkl6F5PiTk3xWBWnQNXjOT8=" />
                                    </p>
                                    <p>特色体验推荐：除了常规景点游览，建议游客体验厦门的帆船出海、环岛路骑行、鼓浪屿音乐欣赏、曾厝垵美食探索等特色项目，深度感受这座海滨城市的独特魅力。</p>
                                    <p class="ql-align-center"><iframe width="500" height="300" scrolling="no" frameborder="0"
                                            border="0" allowfullscreen="true"
                                            src="//tv.sohu.com/s/sohuplayer/iplay.html?bid=499164317&amp;vars=%5B%5B%22showRecommend%22%2C0%5D%5D&amp;disablePlaylist=true&amp;mute=1&amp;autoplay=false"></iframe>
                                    </p>
                                    <p>到厦门六天五晚跟团游价格，一般所需的费用以及花费跟行程中的景点以及游玩时间和旅途中住宿、餐饮等的质量是挂钩的，具体方面因人而已，旅游费用主要是由门票+景区小交通+住宿+吃+用车+导游组成，具体来说是根据您游玩时间、游玩景点、景区内需另外付费的交通工具和吃住以及游玩方式决定的。
                                    </p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="QdNDsuFXQTGMjFQB08PVr4zgt41VJtIq3Pn4n4Hj1hTSrzZc1wO0IxjvtZT9Ef9aQ6zw1B2l967uUhBLujkBHrVH6mXj7CuV8heg/EGhi24=" />
                                    </p>
                                    <p>我上月底去厦门游玩是找的厦门当地品质游导游春姐姐给我们提供厦门旅游服务，她在我们去厦门旅游之前，就给我们把旅游路线，行程景区门票，酒店住宿，导游以及旅游用车等都的非常到位，我们这次的厦门旅游玩的非常开心舒心，厦门美丽的风景，导游春姐姐的周到服务，给我们留下很好的印象，去厦门旅游就找厦门导游春姐姐。
                                    </p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="RWugdBGFq+R/Aq+QnLPFVYzgt41VJtIq3Pn4n4Hj1hTMFq5dnK3MTpuZIAwC7dxjqRGImUL86Jwszkb4MKLfRSnjWAkIu+cDnAAaFQ9+5Pg=" />
                                    </p>
                                    <p>厦门旅游6天5晚游</p>
                                    <p>第1天、到达厦门高崎机场，导游春姐姐安排接机后入住酒店；</p>
                                    <p>第2天、前往游玩厦门大学外观，南普陀寺，后坐船前往鼓浪屿游玩，漫步幽静小巷、欣赏充满异国风情的南洋老别墅，风格迥异的欧式建筑和旧时的领事馆，晚上住厦门；</p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="4sWCR8BxipzMtuwIic3zeYzgt41VJtIq3Pn4n4Hj1hQvaoT9DN58Ncs80dyhtTpQZfAjrg+YWMYSs5t4VvLCAzu/GFMa7QUXvhLXXbT2bQM=" />
                                    </p>
                                    <p>第3天、前往厦门最美的环岛路，临海见海，绿化带、沙滩、岛礁、海景得到充分展示，参观胡里山炮台，然后前往曾厝垵游玩,这里是美食一条街，想吃就吃，想买就买，再乘车前往集美学村游玩，晚上住厦门；
                                    </p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="nCQ4wlY2xLpnfMGKx0HDCDpsjjZmHQCx5loKIHdoOr9TcGNOhIIH6kG47jH6E3u3pLxLCd8+M7T4/rdTnWZSBbWTzmKYPwYvFkmu9a+AK6w=" />
                                    </p>
                                    <p>第4天、前往南靖土楼云水谣景区，游览小桥流水人家云水谣古镇：游玩和贵楼和怀远楼，晚上返回厦门住厦门；</p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="qBA7y0VkO1UnTbZ6Q2C+k+N9bTv0hQdJL2PD4Zxsd3ovKP79i3zJ2Z/x2EHYM5zThdPRGbyb39vMegWNy4xmgbWTzmKYPwYvFkmu9a+AK6w=" />
                                    </p>
                                    <p>第5天、参加帆船出游一日游，晚上继续住厦门。</p>
                                    <p class="ql-align-center"><img max-width="600"
                                            data-src="nCQ4wlY2xLpnfMGKx0HDCLSEFj71q7nAEiqrtQ1d3v5b138etWBEwf9rtKbLv9eGO6UsSAcPGzsJFuhCjwTJfLWTzmKYPwYvFkmu9a+AK6w=" />
                                    </p>
                                    <p data-role="editor-name">责任编辑：<span></span></p>
                                </article>
                            </div>
                        </div>
                    </div>
                </body>

                </html>`);
            RichText.width('100%');
            RichText.height('100%');
            RichText.margin({ top: 16 });
            if (!isInitialRender) {
                RichText.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        RichText.pop();
        Row.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new ArticleDetailPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=ArticleDetailPage.js.map