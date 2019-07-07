(function () {
    // 下拉列表构造函数  创建下拉列表对象
    function DropDown(options) {
        this.father = options.father;
        this.menuList = options.menuList;
        this.direction = options.direction || 'y';
        this.dropDownWidth = options.dropDownWidth;
        this.colWidth = options.colWidth;
        
        this.init = function () {//初始化函数
            this.createDom();
            this.initStyle();
            this.bindEvent();
        }

    }
    DropDown.prototype.createDom = function () {
        var oDiv = $('<div class="my-dropdown"></div>'); //创建一个下拉列表的div
        this.menuList.forEach(function (menu) { //遍历menulist
            var oDl = $('<dl></dl>'); //创建一个dl标签 
            if (menu.title) {//如果menulist里面有title值的话
                $('<dt>' + menu.title+ '</dt>').appendTo(oDl); //把title值放到dl里面去
            }
            menu.items.forEach(function (item) { //遍历menulist里面的items
                $('<dd><a href="' + item.href + '">' + item.name + '</a></dd>').appendTo(oDl);
                //把每个item放在dd里面的a标签上再放到dl里面去
            });
            if (menu.itemWidth) { //如果给了itenWidth
                oDl.css({
                    width: menu.itemWidth,//就把这个值给dl的宽度
                });
            }
            if (menu.colWidth) { //如果给了colwidth
                $('dd', oDl).css({ //就给dd宽度
                    width: menu.colWidth,
                });
            }
            oDiv.append(oDl);//最后把dl放到下拉别表的div里面去
        });
        $(this.father).append(oDiv); //然后把下拉列表的div放到事件对象去
    }

    DropDown.prototype.initStyle = function () {
        $(this.father).css({ 
            position: 'relative', //给事件对象定位relative参照物
        }).find('.my-dropdown').css({ //找到事件对象的下拉列表div赋css
            width: this.dropDownWidth, 
            backgroundColor: '#fff',
            position: 'absolute',
            border: '1px solid #ccc',
            borderTop: 'none',
            display: 'none',
            left: 0,
            zIndex: 200,
        }).find('dl').css({ //找到下拉列表div里面的dl赋css
            padding: '10px 0 10px 15px',
            borderBottom: '1px solid #ccc',
            overflow: 'hidden',
        }).find('dt').css({ //找到下拉列表div里面的dt赋css
            fontWeight: 'bold',
        }).end().find('dd').css({ //找到下拉列表div里面的dd赋css
            width: this.colWidth,
            float: 'left',
            whiteSpace: 'nowrap'
        });
        if (this.direction == 'x') { //如果事件对象里面的direction值为y
            $('.my-dropdown', this.father).css({ //修改他的下拉列表css属性
                right: -73,
                left: 'auto',
                padding: '15px 0'
            }).find('dl').css({ //再修改下拉列表div里面的dl的css属性
                float: 'left',
                borderRight: '1px solid #ccc',
                borderBottom: 'none'
            });
        }

    }
    DropDown.prototype.bindEvent = function () { //绑定事件函数
        $('.my-dropdown dl dd', this.father).hover(function () { //事件对象的my-dropdown dl dd 鼠标移入后
            //console.log($(this).css('color')) 
            this.color = $(this).css('color');//把之前字体颜色给到color
            $('a', this).css({ //a标签里面的css
                color: 'red',
            })
        }, function () { //鼠标一处的处理函数
            $('a', this).css({ //a标签里面的css
                color: this.color, //把之前保持到color到颜色还回来
            })
        });
        $(this.father).hover(function () { //事件对象的鼠标移进处理函数
            $(this).css({ //事件对象css
                backgroundColor: '#fff', //背景颜色
            })
            $('.my-dropdown', this).show(); //下拉列表出来
        }, function() { //鼠标移出的处理函数
            $(this).css({ //事件对象css
                backgroundColor: 'transparent', //背景颜色透明色
            })
            $('.my-dropdown', this).hide(); //下拉列表消失
        })
    }


    $.fn.extend({
        addDropdown: function (options) {
            // 保存下拉列表添加到的位置
            options.father = this;
            // 创建一个下拉列表对象
            var obj = new DropDown(options);
            obj.init();
        }
    })
} ())