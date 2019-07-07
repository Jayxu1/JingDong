$('#myJD').addDropdown({
    // 下拉列表中每一列的宽度
    colWidth: 126,
    // 下拉列表总宽度
    dropDownWidth: 280,
    direction: 'y',
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: 'Waitting List',
        }, {
            href: '#',
            name: 'Message',
        }, {
            href: '#',
            name: 'Return',
        }, {
            href: '#',
            name: 'Answer',
        }, {
            href: '#',
            name: 'Discount',
        }, {
            href: '#',
            name: 'My wish list',
        }
        ],
    }, {
        title: '',
        items: [{
            href: '#',
            name: 'My JingDong',
        }, {
            href: '#',
            name: 'My Discount',
        }, {
            href: '#',
            name: 'My List',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    dropDownWidth: 140,
    colWidth: 100,
    menuList: [{
        title: '',
        items: [{
            href: '#',
            name: 'Company Shop'
        }, {
            href: '#',
            name: 'Commercial place'
        }, {
            href: '#',
            name: 'Industrial products'
        }, {
            href: '#',
            name: 'Gift Card'
        }]
    }]
});


$('#service').addDropdown({
    title: 'Customer Service',
    colWidth: 70,
    dropDownWidth: 170,
    menuList: [{
        title: 'Customer',
        items: [{
            name: 'Help Center',
            href: ''
        }, {
            name: 'After Sale',
            href: ''
        }, {
            name: 'Onlie',
            href: '',
        }, {
            name: 'Suggestions',
            href: ''
        }, {
            name: 'Phone',
            href: ''
        }, {
            name: 'Servicemail',
            href: ''
        }, {
            name: 'Financial',
            href: ''
        }, {
            name: 'Global Service'
        }]
    }, {
        title: 'Merchant',
        items: [{
            name: 'Cooperative'
        }, {
            name: 'Learn'
        }, {
            name: 'Merchant background'
        }]
    }]
});

$('#bar-navs').addDropdown({
    direction: 'x',
    dropDownWidth: 1188,
    menuList: [{
        title: 'Section1',
        itemWidth: 340,
        colWidth: 85,
        items: [{
            name: 'example1'
        }, {
            name: 'example2'
        }, {
            name: 'example3'
        }, {
            name: 'example4'
        }, {
            name: 'example5'
        }, {
            name: 'example6'
        }, {
            name: 'example7'
        }, {
            name: 'example8'
        }, {
            name: 'example9'
        }, {
            name: 'example10'
        }, {
            name: 'example11'
        }, {
            name: 'example12'
        }, {
            name: 'example13'
        }, {
            name: 'example14'
        }, {
            name: 'example15'
        }, {
            name: 'example16'
        }, {
            name: 'example17'
        }, {
            name: 'example18'
        }]
    }, {
        title: 'Section2',
        itemWidth: 270,
        colWidth: 85,
        items: [{
            name: 'example1'
        }, {
            name: 'example2'
        }, {
            name: 'example3'
        }, {
            name: 'example4'
        }, {
            name: 'example5'
        }, {
            name: 'example6'
        }, {
            name: 'example7'
        }, {
            name: 'example8'
        }, {
            name: 'example9'
        }, {
            name: 'example10'
        }, {
            name: 'example11'
        }, {
            name: 'example12'
        }, {
            name: 'example13'
        }, {
            name: 'example14'
        }]
    },{
        title: 'Section3',
        itemWidth: 270,
        colWidth: 85,
        items: [{
            name: 'example1'
        }, {
            name: 'example2'
        }, {
            name: 'example3'
        }, {
            name: 'example4'
        }, {
            name: 'example5'
        }, {
            name: 'example6'
        }, {
            name: 'example7'
        }, {
            name: 'example8'
        }, {
            name: 'example9'
        }, {
            name: 'example10'
        }, {
            name: 'example11'
        }, {
            name: 'example12'
        }, {
            name: 'example13'
        }, {
            name: 'example14'
        },]
    }]
});

$('#position').addDropdown({
    // 下拉列表中每一列的宽度
    // 下拉列表总宽度
    dropDownWidth: 300,
    direction: 'y',
    menuList: [{
        colWidth: 55,
        title: "",
        items: [{
            href: '#',
            name: 'China',
        }, {
            href: '#',
            name: 'USA',
        }, {
            href: '#',
            name: 'Japan',
        }, {
            href: '#',
            name: 'India',
        }, {
            href: '#',
            name: 'Australia',
        }, {
            href: '#',
            name: 'Brazil',
        },{
            href: '#',
            name: 'Canada',
        }, {
            href: '#',
            name: 'Russia.',
        }, {
            href: '#',
            name: 'Algeria',
        }, {
            href: '#',
            name: 'France',
        }, {
            href: '#',
            name: 'Yemen',
        }, {
            href: '#',
            name: 'South Africa',
        }, {
            href: '#',
            name: 'Colombia',
        }, {
            href: '#',
            name: ' Mexico',
        }, {
            href: '#',
            name: ' Kazakhstan',
        }, {
            href: '#',
            name: ' Indonesia',
        }, {
            href: '#',
            name: 'Vietnam',
        }, {
            href: '#',
            name: 'Malaysia',
        }, {
            href: '#',
            name: 'Korea',
        }, {
            href: '#',
            name: 'Dubai',
        }, {
            href: '#',
            name: 'El Guado',
        }, {
            href: '#',
            name: 'UK',
        }
        ],
    }, {
        itemWidth: 300,
        colWidth: 300,
        title: '',
        items: [{
            href: '#',
            name: 'Asian',
        }, {
            href: '#',
            name: 'Global',
        }
        ],
    }]
});

$('#swiper').swiper({
    imgList: ['https://i.alicdn.com/img/tfs/TB1RrepeW5s3KVjSZFNXXcD3FXa-990-400.jpg_q80.jpg','https://i.alicdn.com/img/tfs/TB18Gula3FY.1VjSZFnXXcFHXXa-990-400.jpg','https://i.alicdn.com/img/tfs/TB1VA8heoCF3KVjSZJnXXbnHFXa-990-400.jpg','https://i.alicdn.com/img/tfs/TB14oljeCWD3KVjSZSgXXcCxVXa-990-400.jpg'],
    animateType : 'animate',
    changeBtn : true,
    showPointBtn : true,
    isAuto : true,
})

$('#swiper1').swiper({
    imgList: ['https://cdn.yamibuy.net/mkpl/d346c08442854a74661a0672da812920_1000x480.jpeg','https://cdn.yamibuy.net/mkpl/96fcb8f4ddfc84585f22cc1aa9a839e3_1000x480.png','https://cdn.yamibuy.net/mkpl/7e64b69d48e838943b7b07cd148f9531_1000x480.jpeg','https://cdn.yamibuy.net/mkpl/50df7c0368e523b3483fb68360f15922_1000x480.png','https://cdn.yamibuy.net/mkpl/050fd8a49559774457788c503a56d7f6_750x360.png'],
    animateType : 'animate',
    imgWidth: 200,
    shouImgWidth: 800,
    changeBtn:true,
    //isAuto : true,
})

$('#swiper2').swiper({
    imgList: ['./pic/11.jpg','./pic/22.jpg','./pic/33.jpg'],
    animateType : 'animate',
    changeBtn : false,
    showPointBtn : true,
    isAuto : true,
})

var menuList = [{
    title: ['Home Appliances'],
    content: {
        tabs: ['Laptops', 'Routers', 'Memory Cards', 'USB Flash Drives'],
        subs: [{
            title: 'Large Appliances',
            items: ["Refrigerators", "Laundry Dryers", "TV", "Compact Refrigerators", "Tankless Water Heaters", "Air Conditioners"]
        }, {
            title: 'Kitchen Appliances',
            items: ["small Appliances", "Electric Kettles", "Food processors", "More", "Rice Cookers"]
        }, {
            title: 'Health Care',
            items: ["Electric Shavers", "Hair Dryers", "Dental Oral Care", "Massagers", "Digital Weighing Scales"]
        }]
    }
}, {
    title: ['Phones & Accessories'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
}, {
    title: ['Consumer Electronics'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Computer & Office'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Wigs & Hair Extensions'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ["Women's Clothing"],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ["Men's Clothing"],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Sports & Outdoors'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Home & Garden'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Health & Beauty'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Toys, Kids & Babies'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Shoes & Bags'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Jewelry & Watches'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['Automotive & Motorcycles'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['All CATEGORIES'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['title1', 'tilee2', 'title3'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['title1', 'tilee2', 'title3'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['title1', 'tilee2', 'title3'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
},{
    title: ['title1', 'tilee2', 'title3'],
    content: {
        tabs: ['tab1'],
        subs: [{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        },{
            title: 'subtitle1',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }, {
            title: 'subtitle2',
            items: ["example1", "xample2", "xample3", "xample14", "xample5", "xample6", "xample7"]
        }]
    }
}];


//左侧导航条功能
function renderLeftMenuList(){
    menuList.forEach(function(menu){
        var oLi = $('<li></li>');
        menu.title.forEach(function(title,index){
            $('<a href = "#">' +title+ '</a>').appendTo(oLi);
            if(index != menu.title.length -1){
                $('<span>/</span>').appendTo(oLi);
            }
        });
        $('#menu-list').append(oLi);
    })
}

var hideTimer = null;
function leftMenuEvent(){
    $('#menu-list').on('mouseenter','li',function(){
        clearTimeout(hideTimer);
        var index = $(this).index();
        renderLeftMenuContent(menuList[index].content);
        $('#menu-content').show();
    }).on('mouseleave','li',function(){
        hideTimer = setTimeout(function(){
        $('#menu-content').hide();
        },500);
    });
    $('#menu-content').on('mouseenter',function(){
        clearTimeout(hideTimer);
    }).on('mouseleave',function(){
        hideTimer = setTimeout(function(){
             $('#menu-content').hide();
        },1);
    });
}

function renderLeftMenuContent(data){
    $('#menu-content').empty();
    var oUl = $('<ul class = "tabs"></ul>');
    data.tabs.forEach(function(tab){
        $('<li></li>').text(tab).appendTo(oUl);
    });
    var oDiv = $('<div class = "item-content"></div>');
    data.subs.forEach(function(sub){
        var oDl = $('<dl></dl>');
        $('<dt></dt>').text(sub.title).appendTo(oDl);
        var oDd = $('<dd></dd>');
        sub.items.forEach(function(item){
            $('<a href = "#">' + item + '</a>').appendTo(oDd);
        });
        oDl.append(oDd).appendTo(oDiv);
    })
    $('#menu-content').append(oUl).append(oDiv);
}

renderLeftMenuList();
leftMenuEvent();

function serviceEvent() {
    $('.service-entry > ul').on('mouseenter','.item-frame', function () {
        $('.service').addClass('service-extend');
        $('.service-entry > ul > .active').removeClass('active');
        $(this).addClass('active');
        var msg = $(this).find('span').text();
        $('.service-content').text(msg);
    });
    $('.close').click(function () {
        $('.service-entry > ul > .active').removeClass('active');
        $('.service-extend').removeClass('service-extend');
        $('.service-entry > ul ').off('mouseenter');
        setTimeout(function () {
            serviceEvent();
        }, 500);
        //console.log( $('.service-entry > ul > .item-frame').on('mouseenter'))
    });
} 
serviceEvent();

//  https://suggest.taobao.com/sug?code=utf-8&q=a&callback=jsonp_89280702

function dealData(res){
    //console.log(res.result);

    var searchContent = $('.search-content');
    var oUl = $('<ul></ul>').appendTo(searchContent);
    res.result.forEach(function(Arr){
        //console.log(Arr[0]);
    $('<li><a href = "#">' + Arr[0]+ '</a></li>').appendTo(oUl);
    $('.search-content').css({
        width: 500,
        height: 300,
        zIndex: 300,
        overflow: 'hidden',
    }).find('ul').css({
       width: '100%',
        height: '300px', 
        //border : '1px solid red',
    }).find('li').css({
        color : 'black', 
        height: '28px',
        fontSize: '12px',
        //border : '1px solid yellow',
    })
    })

    $('.search-content').on('mouseenter',function(){
        clearTimeout(hideTimer);
    }).on('mouseleave',function(){
        hideTimer = setTimeout(function(){
             $('.search-content').hide();
        },1);
    });

}

function searchEvent(){
    $('#search-btn').click(function(){
        var val = $('#search-word').val();
        if(val){
            $.ajax({
                url: 'https://suggest.taobao.com/sug',
                type: 'get',
                data: {
                    code: 'utf-8',
                    q: val,
                    callback: 'dealData',
                },
                dataType: 'jsonp'
            })
        }
    });
    var ajaxTimer = null;
     $('#search-word').keyup(function(){
        var val = $('#search-word').val();
        clearTimeout(ajaxTimer);
        if(val){
            ajaxTimer = setTimeout(function(){
                $('#search-btn').trigger('click');
            },500);
            
        }
    })
}

searchEvent();






